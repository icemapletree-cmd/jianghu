"""
story_data.py - 剧情数据文件
五章主线 + 支线任务，全部硬编码。
"""

from typing import Dict
from engine.story import (
    Chapter, Quest, QuestStage, QuestType, QuestStatus,
    Dialogue, DialogueLine, DialogueChoice,
)


def get_chapters() -> Dict[int, Chapter]:
    """返回章节字典，key 为章节 id。"""
    result = {
        # ── 第一章：江湖初行（射雕英雄传线） ──
        1: Chapter(
            id=1,
            title="江湖初行",
            description="射雕英雄传",
            required_level=0,
            required_quests=[],
            location="破庙",
            opening_narration=(
                "夜雨破庙，你从昏迷中醒来。一张神秘纸条，一本编程心法……"
                "江湖路从这一步开始。"
            ),
            closing_narration=(
                "你击败欧阳克，离开桃花岛。江湖的路，才刚刚开始……"
            ),
            quests=[
                "ch1_awaken", "ch1_guojing_math", "ch1_save_rong", "ch1_rong_menu",
                "ch1_mei_chaofeng", "ch1_snake_pattern", "ch1_black_chase",
                "ch1_hong_qigong", "ch1_hong_recipe", "ch1_taohua", "ch1_taohua_maze",
                "ch1_boss", "ch1_weixiaobao_bet",
            ],
        ),

        # ── 第二章：天龙风云（天龙八部线） ──
        2: Chapter(
            id=2,
            title="天龙风云",
            description="天龙八部",
            required_level=2,
            required_quests=["ch1_boss"],
            location="大理",
            opening_narration=(
                "塞外牛羊，江南烟雨。乔峰的豪情、段誉的痴心、虚竹的奇遇——"
                "天龙八部的画卷在你面前缓缓展开。"
            ),
            closing_narration=(
                "少室山一战，三兄弟联手退敌。"
                "江湖的恩怨纠葛，远比你想的更加复杂……"
            ),
            quests=[
                "ch2_xingzilin", "ch2_qiaofeng_clue", "ch2_duan_yu", "ch2_duan_sword",
                "ch2_xuzhu", "ch2_zhenlong_recursion", "ch2_tonglao", "ch2_lingjiu_path",
                "ch2_zhemeshou", "ch2_shaoshi", "ch2_poison_dict", "ch2_clue_filter",
                "ch2_sword_combo", "ch2_boss",
            ],
        ),

        # ── 第三章：笑傲江湖（笑傲江湖线） ──
        3: Chapter(
            id=3,
            title="笑傲江湖",
            description="笑傲江湖",
            required_level=3,
            required_quests=["ch2_boss"],
            location="华山",
            opening_narration=(
                "华山之巅，风清扬独坐思过崖。令狐冲的剑，独孤九式的意——"
                "笑傲江湖，从一柄剑开始。"
            ),
            closing_narration=(
                "东方不败败退，任我行重归日月神教。"
                "江湖的纷争，似乎永远没有尽头……"
            ),
            quests=[
                "ch3_linghu", "ch3_linghu_drunk", "ch3_songshan", "ch3_songshan_filter",
                "ch3_riyue", "ch3_spy_closure", "ch3_ren", "ch3_absorb_boost",
                "ch3_dongfang", "ch3_dongfang_batch", "ch3_parallel", "ch3_boss",
            ],
        ),

        # ── 第四章：鹿鼎记外传 ──
        4: Chapter(
            id=4,
            title="鹿鼎记外传",
            description="鹿鼎记",
            required_level=4,
            required_quests=["ch3_boss"],
            location="京城",
            opening_narration=(
                "紫禁城内，龙椅之上。韦小宝的传奇，不过是江湖中一个小人物的崛起。"
                "但小人物，也能搅动风云。"
            ),
            closing_narration=(
                "鳌拜伏诛，海战告捷。韦小宝带着七个老婆远走他乡——"
                "而你，将踏上最终的巅峰。"
            ),
            quests=[
                "ch4_kangxi", "ch4_kangxi_amount", "ch4_aobai", "ch4_aobai_cipher",
                "ch4_aobai_vigenere", "ch4_wives", "ch4_wives_birthday",
                "ch4_jing", "ch4_jing_set", "ch4_sea", "ch4_sea_grid",
                "ch4_secret_bfs", "ch4_boss",
            ],
        ),

        # ── 第五章：终章·华山论剑 ──
        5: Chapter(
            id=5,
            title="终章·华山论剑",
            description="华山论剑",
            required_level=5,
            required_quests=["ch4_boss"],
            location="华山之巅",
            opening_narration=(
                "华山论剑，天下英雄齐聚。这是最后的试炼——"
                "用你所学的一切，证明自己才是真正的武林至尊。"
            ),
            closing_narration=(
                "尘埃落定。你站在华山之巅，俯瞰万里江湖。"
                "从破庙中的那张纸条，到今日的天下第一——"
                "这段路，值得。江湖路远，我们后会有期。"
            ),
            quests=[
                "ch5_project", "ch5_system", "ch5_mirror", "ch5_ranking",
                "ch5_tournament", "ch5_wulin_project", "ch5_final", "ch5_ending",
            ],
        ),
    }
    result.update(_get_shendiao_chapters())
    result.update(_get_yitian_chapters())
    return result


def get_quests() -> Dict[str, Quest]:
    """返回所有任务字典，key 为任务 id。"""

    quests: Dict[str, Quest] = {}

    # ════════════════════════════════════════════
    # 第一章：江湖初行（射雕英雄传线）
    # ════════════════════════════════════════════

    quests["ch1_awaken"] = Quest(
        id="ch1_awaken",
        title="破庙觉醒",
        description="在破庙中醒来，学习编程吐纳术的基本心法。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="学print吐纳术", type="coding", target="basics_001"),
            QuestStage(id="s2", description="修炼变量心法", type="coding", target="basics_002"),
        ],
        rewards={"exp": 100, "silver": 30},
    )

    quests["ch1_save_rong"] = Quest(
        id="ch1_save_rong",
        title="初遇黄蓉",
        description="在林中遇到被追赶的黄蓉，用编程知识化解危机。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="初遇黄蓉", type="talk", target="黄蓉"),
            QuestStage(id="s2", description="用变量救人", type="coding", target="basics_003"),
        ],
        rewards={"exp": 120, "silver": 40},
    )

    quests["ch1_mei_chaofeng"] = Quest(
        id="ch1_mei_chaofeng",
        title="梅超风之影",
        description="铁尸梅超风突然出现，你必须在if/else的抉择中求生。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="if/else抉择", type="coding", target="basics_004"),
            QuestStage(id="s2", description="逃脱追杀", type="combat", target="梅超风"),
        ],
        rewards={"exp": 150, "silver": 50},
    )

    quests["ch1_hong_qigong"] = Quest(
        id="ch1_hong_qigong",
        title="洪七公的降龙掌",
        description="偶遇九指神丐洪七公，以烧鸡换取降龙十八掌——以及for循环。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="给洪七公烧鸡", type="talk", target="洪七公"),
            QuestStage(id="s2", description="学for循环降龙掌", type="coding", target="basics_005"),
        ],
        rewards={"exp": 150, "silver": 50},
    )

    quests["ch1_taohua"] = Quest(
        id="ch1_taohua",
        title="桃花岛迷阵",
        description="闯入桃花岛，在黄药师的奇门遁甲中破解桃花阵。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="桃花阵", type="coding", target="basics_007"),
            QuestStage(id="s2", description="见黄药师", type="talk", target="黄药师"),
        ],
        rewards={"exp": 180, "silver": 60},
    )

    quests["ch1_boss"] = Quest(
        id="ch1_boss",
        title="欧阳克来袭",
        description="白驼山少主欧阳克突然出手，这是你第一场真正的生死之战。",
        quest_type=QuestType.MAIN,
        chapter=1,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="欧阳克来袭", type="combat", target="欧阳克"),
            QuestStage(id="s2", description="综合运用", type="coding", target="basics_009"),
        ],
        rewards={"exp": 250, "silver": 100},
    )

    # ════════════════════════════════════════════
    # 第二章：天龙风云（天龙八部线）
    # ════════════════════════════════════════════

    quests["ch2_xingzilin"] = Quest(
        id="ch2_xingzilin",
        title="杏子林之变",
        description="杏子林中，乔峰身世之谜揭开。你需要用字典之力探寻真相。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="字典探秘", type="coding", target="basics_010"),
            QuestStage(id="s2", description="结交乔峰", type="talk", target="乔峰"),
        ],
        rewards={"exp": 200, "silver": 80},
    )

    quests["ch2_duan_yu"] = Quest(
        id="ch2_duan_yu",
        title="段誉的奇遇",
        description="大理段公子误入江湖，你需要用try/except帮他化险为夷。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="try/except化险", type="coding", target="basics_011"),
            QuestStage(id="s2", description="结交段誉", type="talk", target="段誉"),
        ],
        rewards={"exp": 200, "silver": 80},
    )

    quests["ch2_xuzhu"] = Quest(
        id="ch2_xuzhu",
        title="虚竹的机缘",
        description="小和尚虚竹破解珍珑棋局，你需要掌握二维列表的奥义。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="二维列表棋局", type="coding", target="intermediate_003"),
            QuestStage(id="s2", description="结交虚竹", type="talk", target="虚竹"),
        ],
        rewards={"exp": 220, "silver": 90},
    )

    quests["ch2_tonglao"] = Quest(
        id="ch2_tonglao",
        title="天山童姥",
        description="天山灵鹫宫中，童姥传授你递归之术——功力层层叠加，无穷无尽。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="拜见童姥", type="talk", target="天山童姥"),
            QuestStage(id="s2", description="递归之术", type="coding", target="intermediate_007"),
        ],
        rewards={"exp": 240, "silver": 100},
    )

    quests["ch2_shaoshi"] = Quest(
        id="ch2_shaoshi",
        title="少室山之战",
        description="星宿派毒人围攻少室山，你需要用class之力以一敌百。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="class之力", type="coding", target="intermediate_008"),
            QuestStage(id="s2", description="击退毒人", type="combat", target="星宿派毒人"),
        ],
        rewards={"exp": 260, "silver": 110},
    )

    quests["ch2_boss"] = Quest(
        id="ch2_boss",
        title="少室山决战",
        description="最终一战，继承的奥义与综合实力将决定成败。",
        quest_type=QuestType.MAIN,
        chapter=2,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="继承之道", type="coding", target="intermediate_010"),
            QuestStage(id="s2", description="综合运用", type="coding", target="intermediate_011"),
        ],
        rewards={"exp": 300, "silver": 150},
    )

    # ════════════════════════════════════════════
    # 第三章：笑傲江湖（笑傲江湖线）
    # ════════════════════════════════════════════

    quests["ch3_linghu"] = Quest(
        id="ch3_linghu",
        title="令狐冲的剑",
        description="思过崖上，令狐冲教你独孤九式——以及def函数的奥义。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="def函数剑法", type="coding", target="intermediate_001"),
            QuestStage(id="s2", description="结交令狐冲", type="talk", target="令狐冲"),
        ],
        rewards={"exp": 280, "silver": 120},
    )

    quests["ch3_songshan"] = Quest(
        id="ch3_songshan",
        title="嵩山派之乱",
        description="嵩山派弟子来袭，用列表推导式快速制敌。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="列表推导式", type="coding", target="intermediate_002"),
            QuestStage(id="s2", description="击退铁掌帮弟子", type="combat", target="铁掌帮弟子"),
        ],
        rewards={"exp": 300, "silver": 130},
    )

    quests["ch3_riyue"] = Quest(
        id="ch3_riyue",
        title="日月神教",
        description="潜入日月神教，用import引入外功心法。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="import心法", type="coding", target="intermediate_006"),
            QuestStage(id="s2", description="见任我行", type="talk", target="任我行"),
        ],
        rewards={"exp": 320, "silver": 140},
    )

    quests["ch3_ren"] = Quest(
        id="ch3_ren",
        title="任我行之战",
        description="任我行出关，装饰器般的吸星大法令人防不胜防。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="装饰器之术", type="coding", target="intermediate_012"),
            QuestStage(id="s2", description="对决欧阳克", type="combat", target="欧阳克"),
        ],
        rewards={"exp": 340, "silver": 150},
    )

    quests["ch3_dongfang"] = Quest(
        id="ch3_dongfang",
        title="东方不败",
        description="黑木崖上，东方不败以多线程之速使出葵花宝典。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="多线程对决", type="coding", target="advanced_003"),
            QuestStage(id="s2", description="决战东方不败", type="combat", target="东方不败"),
        ],
        rewards={"exp": 380, "silver": 180},
    )

    quests["ch3_boss"] = Quest(
        id="ch3_boss",
        title="笑傲江湖·决战",
        description="综合class之力，在笑傲江湖的世界中站稳脚跟。",
        quest_type=QuestType.MAIN,
        chapter=3,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="综合class运用", type="coding", target="intermediate_009"),
        ],
        rewards={"exp": 400, "silver": 200},
    )

    # ════════════════════════════════════════════
    # 第四章：鹿鼎记外传
    # ════════════════════════════════════════════

    quests["ch4_kangxi"] = Quest(
        id="ch4_kangxi",
        title="巧遇康熙",
        description="在京城偶遇微服出巡的康熙皇帝，用正则表达式解开密信。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="正则破解密信", type="coding", target="advanced_004"),
            QuestStage(id="s2", description="结交康熙", type="talk", target="康熙"),
        ],
        rewards={"exp": 380, "silver": 180},
    )

    quests["ch4_aobai"] = Quest(
        id="ch4_aobai",
        title="鳌拜之乱",
        description="权臣鳌拜密谋造反，用加密与数据结构之力助康熙擒贼。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="加密与数据结构", type="coding", target="advanced_005"),
            QuestStage(id="s2", description="生擒鳌拜", type="combat", target="鳌拜"),
        ],
        rewards={"exp": 400, "silver": 200},
    )

    quests["ch4_wives"] = Quest(
        id="ch4_wives",
        title="韦小宝的烦恼",
        description="韦小宝的七个老婆各有心思，用排序算法理清头绪。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="排序理清头绪", type="coding", target="advanced_006"),
            QuestStage(id="s2", description="找韦小宝", type="talk", target="韦小宝"),
        ],
        rewards={"exp": 380, "silver": 180},
    )

    quests["ch4_jing"] = Quest(
        id="ch4_jing",
        title="皇城探秘",
        description="深入皇城禁地，用递归之力层层破解机关。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="递归破机关", type="coding", target="advanced_007"),
            QuestStage(id="s2", description="探索皇城", type="explore", target="皇城"),
        ],
        rewards={"exp": 400, "silver": 200},
    )

    quests["ch4_sea"] = Quest(
        id="ch4_sea",
        title="出海远征",
        description="跨海远征，设计模式是你统筹全局的关键。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="设计模式", type="coding", target="advanced_008"),
            QuestStage(id="s2", description="海战退敌", type="combat", target="欧阳克"),
        ],
        rewards={"exp": 420, "silver": 220},
    )

    quests["ch4_boss"] = Quest(
        id="ch4_boss",
        title="鹿鼎记·终战",
        description="生成器与上下文管理器——最后的考验。",
        quest_type=QuestType.MAIN,
        chapter=4,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="生成器之力", type="coding", target="advanced_001"),
            QuestStage(id="s2", description="上下文管理器", type="coding", target="advanced_002"),
        ],
        rewards={"exp": 500, "silver": 300},
    )

    # ════════════════════════════════════════════
    # 第五章：终章·华山论剑
    # ════════════════════════════════════════════

    quests["ch5_project"] = Quest(
        id="ch5_project",
        title="终极项目",
        description="华山论剑前的综合修炼，将所学融会贯通。",
        quest_type=QuestType.MAIN,
        chapter=5,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="综合修炼一", type="coding", target="intermediate_004"),
            QuestStage(id="s2", description="综合修炼二", type="coding", target="intermediate_005"),
            QuestStage(id="s3", description="class进阶", type="coding", target="intermediate_008"),
            QuestStage(id="s4", description="class综合", type="coding", target="intermediate_009"),
        ],
        rewards={"exp": 500, "silver": 300},
    )

    quests["ch5_final"] = Quest(
        id="ch5_final",
        title="华山论剑·决战",
        description="天下第一的争夺，设计模式的终极运用。",
        quest_type=QuestType.MAIN,
        chapter=5,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="决战欧阳克", type="combat", target="欧阳克"),
            QuestStage(id="s2", description="设计模式综合", type="coding", target="advanced_008"),
        ],
        rewards={"exp": 600, "silver": 400},
    )

    quests["ch5_ending"] = Quest(
        id="ch5_ending",
        title="江湖路远",
        description="尘埃落定。登上华山之巅，俯瞰你走过的每一步。",
        quest_type=QuestType.MAIN,
        chapter=5,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage(id="s1", description="登顶华山", type="explore", target="华山"),
        ],
        rewards={"exp": 300, "silver": 200},
    )

    # ════════════════════════════════════════════
    # 支线任务
    # ════════════════════════════════════════════

    quests["side_hong_shaoji"] = Quest(
        id="side_hong_shaoji",
        title="洪七公的烧鸡",
        description="洪七公馋虫发作，要你跑腿去洛阳买烧鸡。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=1,
        npc_giver="洪七公",
        stages=[
            QuestStage(id="s1", description="前往洛阳", type="travel", target="洛阳"),
            QuestStage(id="s2", description="买烧鸡", type="coding", target="basics_006"),
        ],
        rewards={"exp": 100, "silver": 50},
    )

    quests["side_inn_rat"] = Quest(
        id="side_inn_rat",
        title="客栈除鼠",
        description="客栈老板请你除掉闹事的鼠辈，用编程功夫解决。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=1,
        npc_giver="客栈老板",
        stages=[
            QuestStage(id="s1", description="编程除鼠一", type="coding", target="basics_007"),
            QuestStage(id="s2", description="编程除鼠二", type="coding", target="basics_008"),
        ],
        rewards={"exp": 120, "silver": 60},
    )

    quests["side_guojunqing"] = Quest(
        id="side_guojunqing",
        title="郭靖的请求",
        description="郭靖请你帮忙处理军情，需要掌握二维列表和函数进阶。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=2,
        npc_giver="郭靖",
        stages=[
            QuestStage(id="s1", description="二维列表", type="coding", target="intermediate_003"),
            QuestStage(id="s2", description="函数进阶", type="coding", target="intermediate_005"),
        ],
        rewards={"exp": 200, "silver": 100},
    )

    quests["side_duan_yu_love"] = Quest(
        id="side_duan_yu_love",
        title="段誉的情书",
        description="段誉请你帮忙写一封情书给王语嫣，需要用到def函数和参数传递。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=2,
        npc_giver="段誉",
        stages=[
            QuestStage(id="s1", description="def函数情书", type="coding", target="intermediate_001"),
            QuestStage(id="s2", description="参数传递", type="coding", target="intermediate_004"),
        ],
        rewards={"exp": 200, "silver": 100},
    )

    quests["side_arena"] = Quest(
        id="side_arena",
        title="擂台争霸",
        description="江湖擂台赛，连战三位对手证明实力。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=2,
        stages=[
            QuestStage(id="s1", description="对战小毛贼", type="combat", target="小毛贼"),
            QuestStage(id="s2", description="对战铁掌帮弟子", type="combat", target="铁掌帮弟子"),
            QuestStage(id="s3", description="对战欧阳克", type="combat", target="欧阳克"),
        ],
        rewards={"exp": 300, "silver": 150},
    )

    quests["side_medicine"] = Quest(
        id="side_medicine",
        title="大理求药",
        description="段誉请你前往大理城求取灵药，需要用到import引入药方。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=2,
        npc_giver="段誉",
        stages=[
            QuestStage(id="s1", description="前往大理城", type="travel", target="大理城"),
            QuestStage(id="s2", description="import药方", type="coding", target="intermediate_006"),
        ],
        rewards={"exp": 200, "silver": 100},
    )

    quests["side_antique"] = Quest(
        id="side_antique",
        title="鬼市淘宝",
        description="鬼市商人有一件神秘古董，用class知识鉴定真伪。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=3,
        npc_giver="鬼市商人",
        stages=[
            QuestStage(id="s1", description="class鉴定", type="coding", target="intermediate_009"),
            QuestStage(id="s2", description="还价交易", type="talk", target="鬼市商人"),
        ],
        rewards={"exp": 280, "silver": 150},
    )

    quests["side_weixiaobao"] = Quest(
        id="side_weixiaobao",
        title="韦小宝的赌局",
        description="韦小宝设下一场赌局，正则、加密、排序缺一不可。",
        quest_type=QuestType.SIDE,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=4,
        npc_giver="韦小宝",
        stages=[
            QuestStage(id="s1", description="韦小宝的邀请", type="talk", target="韦小宝"),
            QuestStage(id="s2", description="正则破解", type="coding", target="advanced_004"),
            QuestStage(id="s3", description="加密挑战", type="coding", target="advanced_005"),
            QuestStage(id="s4", description="排序决胜", type="coding", target="advanced_006"),
        ],
        rewards={"exp": 500, "silver": 300},
    )

    quests["side_hidden_dugu"] = Quest(
        id="side_hidden_dugu",
        title="隐·独孤九式",
        description="在华山上发现一处隐秘洞窟，独孤求败的遗刻蕴含着无穷奥义。",
        quest_type=QuestType.HIDDEN,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=4,
        stages=[
            QuestStage(id="s1", description="探索华山秘洞", type="explore", target="华山"),
            QuestStage(id="s2", description="继承遗刻", type="coding", target="intermediate_010"),
            QuestStage(id="s3", description="生成器之悟", type="coding", target="advanced_001"),
        ],
        rewards={"exp": 600, "silver": 400},
    )

    quests["side_hidden_python23"] = Quest(
        id="side_hidden_python23",
        title="隐·Python 23式",
        description="一本古老的秘籍记载了23种招式，只有真正的高手才能领悟。",
        quest_type=QuestType.HIDDEN,
        chapter=None,
        status=QuestStatus.LOCKED,
        required_level=3,
        stages=[
            QuestStage(id="s1", description="列表推导式", type="coding", target="intermediate_002"),
            QuestStage(id="s2", description="import融合", type="coding", target="intermediate_006"),
            QuestStage(id="s3", description="装饰器升华", type="coding", target="intermediate_012"),
        ],
        rewards={"exp": 500, "silver": 300},
    )

    return quests


def get_all_quests() -> Dict[str, Quest]:
    """获取所有任务（主线+扩展+神雕+倚天）"""
    all_q = get_quests()
    all_q.update(_get_extended_quests())
    all_q.update(_get_shendiao_quests())
    all_q.update(_get_yitian_quests())
    return all_q


# 别名，方便外部统一调用
get_all_chapters = get_chapters


def get_all_events():
    """获取随机事件（复用 world/events.py）"""
    from world.events import RANDOM_EVENTS
    return RANDOM_EVENTS


# ========== 扩展任务（v3.1 增补） ==========
# 在 get_quests() 返回前追加

def _get_extended_quests():
    """扩展任务——每章增加到10+个"""
    quests = {}

    # === 第一章扩展 ===
    quests["ch1_guojing_math"] = Quest(
        id="ch1_guojing_math", title="帮郭靖算账", description="帮憨厚的郭靖计算军费",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_awaken"],
        stages=[
            QuestStage("s1", "综合运算", "coding", "basics_025",
                       narration_before="郭靖挠着头：「大侠帮帮我，我算不清军费……」"),
        ],
        rewards={"exp": 80, "silver": 30},
    )
    quests["ch1_rong_menu"] = Quest(
        id="ch1_rong_menu", title="黄蓉菜单", description="桃花岛的趣味菜单",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_save_rong"],
        stages=[
            QuestStage("s1", "列表计算", "coding", "basics_026",
                       narration_before="黄蓉笑嘻嘻地翻开菜单：「叫花鸡、递归排骨、O(n²)慢炖牛肉……嘻嘻！」"),
        ],
        rewards={"exp": 80, "silver": 30},
    )
    quests["ch1_hong_recipe"] = Quest(
        id="ch1_hong_recipe", title="叫花鸡秘方", description="洪七公传授秘方配比",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_hong_qigong"],
        stages=[
            QuestStage("s1", "配比计算", "coding", "basics_027",
                       narration_before="洪七公：「盐3、酱油2、料酒1——记住这配比！」"),
        ],
        rewards={"exp": 80, "silver": 30},
    )
    quests["ch1_taohua_maze"] = Quest(
        id="ch1_taohua_maze", title="桃花奇门阵", description="破解桃花岛三层阵法",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_taohua"],
        stages=[
            QuestStage("s1", "嵌套列表", "coding", "basics_028",
                       narration_before="桃花岛深处的奇门阵，分三层，每层四个方位……"),
        ],
        rewards={"exp": 90, "silver": 35},
    )
    quests["ch1_snake_pattern"] = Quest(
        id="ch1_snake_pattern", title="蛇阵规律", description="破解欧阳锋蛇阵的数量规律",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_mei_chaofeng"],
        stages=[
            QuestStage("s1", "斐波那契求和", "coding", "basics_029",
                       narration_before="欧阳锋的蛇阵遵循斐波那契规律——1,1,2,3,5,8..."),
        ],
        rewards={"exp": 90, "silver": 35},
    )
    quests["ch1_black_chase"] = Quest(
        id="ch1_black_chase", title="黑风追杀", description="while循环模拟逃跑",
        quest_type=QuestType.MAIN, chapter=1, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch1_mei_chaofeng"],
        stages=[
            QuestStage("s1", "while循环模拟", "coding", "basics_030",
                       narration_before="梅超风的笑声在身后回荡……距离在一点点缩短！"),
        ],
        rewards={"exp": 90, "silver": 35},
    )
    quests["ch1_weixiaobao_bet"] = Quest(
        id="ch1_weixiaobao_bet", title="韦小宝的赌局", description="真假判断",
        quest_type=QuestType.SIDE, chapter=1, required_level=1,
        npc_giver="韦小宝", status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "布尔运算", "coding", "basics_036",
                       narration_before="韦小宝嘻嘻一笑：「来赌一把真假题！」"),
        ],
        rewards={"exp": 70, "silver": 25},
    )

    # === 第二章扩展 ===
    quests["ch2_qiaofeng_clue"] = Quest(
        id="ch2_qiaofeng_clue", title="身世线索·查找", description="帮乔峰查找线索",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_xingzilin"],
        stages=[
            QuestStage("s1", "字符串查找", "coding", "basics_031",
                       narration_before="乔峰眉头紧锁：「密信里藏着我的身世之谜……」"),
        ],
        rewards={"exp": 100, "silver": 40},
    )
    quests["ch2_duan_sword"] = Quest(
        id="ch2_duan_sword", title="六脉神剑·选择", description="段誉学六脉神剑",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_duan_yu"],
        stages=[
            QuestStage("s1", "多分支选择", "coding", "basics_032",
                       narration_before="段誉手忙脚乱地比划着：「大拇指是哪个剑法来着？」"),
        ],
        rewards={"exp": 100, "silver": 40},
    )
    quests["ch2_poison_dict"] = Quest(
        id="ch2_poison_dict", title="星宿毒典", description="星宿派毒药配方",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_shaoshi"],
        stages=[
            QuestStage("s1", "字典嵌套", "coding", "basics_033",
                       narration_before="丁老怪嘿嘿笑道：「看懂这本毒典再说！」"),
        ],
        rewards={"exp": 100, "silver": 40},
    )
    quests["ch2_lingjiu_path"] = Quest(
        id="ch2_lingjiu_path", title="灵鹫密道", description="统计密道方向",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_tonglao"],
        stages=[
            QuestStage("s1", "列表count", "coding", "basics_034",
                       narration_before="灵鹫宫主：「密道路径你记得吗？」"),
        ],
        rewards={"exp": 100, "silver": 40},
    )
    quests["ch2_clue_filter"] = Quest(
        id="ch2_clue_filter", title="线索筛选", description="列表推导式筛选线索",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_qiaofeng_clue"],
        stages=[
            QuestStage("s1", "列表推导式进阶", "coding", "intermediate_013",
                       narration_before="更多线索涌入，需要用推导式快速筛选……"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch2_sword_combo"] = Quest(
        id="ch2_sword_combo", title="六脉连招", description="多参数函数组合剑法",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_duan_sword"],
        stages=[
            QuestStage("s1", "函数+列表推导", "coding", "intermediate_014",
                       narration_before="段誉终于学会了组合招式！"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch2_zhenlong_recursion"] = Quest(
        id="ch2_zhenlong_recursion", title="珍珑续·递归", description="递归求解棋局",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_xuzhu"],
        stages=[
            QuestStage("s1", "递归基础", "coding", "intermediate_015",
                       narration_before="珍珑棋局更深层的解法——递归！"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch2_zhemeshou"] = Quest(
        id="ch2_zhemeshou", title="天山折梅手", description="多重继承融合武功",
        quest_type=QuestType.MAIN, chapter=2, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch2_tonglao"],
        stages=[
            QuestStage("s1", "多重继承", "coding", "intermediate_020",
                       narration_before="天山童姥：「折梅手是掌法和剑法的融合！」"),
        ],
        rewards={"exp": 130, "silver": 55},
    )

    # === 第三章扩展 ===
    quests["ch3_linghu_drunk"] = Quest(
        id="ch3_linghu_drunk", title="醉剑·随机", description="令狐冲醉剑随机出招",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "random模块", "coding", "basics_035",
                       narration_before="令狐冲喝到第十碗，摇摇晃晃地挥出一剑……"),
        ],
        rewards={"exp": 100, "silver": 40},
    )
    quests["ch3_spy_closure"] = Quest(
        id="ch3_spy_closure", title="日月密探", description="闭包暗号系统",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch3_riyue"],
        stages=[
            QuestStage("s1", "闭包", "coding", "intermediate_016",
                       narration_before="潜入日月神教，需要暗号系统……"),
        ],
        rewards={"exp": 130, "silver": 55},
    )
    quests["ch3_absorb_boost"] = Quest(
        id="ch3_absorb_boost", title="吸星增强", description="装饰器进阶",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch3_ren"],
        stages=[
            QuestStage("s1", "装饰器进阶", "coding", "intermediate_017",
                       narration_before="吸星大法可以增强任何武功！"),
        ],
        rewards={"exp": 130, "silver": 55},
    )
    quests["ch3_songshan_filter"] = Quest(
        id="ch3_songshan_filter", title="嵩山筛选", description="列表推导式筛选高手",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch3_songshan"],
        stages=[
            QuestStage("s1", "列表推导+字典", "coding", "intermediate_021",
                       narration_before="各派高手数据涌入，快速筛选实力最强者……"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch3_dongfang_batch"] = Quest(
        id="ch3_dongfang_batch", title="葵花速战", description="分批处理东方不败攻击",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch3_dongfang"],
        stages=[
            QuestStage("s1", "列表切片", "coding", "intermediate_023",
                       narration_before="东方不败攻击太快，必须分批处理！"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch3_parallel"] = Quest(
        id="ch3_parallel", title="葵花并行", description="高阶函数模拟并行",
        quest_type=QuestType.MAIN, chapter=3, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch3_dongfang_batch"],
        stages=[
            QuestStage("s1", "高阶函数", "coding", "advanced_009",
                       narration_before="用高阶函数模拟同时发动多个攻击……"),
        ],
        rewards={"exp": 150, "silver": 60},
    )

    # === 第四章扩展 ===
    quests["ch4_aobai_cipher"] = Quest(
        id="ch4_aobai_cipher", title="鳌拜密码信", description="凯撒密码解密",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_kangxi"],
        stages=[
            QuestStage("s1", "凯撒解密", "coding", "intermediate_022",
                       narration_before="鳌拜的密信用了凯撒加密……"),
        ],
        rewards={"exp": 130, "silver": 55},
    )
    quests["ch4_wives_birthday"] = Quest(
        id="ch4_wives_birthday", title="七个老婆生日", description="日期排序",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_wives"],
        stages=[
            QuestStage("s1", "排序", "coding", "intermediate_018",
                       narration_before="韦小宝愁眉苦脸：「七个老婆的生日老是记混……」"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch4_jing_set"] = Quest(
        id="ch4_jing_set", title="四十二章经·碎片", description="集合操作",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_jing"],
        stages=[
            QuestStage("s1", "集合操作", "coding", "intermediate_019",
                       narration_before="韦小宝和康熙比对碎片——集合运算！"),
        ],
        rewards={"exp": 120, "silver": 50},
    )
    quests["ch4_secret_bfs"] = Quest(
        id="ch4_secret_bfs", title="皇宫密道·BFS", description="BFS最短路径",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_sea"],
        stages=[
            QuestStage("s1", "BFS图算法", "coding", "advanced_010",
                       narration_before="皇宫密道如迷宫，用BFS找出最短路径……"),
        ],
        rewards={"exp": 200, "silver": 80},
    )
    quests["ch4_aobai_vigenere"] = Quest(
        id="ch4_aobai_vigenere", title="鳌拜密码·进阶", description="维吉尼亚密码",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_aobai_cipher"],
        stages=[
            QuestStage("s1", "维吉尼亚解密", "coding", "advanced_014",
                       narration_before="鳌拜用了更复杂的加密——维吉尼亚密码！"),
        ],
        rewards={"exp": 200, "silver": 80},
    )
    quests["ch4_kangxi_amount"] = Quest(
        id="ch4_kangxi_amount", title="奏折金额", description="正则提取金额",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_kangxi"],
        stages=[
            QuestStage("s1", "正则进阶", "coding", "advanced_016",
                       narration_before="奏折中有大量军费记录，用正则批量提取……"),
        ],
        rewards={"exp": 150, "silver": 60},
    )
    quests["ch4_sea_grid"] = Quest(
        id="ch4_sea_grid", title="海战布阵", description="二维数组战船",
        quest_type=QuestType.MAIN, chapter=4, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch4_sea"],
        stages=[
            QuestStage("s1", "二维数组", "coding", "advanced_012",
                       narration_before="海战布阵——在网格上放置战船！"),
        ],
        rewards={"exp": 180, "silver": 70},
    )

    # === 第五章扩展 ===
    quests["ch5_mirror"] = Quest(
        id="ch5_mirror", title="镜像之战", description="重构镜像的烂代码",
        quest_type=QuestType.MAIN, chapter=5, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch5_project"],
        stages=[
            QuestStage("s1", "代码重构", "coding", "advanced_013",
                       narration_before="你的镜像出现了！它写的代码又臭又长……"),
        ],
        rewards={"exp": 200, "silver": 80},
    )
    quests["ch5_ranking"] = Quest(
        id="ch5_ranking", title="武林排行榜系统", description="综合系统设计",
        quest_type=QuestType.MAIN, chapter=5, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch5_mirror"],
        stages=[
            QuestStage("s1", "系统设计", "coding", "advanced_011",
                       narration_before="用class设计完整的武林排行榜系统……"),
        ],
        rewards={"exp": 250, "silver": 100},
    )
    quests["ch5_tournament"] = Quest(
        id="ch5_tournament", title="华山论剑·淘汰赛", description="完整RPG战斗系统",
        quest_type=QuestType.MAIN, chapter=5, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch5_ranking"],
        stages=[
            QuestStage("s1", "RPG系统", "coding", "advanced_015",
                       narration_before="最终系统——完整的淘汰赛战斗系统！"),
        ],
        rewards={"exp": 300, "silver": 120},
    )
    quests["ch5_wulin_project"] = Quest(
        id="ch5_wulin_project", title="武林志·终极", description="第五章终极项目",
        quest_type=QuestType.MAIN, chapter=5, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch5_tournament"],
        stages=[
            QuestStage("s1", "终极项目", "coding", "projects_001",
                       narration_before="华山之巅的终极项目——武林排行榜！"),
        ],
        rewards={"exp": 500, "silver": 200},
    )
    quests["ch5_system"] = Quest(
        id="ch5_system", title="门派功法系统", description="综合class项目",
        quest_type=QuestType.MAIN, chapter=5, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch5_project"],
        stages=[
            QuestStage("s1", "综合class", "coding", "intermediate_024",
                       narration_before="将各门派武功整理成管理系统……"),
        ],
        rewards={"exp": 150, "silver": 60},
    )

    return quests


# ==================== 第六章：神雕侠侣 ====================

def _get_shendiao_chapters():
    """神雕侠侣章节定义"""
    return {
        6: Chapter(
            id=6, title="神雕侠侣", description="杨过的逆天之路——古墓、断臂、重剑、十六年",
            required_level=5, required_quests=["ch4_boss"], location="古墓",
            opening_narration=(
                "终南山下，活死人墓。神雕侠侣，绝迹江湖。\n\n"
                "你踏入古墓，寒气逼人。一个白衣女子飘然而至——\n"
                "「你……不是过儿。但你身上有他的气息。」\n\n"
                "古墓派、断臂大侠、玄铁重剑……一段传奇即将展开。"
            ),
            closing_narration=(
                "断肠崖底，杨过与小龙女重逢。\n\n"
                "十六年的等待，终成眷属。\n\n"
                "「过儿……」「龙儿……」\n\n"
                "江湖传说：神雕侠侣，绝迹江湖。\n\n"
                "但倚天屠龙的故事，才刚刚开始……"
            ),
            quests=[
                "ch6_tomb", "ch6_closure", "ch6_yang_arm", "ch6_jianzhong",
                "ch6_heavy_sword", "ch6_guoxiang", "ch6_jinlun", "ch6_16years",
                "ch6_reunion", "ch6_gongsun", "ch6_boss", "ch6_guofu",
                "ch6_easter_egg",
            ],
        ),
    }


def _get_shendiao_quests():
    """神雕侠侣任务"""
    quests = {}

    quests["ch6_tomb"] = Quest(
        id="ch6_tomb", title="古墓初遇", description="进入活死人墓",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "见小龙女", "talk", "小龙女",
                       narration_before="你踏入古墓，一个白衣女子飘然而至……"),
            QuestStage("s2", "学古墓心法", "coding", "basics_037",
                       narration_before="小龙女：「古墓武功，不传外人。但你可以学。」"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch6_closure"] = Quest(
        id="ch6_closure", title="玉女心经", description="闭包修炼",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_tomb"],
        stages=[
            QuestStage("s1", "闭包进阶", "coding", "intermediate_025",
                       narration_before="玉女心经需要闭包来记住修炼层数……"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch6_yang_arm"] = Quest(
        id="ch6_yang_arm", title="杨过断臂", description="异常处理与容错",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_closure"],
        stages=[
            QuestStage("s1", "异常处理容错", "coding", "basics_038",
                       narration_before="杨过看着空荡荡的右袖：「一只手照样写出好代码。」"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch6_jianzhong"] = Quest(
        id="ch6_jianzhong", title="独孤剑冢", description="四把剑代表编程四境界",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_yang_arm"],
        stages=[
            QuestStage("s1", "四境界", "coding", "basics_039",
                       narration_before="剑冢四剑——利剑、软剑、重剑、木剑。"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch6_heavy_sword"] = Quest(
        id="ch6_heavy_sword", title="玄铁重剑", description="类进阶",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_jianzhong"],
        stages=[
            QuestStage("s1", "__str__魔术方法", "coding", "intermediate_026",
                       narration_before="重剑无锋，大巧不工。扎实的设计才是王道。"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch6_guoxiang"] = Quest(
        id="ch6_guoxiang", title="小东邪降生", description="创建对象",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_heavy_sword"],
        stages=[
            QuestStage("s1", "类与__init__", "coding", "basics_040",
                       narration_before="襄阳城内，小郭襄出生了！"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch6_jinlun"] = Quest(
        id="ch6_jinlun", title="金轮法王", description="五轮齐出",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_heavy_sword"],
        stages=[
            QuestStage("s1", "for循环", "coding", "basics_041",
                       narration_before="金轮法王五指齐弹，五个法轮同时飞出！"),
            QuestStage("s2", "并行模拟", "coding", "intermediate_028",
                       narration_before="五轮并行出击！"),
            QuestStage("s3", "击败金轮", "combat", "金轮法王",
                       narration_before="杨过VS金轮法王——终战！"),
        ],
        rewards={"exp": 300, "silver": 100},
    )
    quests["ch6_16years"] = Quest(
        id="ch6_16years", title="十六年等待", description="range与数据持久化",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_jinlun"],
        stages=[
            QuestStage("s1", "range生成", "coding", "basics_042",
                       narration_before="断肠崖边，杨过一等就是十六年……"),
            QuestStage("s2", "数据持久化", "coding", "intermediate_027",
                       narration_before="每一年的等待都刻在了崖壁上……"),
        ],
        rewards={"exp": 220, "silver": 80},
    )
    quests["ch6_reunion"] = Quest(
        id="ch6_reunion", title="谷底重逢", description="数据序列化",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_16years"],
        stages=[
            QuestStage("s1", "JSON序列化", "coding", "advanced_018",
                       narration_before="十六年后，杨过终于等到了小龙女！"),
        ],
        rewards={"exp": 250, "silver": 90},
    )
    quests["ch6_gongsun"] = Quest(
        id="ch6_gongsun", title="绝情谷主", description="公孙止的阴谋",
        quest_type=QuestType.SIDE, chapter=6, required_level=5,
        npc_giver="公孙止", status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "见公孙止", "talk", "公孙止"),
            QuestStage("s2", "击败公孙止", "combat", "欧阳克"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch6_guofu"] = Quest(
        id="ch6_guofu", title="郭芙之过", description="郭芙斩臂事件",
        quest_type=QuestType.SIDE, chapter=6, required_level=5,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "与郭芙对话", "talk", "郭芙"),
        ],
        rewards={"exp": 100, "silver": 30},
    )
    quests["ch6_boss"] = Quest(
        id="ch6_boss", title="神雕终战", description="襄阳大战",
        quest_type=QuestType.MAIN, chapter=6, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch6_reunion"],
        stages=[
            QuestStage("s1", "襄阳大战", "combat", "金轮法王",
                       narration_before="襄阳城下，金轮法王再次出现！"),
        ],
        rewards={"exp": 350, "silver": 150},
    )
    quests["ch6_easter_egg"] = Quest(
        id="ch6_easter_egg", title="【彩蛋】一见误终身", description="郭襄的思念",
        quest_type=QuestType.HIDDEN, chapter=6, required_level=6,
        status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "迭代器协议", "coding", "advanced_019",
                       narration_before="「风陵渡口初相遇，一见杨过误终身。」"),
        ],
        rewards={"exp": 300, "silver": 100},
    )

    return quests


# ==================== 第七章：倚天屠龙记 ====================

def _get_yitian_chapters():
    """倚天屠龙记章节定义"""
    return {
        7: Chapter(
            id=7, title="倚天屠龙记", description="张无忌的江湖路——明教、六大派、四女争夫",
            required_level=6, required_quests=["ch6_boss"], location="冰火岛",
            opening_narration=(
                "冰火岛上，一个孩子在刀剑之间长大。\n\n"
                "张无忌——注定要卷入江湖最大风波的人。\n"
                "明教、六大派、屠龙刀、倚天剑……\n\n"
                "「武林至尊，宝刀屠龙，号令天下，莫敢不从。」"
            ),
            closing_narration=(
                "张无忌放下了屠龙刀，牵起赵敏的手。\n\n"
                "「这天下，让给朱元璋吧。我只想和敏敏过一辈子。」\n\n"
                "倚天屠龙的故事落幕了。\n"
                "但华山论剑的传说，还在前方等待……"
            ),
            quests=[
                "ch7_born", "ch7_medicine", "ch7_mingjiao", "ch7_four_kings",
                "ch7_six_sects", "ch7_transfer", "ch7_taichi", "ch7_zhaomin",
                "ch7_blade_sword", "ch7_wudang", "ch7_chengkun", "ch7_choice",
                "ch7_boss",
            ],
        ),
    }


def _get_yitian_quests():
    """倚天屠龙记任务"""
    quests = {}

    quests["ch7_born"] = Quest(
        id="ch7_born", title="冰火岛童年", description="配置修炼环境",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "环境配置", "coding", "basics_043",
                       narration_before="冰火岛上，小无忌需要配置修炼环境……"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch7_medicine"] = Quest(
        id="ch7_medicine", title="蝴蝶谷学医", description="纯函数药方",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_born"],
        stages=[
            QuestStage("s1", "函数式药方", "coding", "basics_044",
                       narration_before="胡青牛教张无忌开药方——纯函数，无副作用！"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch7_mingjiao"] = Quest(
        id="ch7_mingjiao", title="光明顶明教", description="到达明教",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_medicine"],
        stages=[
            QuestStage("s1", "前往光明顶", "travel", "光明顶"),
            QuestStage("s2", "见谢逊", "talk", "谢逊"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch7_four_kings"] = Quest(
        id="ch7_four_kings", title="四大法王", description="多态展示",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_mingjiao"],
        stages=[
            QuestStage("s1", "元组解包", "coding", "basics_045",
                       narration_before="四大法王齐聚——各有绝技！"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch7_six_sects"] = Quest(
        id="ch7_six_sects", title="六大派围攻", description="观察者模式",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_four_kings"],
        stages=[
            QuestStage("s1", "观察者模式", "coding", "intermediate_029",
                       narration_before="六大派围攻光明顶！观察者模式——一呼百应。"),
            QuestStage("s2", "击败围攻", "combat", "铁掌帮弟子",
                       narration_before="张无忌一人抵挡六大派！"),
        ],
        rewards={"exp": 250, "silver": 90},
    )
    quests["ch7_transfer"] = Quest(
        id="ch7_transfer", title="乾坤大挪移", description="元编程",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_six_sects"],
        stages=[
            QuestStage("s1", "元编程属性修改", "coding", "intermediate_030",
                       narration_before="乾坤大挪移——运行时改变一切属性！"),
            QuestStage("s2", "__getattr__进阶", "coding", "advanced_017",
                       narration_before="更高级的元编程——动态属性获取！"),
        ],
        rewards={"exp": 280, "silver": 100},
    )
    quests["ch7_taichi"] = Quest(
        id="ch7_taichi", title="武当太极", description="迭代器与装饰器",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_transfer"],
        stages=[
            QuestStage("s1", "太极迭代器", "coding", "intermediate_031",
                       narration_before="张三丰传授太极——lazy evaluation，用到才计算。"),
            QuestStage("s2", "太极装饰器", "coding", "intermediate_033",
                       narration_before="借力打力——装饰器在原招式上添加变化。"),
        ],
        rewards={"exp": 280, "silver": 100},
    )
    quests["ch7_zhaomin"] = Quest(
        id="ch7_zhaomin", title="赵敏诈婚", description="Mock对象",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_six_sects"],
        stages=[
            QuestStage("s1", "真假婚约", "coding", "basics_047",
                       narration_before="赵敏笑盈盈地拿出几份文件……"),
            QuestStage("s2", "Mock测试", "coding", "intermediate_032",
                       narration_before="Mock对象——看起来像真的，其实不是。"),
        ],
        rewards={"exp": 220, "silver": 80},
    )
    quests["ch7_blade_sword"] = Quest(
        id="ch7_blade_sword", title="屠龙倚天", description="加密解密",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_transfer"],
        stages=[
            QuestStage("s1", "反转解密", "coding", "basics_048",
                       narration_before="屠龙刀和倚天剑中藏着秘密……"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch7_wudang"] = Quest(
        id="ch7_wudang", title="武当学艺", description="见张三丰",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_taichi"],
        stages=[
            QuestStage("s1", "见张三丰", "talk", "张三丰",
                       narration_before="武当山上，百岁张三丰还在练太极……"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch7_chengkun"] = Quest(
        id="ch7_chengkun", title="幕后黑手", description="找出成昆",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_six_sects"],
        stages=[
            QuestStage("s1", "调试找黑手", "coding", "advanced_020",
                       narration_before="成昆——一切阴谋的幕后黑手。像调试bug一样找出他！"),
        ],
        rewards={"exp": 200, "silver": 70},
    )
    quests["ch7_choice"] = Quest(
        id="ch7_choice", title="四女抉择", description="张无忌的选择困难",
        quest_type=QuestType.SIDE, chapter=7, required_level=6,
        npc_giver="张无忌", status=QuestStatus.LOCKED,
        stages=[
            QuestStage("s1", "人气投票", "coding", "basics_046",
                       narration_before="赵敏、周芷若、小昭、殷离——到底选谁？"),
        ],
        rewards={"exp": 180, "silver": 60},
    )
    quests["ch7_boss"] = Quest(
        id="ch7_boss", title="倚天终战", description="少林寺大战",
        quest_type=QuestType.MAIN, chapter=7, status=QuestStatus.LOCKED,
        prerequisite_quests=["ch7_wudang", "ch7_chengkun"],
        stages=[
            QuestStage("s1", "少林寺大战", "combat", "东方不败",
                       narration_before="少林寺下，三僧联手——张无忌的终战！"),
        ],
        rewards={"exp": 400, "silver": 200},
    )

    return quests
