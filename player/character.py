"""
角色系统 - 玩家角色属性、等级、声望、背包
"""
import json
import os
from dataclasses import dataclass, field, asdict
from typing import List, Dict, Optional


# 等级定义
LEVELS = [
    {"name": "江湖铜人", "exp": 0},
    {"name": "江湖铁人", "exp": 100},
    {"name": "三流高手", "exp": 300},
    {"name": "二流高手", "exp": 800},
    {"name": "一流高手", "exp": 2000},
    {"name": "绝顶高手", "exp": 5000},
    {"name": "宗师", "exp": 12000},
    {"name": "大宗师", "exp": 30000},
    {"name": "天下第一", "exp": 100000},
]


@dataclass
class Skill:
    """已学武功"""
    name: str
    knowledge: str       # 对应Python知识点
    proficiency: int = 0  # 熟练度 0-100
    mastery: str = "入门"  # 入门/小成/大成/圆满
    
    def to_dict(self):
        return asdict(self)
    
    @staticmethod
    def from_dict(d):
        return Skill(**d)


@dataclass
class Item:
    """背包物品"""
    name: str
    item_type: str  # weapon/armor/medicine/misc
    description: str = ""
    value: int = 0
    quantity: int = 1
    
    def to_dict(self):
        return asdict(self)
    
    @staticmethod
    def from_dict(d):
        return Item(**d)


@dataclass
class Character:
    """玩家角色"""
    name: str = "无名侠客"
    
    # 基础属性
    hp: int = 100
    max_hp: int = 100
    mp: int = 50
    max_mp: int = 50
    
    strength: int = 10    # 臂力
    agility: int = 10     # 身法
    constitution: int = 10 # 根骨
    wisdom: int = 10       # 悟性
    luck: int = 10         # 福缘
    
    # 经验与等级
    exp: int = 0
    level: int = 0
    attribute_points: int = 0
    
    # 声望
    chivalry: int = 0      # 侠义值
    trust: int = 0          # 信任度
    faction_contrib: int = 0 # 门派贡献
    
    # 经济
    silver: int = 100       # 银两
    insight: int = 0        # 悟性点
    
    # 门派
    faction: str = "无门无派"
    master: str = ""
    
    # 列表
    skills: list = field(default_factory=list)   # 已学武功
    inventory: list = field(default_factory=list) # 背包
    completed_quests: list = field(default_factory=list)  # 已完成任务
    achievements: list = field(default_factory=list)      # 成就
    
    # 当前位置
    location: str = "破庙"
    
    def get_level_name(self) -> str:
        return LEVELS[self.level]["name"] if self.level < len(LEVELS) else "超凡入圣"
    
    def check_level_up(self) -> bool:
        """检查是否升级，返回是否升级了"""
        leveled_up = False
        while self.level < len(LEVELS) - 1:
            next_level = self.level + 1
            if self.exp >= LEVELS[next_level]["exp"]:
                self.level = next_level
                self.attribute_points += 3
                # 升级恢复气血
                self.max_hp += 20
                self.max_mp += 10
                self.hp = self.max_hp
                self.mp = self.max_mp
                leveled_up = True
            else:
                break
        return leveled_up
    
    def add_exp(self, amount: int) -> bool:
        """增加经验值，返回是否升级"""
        self.exp += amount
        return self.check_level_up()
    
    def learn_skill(self, skill_name: str, knowledge: str) -> bool:
        """学习新武功"""
        for s in self.skills:
            if s.name == skill_name:
                return False  # 已学过
        self.skills.append(Skill(name=skill_name, knowledge=knowledge))
        return True
    
    def update_skill_proficiency(self, skill_name: str, amount: int):
        """更新武功熟练度"""
        for s in self.skills:
            if s.name == skill_name:
                s.proficiency = min(100, s.proficiency + amount)
                if s.proficiency >= 90:
                    s.mastery = "圆满"
                elif s.proficiency >= 60:
                    s.mastery = "大成"
                elif s.proficiency >= 30:
                    s.mastery = "小成"
                else:
                    s.mastery = "入门"
                break
    
    def add_item(self, name: str, item_type: str, description: str = "", value: int = 0, qty: int = 1):
        """添加物品到背包"""
        for item in self.inventory:
            if item.name == name:
                item.quantity += qty
                return
        self.inventory.append(Item(name=name, item_type=item_type, 
                                    description=description, value=value, quantity=qty))
    
    def remove_item(self, name: str, qty: int = 1) -> bool:
        """从背包移除物品"""
        for i, item in enumerate(self.inventory):
            if item.name == name:
                if item.quantity <= qty:
                    self.inventory.pop(i)
                else:
                    item.quantity -= qty
                return True
        return False
    
    def has_item(self, name: str) -> bool:
        return any(item.name == name for item in self.inventory)
    
    def heal(self, amount: int):
        """恢复气血"""
        self.hp = min(self.max_hp, self.hp + amount)
    
    def take_damage(self, amount: int) -> bool:
        """受到伤害，返回是否死亡"""
        self.hp = max(0, self.hp - amount)
        return self.hp <= 0
    
    def restore_mp(self, amount: int):
        """恢复内力"""
        self.mp = min(self.max_mp, self.mp + amount)
    
    def use_mp(self, amount: int) -> bool:
        """消耗内力，返回是否足够"""
        if self.mp >= amount:
            self.mp -= amount
            return True
        return False
    
    def to_dict(self) -> dict:
        return {
            "name": self.name,
            "hp": self.hp, "max_hp": self.max_hp,
            "mp": self.mp, "max_mp": self.max_mp,
            "strength": self.strength, "agility": self.agility,
            "constitution": self.constitution, "wisdom": self.wisdom,
            "luck": self.luck,
            "exp": self.exp, "level": self.level,
            "attribute_points": self.attribute_points,
            "chivalry": self.chivalry, "trust": self.trust,
            "faction_contrib": self.faction_contrib,
            "silver": self.silver, "insight": self.insight,
            "faction": self.faction, "master": self.master,
            "skills": [s.to_dict() for s in self.skills],
            "inventory": [i.to_dict() for i in self.inventory],
            "completed_quests": self.completed_quests,
            "achievements": self.achievements,
            "location": self.location,
        }
    
    @staticmethod
    def from_dict(d: dict) -> 'Character':
        c = Character()
        for key in ["name", "hp", "max_hp", "mp", "max_mp",
                     "strength", "agility", "constitution", "wisdom", "luck",
                     "exp", "level", "attribute_points",
                     "chivalry", "trust", "faction_contrib",
                     "silver", "insight",
                     "faction", "master", "location",
                     "completed_quests", "achievements"]:
            if key in d:
                setattr(c, key, d[key])
        if "skills" in d:
            c.skills = [Skill.from_dict(s) for s in d["skills"]]
        if "inventory" in d:
            c.inventory = [Item.from_dict(i) for i in d["inventory"]]
        return c
    
    def save(self, path: str):
        """保存角色到JSON文件"""
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(self.to_dict(), f, ensure_ascii=False, indent=2)
    
    @staticmethod
    def load(path: str) -> 'Character':
        """从JSON文件加载角色"""
        with open(path, 'r', encoding='utf-8') as f:
            return Character.from_dict(json.load(f))
