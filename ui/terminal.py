"""
终端UI - 使用rich库美化显示
"""
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.text import Text
from rich.progress import Progress, BarColumn
from rich.layout import Layout
from rich.align import Align
from rich import box
import sys

console = Console()


def clear_screen():
    console.clear()


def print_title():
    """显示游戏标题"""
    title = Text()
    title.append("╔══════════════════════════════════════╗\n", style="bold red")
    title.append("║          🗡️  江 湖 行  🗡️            ║\n", style="bold yellow")
    title.append("║    Python 武侠学习 · 文字冒险游戏    ║\n", style="bold cyan")
    title.append("╚══════════════════════════════════════╝", style="bold red")
    console.print(Align.center(title))
    console.print()


def print_narration(text: str):
    """显示剧情旁白"""
    console.print(Panel(text, border_style="dim", title="📖 剧情", padding=(1, 2)))


def print_dialogue(speaker: str, text: str, style: str = "green"):
    """显示NPC对话"""
    console.print(f"[bold {style}]{speaker}[/]: 「{text}」")


def print_combat_header(enemy_name: str, enemy_hp: int, enemy_max_hp: int,
                         player_hp: int, player_max_hp: int):
    """显示战斗状态栏"""
    table = Table(show_header=False, box=box.SIMPLE)
    table.add_column(justify="left")
    table.add_column(justify="right")
    
    # HP bar
    def hp_bar(current, maximum, length=20):
        filled = int(current / maximum * length)
        return f"[bold red]{'█' * filled}[/]{'░' * (length - filled)} {current}/{maximum}"
    
    table.add_row(f"⚔️ {enemy_name}", hp_bar(enemy_hp, enemy_max_hp))
    table.add_row(f"🧑 你", hp_bar(player_hp, player_max_hp))
    
    console.print(Panel(table, title="⚔️ 战斗", border_style="red"))


def print_problem(problem):
    """显示编程题目"""
    content = Text()
    content.append(f"📜 {problem.title}\n\n", style="bold yellow")
    content.append(problem.description, style="white")
    content.append(f"\n\n💡 知识点：{problem.knowledge}", style="dim cyan")
    content.append(f"    ⭐ 难度：{'★' * problem.difficulty}", style="dim yellow")
    
    console.print(Panel(content, title="编程挑战", border_style="cyan", padding=(1, 2)))


def print_test_results(results: dict):
    """显示测试结果"""
    all_passed = results["all_passed"]
    
    if all_passed:
        console.print(Panel(
            f"[bold green]✅ 全部通过！[/]\n通过 {results['pass_count']}/{results['total_count']} 个测试",
            border_style="green"
        ))
    else:
        lines = []
        for r in results["results"]:
            if r["passed"]:
                lines.append(f"  ✅ {r['display']}")
            else:
                lines.append(f"  ❌ {r['display']}")
                lines.append(f"     期望: {r['expected']}")
                lines.append(f"     实际: {r['actual']}")
                if r.get("error"):
                    lines.append(f"     错误: {r['error']}")
        
        console.print(Panel(
            f"通过 {results['pass_count']}/{results['total_count']}\n" + "\n".join(lines),
            title="测试结果",
            border_style="yellow" if not all_passed else "green"
        ))


def print_character_status(character):
    """显示角色状态"""
    table = Table(title=f"🧑 {character.name}", box=box.ROUNDED)
    table.add_column("属性", style="cyan")
    table.add_column("数值", style="white")
    
    table.add_row("等级", f"{character.get_level_name()} (Lv.{character.level})")
    table.add_row("经验", f"{character.exp} EXP")
    table.add_row("气血", f"{character.hp}/{character.max_hp}")
    table.add_row("内力", f"{character.mp}/{character.max_mp}")
    table.add_row("臂力", str(character.strength))
    table.add_row("身法", str(character.agility))
    table.add_row("根骨", str(character.constitution))
    table.add_row("悟性", str(character.wisdom))
    table.add_row("福缘", str(character.luck))
    table.add_row("银两", f"💰 {character.silver}")
    table.add_row("侠义值", f"{'+'if character.chivalry>=0 else ''}{character.chivalry}")
    table.add_row("信任度", str(character.trust))
    table.add_row("门派", character.faction)
    table.add_row("位置", character.location)
    
    console.print(table)
    
    # 已学武功
    if character.skills:
        skill_table = Table(title="已学武功", box=box.SIMPLE)
        skill_table.add_column("武功", style="yellow")
        skill_table.add_column("知识点", style="cyan")
        skill_table.add_column("熟练度", style="green")
        skill_table.add_column("境界", style="magenta")
        
        for s in character.skills:
            bar = '█' * (s.proficiency // 10) + '░' * (10 - s.proficiency // 10)
            skill_table.add_row(s.name, s.knowledge, bar, s.mastery)
        
        console.print(skill_table)


def print_inventory(character):
    """显示背包"""
    if not character.inventory:
        console.print("[dim]背包空空如也……[/dim]")
        return
    
    table = Table(title="🎒 背包", box=box.SIMPLE)
    table.add_column("物品", style="yellow")
    table.add_column("类型", style="cyan")
    table.add_column("数量", style="white")
    table.add_column("说明", style="dim")
    
    for item in character.inventory:
        table.add_row(item.name, item.item_type, str(item.quantity), item.description)
    
    console.print(table)


def print_reward(exp: int, silver: int, extras: str = ""):
    """显示奖励"""
    content = f"🎉 获得奖励！\n\n  📊 经验 +{exp}\n  💰 银两 +{silver}"
    if extras:
        content += f"\n  {extras}"
    console.print(Panel(content, border_style="yellow", title="奖励"))


def print_separator():
    console.print("[dim]─" * 50 + "[/dim]")


def get_input(prompt: str = "") -> str:
    """获取玩家输入"""
    return console.input(f"[bold green]{prompt}[/]").strip()


def get_code_input() -> str:
    """获取多行代码输入"""
    console.print("[dim]请输入代码（输入 END 结束）：[/dim]")
    lines = []
    while True:
        try:
            line = input()
            if line.strip() == "END":
                break
            lines.append(line)
        except EOFError:
            break
    return "\n".join(lines)


def get_choice(options: list) -> int:
    """显示选项并获取选择"""
    for i, opt in enumerate(options, 1):
        console.print(f"  [bold cyan]\\[{i}][/] {opt}")
    
    while True:
        choice = get_input("你的选择 > ")
        if choice.isdigit() and 1 <= int(choice) <= len(options):
            return int(choice)
        console.print("[dim]请输入有效数字[/dim]")
