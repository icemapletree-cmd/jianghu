"""
江湖行 Web 版 — Flask + SocketIO
武侠风格 Python 学习游戏
"""
import sys
import os
import json
import random
import uuid

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT_DIR)

from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO

from player.character import Character
from engine.story import StoryManager
from engine.quest_handler import QuestHandler
from engine.problems import load_problem, load_all_problems
from engine.combat import Combat, ENEMIES, Enemy
from sandbox.runner import run_test
from world.events import get_all_events
from world.npcs import get_npc_by_location, get_npc, NPCS
from world.map import get_location_info, get_available_destinations

try:
    from world.story_data import get_chapters, get_all_quests
    HAS_STORY = True
except ImportError:
    HAS_STORY = False

try:
    from world.map import get_connected_locations, get_travel_description
    HAS_MAP = True
except ImportError:
    HAS_MAP = False

EXTRA_ENEMIES = {
    "梅超风": Enemy("梅超风", 60, 18, "黑风双煞。", "嘿嘿嘿……"),
    "东方不败": Enemy("东方不败", 120, 35, "日月神教。", "唯快不破！"),
    "鳌拜": Enemy("鳌拜", 90, 28, "满洲勇士。", "谁敢战我！"),
    "金轮法王": Enemy("金轮法王", 100, 30, "蒙古国师。", "五轮齐出！"),
}

def _get_enemy(name):
    src = EXTRA_ENEMIES.get(name) or ENEMIES.get(name)
    if src:
        return Enemy(name, src.hp, src.attack, src.description, src.taunt)
    return Enemy(name, 40, 15, f"敌人：{name}", "来战！")

app = Flask(__name__,
            template_folder=os.path.join(os.path.dirname(__file__), 'templates'),
            static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'jianghu-secret'
socketio = SocketIO(app, cors_allowed_origins="*")

sessions = {}

def _sess(sid):
    if sid not in sessions:
        sessions[sid] = {'player': None, 'sm': StoryManager(), 'qh': None, 'combat': None}
    return sessions[sid]

def _p2a(p):
    if not p: return {}
    return {
        'name': p.name, 'level': p.level, 'levelName': p.get_level_name(),
        'hp': p.hp, 'maxHp': p.max_hp, 'mp': p.mp, 'maxMp': p.max_mp,
        'exp': p.exp, 'silver': p.silver, 'faction': p.faction, 'location': p.location,
        'str': p.strength, 'agi': p.agility, 'wis': p.wisdom, 'chivalry': p.chivalry,
        'skills': [{'name': s.name, 'mastery': s.mastery} for s in p.skills],
        'inventory': [{'name': i.name, 'type': i.item_type, 'qty': i.quantity} for i in p.inventory],
    }

def _chinfo(sm):
    ch = sm.get_current_chapter()
    return {'id': ch.id, 'title': ch.title, 'desc': ch.description} if ch else {'id': 0, 'title': '序章', 'desc': ''}

def _locinfo(loc):
    info = get_location_info(loc)
    return {'name': loc, 'desc': info.get('description',''), 'region': info.get('region','未知')}

# === Routes ===

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/new_game', methods=['POST'])
def new_game():
    d = request.json or {}
    sid = str(uuid.uuid4())
    s = _sess(sid)
    name = d.get('name', '无名侠客')
    p = Character(name=name)
    bonus = d.get('bonus', {})
    for a, v in bonus.items(): setattr(p, a, getattr(p, a) + v)
    p.add_item("神秘纸条", "misc", "盖着残缺印章", 0)
    p.add_item("小册子", "misc", "编程入门心法", 0)
    s['player'] = p
    sm = s['sm']
    if HAS_STORY:
        sm.load_chapters(get_chapters())
        sm.load_quests(get_all_quests())
    sm.load_events(get_all_events())
    s['qh'] = QuestHandler(sm, p)
    if HAS_STORY and sm.chapters: sm.advance_chapter()
    return jsonify({'sid': sid, 'player': _p2a(p), 'chapter': _chinfo(sm)})

@app.route('/api/<sid>/status')
def status(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    return jsonify({'player': _p2a(p), 'chapter': _chinfo(s['sm']), 'location': _locinfo(p.location)})

@app.route('/api/<sid>/destinations')
def destinations(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    if HAS_MAP:
        dests = get_connected_locations(p.location)
    else:
        dests = get_available_destinations(p.location)
    r = []
    for d in dests:
        if isinstance(d, dict):
            r.append({'name': d.get('name',''), 'region': d.get('region','')})
        else:
            r.append({'name': str(d), 'region': ''})
    return jsonify({'destinations': r, 'current': p.location})

@app.route('/api/<sid>/travel', methods=['POST'])
def travel(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    dest = (request.json or {}).get('destination','')
    if not dest: return jsonify({'error': 'No destination'}), 400
    desc = f"你踏上了前往{dest}的旅途……"
    if HAS_MAP:
        td = get_travel_description(p.location, dest)
        if td: desc = td
    p.location = dest
    sm = s['sm']
    ev = sm.get_random_event("travel", p.level, dest)
    ev_data = None
    if ev:
        ev_data = {'name': ev.name, 'desc': ev.narration or ev.description, 'enemy': ev.combat_enemy or None}
    return jsonify({'narration': desc, 'player': _p2a(p), 'location': _locinfo(dest), 'event': ev_data})

@app.route('/api/<sid>/npcs')
def npcs(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    npcs = get_npc_by_location(p.location)
    r = []
    for n in npcs:
        r.append({'name': n.name, 'title': n.title, 'desc': n.description, 'greeting': n.greeting,
                   'hasShop': len(n.shop_items)>0,
                   'shop': [{'name': s.name, 'price': s.price, 'desc': s.description} for s in n.shop_items]})
    return jsonify({'npcs': r})

@app.route('/api/<sid>/talk', methods=['POST'])
def talk(sid):
    s = _sess(sid)
    p = s['player']
    sm = s['sm']
    npc_name = (request.json or {}).get('npc','')
    npc = get_npc(npc_name)
    if not npc: return jsonify({'error': 'NPC not found'}), 400
    sm.meet_npc(npc_name)
    dialogues = []
    for dlg in npc.dialogues:
        if dlg.id in sm.seen_dialogues and dlg.one_time: continue
        if p and p.level < dlg.requires_level: continue
        if dlg.requires_quest and dlg.requires_quest not in sm.completed_quests: continue
        dialogues.append({'id': dlg.id, 'preview': (dlg.lines[0].text[:50]+'...') if dlg.lines else '...'})
    return jsonify({'greeting': npc.greeting, 'desc': npc.description, 'dialogues': dialogues})

@app.route('/api/<sid>/dialogue', methods=['POST'])
def dialogue(sid):
    s = _sess(sid)
    p = s['player']
    sm = s['sm']
    d = request.json or {}
    npc_name, dlg_id = d.get('npc',''), d.get('dialogue_id','')
    npc = get_npc(npc_name)
    if not npc: return jsonify({'error': 'NPC not found'}), 400
    dlg = next((x for x in npc.dialogues if x.id == dlg_id), None)
    if not dlg: return jsonify({'error': 'Dialogue not found'}), 400
    lines = [{'speaker': l.speaker, 'text': l.text} for l in dlg.lines]
    choices = [{'text': c.text} for c in dlg.choices]
    sm.mark_dialogue_seen(dlg_id)
    if dlg.choices:
        cons = dlg.choices[0].consequence
        if cons and 'chivalry' in cons: p.chivalry += cons['chivalry']
    return jsonify({'lines': lines, 'choices': choices, 'player': _p2a(p)})

@app.route('/api/<sid>/problems')
def problems(sid):
    cat = request.args.get('category', 'basics')
    ps = load_all_problems(cat)
    s = _sess(sid)
    r = []
    for p in ps:
        learned = any(sk.name == p.title for sk in (s['player'].skills if s['player'] else []))
        r.append({'id': p.id, 'title': p.title, 'knowledge': p.knowledge, 'difficulty': p.difficulty, 'learned': learned})
    return jsonify({'problems': r, 'category': cat})

@app.route('/api/<sid>/problem/<pid>')
def problem(sid, pid):
    p = load_problem(pid)
    if not p: return jsonify({'error': 'Not found'}), 404
    return jsonify({'id': p.id, 'title': p.title, 'description': p.description, 'template': p.template,
                    'hint': p.hint, 'knowledge': p.knowledge, 'story': p.story, 'npc': p.npc})

@app.route('/api/<sid>/submit', methods=['POST'])
def submit(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    d = request.json or {}
    prob = load_problem(d.get('problem_id',''))
    if not prob: return jsonify({'error': 'Not found'}), 404
    code = d.get('code','')
    results = run_test(code, prob.tests)
    if results['all_passed']:
        exp, silver = prob.rewards.get('exp',50), prob.rewards.get('silver',20)
        lv = p.add_exp(exp)
        p.silver += silver
        p.learn_skill(prob.title, prob.knowledge)
        return jsonify({'passed': True, 'exp': exp, 'silver': silver, 'leveled': lv, 'player': _p2a(p)})
    else:
        tr = [{'passed': r['passed'], 'display': r['display'], 'expected': r['expected'], 'actual': r['actual']} for r in results['results']]
        return jsonify({'passed': False, 'results': tr})

@app.route('/api/<sid>/quests')
def quests(sid):
    s = _sess(sid)
    sm, qh, p = s['sm'], s['qh'], s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    active = [{'id': q.id, 'title': q.title, 'desc': q.description, 'type': q.quest_type.value,
               'progress': qh.get_quest_progress(q.id).get('progress','?/?') if qh else '?/?'} for q in sm.active_quests]
    avail = [{'id': q.id, 'title': q.title, 'desc': q.description, 'type': q.quest_type.value} for q in sm.available_quests]
    return jsonify({'chapter': _chinfo(sm), 'active': active, 'available': avail, 'completed': len(sm.completed_quests)})

@app.route('/api/<sid>/start_quest', methods=['POST'])
def start_quest(sid):
    s = _sess(sid)
    qh = s['qh']
    qid = (request.json or {}).get('quest_id','')
    if qh:
        q = qh.start_quest(qid)
        if q:
            st = qh.get_active_stage(qid)
            return jsonify({'started': True, 'title': q.title, 'stage': {'desc': st.description, 'type': st.type} if st else None})
    return jsonify({'started': False})

@app.route('/api/<sid>/save')
def save(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    sd = os.path.join(ROOT_DIR, 'save')
    os.makedirs(sd, exist_ok=True)
    sp = os.path.join(sd, f"{p.name}.json")
    data = {'character': p.to_dict(), 'story': s['sm'].to_dict(), 'qh': s['qh'].to_dict() if s['qh'] else {}}
    with open(sp, 'w', encoding='utf-8') as f: json.dump(data, f, ensure_ascii=False, indent=2)
    return jsonify({'saved': True})

@app.route('/api/<sid>/combat/start', methods=['POST'])
def combat_start(sid):
    s = _sess(sid)
    p = s['player']
    if not p: return jsonify({'error': 'No character'}), 400
    ename = (request.json or {}).get('enemy', '小毛贼')
    enemy = _get_enemy(ename)
    probs = load_all_problems("basics")
    cp = random.sample(probs, min(3, len(probs)))
    combat = Combat(p, enemy, cp)
    s['combat'] = combat
    return jsonify({'enemy': {'name': enemy.name, 'hp': enemy.hp, 'maxHp': enemy.max_hp, 'desc': enemy.description, 'taunt': enemy.taunt},
                    'playerHp': p.hp, 'playerMaxHp': p.max_hp})

@app.route('/api/<sid>/combat/attack', methods=['POST'])
def combat_attack(sid):
    s = _sess(sid)
    combat, p = s.get('combat'), s['player']
    if not combat or not p: return jsonify({'error': 'No combat'}), 400
    code = (request.json or {}).get('code','')
    prob = combat.get_current_problem()
    result = False
    if prob and code.strip():
        results = run_test(code, prob.tests)
        result = results['all_passed']
    pmsg = combat.player_attack(result)
    victory = combat.result.victory
    emsg = ""
    if not victory and combat.enemy.is_alive(): emsg = combat.enemy_attack()
    combat.next_round()
    rewards = None
    if victory:
        r = combat.get_victory_rewards()
        p.add_exp(r['exp']); p.silver += r['silver']; rewards = r
    if p.hp <= 0: p.hp = p.max_hp  # 复活
    return jsonify({'playerMsg': pmsg, 'enemyMsg': emsg, 'victory': victory,
                    'dead': p.hp <= 0, 'enemyHp': combat.enemy.hp, 'enemyMaxHp': combat.enemy.max_hp,
                    'playerHp': p.hp, 'playerMaxHp': p.max_hp, 'rewards': rewards, 'player': _p2a(p)})

if __name__ == '__main__':
    print("🗡️ 江湖行 Web 版启动中... http://localhost:5000")
    socketio.run(app, host='0.0.0.0', port=8080, debug=True, allow_unsafe_werkzeug=True)
