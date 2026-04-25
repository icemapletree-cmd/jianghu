"""
题库系统 - 管理所有编程题目
"""
import json
import os
from typing import List, Optional


PROBLEMS_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "problems")


class Problem:
    """一道编程题"""
    def __init__(self, data: dict):
        self.id = data["id"]
        self.title = data["title"]
        self.description = data["description"]
        self.template = data.get("template", "# 请在下方编写代码\n")
        self.tests = data.get("tests", [])
        self.hint = data.get("hint", "暂无提示")
        self.knowledge = data.get("knowledge", "基础")
        self.difficulty = data.get("difficulty", 1)
        self.rewards = data.get("rewards", {"exp": 50, "silver": 20})
        self.story = data.get("story", "")  # 剧情背景
        self.npc = data.get("npc", "")      # 出题NPC
    
    def to_dict(self):
        return {
            "id": self.id, "title": self.title,
            "description": self.description,
            "template": self.template, "tests": self.tests,
            "hint": self.hint, "knowledge": self.knowledge,
            "difficulty": self.difficulty, "rewards": self.rewards,
            "story": self.story, "npc": self.npc,
        }


def load_problem(problem_id: str) -> Optional[Problem]:
    """按ID加载一道题"""
    # 在所有子目录中搜索
    for sub in ["basics", "intermediate", "advanced", "projects"]:
        path = os.path.join(PROBLEMS_DIR, sub, f"{problem_id}.json")
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                return Problem(json.load(f))
    return None


def load_all_problems(category: str = None) -> List[Problem]:
    """加载所有题目或指定分类"""
    problems = []
    dirs = [category] if category else ["basics", "intermediate", "advanced", "projects"]
    
    for sub in dirs:
        dir_path = os.path.join(PROBLEMS_DIR, sub)
        if not os.path.exists(dir_path):
            continue
        for fname in sorted(os.listdir(dir_path)):
            if fname.endswith('.json'):
                with open(os.path.join(dir_path, fname), 'r', encoding='utf-8') as f:
                    problems.append(Problem(json.load(f)))
    
    return problems


def get_problem_by_knowledge(knowledge: str) -> List[Problem]:
    """按知识点筛选题目"""
    return [p for p in load_all_problems() if p.knowledge == knowledge]
