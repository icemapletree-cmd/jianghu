"""
地图系统 - 金庸武侠世界地图
包含地点信息、旅行连接、距离、NPC驻扎、随机事件倾向
"""

from typing import Dict, List, Optional
import random

# 五大区域
REGIONS = {
    "中原": {
        "description": "中原大地，武林盟主所在，群雄逐鹿之地。",
        "locations": {
            "洛阳": {"type": "城镇", "description": "九朝古都，酒馆客栈林立。",
                     "facilities": ["酒馆", "客栈", "集市", "衙门"]},
            "华山": {"type": "野外", "description": "西岳华山，华山派所在地。",
                     "facilities": ["华山派大门"]},
            "少林寺": {"type": "野外", "description": "天下武功出少林。",
                       "facilities": ["山门", "藏经阁", "练功房"]},
            "武当山": {"type": "野外", "description": "真武大帝得道之所，武当派总坛。",
                      "facilities": ["紫霄宫", "太极广场"]},
            "丐帮总舵": {"type": "野外", "description": "丐帮的大本营，隐藏在城外竹林中。",
                        "facilities": ["分舵大厅", "练功场"]},
            "襄阳城": {"type": "城镇", "description": "郭靖黄蓉驻守之城，蒙古大军虎视眈眈。",
                      "facilities": ["城门", "守将府", "军营", "集市", "酒馆"]},
        }
    },
    "西域": {
        "description": "大漠戈壁，明教总坛所在。",
        "locations": {
            "光明顶": {"type": "野外", "description": "明教总坛，六大门派曾围攻此地。",
                      "facilities": ["明教大殿", "密道"]},
            "灵鹫宫": {"type": "野外", "description": "天山之巅，逍遥派灵鹫宫。",
                      "facilities": ["宫门", "冰窖"]},
            "星宿海": {"type": "野外", "description": "星宿派老巢，毒虫遍地。",
                      "facilities": ["星宿派山门"]},
        }
    },
    "江南": {
        "description": "烟雨江南，才子佳人。",
        "locations": {
            "桃花岛": {"type": "野外", "description": "黄药师的桃花岛，奇门遁甲遍布。",
                      "facilities": ["码头", "奇门阵", "黄药师书房"]},
            "姑苏": {"type": "城镇", "description": "姑苏城外，慕容世家的燕子坞。",
                    "facilities": ["燕子坞", "酒馆", "集市"]},
            "梅庄": {"type": "野外", "description": "江南四友的梅庄，藏有不少宝贝。",
                    "facilities": ["梅庄大门", "地牢"]},
        }
    },
    "大理": {
        "description": "南国风光，大理段氏世居之地。",
        "locations": {
            "大理城": {"type": "城镇", "description": "段氏皇族所在，天龙寺近在咫尺。",
                     "facilities": ["皇宫", "天龙寺", "集市", "酒馆"]},
            "无量山": {"type": "野外", "description": "无量剑派和无量玉壁所在。",
                      "facilities": ["剑湖宫", "石洞"]},
        }
    },
    "京城": {
        "description": "天子脚下，六扇门总部。",
        "locations": {
            "皇城": {"type": "城镇", "description": "紫禁城，康熙皇帝的居所。",
                    "facilities": ["午门", "御书房", "六扇门", "大牢", "集市"]},
            "天桥": {"type": "城镇", "description": "三教九流汇聚之地，热闹非凡。",
                    "facilities": ["茶馆", "杂耍场", "黑市"]},
        }
    },
}

# 特殊地点（剧情触发）
SPECIAL_LOCATIONS = {
    "破庙": {
        "region": "中原",
        "description": "一座年久失修的破庙，你在雨夜中醒来。",
        "type": "特殊"
    }
}

# ============================================================
# 旅行连接关系 —— 从某地点可达的其他地点及距离
# distance: "near" / "medium" / "far"
# ============================================================
TRAVEL_CONNECTIONS: Dict[str, List[Dict[str, str]]] = {
    "破庙": [
        {"target": "洛阳", "distance": "near"},
    ],
    "洛阳": [
        {"target": "破庙", "distance": "near"},
        {"target": "华山", "distance": "near"},
        {"target": "少林寺", "distance": "near"},
        {"target": "武当山", "distance": "medium"},
        {"target": "丐帮总舵", "distance": "near"},
        {"target": "襄阳城", "distance": "medium"},
        {"target": "姑苏", "distance": "medium"},
        {"target": "梅庄", "distance": "medium"},
        {"target": "大理城", "distance": "far"},
        {"target": "光明顶", "distance": "far"},
    ],
    "华山": [
        {"target": "洛阳", "distance": "near"},
    ],
    "少林寺": [
        {"target": "洛阳", "distance": "near"},
    ],
    "武当山": [
        {"target": "洛阳", "distance": "medium"},
    ],
    "丐帮总舵": [
        {"target": "洛阳", "distance": "near"},
    ],
    "襄阳城": [
        {"target": "洛阳", "distance": "medium"},
        {"target": "皇城", "distance": "far"},
    ],
    "皇城": [
        {"target": "襄阳城", "distance": "far"},
        {"target": "天桥", "distance": "near"},
    ],
    "天桥": [
        {"target": "皇城", "distance": "near"},
    ],
    "姑苏": [
        {"target": "洛阳", "distance": "medium"},
        {"target": "桃花岛", "distance": "medium"},
        {"target": "梅庄", "distance": "near"},
    ],
    "桃花岛": [
        {"target": "姑苏", "distance": "medium"},
    ],
    "梅庄": [
        {"target": "洛阳", "distance": "medium"},
        {"target": "姑苏", "distance": "near"},
    ],
    "大理城": [
        {"target": "无量山", "distance": "near"},
        {"target": "洛阳", "distance": "far"},
    ],
    "无量山": [
        {"target": "大理城", "distance": "near"},
    ],
    "光明顶": [
        {"target": "星宿海", "distance": "far"},
        {"target": "灵鹫宫", "distance": "far"},
        {"target": "洛阳", "distance": "far"},
    ],
    "灵鹫宫": [
        {"target": "光明顶", "distance": "far"},
    ],
    "星宿海": [
        {"target": "光明顶", "distance": "far"},
    ],
}

# ============================================================
# 旅行距离对应的描述段落数
# near: 1段, medium: 2段, far: 3段
# ============================================================
TRAVEL_DISTANCES: Dict[str, int] = {
    "near": 1,
    "medium": 2,
    "far": 3,
}

# 旅途描写素材池 —— 按环境和距离类型
_TRAVEL_DESCRIPTIONS: Dict[str, Dict[str, List[str]]] = {
    "near": {
        "平原": [
            "你沿着官道快步而行，两旁田野阡陌，农人在田间劳作。不出半日，便已抵达目的地。",
            "一路平坦，脚程轻快。远处炊烟袅袅，不消一个时辰便到了。",
            "你沿着小径穿行，路旁野花遍地，鸟鸣声声。不多时便望见了前方的建筑。",
        ],
        "山林": [
            "山路蜿蜒而上，两侧古木参天。你脚下生风，片刻便翻过了这道山梁。",
            "林间小道落叶铺地，踩上去沙沙作响。穿过这片树林，目的地已在眼前。",
            "山势并不险峻，你拾级而上，一路清风徐来。很快便到了。",
        ],
        "城镇": [
            "街巷之间人来人往，你穿街过巷，没走多久便到了。",
            "从城门出去不远，另一座城镇的轮廓已在望。",
        ],
    },
    "medium": {
        "平原": [
            "你离开官道，走上一条不太常有人走的小路。\n\n路旁草木渐深，偶尔有野兔从草丛中窜出。\n\n走了约莫大半日，远处终于出现了目的地的轮廓。",
            "晨起出发，沿大路一路向南。日头渐高，你在一棵老槐树下歇了歇脚。\n\n重新上路后不久，便看到了前方的路碑——快到了。",
        ],
        "山林": [
            "山路崎岖，你小心翼翼地攀行。雾气从山谷中升起，将远近的山峰都笼罩在一片朦胧之中。\n\n走了约一个时辰，雾气渐散。你发现已经翻过了两道山梁，目的地就在前方不远。",
            "沿着溪流逆行而上，瀑布声渐渐远去。\n\n穿过一片竹林，又翻过一个小山坡。远处隐约可见建筑的飞檐。",
        ],
        "江湖": [
            "你雇了一叶扁舟，沿水路前行。两岸青山如画，倒映在碧波之中。\n\n船夫是个健谈的老者，一路上给你讲了不少江湖掌故。\n\n船靠岸时，日头已经偏西了。",
            "水路曲折，你换乘了两次船。\n\n江面渐渐宽阔，远处的码头上停泊着大大小小的船只。\n\n你踏上码头，深吸一口气——终于到了。",
        ],
    },
    "far": {
        "大漠": [
            "黄沙漫天，你裹紧衣袍，顶着烈日向西北方前行。\n\n大漠之中，方向全凭日影和星斗判断。你好几次差点迷路，幸好发现了一队驼队的痕迹，循迹而行。\n\n三天后，当一片绿洲出现在视野中时，你几乎不敢相信自己的眼睛。",
            "茫茫戈壁，一望无际。\n\n你准备了充足的水袋和干粮，踏上了漫长的旅途。途中遇到一场沙暴，你只能缩在岩石后面苦等。\n\n风沙过后，天边出现了一抹青色——那是山的颜色。你知道，快到了。",
        ],
        "长途": [
            "这一路山高水远，你晓行夜宿，风餐露宿。\n\n途中经过数座城池，在客栈歇过几晚。每到一处，都能听到不同的江湖传闻。\n\n经过七八日的跋涉，你终于抵达了目的地。回首来路，恍如隔世。",
            "你背起行囊，踏上了漫长的旅程。\n\n一路翻山越岭，涉水渡河。有时借宿农家，有时在破庙过夜——就像你最初醒来时那样。\n\n不知过了多少天，当目的地的城墙出现在地平线上时，你长长地舒了一口气。",
        ],
        "翻山": [
            "眼前是连绵不绝的高山。你知道，必须翻过这些山才能到达目的地。\n\n山路越来越陡，空气越来越稀薄。你攀过悬崖，涉过冰河，在雪线之上艰难前行。\n\n当你终于翻过最后一道山脊，看到山下那片广袤的平原时，一切辛苦都值了。",
            "这段路几乎没有现成的山道。\n\n你手脚并用，攀过一道道峭壁。好几次脚下打滑，险些坠入深渊。\n\n三天后，你终于看到了远处的建筑群落——到了。",
        ],
    },
}

# ============================================================
# 地点常驻NPC映射
# ============================================================
LOCATION_NPCS: Dict[str, List[str]] = {
    "破庙": [],
    "洛阳": ["洪老丐", "客栈老板"],
    "华山": ["岳掌门"],
    "少林寺": ["方丈大师"],
    "武当山": ["武当掌门"],
    "丐帮总舵": [],
    "襄阳城": ["郭守将"],
    "光明顶": ["张教主"],
    "灵鹫宫": ["灵鹫宫主"],
    "星宿海": ["丁老怪"],
    "桃花岛": ["黄岛主"],
    "姑苏": ["慕容公子"],
    "梅庄": ["梅庄四友"],
    "大理城": ["段世子", "枯荣大师"],
    "无量山": [],
    "皇城": ["神捕王"],
    "天桥": ["说书人", "鬼市商人"],
}

# ============================================================
# 地点随机事件标签倾向
# 决定该地点更容易触发哪类随机事件
# ============================================================
LOCATION_EVENT_TAGS: Dict[str, Dict[str, float]] = {
    "破庙": {"战斗": 0.4, "宝物": 0.3, "信息": 0.3},
    "洛阳": {"商队": 0.4, "信息": 0.3, "战斗": 0.2},
    "华山": {"战斗": 0.3, "宝物": 0.3, "天气": 0.2},
    "少林寺": {"修炼": 0.4, "信息": 0.3, "宝物": 0.2},
    "武当山": {"修炼": 0.4, "天气": 0.2, "宝物": 0.2},
    "丐帮总舵": {"信息": 0.4, "战斗": 0.3, "商队": 0.2},
    "襄阳城": {"战斗": 0.3, "商队": 0.3, "信息": 0.2},
    "光明顶": {"战斗": 0.4, "宝物": 0.3, "天气": 0.2},
    "灵鹫宫": {"宝物": 0.4, "修炼": 0.3, "天气": 0.2},
    "星宿海": {"战斗": 0.5, "宝物": 0.2, "天气": 0.2},
    "桃花岛": {"宝物": 0.4, "修炼": 0.3, "信息": 0.2},
    "姑苏": {"商队": 0.3, "信息": 0.3, "宝物": 0.2},
    "梅庄": {"宝物": 0.4, "信息": 0.3, "战斗": 0.1},
    "大理城": {"商队": 0.3, "信息": 0.3, "修炼": 0.2},
    "无量山": {"宝物": 0.4, "战斗": 0.3, "天气": 0.2},
    "皇城": {"信息": 0.4, "商队": 0.3, "战斗": 0.1},
    "天桥": {"信息": 0.5, "商队": 0.3, "宝物": 0.2},
}

# 地点环境类型 —— 用于选取旅行描写
_LOCATION_ENVIRONMENT: Dict[str, str] = {
    "破庙": "平原",
    "洛阳": "城镇",
    "华山": "山林",
    "少林寺": "山林",
    "武当山": "山林",
    "丐帮总舵": "山林",
    "襄阳城": "城镇",
    "光明顶": "大漠",
    "灵鹫宫": "山林",
    "星宿海": "大漠",
    "桃花岛": "江湖",
    "姑苏": "城镇",
    "梅庄": "平原",
    "大理城": "城镇",
    "无量山": "山林",
    "皇城": "城镇",
    "天桥": "城镇",
}


def get_location_info(location_name: str) -> dict:
    """获取地点信息"""
    if location_name in SPECIAL_LOCATIONS:
        return SPECIAL_LOCATIONS[location_name]

    for region_name, region_data in REGIONS.items():
        if location_name in region_data["locations"]:
            loc = region_data["locations"][location_name]
            loc["region"] = region_name
            return loc

    return {"description": "一片未知的荒野。", "type": "野外", "facilities": []}


def get_available_destinations(current_location: str) -> list:
    """获取可前往的目的地（兼容旧接口，返回所有非当前位置的地点）"""
    destinations = []

    for region_name, region_data in REGIONS.items():
        for loc_name in region_data["locations"]:
            if loc_name != current_location:
                destinations.append({
                    "name": loc_name,
                    "region": region_name,
                    "type": region_data["locations"][loc_name]["type"]
                })

    return destinations


def get_connected_locations(location: str) -> List[Dict[str, str]]:
    """
    返回从当前地点可达的所有地点及其距离信息。

    Returns:
        [{"target": "洛阳", "distance": "near"}, ...]
    """
    connections = TRAVEL_CONNECTIONS.get(location, [])
    return [{"target": c["target"], "distance": c["distance"]} for c in connections]


def get_travel_distance(from_loc: str, to_loc: str) -> Optional[str]:
    """获取两地点之间的旅行距离类型"""
    connections = TRAVEL_CONNECTIONS.get(from_loc, [])
    for conn in connections:
        if conn["target"] == to_loc:
            return conn["distance"]
    return None


def _pick_travel_env(from_loc: str, to_loc: str) -> str:
    """根据起终点推断旅行环境类型"""
    to_env = _LOCATION_ENVIRONMENT.get(to_loc, "平原")
    from_env = _LOCATION_ENVIRONMENT.get(from_loc, "平原")

    if to_env == "大漠":
        return "大漠"
    if to_env == "江湖" or from_env == "江湖":
        return "江湖"
    dist = get_travel_distance(from_loc, to_loc)
    if dist == "far" and to_env == "山林":
        return "翻山"
    if dist == "far":
        return "长途"
    if to_env in ("山林",):
        return "山林"
    if to_env in ("城镇",):
        return "城镇"
    return "平原"


def get_travel_description(from_loc: str, to_loc: str) -> str:
    """
    返回从 from_loc 到 to_loc 的旅行描述文本。
    根据距离远近，描述段落数不同（near=1段, medium=2段, far=3段）。
    """
    dist = get_travel_distance(from_loc, to_loc)
    if dist is None:
        return f"你从{from_loc}出发，一路辗转，终于来到了{to_loc}。"

    num_segments = TRAVEL_DISTANCES.get(dist, 1)
    env = _pick_travel_env(from_loc, to_loc)

    dist_pool = _TRAVEL_DESCRIPTIONS.get(dist, {})
    env_pool = dist_pool.get(env, [])

    if not env_pool:
        for pool in dist_pool.values():
            if pool:
                env_pool = pool
                break

    if not env_pool:
        return f"你从{from_loc}出发，经过{num_segments}段旅途，来到了{to_loc}。"

    descriptions = random.sample(env_pool, min(num_segments, len(env_pool)))
    while len(descriptions) < num_segments:
        descriptions.append(random.choice(env_pool))

    body = "\n\n".join(descriptions)

    loc_info = get_location_info(to_loc)
    loc_desc = loc_info.get("description", "")
    header = f"你从{from_loc}出发，踏上了前往{to_loc}的路途。"
    footer = f"\n\n你终于来到了[b]{to_loc}[/b]——{loc_desc}"

    return header + "\n\n" + body + footer


def get_location_npcs(location: str) -> List[str]:
    """获取某地点的常驻NPC名列表"""
    return list(LOCATION_NPCS.get(location, []))


def get_location_event_tags(location: str) -> Dict[str, float]:
    """获取某地点的随机事件倾向标签"""
    return dict(LOCATION_EVENT_TAGS.get(location, {"战斗": 0.3, "宝物": 0.3, "信息": 0.3}))
