"""
任务处理引擎 - 管理任务阶段推进、完成检测、奖励发放
"""
import random
from typing import Optional, List, Dict, Any

from engine.story import StoryManager, Quest, QuestStage, QuestStatus
from player.character import Character


class QuestHandler:
    """任务处理器"""

    def __init__(self, story_manager: StoryManager, player: Character):
        self.story_manager = story_manager
        self.player = player
        # 记录每个任务的当前阶段索引 {quest_id: stage_index}
        self._stage_progress: Dict[str, int] = {}

    def get_active_stage(self, quest_id: str) -> Optional[QuestStage]:
        """获取任务当前阶段"""
        quest = self.story_manager.all_quests.get(quest_id)
        if not quest or quest.status != QuestStatus.ACTIVE:
            return None

        idx = self._stage_progress.get(quest_id, 0)
        if idx < len(quest.stages):
            return quest.stages[idx]
        return None

    def check_stage_completion(self, quest_id: str,
                                context: Optional[Dict[str, Any]] = None) -> bool:
        """
        检查当前阶段是否完成。

        context 可包含:
            - coding_passed: bool  — 编程题是否通过
            - combat_won: bool     — 战斗是否胜利
            - combat_enemy: str    — 击败的敌人名
            - current_location: str — 玩家当前位置
            - talked_npc: str      — 对话的NPC名
        """
        stage = self.get_active_stage(quest_id)
        if not stage:
            return False

        ctx = context or {}

        if stage.type == "coding":
            if stage.target:
                return bool(ctx.get("coding_passed"))
            return bool(ctx.get("coding_passed"))

        elif stage.type == "combat":
            if ctx.get("combat_won"):
                enemy = ctx.get("combat_enemy", "")
                # 如果指定了目标敌人，必须匹配
                if stage.target and enemy and stage.target != enemy:
                    return False
                return True
            return False

        elif stage.type == "travel":
            loc = ctx.get("current_location", "")
            return loc == stage.target

        elif stage.type == "talk":
            npc = ctx.get("talked_npc", "")
            return npc == stage.target

        elif stage.type == "explore":
            loc = ctx.get("current_location", "")
            if loc == stage.target:
                # 探索类型：50%概率完成
                return random.random() < 0.5
            return False

        return False

    def advance_quest(self, quest_id: str,
                       context: Optional[Dict[str, Any]] = None) -> Optional[QuestStage]:
        """
        尝试推进任务。如果当前阶段完成，推进到下一阶段。
        返回新的活跃阶段，或 None（任务已完成）。
        """
        quest = self.story_manager.all_quests.get(quest_id)
        if not quest or quest.status != QuestStatus.ACTIVE:
            return None

        if not self.check_stage_completion(quest_id, context):
            return self.get_active_stage(quest_id)

        # 当前阶段完成
        idx = self._stage_progress.get(quest_id, 0)
        idx += 1
        self._stage_progress[quest_id] = idx

        if idx >= len(quest.stages):
            # 所有阶段完成 -> 完成任务
            self.complete_quest(quest_id)
            return None

        # 进入下一阶段
        next_stage = quest.stages[idx]
        return next_stage

    def complete_quest(self, quest_id: str) -> Optional[Dict[str, int]]:
        """完成整个任务，发放奖励"""
        rewards = self.story_manager.complete_quest(quest_id)
        if rewards is None:
            return None

        # 发放奖励给玩家
        exp = rewards.get("exp", 0)
        silver = rewards.get("silver", 0)
        chivalry = rewards.get("chivalry", 0)
        insight = rewards.get("insight", 0)

        if exp:
            leveled = self.player.add_exp(exp)
        if silver:
            self.player.silver += silver
        if chivalry:
            self.player.chivalry += chivalry
        if insight:
            self.player.insight += insight

        # 物品奖励
        items = rewards.get("items", [])
        for item_data in items:
            self.player.add_item(
                name=item_data.get("name", "未知物品"),
                item_type=item_data.get("type", "misc"),
                description=item_data.get("description", ""),
                value=item_data.get("value", 0),
            )

        # 记录到角色已完成任务
        if quest_id not in self.player.completed_quests:
            self.player.completed_quests.append(quest_id)

        return rewards

    def get_quest_progress(self, quest_id: str) -> Dict[str, Any]:
        """获取任务进度信息"""
        quest = self.story_manager.all_quests.get(quest_id)
        if not quest:
            return {"quest_id": quest_id, "found": False}

        idx = self._stage_progress.get(quest_id, 0)
        total = len(quest.stages)

        current_stage = None
        if quest.status == QuestStatus.ACTIVE and idx < total:
            current_stage = quest.stages[idx]

        return {
            "quest_id": quest_id,
            "title": quest.title,
            "description": quest.description,
            "status": quest.status.value,
            "current_stage": current_stage,
            "current_stage_index": idx,
            "total_stages": total,
            "progress": f"{idx}/{total}",
            "rewards": quest.rewards,
        }

    def check_and_unlock_quests(self) -> List[Quest]:
        """检查并解锁满足条件的新任务"""
        newly_available = self.story_manager.check_quest_availability(
            player_level=self.player.level,
            player_faction=self.player.faction,
            completed_quests=self.story_manager.completed_quests,
        )

        # 额外检查支线NPC好感度条件
        for quest in list(newly_available):
            if quest.required_npc_affection:
                affection = self.story_manager.get_npc_affection(quest.npc_giver)
                if affection < quest.required_npc_affection:
                    newly_available.remove(quest)

        return newly_available

    def start_quest(self, quest_id: str) -> Optional[Quest]:
        """开始一个任务"""
        quest = self.story_manager.start_quest(quest_id)
        if quest:
            self._stage_progress[quest_id] = 0
        return quest

    def to_dict(self) -> dict:
        """序列化"""
        return {"stage_progress": self._stage_progress}

    @staticmethod
    def from_dict(d: dict, story_manager: StoryManager,
                  player: Character) -> 'QuestHandler':
        """反序列化"""
        qh = QuestHandler(story_manager, player)
        qh._stage_progress = d.get("stage_progress", {})
        return qh
