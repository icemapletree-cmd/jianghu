"""
随机事件数据 - 江湖路上的奇遇与凶险
"""
from engine.story import RandomEvent, DialogueChoice, DialogueLine

def _dl(speaker, text, emotion=""):
    return DialogueLine(speaker=speaker, text=text, emotion=emotion)

def _ch(text, **kwargs):
    return DialogueChoice(text=text, consequence=kwargs)


RANDOM_EVENTS = [
    # ---- 战斗类 ----
    RandomEvent(
        id="event_bandit_road", name="路遇山贼",
        description="你正在赶路，突然从路旁的树林中跳出几个蒙面人！",
        narration="「此路是我开，此树是我栽，要想从此过，留下买路财！」\n\n几个山贼拦住了你的去路，手中晃着生锈的刀。",
        trigger_type="travel", probability=0.25, min_level=0,
        combat_enemy="小毛贼",
        choices=[
            _ch("拔刀迎战！"),
            _ch("给他们几两银子（-20银两）", silver=-20),
        ],
    ),
    RandomEvent(
        id="event_shadow_ambush", name="暗影伏击",
        description="一道黑影从暗处掠出，直奔你而来！",
        narration="你感到背后一阵杀气！还没来得及反应，一柄寒光闪闪的短刀已经刺到眼前！\n\n「算圣门的余孽，今天就是你的死期！」",
        trigger_type="travel", probability=0.15, min_level=3,
        combat_enemy="铁掌帮弟子",
        choices=[_ch("迎战！")],
    ),
    RandomEvent(
        id="event_arena", name="路边擂台",
        description="前方广场上搭着一个擂台，有人在上面叫阵。",
        narration="「有胆量的就上来！打败我，赏银五十两！」\n\n一个壮汉在擂台上挥舞着双拳，周围围观的人群发出阵阵喝彩。",
        trigger_type="travel", probability=0.2, min_level=1,
        combat_enemy="小毛贼",
        rewards={"silver": 50, "exp": 80},
        choices=[
            _ch("登台应战！"),
            _ch("旁观就好", silver=0),
        ],
    ),
    
    # ---- 善举类 ----
    RandomEvent(
        id="event_injured_traveler", name="受伤的旅人",
        description="路边有一个人倒在草丛中，身上有血迹。",
        narration="你走近一看，是一个受了重伤的旅人。他看到你，虚弱地伸出手：\n\n「大侠……救救我……我被山贼劫了……」",
        trigger_type="travel", probability=0.3, min_level=0,
        choices=[
            _ch("用银两帮他治伤（-30银两，侠义+15）", chivalry=15, silver=-30),
            _ch("给他一些伤药（如果有的话）", chivalry=10),
            _ch("路途凶险，赶紧离开", chivalry=-5),
        ],
    ),
    RandomEvent(
        id="event_drowning_child", name="河中幼童",
        description="河边传来呼救声，一个小孩掉进了河里！",
        narration="「救命啊！有人落水了！」\n\n一个小孩在河中挣扎，水流湍急，情况危急。",
        trigger_type="travel", probability=0.2, min_level=0,
        choices=[
            _ch("纵身跳入河中救人！（侠义+20，需通过编程挑战）", chivalry=20),
            _ch("找根绳子拉他上来（侠义+10）", chivalry=10),
            _ch("我不会游泳……快去找人来！", chivalry=0),
        ],
    ),
    RandomEvent(
        id="event_old_woman", name="迷路的老妪",
        description="一个老妇人在路口茫然四顾，似乎迷了路。",
        narration="「年轻人，请问去大理城怎么走？我老眼昏花，记不清路了。」\n\n老妇人拄着拐杖，满脸焦虑。",
        trigger_type="travel", probability=0.25, min_level=0,
        choices=[
            _ch("亲自送她到大理城（侠义+10，需额外旅行时间）", chivalry=10),
            _ch("详细指明方向", chivalry=5),
            _ch("你自己看路牌吧", chivalry=-3),
        ],
    ),
    
    # ---- 宝物类 ----
    RandomEvent(
        id="event_chest", name="神秘宝箱",
        description="路边灌木丛中隐约可见一个铜色箱子。",
        narration="你拨开灌木，发现一个落满灰尘的铜箱。箱子上刻着奇怪的符文，旁边还有一行小字：\n\n「能解开此锁者，方可取宝。」",
        trigger_type="travel", probability=0.2, min_level=1,
        quest_problem="intermediate_001",
        rewards={"silver": 100, "exp": 80},
        choices=[_ch("尝试解开符文锁")],
    ),
    RandomEvent(
        id="event_hidden_cave", name="隐秘山洞",
        description="山壁上有一个被藤蔓遮住的洞口。",
        narration="你无意中拨开藤蔓，发现了一个幽深的洞穴。里面似乎有什么东西在发光……\n\n但同时，你也听到了洞穴深处传来的低沉呼吸声。",
        trigger_type="travel", probability=0.15, min_level=2,
        choices=[
            _ch("小心翼翼地进去探索"),
            _ch("太危险了，还是别进去", silver=0),
        ],
    ),
    
    # ---- NPC类 ----
    RandomEvent(
        id="event_medicine_seller", name="江湖郎中",
        description="一个背着药箱的老者在路边摆了个摊。",
        narration="「祖传秘方！包治百病！不论内外伤，一帖见效！」\n\n老郎中笑眯眯地招呼你，药箱里瓶瓶罐罐叮当作响。",
        trigger_type="travel", probability=0.3, min_level=0,
        choices=[
            _ch("买一帖伤药（-25银两）", silver=-25),
            _ch("买一瓶金创药（-50银两）", silver=-50),
            _ch("我不需要，谢谢"),
        ],
    ),
    RandomEvent(
        id="event_old_friend", name="故人重逢",
        description="一个人从人群中走出来，似乎认出了你。",
        narration="「等等……你莫不是……对！就是你！」\n\n一个面善的年轻人跑过来：\n「你还记得我吗？破庙那晚，你救过我！我后来打听你的下落很久了。」\n\n他递给你一个布包：「这是我在西域找到的，觉得你会用得上。」",
        trigger_type="travel", probability=0.15, min_level=2,
        rewards={"silver": 80, "exp": 50},
        choices=[_ch("收下礼物（银两+80，经验+50）")],
    ),
    RandomEvent(
        id="event_merchant_convoy", name="商队",
        description="一支商队正沿着官道前行，领队的商人在向你招手。",
        narration="「大侠！我们要去洛阳，路上不太安全，能否结伴同行？」\n\n商人笑容可掬：\n「当然不会让你白跑一趟，到了洛阳有重谢！」",
        trigger_type="travel", probability=0.25, min_level=1,
        rewards={"silver": 60},
        choices=[
            _ch("护送商队到洛阳（银两+60）", silver=60),
            _ch("抱歉，我有急事"),
        ],
    ),
    
    # ---- 天气类 ----
    RandomEvent(
        id="event_storm", name="暴风骤雨",
        description="天色突然暗了下来，乌云密布，一场暴风雨即将来临。",
        narration="狂风骤起，暴雨倾盆。你在路边找到一间废弃的茶棚躲雨。\n\n雨幕中，你隐约看到远处有几个人影在移动……",
        trigger_type="travel", probability=0.2, min_level=0,
        choices=[
            _ch("在茶棚中等待雨停"),
            _ch("冒着雨继续赶路（可能受伤）"),
        ],
    ),
    RandomEvent(
        id="event_fog", name="大雾弥漫",
        description="一场浓雾突然笼罩了四周，能见度极低。",
        narration="浓雾如同一堵白墙，三步之外便看不见人影。\n\n你在雾中隐约听到一个声音：\n「别动……你脚下的路……是假的……」\n\n低头一看，前方果然是一道悬崖！",
        trigger_type="travel", probability=0.2, min_level=0,
        choices=[
            _ch("后退，找其他路", silver=0),
            _ch("仔细听那个声音，寻找安全的路"),
        ],
    ),
    
    # ---- 陷阱/谜题类 ----
    RandomEvent(
        id="event_trap", name="机关陷阱",
        description="你一脚踩空，地面突然塌陷！",
        narration="「咔嚓——」你触发了地面的机关！\n\n地板开始下沉，四周的墙壁缓缓合拢。墙面上刻着一组数字和符号：\n\n「解开谜题，方可脱困。」",
        trigger_type="travel", probability=0.2, min_level=1,
        quest_problem="basics_008",
        choices=[_ch("冷静下来，分析墙上的线索")],
    ),
    RandomEvent(
        id="event_poison", name="毒雾弥漫",
        description="你走进一片树林，空气突然变得甜腻而诡异。",
        narration="你闻到一股奇异的甜香，随即感到头晕目眩！\n\n「不好！是毒雾！」\n\n你需要在毒雾中找到出路——关键是计算正确的方向。",
        trigger_type="travel", probability=0.15, min_level=2,
        quest_problem="basics_010",
        choices=[_ch("用编程知识计算安全路线")],
    ),
    
    # ---- 信息类 ----
    RandomEvent(
        id="event_notice_board", name="江湖通缉令",
        description="路旁的告示板上贴着一张新的通缉令。",
        narration="「通缉：暗影阁成员若干，悬赏白银五百两。」\n\n告示下方还有一行小字：\n「凡提供线索者，赏银五十两。六扇门启。」\n\n你若有所思地把告示内容记了下来。",
        trigger_type="travel", probability=0.25, min_level=2,
        rewards={"exp": 30},
        choices=[_ch("记下情报（经验+30）")],
    ),
    RandomEvent(
        id="event_rumor", name="道听途说",
        description="路边茶摊上，几个江湖客正在议论什么。",
        narration="「你们听说了吗？天龙寺的枯荣大师最近在找一个人。」\n「是吗？找什么人？」\n「不清楚，据说是跟一个消失多年的门派有关。」\n「算圣门？那个三百年前的传说？」\n「嘘——小声点！这事不能乱说！」",
        trigger_type="travel", probability=0.3, min_level=2,
        rewards={"exp": 20},
        choices=[_ch("默默记下（经验+20）")],
    ),
    
    # ---- 修炼类触发 ----
    RandomEvent(
        id="event_enlightenment", name="顿悟时刻",
        description="修炼中，你突然感到一股灵光闪过！",
        narration="你盘膝而坐，运行内息。忽然间，天地万物仿佛静止了。\n\n一个声音在你脑海中回响：\n「万物皆数，数皆可算。」\n\n你感到自己对编程之道有了新的领悟。",
        trigger_type="practice", probability=0.15, min_level=1,
        rewards={"exp": 100, "insight": 1},
        choices=[_ch("静心体悟（经验+100，悟性点+1）")],
    ),
    RandomEvent(
        id="event_challenge_scroll", name="天降秘卷",
        description="修炼时，一阵风把一张纸卷吹到了你面前。",
        narration="纸卷上写着：\n\n「能解此题者，方为编程真传。」\n\n下面是一道从未见过的编程难题。",
        trigger_type="practice", probability=0.2, min_level=2,
        quest_problem="intermediate_005",
        rewards={"exp": 120, "silver": 60},
        choices=[_ch("接受挑战")],
    ),
    RandomEvent(
        id="event_sparring", name="切磋邀请",
        description="一个路人看到你在修炼，走上前来。",
        narration="「嘿，我看你的招式不错，要不要切磋一下？」\n\n一个年轻侠客笑着摆出了起手式。",
        trigger_type="practice", probability=0.25, min_level=1,
        combat_enemy="小毛贼",
        rewards={"exp": 60, "silver": 30},
        choices=[
            _ch("来吧！"),
            _ch("改日再战"),
        ],
    ),
]


def get_all_events():
    return RANDOM_EVENTS
