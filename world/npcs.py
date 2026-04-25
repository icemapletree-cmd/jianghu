"""
NPC系统 - 角色化的江湖人物
"""
from dataclasses import dataclass, field
from typing import List, Dict, Optional
from engine.story import Dialogue, DialogueLine, DialogueChoice


@dataclass
class ShopItem:
    """NPC售卖的物品"""
    name: str
    item_type: str
    description: str
    price: int
    requires_affection: int = 0


@dataclass
class NPC:
    """NPC角色"""
    name: str
    title: str
    faction: str
    location: str
    personality: str
    description: str
    dialogues: List[Dialogue] = field(default_factory=list)
    shop_items: List[ShopItem] = field(default_factory=list)
    greeting: str = ""
    farewell: str = ""


def _dl(speaker: str, text: str, emotion: str = "") -> DialogueLine:
    """快捷创建对话行"""
    return DialogueLine(speaker=speaker, text=text, emotion=emotion)


def _choice(text: str, **kwargs) -> DialogueChoice:
    """快捷创建选项"""
    return DialogueChoice(text=text, **kwargs)


# ============ NPC 定义 ============

NPCS: Dict[str, NPC] = {}


def _register(npc: NPC):
    NPCS[npc.name] = npc
    return npc


# --- 中原 ---

_register(NPC(
    name="洪老丐", title="丐帮九袋长老", faction="丐帮",
    location="洛阳", personality="豪爽洒脱、嗜酒如命",
    description="一个衣衫褴褛的老乞丐，腰间挂着九个布袋，浑身酒气，但眼神精光内敛。",
    greeting="嘿嘿，小子，来陪老叫花喝两碗？",
    farewell="酒没喝够，下次再来！嗝——",
    dialogues=[
        Dialogue(
            id="hong_initial", npc_name="洪老丐",
            lines=[
                _dl("洪老丐", "哟，这位小兄弟，面生得很哪。"),
                _dl("洪老丐", "看你这副狼狈样，是从哪儿逃出来的？"),
                _dl("洪老丐", "罢了罢了，相逢即是有缘。老叫花请你喝碗酒！"),
                _dl("洪老丐", "我叫洪七公……不是，我叫洪老丐。别搞混了。"),
            ],
            requires_level=0, one_time=True,
        ),
        Dialogue(
            id="hong_secret", npc_name="洪老丐",
            lines=[
                _dl("洪老丐", "小子，你那纸条上的印章……老叫花好像见过。"),
                _dl("洪老丐", "三十年前，武林中曾有一门绝学，据说以'算筹之道'参悟天地。"),
                _dl("洪老丐", "后来那门派一夜之间消失了，只留下一些残篇断简。"),
                _dl("洪老丐", "你的纸条上，盖的就是那个门派的印章——【算圣门】。"),
                _dl("洪老丐", "此事不可声张！暗影阁的人也在找这些东西，你务必小心。"),
            ],
            choices=[
                _choice("多谢前辈指点！（侠义值+10）",
                        consequence={"chivalry": 10}),
                _choice("暗影阁是什么来头？",
                        consequence={"flag": "asked_about_shadow"}),
            ],
            requires_level=1, requires_quest="ch1_escape", one_time=True,
        ),
        Dialogue(
            id="hong_recommend", npc_name="洪老丐",
            lines=[
                _dl("洪老丐", "小子，你根骨不错，该去拜个门派好好学学了。"),
                _dl("洪老丐", "华山派剑法凌厉，少林寺底蕴深厚，武当派太极玄妙……"),
                _dl("洪老丐", "当然，你要是想学降龙十八掌——嗯，老叫花不太收徒。"),
                _dl("洪老丐", "去洛阳南边的武林盟打听打听吧，各派都在那里设有联络点。"),
            ],
            requires_level=2, requires_quest="ch2_inn_help", one_time=True,
        ),
    ],
    shop_items=[
        ShopItem("叫花鸡", "medicine", "恢复50气血，洪老丐的拿手好菜", 30),
        ShopItem("打狗棒法残页", "misc", "记载着打狗棒法的一点皮毛", 200, requires_affection=50),
    ],
))

_register(NPC(
    name="岳掌门", title="华山派掌门", faction="华山派",
    location="华山", personality="威严正气、一丝不苟",
    description="中年男子，身着青色长袍，剑眉星目，腰悬三尺青锋。华山气宗传人。",
    greeting="你是来拜师的？华山派不是什么人都收的。",
    farewell="好好练功，别丢了华山派的脸面。",
    dialogues=[
        Dialogue(
            id="yue_intro", npc_name="岳掌门",
            lines=[
                _dl("岳掌门", "来者何人？报上名来。"),
                _dl("岳掌门", "嗯……看你气宇不凡，是哪位前辈推荐你来的？"),
                _dl("岳掌门", "华山派以剑法见长，讲究'气剑合一'。"),
                _dl("岳掌门", "入门考核——先通过这道考验再说。"),
            ],
            requires_level=2, requires_faction="无门无派", one_time=True,
        ),
    ],
))

_register(NPC(
    name="方丈大师", title="少林寺方丈", faction="少林寺",
    location="少林寺", personality="慈悲为怀、深藏不露",
    description="白发白眉的老僧，身披金色袈裟，双目微阖，仿佛世间万事皆不动心。",
    greeting="阿弥陀佛，施主远道而来，辛苦了。",
    farewell="佛法无边，回头是岸。",
    dialogues=[
        Dialogue(
            id="fangzhang_intro", npc_name="方丈大师",
            lines=[
                _dl("方丈大师", "阿弥陀佛。施主身上有一股……奇特的气息。"),
                _dl("方丈大师", "贫僧观你骨骼，似乎与一种失传已久的功法有缘。"),
                _dl("方丈大师", "少林七十二绝技，虽非你本源功法，却可作为根基。"),
                _dl("方丈大师", "施主若愿意留下，需先通过入门试炼。"),
            ],
            requires_level=2, requires_faction="无门无派", one_time=True,
        ),
    ],
))

_register(NPC(
    name="郭守将", title="襄阳守将", faction="朝廷",
    location="襄阳城", personality="刚正不阿、忧国忧民",
    description="身材魁梧的中年将领，盔甲上满是修补的痕迹，双目炯炯有神。",
    greeting="蒙古大军随时可能来犯，你若无事，莫在此闲逛。",
    farewell="保家卫国，人人有责。",
    dialogues=[
        Dialogue(
            id="guo_intro", npc_name="郭守将",
            lines=[
                _dl("郭守将", "你便是那个击败黑衣人的少年？不错，有几分本事。"),
                _dl("郭守将", "襄阳城如今虽看似太平，暗地里却不平静。"),
                _dl("郭守将", "近日有探子来报，一股不明势力在城外活动。"),
                _dl("郭守将", "大侠若有空闲，帮我去城外巡查巡查如何？"),
            ],
            requires_level=2, one_time=True,
        ),
    ],
))

# --- 西域 ---

_register(NPC(
    name="张教主", title="明教第三十五代教主", faction="明教",
    location="光明顶", personality="豪迈义气、胸怀天下",
    description="二十出头的青年，相貌堂堂，虽着明教白衣，却有一股说不出的正气。",
    greeting="天下大势，合久必分，分久必合。",
    farewell="光明永远在前方。",
    dialogues=[
        Dialogue(
            id="zhang_intro", npc_name="张教主",
            lines=[
                _dl("张教主", "你能登上光明顶，说明有些本事。"),
                _dl("张教主", "明教虽被武林称为'魔教'，但我们行的却是义事。"),
                _dl("张教主", "你身上的气息……让我想起一个故人。"),
                _dl("张教主", "暗影阁？我也在追查他们的下落。也许我们可以合作。"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

_register(NPC(
    name="灵鹫宫主", title="逍遥派灵鹫宫主人", faction="逍遥派",
    location="灵鹫宫", personality="冷若冰霜、实力深不可测",
    description="白衣女子，容颜绝美但冷若冰霜，周身寒气逼人，似不食人间烟火。",
    greeting="灵鹫宫不欢迎外人。不过你既然来了……",
    farewell="去罢，灵鹫宫的事不要对外人提起。",
    dialogues=[
        Dialogue(
            id="lingjiu_intro", npc_name="灵鹫宫主",
            lines=[
                _dl("灵鹫宫主", "你能来到这里，说明你与逍遥派有缘。"),
                _dl("灵鹫宫主", "你身上的纸条……是算圣门的遗物。"),
                _dl("灵鹫宫主", "算圣门，是三百年前最神秘的一个门派。"),
                _dl("灵鹫宫主", "他们以'算筹'为武器，据说可以推演天地万物之理。"),
                _dl("灵鹫宫主", "你若想知道更多，就去冰窖中寻找吧。"),
            ],
            requires_level=4, one_time=True,
        ),
    ],
))

_register(NPC(
    name="丁老怪", title="星宿派掌门", faction="星宿派",
    location="星宿海", personality="阴险狡诈、自大狂妄",
    description="瘦削的老者，面色蜡黄，身边常有毒蛇毒虫环绕。",
    greeting="哼，又有不怕死的来了？星宿派不收废物！",
    farewell="滚！别污染了我的星宿海！",
    dialogues=[
        Dialogue(
            id="ding_intro", npc_name="丁老怪",
            lines=[
                _dl("丁老怪", "哈哈哈哈！又来了一个送死的！"),
                _dl("丁老怪", "你身上有算圣门的气息……有意思，有意思。"),
                _dl("丁老怪", "算圣门那群伪君子，当年被我师父打得上天无路！"),
                _dl("丁老怪", "想学本事？先接我三招毒掌再说！"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

# --- 江南 ---

_register(NPC(
    name="黄岛主", title="桃花岛岛主", faction="桃花岛",
    location="桃花岛", personality="孤傲不群、才华横溢",
    description="中年文士，手持折扇，举止优雅，目光如电。奇门遁甲、琴棋书画无一不精。",
    greeting="桃花岛上机关重重，你能到这里，算你有些本事。",
    farewell="走好，别碰我的花。",
    dialogues=[
        Dialogue(
            id="huang_intro", npc_name="黄岛主",
            lines=[
                _dl("黄岛主", "哼，又一个不速之客。"),
                _dl("黄岛主", "不过你身上这股气息……倒是让老夫想起了一个人。"),
                _dl("黄岛主", "你那纸条上的印章，老夫年轻时在一本古籍中见过。"),
                _dl("黄岛主", "算圣门，以'编程之道'闻名天下。他们的功法，据说能将武学化为算式。"),
                _dl("黄岛主", "老夫书房中有一本旧册，或许对你有用。拿去吧。"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

_register(NPC(
    name="慕容公子", title="姑苏慕容世家传人", faction="慕容世家",
    location="姑苏", personality="温文尔雅、城府极深",
    description="白衣少年，面如冠玉，举止从容。以「以彼之道，还施彼身」闻名江湖。",
    greeting="久仰久仰，在下慕容复，请多指教。",
    farewell="江湖路远，有缘再会。",
    dialogues=[
        Dialogue(
            id="murong_intro", npc_name="慕容公子",
            lines=[
                _dl("慕容公子", "这位兄台，看你的手法，似乎不拘于一家一派。"),
                _dl("慕容公子", "慕容家的斗转星移，讲究的就是融会贯通。"),
                _dl("慕容公子", "不过最近江湖上不太平啊……暗影阁到处作乱。"),
                _dl("慕容公子", "兄台若有兴趣，我们可以合作调查此事。"),
            ],
            choices=[
                _choice("合作愉快（慕容好感+10）",
                        consequence={"affection": {"慕容公子": 10}}),
                _choice("我会自己查的。",
                        consequence={"affection": {"慕容公子": -5}}),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

_register(NPC(
    name="梅庄四友", title="江南四友", faction="梅庄",
    location="梅庄", personality="各有所好、退隐江湖",
    description="四位隐居梅庄的老者，分别痴迷于琴、棋、书、画。",
    greeting="来者是客，请坐请坐。且品一壶清茶。",
    farewell="人生如棋，落子无悔。",
    dialogues=[
        Dialogue(
            id="meizhuang_intro", npc_name="梅庄四友",
            lines=[
                _dl("梅庄四友·黄钟公", "小兄弟远道而来，不妨在此歇歇脚。"),
                _dl("梅庄四友·黑白子", "下盘棋如何？我最近悟了一步妙手。"),
                _dl("梅庄四友·秃笔翁", "棋有什么意思？不如来欣赏我的书法！"),
                _dl("梅庄四友·丹青生", "你们都别争了，这位小兄弟显然是来品我新酿的酒的。"),
                _dl("梅庄四友·黄钟公", "好了好了。小兄弟，梅庄虽小，却藏着不少宝贝。你若有本事，不妨去地牢看看。"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

# --- 大理 ---

_register(NPC(
    name="段世子", title="大理段氏世子", faction="大理段氏",
    location="大理城", personality="天真烂漫、佛缘深厚",
    description="锦衣少年，面带微笑，看似纨绔子弟，实则内力深厚。",
    greeting="哈，有朋自远方来，不亦乐乎！",
    farewell="后会有期，朋友！",
    dialogues=[
        Dialogue(
            id="duan_intro", npc_name="段世子",
            lines=[
                _dl("段世子", "哎呀，你是中原来的？听说中原最近很不太平。"),
                _dl("段世子", "我爹爹说，最近有一帮人在大理国附近鬼鬼祟祟的。"),
                _dl("段世子", "对了，天龙寺的枯荣大师最近在找一位有缘人。"),
                _dl("段世子", "你若得了什么宝贝，可以去天龙寺请大师看看。"),
            ],
            requires_level=2, one_time=True,
        ),
    ],
))

_register(NPC(
    name="枯荣大师", title="天龙寺高僧", faction="天龙寺",
    location="大理城", personality="枯木逢春、深不可测",
    description="半边脸枯萎如树皮，另半边却红润如婴。枯荣禅功已臻化境。",
    greeting="……",
    farewell="……善哉善哉。",
    dialogues=[
        Dialogue(
            id="kurong_intro", npc_name="枯荣大师",
            lines=[
                _dl("枯荣大师", "……你来了。"),
                _dl("枯荣大师", "贫僧等你，已有三年。"),
                _dl("枯荣大师", "你身上的算圣门印记……是命中注定的。"),
                _dl("枯荣大师", "六脉神剑与你的功法同源——皆是以'算式'驱动内力。"),
                _dl("枯荣大师", "去吧，去无量山寻找你想要的答案。"),
            ],
            requires_level=4, one_time=True,
        ),
    ],
))

# --- 京城 ---

_register(NPC(
    name="神捕王", title="六扇门总捕头", faction="六扇门",
    location="皇城", personality="铁面无私、武艺高强",
    description="身着飞鱼服的壮年男子，目光如炬，腰佩绣春刀。",
    greeting="六扇门办案，闲杂人等退避。",
    farewell="法网恢恢，疏而不漏。",
    dialogues=[
        Dialogue(
            id="shenbu_intro", npc_name="神捕王",
            lines=[
                _dl("神捕王", "你就是那个在江湖上闹出动静的小子？"),
                _dl("神捕王", "六扇门注意到你很久了。不过你看起来不像坏人。"),
                _dl("神捕王", "暗影阁的事你也知道了？"),
                _dl("神捕王", "我们查到……暗影阁背后的人，可能就在朝堂之上。"),
                _dl("神捕王", "此事牵涉甚广，大侠务必小心。有需要帮助的，尽管来找我。"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

_register(NPC(
    name="说书人", title="天桥说书先生", faction="无",
    location="天桥", personality="博古通今、消息灵通",
    description="白发老者，手执醒木，面前一张方桌，口中永远有讲不完的故事。",
    greeting="客官请坐！今天讲什么？岳飞抗金还是武林秘闻？",
    farewell="欲知后事如何，且听下回分解！",
    dialogues=[
        Dialogue(
            id="storyteller_1", npc_name="说书人",
            lines=[
                _dl("说书人", "话说三十年前，武林中有一神秘门派，名曰'算圣门'。"),
                _dl("说书人", "此门派不练拳脚，不练兵器，专修一种名为'编程'的奇术。"),
                _dl("说书人", "据说他们的弟子能用符文驱使万物，推演天机。"),
                _dl("说书人", "后来不知为何，一夜之间整个门派灰飞烟灭……"),
                _dl("说书人", "嘿嘿，老朽说书而已，客官别当真。不过嘛……"),
                _dl("说书人", "如果你有银子，老朽倒是可以多说一些。"),
            ],
            requires_level=1, one_time=True,
        ),
        Dialogue(
            id="storyteller_2", npc_name="说书人",
            lines=[
                _dl("说书人", "哟，客官又来了！上次说到哪儿了？"),
                _dl("说书人", "对了，算圣门的覆灭。"),
                _dl("说书人", "有人说，是一个叫'暗影阁'的组织干的。"),
                _dl("说书人", "暗影阁要的不是灭门——他们要的是算圣门的核心功法。"),
                _dl("说书人", "听说那功法被分成了数份，藏于天下各处。"),
                _dl("说书人", "谁先集齐，谁就能掌握……嘿嘿，掌握什么呢？"),
                _dl("说书人", "这个嘛，老朽也不知道了。"),
            ],
            requires_level=3, one_time=True,
        ),
    ],
))

_register(NPC(
    name="鬼市商人", title="鬼市神秘商人", faction="无",
    location="天桥", personality="神秘莫测、唯利是图",
    description="浑身裹在黑袍中，看不清面目，只在夜间出现在天桥角落。",
    greeting="嘘……小声点。要什么？",
    farewell="交易完成，你我不曾相见。",
    dialogues=[
        Dialogue(
            id="ghost_merchant", npc_name="鬼市商人",
            lines=[
                _dl("鬼市商人", "嘘……小声点。"),
                _dl("鬼市商人", "你想要什么？情报？宝物？还是……秘密？"),
                _dl("鬼市商人", "每样东西都有价钱。银两，或者……你的秘密。"),
            ],
            requires_level=2, one_time=True,
        ),
    ],
    shop_items=[
        ShopItem("夜行衣", "armor", "夜间行动+10身法", 150),
        ShopItem("解毒丸", "medicine", "解除中毒状态", 50),
        ShopItem("残缺秘籍", "misc", "一本被撕掉一半的武功秘籍", 300, requires_affection=20),
        ShopItem("暗影阁令牌", "misc", "暗影阁的身份令牌，来源可疑", 500, requires_affection=40),
    ],
))

# --- 额外NPC ---

_register(NPC(
    name="客栈老板", title="洛阳悦来客栈掌柜", faction="无",
    location="洛阳", personality="热情精明、消息灵通",
    description="圆脸胖子，笑起来像弥勒佛，但算账的时候精明得很。",
    greeting="哎哟！客官里面请！悦来客栈，包您满意！",
    farewell="慢走啊客官，下次再来！",
    dialogues=[
        Dialogue(
            id="innkeeper_intro", npc_name="客栈老板",
            lines=[
                _dl("客栈老板", "客官是外地来的吧？洛阳城里最近可不太平。"),
                _dl("客栈老板", "听说有人在城外看到一个蒙面组织，半夜三更出没。"),
                _dl("客栈老板", "对了客官，我这店里最近闹鼠患，能不能帮忙想想办法？"),
                _dl("客栈老板", "嘿嘿，别小看老鼠，这些老鼠可机灵得很。"),
            ],
            requires_level=1, one_time=True,
        ),
    ],
))

_register(NPC(
    name="武当掌门", title="武当派掌门", faction="武当派",
    location="武当山", personality="仙风道骨、道法自然",
    description="白须老道，身着道袍，手持拂尘，整个人仿佛与天地融为一体。",
    greeting="道法自然，有缘自会相见。",
    farewell="去休去休，大道至简。",
    dialogues=[
        Dialogue(
            id="wudang_intro", npc_name="武当掌门",
            lines=[
                _dl("武当掌门", "年轻人，你的气息很特别。"),
                _dl("武当掌门", "太极之道，在于阴阳相生、刚柔并济。"),
                _dl("武当掌门", "武当功夫虽非天下第一，但讲究的是以不变应万变。"),
                _dl("武当掌门", "你若愿入武当，需先通过入门考验。"),
            ],
            requires_level=2, requires_faction="无门无派", one_time=True,
        ),
    ],
))


def get_npc_by_location(location: str) -> List[NPC]:
    """获取某个地点的所有NPC"""
    return [npc for npc in NPCS.values() if npc.location == location]


def get_npc(name: str) -> Optional[NPC]:
    """获取指定NPC"""
    return NPCS.get(name)
