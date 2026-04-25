"""
江湖行 - Python 武侠学习游戏 主循环
"""
import sys
import os
import time
import json
import random

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from rich.panel import Panel
from ui.terminal import (console, clear_screen, print_title, print_narration,
    print_dialogue, print_combat_header, print_problem, print_test_results,
    print_character_status, print_inventory, print_reward, print_separator,
    get_input, get_choice)
from player.character import Character
from engine.problems import load_problem, load_all_problems
from engine.combat import Combat, ENEMIES, Enemy
from engine.story import StoryManager
from engine.quest_handler import QuestHandler
from world.events import get_all_events
from world.npcs import get_npc_by_location, get_npc, NPCS
from world.map import (get_location_info, get_available_destinations,
    REGIONS, SPECIAL_LOCATIONS)
from sandbox.runner import run_test

# 扩展敌人
EXTRA_ENEMIES = {
    "梅超风": Enemy("梅超风", 60, 18, "黑风双煞，九阴白骨爪传人。", "嘿嘿嘿……"),
    "东方不败": Enemy("东方不败", 120, 35, "日月神教教主，葵花宝典大成者。", "天下武功，唯快不破！"),
    "鳌拜": Enemy("鳌拜", 90, 28, "满洲第一勇士，力大无穷。", "哈哈哈！谁敢与我一战！"),
}


def _get_enemy(name: str) -> Enemy:
    """获取敌人对象（含扩展）"""
    if name in EXTRA_ENEMIES:
        return Enemy(name, EXTRA_ENEMIES[name].hp, EXTRA_ENEMIES[name].attack,
                     EXTRA_ENEMIES[name].description, EXTRA_ENEMIES[name].taunt)
    if name in ENEMIES:
        e = ENEMIES[name]
        return Enemy(name, e.hp, e.attack, e.description, e.taunt)
    return Enemy(name, 40, 15, f"敌人：{name}", "来战！")


# 尝试导入 story_data（可能还没创建）
try:
    from world.story_data import get_chapters, get_all_quests
    HAS_STORY_DATA = True
except ImportError:
    HAS_STORY_DATA = False

# 尝试导入地图扩展函数
try:
    from world.map import get_connected_locations, get_travel_description
    HAS_MAP_EXTRAS = True
except ImportError:
    HAS_MAP_EXTRAS = False


class Game:
    def __init__(self):
        self.player: Character = None
        self.story_mgr = StoryManager()
        self.quest_handler: QuestHandler = None
        self.state = "title"
        self.current_problem = None
        self.combat = None
        self.prologue_choice = 0
        self.prologue_bonus = {}

    def start(self):
        """启动游戏主状态机"""
        while True:
            if self.state == "title":
                self.show_title()
            elif self.state == "prologue":
                self.show_prologue()
            elif self.state == "create":
                self.create_character()
            elif self.state == "playing":
                self.game_loop()
            elif self.state == "coding":
                self.coding_challenge()
            elif self.state == "combat":
                self.combat_loop()
            elif self.state == "game_over":
                self.game_over()
                break

    # ==================== 标题画面 ====================
    def show_title(self):
        clear_screen()
        print_title()
        console.print()
        console.print("  [bold]1. 新游戏[/bold]")
        console.print("  [bold]2. 读取封印玉简[/bold]")
        console.print("  [bold]3. 退出[/bold]")
        console.print()
        choice = get_choice(["新游戏", "读取封印玉简", "退出"])
        if choice == 1:
            self.state = "prologue"
        elif choice == 2:
            self.load_game()
        else:
            console.print("[dim]江湖路远，有缘再见。[/dim]")
            sys.exit(0)

    # ==================== 序章 ====================
    def show_prologue(self):
        clear_screen()
        print_title()
        console.print()
        print_narration(
            "夜雨。破庙。\n\n"
            "你从昏迷中醒来，浑身湿透，头痛欲裂。\n"
            "身边只有一个破包袱，里面一张纸条和一个竹简。\n\n"
            "纸条上写着：\n"
            "    「此子根骨奇佳，若能以编程之道参悟武学，必成大器。」"
        )
        console.print()
        time.sleep(1)
        print_narration(
            "庙外传来马蹄声——黑衣人来了！\n\n"
            "    「搜！人一定在附近！」"
        )
        console.print()
        console.print("[bold yellow]你必须立刻做出选择——[/bold yellow]")
        console.print()
        choice = get_choice([
            "躲在佛像后面（学习 print 隐身咒语）",
            "假装是庙里的小和尚（学习 input 交互）",
            "抄起地上的木棍硬刚（学习变量和运算）",
            "从后窗逃跑（学习循环步法）",
        ])
        self.prologue_choice = choice
        self.prologue_bonus = [
            {"wisdom": 2}, {"luck": 2}, {"strength": 2}, {"agility": 2}
        ][choice - 1]
        follow_ups = {
            1: "你缩在佛像后面，翻开竹简。第一行：\n「内息运转，始于一声长叹。print() 是你的第一步。」",
            2: "你胡乱套上僧袍。黑衣人冲进来质问，你需要用代码回答……",
            3: "你抄起木棍，怒喝「来者何人！」黑衣人冷笑「找死的。」",
            4: "你翻身跳出后窗，雨夜中拼命奔跑——循环脚步，不断重复……",
        }
        print_narration(follow_ups[choice])
        console.print()
        get_input("按 Enter 继续...")
        self.state = "create"

    # ==================== 创建角色 ====================
    def create_character(self):
        clear_screen()
        console.print(Panel("📝 创建角色", border_style="cyan"))
        name = get_input("大侠怎么称呼？> ")
        if not name:
            name = "无名侠客"
        self.player = Character(name=name)
        for attr, val in self.prologue_bonus.items():
            setattr(self.player, attr, getattr(self.player, attr) + val)
        items = {
            1: ("破旧竹简", "misc", "编程入门心法", 10),
            2: ("假僧袍", "misc", "能骗过一般人", 5),
            3: ("木棍", "weapon", "聊胜于无", 15),
            4: ("草鞋", "misc", "跑路专用", 8),
        }
        item = items[self.prologue_choice]
        self.player.add_item(*item)
        self.player.add_item("神秘纸条", "misc", "盖着残缺印章", 0)
        self.player.add_item("小册子", "misc", "编程入门心法", 0)
        console.print()
        console.print(f"[bold green]角色创建完毕！[/bold green]")
        print_character_status(self.player)
        # 初始化剧情系统
        self._init_story()
        console.print()
        get_input("按 Enter 开始你的江湖之旅...")
        self.state = "playing"

    def _init_story(self):
        """初始化剧情系统"""
        if HAS_STORY_DATA:
            chapters = get_chapters()
            quests = get_all_quests()
            self.story_mgr.load_chapters(chapters)
            self.story_mgr.load_quests(quests)
        events = get_all_events()
        self.story_mgr.load_events(events)
        self.quest_handler = QuestHandler(self.story_mgr, self.player)
        # 第一章自动开启
        if HAS_STORY_DATA and self.story_mgr.chapters:
            self.story_mgr.advance_chapter()

    # ==================== 游戏主菜单 ====================
    def game_loop(self):
        clear_screen()
        self._show_location()
        options = [
            "🗺️ 游历江湖",
            "💬 与人交谈",
            "⚔️ 修炼武功（编程练习）",
            "📜 查看任务",
            "👤 角色信息",
            "🎒 背包",
            "💾 封印玉简（存档）",
            "🚪 退出游戏",
        ]
        console.print()
        choice = get_choice(options)
        actions = [
            self.travel_menu, self.talk_menu, self.practice_menu,
            self.quest_menu, self._show_status, self._show_inventory,
            self.save_game, self._quit,
        ]
        actions[choice - 1]()

    def _show_location(self):
        loc = get_location_info(self.player.location)
        console.print(Panel(
            f"📍 {self.player.location}\n{loc.get('description', '')}",
            border_style="blue",
            title=f"[{loc.get('region', '未知')}]"
        ))
        console.print(f"  [dim]{self.player.name} | "
                     f"{self.player.get_level_name()} | "
                     f"❤️ {self.player.hp}/{self.player.max_hp} | "
                     f"💰 {self.player.silver} | "
                     f"📊 {self.player.exp} EXP | "
                     f"📜 第{self.story_mgr.current_chapter}章[/dim]")

    def _show_status(self):
        print_character_status(self.player)
        get_input("按 Enter 返回...")

    def _show_inventory(self):
        print_inventory(self.player)
        get_input("按 Enter 返回...")

    def _quit(self):
        self.state = "game_over"

    # ==================== 旅行系统 ====================
    def travel_menu(self):
        clear_screen()
        console.print(Panel("🗺️ 游历江湖", border_style="green"))
        if HAS_MAP_EXTRAS:
            destinations = get_connected_locations(self.player.location)
        else:
            destinations = get_available_destinations(self.player.location)
        if not destinations:
            console.print("[yellow]此处无处可去……[/yellow]")
            get_input("按 Enter 返回...")
            return
        # 统一格式
        opts = []
        dest_names = []
        for d in destinations:
            if isinstance(d, dict):
                name = d.get("name", str(d))
                region = d.get("region", "")
                dtype = d.get("type", "")
                opts.append(f"{name}（{region}·{dtype}）")
                dest_names.append(name)
            else:
                opts.append(str(d))
                dest_names.append(str(d))
        opts.append("返回")
        console.print()
        choice = get_choice(opts)
        if choice > len(dest_names):
            return
        target = dest_names[choice - 1]
        # 旅途描述
        if HAS_MAP_EXTRAS:
            desc = get_travel_description(self.player.location, target)
            if desc:
                print_narration(desc)
        else:
            print_narration(f"你踏上了前往 {target} 的旅途……")
        console.print()
        # 移动
        self.player.location = target
        # 随机事件
        self._check_random_event("travel")
        # 检查任务推进
        self._check_quest_advance("travel", {"current_location": target})
        # 检查章节推进
        self._check_chapter_advance()
        console.print()
        get_input("按 Enter 继续...")

    # ==================== NPC对话系统 ====================
    def talk_menu(self):
        clear_screen()
        console.print(Panel("💬 与人交谈", border_style="cyan"))
        npcs = get_npc_by_location(self.player.location)
        if not npcs:
            console.print("[yellow]此处无人可交谈。[/yellow]")
            get_input("按 Enter 返回...")
            return
        opts = [f"{n.name}（{n.title}）" for n in npcs]
        opts.append("返回")
        console.print()
        choice = get_choice(opts)
        if choice > len(npcs):
            return
        npc = npcs[choice - 1]
        # 洪七公特殊：需要烧鸡
        if npc.name == "洪七公" and not self.player.has_item("叫花鸡") and not self.player.has_item("烧鸡"):
            console.print()
            print_dialogue("洪七公", "嗝——没带烧鸡来就别烦老叫花！去洛阳客栈买一只来！", "yellow")
            get_input("按 Enter 返回...")
            return
        console.print()
        print_dialogue(npc.name, npc.greeting, "green")
        console.print(f"  [dim]{npc.description}[/dim]")
        console.print()
        # 显示可用对话
        available = []
        for dlg in npc.dialogues:
            if dlg.id in self.story_mgr.seen_dialogues and dlg.one_time:
                continue
            if self.player.level < dlg.requires_level:
                continue
            if dlg.requires_quest and dlg.requires_quest not in self.story_mgr.completed_quests:
                continue
            if dlg.requires_faction and dlg.requires_faction != self.player.faction:
                continue
            available.append(dlg)
        if not available:
            console.print(f"[dim]{npc.name} 暂时没有更多话要说了。[/dim]")
            print_dialogue(npc.name, npc.farewell, "dim")
        else:
            dlg_opts = [f"💬 {d.lines[0].text[:30]}..." if d.lines else "💬 ..." for d in available]
            dlg_opts.append("返回")
            dlg_choice = get_choice(dlg_opts)
            if dlg_choice <= len(available):
                self._play_dialogue(npc, available[dlg_choice - 1])
        # 商店
        if npc.shop_items:
            console.print()
            console.print(f"[bold]{npc.name}的商店：[/bold]")
            for si in npc.shop_items:
                tag = f"（需好感{si.requires_affection}）" if si.requires_affection > 0 else ""
                console.print(f"  💰 {si.price}两 | {si.name} - {si.description}{tag}")
        get_input("按 Enter 返回...")

    def _play_dialogue(self, npc, dialogue):
        """播放一段对话"""
        console.print()
        for line in dialogue.lines:
            time.sleep(0.3)
            style = "green" if line.emotion == "happy" else "red" if line.emotion == "angry" else "cyan"
            print_dialogue(line.speaker, line.text, style)
        self.story_mgr.mark_dialogue_seen(dialogue.id)
        self.story_mgr.meet_npc(npc.name)
        # 处理选项
        if dialogue.choices:
            console.print()
            ch_opts = [c.text for c in dialogue.choices]
            ch = get_choice(ch_opts)
            chosen = dialogue.choices[ch - 1]
            cons = chosen.consequence
            if cons:
                if "chivalry" in cons:
                    self.player.chivalry += cons["chivalry"]
                if "affection" in cons:
                    aff = cons["affection"]
                    if isinstance(aff, dict):
                        for npc_name, amount in aff.items():
                            self.story_mgr.change_npc_affection(npc_name, amount)
                if "flag" in cons:
                    self.story_mgr.set_flag(cons["flag"])
        # 检查任务推进
        self._check_quest_advance("talk", {"talked_npc": npc.name})

    # ==================== 修炼系统 ====================
    def practice_menu(self):
        clear_screen()
        console.print(Panel("⚔️ 修炼武功", border_style="yellow"))
        console.print()
        cats = ["基础武功（basics）", "进阶武学（intermediate）", "高级绝学（advanced）", "返回"]
        choice = get_choice(cats)
        if choice == 4:
            return
        cat_map = {1: "basics", 2: "intermediate", 3: "advanced"}
        cat = cat_map[choice]
        problems = load_all_problems(cat)
        if not problems:
            console.print(f"[red]暂无{cat}题目[/red]")
            get_input("按 Enter 返回...")
            return
        opts = []
        for p in problems:
            learned = any(s.name == p.title for s in self.player.skills)
            tag = "✅" if learned else "📖"
            opts.append(f"{tag} {p.title}（{p.knowledge}）")
        opts.append("返回")
        console.print()
        ch = get_choice(opts)
        if ch > len(problems):
            return
        self.current_problem = problems[ch - 1]
        self.state = "coding"

    def coding_challenge(self):
        """编程挑战"""
        clear_screen()
        problem = self.current_problem
        print_problem(problem)
        if problem.npc:
            print_dialogue(problem.npc, problem.story if problem.story else "试试看吧！")
        console.print()
        console.print(Panel(problem.template, title="代码模板", border_style="dim"))
        console.print()
        while True:
            console.print("[dim]输入代码（END结束 | HINT提示 | SKIP跳过）[/dim]")
            lines = []
            while True:
                try:
                    line = input()
                except EOFError:
                    break
                if line.strip() == "END":
                    break
                elif line.strip() == "HINT":
                    console.print(f"[dim yellow]💡 {problem.hint}[/dim yellow]")
                    continue
                elif line.strip() == "SKIP":
                    self.state = "playing"
                    return
                lines.append(line)
            code = "\n".join(lines)
            if not code.strip():
                console.print("[red]代码不能为空！[/red]")
                continue
            console.print("\n[dim]运行中...[/dim]\n")
            results = run_test(code, problem.tests)
            print_test_results(results)
            if results["all_passed"]:
                exp = problem.rewards.get("exp", 50)
                silver = problem.rewards.get("silver", 20)
                leveled = self.player.add_exp(exp)
                self.player.silver += silver
                self.player.learn_skill(problem.title, problem.knowledge)
                console.print()
                print_reward(exp, silver)
                if leveled:
                    console.print(f"\n[bold yellow]🎉 升级！[{self.player.get_level_name()}]！[/bold yellow]")
                # 趣味评语
                if random.random() < 0.3:
                    console.print("[dim cyan]「比黄蓉还机灵！」[/dim cyan]")
                self._check_quest_advance("coding", {"coding_passed": True})
                self._check_chapter_advance()
                console.print()
                get_input("按 Enter 继续...")
                self.state = "playing"
                return
            else:
                console.print()
                if random.random() < 0.3:
                    console.print("[dim]「比郭靖还憨……再试试？」[/dim]")
                retry = get_input("重试？(y/n) > ")
                if retry.lower() != 'y':
                    self.state = "playing"
                    return

    # ==================== 战斗系统 ====================
    def _start_combat(self, enemy_name: str):
        """开始一场战斗"""
        enemy = _get_enemy(enemy_name)
        # 选择战斗题
        problems = load_all_problems("basics")
        if not problems:
            problems = []
        combat_problems = random.sample(problems, min(3, len(problems)))
        self.combat = Combat(self.player, enemy, combat_problems)
        self.state = "combat"

    def combat_loop(self):
        combat = self.combat
        problem = combat.get_current_problem()
        if problem is None:
            if combat.enemy.is_alive():
                console.print("[yellow]招式用完了，但敌人还在……[/yellow]")
                if combat.enemy.hp < combat.enemy.max_hp * 0.5:
                    self._finish_combat(True)
                else:
                    self._finish_combat(False)
            return
        clear_screen()
        print_combat_header(combat.enemy.name, combat.enemy.hp, combat.enemy.max_hp,
                           self.player.hp, self.player.max_hp)
        console.print()
        print_problem(problem)
        console.print()
        console.print("[dim]输入代码迎战（END结束 | HINT提示）[/dim]")
        lines = []
        while True:
            try:
                line = input()
            except EOFError:
                break
            if line.strip() == "END":
                break
            elif line.strip() == "HINT":
                console.print(f"[dim yellow]💡 {problem.hint}[/dim yellow]")
                continue
            lines.append(line)
        code = "\n".join(lines)
        if code.strip():
            results = run_test(code, problem.tests)
            print_test_results(results)
            result = results["all_passed"]
        else:
            result = False
        msg = combat.player_attack(result)
        console.print(f"\n{msg}")
        if combat.result.victory:
            self._finish_combat(True)
            return
        if combat.enemy.is_alive():
            time.sleep(0.5)
            msg = combat.enemy_attack()
            console.print(msg)
            if self.player.hp <= 0:
                self._finish_combat(False)
                return
        combat.next_round()
        console.print()
        get_input("按 Enter 下一回合...")

    def _finish_combat(self, victory: bool):
        console.print()
        if victory:
            rewards = self.combat.get_victory_rewards()
            self.player.add_exp(rewards["exp"])
            self.player.silver += rewards["silver"]
            print_narration(f"🎉 你击败了 {self.combat.enemy.name}！")
            print_reward(rewards["exp"], rewards["silver"])
            self._check_quest_advance("combat",
                {"combat_won": True, "combat_enemy": self.combat.enemy.name})
        else:
            print_narration(
                "你被击败了……\n\n"
                "「你的程序抛出了未捕获的异常 😵」\n\n"
                "你从地上爬起，拍掉尘土。江湖路还长。"
            )
            self.player.hp = self.player.max_hp
            self.player.mp = self.player.max_mp
        self._check_chapter_advance()
        console.print()
        get_input("按 Enter 继续...")
        self.state = "playing"

    # ==================== 任务系统 ====================
    def quest_menu(self):
        clear_screen()
        console.print(Panel("📜 查看任务", border_style="magenta"))
        # 当前章节
        ch = self.story_mgr.get_current_chapter()
        if ch:
            console.print(f"\n[bold cyan]📖 当前章节：第{ch.id}章 - {ch.title}[/bold cyan]")
            console.print(f"[dim]{ch.description}[/dim]")
        else:
            console.print("\n[dim]尚未进入任何章节。[/dim]")
        # 进行中的任务
        active = self.story_mgr.get_active_quests()
        if active:
            console.print("\n[bold]⚔️ 进行中：[/bold]")
            for q in active:
                prog = self.quest_handler.get_quest_progress(q.id) if self.quest_handler else {}
                stage_info = prog.get("progress", "?/?")
                console.print(f"  📌 [{q.quest_type.value}] {q.title} — {q.description[:30]}... ({stage_info})")
        # 可用任务
        available = self.story_mgr.get_available_quests()
        if available:
            console.print("\n[bold]📋 可接取：[/bold]")
            for q in available:
                console.print(f"  ○ [{q.quest_type.value}] {q.title} — {q.description[:40]}...")
            console.print()
            opts = [f"接取: {q.title}" for q in available]
            opts.append("返回")
            ch = get_choice(opts)
            if ch <= len(available):
                q = available[ch - 1]
                self.quest_handler.start_quest(q.id) if self.quest_handler else None
                console.print(f"[green]✅ 已接取任务：{q.title}[/green]")
        else:
            console.print("\n[dim]暂无可用任务。继续修炼吧！[/dim]")
        # 已完成
        if self.story_mgr.completed_quests:
            console.print(f"\n[dim]✅ 已完成 {len(self.story_mgr.completed_quests)} 个任务[/dim]")
        console.print()
        get_input("按 Enter 返回...")

    # ==================== 辅助方法 ====================
    def _check_random_event(self, trigger_type: str):
        """检查随机事件"""
        event = self.story_mgr.get_random_event(
            trigger_type, self.player.level, self.player.location)
        if event:
            console.print()
            print_narration(event.narration or event.description)
            console.print()
            if event.combat_enemy:
                print_dialogue("！", f"{event.name}——敌人来袭！", "red")
                self._start_combat(event.combat_enemy)
                return
            if event.choices:
                opts = [c.text for c in event.choices]
                ch = get_choice(opts)
                chosen = event.choices[ch - 1]
                cons = chosen.consequence
                if cons:
                    for k, v in cons.items():
                        if k == "chivalry":
                            self.player.chivalry += v
                        elif k == "silver":
                            self.player.silver += v
                        elif k == "exp":
                            self.player.add_exp(v)
                if event.rewards:
                    exp = event.rewards.get("exp", 0)
                    silver = event.rewards.get("silver", 0)
                    if exp or silver:
                        print_reward(exp, silver)
                        self.player.add_exp(exp)
                        self.player.silver += silver

    def _check_quest_advance(self, trigger_type: str, context: dict):
        """检查任务阶段推进"""
        if not self.quest_handler:
            return
        for q in list(self.story_mgr.active_quests):
            stage = self.quest_handler.get_active_stage(q.id)
            if stage and stage.type == trigger_type:
                if self.quest_handler.check_stage_completion(q.id, context):
                    next_stage = self.quest_handler.advance_quest(q.id, context)
                    console.print()
                    console.print(f"[bold green]📋 任务进度更新：{q.title}[/bold green]")
                    if next_stage:
                        if next_stage.narration_before:
                            print_narration(next_stage.narration_before)
                        console.print(f"[dim]下一阶段：{next_stage.description}[/dim]")
                    else:
                        console.print(f"[bold magenta]🎉 任务完成：{q.title}！[/bold magenta]")

    def _check_chapter_advance(self):
        """检查章节推进"""
        chapter = self.story_mgr.check_chapter_advance(self.player.level)
        if chapter:
            console.print()
            console.print(f"[bold yellow]═══════ 第{chapter.id}章：{chapter.title} ═══════[/bold yellow]")
            if chapter.opening_narration:
                print_narration(chapter.opening_narration)
            self.story_mgr.advance_chapter()
            console.print()
            console.print(f"[green]🔓 新任务已解锁！[/green]")

    # ==================== 存档系统 ====================
    def save_game(self):
        save_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "save")
        os.makedirs(save_dir, exist_ok=True)
        save_path = os.path.join(save_dir, f"{self.player.name}.json")
        data = {
            "character": self.player.to_dict(),
            "story": self.story_mgr.to_dict(),
            "quest_handler": self.quest_handler.to_dict() if self.quest_handler else {},
        }
        with open(save_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        console.print(f"[green]💾 封印玉简已保存！({save_path})[/green]")
        get_input("按 Enter 返回...")

    def load_game(self):
        save_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "save")
        if not os.path.exists(save_dir):
            console.print("[red]没有找到封印玉简[/red]")
            get_input("按 Enter 返回...")
            return
        saves = [f for f in os.listdir(save_dir) if f.endswith('.json')]
        if not saves:
            console.print("[red]没有找到封印玉简[/red]")
            get_input("按 Enter 返回...")
            return
        console.print("\n可用存档：")
        for i, s in enumerate(saves, 1):
            console.print(f"  [{i}] {s}")
        choice = get_choice([s.replace('.json', '') for s in saves])
        save_path = os.path.join(save_dir, saves[choice - 1])
        try:
            with open(save_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            self.player = Character.from_dict(data["character"])
            self.story_mgr = StoryManager.from_dict(data.get("story", {}))
            self.quest_handler = QuestHandler.from_dict(
                data.get("quest_handler", {}),
                self.story_mgr, self.player
            )
            # 重新加载章节数据
            if HAS_STORY_DATA:
                self.story_mgr.load_chapters(get_chapters())
                self.story_mgr.load_quests(get_all_quests())
            console.print(f"[green]📂 封印玉简已读取！欢迎回来，{self.player.name}[/green]")
            self.state = "playing"
        except Exception as e:
            console.print(f"[red]读档失败：{e}[/red]")
            get_input("按 Enter 返回...")

    def game_over(self):
        console.print()
        if self.player:
            print_narration(
                f"你的江湖之旅暂告一段落。\n\n"
                f"{self.player.name}，{self.player.get_level_name()}\n"
                f"已学武功：{len(self.player.skills)} 门\n"
                f"完成成就：{len(self.player.achievements)} 个\n\n"
                f"江湖路远，后会有期。"
            )
        console.print("\n[dim]再见，大侠。[/dim]")


def main():
    game = Game()
    game.start()


if __name__ == "__main__":
    main()
