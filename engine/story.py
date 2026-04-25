"""
剧情引擎 - 章节、任务、对话、随机事件管理
"""
from dataclasses import dataclass, field, asdict
from typing import List, Dict, Optional, Callable, Any
from enum import Enum
import random
import json
import os


class QuestType(Enum):
    MAIN = "main"
    SIDE = "side"
    HIDDEN = "hidden"


class QuestStatus(Enum):
    LOCKED = "locked"
    AVAILABLE = "available"
    ACTIVE = "active"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class DialogueLine:
    """对话中的一句话"""
    speaker: str
    text: str
    emotion: str = ""  # neutral/happy/angry/sad/surprised/thoughtful/mysterious


@dataclass
class DialogueChoice:
    """对话选择分支"""
    text: str
    requires: Dict[str, Any] = field(default_factory=dict)  # 条件
    consequence: Dict[str, Any] = field(default_factory=dict)  # 后果
    next_lines: List[DialogueLine] = field(default_factory=list)


@dataclass
class Dialogue:
    """一段NPC对话"""
    id: str
    npc_name: str
    lines: List[DialogueLine] = field(default_factory=list)
    choices: List[DialogueChoice] = field(default_factory=list)
    requires_level: int = 0
    requires_quest: str = ""
    requires_faction: str = ""
    requires_npc_affection: int = 0
    one_time: bool = True  # 是否只触发一次


@dataclass
class QuestStage:
    """任务的一个阶段"""
    id: str
    description: str
    type: str = "coding"  # coding/combat/travel/talk/explore
    target: str = ""       # 目标：题ID/敌人名/地点/NPC名
    required_count: int = 1
    narration_before: str = ""
    narration_after: str = ""
    dialogue: Optional[Dialogue] = None


@dataclass
class Quest:
    """任务"""
    id: str
    title: str
    description: str
    quest_type: QuestType = QuestType.SIDE
    chapter: int = 0
    stages: List[QuestStage] = field(default_factory=list)
    rewards: Dict[str, int] = field(default_factory=dict)
    npc_giver: str = ""
    npc_receiver: str = ""
    prerequisite_quests: List[str] = field(default_factory=list)
    required_level: int = 0
    required_faction: str = ""
    status: QuestStatus = QuestStatus.LOCKED


@dataclass
class Chapter:
    """章节"""
    id: int
    title: str
    description: str
    required_level: int = 0
    required_quests: List[str] = field(default_factory=list)
    location: str = ""
    opening_narration: str = ""
    closing_narration: str = ""
    quests: List[str] = field(default_factory=list)


@dataclass
class RandomEvent:
    """随机事件"""
    id: str
    name: str
    description: str
    trigger_type: str = "travel"  # travel/practice/idle
    probability: float = 0.3
    min_level: int = 0
    location: str = ""  # 空表示任何地点
    choices: List[DialogueChoice] = field(default_factory=list)
    narration: str = ""
    rewards: Dict[str, int] = field(default_factory=dict)
    combat_enemy: str = ""  # 如果触发战斗
    quest_problem: str = ""  # 如果触发编程挑战


@dataclass
class NPCRelation:
    """与某个NPC的关系"""
    npc_name: str
    affection: int = 0
    met: bool = False
    trust: int = 0
    quests_given: List[str] = field(default_factory=list)
    dialogues_seen: List[str] = field(default_factory=list)


class StoryManager:
    """故事管理器"""
    
    def __init__(self):
        self.current_chapter: int = 0
        self.active_quests: List[Quest] = []
        self.completed_quests: List[str] = []
        self.available_quests: List[Quest] = []
        self.npc_relations: Dict[str, NPCRelation] = {}
        self.seen_dialogues: List[str] = []
        self.seen_events: List[str] = []
        self.story_flags: Dict[str, bool] = {}
        self.chapters: Dict[int, Chapter] = {}
        self.all_quests: Dict[str, Quest] = {}
        self.random_events: List[RandomEvent] = []
    
    def load_chapters(self, chapters: Dict[int, Chapter]):
        """加载章节数据"""
        self.chapters = chapters
    
    def load_quests(self, quests: Dict[str, Quest]):
        """加载任务数据"""
        self.all_quests = quests
    
    def load_events(self, events: List[RandomEvent]):
        """加载随机事件"""
        self.random_events = events
    
    def get_current_chapter(self) -> Optional[Chapter]:
        """获取当前章节"""
        return self.chapters.get(self.current_chapter)
    
    def check_chapter_advance(self, player_level: int) -> Optional[Chapter]:
        """检查是否可以推进到下一章"""
        next_ch = self.current_chapter + 1
        chapter = self.chapters.get(next_ch)
        if not chapter:
            return None
        
        if player_level < chapter.required_level:
            return None
        
        for qid in chapter.required_quests:
            if qid not in self.completed_quests:
                return None
        
        return chapter
    
    def advance_chapter(self) -> Chapter:
        """推进到下一章"""
        self.current_chapter += 1
        chapter = self.chapters[self.current_chapter]
        # 解锁本章任务
        for qid in chapter.quests:
            if qid in self.all_quests:
                quest = self.all_quests[qid]
                quest.status = QuestStatus.AVAILABLE
                self.available_quests.append(quest)
        return chapter
    
    def start_quest(self, quest_id: str) -> Optional[Quest]:
        """开始一个任务"""
        quest = self.all_quests.get(quest_id)
        if not quest:
            return None
        
        quest.status = QuestStatus.ACTIVE
        if quest in self.available_quests:
            self.available_quests.remove(quest)
        self.active_quests.append(quest)
        return quest
    
    def complete_quest(self, quest_id: str) -> Optional[Dict]:
        """完成任务"""
        quest = None
        for q in self.active_quests:
            if q.id == quest_id:
                quest = q
                break
        
        if not quest:
            return None
        
        quest.status = QuestStatus.COMPLETED
        self.active_quests.remove(quest)
        self.completed_quests.append(quest_id)
        return quest.rewards
    
    def get_available_quests(self) -> List[Quest]:
        """获取可用任务"""
        return self.available_quests
    
    def get_active_quests(self) -> List[Quest]:
        """获取进行中的任务"""
        return self.active_quests
    
    def check_quest_availability(self, player_level: int, 
                                   player_faction: str,
                                   completed_quests: List[str]) -> List[Quest]:
        """检查哪些锁定的任务变为可用"""
        newly_available = []
        for qid, quest in self.all_quests.items():
            if quest.status != QuestStatus.LOCKED:
                continue
            
            if quest.required_level > player_level:
                continue
            
            if quest.required_faction and quest.required_faction != player_faction:
                continue
            
            prereqs_met = all(pq in self.completed_quests 
                            for pq in quest.prerequisite_quests)
            if not prereqs_met:
                continue
            
            quest.status = QuestStatus.AVAILABLE
            self.available_quests.append(quest)
            newly_available.append(quest)
        
        return newly_available
    
    def meet_npc(self, npc_name: str):
        """首次遇到NPC"""
        if npc_name not in self.npc_relations:
            self.npc_relations[npc_name] = NPCRelation(npc_name=npc_name)
        self.npc_relations[npc_name].met = True
    
    def get_npc_affection(self, npc_name: str) -> int:
        """获取NPC好感度"""
        if npc_name in self.npc_relations:
            return self.npc_relations[npc_name].affection
        return 0
    
    def change_npc_affection(self, npc_name: str, amount: int):
        """改变NPC好感度"""
        if npc_name not in self.npc_relations:
            self.npc_relations[npc_name] = NPCRelation(npc_name=npc_name)
        self.npc_relations[npc_name].affection += amount
    
    def get_random_event(self, trigger_type: str, player_level: int,
                         location: str) -> Optional[RandomEvent]:
        """获取一个随机事件"""
        eligible = [
            e for e in self.random_events
            if e.trigger_type == trigger_type
            and player_level >= e.min_level
            and (not e.location or e.location == location)
            and e.id not in self.seen_events
        ]
        
        if not eligible:
            return None
        
        # 按概率选择
        for event in eligible:
            if random.random() < event.probability:
                self.seen_events.append(event.id)
                return event
        
        return None
    
    def is_dialogue_available(self, dialogue: Dialogue) -> bool:
        """检查对话是否可用"""
        if dialogue.one_time and dialogue.id in self.seen_dialogues:
            return False
        return True
    
    def mark_dialogue_seen(self, dialogue_id: str):
        """标记对话已看过"""
        self.seen_dialogues.append(dialogue_id)
    
    def set_flag(self, flag: str, value: bool = True):
        """设置故事标记"""
        self.story_flags[flag] = value
    
    def has_flag(self, flag: str) -> bool:
        """检查故事标记"""
        return self.story_flags.get(flag, False)
    
    def to_dict(self) -> dict:
        """序列化"""
        return {
            "current_chapter": self.current_chapter,
            "completed_quests": self.completed_quests,
            "seen_dialogues": self.seen_dialogues,
            "seen_events": self.seen_events,
            "story_flags": self.story_flags,
            "npc_relations": {
                name: asdict(rel) for name, rel in self.npc_relations.items()
            },
        }
    
    @staticmethod
    def from_dict(d: dict) -> 'StoryManager':
        """反序列化"""
        sm = StoryManager()
        sm.current_chapter = d.get("current_chapter", 0)
        sm.completed_quests = d.get("completed_quests", [])
        sm.seen_dialogues = d.get("seen_dialogues", [])
        sm.seen_events = d.get("seen_events", [])
        sm.story_flags = d.get("story_flags", {})
        
        for name, rel_data in d.get("npc_relations", {}).items():
            sm.npc_relations[name] = NPCRelation(
                npc_name=name,
                affection=rel_data.get("affection", 0),
                met=rel_data.get("met", False),
                trust=rel_data.get("trust", 0),
                quests_given=rel_data.get("quests_given", []),
                dialogues_seen=rel_data.get("dialogues_seen", []),
            )
        
        return sm
