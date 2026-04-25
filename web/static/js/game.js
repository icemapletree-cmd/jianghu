/**
 * 江湖行 Web 版 — 前端游戏逻辑
 */
const API = '';

let sessionId = null;
let player = null;
let currentProblem = null;
let prologueChoice = 0;

// === API Helper ===
async function api(path, data = null) {
    const opts = data ? {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    } : {};
    const res = await fetch(`${API}${path}`, opts);
    return res.json();
}

// === Screen Navigation ===
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showCreate() { showScreen('create-screen'); }
function showLoad() { toast('💾 封印玉简功能开发中...'); }

// === Prologue Selection ===
function selectPrologue(n) {
    prologueChoice = n;
    document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`[data-choice="${n}"]`).classList.add('selected');
    document.getElementById('start-btn').disabled = false;
}

// === Create Character ===
async function createCharacter() {
    const name = document.getElementById('char-name').value.trim() || '无名侠客';
    const bonuses = [{wisdom:2}, {luck:2}, {strength:2}, {agility:2}];
    
    const res = await api('/api/new_game', {
        name: name,
        bonus: bonuses[prologueChoice - 1]
    });
    
    if (res.sid) {
        sessionId = res.sid;
        player = res.player;
        updateUI(res);
        showScreen('game-screen');
        setNarration('夜雨破庙，你从昏迷中醒来。一张神秘纸条，一本编程心法……\n\n「以武悟码，以码证道。」\n\n你的江湖之旅开始了！');
    }
}

// === Update UI ===
function updateUI(data) {
    if (data.player) {
        player = data.player;
        const p = data.player;
        document.getElementById('char-name-display').textContent = p.name;
        document.getElementById('hp-text').textContent = `${p.hp}/${p.maxHp}`;
        document.getElementById('mp-text').textContent = `${p.mp}/${p.maxMp}`;
        document.getElementById('hp-bar').style.width = `${(p.hp/p.maxHp)*100}%`;
        document.getElementById('mp-bar').style.width = `${(p.mp/p.maxMp)*100}%`;
        document.getElementById('level').textContent = p.level;
        document.getElementById('level-name').textContent = p.levelName;
        document.getElementById('silver').textContent = p.silver;
        document.getElementById('exp').textContent = p.exp;
        document.getElementById('location').textContent = p.location;
    }
    if (data.chapter) {
        document.getElementById('chapter-info').textContent = 
            `第${data.chapter.id}章：${data.chapter.title}`;
    }
}

// === Narration ===
function setNarration(text) {
    const el = document.getElementById('narration-text');
    el.textContent = '';
    el.classList.add('fade-in');
    // 逐字显示
    let i = 0;
    function type() {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            setTimeout(type, 20);
        }
    }
    type();
}

function clearNarration() {
    document.getElementById('narration-text').textContent = '';
}

// === Actions ===
async function doTravel() {
    if (!sessionId) return;
    const res = await api(`/api/${sessionId}/destinations`);
    const area = document.getElementById('dynamic-actions');
    
    let html = '<h3 style="color:var(--gold);margin-bottom:10px">🗺️ 选择目的地</h3><div class="action-grid">';
    for (const d of res.destinations) {
        const label = d.region ? `${d.name}（${d.region}）` : d.name;
        html += `<button class="btn action-btn" onclick="travelTo('${d.name}')">${label}</button>`;
    }
    html += `<button class="btn" onclick="cancelAction()">返回</button></div>`;
    area.innerHTML = html;
}

async function travelTo(dest) {
    const res = await api(`/api/${sessionId}/travel`, {destination: dest});
    updateUI(res);
    setNarration(res.narration);
    cancelAction();
    if (res.event) {
        setTimeout(() => {
            setNarration(res.event.desc || res.event.description);
            if (res.event.enemy) toast(`⚔️ 遭遇强敌：${res.event.enemy}！`);
        }, 2000);
    }
}

async function doTalk() {
    if (!sessionId) return;
    const res = await api(`/api/${sessionId}/npcs`);
    const area = document.getElementById('dynamic-actions');
    
    if (!res.npcs || res.npcs.length === 0) {
        setNarration('此处无人可交谈……');
        return;
    }
    
    let html = '<h3 style="color:var(--gold);margin-bottom:10px">💬 选择对话对象</h3><div class="action-grid">';
    for (const n of res.npcs) {
        html += `<button class="btn action-btn" onclick="talkTo('${n.name}')">${n.name}<br><small>${n.title}</small></button>`;
    }
    html += `<button class="btn" onclick="cancelAction()">返回</button></div>`;
    area.innerHTML = html;
}

async function talkTo(name) {
    const res = await api(`/api/${sessionId}/talk`, {npc: name});
    setNarration(`「${res.greeting}」\n\n${res.desc}`);
    updateUI(res);
    
    const area = document.getElementById('dynamic-actions');
    let html = '';
    if (res.dialogues && res.dialogues.length > 0) {
        html = '<div class="action-grid" style="grid-template-columns:1fr">';
        for (const d of res.dialogues) {
            html += `<button class="btn" onclick="playDialogue('${name}','${d.id}')">💬 ${d.preview}</button>`;
        }
        html += `<button class="btn" onclick="cancelAction()">返回</button></div>`;
    } else {
        html = '<button class="btn" onclick="cancelAction()">返回</button>';
    }
    area.innerHTML = html;
}

async function playDialogue(npc, dlgId) {
    const res = await api(`/api/${sessionId}/dialogue`, {npc: npc, dialogue_id: dlgId});
    if (res.lines) {
        let text = '';
        for (const l of res.lines) {
            text += `${l.speaker}：「${l.text}」\n\n`;
        }
        setNarration(text);
    }
    updateUI(res);
    setTimeout(() => cancelAction(), 1000);
}

async function doPractice() {
    if (!sessionId) return;
    const area = document.getElementById('dynamic-actions');
    let html = '<h3 style="color:var(--gold);margin-bottom:10px">⚔️ 选择修炼难度</h3><div class="action-grid">';
    html += `<button class="btn action-btn" onclick="showProblems('basics')">📖 基础武功</button>`;
    html += `<button class="btn action-btn" onclick="showProblems('intermediate')">⚡ 进阶武学</button>`;
    html += `<button class="btn action-btn" onclick="showProblems('advanced')">🔥 高级绝学</button>`;
    html += `<button class="btn" onclick="cancelAction()">返回</button></div>`;
    area.innerHTML = html;
}

async function showProblems(cat) {
    const res = await api(`/api/${sessionId}/problems?category=${cat}`);
    const area = document.getElementById('dynamic-actions');
    
    let html = `<h3 style="color:var(--gold);margin-bottom:10px">${cat === 'basics' ? '📖 基础武功' : cat === 'intermediate' ? '⚡ 进阶武学' : '🔥 高级绝学'}</h3>`;
    html += '<div style="max-height:300px;overflow-y:auto">';
    for (const p of res.problems) {
        const icon = p.learned ? '✅' : '📖';
        html += `<button class="btn" style="display:block;margin:6px 0;text-align:left;width:100%" onclick="loadProblem('${p.id}')">${icon} ${p.title}（${p.knowledge}）</button>`;
    }
    html += `<button class="btn" onclick="doPractice()">返回</button></div>`;
    area.innerHTML = html;
}

async function loadProblem(pid) {
    const res = await api(`/api/${sessionId}/problem/${pid}`);
    currentProblem = res;
    
    document.getElementById('problem-info').style.display = 'block';
    document.getElementById('problem-title').textContent = `📜 ${res.title}`;
    document.getElementById('problem-desc').textContent = res.description;
    document.getElementById('code-editor').value = res.template || '# 请在下方编写代码\n';
    document.getElementById('hint-btn').style.display = 'inline-block';
    document.getElementById('output-area').style.display = 'none';
    
    if (res.story) {
        setNarration(res.story);
    }
    
    cancelAction();
    toast(`📜 开始修炼：${res.title}`);
}

function showHint() {
    if (currentProblem) {
        toast(`💡 ${currentProblem.hint}`);
    }
}

function clearEditor() {
    document.getElementById('code-editor').value = '';
    document.getElementById('output-area').style.display = 'none';
}

async function submitCode() {
    if (!sessionId || !currentProblem) {
        toast('⚠️ 请先选择一道题');
        return;
    }
    
    const code = document.getElementById('code-editor').value;
    const res = await api(`/api/${sessionId}/submit`, {
        problem_id: currentProblem.id,
        code: code
    });
    
    const outputArea = document.getElementById('output-area');
    const outputText = document.getElementById('output-text');
    outputArea.style.display = 'block';
    
    if (res.passed) {
        outputText.innerHTML = `<span style="color:#52b788">✅ 全部通过！\n📊 经验 +${res.exp}  💰 银两 +${res.silver}</span>`;
        if (res.leveled) outputText.innerHTML += '\n🎉 升级了！';
        if (res.comment) outputText.innerHTML += `\n${res.comment}`;
        updateUI(res);
    } else {
        let text = `<span style="color:#e94560">❌ 未通过</span>\n`;
        for (const r of res.results) {
            const icon = r.passed ? '✅' : '❌';
            text += `${icon} ${r.display}\n`;
            if (!r.passed) text += `   期望: ${r.expected}\n   实际: ${r.actual}\n`;
        }
        outputText.innerHTML = text;
        document.querySelector('.narration-area').classList.add('shake');
        setTimeout(() => document.querySelector('.narration-area').classList.remove('shake'), 300);
    }
}

async function doQuests() {
    if (!sessionId) return;
    const res = await api(`/api/${sessionId}/quests`);
    const area = document.getElementById('dynamic-actions');
    
    let html = '<h3 style="color:var(--gold)">📜 任务</h3>';
    
    if (res.active && res.active.length > 0) {
        html += '<p style="color:var(--jade);margin:8px 0">⚔️ 进行中：</p>';
        for (const q of res.active) {
            html += `<div style="padding:6px;border-left:3px solid var(--jade);margin:4px 0;background:rgba(82,183,136,0.1);border-radius:4px">
                <strong>${q.title}</strong> <span style="color:var(--dim)">[${q.progress}]</span><br>
                <small>${q.desc}</small></div>`;
        }
    }
    
    if (res.available && res.available.length > 0) {
        html += '<p style="color:var(--gold);margin:8px 0">📋 可接取：</p>';
        for (const q of res.available) {
            html += `<button class="btn" style="margin:4px 0;text-align:left" onclick="startQuest('${q.id}')">${q.title}</button>`;
        }
    }
    
    html += `<p style="color:var(--dim);margin-top:8px">✅ 已完成 ${res.completed} 个任务</p>`;
    html += '<button class="btn" onclick="cancelAction()">返回</button>';
    area.innerHTML = html;
}

async function startQuest(qid) {
    const res = await api(`/api/${sessionId}/start_quest`, {quest_id: qid});
    if (res.started) {
        toast(`📜 接取任务：${res.title}`);
        doQuests(); // refresh
    }
}

async function doInventory() {
    if (!player) return;
    const area = document.getElementById('dynamic-actions');
    let html = '<h3 style="color:var(--gold)">🎒 背包</h3>';
    if (player.inventory && player.inventory.length > 0) {
        for (const i of player.inventory) {
            html += `<div style="padding:6px;border-left:3px solid var(--gold);margin:4px 0">${i.name} ×${i.qty} <small style="color:var(--dim)">[${i.type}]</small></div>`;
        }
    } else {
        html += '<p style="color:var(--dim)">背包空空如也……</p>';
    }
    html += '<button class="btn" style="margin-top:10px" onclick="cancelAction()">返回</button>';
    area.innerHTML = html;
}

async function doSave() {
    if (!sessionId) return;
    const res = await api(`/api/${sessionId}/save`);
    if (res.saved) toast('💾 封印玉简已保存！');
}

function cancelAction() {
    document.getElementById('dynamic-actions').innerHTML = '';
}

// === Toast ===
function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}
