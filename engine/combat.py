"""
战斗引擎 - 回合制编程挑战战斗
"""
import time
from typing import Optional


class Enemy:
    """敌人NPC"""
    def __init__(self, name: str, hp: int, attack: int, 
                 description: str = "", taunt: str = ""):
        self.name = name
        self.hp = hp
        self.max_hp = hp
        self.attack = attack
        self.description = description
        self.taunt = taunt  # 挑衅台词
    
    def is_alive(self):
        return self.hp > 0


# 预定义敌人
ENEMIES = {
    "黑衣人": Enemy("黑衣人", 30, 10,
                  "蒙面黑衣人，身手敏捷。",
                  "识相的就乖乖交出东西！"),
    "小毛贼": Enemy("小毛贼", 20, 5,
                  "路边的小蟊贼，不值一提。",
                  "打劫！把银子留下！"),
    "铁掌帮弟子": Enemy("铁掌帮弟子", 40, 15,
                      "铁掌帮的普通弟子，掌力不弱。",
                      "铁掌帮办事，闲人闪开！"),
    "星宿派毒人": Enemy("星宿派毒人", 50, 20,
                      "中了蛊毒被控制的傀儡。",
                      "嘶嘶嘶……"),
    "欧阳克": Enemy("欧阳克", 80, 25,
                  "白驼山少主，风流成性。",
                  "小美人，跟我走吧。至于你——滚！"),
}


class CombatResult:
    """战斗结果"""
    def __init__(self):
        self.victory = False
        self.rounds = 0
        self.log = []         # 战斗日志
        self.exp_gained = 0
        self.silver_gained = 0


class Combat:
    """战斗系统"""
    
    def __init__(self, player, enemy: Enemy, problems: list):
        """
        Args:
            player: Character 对象
            enemy: Enemy 对象
            problems: 战斗用的编程题列表
        """
        self.player = player
        self.enemy = enemy
        self.problems = problems
        self.current_problem_idx = 0
        self.result = CombatResult()
    
    def get_current_problem(self):
        """获取当前题目"""
        if self.current_problem_idx < len(self.problems):
            return self.problems[self.current_problem_idx]
        return None
    
    def player_attack(self, code_correct: bool) -> str:
        """玩家攻击回合"""
        self.result.rounds += 1
        
        if code_correct:
            damage = self.player.strength + self.player.level * 5
            self.enemy.hp -= damage
            msg = f"⚔️ 你一招命中！造成 {damage} 点伤害！"
            self.result.log.append(msg)
            
            if not self.enemy.is_alive():
                self.result.victory = True
                msg += f"\n💀 {self.enemy.name} 被你击败了！"
                return msg
        else:
            msg = f"❌ 你的招式出了破绽……"
            self.result.log.append(msg)
        
        return msg
    
    def enemy_attack(self) -> str:
        """敌人攻击回合"""
        damage = self.enemy.attack
        died = self.player.take_damage(damage)
        msg = f"👊 {self.enemy.name} 攻击了你！造成 {damage} 点伤害！（剩余气血：{self.player.hp}/{self.player.max_hp}）"
        self.result.log.append(msg)
        
        if died:
            msg += "\n💀 你被击败了……（你的程序抛出了未捕获的异常 😵）"
        
        return msg
    
    def next_round(self):
        """进入下一轮"""
        self.current_problem_idx += 1
    
    def get_victory_rewards(self) -> dict:
        """获取胜利奖励"""
        if self.result.victory:
            base_exp = 30 + self.result.rounds * 20
            base_silver = 20 + self.result.rounds * 10
            self.result.exp_gained = base_exp
            self.result.silver_gained = base_silver
            return {"exp": base_exp, "silver": base_silver}
        return {"exp": 0, "silver": 0}
