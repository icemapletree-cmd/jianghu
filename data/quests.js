window.JIANGHU_QUESTS = [
  {
    "id": "ch01-q01",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "忘川石碑问真名",
    "npc": "段誉",
    "difficulty": "入门",
    "story": "你在无量山脚醒来，神农帮弟子围住去路，石碑只认能用 Python 报名号的人。",
    "objective": "接收少侠姓名，并打印一张可入无量山的江湖通行牌。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "print()",
      "input()",
      "字符串拼接"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "input",
      "print"
    ],
    "reward": {
      "exp": 10,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": "传音入密"
    },
    "successMessage": "石碑光芒一闪，段誉笑道：少侠果然不是寻常人。",
    "hint": "先用 input 得到名字，再用 print 把名字放进通行牌文字里。\n先看“期望输出”，本关最终要做到：输出：少侠云栖，可入无量山。\n关键知识：input() 会从键盘接收文本，返回值通常要先保存到变量里。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输入示例：云栖\n输出：少侠云栖，可入无量山。",
    "referenceAnswer": "name = input('少侠名号：')\nprint('少侠' + name + '，可入无量山。')"
  },
  {
    "id": "ch01-q02",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "段誉教你建档立户",
    "npc": "段誉",
    "difficulty": "入门",
    "story": "段誉怕你再被盘问，教你把门派、称号和银两记入变量，还要用三元表达式判断是否够买一壶酒。",
    "objective": "定义 title、sect、money 变量，用 f-string 打印身份，再用三元表达式判断是否 money >= 8。",
    "knowledge": [
      "变量",
      "f-string",
      "三元表达式"
    ],
    "starterCode": "# 补全代码：定义变量 + f-string + 三元表达式\ntitle = '初入江湖'\nsect = '逍遥旁支'\nmoney = 10\n# 三元表达式：money >= 8 时 \"够买一壶酒\"，否则 \"银两不足\"\nstatus = # 写出这一行\nprint(f'{sect}弟子，称号：{title}，银两：{money}，{status}')",
    "expectedKeywords": [
      "sect",
      "money",
      "if",
      "else",
      "print"
    ],
    "reward": {
      "exp": 15,
      "trust": 1,
      "reputation": 0,
      "money": 2,
      "art": ""
    },
    "successMessage": "档案立妥，三元表达式让判断只需一行。",
    "hint": "三元表达式：值A if 条件 else 值B。f-string 把变量嵌入字符串。\n先看\"期望输出\"：逍遥旁支弟子，称号：初入江湖，银两：10，够买一壶酒\n写法建议：status = \"够买一壶酒\" if money >= 8 else \"银两不足\"\n常见错误：三元条件前后顺序写反。",
    "expectedOutput": "输出：逍遥旁支弟子，称号：初入江湖，银两：10，够买一壶酒",
    "referenceAnswer": "title = '初入江湖'\nsect = '逍遥旁支'\nmoney = 10\nstatus = '够买一壶酒' if money >= 8 else '银两不足'\nprint(f'{sect}弟子，称号：{title}，银两：{money}，{status}')"
  },
  {
    "id": "ch01-q03",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "无量山岔路抉择",
    "npc": "木婉清",
    "difficulty": "入门",
    "story": "岔路前有药香、马蹄和剑痕，木婉清催你立刻判断走哪条路。",
    "objective": "根据输入的路线编号，用条件判断输出救人、探路或撤退结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "input()",
      "if/elif/else",
      "比较运算"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\n# 写出这一行代码\nif choice == '1':\n    # 按期望输出写 print(...)\nelif choice == '2':\n    # 按期望输出写 print(...)\nelse:\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "input",
      "if",
      "else",
      "print"
    ],
    "reward": {
      "exp": 20,
      "trust": 1,
      "reputation": 1,
      "money": 0,
      "art": "凌波判势步"
    },
    "successMessage": "你按局势选路，避开伏兵，救下了受伤的茶商。",
    "hint": "路线编号是字符串，判断时可以写成 choice == '1'。\n先看“期望输出”，本关最终要做到：输入 1 输出：先救人\n关键知识：input() 会从键盘接收文本，返回值通常要先保存到变量里。 if 用来处理“如果发生某种情况就做某事”。 else 负责兜底，处理前面条件都不满足的情况。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输入 1 输出：先救人\n输入 2 输出：先探路\n输入其他内容输出：撤退",
    "referenceAnswer": "choice = input('选择 1救人 2探路 3撤退：')\nif choice == '1':\n    print('先救人')\nelif choice == '2':\n    print('先探路')\nelse:\n    print('撤退')"
  },
  {
    "id": "ch01-pcep-q01",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "解释器问心",
    "npc": "王语嫣",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。王语嫣拿出 PCEP 考纲第一卷：先分清程序、语法、语义和解释器，才算真正入门。",
    "objective": "用三个变量保存术语 interpreter、syntax、semantics，并按期望输出打印一句复习口诀。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "解释器",
      "语法与语义",
      "print()"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ninterpreter = '解释器'\nsyntax = '语法'\nsemantics = '语义'\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "interpreter",
      "syntax",
      "semantics",
      "print"
    ],
    "reward": {
      "exp": 40,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": "PCEP 破题诀"
    },
    "successMessage": "王语嫣点头：先明白代码如何被执行，后面的招式才不会虚浮。",
    "hint": "这一题是 入门考试 第一模块的概念题。变量只保存文字，print 负责输出完整句子。\n先看“期望输出”，本关最终要做到：输出：解释器检查语法，也执行语义\n关键知识：语法是代码写法是否合规，语义是代码表达的动作是否合理，解释器会读取并执行 Python 程序。\n写法建议：先给三个变量赋值，再用 f-string 或字符串拼接输出。\n常见错误：只写变量不 print、把变量名写进字符串导致没有真正使用变量。",
    "expectedOutput": "给定 interpreter='解释器'，syntax='语法'，semantics='语义'\n输出：解释器检查语法，也执行语义",
    "referenceAnswer": "interpreter = '解释器'\nsyntax = '语法'\nsemantics = '语义'\nprint(f'{interpreter}检查{syntax}，也执行{semantics}')"
  },
  {
    "id": "ch01-pcep-q02",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "数值令牌验真",
    "npc": "段誉",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。段誉拿来四枚令牌：二进制、八进制、十六进制和科学计数法。你要证明自己看得懂不同字面量。",
    "objective": "创建 binary、octal、hexa、sci、flag 五个变量，并打印它们的值。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "数字字面量",
      "布尔值",
      "变量命名"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nbinary = 0b101010\noctal = 0o77\nhexa = 0x1A\nsci = 1e3\nflag = True\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "0b",
      "0o",
      "0x",
      "1e3",
      "True",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": ""
    },
    "successMessage": "四枚令牌全部验真，段誉终于相信这些前缀不是暗号。",
    "hint": "入门考试 会考数字字面量：0b 表示二进制，0o 表示八进制，0x 表示十六进制，1e3 表示科学计数法里的 1000.0。\n先看“期望输出”，本关最终要做到：输出：42 63 26 1000.0 True\n关键知识：True 和 False 是布尔值，首字母必须大写。变量名要用英文、数字、下划线组合，不能以数字开头。\n写法建议：按题目给出的字面量逐个赋值，最后 print(binary, octal, hexa, sci, flag)。\n常见错误：把 0o 写成 00、把 True 写成 true、把 1e3 当字符串。",
    "expectedOutput": "给定 binary=0b101010，octal=0o77，hexa=0x1A，sci=1e3，flag=True\n输出：42 63 26 1000.0 True",
    "referenceAnswer": "binary = 0b101010\noctal = 0o77\nhexa = 0x1A\nsci = 1e3\nflag = True\nprint(binary, octal, hexa, sci, flag)"
  },
  {
    "id": "ch01-pcep-q03",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "算符排兵阵",
    "npc": "乔峰",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。乔峰把战力算式写在沙地上，要求你分清除法、整除、取余、幂运算和类型转换。",
    "objective": "计算 power、floor_part、remain、converted，并按期望输出打印四个结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "算术运算符",
      "优先级",
      "类型转换"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\npower = 2 ** 3 + 6\nfloor_part = 17 // 5\nremain = 17 % 5\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "**",
      "//",
      "%",
      "int",
      "float",
      "str",
      "print"
    ],
    "reward": {
      "exp": 50,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": ""
    },
    "successMessage": "乔峰看完算式，笑道：会算余数，排阵就不会乱。",
    "hint": "** 是幂运算，优先级高于加法；// 是整除，% 是取余。入门考试 常用这些题考优先级和类型转换。\n先看“期望输出”，本关最终要做到：输出：14 3 2 3\n关键知识：float('3.9') 得到 3.9，int(3.9) 会截断成 3，str(3) 变成字符串 '3'。\n写法建议：不要心算后直接 print 数字，真的写出运算表达式。\n常见错误：把 ** 写成 ^、误以为 int(3.9) 会四舍五入、忘记字符串数字要先转 float 或 int。",
    "expectedOutput": "给定 power = 2 ** 3 + 6，floor_part = 17 // 5，remain = 17 % 5，converted = str(int(float('3.9')))\n输出：14 3 2 3",
    "referenceAnswer": "power = 2 ** 3 + 6\nfloor_part = 17 // 5\nremain = 17 % 5\nconverted = str(int(float('3.9')))\nprint(power, floor_part, remain, converted)"
  },
  {
    "id": "ch01-pcep-q04",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "飞鸽输出格式",
    "npc": "阿朱",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。阿朱要你练习 print 的 sep、end 和 input，考试里这些细节常被藏在输出题里。",
    "objective": "用 input 接收姓名 name，用 print 的 sep 和 end 输出两段文字。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "input()",
      "print(sep/end)",
      "转义字符"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\n# 写出这一行代码\n# 按期望输出写 print(...)\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "input",
      "sep",
      "end",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": ""
    },
    "successMessage": "飞鸽密信排版整齐，阿朱说这才像能过输出题的人。",
    "hint": "print 可以用 sep 控制多个值中间的分隔符，用 end 控制结尾，默认 end 是换行。\n先看“期望输出”，本关最终要做到：输入云栖后输出少侠-云栖-到此，然后同一行接入门。\n关键知识：input() 返回字符串；print('少侠', name, '到此', sep='-', end='') 不换行，下一次 print 会接在后面。\n写法建议：第一句 print 用 sep='-' 和 end=''，第二句 print('入门')。\n常见错误：把 sep/end 写成普通输出内容、忘记 input 返回的是字符串。",
    "expectedOutput": "输入示例：云栖\n输出：少侠-云栖-到此入门",
    "referenceAnswer": "name = input('姓名：')\nprint('少侠', name, '到此', sep='-', end='')\nprint('入门')"
  },
  {
    "id": "ch01-pcep-q05",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "真假与位运算",
    "npc": "木婉清",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。木婉清把真假判断和位运算混在一起，要你分清逻辑运算符与按位运算符。",
    "objective": "分别计算 logic、mask_and、mask_or、mask_xor，并打印结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "and/or/not",
      "比较运算",
      "位运算"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nlogic = (5 > 3) and not (2 == 4)\nmask_and = 6 & 3\nmask_or = 6 | 3\nmask_xor = 6 ^ 3\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "and",
      "not",
      "&",
      "|",
      "^",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": "真假辨气诀"
    },
    "successMessage": "真假与掩码分明，木婉清收起袖箭。",
    "hint": "and、or、not 是布尔逻辑；&、|、^ 是按位运算。入门考试 会用小整数考二进制位的结果。\n先看“期望输出”，本关最终要做到：输出：True 2 7 5\n关键知识：6 的二进制是 110，3 是 011，所以 6 & 3 是 010 即 2，6 | 3 是 111 即 7，6 ^ 3 是 101 即 5。\n写法建议：按 starterCode 中的表达式逐个计算，再 print。\n常见错误：把 & 当成 and、把 ^ 当成幂运算。",
    "expectedOutput": "给定 logic = (5 > 3) and not (2 == 4)，mask_and=6 & 3，mask_or=6 | 3，mask_xor=6 ^ 3\n输出：True 2 7 5",
    "referenceAnswer": "logic = (5 > 3) and not (2 == 4)\nmask_and = 6 & 3\nmask_or = 6 | 3\nmask_xor = 6 ^ 3\nprint(logic, mask_and, mask_or, mask_xor)"
  },
  {
    "id": "ch01-pcep-q06",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "复合赋值心法",
    "npc": "虚竹",
    "difficulty": "考前 基础",
    "story": "无量山脚的石壁旁，段誉把基础语法刻成一行行江湖口诀。虚竹练功要反复加内力、扣损耗。你要用复合赋值写出更像真实代码的计算。",
    "objective": "用 +=、-=、*= 更新 energy，并打印最终内力。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "复合赋值",
      "运算顺序",
      "变量更新"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nenergy = 10\n# 写出这一行代码\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "+=",
      "-=",
      "*=",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": ""
    },
    "successMessage": "虚竹的内力账终于不乱，复合赋值也记牢了。",
    "hint": "复合赋值会在原变量基础上更新：x += 1 等价于 x = x + 1。\n先看“期望输出”，本关最终要做到：输出：内力：24\n关键知识：代码按从上到下执行，所以 10 先加 5 得 15，再减 3 得 12，再乘 2 得 24。\n写法建议：每一步单独写一行，最后 print('内力：' + str(energy))。\n常见错误：把三步写成一个表达式后顺序不一致、数字和字符串拼接时忘记 str()。",
    "expectedOutput": "给定 energy = 10，依次执行 += 5、-= 3、*= 2\n输出：内力：24",
    "referenceAnswer": "energy = 10\nenergy += 5\nenergy -= 3\nenergy *= 2\nprint('内力：' + str(energy))"
  },
  {
    "id": "ch01-py100-day002",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "刻录通行令牌",
    "npc": "段誉",
    "difficulty": "入门 变量",
    "story": "无量山石壁旁，段誉发现一块空白令牌。只有将姓名、门派、境界刻入其中，才能开启下一道石门。",
    "objective": "定义 name、sect、level 三个变量，用 f-string 按期望格式打印通行令。",
    "knowledge": [
      "变量赋值",
      "f-string",
      "print()"
    ],
    "starterCode": "# 补全代码：定义变量，用 f-string 打印通行令\nname = \"云栖\"\nsect = \"逍遥派\"\nlevel = 1\n# 按期望输出写 print(f\"...\")",
    "expectedKeywords": [
      "name",
      "sect",
      "level",
      "f\"",
      "print"
    ],
    "reward": {
      "exp": 32,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "令牌刻成，石门轰然开启。f-string 格式化已入门。",
    "hint": "f-string 写法：f\"文字{变量}文字\"，变量会被替换为它的值。\n先看\"期望输出\"，本关最终要做到：输出 少侠云栖，来自逍遥派，当前境界：第1层\n关键知识：变量用来保存数据；f-string 把变量嵌入字符串；print() 输出结果。\n写法建议：print(f\"少侠{name}，来自{sect}，当前境界：第{level}层\")\n常见错误：f 忘了加、变量名拼错、中文引号混入代码。",
    "expectedOutput": "输出：少侠云栖，来自逍遥派，当前境界：第1层",
    "referenceAnswer": "name = \"云栖\"\nsect = \"逍遥派\"\nlevel = 1\nprint(f\"少侠{name}，来自{sect}，当前境界：第{level}层\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day02"
    }
  },
  {
    "id": "ch01-py100-day003",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "藏经阁密码解析",
    "npc": "段誉",
    "difficulty": "入门 类型转换",
    "story": "藏经阁密室的机关刻有两个字符串形式的数字，必须转为整数才能计算解锁密码，还要打印类型名称以验证。",
    "objective": "将 raw_atk 和 raw_def 转为 int，计算净伤害，打印结果和 type 名称。",
    "knowledge": [
      "int()",
      "float()",
      "type().__name__",
      "类型转换"
    ],
    "starterCode": "# 补全代码：字符串 → int，计算净伤害并打印类型\nraw_atk = \"120\"\nraw_def = \"45\"\n# 写出两行转换代码\n# atk = ...\n# defense = ...\ndamage = atk - defense\nprint(f\"净伤害：{damage}，类型：{type(damage).__name__}\")",
    "expectedKeywords": [
      "int(",
      "type(",
      "__name__",
      "print"
    ],
    "reward": {
      "exp": 33,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "密码正确！int() 和 type() 已掌握，石门缓缓开启。",
    "hint": "int(\"120\") 把字符串转为整数，float(\"3.14\") 转为浮点数。type(x).__name__ 返回类型名字符串。\n先看\"期望输出\"，本关最终要做到：输出 净伤害：75，类型：int\n写法建议：atk = int(raw_atk); defense = int(raw_def)\n常见错误：忘记调用 int()、type() 后面没有 .__name__。",
    "expectedOutput": "输出：净伤害：75，类型：int",
    "referenceAnswer": "raw_atk = \"120\"\nraw_def = \"45\"\natk = int(raw_atk)\ndefense = int(raw_def)\ndamage = atk - defense\nprint(f\"净伤害：{damage}，类型：{type(damage).__name__}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day03"
    }
  },
  {
    "id": "ch01-py100-day004",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "无量山分金令",
    "npc": "段誉",
    "difficulty": "入门 运算符",
    "story": "百枚金币在无量山前按门派数均分，段誉要你用整除与取余算出每份数量，再用三元表达式生成汇报文字。",
    "objective": "用 // 算每份，% 取余，三元表达式生成 msg，打印格式化结果。",
    "knowledge": [
      "// 整除",
      "% 取余",
      "三元表达式 X if 条件 else Y",
      "** 幂运算"
    ],
    "starterCode": "# 补全代码：整除、取余、三元表达式\ntotal = 100\nparts = 3\nper = total // parts\nremain = total % parts\n# 三元表达式：remain==0 时 \"整除完毕\"，否则 f\"余下{remain}块\"\nmsg = # 写出这一行\nprint(f\"每份：{per}，{msg}\")",
    "expectedKeywords": [
      "//",
      "%",
      "if",
      "else",
      "print"
    ],
    "reward": {
      "exp": 34,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "金币分配完毕！三元表达式和整除取余已融会贯通。",
    "hint": "三元表达式写法：值A if 条件 else 值B。// 是整除（向下取整），% 是取余。\n先看\"期望输出\"，本关最终要做到：输出 每份：33，余下1块\n写法建议：msg = \"整除完毕\" if remain == 0 else f\"余下{remain}块\"\n常见错误：三元表达式顺序写错（把 else 分支写在前面）。",
    "expectedOutput": "输出：每份：33，余下1块",
    "referenceAnswer": "total = 100\nparts = 3\nper = total // parts\nremain = total % parts\nmsg = \"整除完毕\" if remain == 0 else f\"余下{remain}块\"\nprint(f\"每份：{per}，{msg}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day04"
    }
  },
  {
    "id": "ch01-py100-day005",
    "chapterId": "ch01",
    "chapterTitle": "第一篇：初入大理",
    "title": "无量山境界裁定",
    "npc": "段誉",
    "difficulty": "入门 分支",
    "story": "无量山石碑会根据少侠积累的经验值自动裁定境界。段誉要你写出四段境界的判断逻辑，覆盖从初入到名动武林的全部区间。",
    "objective": "根据 exp 用 if/elif/else 将境界赋给 rank，打印当前经验和境界。",
    "knowledge": [
      "if/elif/else",
      "链式比较",
      "边界值处理"
    ],
    "starterCode": "# 补全代码：四段境界判断\nexp = 350\nif exp < 100:\n    rank = \"初入江湖\"\nelif # 写出 exp 的范围条件:\n    rank = \"小有所成\"\nelif # 写出 exp 的范围条件:\n    rank = \"独闯江湖\"\nelse:\n    rank = \"名动武林\"\nprint(f\"当前经验：{exp}，境界：{rank}\")",
    "expectedKeywords": [
      "if",
      "elif",
      "else",
      "rank",
      "print"
    ],
    "reward": {
      "exp": 35,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "境界裁定完成！if/elif/else 的多分支结构已入门。",
    "hint": "elif 可以连用多个，从上到下只执行第一个满足条件的分支。\n先看\"期望输出\"：exp=350 时输出 当前经验：350，境界：独闯江湖\n境界分界：<100 初入，<300 小有所成，<600 独闯江湖，>=600 名动武林。\n写法建议：elif exp < 300: rank = \"小有所成\" ; elif exp < 600: rank = \"独闯江湖\"\n常见错误：条件写成 300 <= exp < 600 也可以，但不要遗漏任何区间。",
    "expectedOutput": "给定 exp = 350\n输出：当前经验：350，境界：独闯江湖",
    "referenceAnswer": "exp = 350\nif exp < 100:\n    rank = \"初入江湖\"\nelif exp < 300:\n    rank = \"小有所成\"\nelif exp < 600:\n    rank = \"独闯江湖\"\nelse:\n    rank = \"名动武林\"\nprint(f\"当前经验：{exp}，境界：{rank}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day05"
    }
  },
  {
    "id": "ch02-q01",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "琅嬛书架归位",
    "npc": "王语嫣",
    "difficulty": "初阶",
    "story": "玉洞书架倾倒，三本秘籍、两味药材和三条人物线索混在一处。王语嫣要你用字典推导式从分类字典中统计每类数量，再用负索引读取最后一条线索。",
    "objective": "用字典推导式从 groups 建立 {类别: 数量} 字典，用 books[0]、person_clues[-1] 和 clues 打印结果。",
    "knowledge": [
      "字典推导式",
      "负索引",
      ".items()",
      "len()"
    ],
    "starterCode": "# 补全代码：字典推导式 + 负索引\nbooks = ['北冥神功', '凌波微步', '一阳指残页']\nherbs = ['断肠草', '悲酥清风解药']\nperson_clues = ['段延庆木杖痕', '西夏一品堂令牌', '雁门关旧信']\ngroups = {'秘籍': books, '药材': herbs, '人物线索': person_clues}\n# 用字典推导式：{类别: 该类数量}\nclues = # 写出这一行\n# 打印：第一本秘籍、最后一条人物线索、人物线索数量\nprint(books[0], person_clues[-1], clues['人物线索'])",
    "expectedKeywords": [
      "{",
      "for",
      "in groups.items()",
      "len(",
      "print"
    ],
    "reward": {
      "exp": 30,
      "trust": 1,
      "reputation": 0,
      "money": 5,
      "art": "琅嬛书架法"
    },
    "successMessage": "书架归位，字典推导式和负索引都拿捏了。",
    "hint": "字典推导式：{k: len(v) for k, v in groups.items()}。负索引 list[-1] 取最后一个元素。\n先看\"期望输出\"：北冥神功 雁门关旧信 3\n写法建议：clues = {k: len(v) for k, v in groups.items()}\n常见错误：推导式忘记 len()、访问 clues 用错键名。",
    "expectedOutput": "输出：北冥神功 雁门关旧信 3",
    "referenceAnswer": "books = ['北冥神功', '凌波微步', '一阳指残页']\nherbs = ['断肠草', '悲酥清风解药']\nperson_clues = ['段延庆木杖痕', '西夏一品堂令牌', '雁门关旧信']\ngroups = {'秘籍': books, '药材': herbs, '人物线索': person_clues}\nclues = {k: len(v) for k, v in groups.items()}\nprint(books[0], person_clues[-1], clues['人物线索'])"
  },
  {
    "id": "ch02-q02",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "剑湖巡山令",
    "npc": "钟灵",
    "difficulty": "初阶",
    "story": "剑湖宫混进了无相码阁探子，钟灵递来一串巡山暗号。不只要找到正确暗号，还要打印它们出现的位置编号。",
    "objective": "用 enumerate 遍历 codes，找出所有等于\"剑湖\"的暗号并打印位置；最后打印出现总次数。",
    "knowledge": [
      "enumerate()",
      "for 循环",
      "条件判断",
      "计数器"
    ],
    "starterCode": "# 补全代码：enumerate 遍历，记录位置和次数\ncodes = ['苍山', '剑湖', '无量', '剑湖', '丽江']\ncount = 0\n# 用 enumerate 遍历 codes，找出所有 '剑湖' 并打印：第N处：暗号通过\nfor i, code in enumerate(codes):\n    # 写出判断和打印（格式：第N处：暗号通过）\n    # 写出计数\nprint(f'共发现暗号：{count}次')",
    "expectedKeywords": [
      "enumerate",
      "for",
      "if",
      "+=",
      "print"
    ],
    "reward": {
      "exp": 35,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": ""
    },
    "successMessage": "巡山令执行完毕，enumerate 让位置和内容同步可见。",
    "hint": "enumerate(iterable) 每轮产生 (索引, 元素) 对，可以用 for i, code in enumerate(codes) 解包。\n先看\"期望输出\"：两行\"第N处：暗号通过\"，最后一行\"共发现暗号：2次\"\n写法建议：if code == \"剑湖\": print(f\"第{i}处：暗号通过\"); count += 1\n常见错误：忘记 count += 1、enumerate 索引从 0 开始。",
    "expectedOutput": "输出三行：\n第1处：暗号通过\n第3处：暗号通过\n共发现暗号：2次",
    "referenceAnswer": "codes = ['苍山', '剑湖', '无量', '剑湖', '丽江']\ncount = 0\nfor i, code in enumerate(codes):\n    if code == '剑湖':\n        print(f'第{i}处：暗号通过')\n        count += 1\nprint(f'共发现暗号：{count}次')"
  },
  {
    "id": "ch02-q03",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "珍珑骰局初试",
    "npc": "苏星河",
    "difficulty": "初阶",
    "story": "苏星河摆下骰子，要你用 while 循环模拟：反复掷骰直到出现 6 点，每次打印点数，最后打印共掷了几次。",
    "objective": "用 while 循环持续掷骰（randint 1-6），直到 point == 6 停止，累计次数后打印。",
    "knowledge": [
      "while 循环",
      "random.randint()",
      "条件终止",
      "计数器"
    ],
    "starterCode": "# 补全代码：while 循环掷骰直到出现 6\nimport random\ncount = 0\npoint = 0\nwhile point != 6:\n    # 写出：生成1-6随机点数赋给 point\n    # 写出：count 自增\n    print(f'第{count}次：{point}点')\nprint(f'共掷了{count}次，终于掷出6点')",
    "expectedKeywords": [
      "while",
      "randint",
      "count",
      "+=",
      "print"
    ],
    "reward": {
      "exp": 50,
      "trust": 0,
      "reputation": 2,
      "money": 5,
      "art": "北冥周天功"
    },
    "successMessage": "骰声落定，while 的终止条件和 randint 用法都掌握了。",
    "hint": "while 条件为 True 时持续执行；random.randint(1, 6) 生成 1 到 6 的随机整数（含端点）。\n先看\"期望输出\"：若第 3 次掷出 6，则打印 3 行点数 + 最后一行\"共掷了3次\"\n写法建议：point = random.randint(1, 6); count += 1\n常见错误：count 在 while 前不初始化、while 条件写成 point == 6 导致立刻退出。",
    "expectedOutput": "每次打印\"第N次：X点\"，最终打印\"共掷了N次，终于掷出6点\"（次数随机）",
    "referenceAnswer": "import random\ncount = 0\npoint = 0\nwhile point != 6:\n    point = random.randint(1, 6)\n    count += 1\n    print(f'第{count}次：{point}点')\nprint(f'共掷了{count}次，终于掷出6点')"
  },
  {
    "id": "ch02-pcep-q07",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "三岔口判路",
    "npc": "钟灵",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。钟灵在三岔口放下三块木牌：药香、剑痕、陌生脚印。你要用 if/elif/else 判定行动。",
    "objective": "根据 sign 的值输出采药、戒备或绕路。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "if/elif/else",
      "条件表达式",
      "缩进"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nsign = '剑痕'\nif sign == '药香':\n    # 按期望输出写 print(...)\nelif sign == '剑痕':\n    # 按期望输出写 print(...)\nelse:\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "if",
      "elif",
      "else",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": "判路三式"
    },
    "successMessage": "你按迹象判路，钟灵放心把闪电貂收回袖中。",
    "hint": "入门考试 控制流题常考缩进和分支顺序。if 先判断，elif 继续判断，else 兜底。\n先看“期望输出”，本关 sign 是 '剑痕'，所以最终要输出：戒备\n关键知识：条件后面要写冒号，分支里的 print 必须缩进。\n写法建议：if sign == '药香': print('采药')，elif sign == '剑痕': print('戒备')，else: print('绕路')。\n常见错误：把 = 当成 ==、忘记冒号、else 写条件。",
    "expectedOutput": "给定 sign = '剑痕'\n输出：戒备",
    "referenceAnswer": "sign = '剑痕'\nif sign == '药香':\n    print('采药')\nelif sign == '剑痕':\n    print('戒备')\nelse:\n    print('绕路')"
  },
  {
    "id": "ch02-pcep-q08",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "夜巡 while 令",
    "npc": "乔峰",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。乔峰让你夜巡三更，遇到第二更要跳过报号，巡完还要确认结束。",
    "objective": "用 while 循环从 0 数到 3，遇到 2 时 continue，循环正常结束后用 else 打印巡完。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "while",
      "continue",
      "循环 else"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ncount = 0\nwhile count < 3:\n    # 写出这一行代码\n    if count == 2:\n        continue\n    # 按期望输出写 print(...)\nelse:\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "while",
      "continue",
      "else",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 1,
      "money": 12,
      "art": ""
    },
    "successMessage": "三更夜巡无误，乔峰说你已经懂 while 的节奏。",
    "hint": "while 根据条件重复执行。continue 会跳过本轮后面的代码，直接进入下一轮判断。while 的 else 会在循环没有被 break 打断时执行。\n先看“期望输出”，本关最终输出三行：1、3、巡完。\n关键知识：如果把 count += 1 放在 continue 后面，可能会死循环，所以要先加 1 再判断。\n写法建议：while count < 3: count += 1; if count == 2: continue; print(count)。循环外的 else 对齐 while。\n常见错误：else 缩进到 if 下面、continue 前没有更新 count。",
    "expectedOutput": "输出三行：\n1\n3\n巡完",
    "referenceAnswer": "count = 0\nwhile count < 3:\n    count += 1\n    if count == 2:\n        continue\n    print(count)\nelse:\n    print('巡完')"
  },
  {
    "id": "ch02-pcep-q09",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "擂台 break 令",
    "npc": "木婉清",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。擂台上有三名挑战者，遇到慕容复就立刻停止点名，测试你是否理解 break。",
    "objective": "遍历 rivals，遇到慕容复时打印发现慕容复并 break；循环的 else 不应执行。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "for",
      "break",
      "循环 else"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nrivals = ['鸠摩智', '慕容复', '段延庆']\nfor name in rivals:\n    if name == '慕容复':\n        # 按期望输出写 print(...)\n        break\nelse:\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "for",
      "break",
      "else",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 2,
      "money": 12,
      "art": ""
    },
    "successMessage": "你在名单中及时截停，break 的时机拿捏得很准。",
    "hint": "for 循环会逐个取出列表元素。break 会立刻结束整个循环；如果循环被 break 打断，for 后面的 else 不会执行。\n先看“期望输出”，本关最终只输出：发现慕容复\n关键知识：for 的 else 不是 if 的 else，它表示循环正常结束后的动作。\n写法建议：for name in rivals: if name == '慕容复': print('发现慕容复'); break。else 与 for 对齐。\n常见错误：else 缩进到 if 下、break 后还以为会执行 for-else。",
    "expectedOutput": "给定 rivals = ['鸠摩智', '慕容复', '段延庆']\n输出：发现慕容复",
    "referenceAnswer": "rivals = ['鸠摩智', '慕容复', '段延庆']\nfor name in rivals:\n    if name == '慕容复':\n        print('发现慕容复')\n        break\nelse:\n    print('未发现')"
  },
  {
    "id": "ch02-pcep-q10",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "range 轻功步",
    "npc": "段誉",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。段誉演示凌波微步：从 1 到 5 隔一步落脚。你要用 range 写出同样的节奏。",
    "objective": "用 range(1, 6, 2) 生成步点，累加到 total，并打印步点列表和总和。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "range()",
      "for 循环",
      "累加器"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nsteps = []\ntotal = 0\nfor step in range(1, 6, 2):\n    # 写出这一行代码\n    # 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "range",
      "for",
      "append",
      "+=",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": ""
    },
    "successMessage": "步点落在 1、3、5，段誉说这就是 range 的起止步长。",
    "hint": "range(start, stop, step) 包含 start，不包含 stop。range(1, 6, 2) 会给出 1、3、5。\n先看“期望输出”，本关最终要做到：输出：[1, 3, 5] 9\n关键知识：append 把元素加入列表末尾，+= 适合做累加器。\n写法建议：for step in range(1, 6, 2): steps.append(step); total += step。\n常见错误：以为 stop=6 会包含 6、忘记初始化 total。",
    "expectedOutput": "遍历 range(1, 6, 2)\n输出：[1, 3, 5] 9",
    "referenceAnswer": "steps = []\ntotal = 0\nfor step in range(1, 6, 2):\n    steps.append(step)\n    total += step\nprint(steps, total)"
  },
  {
    "id": "ch02-pcep-q11",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "空招 pass 记",
    "npc": "苏星河",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。苏星河说有些分支暂时不用动作，但语法上必须占位。此时要用 pass，而不是乱写文字。",
    "objective": "遍历 actions，遇到静候时用 pass，其余动作打印执行内容。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "pass",
      "for",
      "条件判断"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nactions = ['探路', '静候', '回报']\nfor action in actions:\n    if action == '静候':\n        # 写出这一行代码\n    else:\n        # 按期望输出写 print(...)",
    "expectedKeywords": [
      "for",
      "if",
      "pass",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": ""
    },
    "successMessage": "空招不乱，苏星河知道你明白 pass 的用途。",
    "hint": "pass 是什么都不做的合法语句，常用于暂时保留代码结构。入门考试 会考它和缩进的关系。\n先看“期望输出”，本关最终输出两行：执行：探路 和 执行：回报。\n关键知识：if action == '静候': pass 表示这个分支暂时不执行动作；else 分支负责打印其他动作。\n写法建议：pass 要放在 if 分支缩进里，print 放在 else 分支。\n常见错误：用字符串 'pass' 代替 pass、pass 后面又继续打印导致静候也输出。",
    "expectedOutput": "给定 actions = ['探路', '静候', '回报']\n输出两行：\n执行：探路\n执行：回报",
    "referenceAnswer": "actions = ['探路', '静候', '回报']\nfor action in actions:\n    if action == '静候':\n        pass\n    else:\n        print('执行：' + action)"
  },
  {
    "id": "ch02-pcep-q12",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "嵌套循环搜阵眼",
    "npc": "无名扫地僧",
    "difficulty": "考前 控制流",
    "story": "剑湖边风声渐紧，钟灵要你把循环和清单整理成可执行的巡山令。少林石阵有两行三列，你要用嵌套循环找出值为 1 的阵眼坐标。",
    "objective": "遍历 matrix，找到值为 1 的位置并打印坐标。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "嵌套循环",
      "索引",
      "二维列表"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nmatrix = [[0, 0, 1], [0, 0, 0]]\nfor row in range(len(matrix)):\n    for col in range(len(matrix[row])):\n        if matrix[row][col] == 1:\n            # 按期望输出写 print(...)",
    "expectedKeywords": [
      "for",
      "range",
      "len",
      "if",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 2,
      "money": 15,
      "art": ""
    },
    "successMessage": "阵眼坐标浮现，扫地僧说嵌套循环已经入门。",
    "hint": "二维列表可以看成表格：matrix[row][col] 取某一行某一列。外层循环行，内层循环列。\n先看“期望输出”，本关最终要做到：输出：阵眼：0 2\n关键知识：len(matrix) 是行数，len(matrix[row]) 是这一行的列数。\n写法建议：for row in range(len(matrix)): for col in range(len(matrix[row])): if matrix[row][col] == 1: print('阵眼：', row, col)。\n常见错误：行列顺序写反、range 多写 1 导致越界。",
    "expectedOutput": "给定 matrix = [[0, 0, 1], [0, 0, 0]]\n输出：阵眼：0 2",
    "referenceAnswer": "matrix = [[0, 0, 1], [0, 0, 0]]\nfor row in range(len(matrix)):\n    for col in range(len(matrix[row])):\n        if matrix[row][col] == 1:\n            print('阵眼：', row, col)"
  },
  {
    "id": "ch02-py100-day006",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "乔峰十连击训练",
    "npc": "钟灵",
    "difficulty": "初阶 while",
    "story": "乔峰在后山独自训练，将第 1 至 10 招伤害依次累加。他要你用 while 循环写出这道内功修炼题，最终打印总伤害。",
    "objective": "用 while 循环将 1 到 10 累加到 total，打印十连击总伤害。",
    "knowledge": [
      "while 循环",
      "累加器模式",
      "+= 自增"
    ],
    "starterCode": "# 补全代码：while 循环累加 1 到 10\ni = 1\ntotal = 0\nwhile i <= 10:\n    # 写出累加语句\n    # 写出 i 自增语句\nprint(f\"十连击总伤害：{total}\")",
    "expectedKeywords": [
      "while",
      "total",
      "+=",
      "print"
    ],
    "reward": {
      "exp": 36,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "连击总伤害 55，乔峰微微点头：while 的节奏你已掌握。",
    "hint": "while 循环会在条件为 True 时反复执行，别忘了在循环体内让 i 增加，否则会死循环。\n先看\"期望输出\"：输出 十连击总伤害：55\n关键知识：total += i 等价于 total = total + i；i += 1 让循环推进。\n写法建议：while i <= 10: total += i; i += 1\n常见错误：忘记 i += 1 导致死循环、初始值设错。",
    "expectedOutput": "输出：十连击总伤害：55",
    "referenceAnswer": "i = 1\ntotal = 0\nwhile i <= 10:\n    total += i\n    i += 1\nprint(f\"十连击总伤害：{total}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day06"
    }
  },
  {
    "id": "ch02-py100-day007",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "无量山数术阵法",
    "npc": "钟灵",
    "difficulty": "初阶 for-else",
    "story": "苏星河在无量数术阵中布下 2 到 20 的数字结界，只有素数才是真正的阵眼。他要你用嵌套循环加 for-else 找出所有阵眼。",
    "objective": "用嵌套 for 和 for-else 找出 2-20 内的所有素数，存入列表并打印。",
    "knowledge": [
      "嵌套 for 循环",
      "for-else 结构",
      "break",
      "素数判断"
    ],
    "starterCode": "# 补全代码：嵌套 for + else 筛素数\nprimes = []\nfor n in range(2, 21):\n    for i in range(2, n):\n        if n % i == 0:\n            break\n    else:\n        # 写出这一行：把 n 加入 primes\nprint(primes)",
    "expectedKeywords": [
      "for",
      "range",
      "break",
      "else",
      "append",
      "print"
    ],
    "reward": {
      "exp": 37,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "阵眼全部找到！for-else 的精妙之处：else 只在循环未被 break 时执行。",
    "hint": "for 的 else 分支在循环正常结束（没有被 break 打断）时执行。这里用它来标记\"没有找到因数\"即为素数。\n先看\"期望输出\"：[2, 3, 5, 7, 11, 13, 17, 19]\n写法建议：else: primes.append(n)\n常见错误：把 else 写在 if 下面（那是 if-else）、range(2, n) 当 n=2 时内层循环不执行，2 会被直接加入。",
    "expectedOutput": "输出：[2, 3, 5, 7, 11, 13, 17, 19]",
    "referenceAnswer": "primes = []\nfor n in range(2, 21):\n    for i in range(2, n):\n        if n % i == 0:\n            break\n    else:\n        primes.append(n)\nprint(primes)",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day07"
    }
  },
  {
    "id": "ch02-py100-day008",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "兵器阁精锐筛选",
    "npc": "钟灵",
    "difficulty": "初阶 列表推导式",
    "story": "王语嫣整理兵器阁清单，只有攻击力不低于 60 的武器才能入选精英库。她要你用列表推导式一行代码完成筛选，展示 Python 的简洁之道。",
    "objective": "用列表推导式从 weapons 中提取攻击力 >= 60 的武器名，存入 strong，打印结果。",
    "knowledge": [
      "列表推导式 [x for x in list if 条件]",
      "元组解包",
      "条件过滤"
    ],
    "starterCode": "# 补全代码：列表推导式筛选武器\nweapons = [(\"玄铁重剑\", 90), (\"倚天剑\", 75), (\"木剑\", 30), (\"软剑\", 60)]\n# 用列表推导式提取 power >= 60 的 name\nstrong = # 写出这一行\nprint(strong)",
    "expectedKeywords": [
      "for",
      "in weapons",
      "if",
      "print"
    ],
    "reward": {
      "exp": 38,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "精锐武器名单生成！列表推导式让筛选代码只需一行。",
    "hint": "列表推导式语法：[表达式 for 变量 in 可迭代 if 条件]。元组解包：for name, power in weapons 可以同时取出名称和数值。\n先看\"期望输出\"：['玄铁重剑', '倚天剑', '软剑']\n写法建议：[name for name, power in weapons if power >= 60]\n常见错误：把 if 写在 for 前面、条件写成 == 而不是 >=。",
    "expectedOutput": "输出：['玄铁重剑', '倚天剑', '软剑']",
    "referenceAnswer": "weapons = [(\"玄铁重剑\", 90), (\"倚天剑\", 75), (\"木剑\", 30), (\"软剑\", 60)]\nstrong = [name for name, power in weapons if power >= 60]\nprint(strong)",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day08"
    }
  },
  {
    "id": "ch02-py100-day009",
    "chapterId": "ch02",
    "chapterTitle": "第二篇：无量剑湖",
    "title": "江湖群雄功力榜",
    "npc": "钟灵",
    "difficulty": "初阶 列表方法",
    "story": "少室山前要公布天下英雄功力排名，虚竹让你用 sort 和 lambda 按功力降序排列，再取前三名姓名。",
    "objective": "对 heroes 按功力降序 sort，用列表推导式提取前三名姓名，打印结果。",
    "knowledge": [
      "sort(key=lambda)",
      "reverse=True",
      "列表切片",
      "列表推导式"
    ],
    "starterCode": "# 补全代码：sort + 列表推导式取前三\nheroes = [(\"乔峰\", 95), (\"慕容复\", 80), (\"段誉\", 70), (\"虚竹\", 90), (\"鸠摩智\", 85)]\n# 按功力（第二元素）降序排列\nheroes.sort(key=lambda x: x[1], reverse=True)\n# 用列表推导式取姓名，切片 [:3] 只取前三\ntop3 = # 写出这一行\nprint(top3)",
    "expectedKeywords": [
      "sort",
      "lambda",
      "reverse",
      "print"
    ],
    "reward": {
      "exp": 39,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "英雄榜出炉！sort 的 key 参数和 lambda 配合是排序利器。",
    "hint": "sort(key=lambda x: x[1]) 按元组第二个元素排序；reverse=True 改为降序。切片 list[:3] 取前三个元素。\n先看\"期望输出\"：['乔峰', '虚竹', '鸠摩智']\n写法建议：top3 = [h[0] for h in heroes[:3]]\n常见错误：sort 和 sorted 的区别——sort 原地排序，sorted 返回新列表。",
    "expectedOutput": "输出：['乔峰', '虚竹', '鸠摩智']",
    "referenceAnswer": "heroes = [(\"乔峰\", 95), (\"慕容复\", 80), (\"段誉\", 70), (\"虚竹\", 90), (\"鸠摩智\", 85)]\nheroes.sort(key=lambda x: x[1], reverse=True)\ntop3 = [h[0] for h in heroes[:3]]\nprint(top3)",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day09"
    }
  },
  {
    "id": "ch03-q01",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "杏子林拆案法",
    "npc": "乔峰",
    "difficulty": "进阶",
    "story": "杏子林中证词纷乱，乔峰要你写一个函数，用列表推导式从所有记录中找出包含指定关键词的记录，再统计数量。",
    "objective": "定义 find_records(lst, keyword)，用列表推导式返回包含 keyword 的记录列表，打印结果和数量。",
    "knowledge": [
      "列表推导式 + 条件过滤",
      "def 函数",
      "in 成员运算",
      "len()"
    ],
    "starterCode": "# 补全代码：函数 + 列表推导式过滤\nrecords = ['马夫人证词', '段延庆木杖痕', '段延庆目击', '雁门关旧信', '段延庆踪迹']\n\ndef find_records(lst, keyword):\n    # 用列表推导式返回包含 keyword 的记录\n    return # 写出列表推导式\n\nresult = find_records(records, '段延庆')\nprint(f'涉及段延庆的记录：{len(result)}条')\nprint(result)",
    "expectedKeywords": [
      "def find_records",
      "return",
      "[",
      "for",
      "in lst",
      "if",
      "keyword",
      "print"
    ],
    "reward": {
      "exp": 35,
      "trust": 2,
      "reputation": 0,
      "money": 0,
      "art": "一阳指谱"
    },
    "successMessage": "乔峰见你先拆后做，三条段延庆线索一网打尽。",
    "hint": "列表推导式过滤：[x for x in lst if keyword in x]。keyword in x 检查字符串是否包含子串。\n先看\"期望输出\"：涉及段延庆的记录：3条 和 包含三条的列表\n写法建议：return [r for r in lst if keyword in r]\n常见错误：把 in 写成 ==（只能精确匹配，不能找子串）。",
    "expectedOutput": "输出：\n涉及段延庆的记录：3条\n['段延庆木杖痕', '段延庆目击', '段延庆踪迹']",
    "referenceAnswer": "records = ['马夫人证词', '段延庆木杖痕', '段延庆目击', '雁门关旧信', '段延庆踪迹']\n\ndef find_records(lst, keyword):\n    return [r for r in lst if keyword in r]\n\nresult = find_records(records, '段延庆')\nprint(f'涉及段延庆的记录：{len(result)}条')\nprint(result)"
  },
  {
    "id": "ch03-q02",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "群雄名帖校验",
    "npc": "阿朱",
    "difficulty": "进阶",
    "story": "阿朱换来一叠名帖，格式随人而定——有的带称号，有的只有门派。你要用 **kwargs 写出通用名帖函数，缺少字段时用默认值填充。",
    "objective": "定义 make_card(**info)，用 .get() 读取字段（缺省默认值），两次调用展示灵活性。",
    "knowledge": [
      "**kwargs",
      "dict.get() 默认值",
      "def 函数",
      "f-string"
    ],
    "starterCode": "# 补全代码：**kwargs + dict.get 默认值\ndef make_card(**info):\n    # 用 info.get('name','侠客') 等方式获取字段，title 缺省时为\"未知\"\n    # 返回格式化字符串：sect + name + \"：\" + title\n\nprint(make_card(name='乔峰', sect='丐帮', title='帮主'))\nprint(make_card(name='虚竹', sect='灵鹫宫'))  # 无 title，默认\"未知\"",
    "expectedKeywords": [
      "**info",
      ".get(",
      "return",
      "print"
    ],
    "reward": {
      "exp": 40,
      "trust": 2,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "**kwargs 让名帖函数随叫随用，缺字段也不报错。",
    "hint": "**kwargs 把所有关键字参数收成字典，dict.get(key, 默认值) 在键不存在时返回默认值。\n先看\"期望输出\"：丐帮乔峰：帮主 和 灵鹫宫虚竹：未知\n写法建议：name=info.get(\"name\",\"侠客\"); sect=info.get(\"sect\",\"散人\"); title=info.get(\"title\",\"未知\")\n常见错误：**info 写成 *info（少一个*）、get 的默认值忘记加引号。",
    "expectedOutput": "输出两行：\n丐帮乔峰：帮主\n灵鹫宫虚竹：未知",
    "referenceAnswer": "def make_card(**info):\n    name = info.get('name', '侠客')\n    sect = info.get('sect', '散人')\n    title = info.get('title', '未知')\n    return f'{sect}{name}：{title}'\n\nprint(make_card(name='乔峰', sect='丐帮', title='帮主'))\nprint(make_card(name='虚竹', sect='灵鹫宫'))"
  },
  {
    "id": "ch03-q03",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "乔帮主排阵",
    "npc": "乔峰",
    "difficulty": "进阶",
    "story": "三名弟子要迎战三路强敌。乔峰要你用 zip + enumerate 配对对阵，报告每路胜负并统计总胜场。",
    "objective": "用 enumerate(zip(ours, enemies)) 遍历，胜出时打印\"第N路：我方胜\"，最后打印总胜场。",
    "knowledge": [
      "zip() 配对",
      "enumerate()",
      "for 循环",
      "计数器 +="
    ],
    "starterCode": "# 补全代码：zip + enumerate，统计胜场\nours = [5, 8, 3]\nenemies = [4, 7, 9]\n# 用 enumerate(zip(ours, enemies)) 遍历，胜出时打印并计数\nwins = 0",
    "expectedKeywords": [
      "zip",
      "enumerate",
      "for",
      "if",
      "+=",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 2,
      "money": 0,
      "art": ""
    },
    "successMessage": "排阵一变，丐帮弟子避实击虚，两胜一负。",
    "hint": "enumerate(zip(a, b)) 同时给出编号、我方值、敌方值：for i, (a, b) in enumerate(zip(ours, enemies))。\n先看\"期望输出\"：两行\"第N路：我方胜\"，最后\"胜场：2\"\n写法建议：for i, (a, b) in enumerate(zip(ours, enemies), start=1): if a > b: wins += 1; print(f\"第{i}路：我方胜\")\n常见错误：zip 只到短者，两列表长度不同时会截断。",
    "expectedOutput": "输出：\n第1路：我方胜\n第2路：我方胜\n胜场：2",
    "referenceAnswer": "ours = [5, 8, 3]\nenemies = [4, 7, 9]\nwins = 0\nfor i, (a, b) in enumerate(zip(ours, enemies), start=1):\n    if a > b:\n        wins += 1\n        print(f'第{i}路：我方胜')\nprint(f'胜场：{wins}')"
  },
  {
    "id": "ch03-pcep-q13",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "列表兵器架",
    "npc": "王语嫣",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。兵器架上有刀、剑、棍。王语嫣要求你用列表索引、切片和修改操作重新排架。",
    "objective": "创建 weapons 列表，修改第二项，追加暗器，删除第一项，并打印列表和切片。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "列表索引",
      "切片",
      "增删改"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nweapons = ['刀', '剑', '棍']\nweapons[1] = '重剑'\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "append",
      "del",
      "[0:2]",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": "列表兵器谱"
    },
    "successMessage": "兵器架归整，王语嫣说列表是考试高频兵器。",
    "hint": "列表是可变序列，可以通过索引修改、append 添加、del 删除。切片 weapons[0:2] 取第 0 到第 1 项，不含第 2 项。\n先看“期望输出”，本关最终要做到：输出：['重剑', '棍', '暗器'] ['重剑', '棍']\n关键知识：列表索引从 0 开始，所以第二项是 weapons[1]。\n写法建议：weapons[1] = '重剑'; weapons.append('暗器'); del weapons[0]。\n常见错误：把第二项写成 weapons[2]、误以为切片包含结束位置。",
    "expectedOutput": "初始 weapons = ['刀', '剑', '棍']\n操作后输出：['重剑', '棍', '暗器'] ['重剑', '棍']",
    "referenceAnswer": "weapons = ['刀', '剑', '棍']\nweapons[1] = '重剑'\nweapons.append('暗器')\ndel weapons[0]\nprint(weapons, weapons[0:2])"
  },
  {
    "id": "ch03-pcep-q14",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "名单拷贝疑云",
    "npc": "阿朱",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。阿朱发现两份名单互相影响。你要证明 alias 是同一份列表，copy 才是副本。",
    "objective": "创建 names、alias、clone，修改 alias 后打印 names 和 clone。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "列表引用",
      "copy()",
      "sort()"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nnames = ['乔峰', '段誉']\nalias = names\nclone = names.copy()\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "copy",
      "append",
      "sort",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 1,
      "money": 12,
      "art": ""
    },
    "successMessage": "阿朱看懂引用与复制，伪名单的手脚藏不住了。",
    "hint": "alias = names 不会复制列表，只是让两个名字指向同一份列表；names.copy() 会创建浅拷贝。\n先看“期望输出”，本关最终要做到：names 被 alias 影响，clone 不受 append 影响。\n关键知识：append 修改原列表；sort 会原地排序，不返回新列表。\n写法建议：先 clone = names.copy()，再 alias.append('虚竹')，最后 clone.sort()。\n常见错误：写 clone = names 导致两份都变、写 clone = names.sort() 得到 None。",
    "expectedOutput": "给定 names = ['乔峰', '段誉']，alias = names，clone = names.copy()\n执行 alias.append('虚竹') 和 clone.sort()\n输出：['乔峰', '段誉', '虚竹'] ['乔峰', '段誉']",
    "referenceAnswer": "names = ['乔峰', '段誉']\nalias = names\nclone = names.copy()\nalias.append('虚竹')\nclone.sort()\nprint(names, clone)"
  },
  {
    "id": "ch03-pcep-q15",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "元组名帖不可改",
    "npc": "段誉",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。段誉写下不可改的名帖，用元组保存姓名、门派和称号，再用解包读出内容。",
    "objective": "创建 card 元组，解包为 name、sect、title，并打印格式化名帖。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "元组",
      "解包",
      "不可变序列"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ncard = ('段誉', '大理', '世子')\nname, sect, title = card\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "(",
      ")",
      "name",
      "sect",
      "title",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": ""
    },
    "successMessage": "名帖一经落笔不可乱改，元组的性子你摸清了。",
    "hint": "元组和列表相似，但元组不可变。解包可以把元组里的值一次赋给多个变量。\n先看“期望输出”，本关最终要做到：输出：大理段誉：世子\n关键知识：name, sect, title = card 会按位置解包。变量数量必须和元组元素数量一致。\n写法建议：card = ('段誉', '大理', '世子')，然后用 f-string 输出。\n常见错误：试图修改 card[0]、解包变量数量不匹配。",
    "expectedOutput": "给定 card = ('段誉', '大理', '世子')\n输出：大理段誉：世子",
    "referenceAnswer": "card = ('段誉', '大理', '世子')\nname, sect, title = card\nprint(f'{sect}{name}：{title}')"
  },
  {
    "id": "ch03-pcep-q16",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "字典情报库",
    "npc": "王语嫣",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。王语嫣要把人物情报放进字典：查、改、删、遍历，都要会。",
    "objective": "创建 info 字典，新增 risk，修改 trust，删除 old，再打印指定字段和所有键。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "字典",
      "keys()/items()",
      "del"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ninfo = {'name': '段延庆', 'trust': 6, 'old': True}\ninfo['risk'] = '高'\ninfo['trust'] = 7\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "{",
      "del",
      "keys",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 1,
      "money": 12,
      "art": ""
    },
    "successMessage": "情报库字段清楚，王语嫣说字典题最怕键名写错。",
    "hint": "字典用键来取值和改值。info['risk'] = '高' 是新增字段；info['trust'] = 7 是修改字段；del info['old'] 是删除字段。\n先看“期望输出”，本关最终要做到：输出：段延庆 7 高 ['name', 'trust', 'risk']\n关键知识：list(info.keys()) 会把字典键转成列表，保留插入顺序。\n写法建议：按新增、修改、删除的顺序操作，最后 print。\n常见错误：键名少引号、访问被删除的 old、把 keys 当属性写成 info.keys。",
    "expectedOutput": "给定 info = {'name': '段延庆', 'trust': 6, 'old': True}\n操作后输出：段延庆 7 高 ['name', 'trust', 'risk']",
    "referenceAnswer": "info = {'name': '段延庆', 'trust': 6, 'old': True}\ninfo['risk'] = '高'\ninfo['trust'] = 7\ndel info['old']\nprint(info['name'], info['trust'], info['risk'], list(info.keys()))"
  },
  {
    "id": "ch03-pcep-q17",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "字符串密令拆解",
    "npc": "阿朱",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。阿朱截到一串密令，里面有多余空白、大小写和分隔符。你要用字符串方法清洗它。",
    "objective": "对 msg 使用 strip、lower、replace、split、join，并打印清洗结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "字符串方法",
      "split()/join()",
      "不可变序列"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nmsg = '  BeiMing-LingBo  '\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "strip",
      "lower",
      "replace",
      "split",
      "join",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 2,
      "money": 12,
      "art": "密令拆字诀"
    },
    "successMessage": "密令被拆开再合上，阿朱说字符串方法够用了。",
    "hint": "字符串不可变，所以每个方法会返回新字符串；要用变量接住结果。\n先看“期望输出”，本关最终要做到：输出：beiming/lingbo\n关键知识：strip 去首尾空白，lower 转小写，replace 替换内容，split 分割成列表，'/'.join(parts) 把列表合成字符串。\n写法建议：clean = msg.strip().lower().replace('-', ' ')，parts = clean.split()，print('/'.join(parts))。\n常见错误：调用方法但不赋值、split('-') 时前面已经把 - 替换掉。",
    "expectedOutput": "给定 msg = '  BeiMing-LingBo  '\n输出：beiming/lingbo",
    "referenceAnswer": "msg = '  BeiMing-LingBo  '\nclean = msg.strip().lower().replace('-', ' ')\nparts = clean.split()\nprint('/'.join(parts))"
  },
  {
    "id": "ch03-pcep-q18",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "字符编号暗号",
    "npc": "钟灵",
    "difficulty": "考前 集合",
    "story": "杏子林证词纷乱，阿朱递来名册，要你用集合、文本和映射把真假分清。钟灵用字符编号传讯：A 的编号和 66 对应的字符，合起来就是考试里常见的 ord/chr。",
    "objective": "用 ord 和 chr 得到 A 的编号与 66 对应的字符，并打印结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "ord()",
      "chr()",
      "字符串索引"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "ord",
      "chr",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 0,
      "money": 8,
      "art": ""
    },
    "successMessage": "字符编号对上，钟灵的暗号终于能读了。",
    "hint": "ord('A') 返回字符 A 的 Unicode 编号，chr(66) 把编号转回字符。\n先看“期望输出”，本关最终要做到：输出：65 B\n关键知识：入门考试 可能用 ord/chr 或字符串索引考字符处理。字符串也能用索引取单个字符。\n写法建议：code = ord('A')，letter = chr(66)，最后 print(code, letter)。\n常见错误：ord 只能接一个字符，不能接 'AB'。",
    "expectedOutput": "给定 code = ord('A')，letter = chr(66)\n输出：65 B",
    "referenceAnswer": "code = ord('A')\nletter = chr(66)\nprint(code, letter)"
  },
  {
    "id": "ch03-py100-day010",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "门派令牌封印",
    "npc": "阿朱",
    "difficulty": "进阶 元组",
    "story": "逍遥派令牌将少侠完整档案封印为不可篡改的元组。只有正确解包，才能读出姓名、门派、功力和所会武功。",
    "objective": "对 hero_record 四元素元组进行解包，打印少侠会几门武功及所在门派。",
    "knowledge": [
      "元组创建",
      "元组解包",
      "元组不可变性",
      "len() 计数"
    ],
    "starterCode": "# 补全代码：元组解包\nhero_record = (\"段誉\", \"大理段氏\", 70, (\"凌波微步\", \"六脉神剑\"))\n# 解包成四个变量\nname, sect, power, skills = # 写出这一行\nprint(f\"{name}会{len(skills)}门武功，门派：{sect}\")",
    "expectedKeywords": [
      "hero_record",
      "len(skills",
      "print"
    ],
    "reward": {
      "exp": 40,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "元组解包成功！元组是有序且不可修改的数据容器。",
    "hint": "元组解包：name, sect, power, skills = hero_record，左边变量数量必须和元组元素数量相同。\n先看\"期望输出\"：段誉会2门武功，门派：大理段氏\n写法建议：name, sect, power, skills = hero_record\n常见错误：变量数量与元组长度不匹配会报 ValueError。",
    "expectedOutput": "输出：段誉会2门武功，门派：大理段氏",
    "referenceAnswer": "hero_record = (\"段誉\", \"大理段氏\", 70, (\"凌波微步\", \"六脉神剑\"))\nname, sect, power, skills = hero_record\nprint(f\"{name}会{len(skills)}门武功，门派：{sect}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day10"
    }
  },
  {
    "id": "ch03-py100-day011",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "雁门关密信解码",
    "npc": "阿朱",
    "difficulty": "进阶 字符串方法",
    "story": "雁门关旧信大小写错乱、夹着多余空格。王语嫣要你链式调用字符串方法：先去空格，再转小写，最后把空格替换为下划线，再拆分重拼为连字符格式。",
    "objective": "对 secret 链式调用 strip()、lower()、replace()，再 split() 后用 \"-\" join() 打印结果。",
    "knowledge": [
      "strip()",
      "lower()",
      "replace()",
      "split()",
      "join()",
      "链式调用"
    ],
    "starterCode": "# 补全代码：字符串方法链式处理\nsecret = \"  yAn Men GuAn jiU XIn  \"\n# 去两端空格 → 转小写 → 把空格换成下划线\ndecoded = secret.strip().lower().replace(\" \", \"_\")\n# 用 split(\"_\") 拆分，用 \"-\" 的 join 重新拼接\nresult = # 写出这一行\nprint(result)",
    "expectedKeywords": [
      "strip()",
      "lower()",
      "replace(",
      "split(",
      "join(",
      "print"
    ],
    "reward": {
      "exp": 41,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "密信解码完成！字符串方法链式调用一气呵成。",
    "hint": "字符串方法返回新字符串，可以链式调用。\"分隔符\".join(列表) 把列表元素用分隔符拼成字符串。\n先看\"期望输出\"：yan-men-guan-jiu-xin\n写法建议：result = \"-\".join(decoded.split(\"_\"))\n常见错误：split() 参数写错、join 前后的 \"-\" 写成其他字符。",
    "expectedOutput": "输出：yan-men-guan-jiu-xin",
    "referenceAnswer": "secret = \"  yAn Men GuAn jiU XIn  \"\ndecoded = secret.strip().lower().replace(\" \", \"_\")\nresult = \"-\".join(decoded.split(\"_\"))\nprint(result)",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day11"
    }
  },
  {
    "id": "ch03-py100-day012",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "两派武学交流",
    "npc": "阿朱",
    "difficulty": "进阶 集合运算",
    "story": "天龙寺与少林寺各有秘籍清单。通过集合的交集与差集，一举找出双方共有武学和天龙独有秘籍，避免武林内耗。",
    "objective": "用 & 求交集（共同武学），用 - 求差集（天龙独有），sorted 排序后打印两行结果。",
    "knowledge": [
      "集合 set",
      "交集 &",
      "差集 -",
      "并集 |",
      "sorted() 排序"
    ],
    "starterCode": "# 补全代码：集合交集与差集\ntianlong = {\"凌波微步\", \"六脉神剑\", \"降龙十八掌\", \"北冥神功\"}\nshaolin = {\"降龙十八掌\", \"易筋经\", \"少林棍法\", \"金刚掌\"}\n# 交集\nboth = # 写出这一行\n# 天龙独有（差集）\nonly_tl = # 写出这一行\nprint(f\"共同武学：{sorted(both)}\")\nprint(f\"天龙独有：{sorted(only_tl)}\")",
    "expectedKeywords": [
      "tianlong",
      "shaolin",
      "&",
      "-",
      "sorted",
      "print"
    ],
    "reward": {
      "exp": 42,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "集合运算精准！& 取交集，- 取差集，武林秘辛一览无余。",
    "hint": "集合运算：A & B 交集、A | B 并集、A - B 差集（在 A 不在 B）、A ^ B 对称差。\n先看\"期望输出\"：共同武学 [降龙十八掌]，天龙独有 [北冥神功, 六脉神剑, 凌波微步]\n写法建议：both = tianlong & shaolin；only_tl = tianlong - shaolin\n常见错误：集合元素无序，sorted() 输出时才有固定顺序。",
    "expectedOutput": "输出两行：\n共同武学：['降龙十八掌']\n天龙独有：['北冥神功', '六脉神剑', '凌波微步']",
    "referenceAnswer": "tianlong = {\"凌波微步\", \"六脉神剑\", \"降龙十八掌\", \"北冥神功\"}\nshaolin = {\"降龙十八掌\", \"易筋经\", \"少林棍法\", \"金刚掌\"}\nboth = tianlong & shaolin\nonly_tl = tianlong - shaolin\nprint(f\"共同武学：{sorted(both)}\")\nprint(f\"天龙独有：{sorted(only_tl)}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day12"
    }
  },
  {
    "id": "ch03-py100-day013",
    "chapterId": "ch03",
    "chapterTitle": "第三篇：杏子林疑云",
    "title": "江湖档案馆",
    "npc": "阿朱",
    "difficulty": "进阶 字典推导",
    "story": "少室山档案馆需要快速将英雄名单建成功力字典，再用 max + key 找出当世最强者。",
    "objective": "用字典推导式将 heroes 列表转为 {name: power} 字典，用 max + .get 找出最强者并打印。",
    "knowledge": [
      "字典推导式 {k:v for ...}",
      "dict.get()",
      "max(key=)",
      ".items()/.keys()/.values()"
    ],
    "starterCode": "# 补全代码：字典推导式 + max\nheroes = [(\"乔峰\", 95), (\"段誉\", 70), (\"虚竹\", 90), (\"慕容复\", 80)]\n# 用字典推导式把列表转成 {姓名: 功力} 字典\npower_dict = # 写出这一行\n# 用 max 和 power_dict.get 找出功力最高者\ntop = max(power_dict, key=power_dict.get)\nprint(f\"最强：{top}，功力：{power_dict[top]}\")",
    "expectedKeywords": [
      "{",
      "for",
      "in heroes",
      "max(power_dict",
      "print"
    ],
    "reward": {
      "exp": 43,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "档案馆建成！字典推导式和 max(key=) 是数据分析的常用组合。",
    "hint": "字典推导式：{k: v for k, v in 列表}。max(dict, key=dict.get) 返回值最大的键。\n先看\"期望输出\"：最强：乔峰，功力：95\n写法建议：power_dict = {name: power for name, power in heroes}\n常见错误：字典推导式忘记冒号 k:v、max 的 key 参数写成 lambda 也可以：key=lambda k: power_dict[k]。",
    "expectedOutput": "输出：最强：乔峰，功力：95",
    "referenceAnswer": "heroes = [(\"乔峰\", 95), (\"段誉\", 70), (\"虚竹\", 90), (\"慕容复\", 80)]\npower_dict = {name: power for name, power in heroes}\ntop = max(power_dict, key=power_dict.get)\nprint(f\"最强：{top}，功力：{power_dict[top]}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day13"
    }
  },
  {
    "id": "ch04-q01",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "铸造机关木人",
    "npc": "王语嫣",
    "difficulty": "进阶",
    "story": "玉洞深处有机关木人，只有能描述角色属性并提供状态报告的人才能启动它。你要实现 __init__ 和 status 两个部分。",
    "objective": "补全 Role.__init__ 的属性赋值，再实现 status() 方法返回格式化字符串，打印结果。",
    "knowledge": [
      "class __init__",
      "self 属性赋值",
      "实例方法",
      "f-string"
    ],
    "starterCode": "# 补全代码：实现 __init__ 属性赋值 + status 方法\nclass Role:\n    def __init__(self, name, hp, power):\n        # 写出三行属性赋值（self.x = x）\n\n    def status(self):\n        # 返回格式：\"{name} | HP:{hp} | 内力:{power}\"\n        return # 写出 f-string\n\nhero = Role('云栖', 100, 20)\nprint(hero.status())",
    "expectedKeywords": [
      "self.name",
      "self.hp",
      "self.power",
      "def status",
      "return",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": "逍遥造化功"
    },
    "successMessage": "木人眼中亮起青光，__init__ 和方法都实现到位。",
    "hint": "self.name = name 把参数保存为实例属性；方法里用 self.name 访问它。\n先看\"期望输出\"：云栖 | HP:100 | 内力:20\n写法建议：self.name=name; self.hp=hp; self.power=power；return f\"{self.name} | HP:{self.hp} | 内力:{self.power}\"\n常见错误：属性赋值少了 self.、方法里的 f-string 变量没加 self。",
    "expectedOutput": "输出：云栖 | HP:100 | 内力:20",
    "referenceAnswer": "class Role:\n    def __init__(self, name, hp, power):\n        self.name = name\n        self.hp = hp\n        self.power = power\n\n    def status(self):\n        return f'{self.name} | HP:{self.hp} | 内力:{self.power}'\n\nhero = Role('云栖', 100, 20)\nprint(hero.status())"
  },
  {
    "id": "ch04-q02",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "木人试招进阶",
    "npc": "虚竹",
    "difficulty": "进阶",
    "story": "虚竹要给机关木人加上受伤逻辑：每次出招减少 HP，若 HP 降至 0 以下则宣告倒下。",
    "objective": "实现 take_damage(dmg) 方法：self.hp -= dmg，若 hp<=0 返回\"倒下\"消息，否则返回剩余 HP 消息。",
    "knowledge": [
      "实例方法",
      "-= 状态修改",
      "if 条件返回",
      "对象状态管理"
    ],
    "starterCode": "# 补全代码：实现 take_damage 方法（状态修改 + 条件返回）\nclass Role:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, dmg):\n        # 减少 hp\n        # 若 hp <= 0，返回 f\"{self.name}倒下\"\n        # 否则返回 f\"{self.name}剩余HP:{self.hp}\"\n\nhero = Role('虚竹', 30)\nprint(hero.take_damage(20))\nprint(hero.take_damage(20))",
    "expectedKeywords": [
      "def take_damage",
      "self.hp",
      "-=",
      "if",
      "return",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "木人应声后退，受伤状态逻辑清晰，条件返回拿捏得当。",
    "hint": "self.hp -= dmg 先扣血；再判断 self.hp <= 0。方法有两个 return，一个倒下，一个剩余。\n先看\"期望输出\"：虚竹剩余HP:10 和 虚竹倒下\n写法建议：self.hp -= dmg; if self.hp <= 0: return f\"{self.name}倒下\"\nreturn f\"{self.name}剩余HP:{self.hp}\"\n常见错误：先判断再扣血顺序写反。",
    "expectedOutput": "输出两行：\n虚竹剩余HP:10\n虚竹倒下",
    "referenceAnswer": "class Role:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, dmg):\n        self.hp -= dmg\n        if self.hp <= 0:\n            return f'{self.name}倒下'\n        return f'{self.name}剩余HP:{self.hp}'\n\nhero = Role('虚竹', 30)\nprint(hero.take_damage(20))\nprint(hero.take_damage(20))"
  },
  {
    "id": "ch04-q03",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "王语嫣论武",
    "npc": "王语嫣",
    "difficulty": "进阶",
    "story": "王语嫣整理克制关系表，要你用列表推导式配合 .items() 找出所有克制\"火焰刀\"的武功。",
    "objective": "用列表推导式遍历 beats.items()，筛出 value == target 的 key，存入 counters 并打印。",
    "knowledge": [
      "dict.items()",
      "列表推导式 + 条件",
      "for k, v in ..."
    ],
    "starterCode": "# 补全代码：dict.items() + 列表推导式查找\nbeats = {\n    '六脉神剑': '火焰刀',\n    '斗转星移': '普通剑法',\n    '降龙十八掌': '铁砂掌',\n    '凌波微步': '轻功截击',\n}\ntarget = '火焰刀'\n# 用列表推导式找出所有克制 target 的武功\ncounters = # 写出这一行（列表推导式 + .items()）\nprint(f'克制{target}的武功：{counters}')",
    "expectedKeywords": [
      "[",
      "for",
      "in beats.items()",
      "if",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 2,
      "reputation": 2,
      "money": 0,
      "art": ""
    },
    "successMessage": "王语嫣轻轻一笑：.items() 遍历配合推导式，克制关系一查便知。",
    "hint": "beats.items() 返回 (key, value) 对；列表推导式 [k for k, v in beats.items() if v == target]。\n先看\"期望输出\"：克制火焰刀的武功：['六脉神剑']\n写法建议：counters = [skill for skill, victim in beats.items() if victim == target]\n常见错误：把 k 和 v 搞反、忘记 .items()。",
    "expectedOutput": "输出：克制火焰刀的武功：['六脉神剑']",
    "referenceAnswer": "beats = {\n    '六脉神剑': '火焰刀',\n    '斗转星移': '普通剑法',\n    '降龙十八掌': '铁砂掌',\n    '凌波微步': '轻功截击',\n}\ntarget = '火焰刀'\ncounters = [skill for skill, victim in beats.items() if victim == target]\nprint(f'克制{target}的武功：{counters}')"
  },
  {
    "id": "ch04-pcep-q19",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "函数封招",
    "npc": "虚竹",
    "difficulty": "考前 函数",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。虚竹想把重复计算封成函数：输入招式名和内力，返回完整伤害句。",
    "objective": "定义 make_attack(skill, power)，返回格式化字符串，并打印一次调用结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "def",
      "参数",
      "return"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ndef make_attack(skill, power):\n    # 写出 return 语句\n\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "def",
      "return",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 2,
      "money": 12,
      "art": "函数封招术"
    },
    "successMessage": "虚竹把招式封成函数，终于不用重复写同一段话。",
    "hint": "函数把可复用逻辑起名。参数是函数收到的数据，return 是函数交回的结果。\n先看“期望输出”，本关最终要做到：输出：北冥神功造成20点伤害\n关键知识：def make_attack(skill, power): 后面要缩进；return 后的值可被 print 打印。\n写法建议：return f'{skill}造成{power}点伤害'。\n常见错误：函数里 print 了但外面又 print 导致输出 None、忘记缩进。",
    "expectedOutput": "调用 make_attack('北冥神功', 20)\n输出：北冥神功造成20点伤害",
    "referenceAnswer": "def make_attack(skill, power):\n    return f'{skill}造成{power}点伤害'\n\nprint(make_attack('北冥神功', 20))"
  },
  {
    "id": "ch04-pcep-q20",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "默认参数补给",
    "npc": "王语嫣",
    "difficulty": "考前 函数",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。王语嫣准备补给函数，有时只给药名，有时还指定数量。默认参数正好派上用场。",
    "objective": "定义 supply(item, count=1)，分别用位置参数和关键字参数调用，并打印两个结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "默认参数",
      "关键字参数",
      "返回值"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ndef supply(item, count=1):\n    # 写出 return 语句\n\n# 按期望输出写 print(...)\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "def",
      "count=1",
      "return",
      "item=",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 1,
      "money": 12,
      "art": ""
    },
    "successMessage": "补给函数可多可少，默认参数记得牢。",
    "hint": "默认参数让调用者可以省略某些参数。关键字参数用名字指定值，顺序更清楚。\n先看“期望输出”，本关最终输出两行：解药x1、断肠草x2。\n关键知识：def supply(item, count=1) 中 count 默认是 1；supply(item='断肠草', count=2) 是关键字调用。\n写法建议：return item + 'x' + str(count)。\n常见错误：把默认参数写在非默认参数前面、数字和字符串拼接忘记 str()。",
    "expectedOutput": "输出两行：\n解药x1\n断肠草x2",
    "referenceAnswer": "def supply(item, count=1):\n    return item + 'x' + str(count)\n\nprint(supply('解药'))\nprint(supply(item='断肠草', count=2))"
  },
  {
    "id": "ch04-pcep-q21",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "作用域内外功",
    "npc": "苏星河",
    "difficulty": "考前 函数",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。苏星河问你：函数里面改变量，会不会影响外面的同名变量？这一题专练作用域。",
    "objective": "创建外部 level，函数 inner 内创建同名局部变量并返回它，打印函数结果和外部变量。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "局部变量",
      "全局变量",
      "作用域"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nlevel = '外功'\n\ndef inner():\n    level = '内功'\n    # 写出 return 语句\n\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "def",
      "return",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 1,
      "money": 12,
      "art": ""
    },
    "successMessage": "内外作用域分明，苏星河说这题很像考试追踪题。",
    "hint": "函数内赋值的 level 是局部变量，不会自动改掉函数外的 level。\n先看“期望输出”，本关最终要做到：输出：内功 外功\n关键知识：Python 查找变量有作用域规则。函数内部的局部变量只在函数执行期间存在。\n写法建议：level = '外功' 放在函数外；inner 里再写 level = '内功' 并 return。\n常见错误：以为函数内赋值会修改外部变量、忘记调用 inner()。",
    "expectedOutput": "给定外部 level = '外功'，inner() 内部 level = '内功'\n输出：内功 外功",
    "referenceAnswer": "level = '外功'\n\ndef inner():\n    level = '内功'\n    return level\n\nprint(inner(), level)"
  },
  {
    "id": "ch04-pcep-q22",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "全局计数令",
    "npc": "乔峰",
    "difficulty": "考前 函数",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。乔峰要统计击鼓次数，函数里要修改外部计数器，就必须明确使用 global。",
    "objective": "定义 hit()，使用 global 修改 count，两次调用后打印 count。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "global",
      "函数副作用",
      "计数器"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ncount = 0\n\ndef hit():\n    global count\n    # 写出这一行代码\n\nhit()\nhit()\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "global",
      "+=",
      "def",
      "print"
    ],
    "reward": {
      "exp": 75,
      "trust": 1,
      "reputation": 2,
      "money": 12,
      "art": ""
    },
    "successMessage": "击鼓计数准确，global 的规矩也立住了。",
    "hint": "如果函数内部要给外部变量重新赋值，需要使用 global 声明。否则 Python 会把它当成局部变量。\n先看“期望输出”，本关最终要做到：输出：2\n关键知识：global count 要写在函数内使用 count 之前。\n写法建议：def hit(): global count; count += 1。函数外调用两次 hit()。\n常见错误：忘记 global 导致 UnboundLocalError、只定义函数没有调用。",
    "expectedOutput": "调用 hit() 两次后\n输出：2",
    "referenceAnswer": "count = 0\n\ndef hit():\n    global count\n    count += 1\n\nhit()\nhit()\nprint(count)"
  },
  {
    "id": "ch04-pcep-q23",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "模块借星法",
    "npc": "无名扫地僧",
    "difficulty": "考前 函数",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。扫地僧允许你借用 math 模块，不必自己算平方根和向上取整。",
    "objective": "导入 math，计算 sqrt(16) 和 ceil(3.2)，并打印结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "import",
      "math 模块",
      "模块函数"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport math\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import math",
      "math.sqrt",
      "math.ceil",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": ""
    },
    "successMessage": "借星成算，扫地僧说会用模块也是基本功。",
    "hint": "模块是别人写好的工具箱。import math 后，可以用 math.sqrt、math.ceil 调用里面的函数。\n先看“期望输出”，本关最终要做到：输出：4.0 4\n关键知识：sqrt 返回浮点数，ceil 返回大于等于参数的最小整数。\n写法建议：import math 放在最上方，再定义 root 和 up。\n常见错误：只写 sqrt(16) 但没有 from math import sqrt、把 ceil 拼错。",
    "expectedOutput": "给定 root = math.sqrt(16)，up = math.ceil(3.2)\n输出：4.0 4",
    "referenceAnswer": "import math\nroot = math.sqrt(16)\nup = math.ceil(3.2)\nprint(root, up)"
  },
  {
    "id": "ch04-pcep-q24",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "异常护体诀",
    "npc": "王语嫣",
    "difficulty": "考前 异常",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。王语嫣设置一道除法陷阱：除以零会让程序倒下，必须用 try/except 接住。",
    "objective": "用 try/except/finally 处理 10 / 0，捕获 ZeroDivisionError，并打印收招。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "try/except",
      "ZeroDivisionError",
      "finally"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    # 按期望输出写 print(...)\nfinally:\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "try",
      "except",
      "ZeroDivisionError",
      "finally",
      "print"
    ],
    "reward": {
      "exp": 80,
      "trust": 1,
      "reputation": 2,
      "money": 15,
      "art": "异常护体诀"
    },
    "successMessage": "除零陷阱被稳稳接住，王语嫣说异常题终于不慌了。",
    "hint": "try 放可能出错的代码，except 捕获指定异常，finally 无论是否出错都会执行。\n先看“期望输出”，本关最终输出两行：不能除以零、收招。\n关键知识：10 / 0 会触发 ZeroDivisionError。捕获具体异常比裸 except 更清楚。\n写法建议：try: result = 10 / 0；except ZeroDivisionError: print('不能除以零')；finally: print('收招')。\n常见错误：except 拼写错误、finally 缩进不与 try 对齐。",
    "expectedOutput": "执行 10 / 0\n输出两行：\n不能除以零\n收招",
    "referenceAnswer": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('不能除以零')\nfinally:\n    print('收招')"
  },
  {
    "id": "ch04-pcep-q25",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "断言验药令",
    "npc": "虚竹",
    "difficulty": "考前 异常",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。虚竹验药时要求数量必须大于零。你要用 assert 写出最短的防线。",
    "objective": "设置 amount = 3，用 assert 检查 amount > 0，检查通过后打印药材数量。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "assert",
      "AssertionError",
      "条件检查"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\namount = 3\nassert amount > 0, '药材数量必须大于0'\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "assert",
      ">",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 1,
      "reputation": 1,
      "money": 10,
      "art": ""
    },
    "successMessage": "药材数量通过断言，虚竹知道账册暂时可信。",
    "hint": "assert 用来检查程序内部假设。如果条件为 False，会抛出 AssertionError。\n先看“期望输出”，本关 amount 是 3，所以断言通过，输出：药材数量：3。\n关键知识：assert amount > 0, '提示文字' 中逗号后面是失败时的错误信息。\n写法建议：先 assert，再 print。\n常见错误：把 assert 当 if 使用后写冒号、amount 为 0 时还期待继续执行。",
    "expectedOutput": "给定 amount = 3\n输出：药材数量：3",
    "referenceAnswer": "amount = 3\nassert amount > 0, '药材数量必须大于0'\nprint('药材数量：' + str(amount))"
  },
  {
    "id": "ch04-pcep-q26",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "终卷合参",
    "npc": "王语嫣",
    "difficulty": "考前 综合",
    "story": "琅嬛玉洞藏书无数，王语嫣让你把函数、模块和抽象能力练成内功。王语嫣把考纲藏进玉洞机关，给你最后一题：用函数处理列表，用异常保护转换，再输出合格分数。",
    "objective": "定义 safe_int(text)，用 try/except 把文本转整数；遍历 scores，收集能转换且大于等于 60 的分数，并打印结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "函数",
      "异常",
      "列表遍历",
      "条件筛选"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nscores = ['80', 'bad', '59', '100']\npassed = []\n\ndef safe_int(text):\n    try:\n        # 写出 return 语句\n    except ValueError:\n        # 写出 return 语句\n\nfor item in scores:\n    score = safe_int(item)\n    if score is not None and score >= 60:\n        # 写出这一行代码\n\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "def",
      "try",
      "except",
      "ValueError",
      "for",
      "append",
      "print"
    ],
    "reward": {
      "exp": 120,
      "trust": 2,
      "reputation": 5,
      "money": 30,
      "art": "PCEP 入门通关"
    },
    "successMessage": "PCEP 终卷合参完成，王语嫣微笑：少侠去考场，心里已有底。",
    "hint": "这是 入门考试 综合题：函数负责转换，try/except 处理坏数据，for 遍历列表，if 做筛选。\n先看“期望输出”，本关最终要做到：输出：[80, 100]\n关键知识：int('bad') 会抛出 ValueError；return None 可以表示转换失败。判断时要先确认 score is not None，再比较 score >= 60。\n写法建议：safe_int 里 try return int(text)，except ValueError return None；循环里 value = safe_int(item)。\n常见错误：把 None 拿去和 60 比较、except 没写 ValueError、忘记 append 转换后的整数。",
    "expectedOutput": "给定 scores = ['80', 'bad', '59', '100']\n输出：[80, 100]",
    "referenceAnswer": "scores = ['80', 'bad', '59', '100']\npassed = []\n\ndef safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None\n\nfor item in scores:\n    score = safe_int(item)\n    if score is not None and score >= 60:\n        passed.append(score)\n\nprint(passed)"
  },
  {
    "id": "ch04-py100-day014",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "封装降龙心法",
    "npc": "王语嫣",
    "difficulty": "进阶 默认参数",
    "story": "乔峰把降龙十八掌的伤害公式封装成函数，支持传入防御值，若不传则使用默认值 10，让调用者无需每次指定。",
    "objective": "定义 calc_damage(atk, df=10)，返回 max(0, atk-df)，调用两次打印验证默认和自定义参数。",
    "knowledge": [
      "def 定义函数",
      "默认参数",
      "return",
      "max() 内置函数"
    ],
    "starterCode": "# 补全代码：函数定义 + 默认参数\ndef calc_damage(atk, df=10):\n    # 写出 return 语句（使用 max 防止负伤害）\n\nprint(calc_damage(80))        # 期望：70\nprint(calc_damage(80, 30))    # 期望：50",
    "expectedKeywords": [
      "def calc_damage",
      "df=10",
      "return",
      "max(",
      "print"
    ],
    "reward": {
      "exp": 44,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "函数封装完成！默认参数让调用者只在需要时才传值，简洁又灵活。",
    "hint": "默认参数写在函数签名里：def f(a, b=默认值)。max(0, value) 防止结果为负。\n先看\"期望输出\"：第一行 70，第二行 50\n写法建议：return max(0, atk - df)\n常见错误：默认参数必须排在非默认参数之后；返回值不要用 print，外面再 print。",
    "expectedOutput": "输出两行：\n70\n50",
    "referenceAnswer": "def calc_damage(atk, df=10):\n    return max(0, atk - df)\n\nprint(calc_damage(80))\nprint(calc_damage(80, 30))",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day14"
    }
  },
  {
    "id": "ch04-py100-day015",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "凌波微步步数推演",
    "npc": "王语嫣",
    "difficulty": "进阶 递归",
    "story": "凌波微步的步法遵循斐波那契数列规律——每一步都是前两步之和。段誉要你用递归函数推算出前 8 个步点。",
    "objective": "定义递归函数 fib(n)，用列表推导式生成前 8 项（fib(0)~fib(7)），打印结果。",
    "knowledge": [
      "递归函数",
      "终止条件",
      "列表推导式配合递归"
    ],
    "starterCode": "# 补全代码：递归函数 + 列表推导式\ndef fib(n):\n    if n <= 1:\n        return n\n    # 写出递归的 return 语句\n\nresult = [fib(i) for i in range(8)]\nprint(result)",
    "expectedKeywords": [
      "def fib",
      "return fib(",
      "for i in range",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "步数推演完毕！递归的关键在于终止条件和问题拆分。",
    "hint": "递归函数必须有终止条件（base case），否则会无限递归。斐波那契：fib(n) = fib(n-1) + fib(n-2)。\n先看\"期望输出\"：[0, 1, 1, 2, 3, 5, 8, 13]\n写法建议：return fib(n-1) + fib(n-2)\n常见错误：终止条件写成 n == 0 漏掉 n == 1 会导致无限递归。",
    "expectedOutput": "输出：[0, 1, 1, 2, 3, 5, 8, 13]",
    "referenceAnswer": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nresult = [fib(i) for i in range(8)]\nprint(result)",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day15"
    }
  },
  {
    "id": "ch04-py100-day016",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "万能伤害召唤阵",
    "npc": "王语嫣",
    "difficulty": "进阶 *args",
    "story": "虚竹的召唤阵可接受任意数量的招式伤害值，通过暴击倍率关键字参数一并计算。*args 和关键字参数是此阵的核心。",
    "objective": "定义 total_damage(*hits, critical=1.0)，返回 sum(hits)*critical，调用两次验证可变参数和关键字参数。",
    "knowledge": [
      "*args 可变位置参数",
      "关键字参数 **kwargs",
      "sum()",
      "函数签名"
    ],
    "starterCode": "# 补全代码：*args + 关键字参数\ndef total_damage(*hits, critical=1.0):\n    # 写出 return 语句\n\nprint(total_damage(30, 40, 50))            # 期望：120.0\nprint(total_damage(30, 40, critical=2.0))  # 期望：140.0",
    "expectedKeywords": [
      "def total_damage",
      "*hits",
      "critical=",
      "return sum(",
      "print"
    ],
    "reward": {
      "exp": 46,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "*args 让函数接受任意数量参数，关键字参数提供灵活配置！",
    "hint": "*hits 会把所有位置参数收集为元组；critical= 后面的是关键字参数，调用时可省略（用默认值）或指定。sum(hits) 对元组求和。\n先看\"期望输出\"：120.0 和 140.0\n写法建议：return sum(hits) * critical\n常见错误：*hits 必须在关键字参数之前；调用时不能 total_damage(critical=2.0, 30, 40)（位置参数必须在关键字参数前）。",
    "expectedOutput": "输出两行：\n120.0\n140.0",
    "referenceAnswer": "def total_damage(*hits, critical=1.0):\n    return sum(hits) * critical\n\nprint(total_damage(30, 40, 50))\nprint(total_damage(30, 40, critical=2.0))",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day16"
    }
  },
  {
    "id": "ch04-py100-day017",
    "chapterId": "ch04",
    "chapterTitle": "第四篇：琅嬛玉洞",
    "title": "天下英雄大筛选",
    "npc": "王语嫣",
    "difficulty": "进阶 lambda/map/filter",
    "story": "少室山大会前，扫地僧用 lambda 和 filter 筛出功力不低于 85 的高手，再用 map 提取名字，sorted 排序后张榜公示。",
    "objective": "用 filter+lambda 筛出功力>=85 的英雄，map+lambda 提取姓名，sorted 排序打印。",
    "knowledge": [
      "lambda 匿名函数",
      "filter() 过滤",
      "map() 映射",
      "sorted() 排序"
    ],
    "starterCode": "# 补全代码：lambda + filter + map + sorted\nheroes = [(\"乔峰\", 95), (\"段誉\", 70), (\"虚竹\", 90), (\"慕容复\", 80), (\"鸠摩智\", 85)]\n# filter + lambda 筛出功力 >= 85\nstrong = list(filter(# 写出 lambda 表达式, heroes))\n# map + lambda 提取姓名\nnames = list(map(# 写出 lambda 表达式, strong))\nprint(sorted(names))",
    "expectedKeywords": [
      "filter",
      "lambda",
      "map",
      "sorted",
      "print"
    ],
    "reward": {
      "exp": 47,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "英雄榜张贴！lambda、filter、map 是函数式编程的三大利器。",
    "hint": "filter(func, iterable) 保留 func 返回 True 的元素；map(func, iterable) 对每个元素应用 func；lambda x: x[1] >= 85 是匿名函数。\n先看\"期望输出\"：['乔峰', '虚竹', '鸠摩智']\n写法建议：filter(lambda h: h[1] >= 85, heroes)；map(lambda h: h[0], strong)\n常见错误：filter/map 返回的是惰性迭代器，需要用 list() 转换。",
    "expectedOutput": "输出：['乔峰', '虚竹', '鸠摩智']",
    "referenceAnswer": "heroes = [(\"乔峰\", 95), (\"段誉\", 70), (\"虚竹\", 90), (\"慕容复\", 80), (\"鸠摩智\", 85)]\nstrong = list(filter(lambda h: h[1] >= 85, heroes))\nnames = list(map(lambda h: h[0], strong))\nprint(sorted(names))",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day17"
    }
  },
  {
    "id": "ch05-q01",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "江湖百晓生名录",
    "npc": "阿朱",
    "difficulty": "高阶",
    "story": "百晓生收录了三名可疑人物的可信度，要你用字典推导式过滤出可信度不低于 6 的人，再按可信度降序排列并逐行报告。",
    "objective": "用字典推导式筛出 trust>=6 的人物，sorted 降序排列，for 循环打印每人门派和可信度。",
    "knowledge": [
      "嵌套字典",
      "字典推导式 + 条件",
      "sorted(key=lambda)",
      "for 遍历打印"
    ],
    "starterCode": "# 补全代码：嵌套字典过滤 + 排序\npeople = {\n    '乔峰': {'sect': '丐帮', 'trust': 9},\n    '段延庆': {'sect': '西夏一品堂', 'trust': 6},\n    '慕容复': {'sect': '姑苏慕容', 'trust': 4}\n}\n# 用字典推导式筛出 trust >= 6 的人\ntrusted = # 写出字典推导式\n# 按 trust 降序排列名字列表\nranked = sorted(trusted, key=lambda n: trusted[n]['trust'], reverse=True)\nfor name in ranked:\n    print(f\"{name}（{trusted[name]['sect']}）可信度：{trusted[name]['trust']}\")",
    "expectedKeywords": [
      "{",
      "for",
      "in people.items()",
      "trust",
      "sorted",
      "print"
    ],
    "reward": {
      "exp": 40,
      "trust": 2,
      "reputation": 0,
      "money": 10,
      "art": ""
    },
    "successMessage": "名录筛查完毕，字典推导式和嵌套字典遍历都驾轻就熟。",
    "hint": "嵌套字典遍历：for name, info in people.items() 取每人信息；info[\"trust\"] >= 6 过滤。\n先看\"期望输出\"：乔峰（丐帮）可信度：9 和 段延庆（西夏一品堂）可信度：6\n写法建议：trusted = {n: i for n, i in people.items() if i[\"trust\"] >= 6}\n常见错误：lambda 里访问嵌套字典漏掉 [\"trust\"]。",
    "expectedOutput": "输出两行：\n乔峰（丐帮）可信度：9\n段延庆（西夏一品堂）可信度：6",
    "referenceAnswer": "people = {\n    '乔峰': {'sect': '丐帮', 'trust': 9},\n    '段延庆': {'sect': '西夏一品堂', 'trust': 6},\n    '慕容复': {'sect': '姑苏慕容', 'trust': 4}\n}\ntrusted = {n: i for n, i in people.items() if i['trust'] >= 6}\nranked = sorted(trusted, key=lambda n: trusted[n]['trust'], reverse=True)\nfor name in ranked:\n    print(f\"{name}（{trusted[name]['sect']}）可信度：{trusted[name]['trust']}\")"
  },
  {
    "id": "ch05-q02",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "阿朱易容工具箱",
    "npc": "阿朱",
    "difficulty": "高阶",
    "story": "阿朱需要当日易容代号：结合今日日期和随机编号，再用三元表达式根据编号奇偶决定身份是\"刺客\"还是\"商人\"。",
    "objective": "用 date.today() 获取日期，randint(100,999) 生成编号，三元表达式判断奇偶身份，格式化打印。",
    "knowledge": [
      "datetime.date.today()",
      "random.randint()",
      "三元表达式",
      "模块组合应用"
    ],
    "starterCode": "# 补全代码：datetime + random + 三元表达式\nimport random\nfrom datetime import date\ntoday = date.today()\ncode = random.randint(100, 999)\n# 三元表达式：code 为奇数时 \"刺客\"，偶数时 \"商人\"\nidentity = # 写出这一行\nprint(f'今日行动：{today}，编号：{code}，身份：{identity}')",
    "expectedKeywords": [
      "date.today",
      "randint",
      "if",
      "else",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": "借势御器术"
    },
    "successMessage": "易容工具箱就绪！datetime、random 与三元表达式联动。",
    "hint": "三元表达式判断奇偶：identity = \"刺客\" if code % 2 != 0 else \"商人\"。\n先看\"期望输出\"：今日行动：<日期>，编号：<三位数>，身份：<刺客或商人>\n写法建议：identity = \"刺客\" if code % 2 != 0 else \"商人\"\n常见错误：date.today() 忘记括号、三元条件奇偶判断写反。",
    "expectedOutput": "输出示例：今日行动：2026-05-08，编号：365，身份：刺客（编号随机，身份由奇偶决定）",
    "referenceAnswer": "import random\nfrom datetime import date\ntoday = date.today()\ncode = random.randint(100, 999)\nidentity = '刺客' if code % 2 != 0 else '商人'\nprint(f'今日行动：{today}，编号：{code}，身份：{identity}')"
  },
  {
    "id": "ch05-q03",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "飞鸽传书自动化",
    "npc": "乔峰",
    "difficulty": "高阶",
    "story": "同一条情报要分发给多位侠客。你要用列表推导式一次性为所有收件人生成飞鸽信，并逐条打印。",
    "objective": "用列表推导式为 recipients 中每人生成格式化飞鸽信（从 template 读取字段），for 循环打印。",
    "knowledge": [
      "列表推导式 + f-string",
      "字典取值",
      "for 循环打印"
    ],
    "starterCode": "# 补全代码：列表推导式批量生成飞鸽信\nrecipients = ['乔峰', '段誉', '虚竹']\ntemplate = {'place': '雁门关', 'risk': '高', 'reason': '段延庆线索复现'}\n# 用列表推导式为每位收件人生成一封信\nmails = # 写出列表推导式（f-string 格式：致{r}：{place}风险{risk}，原因：{reason}）\nfor m in mails:\n    print(m)",
    "expectedKeywords": [
      "[",
      "for",
      "in recipients",
      "template[",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 3,
      "reputation": 1,
      "money": 0,
      "art": "雁门传书术"
    },
    "successMessage": "飞鸽同时分发，列表推导式批量生产格式化消息！",
    "hint": "列表推导式里访问字典：template['place']。f-string 嵌套字典取值要加引号。\n先看期望输出：三行 致X：雁门关风险高，原因：段延庆线索复现\n写法建议：使用单引号 f-string：[f'致{r}：{template[\"place\"]}风险{template[\"risk\"]}...' for r in recipients]\n常见错误：f-string 里的字典键用了与外层相同类型的引号导致闭合错误。",
    "expectedOutput": "输出三行：\n致乔峰：雁门关风险高，原因：段延庆线索复现\n致段誉：雁门关风险高，原因：段延庆线索复现\n致虚竹：雁门关风险高，原因：段延庆线索复现",
    "referenceAnswer": "recipients = ['乔峰', '段誉', '虚竹']\ntemplate = {'place': '雁门关', 'risk': '高', 'reason': '段延庆线索复现'}\nmails = [f\"致{r}：{template['place']}风险{template['risk']}，原因：{template['reason']}\" for r in recipients]\nfor m in mails:\n    print(m)"
  },
  {
    "id": "ch05-py100-day018",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "定义武林门派类",
    "npc": "阿朱",
    "difficulty": "进阶 class 基础",
    "story": "燕子坞的归雁令要求将每个门派的信息封装成对象。阿朱要你定义 Sect 类，保存门派名、创派人和绝学，并实现 introduce 方法。",
    "objective": "定义 Sect 类，__init__ 保存 name/founder/skill，introduce() 返回格式化介绍，创建实例并打印。",
    "knowledge": [
      "class 定义",
      "__init__ 初始化",
      "self 实例属性",
      "方法定义"
    ],
    "starterCode": "# 补全代码：定义类、实现方法\nclass Sect:\n    def __init__(self, name, founder, skill):\n        # 写出三行属性赋值\n\n    def introduce(self):\n        # 写出 return 语句（f-string 格式化）\n\ns = Sect(\"逍遥派\", \"逍遥子\", \"北冥神功\")\nprint(s.introduce())",
    "expectedKeywords": [
      "class Sect",
      "__init__",
      "self.name",
      "def introduce",
      "return",
      "print"
    ],
    "reward": {
      "exp": 48,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "门派档案封装完成！class 是组织数据和行为的核心工具。",
    "hint": "self 代表当前对象，属性写成 self.name = name；方法第一个参数必须是 self。\n先看\"期望输出\"：逍遥派由逍遥子所创，绝学：北冥神功\n写法建议：return f\"{self.name}由{self.founder}所创，绝学：{self.skill}\"\n常见错误：忘记 self 参数、属性赋值写成 name = name（没有 self）。",
    "expectedOutput": "输出：逍遥派由逍遥子所创，绝学：北冥神功",
    "referenceAnswer": "class Sect:\n    def __init__(self, name, founder, skill):\n        self.name = name\n        self.founder = founder\n        self.skill = skill\n\n    def introduce(self):\n        return f\"{self.name}由{self.founder}所创，绝学：{self.skill}\"\n\ns = Sect(\"逍遥派\", \"逍遥子\", \"北冥神功\")\nprint(s.introduce())",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day18"
    }
  },
  {
    "id": "ch05-py100-day019",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "子类继承武学",
    "npc": "阿朱",
    "difficulty": "进阶 继承",
    "story": "普通武者（Warrior）只有基础功力，宗师（Master）继承武者并额外掌握独门绝学，攻击力翻倍。阿朱要你用继承实现这段江湖规则。",
    "objective": "定义 Warrior 基类和 Master 子类，Master 用 super() 调用父类 __init__，attack() 返回 power*2，打印实例信息。",
    "knowledge": [
      "继承 class 子类(父类)",
      "super().__init__()",
      "方法重写（override）",
      "多态"
    ],
    "starterCode": "# 补全代码：继承与方法重写\nclass Warrior:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n\n    def attack(self):\n        return self.power\n\nclass Master(Warrior):\n    def __init__(self, name, power, secret):\n        super().__init__(name, power)\n        self.secret = secret\n\n    def attack(self):\n        # 写出 return 语句：功力翻倍\n\nhero = Master(\"乔峰\", 50, \"降龙十八掌\")\nprint(f\"{hero.name}发动{hero.secret}，伤害：{hero.attack()}\")",
    "expectedKeywords": [
      "class Master",
      "super().__init__",
      "def attack",
      "return self.power",
      "print"
    ],
    "reward": {
      "exp": 49,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "子类继承成功！super() 复用父类代码，override 实现多态行为。",
    "hint": "super().__init__() 调用父类的初始化方法，避免重复代码。子类重写父类方法时，相同方法名会覆盖。\n先看\"期望输出\"：乔峰发动降龙十八掌，伤害：100\n写法建议：return self.power * 2\n常见错误：忘记调用 super().__init__() 导致 name/power 属性未设置。",
    "expectedOutput": "输出：乔峰发动降龙十八掌，伤害：100",
    "referenceAnswer": "class Warrior:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n\n    def attack(self):\n        return self.power\n\nclass Master(Warrior):\n    def __init__(self, name, power, secret):\n        super().__init__(name, power)\n        self.secret = secret\n\n    def attack(self):\n        return self.power * 2\n\nhero = Master(\"乔峰\", 50, \"降龙十八掌\")\nprint(f\"{hero.name}发动{hero.secret}，伤害：{hero.attack()}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day19"
    }
  },
  {
    "id": "ch05-py100-day020",
    "chapterId": "ch05",
    "chapterTitle": "第五篇：千里传书",
    "title": "@property 与类方法",
    "npc": "阿朱",
    "difficulty": "进阶 装饰器",
    "story": "燕子坞用 @property 封装血量读取，用 @classmethod 统计创建的英雄总数。阿朱要你实现这两个装饰器，体验 Python 的面向对象进阶特性。",
    "objective": "定义 Hero 类，用 @property 封装 hp 读取，@classmethod 实现 total() 返回创建数量，打印验证。",
    "knowledge": [
      "@property 属性装饰器",
      "@classmethod 类方法",
      "cls 参数",
      "类变量 vs 实例变量"
    ],
    "starterCode": "# 补全代码：@property + @classmethod\nclass Hero:\n    _count = 0\n\n    def __init__(self, name, hp):\n        self.name = name\n        self._hp = hp\n        Hero._count += 1\n\n    @property\n    def hp(self):\n        # 写出 return 语句（返回 _hp）\n\n    @classmethod\n    def total(cls):\n        # 写出 return 语句（返回 _count）\n\na = Hero(\"乔峰\", 100)\nb = Hero(\"段誉\", 80)\nprint(f\"总英雄数：{Hero.total()}，{a.name}血量：{a.hp}\")",
    "expectedKeywords": [
      "@property",
      "@classmethod",
      "cls",
      "return self._hp",
      "return cls._count",
      "print"
    ],
    "reward": {
      "exp": 50,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "@property 让属性访问更安全，@classmethod 共享类级别状态，OOP 进阶功法到手！",
    "hint": "@property 把方法变成属性访问（无需加括号）；@classmethod 第一个参数是 cls（类本身）而非 self。\n先看\"期望输出\"：总英雄数：2，乔峰血量：100\n写法建议：@property def hp: return self._hp；@classmethod def total(cls): return cls._count\n常见错误：@property 方法不能有除 self 之外的参数。",
    "expectedOutput": "输出：总英雄数：2，乔峰血量：100",
    "referenceAnswer": "class Hero:\n    _count = 0\n\n    def __init__(self, name, hp):\n        self.name = name\n        self._hp = hp\n        Hero._count += 1\n\n    @property\n    def hp(self):\n        return self._hp\n\n    @classmethod\n    def total(cls):\n        return cls._count\n\na = Hero(\"乔峰\", 100)\nb = Hero(\"段誉\", 80)\nprint(f\"总英雄数：{Hero.total()}，{a.name}血量：{a.hp}\")",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day20"
    }
  },
  {
    "id": "ch06-q01",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "珍珑棋局需求书",
    "npc": "苏星河",
    "difficulty": "高阶",
    "story": "苏星河不急着让你写代码，先要你把珍珑棋局的需求和优先级对应起来，用 enumerate + zip 输出编号清单。",
    "objective": "用 enumerate(zip(features, priorities), start=1) 遍历，打印格式\"[N] 优先级 功能名\"。",
    "knowledge": [
      "enumerate(start=)",
      "zip() 配对",
      "for 循环",
      "f-string 格式化"
    ],
    "starterCode": "# 补全代码：enumerate + zip 输出编号需求清单\nfeatures = ['登记任务', '查询任务', '结算奖励', '异常处理']\npriorities = ['高', '高', '中', '低']\n# 用 enumerate(zip(features, priorities), start=1) 遍历，格式：[N] 优先级 功能名",
    "expectedKeywords": [
      "enumerate",
      "zip",
      "for",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "需求书整洁，enumerate+zip 让编号和配对同时完成。",
    "hint": "enumerate(iterable, start=1) 从 1 开始编号；zip 把两个列表配对。\n先看\"期望输出\"：[1] 高 登记任务 … [4] 低 异常处理\n写法建议：for i, (feat, pri) in enumerate(zip(features, priorities), start=1): print(f\"[{i}] {pri} {feat}\")\n常见错误：start 不设置则从 0 开始、zip 里的两个列表顺序要对应。",
    "expectedOutput": "输出四行：\n[1] 高 登记任务\n[2] 高 查询任务\n[3] 中 结算奖励\n[4] 低 异常处理",
    "referenceAnswer": "features = ['登记任务', '查询任务', '结算奖励', '异常处理']\npriorities = ['高', '高', '中', '低']\nfor i, (feat, pri) in enumerate(zip(features, priorities), start=1):\n    print(f'[{i}] {pri} {feat}')"
  },
  {
    "id": "ch06-q02",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥派任务牌",
    "npc": "虚竹",
    "difficulty": "高阶",
    "story": "虚竹要同时登记多项门派杂务，一条一条太麻烦。你要用 *args 写出能一次接收任意数量任务的登记函数。",
    "objective": "定义 add_tasks(*names)，用 for 循环将 names 中每个任务 append 进全局 tasks，返回当前总数。",
    "knowledge": [
      "*args 可变参数",
      "for in *args",
      "list.append()",
      "全局列表"
    ],
    "starterCode": "# 补全代码：*args 批量添加任务\ntasks = []\n\ndef add_tasks(*names):\n    # 用 for 循环将 names 中每项 append 进 tasks\n    # 返回当前 tasks 总数量\n\nadded = add_tasks('清点棋子', '修缮棋盘', '整理棋谱')\nprint(f'新增{added}项任务，当前共{len(tasks)}项')\nprint(tasks)",
    "expectedKeywords": [
      "*names",
      "for",
      "append",
      "return",
      "print"
    ],
    "reward": {
      "exp": 90,
      "trust": 2,
      "reputation": 3,
      "money": 10,
      "art": "小无相项目功"
    },
    "successMessage": "*args 让函数接收任意数量参数，任务牌开始运转。",
    "hint": "*names 把所有位置参数收集为元组，用 for name in names 遍历。return len(tasks) 返回总数。\n先看\"期望输出\"：新增3项任务，当前共3项 和 包含三项的列表\n写法建议：for name in names: tasks.append(name); return len(tasks)\n常见错误：*names 里的元素是参数传入的，不是 names 列表本身。",
    "expectedOutput": "输出：\n新增3项任务，当前共3项\n['清点棋子', '修缮棋盘', '整理棋谱']",
    "referenceAnswer": "tasks = []\n\ndef add_tasks(*names):\n    for name in names:\n        tasks.append(name)\n    return len(tasks)\n\nadded = add_tasks('清点棋子', '修缮棋盘', '整理棋谱')\nprint(f'新增{added}项任务，当前共{len(tasks)}项')\nprint(tasks)"
  },
  {
    "id": "ch06-q03",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "珍珑棋局结算",
    "npc": "苏星河",
    "difficulty": "高阶",
    "story": "棋局结算规则要根据任务难度给出经验值，用字典映射代替 if/else 链，苏星河说这才是真正的工程思维。",
    "objective": "用字典 exp_table 建立映射，定义 calc_exp(level) 用 .get() 查询（找不到返回默认值 10），打印结果列表。",
    "knowledge": [
      "字典映射/dispatch",
      "dict.get() 默认值",
      "def 函数",
      "列表推导式"
    ],
    "starterCode": "# 补全代码：字典映射代替 if/else\nexp_table = {'高': 90, '中': 50, '低': 20}\n\ndef calc_exp(level):\n    # 用 exp_table.get() 查询，未知难度返回默认值 10\n    return # 写出这一行\n\nresults = [calc_exp(lv) for lv in ['高', '中', '特殊']]\nprint(results)",
    "expectedKeywords": [
      "exp_table",
      ".get(",
      "def calc_exp",
      "return",
      "print"
    ],
    "reward": {
      "exp": 80,
      "trust": 1,
      "reputation": 2,
      "money": 15,
      "art": ""
    },
    "successMessage": "字典映射代替 if/else，棋局结算优雅落定。",
    "hint": "dict.get(key, default) 找不到 key 时返回 default，完美替代 if/else 分支。\n先看\"期望输出\"：[90, 50, 10]\n写法建议：return exp_table.get(level, 10)\n常见错误：get 的第二参数忘记写（返回 None）、默认值写成字符串而非数字。",
    "expectedOutput": "输出：[90, 50, 10]",
    "referenceAnswer": "exp_table = {'高': 90, '中': 50, '低': 20}\n\ndef calc_exp(level):\n    return exp_table.get(level, 10)\n\nresults = [calc_exp(lv) for lv in ['高', '中', '特殊']]\nprint(results)"
  },
  {
    "id": "ch06-py100-day021",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：文件读写和异常处理",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《文件读写和异常处理》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《文件读写和异常处理》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "打开和关闭文件",
      "读写文本文件",
      "异常处理机制",
      "上下文管理器语法",
      "读写二进制文件"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day21\"\ntitle = \"文件读写和异常处理\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 51,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《文件读写和异常处理》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day21 文件读写和异常处理：5项，首项：打开和关闭文件\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《文件读写和异常处理》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"打开和关闭文件\",\"读写文本文件\",\"异常处理机制\",\"上下文管理器语法\",\"读写二进制文件\"]\n输出：Day21 文件读写和异常处理：5项，首项：打开和关闭文件",
    "referenceAnswer": "day = \"Day21\"\ntitle = \"文件读写和异常处理\"\ntopics = [\n  \"打开和关闭文件\",\n  \"读写文本文件\",\n  \"异常处理机制\",\n  \"上下文管理器语法\",\n  \"读写二进制文件\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day21"
    }
  },
  {
    "id": "ch06-py100-day022",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：对象的序列化和反序列化",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《对象的序列化和反序列化》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《对象的序列化和反序列化》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "JSON概述",
      "读写JSON格式的数据",
      "包管理工具pip",
      "使用网络API获取数据"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day22\"\ntitle = \"对象的序列化和反序列化\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 52,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《对象的序列化和反序列化》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day22 对象的序列化和反序列化：4项，首项：JSON概述\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《对象的序列化和反序列化》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"JSON概述\",\"读写JSON格式的数据\",\"包管理工具pip\",\"使用网络API获取数据\"]\n输出：Day22 对象的序列化和反序列化：4项，首项：JSON概述",
    "referenceAnswer": "day = \"Day22\"\ntitle = \"对象的序列化和反序列化\"\ntopics = [\n  \"JSON概述\",\n  \"读写JSON格式的数据\",\n  \"包管理工具pip\",\n  \"使用网络API获取数据\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day22"
    }
  },
  {
    "id": "ch06-py100-day023",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python读写CSV文件",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python读写CSV文件》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python读写CSV文件》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "CSV文件介绍",
      "将数据写入CSV文件",
      "从CSV文件读取数据"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day23\"\ntitle = \"Python读写CSV文件\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 53,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python读写CSV文件》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day23 Python读写CSV文件：3项，首项：CSV文件介绍\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python读写CSV文件》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"CSV文件介绍\",\"将数据写入CSV文件\",\"从CSV文件读取数据\"]\n输出：Day23 Python读写CSV文件：3项，首项：CSV文件介绍",
    "referenceAnswer": "day = \"Day23\"\ntitle = \"Python读写CSV文件\"\ntopics = [\n  \"CSV文件介绍\",\n  \"将数据写入CSV文件\",\n  \"从CSV文件读取数据\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day23"
    }
  },
  {
    "id": "ch06-py100-day024",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python读写Excel文件-1",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python读写Excel文件-1》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python读写Excel文件-1》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Excel简介",
      "读Excel文件",
      "写Excel文件",
      "调整样式",
      "公式计算"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day24\"\ntitle = \"Python读写Excel文件-1\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 54,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python读写Excel文件-1》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day24 Python读写Excel文件-1：5项，首项：Excel简介\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python读写Excel文件-1》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Excel简介\",\"读Excel文件\",\"写Excel文件\",\"调整样式\",\"公式计算\"]\n输出：Day24 Python读写Excel文件-1：5项，首项：Excel简介",
    "referenceAnswer": "day = \"Day24\"\ntitle = \"Python读写Excel文件-1\"\ntopics = [\n  \"Excel简介\",\n  \"读Excel文件\",\n  \"写Excel文件\",\n  \"调整样式\",\n  \"公式计算\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day24"
    }
  },
  {
    "id": "ch06-py100-day025",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python读写Excel文件-2",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python读写Excel文件-2》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python读写Excel文件-2》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Excel简介",
      "读Excel文件",
      "写Excel文件",
      "调整样式",
      "生成统计图表"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day25\"\ntitle = \"Python读写Excel文件-2\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python读写Excel文件-2》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day25 Python读写Excel文件-2：5项，首项：Excel简介\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python读写Excel文件-2》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Excel简介\",\"读Excel文件\",\"写Excel文件\",\"调整样式\",\"生成统计图表\"]\n输出：Day25 Python读写Excel文件-2：5项，首项：Excel简介",
    "referenceAnswer": "day = \"Day25\"\ntitle = \"Python读写Excel文件-2\"\ntopics = [\n  \"Excel简介\",\n  \"读Excel文件\",\n  \"写Excel文件\",\n  \"调整样式\",\n  \"生成统计图表\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day25"
    }
  },
  {
    "id": "ch06-py100-day026",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python操作Word和PowerPoint文件",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python操作Word和PowerPoint文件》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python操作Word和PowerPoint文件》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "操作Word文档",
      "生成PowerPoint"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day26\"\ntitle = \"Python操作Word和PowerPoint文件\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 56,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python操作Word和PowerPoint文件》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day26 Python操作Word和PowerPoint文件：2项，首项：操作Word文档\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python操作Word和PowerPoint文件》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"操作Word文档\",\"生成PowerPoint\"]\n输出：Day26 Python操作Word和PowerPoint文件：2项，首项：操作Word文档",
    "referenceAnswer": "day = \"Day26\"\ntitle = \"Python操作Word和PowerPoint文件\"\ntopics = [\n  \"操作Word文档\",\n  \"生成PowerPoint\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day26"
    }
  },
  {
    "id": "ch06-py100-day027",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python操作PDF文件",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python操作PDF文件》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python操作PDF文件》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "从PDF中提取文本",
      "旋转和叠加页面",
      "加密PDF文件",
      "批量添加水印",
      "创建PDF文件"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day27\"\ntitle = \"Python操作PDF文件\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 57,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python操作PDF文件》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day27 Python操作PDF文件：5项，首项：从PDF中提取文本\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python操作PDF文件》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"从PDF中提取文本\",\"旋转和叠加页面\",\"加密PDF文件\",\"批量添加水印\",\"创建PDF文件\"]\n输出：Day27 Python操作PDF文件：5项，首项：从PDF中提取文本",
    "referenceAnswer": "day = \"Day27\"\ntitle = \"Python操作PDF文件\"\ntopics = [\n  \"从PDF中提取文本\",\n  \"旋转和叠加页面\",\n  \"加密PDF文件\",\n  \"批量添加水印\",\n  \"创建PDF文件\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day27"
    }
  },
  {
    "id": "ch06-py100-day028",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python处理图像",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python处理图像》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python处理图像》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "入门知识",
      "用Pillow处理图像",
      "使用Pillow绘图"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day28\"\ntitle = \"Python处理图像\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 58,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python处理图像》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day28 Python处理图像：3项，首项：入门知识\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python处理图像》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"入门知识\",\"用Pillow处理图像\",\"使用Pillow绘图\"]\n输出：Day28 Python处理图像：3项，首项：入门知识",
    "referenceAnswer": "day = \"Day28\"\ntitle = \"Python处理图像\"\ntopics = [\n  \"入门知识\",\n  \"用Pillow处理图像\",\n  \"使用Pillow绘图\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day28"
    }
  },
  {
    "id": "ch06-py100-day029",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：Python发送邮件和短信",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《Python发送邮件和短信》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python发送邮件和短信》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "发送电子邮件",
      "发送短信"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day29\"\ntitle = \"Python发送邮件和短信\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 59,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python发送邮件和短信》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day29 Python发送邮件和短信：2项，首项：发送电子邮件\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python发送邮件和短信》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"发送电子邮件\",\"发送短信\"]\n输出：Day29 Python发送邮件和短信：2项，首项：发送电子邮件",
    "referenceAnswer": "day = \"Day29\"\ntitle = \"Python发送邮件和短信\"\ntopics = [\n  \"发送电子邮件\",\n  \"发送短信\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day29"
    }
  },
  {
    "id": "ch06-py100-day030",
    "chapterId": "ch06",
    "chapterTitle": "第六篇：逍遥试炼",
    "title": "逍遥工坊：正则表达式的应用",
    "npc": "苏星河",
    "difficulty": "融会贯通",
    "story": "珍珑棋局旁摆满卷宗，苏星河要求你掌握文件、异常和办公自动化。此卷心法记录《正则表达式的应用》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《正则表达式的应用》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "正则表达式相关知识",
      "Python对正则表达式的支持",
      "例子1：输入验证",
      "例子2：内容提取",
      "例子3：内容替换",
      "例子4：长句拆分"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day30\"\ntitle = \"正则表达式的应用\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《正则表达式的应用》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day30 正则表达式的应用：6项，首项：正则表达式相关知识\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《正则表达式的应用》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"正则表达式相关知识\",\"Python对正则表达式的支持\",\"例子1：输入验证\",\"例子2：内容提取\",\"例子3：内容替换\",\"例子4：长句拆分\"]\n输出：Day30 正则表达式的应用：6项，首项：正则表达式相关知识",
    "referenceAnswer": "day = \"Day30\"\ntitle = \"正则表达式的应用\"\ntopics = [\n  \"正则表达式相关知识\",\n  \"Python对正则表达式的支持\",\n  \"例子1：输入验证\",\n  \"例子2：内容提取\",\n  \"例子3：内容替换\",\n  \"例子4：长句拆分\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day30"
    }
  },
  {
    "id": "ch07-q01",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "天机阁初识",
    "npc": "阿朱",
    "difficulty": "爬虫入门",
    "story": "城门榜文消失了，阿朱说它被藏进天机阁网页源码。你要用 find + 切片提取 <h1> 标签内的标题文字。",
    "objective": "用 find() 定位标签位置，再用字符串切片 [start:end] 提取 <h1> 内容，打印标题和密令判断。",
    "knowledge": [
      "str.find()",
      "字符串切片",
      "len() 偏移",
      "in 成员判断"
    ],
    "starterCode": "# 补全代码：find + 切片提取 HTML 标签内容\nhtml = '<h1>江湖榜</h1><a href=\"/secret\">密令</a>'\nstart_tag = '<h1>'\nend_tag = '</h1>'\n# 用 find 定位内容起止位置，再切片\nstart = html.find(start_tag) + len(start_tag)\nend = html.find(end_tag)\ntitle = # 写出这一行（切片）\nprint(f'标题：{title}')\nprint(f'含密令链接：{\"secret\" in html}')",
    "expectedKeywords": [
      "find(",
      "len(start_tag",
      "[",
      "print"
    ],
    "reward": {
      "exp": 40,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": "千里搜踪术入门"
    },
    "successMessage": "标题成功提取，find + 切片是解析 HTML 字符串的基本功。",
    "hint": "find() 返回子串起始索引；加上 len(start_tag) 得到内容起始位置；切片 [start:end] 取内容。\n先看\"期望输出\"：标题：江湖榜 和 含密令链接：True\n写法建议：title = html[start:end]\n常见错误：切片范围搞错、find 返回 -1 时没有检查（找不到标签会出错）。",
    "expectedOutput": "输出两行：\n标题：江湖榜\n含密令链接：True",
    "referenceAnswer": "html = '<h1>江湖榜</h1><a href=\"/secret\">密令</a>'\nstart_tag = '<h1>'\nend_tag = '</h1>'\nstart = html.find(start_tag) + len(start_tag)\nend = html.find(end_tag)\ntitle = html[start:end]\nprint(f'标题：{title}')\nprint(f'含密令链接：{\"secret\" in html}')"
  },
  {
    "id": "ch07-q02",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "自制江湖榜",
    "npc": "段誉",
    "difficulty": "爬虫入门",
    "story": "英雄榜要以 HTML 格式输出，阿朱要你用列表推导式把英雄名字逐一包裹成 <li> 标签，再 join 成完整 HTML。",
    "objective": "用列表推导式生成 <li>名字</li> 列表，join 后嵌入 <ul> 打印，再打印上榜总数。",
    "knowledge": [
      "列表推导式 + f-string",
      "str.join()",
      "HTML 标签结构",
      "len()"
    ],
    "starterCode": "# 补全代码：列表推导式生成 HTML 列表\nheroes = ['乔峰', '段誉', '虚竹', '慕容复']\n# 用列表推导式包裹每个名字为 <li>名字</li>\nitems = # 写出列表推导式\nhtml = f'<ul>{\"\".join(items)}</ul>'\nprint(html)\nprint(f'共{len(heroes)}名英雄上榜')",
    "expectedKeywords": [
      "[",
      "for",
      "in heroes",
      "join",
      "print"
    ],
    "reward": {
      "exp": 45,
      "trust": 1,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "江湖榜 HTML 自动生成，列表推导式 + join 是动态构建 HTML 的基本套路。",
    "hint": "列表推导式：[f'<li>{name}</li>' for name in heroes]；''.join(items) 把列表合成字符串。\n先看\"期望输出\"：<ul><li>乔峰</li>...<li>慕容复</li></ul> 和 共4名英雄上榜\n写法建议：items = [f'<li>{name}</li>' for name in heroes]\n常见错误：join 前忘记 list()、f-string 里的 join 需要用不同类型引号防止闭合。",
    "expectedOutput": "输出两行：\n<ul><li>乔峰</li><li>段誉</li><li>虚竹</li><li>慕容复</li></ul>\n共4名英雄上榜",
    "referenceAnswer": "heroes = ['乔峰', '段誉', '虚竹', '慕容复']\nitems = [f'<li>{name}</li>' for name in heroes]\nhtml = f'<ul>{\"\".join(items)}</ul>'\nprint(html)\nprint(f'共{len(heroes)}名英雄上榜')"
  },
  {
    "id": "ch07-q03",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "源码密令搜寻",
    "npc": "阿朱",
    "difficulty": "爬虫入门",
    "story": "阿朱截获一段源码，其中隐藏着多个 # 开头的密令编号，要你用正则表达式一次性全部提取出来。",
    "objective": "用 re.findall(pattern, html) 提取所有 # 后接字母数字的字符串，打印发现数量和列表。",
    "knowledge": [
      "import re",
      "re.findall()",
      "r 字符串正则",
      "\\w+ 匹配"
    ],
    "starterCode": "# 补全代码：re.findall 提取 HTML 中的密令编号\nimport re\nhtml = '<!-- secret: xixia --><p>任务编号：#042</p><p>密级：#HIGH</p>'\n# 用 re.findall 提取所有 #单词 格式（如 #042、#HIGH）\ncodes = re.findall(# 写出：正则 r'#\\w+' 和目标字符串)\nprint(f'发现{len(codes)}处密令：{codes}')",
    "expectedKeywords": [
      "import re",
      "findall",
      "print"
    ],
    "reward": {
      "exp": 50,
      "trust": 2,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "密令一网打尽！re.findall 是批量提取文本模式的利器。",
    "hint": "r\"#\\w+\" 匹配 # 后跟一或多个字母、数字或下划线；re.findall 返回所有匹配结果的列表。\n先看\"期望输出\"：发现2处密令：['#042', '#HIGH']\n写法建议：codes = re.findall(r\"#\\w+\", html)\n常见错误：忘记 r 前缀导致 \\w 被解释为转义字符、findall 参数顺序写反（先正则后字符串）。",
    "expectedOutput": "输出：发现2处密令：['#042', '#HIGH']",
    "referenceAnswer": "import re\nhtml = '<!-- secret: xixia --><p>任务编号：#042</p><p>密级：#HIGH</p>'\ncodes = re.findall(r'#\\w+', html)\nprint(f'发现{len(codes)}处密令：{codes}')"
  },
  {
    "id": "ch07-py100-day031",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：Python语言进阶",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《Python语言进阶》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python语言进阶》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "重要知识点",
      "数据结构和算法",
      "函数的使用方式",
      "面向对象相关知识",
      "迭代器和生成器",
      "并发编程"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day31\"\ntitle = \"Python语言进阶\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 61,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python语言进阶》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day31 Python语言进阶：6项，首项：重要知识点\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python语言进阶》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"重要知识点\",\"数据结构和算法\",\"函数的使用方式\",\"面向对象相关知识\",\"迭代器和生成器\",\"并发编程\"]\n输出：Day31 Python语言进阶：6项，首项：重要知识点",
    "referenceAnswer": "day = \"Day31\"\ntitle = \"Python语言进阶\"\ntopics = [\n  \"重要知识点\",\n  \"数据结构和算法\",\n  \"函数的使用方式\",\n  \"面向对象相关知识\",\n  \"迭代器和生成器\",\n  \"并发编程\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day31"
    }
  },
  {
    "id": "ch07-py100-day032-combo",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：Web前端入门",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。本关把 心法卷宗-33《Web前端入门》化成江湖任务，后续主线会反复用到这些知识点。",
    "objective": "整理《Web前端入门》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "用HTML标签承载页面内容",
      "用CSS渲染页面",
      "用JavaScript处理交互式行为",
      "Vue.js入门",
      "Element的使用",
      "Bootstrap的使用"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nday = \"Day32-33\"\ntitle = \"Web前端入门\"\ntopics = [\n  \"用HTML标签承载页面内容\",\n  \"用CSS渲染页面\",\n  \"用JavaScript处理交互式行为\",\n  \"Vue.js入门\",\n  \"Element的使用\",\n  \"Bootstrap的使用\"\n]\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 62,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Web前端入门》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day32-33 Web前端入门：6项，首项：用HTML标签承载页面内容\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 Day32-33 和标题《Web前端入门》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"用HTML标签承载页面内容\",\"用CSS渲染页面\",\"用JavaScript处理交互式行为\",\"Vue.js入门\",\"Element的使用\",\"Bootstrap的使用\"]\n输出：Day32-33 Web前端入门：6项，首项：用HTML标签承载页面内容",
    "referenceAnswer": "day = \"Day32-33\"\ntitle = \"Web前端入门\"\ntopics = [\n  \"用HTML标签承载页面内容\",\n  \"用CSS渲染页面\",\n  \"用JavaScript处理交互式行为\",\n  \"Vue.js入门\",\n  \"Element的使用\",\n  \"Bootstrap的使用\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day32-33"
    }
  },
  {
    "id": "ch07-py100-day034-combo",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：玩转Linux操作系统",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。本关把 心法卷宗-35《玩转Linux操作系统》化成江湖任务，后续主线会反复用到这些知识点。",
    "objective": "整理《玩转Linux操作系统》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "操作系统发展史和Linux概述",
      "Linux基础命令",
      "Linux中的实用程序",
      "Linux的文件系统",
      "Vim编辑器的应用",
      "环境变量和Shell编程"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nday = \"Day34-35\"\ntitle = \"玩转Linux操作系统\"\ntopics = [\n  \"操作系统发展史和Linux概述\",\n  \"Linux基础命令\",\n  \"Linux中的实用程序\",\n  \"Linux的文件系统\",\n  \"Vim编辑器的应用\",\n  \"环境变量和Shell编程\",\n  \"软件的安装和服务的配置\",\n  \"网络访问和管理\",\n  \"其他相关内容\"\n]\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 64,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《玩转Linux操作系统》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day34-35 玩转Linux操作系统：9项，首项：操作系统发展史和Linux概述\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 Day34-35 和标题《玩转Linux操作系统》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"操作系统发展史和Linux概述\",\"Linux基础命令\",\"Linux中的实用程序\",\"Linux的文件系统\",\"Vim编辑器的应用\",\"环境变量和Shell编程\",\"软件的安装和服务的配置\",\"网络访问和管理\",\"其他相关内容\"]\n输出：Day34-35 玩转Linux操作系统：9项，首项：操作系统发展史和Linux概述",
    "referenceAnswer": "day = \"Day34-35\"\ntitle = \"玩转Linux操作系统\"\ntopics = [\n  \"操作系统发展史和Linux概述\",\n  \"Linux基础命令\",\n  \"Linux中的实用程序\",\n  \"Linux的文件系统\",\n  \"Vim编辑器的应用\",\n  \"环境变量和Shell编程\",\n  \"软件的安装和服务的配置\",\n  \"网络访问和管理\",\n  \"其他相关内容\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day34-35"
    }
  },
  {
    "id": "ch07-py100-day036",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：关系型数据库和MySQL概述",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《关系型数据库和MySQL概述》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《关系型数据库和MySQL概述》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "关系型数据库概述",
      "MySQL简介",
      "安装MySQL",
      "MySQL基本命令"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day36\"\ntitle = \"关系型数据库和MySQL概述\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 66,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《关系型数据库和MySQL概述》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day36 关系型数据库和MySQL概述：4项，首项：关系型数据库概述\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《关系型数据库和MySQL概述》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"关系型数据库概述\",\"MySQL简介\",\"安装MySQL\",\"MySQL基本命令\"]\n输出：Day36 关系型数据库和MySQL概述：4项，首项：关系型数据库概述",
    "referenceAnswer": "day = \"Day36\"\ntitle = \"关系型数据库和MySQL概述\"\ntopics = [\n  \"关系型数据库概述\",\n  \"MySQL简介\",\n  \"安装MySQL\",\n  \"MySQL基本命令\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day36"
    }
  },
  {
    "id": "ch07-py100-day037",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：SQL详解之DDL",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《SQL详解之DDL》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《SQL详解之DDL》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "建库建表",
      "删除表和修改表"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day37\"\ntitle = \"SQL详解之DDL\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 67,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《SQL详解之DDL》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day37 SQL详解之DDL：2项，首项：建库建表\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《SQL详解之DDL》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"建库建表\",\"删除表和修改表\"]\n输出：Day37 SQL详解之DDL：2项，首项：建库建表",
    "referenceAnswer": "day = \"Day37\"\ntitle = \"SQL详解之DDL\"\ntopics = [\n  \"建库建表\",\n  \"删除表和修改表\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day37"
    }
  },
  {
    "id": "ch07-py100-day038",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：SQL详解之DML",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《SQL详解之DML》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《SQL详解之DML》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "insert操作",
      "delete操作",
      "update操作"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day38\"\ntitle = \"SQL详解之DML\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 68,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《SQL详解之DML》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day38 SQL详解之DML：3项，首项：insert操作\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《SQL详解之DML》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"insert操作\",\"delete操作\",\"update操作\"]\n输出：Day38 SQL详解之DML：3项，首项：insert操作",
    "referenceAnswer": "day = \"Day38\"\ntitle = \"SQL详解之DML\"\ntopics = [\n  \"insert操作\",\n  \"delete操作\",\n  \"update操作\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day38"
    }
  },
  {
    "id": "ch07-py100-day039",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：SQL详解之DQL",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《SQL详解之DQL》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《SQL详解之DQL》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "投影和别名",
      "筛选数据",
      "空值处理",
      "去重",
      "排序",
      "聚合函数"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day39\"\ntitle = \"SQL详解之DQL\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 69,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《SQL详解之DQL》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day39 SQL详解之DQL：14项，首项：投影和别名\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《SQL详解之DQL》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"投影和别名\",\"筛选数据\",\"空值处理\",\"去重\",\"排序\",\"聚合函数\",\"嵌套查询\",\"分组操作\",\"表连接\",\"笛卡尔积\",\"内连接\",\"自然连接\",\"外连接\",\"窗口函数\"]\n输出：Day39 SQL详解之DQL：14项，首项：投影和别名",
    "referenceAnswer": "day = \"Day39\"\ntitle = \"SQL详解之DQL\"\ntopics = [\n  \"投影和别名\",\n  \"筛选数据\",\n  \"空值处理\",\n  \"去重\",\n  \"排序\",\n  \"聚合函数\",\n  \"嵌套查询\",\n  \"分组操作\",\n  \"表连接\",\n  \"笛卡尔积\",\n  \"内连接\",\n  \"自然连接\",\n  \"外连接\",\n  \"窗口函数\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day39"
    }
  },
  {
    "id": "ch07-py100-day040",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：SQL详解之DCL",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《SQL详解之DCL》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《SQL详解之DCL》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "创建用户",
      "授予权限",
      "召回权限"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day40\"\ntitle = \"SQL详解之DCL\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《SQL详解之DCL》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day40 SQL详解之DCL：3项，首项：创建用户\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《SQL详解之DCL》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"创建用户\",\"授予权限\",\"召回权限\"]\n输出：Day40 SQL详解之DCL：3项，首项：创建用户",
    "referenceAnswer": "day = \"Day40\"\ntitle = \"SQL详解之DCL\"\ntopics = [\n  \"创建用户\",\n  \"授予权限\",\n  \"召回权限\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day40"
    }
  },
  {
    "id": "ch07-py100-day041",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：MySQL新特性",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《MySQL新特性》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《MySQL新特性》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "JSON类型",
      "窗口函数",
      "公共表表达式"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day41\"\ntitle = \"MySQL新特性\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 71,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《MySQL新特性》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day41 MySQL新特性：3项，首项：JSON类型\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《MySQL新特性》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"JSON类型\",\"窗口函数\",\"公共表表达式\"]\n输出：Day41 MySQL新特性：3项，首项：JSON类型",
    "referenceAnswer": "day = \"Day41\"\ntitle = \"MySQL新特性\"\ntopics = [\n  \"JSON类型\",\n  \"窗口函数\",\n  \"公共表表达式\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day41"
    }
  },
  {
    "id": "ch07-py100-day042",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：视图、函数和过程",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《视图、函数和过程》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《视图、函数和过程》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "视图",
      "使用场景",
      "创建视图",
      "使用限制",
      "函数",
      "内置函数"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day42\"\ntitle = \"视图、函数和过程\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 72,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《视图、函数和过程》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day42 视图、函数和过程：10项，首项：视图\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《视图、函数和过程》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"视图\",\"使用场景\",\"创建视图\",\"使用限制\",\"函数\",\"内置函数\",\"用户自定义函数（UDF）\",\"过程\",\"创建过程\",\"调用过程\"]\n输出：Day42 视图、函数和过程：10项，首项：视图",
    "referenceAnswer": "day = \"Day42\"\ntitle = \"视图、函数和过程\"\ntopics = [\n  \"视图\",\n  \"使用场景\",\n  \"创建视图\",\n  \"使用限制\",\n  \"函数\",\n  \"内置函数\",\n  \"用户自定义函数（UDF）\",\n  \"过程\",\n  \"创建过程\",\n  \"调用过程\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day42"
    }
  },
  {
    "id": "ch07-py100-day043",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：索引",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《索引》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《索引》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "执行计划",
      "索引的原理",
      "创建索引",
      "普通索引",
      "唯一索引",
      "前缀索引"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day43\"\ntitle = \"索引\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 73,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《索引》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day43 索引：8项，首项：执行计划\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《索引》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"执行计划\",\"索引的原理\",\"创建索引\",\"普通索引\",\"唯一索引\",\"前缀索引\",\"复合索引\",\"注意事项\"]\n输出：Day43 索引：8项，首项：执行计划",
    "referenceAnswer": "day = \"Day43\"\ntitle = \"索引\"\ntopics = [\n  \"执行计划\",\n  \"索引的原理\",\n  \"创建索引\",\n  \"普通索引\",\n  \"唯一索引\",\n  \"前缀索引\",\n  \"复合索引\",\n  \"注意事项\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day43"
    }
  },
  {
    "id": "ch07-py100-day044",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：Python接入MySQL数据库",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《Python接入MySQL数据库》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python接入MySQL数据库》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "安装三方库",
      "创建连接",
      "获取游标",
      "执行SQL语句",
      "通过游标抓取数据",
      "事务提交和回滚"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day44\"\ntitle = \"Python接入MySQL数据库\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 74,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python接入MySQL数据库》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day44 Python接入MySQL数据库：8项，首项：安装三方库\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python接入MySQL数据库》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"安装三方库\",\"创建连接\",\"获取游标\",\"执行SQL语句\",\"通过游标抓取数据\",\"事务提交和回滚\",\"释放连接\",\"编写ETL脚本\"]\n输出：Day44 Python接入MySQL数据库：8项，首项：安装三方库",
    "referenceAnswer": "day = \"Day44\"\ntitle = \"Python接入MySQL数据库\"\ntopics = [\n  \"安装三方库\",\n  \"创建连接\",\n  \"获取游标\",\n  \"执行SQL语句\",\n  \"通过游标抓取数据\",\n  \"事务提交和回滚\",\n  \"释放连接\",\n  \"编写ETL脚本\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day44"
    }
  },
  {
    "id": "ch07-py100-day045",
    "chapterId": "ch07",
    "chapterTitle": "第七篇：江湖暗网",
    "title": "暗网入门：Hive实战",
    "npc": "段誉",
    "difficulty": "融会贯通",
    "story": "天机阁暗网浮出水面，段誉陪你把系统、前端和数据库基础串成路线。此卷心法记录《Hive实战》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Hive实战》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Hive概述",
      "环境搭建",
      "常用命令",
      "基本语法",
      "建表操作",
      "写入数据"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day45\"\ntitle = \"Hive实战\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 75,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Hive实战》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day45 Hive实战：12项，首项：Hive概述\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Hive实战》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Hive概述\",\"环境搭建\",\"常用命令\",\"基本语法\",\"建表操作\",\"写入数据\",\"常用函数\",\"分组聚合\",\"抽样操作\",\"排序操作\",\"横向展开\",\"性能优化\"]\n输出：Day45 Hive实战：12项，首项：Hive概述",
    "referenceAnswer": "day = \"Day45\"\ntitle = \"Hive实战\"\ntopics = [\n  \"Hive概述\",\n  \"环境搭建\",\n  \"常用命令\",\n  \"基本语法\",\n  \"建表操作\",\n  \"写入数据\",\n  \"常用函数\",\n  \"分组聚合\",\n  \"抽样操作\",\n  \"排序操作\",\n  \"横向展开\",\n  \"性能优化\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day45"
    }
  },
  {
    "id": "ch08-q01",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "夜探天机榜",
    "npc": "阿朱",
    "difficulty": "爬虫进阶",
    "story": "夜色掩护下，你准备向天机榜发出第一次请求。",
    "objective": "导入 requests，写出请求网页并打印响应文本的基本结构。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "requests",
      "GET 请求",
      "响应文本"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport requests\nurl = 'https://example.com'\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import requests",
      "requests.get",
      "response",
      "print"
    ],
    "reward": {
      "exp": 50,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": "千里搜踪术"
    },
    "successMessage": "天机榜回应了你的探查，网页内容落入掌中。",
    "hint": "requests.get(url) 会返回响应对象，正文通常在 response.text。\n先看“期望输出”，本关最终要做到：输出格式：网页前50字符：<response.text 的前 50 个字符>\n关键知识：requests 是常用网页请求库，负责向网页发送请求。 requests.get(url) 会返回响应对象，正文通常在 response.text。 response 保存网页响应，常看 status_code 和 text。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出格式：网页前50字符：<response.text 的前 50 个字符>",
    "referenceAnswer": "import requests\nurl = 'https://example.com'\nresponse = requests.get(url)\nprint('网页前50字符：' + response.text[:50])"
  },
  {
    "id": "ch08-q02",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "解密悦来客栈菜单",
    "npc": "钟灵",
    "difficulty": "爬虫进阶",
    "story": "悦来客栈菜单价格异常，钟灵怀疑菜名首字连成暗号。",
    "objective": "用 BeautifulSoup 解析 HTML，提取所有菜名文本并打印。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "BeautifulSoup",
      "find_all()",
      "文本提取"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nfrom bs4 import BeautifulSoup\nhtml = '<li>杏仁茶</li><li>子姜鱼</li>'\n# 写出这一行代码\nfor item in soup.find_all('li'):\n    # 按期望输出写 print(...)",
    "expectedKeywords": [
      "BeautifulSoup",
      "find_all",
      "for",
      "print"
    ],
    "reward": {
      "exp": 55,
      "trust": 1,
      "reputation": 0,
      "money": 20,
      "art": ""
    },
    "successMessage": "菜名被逐条取出，暗号果然藏在菜单里。",
    "hint": "解析后用 soup.find_all('li') 找到所有列表项。\n先看“期望输出”，本关最终要做到：输出两行：\n关键知识：BeautifulSoup 会把 HTML 文本解析成可查询的结构。 find_all(tag) 会找到所有指定标签。 for 循环会逐个取出列表、字典或配对数据中的元素。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出两行：\n杏仁茶\n子姜鱼",
    "referenceAnswer": "from bs4 import BeautifulSoup\nhtml = '<li>杏仁茶</li><li>子姜鱼</li>'\nsoup = BeautifulSoup(html, 'html.parser')\nfor item in soup.find_all('li'):\n    print(item.text)"
  },
  {
    "id": "ch08-q03",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "江湖情报归档",
    "npc": "王语嫣",
    "difficulty": "爬虫进阶",
    "story": "抓来的线索不能只放在屏幕上。王语嫣要你把阿朱、段延庆和雁门关旧信都存成可复盘的 CSV 档案。",
    "objective": "用 csv 模块把三条情报写入 clues.csv：阿朱在燕子坞、段延庆在西夏一品堂、雁门关旧信在雁门关，并打印写入结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "csv",
      "with open",
      "writerows()"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport csv\nrows = [['人物', '地点'], ['阿朱', '燕子坞'], ['段延庆', '西夏一品堂'], ['雁门关旧信', '雁门关']]\nwith open('clues.csv', 'w', newline='', encoding='utf-8') as f:\n    # 写出这一行代码\n    writer.writerows(rows)\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import csv",
      "with open",
      "writer",
      "writerows",
      "print"
    ],
    "reward": {
      "exp": 65,
      "trust": 2,
      "reputation": 1,
      "money": 5,
      "art": "情报归档术"
    },
    "successMessage": "情报落成 CSV 卷宗，雁门关旧信终于有了可追溯出处。",
    "hint": "写文件时用 with open，CSV 写入可用 csv.writer。本关 rows 已经给出四行：表头 + 三条情报，不要删掉段延庆和雁门关旧信。\n先看“期望输出”，本关最终要做到：生成 clues.csv，并打印：已写入 clues.csv，共4行\n关键知识：csv 模块适合读写逗号分隔的表格文本。 with open 会自动管理文件打开和关闭。 csv.writer(f) 会创建 CSV 写入器。 writerows 可以一次写入多行数据。 len(rows) 可以统计写入行数。\n写法建议：导入 csv，打开 clues.csv，writer.writerows(rows)，最后 print('已写入 clues.csv，共' + str(len(rows)) + '行')。\n常见错误：忘记 newline='' 导致空行、只写入一行、打印数量写死但 rows 数量变了。",
    "expectedOutput": "生成文件：clues.csv\n文件内容：\n人物,地点\n阿朱,燕子坞\n段延庆,西夏一品堂\n雁门关旧信,雁门关\n同时打印：已写入 clues.csv，共4行",
    "referenceAnswer": "import csv\nrows = [['人物', '地点'], ['阿朱', '燕子坞'], ['段延庆', '西夏一品堂'], ['雁门关旧信', '雁门关']]\nwith open('clues.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)\n    writer.writerows(rows)\nprint('已写入 clues.csv，共' + str(len(rows)) + '行')"
  },
  {
    "id": "ch08-py100-day046",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：Django快速上手",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《Django快速上手》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Django快速上手》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Web应用工作机制",
      "HTTP请求和响应",
      "Django框架概述",
      "5分钟快速上手"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day46\"\ntitle = \"Django快速上手\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 76,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Django快速上手》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day46 Django快速上手：4项，首项：Web应用工作机制\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Django快速上手》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Web应用工作机制\",\"HTTP请求和响应\",\"Django框架概述\",\"5分钟快速上手\"]\n输出：Day46 Django快速上手：4项，首项：Web应用工作机制",
    "referenceAnswer": "day = \"Day46\"\ntitle = \"Django快速上手\"\ntopics = [\n  \"Web应用工作机制\",\n  \"HTTP请求和响应\",\n  \"Django框架概述\",\n  \"5分钟快速上手\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day46"
    }
  },
  {
    "id": "ch08-py100-day047",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：深入模型",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《深入模型》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入模型》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "关系型数据库配置",
      "使用ORM完成对模型的CRUD操作",
      "管理后台的使用",
      "Django模型最佳实践",
      "模型定义参考"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day47\"\ntitle = \"深入模型\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 77,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入模型》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day47 深入模型：5项，首项：关系型数据库配置\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入模型》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"关系型数据库配置\",\"使用ORM完成对模型的CRUD操作\",\"管理后台的使用\",\"Django模型最佳实践\",\"模型定义参考\"]\n输出：Day47 深入模型：5项，首项：关系型数据库配置",
    "referenceAnswer": "day = \"Day47\"\ntitle = \"深入模型\"\ntopics = [\n  \"关系型数据库配置\",\n  \"使用ORM完成对模型的CRUD操作\",\n  \"管理后台的使用\",\n  \"Django模型最佳实践\",\n  \"模型定义参考\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day47"
    }
  },
  {
    "id": "ch08-py100-day048",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：静态资源和Ajax请求",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《静态资源和Ajax请求》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《静态资源和Ajax请求》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "加载静态资源",
      "Ajax概述",
      "用Ajax实现投票功能"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day48\"\ntitle = \"静态资源和Ajax请求\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 78,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《静态资源和Ajax请求》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day48 静态资源和Ajax请求：3项，首项：加载静态资源\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《静态资源和Ajax请求》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"加载静态资源\",\"Ajax概述\",\"用Ajax实现投票功能\"]\n输出：Day48 静态资源和Ajax请求：3项，首项：加载静态资源",
    "referenceAnswer": "day = \"Day48\"\ntitle = \"静态资源和Ajax请求\"\ntopics = [\n  \"加载静态资源\",\n  \"Ajax概述\",\n  \"用Ajax实现投票功能\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day48"
    }
  },
  {
    "id": "ch08-py100-day049",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：Cookie和Session",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《Cookie和Session》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Cookie和Session》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "实现用户跟踪",
      "cookie和session的关系",
      "Django框架对session的支持",
      "视图函数中的cookie读写操作"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day49\"\ntitle = \"Cookie和Session\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 79,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Cookie和Session》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day49 Cookie和Session：4项，首项：实现用户跟踪\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Cookie和Session》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"实现用户跟踪\",\"cookie和session的关系\",\"Django框架对session的支持\",\"视图函数中的cookie读写操作\"]\n输出：Day49 Cookie和Session：4项，首项：实现用户跟踪",
    "referenceAnswer": "day = \"Day49\"\ntitle = \"Cookie和Session\"\ntopics = [\n  \"实现用户跟踪\",\n  \"cookie和session的关系\",\n  \"Django框架对session的支持\",\n  \"视图函数中的cookie读写操作\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day49"
    }
  },
  {
    "id": "ch08-py100-day050",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：报表和日志",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《报表和日志》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《报表和日志》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "通过HttpResponse修改响应头",
      "使用StreamingHttpResponse处理大文件",
      "使用xlwt生成Excel报表",
      "使用reportlab生成PDF报表",
      "使用ECharts生成前端图表"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day50\"\ntitle = \"报表和日志\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 80,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《报表和日志》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day50 报表和日志：5项，首项：通过HttpResponse修改响应头\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《报表和日志》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"通过HttpResponse修改响应头\",\"使用StreamingHttpResponse处理大文件\",\"使用xlwt生成Excel报表\",\"使用reportlab生成PDF报表\",\"使用ECharts生成前端图表\"]\n输出：Day50 报表和日志：5项，首项：通过HttpResponse修改响应头",
    "referenceAnswer": "day = \"Day50\"\ntitle = \"报表和日志\"\ntopics = [\n  \"通过HttpResponse修改响应头\",\n  \"使用StreamingHttpResponse处理大文件\",\n  \"使用xlwt生成Excel报表\",\n  \"使用reportlab生成PDF报表\",\n  \"使用ECharts生成前端图表\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day50"
    }
  },
  {
    "id": "ch08-py100-day051",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：日志和调试工具栏",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《日志和调试工具栏》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《日志和调试工具栏》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "配置日志",
      "配置Django-Debug-Toolbar",
      "优化ORM代码"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day51\"\ntitle = \"日志和调试工具栏\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 81,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《日志和调试工具栏》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day51 日志和调试工具栏：3项，首项：配置日志\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《日志和调试工具栏》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"配置日志\",\"配置Django-Debug-Toolbar\",\"优化ORM代码\"]\n输出：Day51 日志和调试工具栏：3项，首项：配置日志",
    "referenceAnswer": "day = \"Day51\"\ntitle = \"日志和调试工具栏\"\ntopics = [\n  \"配置日志\",\n  \"配置Django-Debug-Toolbar\",\n  \"优化ORM代码\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day51"
    }
  },
  {
    "id": "ch08-py100-day052",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：中间件的应用",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《中间件的应用》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《中间件的应用》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "什么是中间件",
      "Django框架内置的中间件",
      "自定义中间件及其应用场景"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day52\"\ntitle = \"中间件的应用\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 82,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《中间件的应用》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day52 中间件的应用：3项，首项：什么是中间件\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《中间件的应用》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"什么是中间件\",\"Django框架内置的中间件\",\"自定义中间件及其应用场景\"]\n输出：Day52 中间件的应用：3项，首项：什么是中间件",
    "referenceAnswer": "day = \"Day52\"\ntitle = \"中间件的应用\"\ntopics = [\n  \"什么是中间件\",\n  \"Django框架内置的中间件\",\n  \"自定义中间件及其应用场景\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day52"
    }
  },
  {
    "id": "ch08-py100-day053",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：前后端分离开发入门",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《前后端分离开发入门》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《前后端分离开发入门》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "返回JSON格式的数据",
      "用Vue.js渲染页面"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day53\"\ntitle = \"前后端分离开发入门\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 83,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《前后端分离开发入门》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day53 前后端分离开发入门：2项，首项：返回JSON格式的数据\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《前后端分离开发入门》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"返回JSON格式的数据\",\"用Vue.js渲染页面\"]\n输出：Day53 前后端分离开发入门：2项，首项：返回JSON格式的数据",
    "referenceAnswer": "day = \"Day53\"\ntitle = \"前后端分离开发入门\"\ntopics = [\n  \"返回JSON格式的数据\",\n  \"用Vue.js渲染页面\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day53"
    }
  },
  {
    "id": "ch08-py100-day054",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：RESTful架构和DRF入门",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《RESTful架构和DRF入门》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《RESTful架构和DRF入门》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "REST概述",
      "DRF库使用入门",
      "前后端分离开发",
      "JWT的应用"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day54\"\ntitle = \"RESTful架构和DRF入门\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 84,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《RESTful架构和DRF入门》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day54 RESTful架构和DRF入门：4项，首项：REST概述\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《RESTful架构和DRF入门》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"REST概述\",\"DRF库使用入门\",\"前后端分离开发\",\"JWT的应用\"]\n输出：Day54 RESTful架构和DRF入门：4项，首项：REST概述",
    "referenceAnswer": "day = \"Day54\"\ntitle = \"RESTful架构和DRF入门\"\ntopics = [\n  \"REST概述\",\n  \"DRF库使用入门\",\n  \"前后端分离开发\",\n  \"JWT的应用\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day54"
    }
  },
  {
    "id": "ch08-py100-day055",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：RESTful架构和DRF进阶",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《RESTful架构和DRF进阶》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《RESTful架构和DRF进阶》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "使用CBV",
      "数据分页",
      "数据筛选"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day55\"\ntitle = \"RESTful架构和DRF进阶\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 85,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《RESTful架构和DRF进阶》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day55 RESTful架构和DRF进阶：3项，首项：使用CBV\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《RESTful架构和DRF进阶》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"使用CBV\",\"数据分页\",\"数据筛选\"]\n输出：Day55 RESTful架构和DRF进阶：3项，首项：使用CBV",
    "referenceAnswer": "day = \"Day55\"\ntitle = \"RESTful架构和DRF进阶\"\ntopics = [\n  \"使用CBV\",\n  \"数据分页\",\n  \"数据筛选\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day55"
    }
  },
  {
    "id": "ch08-py100-day056",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：使用缓存",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《使用缓存》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《使用缓存》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "网站优化第一定律",
      "在Django项目中使用Redis提供缓存服务",
      "在视图函数中读写缓存",
      "使用装饰器实现页面缓存",
      "为数据接口提供缓存服务"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day56\"\ntitle = \"使用缓存\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 86,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《使用缓存》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day56 使用缓存：5项，首项：网站优化第一定律\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《使用缓存》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"网站优化第一定律\",\"在Django项目中使用Redis提供缓存服务\",\"在视图函数中读写缓存\",\"使用装饰器实现页面缓存\",\"为数据接口提供缓存服务\"]\n输出：Day56 使用缓存：5项，首项：网站优化第一定律",
    "referenceAnswer": "day = \"Day56\"\ntitle = \"使用缓存\"\ntopics = [\n  \"网站优化第一定律\",\n  \"在Django项目中使用Redis提供缓存服务\",\n  \"在视图函数中读写缓存\",\n  \"使用装饰器实现页面缓存\",\n  \"为数据接口提供缓存服务\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day56"
    }
  },
  {
    "id": "ch08-py100-day057",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：接入三方平台",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《接入三方平台》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《接入三方平台》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "文件上传表单控件和图片文件预览",
      "服务器端如何处理上传的文件"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day57\"\ntitle = \"接入三方平台\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 87,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《接入三方平台》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day57 接入三方平台：2项，首项：文件上传表单控件和图片文件预览\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《接入三方平台》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"文件上传表单控件和图片文件预览\",\"服务器端如何处理上传的文件\"]\n输出：Day57 接入三方平台：2项，首项：文件上传表单控件和图片文件预览",
    "referenceAnswer": "day = \"Day57\"\ntitle = \"接入三方平台\"\ntopics = [\n  \"文件上传表单控件和图片文件预览\",\n  \"服务器端如何处理上传的文件\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day57"
    }
  },
  {
    "id": "ch08-py100-day058",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：异步任务和定时任务",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《异步任务和定时任务》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《异步任务和定时任务》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "网站优化第二定律",
      "配置消息队列服务",
      "在项目中使用Celery实现任务异步化",
      "在项目中使用Celery实现定时任务"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day58\"\ntitle = \"异步任务和定时任务\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 88,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《异步任务和定时任务》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day58 异步任务和定时任务：4项，首项：网站优化第二定律\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《异步任务和定时任务》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"网站优化第二定律\",\"配置消息队列服务\",\"在项目中使用Celery实现任务异步化\",\"在项目中使用Celery实现定时任务\"]\n输出：Day58 异步任务和定时任务：4项，首项：网站优化第二定律",
    "referenceAnswer": "day = \"Day58\"\ntitle = \"异步任务和定时任务\"\ntopics = [\n  \"网站优化第二定律\",\n  \"配置消息队列服务\",\n  \"在项目中使用Celery实现任务异步化\",\n  \"在项目中使用Celery实现定时任务\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day58"
    }
  },
  {
    "id": "ch08-py100-day059",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：单元测试",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《单元测试》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《单元测试》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "单元测试"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day59\"\ntitle = \"单元测试\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 89,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《单元测试》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day59 单元测试：1项，首项：单元测试\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《单元测试》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"单元测试\"]\n输出：Day59 单元测试：1项，首项：单元测试",
    "referenceAnswer": "day = \"Day59\"\ntitle = \"单元测试\"\ntopics = [\n  \"单元测试\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day59"
    }
  },
  {
    "id": "ch08-py100-day060",
    "chapterId": "ch08",
    "chapterTitle": "第八篇：追踪密令",
    "title": "追踪榜文：项目上线",
    "npc": "王语嫣",
    "difficulty": "融会贯通",
    "story": "追踪密令越查越深，王语嫣把 Web 开发与服务端流程写成破阵图。此卷心法记录《项目上线》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《项目上线》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Python中的单元测试",
      "Django框架对单元测试的支持",
      "使用版本控制系统",
      "配置和使用uWSGI",
      "动静分离和Nginx配置",
      "配置HTTPS"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day60\"\ntitle = \"项目上线\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 90,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《项目上线》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day60 项目上线：7项，首项：Python中的单元测试\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《项目上线》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Python中的单元测试\",\"Django框架对单元测试的支持\",\"使用版本控制系统\",\"配置和使用uWSGI\",\"动静分离和Nginx配置\",\"配置HTTPS\",\"配置域名解析\"]\n输出：Day60 项目上线：7项，首项：Python中的单元测试",
    "referenceAnswer": "day = \"Day60\"\ntitle = \"项目上线\"\ntopics = [\n  \"Python中的单元测试\",\n  \"Django框架对单元测试的支持\",\n  \"使用版本控制系统\",\n  \"配置和使用uWSGI\",\n  \"动静分离和Nginx配置\",\n  \"配置HTTPS\",\n  \"配置域名解析\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day60"
    }
  },
  {
    "id": "ch09-q01",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "一品堂通行令",
    "npc": "木婉清",
    "difficulty": "爬虫高阶",
    "story": "西夏一品堂内页设有登录机关，普通请求只能撞上铜门。",
    "objective": "给 requests 请求传入 cookies，模拟已登录访问。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "Cookie",
      "登录态",
      "requests 参数"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport requests\nurl = 'https://example.com/inner'\ncookies = {'token': 'xixia-pass'}\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "cookies",
      "requests.get",
      "status_code",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 2,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "通行令被门房认出，一品堂内页终于露出缝隙。",
    "hint": "cookies 是字典，可以作为 requests.get 的命名参数传入。\n先看“期望输出”，本关最终要做到：输出格式：状态码：<response.status_code>\n关键知识：cookies 通常用字典保存登录凭据或会话信息。 requests.get(url) 会返回响应对象，正文通常在 response.text。 status_code 是 HTTP 状态码，200 通常表示请求成功。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出格式：状态码：<response.status_code>\n示例：状态码：200",
    "referenceAnswer": "import requests\nurl = 'https://example.com/inner'\ncookies = {'token': 'xixia-pass'}\nresponse = requests.get(url, cookies=cookies)\nprint('状态码：' + str(response.status_code))"
  },
  {
    "id": "ch09-q02",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "夜行西夏王宫",
    "npc": "阿紫",
    "difficulty": "爬虫高阶",
    "story": "阿紫笑嘻嘻地说，真正的机关要让浏览器自己去点。",
    "objective": "写出 Selenium 打开页面、定位输入框并输入口令的流程。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "Selenium",
      "浏览器自动化",
      "元素定位"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get('https://example.com')\nbox = driver.find_element(By.NAME, 'keyword')\nbox.send_keys('少室山')\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "webdriver",
      "driver.get",
      "find_element",
      "send_keys",
      "print"
    ],
    "reward": {
      "exp": 80,
      "trust": 1,
      "reputation": 2,
      "money": 0,
      "art": "机关傀儡术"
    },
    "successMessage": "浏览器替你夜行王宫，暗格里的情报被自动点开。",
    "hint": "自动化的核心是打开页面、找到元素、执行点击或输入。\n先看“期望输出”，本关最终要做到：浏览器动作：打开页面，找到 keyword 输入框，输入“少室山”\n关键知识：webdriver 可以启动并控制浏览器。 driver.get(url) 会让浏览器打开指定网页。 find_element 用来定位页面上的输入框、按钮等元素。 send_keys 会向输入框输入文本。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "浏览器动作：打开页面，找到 keyword 输入框，输入“少室山”\n同时打印：已在西夏王宫输入：少室山",
    "referenceAnswer": "from selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get('https://example.com')\nbox = driver.find_element(By.NAME, 'keyword')\nbox.send_keys('少室山')\nprint('已在西夏王宫输入：少室山')"
  },
  {
    "id": "ch09-q03",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "驿站定时报平安",
    "npc": "乔峰",
    "difficulty": "爬虫高阶",
    "story": "乔峰要求潜入期间每隔一段时间汇报一次，不许断线失联。",
    "objective": "写一个 report 函数，并用循环模拟定时输出情报。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "time.sleep()",
      "函数",
      "定时任务"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport time\n\ndef report():\n    # 按期望输出写 print(...)\n\nfor _ in range(2):\n    report()\n    time.sleep(1)",
    "expectedKeywords": [
      "import time",
      "def",
      "for",
      "sleep"
    ],
    "reward": {
      "exp": 90,
      "trust": 3,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "驿站按时亮灯，乔峰知道你仍在暗线之中。",
    "hint": "正式项目可用调度库；这里先用循环加 sleep 理解定时思路。\n先看“期望输出”，本关最终要做到：输出两次：\n关键知识：time 模块可以让程序等待，例如 time.sleep(1)。 def 用来定义函数，把一段可重复使用的逻辑起个名字。 for 循环会逐个取出列表、字典或配对数据中的元素。 sleep 秒数越大，程序等待越久，爬虫里常用于限速。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出两次：\n西夏情报：平安\n西夏情报：平安",
    "referenceAnswer": "import time\n\ndef report():\n    print('西夏情报：平安')\n\nfor _ in range(2):\n    report()\n    time.sleep(1)"
  },
  {
    "id": "ch09-py100-day061",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "西夏潜行：网络数据采集概述",
    "npc": "木婉清",
    "difficulty": "融会贯通",
    "story": "潜入西夏前，木婉清要求你把网络采集、解析和并发练到能独当一面。此卷心法记录《网络数据采集概述》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《网络数据采集概述》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "网络爬虫的概念及其应用领域",
      "网络爬虫的合法性探讨",
      "开发网络爬虫的相关工具",
      "一个爬虫程序的构成"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day61\"\ntitle = \"网络数据采集概述\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 91,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《网络数据采集概述》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day61 网络数据采集概述：4项，首项：网络爬虫的概念及其应用领域\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《网络数据采集概述》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"网络爬虫的概念及其应用领域\",\"网络爬虫的合法性探讨\",\"开发网络爬虫的相关工具\",\"一个爬虫程序的构成\"]\n输出：Day61 网络数据采集概述：4项，首项：网络爬虫的概念及其应用领域",
    "referenceAnswer": "day = \"Day61\"\ntitle = \"网络数据采集概述\"\ntopics = [\n  \"网络爬虫的概念及其应用领域\",\n  \"网络爬虫的合法性探讨\",\n  \"开发网络爬虫的相关工具\",\n  \"一个爬虫程序的构成\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day61"
    }
  },
  {
    "id": "ch09-py100-day062",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "西夏潜行：数据抓取和解析",
    "npc": "木婉清",
    "difficulty": "融会贯通",
    "story": "潜入西夏前，木婉清要求你把网络采集、解析和并发练到能独当一面。此卷心法记录《数据抓取和解析》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《数据抓取和解析》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "使用requests三方库实现数据抓取",
      "页面解析的三种方式",
      "正则表达式解析",
      "XPath解析",
      "CSS选择器解析"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day62\"\ntitle = \"数据抓取和解析\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 92,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《数据抓取和解析》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day62 数据抓取和解析：5项，首项：使用requests三方库实现数据抓取\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《数据抓取和解析》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"使用requests三方库实现数据抓取\",\"页面解析的三种方式\",\"正则表达式解析\",\"XPath解析\",\"CSS选择器解析\"]\n输出：Day62 数据抓取和解析：5项，首项：使用requests三方库实现数据抓取",
    "referenceAnswer": "day = \"Day62\"\ntitle = \"数据抓取和解析\"\ntopics = [\n  \"使用requests三方库实现数据抓取\",\n  \"页面解析的三种方式\",\n  \"正则表达式解析\",\n  \"XPath解析\",\n  \"CSS选择器解析\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day62"
    }
  },
  {
    "id": "ch09-py100-day063",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "西夏潜行：Python中的并发编程",
    "npc": "木婉清",
    "difficulty": "融会贯通",
    "story": "潜入西夏前，木婉清要求你把网络采集、解析和并发练到能独当一面。此卷心法记录《Python中的并发编程》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Python中的并发编程》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "多线程",
      "多进程",
      "异步I/O"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day63\"\ntitle = \"Python中的并发编程\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 93,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Python中的并发编程》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day63 Python中的并发编程：3项，首项：多线程\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Python中的并发编程》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"多线程\",\"多进程\",\"异步I/O\"]\n输出：Day63 Python中的并发编程：3项，首项：多线程",
    "referenceAnswer": "day = \"Day63\"\ntitle = \"Python中的并发编程\"\ntopics = [\n  \"多线程\",\n  \"多进程\",\n  \"异步I/O\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day63"
    }
  },
  {
    "id": "ch09-py100-day064",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "西夏潜行：使用Selenium抓取网页动态内容",
    "npc": "木婉清",
    "difficulty": "融会贯通",
    "story": "潜入西夏前，木婉清要求你把网络采集、解析和并发练到能独当一面。此卷心法记录《使用Selenium抓取网页动态内容》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《使用Selenium抓取网页动态内容》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "安装Selenium",
      "加载页面",
      "查找元素和模拟用户行为",
      "隐式等待和显示等待",
      "执行JavaScript代码",
      "Selenium反爬破解"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day64\"\ntitle = \"使用Selenium抓取网页动态内容\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 94,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《使用Selenium抓取网页动态内容》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day64 使用Selenium抓取网页动态内容：7项，首项：安装Selenium\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《使用Selenium抓取网页动态内容》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"安装Selenium\",\"加载页面\",\"查找元素和模拟用户行为\",\"隐式等待和显示等待\",\"执行JavaScript代码\",\"Selenium反爬破解\",\"设置无头浏览器\"]\n输出：Day64 使用Selenium抓取网页动态内容：7项，首项：安装Selenium",
    "referenceAnswer": "day = \"Day64\"\ntitle = \"使用Selenium抓取网页动态内容\"\ntopics = [\n  \"安装Selenium\",\n  \"加载页面\",\n  \"查找元素和模拟用户行为\",\n  \"隐式等待和显示等待\",\n  \"执行JavaScript代码\",\n  \"Selenium反爬破解\",\n  \"设置无头浏览器\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day64"
    }
  },
  {
    "id": "ch09-py100-day065",
    "chapterId": "ch09",
    "chapterTitle": "第九篇：潜入西夏",
    "title": "西夏潜行：爬虫框架Scrapy简介",
    "npc": "木婉清",
    "difficulty": "融会贯通",
    "story": "潜入西夏前，木婉清要求你把网络采集、解析和并发练到能独当一面。此卷心法记录《爬虫框架Scrapy简介》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《爬虫框架Scrapy简介》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Scrapy核心组件",
      "Scrapy工作流程",
      "安装Scrapy和创建项目",
      "编写蜘蛛程序",
      "编写中间件和管道程序",
      "Scrapy配置文件"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day65\"\ntitle = \"爬虫框架Scrapy简介\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 95,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《爬虫框架Scrapy简介》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day65 爬虫框架Scrapy简介：6项，首项：Scrapy核心组件\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《爬虫框架Scrapy简介》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Scrapy核心组件\",\"Scrapy工作流程\",\"安装Scrapy和创建项目\",\"编写蜘蛛程序\",\"编写中间件和管道程序\",\"Scrapy配置文件\"]\n输出：Day65 爬虫框架Scrapy简介：6项，首项：Scrapy核心组件",
    "referenceAnswer": "day = \"Day65\"\ntitle = \"爬虫框架Scrapy简介\"\ntopics = [\n  \"Scrapy核心组件\",\n  \"Scrapy工作流程\",\n  \"安装Scrapy和创建项目\",\n  \"编写蜘蛛程序\",\n  \"编写中间件和管道程序\",\n  \"Scrapy配置文件\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day65"
    }
  },
  {
    "id": "ch10-q01",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报分舵开张",
    "npc": "乔峰",
    "difficulty": "项目",
    "story": "单人夜探已不够，乔峰准你开设群雄情报局，分工爬取多处榜文。第一张页面只返回两条关键文字：段延庆和雁门关旧信。",
    "objective": "把请求、解析、保存拆成 fetch、parse、save 三个函数；parse 要从模拟 HTML 中提取段延庆和雁门关旧信，并由 save 打印列表。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "函数化",
      "流程编排",
      "爬虫结构"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\ndef fetch(url):\n    # 写出 return 语句\n\ndef parse(html):\n    # 写出 return 语句\n\ndef save(items):\n    # 按期望输出写 print(...)\n\nsave(parse(fetch('榜文')))",
    "expectedKeywords": [
      "def fetch",
      "def parse",
      "def save",
      "print"
    ],
    "reward": {
      "exp": 90,
      "trust": 2,
      "reputation": 2,
      "money": 0,
      "art": ""
    },
    "successMessage": "情报局有了分舵章程，再多页面也能各司其职。",
    "hint": "爬虫项目常拆成获取、解析、保存三个环节。本关先不要求真正联网，fetch 用固定 HTML 模拟网页，parse 返回固定列表即可，重点是流程清楚。\n先看“期望输出”，本关最终要做到：输出：保存：['段延庆', '雁门关旧信']\n关键知识：fetch 负责获取网页内容，职责要单一。 parse 负责从网页内容里提取目标数据。 save 负责保存或输出解析结果。 print() 负责把结果显示出来。\n写法建议：fetch 返回 '<p>段延庆</p><p>雁门关旧信</p>'，parse 返回 ['段延庆', '雁门关旧信']，最后 save(parse(fetch('榜文')))。\n常见错误：parse 没有 return、save 里没有 print、输出列表里少了一项。",
    "expectedOutput": "输出：保存：['段延庆', '雁门关旧信']",
    "referenceAnswer": "def fetch(url):\n    return '<p>段延庆</p><p>雁门关旧信</p>'\n\ndef parse(html):\n    return ['段延庆', '雁门关旧信']\n\ndef save(items):\n    print('保存：' + str(items))\n\nsave(parse(fetch('榜文')))"
  },
  {
    "id": "ch10-q02",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "少林斋饭热量榜",
    "npc": "虚竹",
    "difficulty": "爬虫综合",
    "story": "少林寺厨房想筛出热量最低的素菜，扫地僧要你用列表推导式过滤，再用 sorted + lambda 排序，取出最优解。",
    "objective": "列表推导式筛出 type==\"素菜\"，sorted+lambda 升序排列，打印最低热量素菜名和热量值。",
    "knowledge": [
      "列表推导式 + 条件过滤",
      "sorted(key=lambda)",
      "字典列表操作",
      "链式组合"
    ],
    "starterCode": "# 补全代码：列表推导式过滤 + sorted 排序\nfoods = [\n    {'name': '素面', 'cal': 320, 'type': '主食'},\n    {'name': '青菜', 'cal': 80,  'type': '素菜'},\n    {'name': '豆腐', 'cal': 120, 'type': '素菜'},\n    {'name': '糙米饭', 'cal': 200, 'type': '主食'},\n]\n# 1. 列表推导式筛出 type == '素菜'\nveggies = # 写出这一行\n# 2. sorted + lambda 按 cal 升序\nveggies_sorted = # 写出这一行\nlowest = veggies_sorted[0]\nprint(f\"最低热量素菜：{lowest['name']}，热量{lowest['cal']}\")",
    "expectedKeywords": [
      "[",
      "for",
      "in foods",
      "if",
      "sorted",
      "lambda",
      "print"
    ],
    "reward": {
      "exp": 95,
      "trust": 1,
      "reputation": 1,
      "money": 30,
      "art": ""
    },
    "successMessage": "斋饭排行出炉！列表推导式 + sorted lambda 是处理字典列表的黄金组合。",
    "hint": "列表推导式：[f for f in foods if f[\"type\"]==\"素菜\"]；sorted(list, key=lambda x: x[\"cal\"]) 按热量升序。\n先看\"期望输出\"：最低热量素菜：青菜，热量80\n写法建议：veggies = [f for f in foods if f[\"type\"]==\"素菜\"]; veggies_sorted = sorted(veggies, key=lambda x: x[\"cal\"])\n常见错误：字典键用了中文引号、sorted 没有赋值变量。",
    "expectedOutput": "输出：最低热量素菜：青菜，热量80",
    "referenceAnswer": "foods = [\n    {'name': '素面', 'cal': 320, 'type': '主食'},\n    {'name': '青菜', 'cal': 80,  'type': '素菜'},\n    {'name': '豆腐', 'cal': 120, 'type': '素菜'},\n    {'name': '糙米饭', 'cal': 200, 'type': '主食'},\n]\nveggies = [f for f in foods if f['type'] == '素菜']\nveggies_sorted = sorted(veggies, key=lambda x: x['cal'])\nlowest = veggies_sorted[0]\nprint(f\"最低热量素菜：{lowest['name']}，热量{lowest['cal']}\")"
  },
  {
    "id": "ch10-q03",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "破除无相反爬阵",
    "npc": "慕容复",
    "difficulty": "项目",
    "story": "慕容复设下反爬阵，过快请求会被天机阁封门。",
    "objective": "给请求加入 headers、重试和间隔，体现礼貌爬取思路。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "headers",
      "重试",
      "礼貌爬取"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport time\nurls = ['a', 'b']\nheaders = {'User-Agent': 'JianghuBot/1.0'}\nfor url in urls:\n    # 按期望输出写 print(...)\n    time.sleep(1)",
    "expectedKeywords": [
      "headers",
      "User-Agent",
      "for",
      "sleep"
    ],
    "reward": {
      "exp": 130,
      "trust": 0,
      "reputation": 5,
      "money": 0,
      "art": "千里搜踪术大成"
    },
    "successMessage": "反爬阵没有被硬闯，而是被你按规矩绕开。",
    "hint": "真实爬虫要尊重网站规则，设置请求头、限速和失败重试。\n先看“期望输出”，本关最终要做到：输出两行：\n关键知识：headers 可以模拟请求头，User-Agent 用来说明访问来源。 User-Agent 是常见请求头字段，真实爬虫要礼貌设置。 for 循环会逐个取出列表、字典或配对数据中的元素。 sleep 秒数越大，程序等待越久，爬虫里常用于限速。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出两行：\n抓取 a JianghuBot/1.0\n抓取 b JianghuBot/1.0",
    "referenceAnswer": "import time\nurls = ['a', 'b']\nheaders = {'User-Agent': 'JianghuBot/1.0'}\nfor url in urls:\n    print('抓取', url, headers['User-Agent'])\n    time.sleep(1)"
  },
  {
    "id": "ch10-py100-day066",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：数据分析概述",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《数据分析概述》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《数据分析概述》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数据分析师的职责",
      "数据分析师的技能栈",
      "数据分析相关库"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day66\"\ntitle = \"数据分析概述\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 96,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《数据分析概述》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day66 数据分析概述：3项，首项：数据分析师的职责\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《数据分析概述》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数据分析师的职责\",\"数据分析师的技能栈\",\"数据分析相关库\"]\n输出：Day66 数据分析概述：3项，首项：数据分析师的职责",
    "referenceAnswer": "day = \"Day66\"\ntitle = \"数据分析概述\"\ntopics = [\n  \"数据分析师的职责\",\n  \"数据分析师的技能栈\",\n  \"数据分析相关库\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day66"
    }
  },
  {
    "id": "ch10-py100-day067",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：环境准备",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《环境准备》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《环境准备》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "安装和使用anaconda",
      "conda相关命令",
      "安装和使用jupyter-lab",
      "安装和启动",
      "使用小技巧"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day67\"\ntitle = \"环境准备\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 97,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《环境准备》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day67 环境准备：5项，首项：安装和使用anaconda\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《环境准备》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"安装和使用anaconda\",\"conda相关命令\",\"安装和使用jupyter-lab\",\"安装和启动\",\"使用小技巧\"]\n输出：Day67 环境准备：5项，首项：安装和使用anaconda",
    "referenceAnswer": "day = \"Day67\"\ntitle = \"环境准备\"\ntopics = [\n  \"安装和使用anaconda\",\n  \"conda相关命令\",\n  \"安装和使用jupyter-lab\",\n  \"安装和启动\",\n  \"使用小技巧\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day67"
    }
  },
  {
    "id": "ch10-py100-day068",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：NumPy的应用-1",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《NumPy的应用-1》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《NumPy的应用-1》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "创建数组对象",
      "数组对象的属性",
      "数组对象的索引运算",
      "普通索引",
      "花式索引",
      "布尔索引"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day68\"\ntitle = \"NumPy的应用-1\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 98,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《NumPy的应用-1》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day68 NumPy的应用-1：8项，首项：创建数组对象\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《NumPy的应用-1》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"创建数组对象\",\"数组对象的属性\",\"数组对象的索引运算\",\"普通索引\",\"花式索引\",\"布尔索引\",\"切片索引\",\"案例：使用数组处理图像\"]\n输出：Day68 NumPy的应用-1：8项，首项：创建数组对象",
    "referenceAnswer": "day = \"Day68\"\ntitle = \"NumPy的应用-1\"\ntopics = [\n  \"创建数组对象\",\n  \"数组对象的属性\",\n  \"数组对象的索引运算\",\n  \"普通索引\",\n  \"花式索引\",\n  \"布尔索引\",\n  \"切片索引\",\n  \"案例：使用数组处理图像\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day68"
    }
  },
  {
    "id": "ch10-py100-day069",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：NumPy的应用-2",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《NumPy的应用-2》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《NumPy的应用-2》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数组对象的相关方法",
      "获取描述性统计信息",
      "其他相关方法"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day69\"\ntitle = \"NumPy的应用-2\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 99,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《NumPy的应用-2》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day69 NumPy的应用-2：3项，首项：数组对象的相关方法\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《NumPy的应用-2》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数组对象的相关方法\",\"获取描述性统计信息\",\"其他相关方法\"]\n输出：Day69 NumPy的应用-2：3项，首项：数组对象的相关方法",
    "referenceAnswer": "day = \"Day69\"\ntitle = \"NumPy的应用-2\"\ntopics = [\n  \"数组对象的相关方法\",\n  \"获取描述性统计信息\",\n  \"其他相关方法\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day69"
    }
  },
  {
    "id": "ch10-py100-day070",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：NumPy的应用-3",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《NumPy的应用-3》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《NumPy的应用-3》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数组的运算",
      "数组跟标量的运算",
      "数组跟数组的运算",
      "通用一元函数",
      "通用二元函数",
      "广播机制"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day70\"\ntitle = \"NumPy的应用-3\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 100,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《NumPy的应用-3》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day70 NumPy的应用-3：7项，首项：数组的运算\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《NumPy的应用-3》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数组的运算\",\"数组跟标量的运算\",\"数组跟数组的运算\",\"通用一元函数\",\"通用二元函数\",\"广播机制\",\"Numpy常用函数\"]\n输出：Day70 NumPy的应用-3：7项，首项：数组的运算",
    "referenceAnswer": "day = \"Day70\"\ntitle = \"NumPy的应用-3\"\ntopics = [\n  \"数组的运算\",\n  \"数组跟标量的运算\",\n  \"数组跟数组的运算\",\n  \"通用一元函数\",\n  \"通用二元函数\",\n  \"广播机制\",\n  \"Numpy常用函数\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day70"
    }
  },
  {
    "id": "ch10-py100-day071",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：NumPy的应用-4",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《NumPy的应用-4》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《NumPy的应用-4》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "向量",
      "行列式",
      "矩阵",
      "多项式"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day71\"\ntitle = \"NumPy的应用-4\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 101,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《NumPy的应用-4》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day71 NumPy的应用-4：4项，首项：向量\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《NumPy的应用-4》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"向量\",\"行列式\",\"矩阵\",\"多项式\"]\n输出：Day71 NumPy的应用-4：4项，首项：向量",
    "referenceAnswer": "day = \"Day71\"\ntitle = \"NumPy的应用-4\"\ntopics = [\n  \"向量\",\n  \"行列式\",\n  \"矩阵\",\n  \"多项式\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day71"
    }
  },
  {
    "id": "ch10-py100-day072",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-1",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-1》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-1》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "创建Series对象",
      "Series对象的运算",
      "Series对象的属性和方法"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day72\"\ntitle = \"深入浅出pandas-1\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 102,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-1》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day72 深入浅出pandas-1：3项，首项：创建Series对象\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-1》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"创建Series对象\",\"Series对象的运算\",\"Series对象的属性和方法\"]\n输出：Day72 深入浅出pandas-1：3项，首项：创建Series对象",
    "referenceAnswer": "day = \"Day72\"\ntitle = \"深入浅出pandas-1\"\ntopics = [\n  \"创建Series对象\",\n  \"Series对象的运算\",\n  \"Series对象的属性和方法\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day72"
    }
  },
  {
    "id": "ch10-py100-day073",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-2",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-2》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-2》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "创建DataFrame对象",
      "DataFrame对象的属性和方法",
      "读写DataFrame中的数据"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day73\"\ntitle = \"深入浅出pandas-2\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 103,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-2》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day73 深入浅出pandas-2：3项，首项：创建DataFrame对象\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-2》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"创建DataFrame对象\",\"DataFrame对象的属性和方法\",\"读写DataFrame中的数据\"]\n输出：Day73 深入浅出pandas-2：3项，首项：创建DataFrame对象",
    "referenceAnswer": "day = \"Day73\"\ntitle = \"深入浅出pandas-2\"\ntopics = [\n  \"创建DataFrame对象\",\n  \"DataFrame对象的属性和方法\",\n  \"读写DataFrame中的数据\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day73"
    }
  },
  {
    "id": "ch10-py100-day074",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-3",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-3》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-3》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数据重塑",
      "数据拼接",
      "数据合并",
      "数据清洗",
      "缺失值",
      "重复值"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day74\"\ntitle = \"深入浅出pandas-3\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 104,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-3》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day74 深入浅出pandas-3：8项，首项：数据重塑\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-3》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数据重塑\",\"数据拼接\",\"数据合并\",\"数据清洗\",\"缺失值\",\"重复值\",\"异常值\",\"预处理\"]\n输出：Day74 深入浅出pandas-3：8项，首项：数据重塑",
    "referenceAnswer": "day = \"Day74\"\ntitle = \"深入浅出pandas-3\"\ntopics = [\n  \"数据重塑\",\n  \"数据拼接\",\n  \"数据合并\",\n  \"数据清洗\",\n  \"缺失值\",\n  \"重复值\",\n  \"异常值\",\n  \"预处理\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day74"
    }
  },
  {
    "id": "ch10-py100-day075",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-4",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-4》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-4》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数据透视",
      "获取描述性统计信息",
      "排序和头部值",
      "分组聚合",
      "透视表和交叉表",
      "数据呈现"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day75\"\ntitle = \"深入浅出pandas-4\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 105,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-4》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day75 深入浅出pandas-4：6项，首项：数据透视\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-4》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数据透视\",\"获取描述性统计信息\",\"排序和头部值\",\"分组聚合\",\"透视表和交叉表\",\"数据呈现\"]\n输出：Day75 深入浅出pandas-4：6项，首项：数据透视",
    "referenceAnswer": "day = \"Day75\"\ntitle = \"深入浅出pandas-4\"\ntopics = [\n  \"数据透视\",\n  \"获取描述性统计信息\",\n  \"排序和头部值\",\n  \"分组聚合\",\n  \"透视表和交叉表\",\n  \"数据呈现\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day75"
    }
  },
  {
    "id": "ch10-py100-day076",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-5",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-5》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-5》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "计算同比环比",
      "窗口计算",
      "相关性判定"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day76\"\ntitle = \"深入浅出pandas-5\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 106,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-5》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day76 深入浅出pandas-5：3项，首项：计算同比环比\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-5》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"计算同比环比\",\"窗口计算\",\"相关性判定\"]\n输出：Day76 深入浅出pandas-5：3项，首项：计算同比环比",
    "referenceAnswer": "day = \"Day76\"\ntitle = \"深入浅出pandas-5\"\ntopics = [\n  \"计算同比环比\",\n  \"窗口计算\",\n  \"相关性判定\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day76"
    }
  },
  {
    "id": "ch10-py100-day077",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：深入浅出pandas-6",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《深入浅出pandas-6》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《深入浅出pandas-6》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "索引的使用",
      "范围索引",
      "分类索引",
      "多级索引",
      "间隔索引",
      "日期时间索引"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day77\"\ntitle = \"深入浅出pandas-6\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 107,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《深入浅出pandas-6》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day77 深入浅出pandas-6：6项，首项：索引的使用\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《深入浅出pandas-6》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"索引的使用\",\"范围索引\",\"分类索引\",\"多级索引\",\"间隔索引\",\"日期时间索引\"]\n输出：Day77 深入浅出pandas-6：6项，首项：索引的使用",
    "referenceAnswer": "day = \"Day77\"\ntitle = \"深入浅出pandas-6\"\ntopics = [\n  \"索引的使用\",\n  \"范围索引\",\n  \"分类索引\",\n  \"多级索引\",\n  \"间隔索引\",\n  \"日期时间索引\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day77"
    }
  },
  {
    "id": "ch10-py100-day078",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：数据可视化-1",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《数据可视化-1》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《数据可视化-1》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "安装和导入matplotlib",
      "创建画布",
      "创建坐标系",
      "绘制图表",
      "折线图",
      "散点图"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day78\"\ntitle = \"数据可视化-1\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 108,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《数据可视化-1》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day78 数据可视化-1：11项，首项：安装和导入matplotlib\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《数据可视化-1》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"安装和导入matplotlib\",\"创建画布\",\"创建坐标系\",\"绘制图表\",\"折线图\",\"散点图\",\"柱状图\",\"饼状图\",\"直方图\",\"箱线图\",\"显示和保存图表\"]\n输出：Day78 数据可视化-1：11项，首项：安装和导入matplotlib",
    "referenceAnswer": "day = \"Day78\"\ntitle = \"数据可视化-1\"\ntopics = [\n  \"安装和导入matplotlib\",\n  \"创建画布\",\n  \"创建坐标系\",\n  \"绘制图表\",\n  \"折线图\",\n  \"散点图\",\n  \"柱状图\",\n  \"饼状图\",\n  \"直方图\",\n  \"箱线图\",\n  \"显示和保存图表\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day78"
    }
  },
  {
    "id": "ch10-py100-day079",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：数据可视化-2",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《数据可视化-2》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《数据可视化-2》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "高阶图表",
      "气泡图",
      "面积图",
      "雷达图",
      "玫瑰图",
      "3D图表"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day79\"\ntitle = \"数据可视化-2\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 109,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《数据可视化-2》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day79 数据可视化-2：6项，首项：高阶图表\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《数据可视化-2》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"高阶图表\",\"气泡图\",\"面积图\",\"雷达图\",\"玫瑰图\",\"3D图表\"]\n输出：Day79 数据可视化-2：6项，首项：高阶图表",
    "referenceAnswer": "day = \"Day79\"\ntitle = \"数据可视化-2\"\ntopics = [\n  \"高阶图表\",\n  \"气泡图\",\n  \"面积图\",\n  \"雷达图\",\n  \"玫瑰图\",\n  \"3D图表\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day79"
    }
  },
  {
    "id": "ch10-py100-day080",
    "chapterId": "ch10",
    "chapterTitle": "第十篇：群雄情报局",
    "title": "情报统筹：数据可视化-3",
    "npc": "乔峰",
    "difficulty": "融会贯通",
    "story": "群雄情报局开张，乔峰让你用数据分析方法处理各派卷宗。此卷心法记录《数据可视化-3》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《数据可视化-3》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Seaborn",
      "Pyecharts"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day80\"\ntitle = \"数据可视化-3\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 110,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《数据可视化-3》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day80 数据可视化-3：2项，首项：Seaborn\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《数据可视化-3》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Seaborn\",\"Pyecharts\"]\n输出：Day80 数据可视化-3：2项，首项：Seaborn",
    "referenceAnswer": "day = \"Day80\"\ntitle = \"数据可视化-3\"\ntopics = [\n  \"Seaborn\",\n  \"Pyecharts\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day80"
    }
  },
  {
    "id": "ch11-q01",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "丐帮卷宗点名",
    "npc": "乔峰",
    "difficulty": "自动化",
    "story": "丐帮卷宗房堆满分舵文件，乔峰要先知道到底有哪些卷宗。",
    "objective": "用 os.listdir 获取文件名列表，并筛出 txt 或 xlsx 文件。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "os.listdir",
      "文件筛选",
      "列表推导式"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport os\nfiles = os.listdir('.')\nrecords = [name for name in files if name.endswith('.txt')]\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import os",
      "listdir",
      "endswith",
      "print"
    ],
    "reward": {
      "exp": 60,
      "trust": 1,
      "reputation": 0,
      "money": 0,
      "art": ""
    },
    "successMessage": "卷宗清单一出，丐帮弟子终于不用满屋乱翻。",
    "hint": "文件名也是字符串，筛选扩展名可以用 endswith。\n先看“期望输出”，本关最终要做到：输出格式：txt卷宗：<所有以 .txt 结尾的文件名列表>\n关键知识：os 模块可以查看目录、文件名等系统信息。 os.listdir(path) 会返回目录里的文件名列表。 endswith() 用来判断字符串是否以某个后缀结尾。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出格式：txt卷宗：<所有以 .txt 结尾的文件名列表>\n示例：txt卷宗：['letters.txt']",
    "referenceAnswer": "import os\nfiles = os.listdir('.')\nrecords = [name for name in files if name.endswith('.txt')]\nprint('txt卷宗：' + str(records))"
  },
  {
    "id": "ch11-q02",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "密信筛伪",
    "npc": "阿朱",
    "difficulty": "自动化",
    "story": "一批密信真假难辨，阿朱请你筛出含有“段延庆”的行，确认是不是西夏一品堂旧线再次出现。",
    "objective": "读取 letters.txt，逐行遍历，打印所有包含关键词“段延庆”的内容，并去掉行尾换行。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "with open",
      "文件读取",
      "关键词筛选"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nkeyword = '段延庆'\nwith open('letters.txt', 'r', encoding='utf-8') as f:\n    for line in f:\n        if keyword in line:\n            # 按期望输出写 print(...)",
    "expectedKeywords": [
      "with open",
      "for",
      "if",
      "strip",
      "print"
    ],
    "reward": {
      "exp": 70,
      "trust": 2,
      "reputation": 1,
      "money": 0,
      "art": ""
    },
    "successMessage": "密信被逐行筛出，段延庆的名字再一次指向西夏一品堂。",
    "hint": "逐行读取适合筛选文本，strip 可以去掉行尾换行。本关关键词固定是“段延庆”，它承接前面的玉洞线索和百晓生名录。\n先看“期望输出”，本关最终要做到：输出 letters.txt 中所有包含“段延庆”的行，去掉行尾换行。\n关键知识：with open 会自动管理文件打开和关闭。 for line in f 会逐行读取。 if keyword in line 判断是否命中关键词。 strip() 会去掉字符串首尾空白和换行。\n写法建议：keyword = '段延庆'，命中后 print(line.strip())。\n常见错误：把 keyword 写成列表、忘记 encoding='utf-8'、打印时没有 strip 导致多余空行。",
    "expectedOutput": "输出：文件中所有包含“段延庆”的行，去掉行尾换行。\n示例：段延庆夜会西夏一品堂",
    "referenceAnswer": "keyword = '段延庆'\nwith open('letters.txt', 'r', encoding='utf-8') as f:\n    for line in f:\n        if keyword in line:\n            print(line.strip())"
  },
  {
    "id": "ch11-q03",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "分舵功绩图",
    "npc": "王语嫣",
    "difficulty": "自动化",
    "story": "各分舵功劳难以比较，王语嫣要一张带样式和图表的 Excel 英雄榜。",
    "objective": "用 openpyxl 写入数据，并创建一个柱状图对象。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "openpyxl",
      "Excel 写入",
      "图表"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nfrom openpyxl import Workbook\nfrom openpyxl.chart import BarChart\n\nwb = Workbook()\nws = wb.active\n# 写出这一行代码\n# 写出这一行代码\nchart = BarChart()\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "Workbook",
      "BarChart",
      "append",
      "print"
    ],
    "reward": {
      "exp": 120,
      "trust": 1,
      "reputation": 4,
      "money": 50,
      "art": "卷宗机关术"
    },
    "successMessage": "英雄榜排版成形，分舵功绩一眼可见。",
    "hint": "openpyxl 负责操作 Excel，图表通常由数据引用生成。\n先看“期望输出”，本关最终要做到：输出：行数：2，图表类型：barCol\n关键知识：Workbook 是 openpyxl 创建 Excel 工作簿的入口。 BarChart 用来创建 Excel 柱状图对象。 append 会把元素加入列表末尾，也可给 Excel 工作表追加一行。 print() 负责把结果显示出来，初学时可以把它当成“验收出口”。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "输出：行数：2，图表类型：barCol",
    "referenceAnswer": "from openpyxl import Workbook\nfrom openpyxl.chart import BarChart\n\nwb = Workbook()\nws = wb.active\nws.append(['分舵', '功绩'])\nws.append(['大理', 80])\nchart = BarChart()\nprint('行数：' + str(ws.max_row) + '，图表类型：' + chart.type)"
  },
  {
    "id": "ch11-py100-day081",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：浅谈机器学习",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《浅谈机器学习》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《浅谈机器学习》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "人工智能发展史",
      "什么是机器学习",
      "机器学习应用领域",
      "机器学习的分类",
      "机器学习的步骤",
      "第一次机器学习"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day81\"\ntitle = \"浅谈机器学习\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 111,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《浅谈机器学习》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day81 浅谈机器学习：6项，首项：人工智能发展史\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《浅谈机器学习》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"人工智能发展史\",\"什么是机器学习\",\"机器学习应用领域\",\"机器学习的分类\",\"机器学习的步骤\",\"第一次机器学习\"]\n输出：Day81 浅谈机器学习：6项，首项：人工智能发展史",
    "referenceAnswer": "day = \"Day81\"\ntitle = \"浅谈机器学习\"\ntopics = [\n  \"人工智能发展史\",\n  \"什么是机器学习\",\n  \"机器学习应用领域\",\n  \"机器学习的分类\",\n  \"机器学习的步骤\",\n  \"第一次机器学习\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day81"
    }
  },
  {
    "id": "ch11-py100-day082",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：k最近邻算法",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《k最近邻算法》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《k最近邻算法》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "距离的度量",
      "数据集介绍",
      "kNN分类的实现",
      "模型评估",
      "参数调优",
      "kNN回归的实现"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day82\"\ntitle = \"k最近邻算法\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 112,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《k最近邻算法》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day82 k最近邻算法：6项，首项：距离的度量\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《k最近邻算法》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"距离的度量\",\"数据集介绍\",\"kNN分类的实现\",\"模型评估\",\"参数调优\",\"kNN回归的实现\"]\n输出：Day82 k最近邻算法：6项，首项：距离的度量",
    "referenceAnswer": "day = \"Day82\"\ntitle = \"k最近邻算法\"\ntopics = [\n  \"距离的度量\",\n  \"数据集介绍\",\n  \"kNN分类的实现\",\n  \"模型评估\",\n  \"参数调优\",\n  \"kNN回归的实现\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day82"
    }
  },
  {
    "id": "ch11-py100-day083",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：决策树和随机森林",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《决策树和随机森林》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《决策树和随机森林》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "决策树的构建",
      "特征选择",
      "数据分裂",
      "树的剪枝",
      "实现决策树模型",
      "随机森林概述"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day83\"\ntitle = \"决策树和随机森林\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 113,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《决策树和随机森林》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day83 决策树和随机森林：6项，首项：决策树的构建\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《决策树和随机森林》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"决策树的构建\",\"特征选择\",\"数据分裂\",\"树的剪枝\",\"实现决策树模型\",\"随机森林概述\"]\n输出：Day83 决策树和随机森林：6项，首项：决策树的构建",
    "referenceAnswer": "day = \"Day83\"\ntitle = \"决策树和随机森林\"\ntopics = [\n  \"决策树的构建\",\n  \"特征选择\",\n  \"数据分裂\",\n  \"树的剪枝\",\n  \"实现决策树模型\",\n  \"随机森林概述\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day83"
    }
  },
  {
    "id": "ch11-py100-day084",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：朴素贝叶斯算法",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《朴素贝叶斯算法》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《朴素贝叶斯算法》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "贝叶斯定理",
      "朴素贝叶斯",
      "算法原理",
      "训练阶段",
      "预测阶段",
      "代码实现"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day84\"\ntitle = \"朴素贝叶斯算法\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 114,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《朴素贝叶斯算法》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day84 朴素贝叶斯算法：7项，首项：贝叶斯定理\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《朴素贝叶斯算法》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"贝叶斯定理\",\"朴素贝叶斯\",\"算法原理\",\"训练阶段\",\"预测阶段\",\"代码实现\",\"算法优缺点\"]\n输出：Day84 朴素贝叶斯算法：7项，首项：贝叶斯定理",
    "referenceAnswer": "day = \"Day84\"\ntitle = \"朴素贝叶斯算法\"\ntopics = [\n  \"贝叶斯定理\",\n  \"朴素贝叶斯\",\n  \"算法原理\",\n  \"训练阶段\",\n  \"预测阶段\",\n  \"代码实现\",\n  \"算法优缺点\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day84"
    }
  },
  {
    "id": "ch11-py100-day085",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：回归模型",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《回归模型》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《回归模型》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "回归模型的分类",
      "回归系数的计算",
      "新数据集介绍",
      "线性回归代码实现",
      "回归模型的评估",
      "引入正则化项"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day85\"\ntitle = \"回归模型\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 115,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《回归模型》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day85 回归模型：9项，首项：回归模型的分类\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《回归模型》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"回归模型的分类\",\"回归系数的计算\",\"新数据集介绍\",\"线性回归代码实现\",\"回归模型的评估\",\"引入正则化项\",\"线性回归另一种实现\",\"多项式回归\",\"逻辑回归\"]\n输出：Day85 回归模型：9项，首项：回归模型的分类",
    "referenceAnswer": "day = \"Day85\"\ntitle = \"回归模型\"\ntopics = [\n  \"回归模型的分类\",\n  \"回归系数的计算\",\n  \"新数据集介绍\",\n  \"线性回归代码实现\",\n  \"回归模型的评估\",\n  \"引入正则化项\",\n  \"线性回归另一种实现\",\n  \"多项式回归\",\n  \"逻辑回归\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day85"
    }
  },
  {
    "id": "ch11-py100-day086",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：K-Means聚类算法",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《K-Means聚类算法》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《K-Means聚类算法》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "算法原理",
      "数学描述",
      "代码实现"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day86\"\ntitle = \"K-Means聚类算法\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 116,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《K-Means聚类算法》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day86 K-Means聚类算法：3项，首项：算法原理\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《K-Means聚类算法》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"算法原理\",\"数学描述\",\"代码实现\"]\n输出：Day86 K-Means聚类算法：3项，首项：算法原理",
    "referenceAnswer": "day = \"Day86\"\ntitle = \"K-Means聚类算法\"\ntopics = [\n  \"算法原理\",\n  \"数学描述\",\n  \"代码实现\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day86"
    }
  },
  {
    "id": "ch11-py100-day087",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：集成学习算法",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《集成学习算法》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《集成学习算法》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "算法分类",
      "AdaBoost",
      "GBDT",
      "XGBoost",
      "LightGBM"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day87\"\ntitle = \"集成学习算法\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 117,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《集成学习算法》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day87 集成学习算法：5项，首项：算法分类\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《集成学习算法》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"算法分类\",\"AdaBoost\",\"GBDT\",\"XGBoost\",\"LightGBM\"]\n输出：Day87 集成学习算法：5项，首项：算法分类",
    "referenceAnswer": "day = \"Day87\"\ntitle = \"集成学习算法\"\ntopics = [\n  \"算法分类\",\n  \"AdaBoost\",\n  \"GBDT\",\n  \"XGBoost\",\n  \"LightGBM\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day87"
    }
  },
  {
    "id": "ch11-py100-day088",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：神经网络模型",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《神经网络模型》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《神经网络模型》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "基本构成",
      "工作原理",
      "代码实现",
      "模型优缺点"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day88\"\ntitle = \"神经网络模型\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 118,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《神经网络模型》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day88 神经网络模型：4项，首项：基本构成\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《神经网络模型》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"基本构成\",\"工作原理\",\"代码实现\",\"模型优缺点\"]\n输出：Day88 神经网络模型：4项，首项：基本构成",
    "referenceAnswer": "day = \"Day88\"\ntitle = \"神经网络模型\"\ntopics = [\n  \"基本构成\",\n  \"工作原理\",\n  \"代码实现\",\n  \"模型优缺点\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day88"
    }
  },
  {
    "id": "ch11-py100-day089",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：自然语言处理入门",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《自然语言处理入门》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《自然语言处理入门》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "词袋模型",
      "词向量",
      "NPLM和RNN",
      "Seq2Seq",
      "Transformer"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day89\"\ntitle = \"自然语言处理入门\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 119,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《自然语言处理入门》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day89 自然语言处理入门：5项，首项：词袋模型\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《自然语言处理入门》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"词袋模型\",\"词向量\",\"NPLM和RNN\",\"Seq2Seq\",\"Transformer\"]\n输出：Day89 自然语言处理入门：5项，首项：词袋模型",
    "referenceAnswer": "day = \"Day89\"\ntitle = \"自然语言处理入门\"\ntopics = [\n  \"词袋模型\",\n  \"词向量\",\n  \"NPLM和RNN\",\n  \"Seq2Seq\",\n  \"Transformer\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day89"
    }
  },
  {
    "id": "ch11-py100-day090",
    "chapterId": "ch11",
    "chapterTitle": "第十一篇：丐帮卷宗房",
    "title": "卷宗推演：机器学习实战",
    "npc": "虚竹",
    "difficulty": "融会贯通",
    "story": "丐帮卷宗房堆满数表，虚竹请你把可视化和机器学习思路讲成可复盘的步骤。此卷心法记录《机器学习实战》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《机器学习实战》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数据探索",
      "特征工程",
      "模型训练",
      "模型评估",
      "模型部署"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day90\"\ntitle = \"机器学习实战\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 120,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《机器学习实战》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day90 机器学习实战：5项，首项：数据探索\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《机器学习实战》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数据探索\",\"特征工程\",\"模型训练\",\"模型评估\",\"模型部署\"]\n输出：Day90 机器学习实战：5项，首项：数据探索",
    "referenceAnswer": "day = \"Day90\"\ntitle = \"机器学习实战\"\ntopics = [\n  \"数据探索\",\n  \"特征工程\",\n  \"模型训练\",\n  \"模型评估\",\n  \"模型部署\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day90"
    }
  },
  {
    "id": "ch12-q01",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "江湖势力初探",
    "npc": "王语嫣",
    "difficulty": "数据分析",
    "story": "少室山大战前，各派人数、粮草和声望汇成一张大表。段延庆所在的西夏一品堂也混在其中，声望异常偏低。",
    "objective": "用 pandas 创建包含丐帮、大理、西夏一品堂三行的 DataFrame，查看行列规模和声望统计。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "pandas",
      "DataFrame",
      "describe()"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport pandas as pd\n\n# 写出这一行代码\n# 按期望输出写 print(...)\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import pandas",
      "DataFrame",
      "shape",
      "describe",
      "print"
    ],
    "reward": {
      "exp": 90,
      "trust": 1,
      "reputation": 1,
      "money": 0,
      "art": "星宿观象术"
    },
    "successMessage": "数据轮廓浮现，王语嫣开始相信真相藏在表中。",
    "hint": "探索数据先看 shape、字段和 describe 这类概览信息。本关 DataFrame 要有三行：丐帮、大理、西夏一品堂；数值列是声望。\n先看“期望输出”，本关最终要做到：先输出 (3, 2)，再输出声望的 describe() 统计结果。\n关键知识：pandas 通常简写为 pd。 DataFrame 是二维表格数据结构，像一张可计算的表。 shape 会告诉你数据有多少行、多少列。 describe() 会输出数值列的基础统计。\n写法建议：df = pd.DataFrame({'门派': [...], '声望': [...]})，然后 print(df.shape)，print(df.describe())。\n常见错误：门派和声望列表长度不一致、只写两行数据、忘记导入 pandas。",
    "expectedOutput": "给定 df 包含三行：丐帮90、大理75、西夏一品堂42\n输出两部分：\n1. df.shape，应为：(3, 2)\n2. df.describe() 的声望统计结果",
    "referenceAnswer": "import pandas as pd\n\ndf = pd.DataFrame({'门派': ['丐帮', '大理', '西夏一品堂'], '声望': [90, 75, 42]})\nprint(df.shape)\nprint(df.describe())"
  },
  {
    "id": "ch12-q02",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "药材账册洗冤",
    "npc": "虚竹",
    "difficulty": "数据分析",
    "story": "灵鹫宫药材账册有缺失、重复和异常值。你在玉洞记下的断肠草与悲酥清风解药都出现在账上，虚竹怕冤枉好人。",
    "objective": "用 pandas 创建药材账册，包含断肠草重复记录、悲酥清风解药和缺失药材名；调用 drop_duplicates、fillna 清洗后打印。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "drop_duplicates()",
      "fillna()",
      "布尔筛选"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport pandas as pd\n\n# 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "drop_duplicates",
      "fillna",
      "print"
    ],
    "reward": {
      "exp": 120,
      "trust": 2,
      "reputation": 2,
      "money": 60,
      "art": ""
    },
    "successMessage": "脏数据被洗净，悲酥清风解药没有凭空消失，断肠草也只记一次。",
    "hint": "清洗常见三件事：处理重复、缺失和异常。本关先处理重复和缺失：断肠草重复两次，要删到一条；None 要填成“未知”。\n先看“期望输出”，本关最终要做到：输出清洗后的 DataFrame，保留断肠草、悲酥清风解药、未知三条药材。\n关键知识：drop_duplicates() 用于删除完全重复的行。 fillna('未知') 用于填补缺失值。 print(df) 可以直接查看清洗后的表格。\n写法建议：先创建 df，再写 df = df.drop_duplicates().fillna('未知')，最后 print(df)。\n常见错误：只对某一列去重导致数量错位、fillna 没有重新赋值、把 None 写成字符串 'None'。",
    "expectedOutput": "给定 df：\n药材 = ['断肠草', '断肠草', '悲酥清风解药', None]\n数量 = [2, 2, 1, 0]\n输出：清洗后的 DataFrame；重复的断肠草只保留一条，缺失药材名显示为“未知”。",
    "referenceAnswer": "import pandas as pd\n\ndf = pd.DataFrame({'药材': ['断肠草', '断肠草', '悲酥清风解药', None], '数量': [2, 2, 1, 0]})\ndf = df.drop_duplicates().fillna('未知')\nprint(df)"
  },
  {
    "id": "ch12-q03",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室山星图",
    "npc": "无名扫地僧",
    "difficulty": "数据分析",
    "story": "扫地僧让你把声望走势画成图，别只用口头争辩江湖真相。",
    "objective": "用 matplotlib 画出门派声望柱状图或折线图，并设置标题。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "matplotlib",
      "plot/bar",
      "可视化结论"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport matplotlib.pyplot as plt\nsects = ['丐帮', '少林', '大理']\nscores = [90, 88, 75]\n# 写出这一行代码\n# 写出这一行代码\n# 显示图表",
    "expectedKeywords": [
      "matplotlib",
      "plt.bar",
      "plt.title",
      "plt.show"
    ],
    "reward": {
      "exp": 150,
      "trust": 2,
      "reputation": 5,
      "money": 0,
      "art": "江湖星图"
    },
    "successMessage": "星图展开，少室山风波的走向终于能被众人看见。",
    "hint": "图表要有数据、图形类型和标题，最后再 show。\n先看“期望输出”，本关最终要做到：生成图表：门派声望柱状图\n关键知识：matplotlib 是常用绘图库，pyplot 通常简写为 plt。 plt.bar(x, y) 用于绘制柱状图。 plt.title() 用于设置图表标题。 plt.show() 用于显示图表。\n写法建议：先准备数据，再写处理逻辑，最后用 print 或指定文件/图表完成验收。\n常见错误：只写变量不输出、字符串少了引号、缩进不一致、把中文标点写进代码结构里。",
    "expectedOutput": "生成图表：门派声望柱状图\n图表标题：少室山声望图",
    "referenceAnswer": "import matplotlib.pyplot as plt\nsects = ['丐帮', '少林', '大理']\nscores = [90, 88, 75]\nplt.bar(sects, scores)\nplt.title('少室山声望图')\nplt.show()"
  },
  {
    "id": "ch12-py100-day091",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：团队项目开发的问题和解决方案",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《团队项目开发的问题和解决方案》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《团队项目开发的问题和解决方案》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "软件过程模型",
      "经典过程模型（瀑布模型）",
      "可行性分析（研究做还是不做），输出《可行性分析报告》",
      "需求分析（研究做什么），输出《需求规格说明书》和产品界面原型图",
      "概要设计和详细设计，输出概念模型图（ER图）、物理模型图、类图、时序图等",
      "编码 / 测试"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day91\"\ntitle = \"团队项目开发的问题和解决方案\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 121,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《团队项目开发的问题和解决方案》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day91 团队项目开发的问题和解决方案：14项，首项：软件过程模型\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《团队项目开发的问题和解决方案》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"软件过程模型\",\"经典过程模型（瀑布模型）\",\"可行性分析（研究做还是不做），输出《可行性分析报告》\",\"需求分析（研究做什么），输出《需求规格说明书》和产品界面原型图\",\"概要设计和详细设计，输出概念模型图（ER图）、物理模型图、类图、时序图等\",\"编码 / 测试\",\"上线 / 维护\",\"敏捷开发（Scrum）- 产品所有者、Scrum Master、研发人员 - Sprint\",\"产品的Backlog（用户故事、产品原型）\",\"计划会议（评估和预算）\",\"日常开发（站立会议、番茄工作法、结对编程、测试先行、代码重构……）\",\"修复bug（问题描述、重现步骤、测试人员、被指派人）\",\"发布版本\",\"评审会议（Showcase，用户需要参与）\"]\n输出：Day91 团队项目开发的问题和解决方案：14项，首项：软件过程模型",
    "referenceAnswer": "day = \"Day91\"\ntitle = \"团队项目开发的问题和解决方案\"\ntopics = [\n  \"软件过程模型\",\n  \"经典过程模型（瀑布模型）\",\n  \"可行性分析（研究做还是不做），输出《可行性分析报告》\",\n  \"需求分析（研究做什么），输出《需求规格说明书》和产品界面原型图\",\n  \"概要设计和详细设计，输出概念模型图（ER图）、物理模型图、类图、时序图等\",\n  \"编码 / 测试\",\n  \"上线 / 维护\",\n  \"敏捷开发（Scrum）- 产品所有者、Scrum Master、研发人员 - Sprint\",\n  \"产品的Backlog（用户故事、产品原型）\",\n  \"计划会议（评估和预算）\",\n  \"日常开发（站立会议、番茄工作法、结对编程、测试先行、代码重构……）\",\n  \"修复bug（问题描述、重现步骤、测试人员、被指派人）\",\n  \"发布版本\",\n  \"评审会议（Showcase，用户需要参与）\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day91"
    }
  },
  {
    "id": "ch12-py100-day092",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：Docker容器技术详解",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《Docker容器技术详解》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《Docker容器技术详解》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "Docker简介",
      "安装Docker",
      "使用Docker创建容器（Nginx、MySQL、Redis、Gitlab、Jenkins）",
      "构建Docker镜像（Dockerfile的编写和相关指令）",
      "容器编排（Docker-compose）",
      "集群管理（Kubernetes）"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day92\"\ntitle = \"Docker容器技术详解\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 122,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《Docker容器技术详解》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day92 Docker容器技术详解：6项，首项：Docker简介\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《Docker容器技术详解》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"Docker简介\",\"安装Docker\",\"使用Docker创建容器（Nginx、MySQL、Redis、Gitlab、Jenkins）\",\"构建Docker镜像（Dockerfile的编写和相关指令）\",\"容器编排（Docker-compose）\",\"集群管理（Kubernetes）\"]\n输出：Day92 Docker容器技术详解：6项，首项：Docker简介",
    "referenceAnswer": "day = \"Day92\"\ntitle = \"Docker容器技术详解\"\ntopics = [\n  \"Docker简介\",\n  \"安装Docker\",\n  \"使用Docker创建容器（Nginx、MySQL、Redis、Gitlab、Jenkins）\",\n  \"构建Docker镜像（Dockerfile的编写和相关指令）\",\n  \"容器编排（Docker-compose）\",\n  \"集群管理（Kubernetes）\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day92"
    }
  },
  {
    "id": "ch12-py100-day093",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：MySQL性能优化",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《MySQL性能优化》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《MySQL性能优化》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "基本原则",
      "InnoDB引擎",
      "索引的使用和注意事项",
      "数据分区",
      "SQL优化",
      "配置优化"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day93\"\ntitle = \"MySQL性能优化\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 123,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《MySQL性能优化》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day93 MySQL性能优化：7项，首项：基本原则\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《MySQL性能优化》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"基本原则\",\"InnoDB引擎\",\"索引的使用和注意事项\",\"数据分区\",\"SQL优化\",\"配置优化\",\"架构优化\"]\n输出：Day93 MySQL性能优化：7项，首项：基本原则",
    "referenceAnswer": "day = \"Day93\"\ntitle = \"MySQL性能优化\"\ntopics = [\n  \"基本原则\",\n  \"InnoDB引擎\",\n  \"索引的使用和注意事项\",\n  \"数据分区\",\n  \"SQL优化\",\n  \"配置优化\",\n  \"架构优化\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day93"
    }
  },
  {
    "id": "ch12-py100-day094",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：网络API接口设计",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《网络API接口设计》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《网络API接口设计》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "设计原则",
      "关键问题",
      "其他问题",
      "文档撰写"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day94\"\ntitle = \"网络API接口设计\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 124,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《网络API接口设计》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day94 网络API接口设计：4项，首项：设计原则\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《网络API接口设计》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"设计原则\",\"关键问题\",\"其他问题\",\"文档撰写\"]\n输出：Day94 网络API接口设计：4项，首项：设计原则",
    "referenceAnswer": "day = \"Day94\"\ntitle = \"网络API接口设计\"\ntopics = [\n  \"设计原则\",\n  \"关键问题\",\n  \"其他问题\",\n  \"文档撰写\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day94"
    }
  },
  {
    "id": "ch12-py100-day095",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：使用Django开发商业项目",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《使用Django开发商业项目》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《使用Django开发商业项目》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "数据库的配置（多数据库、主从复制、数据库路由）",
      "缓存的配置（分区缓存、键设置、超时设置、主从复制、故障恢复（哨兵））",
      "日志的配置",
      "分析和调试（Django-Debug-ToolBar）",
      "好用的Python模块（日期计算、图像处理、数据加密、三方API）"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day95\"\ntitle = \"使用Django开发商业项目\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 125,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《使用Django开发商业项目》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day95 使用Django开发商业项目：5项，首项：数据库的配置（多数据库、主从复制、数据库路由）\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《使用Django开发商业项目》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"数据库的配置（多数据库、主从复制、数据库路由）\",\"缓存的配置（分区缓存、键设置、超时设置、主从复制、故障恢复（哨兵））\",\"日志的配置\",\"分析和调试（Django-Debug-ToolBar）\",\"好用的Python模块（日期计算、图像处理、数据加密、三方API）\"]\n输出：Day95 使用Django开发商业项目：5项，首项：数据库的配置（多数据库、主从复制、数据库路由）",
    "referenceAnswer": "day = \"Day95\"\ntitle = \"使用Django开发商业项目\"\ntopics = [\n  \"数据库的配置（多数据库、主从复制、数据库路由）\",\n  \"缓存的配置（分区缓存、键设置、超时设置、主从复制、故障恢复（哨兵））\",\n  \"日志的配置\",\n  \"分析和调试（Django-Debug-ToolBar）\",\n  \"好用的Python模块（日期计算、图像处理、数据加密、三方API）\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day95"
    }
  },
  {
    "id": "ch12-py100-day096",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：软件测试和自动化测试",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《软件测试和自动化测试》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《软件测试和自动化测试》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "测试的种类",
      "编写单元测试（unittest、pytest、nose2、tox、ddt、……）",
      "测试覆盖率（coverage）"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day96\"\ntitle = \"软件测试和自动化测试\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 126,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《软件测试和自动化测试》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day96 软件测试和自动化测试：3项，首项：测试的种类\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《软件测试和自动化测试》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"测试的种类\",\"编写单元测试（unittest、pytest、nose2、tox、ddt、……）\",\"测试覆盖率（coverage）\"]\n输出：Day96 软件测试和自动化测试：3项，首项：测试的种类",
    "referenceAnswer": "day = \"Day96\"\ntitle = \"软件测试和自动化测试\"\ntopics = [\n  \"测试的种类\",\n  \"编写单元测试（unittest、pytest、nose2、tox、ddt、……）\",\n  \"测试覆盖率（coverage）\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day96"
    }
  },
  {
    "id": "ch12-py100-day097",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：电商网站技术要点剖析",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《电商网站技术要点剖析》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《电商网站技术要点剖析》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "商业模式和需求要点",
      "物理模型设计",
      "第三方登录",
      "缓存预热和查询缓存",
      "购物车的实现",
      "支付功能集成"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day97\"\ntitle = \"电商网站技术要点剖析\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 127,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《电商网站技术要点剖析》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day97 电商网站技术要点剖析：9项，首项：商业模式和需求要点\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《电商网站技术要点剖析》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"商业模式和需求要点\",\"物理模型设计\",\"第三方登录\",\"缓存预热和查询缓存\",\"购物车的实现\",\"支付功能集成\",\"秒杀和超卖问题\",\"静态资源管理\",\"全文检索方案\"]\n输出：Day97 电商网站技术要点剖析：9项，首项：商业模式和需求要点",
    "referenceAnswer": "day = \"Day97\"\ntitle = \"电商网站技术要点剖析\"\ntopics = [\n  \"商业模式和需求要点\",\n  \"物理模型设计\",\n  \"第三方登录\",\n  \"缓存预热和查询缓存\",\n  \"购物车的实现\",\n  \"支付功能集成\",\n  \"秒杀和超卖问题\",\n  \"静态资源管理\",\n  \"全文检索方案\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day97"
    }
  },
  {
    "id": "ch12-py100-day098",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：项目部署上线和性能调优",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《项目部署上线和性能调优》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《项目部署上线和性能调优》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "MySQL数据库调优",
      "Web服务器性能优化",
      "Nginx负载均衡配置",
      "Keepalived实现高可用",
      "代码性能调优",
      "多线程"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day98\"\ntitle = \"项目部署上线和性能调优\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 128,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《项目部署上线和性能调优》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day98 项目部署上线和性能调优：10项，首项：MySQL数据库调优\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《项目部署上线和性能调优》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"MySQL数据库调优\",\"Web服务器性能优化\",\"Nginx负载均衡配置\",\"Keepalived实现高可用\",\"代码性能调优\",\"多线程\",\"异步化\",\"静态资源访问优化\",\"云存储\",\"CDN\"]\n输出：Day98 项目部署上线和性能调优：10项，首项：MySQL数据库调优",
    "referenceAnswer": "day = \"Day98\"\ntitle = \"项目部署上线和性能调优\"\ntopics = [\n  \"MySQL数据库调优\",\n  \"Web服务器性能优化\",\n  \"Nginx负载均衡配置\",\n  \"Keepalived实现高可用\",\n  \"代码性能调优\",\n  \"多线程\",\n  \"异步化\",\n  \"静态资源访问优化\",\n  \"云存储\",\n  \"CDN\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day98"
    }
  },
  {
    "id": "ch12-py100-day099",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：面试中的公共问题",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《面试中的公共问题》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《面试中的公共问题》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "计算机基础",
      "Python基础",
      "Web框架相关",
      "爬虫相关问题",
      "数据分析",
      "项目相关"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day99\"\ntitle = \"面试中的公共问题\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 129,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《面试中的公共问题》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day99 面试中的公共问题：6项，首项：计算机基础\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《面试中的公共问题》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"计算机基础\",\"Python基础\",\"Web框架相关\",\"爬虫相关问题\",\"数据分析\",\"项目相关\"]\n输出：Day99 面试中的公共问题：6项，首项：计算机基础",
    "referenceAnswer": "day = \"Day99\"\ntitle = \"面试中的公共问题\"\ntopics = [\n  \"计算机基础\",\n  \"Python基础\",\n  \"Web框架相关\",\n  \"爬虫相关问题\",\n  \"数据分析\",\n  \"项目相关\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day99"
    }
  },
  {
    "id": "ch12-py100-day100",
    "chapterId": "ch12",
    "chapterTitle": "第十二篇：武林数据大会",
    "title": "少室合参：补充内容",
    "npc": "无名扫地僧",
    "difficulty": "融会贯通",
    "story": "少室山大会之前，扫地僧让你把项目、部署、测试和面试知识合成最后的江湖报告。此卷心法记录《补充内容》精要，后续诸多关卡皆与此息息相关。",
    "objective": "整理《补充内容》的修炼要目：以 topics 列表录下各知识心法，依期望输出格式打印篇目总结，方可在石壁前完成此关修炼。完成后可点“详细学习”查阅原卷心法。",
    "knowledge": [
      "面试宝典",
      "Python 面试宝典",
      "SQL 面试宝典（数据分析师）",
      "商业分析面试宝典",
      "机器学习面试宝典",
      "机器学习数学基础"
    ],
    "starterCode": "# 补全代码：先写知识点列表，再按期望输出生成摘要\nday = \"Day100\"\ntitle = \"补充内容\"\n\ntopics = [\n    # 逐项写入“期望输出”中的知识点字符串\n]\n\n# 用 len(topics) 统计数量，用 topics[0] 取首项，再 print 输出",
    "expectedKeywords": [
      "topics",
      "[",
      "len",
      "print"
    ],
    "reward": {
      "exp": 130,
      "trust": 1,
      "reputation": 0,
      "money": 6,
      "art": ""
    },
    "successMessage": "《补充内容》要义已悉数融入功力，石壁心诀尽数领悟，可继续深入修炼。",
    "hint": "先把本关知识点写成 topics 列表，每个知识点都是字符串；再用 len(topics) 统计数量，用 topics[0] 取第一项。\n先看“期望输出”，本关最终要做到：输出：Day100 补充内容：9项，首项：面试宝典\n关键知识：列表适合保存有顺序的学习清单；f-string 适合把章节名、数量和首项拼成一句话。\n写法建议：保留 day 变量与标题《补充内容》，不要只手写最终文字，真正创建 topics 并从列表计算数量。\n常见错误：把 topics 写成一个长字符串、漏掉某个知识点、输出里的冒号和中文逗号格式不一致。",
    "expectedOutput": "给定 topics = [\"面试宝典\",\"Python 面试宝典\",\"SQL 面试宝典（数据分析师）\",\"商业分析面试宝典\",\"机器学习面试宝典\",\"机器学习数学基础\",\"深度学习\",\"计算机视觉\",\"大语言模型\"]\n输出：Day100 补充内容：9项，首项：面试宝典",
    "referenceAnswer": "day = \"Day100\"\ntitle = \"补充内容\"\ntopics = [\n  \"面试宝典\",\n  \"Python 面试宝典\",\n  \"SQL 面试宝典（数据分析师）\",\n  \"商业分析面试宝典\",\n  \"机器学习面试宝典\",\n  \"机器学习数学基础\",\n  \"深度学习\",\n  \"计算机视觉\",\n  \"大语言模型\"\n]\nprint(f'{day} {title}：{len(topics)}项，首项：{topics[0]}')",
    "resource": {
      "label": "详细学习",
      "href": "python-100-days.html#py100-day100"
    }
  },
  {
    "id": "ch13-q01",
    "chapterId": "ch13",
    "chapterTitle": "终章：少室山真相",
    "title": "丐帮万卷归一",
    "npc": "乔峰",
    "difficulty": "综合",
    "story": "无相码阁篡改多处分舵账册，乔峰要你合并万卷。大理账册写着雁门关旧信，洛阳账册却出现西夏一品堂银两。",
    "objective": "设计批量合并账册流程：构造 dali.xlsx 和 luoyang.xlsx 两条来源数据，字段至少包含来源、线索、银两，concat 后打印 report。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "批量处理",
      "pandas concat",
      "异常标记"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport pandas as pd\nfiles = ['dali.xlsx', 'luoyang.xlsx']\nclues = {'dali.xlsx': '雁门关旧信', 'luoyang.xlsx': '西夏一品堂银两'}\nframes = []\nfor file in files:\n    # 写出这一行代码\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "import pandas",
      "for",
      "concat",
      "print"
    ],
    "reward": {
      "exp": 180,
      "trust": 3,
      "reputation": 8,
      "money": 100,
      "art": ""
    },
    "successMessage": "万卷归一，假账暗线从银两流向中现形。",
    "hint": "综合项目先写流程骨架：读取多文件、合并、筛选、输出。本关不用真的读 Excel，先用 DataFrame 模拟每个文件的读取结果。\n先看“期望输出”，本关最终要做到：report 至少有两行，包含 dali.xlsx/雁门关旧信 和 luoyang.xlsx/西夏一品堂银两，并有银两字段。\n关键知识：pandas 通常简写为 pd。 for 循环可以批量处理文件名。 pd.concat(frames) 可以合并多个 DataFrame。 print(report) 输出合并结果。\n写法建议：用 clues[file] 根据文件名取对应线索，再 append 一个 DataFrame 到 frames。\n常见错误：frames 为空就 concat、每次循环覆盖 frames、report 里没有线索字段。",
    "expectedOutput": "输出：合并后的 report，至少包含两行：\n来源=dali.xlsx，线索=雁门关旧信，银两=120\n来源=luoyang.xlsx，线索=西夏一品堂银两，银两=120",
    "referenceAnswer": "import pandas as pd\nfiles = ['dali.xlsx', 'luoyang.xlsx']\nclues = {'dali.xlsx': '雁门关旧信', 'luoyang.xlsx': '西夏一品堂银两'}\nframes = []\nfor file in files:\n    frames.append(pd.DataFrame({'来源': [file], '线索': [clues[file]], '银两': [120]}))\nreport = pd.concat(frames)\nprint(report)"
  },
  {
    "id": "ch13-q02",
    "chapterId": "ch13",
    "chapterTitle": "终章：少室山真相",
    "title": "少室山无相阵",
    "npc": "无名扫地僧",
    "difficulty": "终局",
    "story": "无相码阁同时操控榜文、账册和声望图。你一路记录的段延庆、西夏一品堂、雁门关旧信和悲酥清风解药终于汇到少室山。",
    "objective": "综合构造 DataFrame、按门派汇总声望、绘制图表，并打印包含丐帮、少林、西夏一品堂的汇总结果。 按“期望输出”中的格式打印或生成结果。",
    "knowledge": [
      "爬虫项目",
      "CSV/Excel",
      "数据清洗",
      "可视化",
      "自动报告"
    ],
    "starterCode": "# 补全代码：保留已有结构，把注释位置改成真正的 Python 语句\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 写出这一行代码\n# 写出这一行代码\nsummary.plot(kind='bar')\n# 写出这一行代码\n# 按期望输出写 print(...)",
    "expectedKeywords": [
      "pandas",
      "groupby",
      "plot",
      "plt.title",
      "print"
    ],
    "reward": {
      "exp": 240,
      "trust": 5,
      "reputation": 12,
      "money": 150,
      "art": "代码入江湖"
    },
    "successMessage": "无相阵破，乔峰、段誉与虚竹同时抱拳：少侠已可逍遥知天命。",
    "hint": "终局不求一行写完，按构造数据、分组统计、画图、汇报四步组织。本关要把西夏一品堂也放进最终汇总，呼应前面段延庆线索。\n先看“期望输出”，本关最终要做到：输出按门派汇总后的声望数据，并生成标题为“无相阵声望汇报”的图表。\n关键知识：pandas 负责表格数据的清洗、统计和汇总。 groupby('门派')['声望'].sum() 用于按门派汇总声望。 plot(kind='bar') 可以把统计结果快速画成柱状图。 plt.title() 用于设置图表标题。\n写法建议：df 包含四行数据，丐帮出现两次，汇总后丐帮应变成 95；少林 70；西夏一品堂 42。\n常见错误：忘记导入 matplotlib.pyplot as plt、groupby 后没有 sum、数据里漏掉西夏一品堂。",
    "expectedOutput": "给定 df：丐帮90、少林70、西夏一品堂42、丐帮5\n输出：按门派汇总后的声望数据，应包含丐帮95、少林70、西夏一品堂42\n生成图表标题：无相阵声望汇报",
    "referenceAnswer": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({'门派': ['丐帮', '少林', '西夏一品堂', '丐帮'], '声望': [90, 70, 42, 5]})\nsummary = df.groupby('门派')['声望'].sum()\nsummary.plot(kind='bar')\nplt.title('无相阵声望汇报')\nprint(summary)"
  }
];
