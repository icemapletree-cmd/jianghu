# 代码入江湖：天龙八部 Python 闯关录

> 一套剧情化 Python 编程闯关游戏，以天龙八部为世界观，用武侠叙事驱动 Python 学习。

**🎮 [在线游玩](https://icemapletree-cmd.github.io/jianghu/)**

---

## 游戏简介

玩家扮演现代 Python 初学者"云栖"，意外穿越到天龙八部世界。江湖中出现名为"错码"的异象——门派账册混乱、密信字符错位、商路情报真假难辨。玩家必须一路学习 Python，帮助段誉、乔峰、虚竹、王语嫣、阿朱等人处理江湖事件，逐步揭开幕后组织"无相码阁"的真相。

每一道编程题都是一次江湖事件：破案、传信、算账、比武、整理卷宗、分析情报。

---

## 特性

- **161 道闯关题目**，覆盖 Python 基础 → 爬虫 → 办公自动化 → 数据分析全路径
- **武侠剧情驱动**：每题都有江湖背景故事，变量名、数据、任务目标全部武侠化
- **多样化考点**：三元表达式、列表推导式、`enumerate`/`zip`、`*args`/`**kwargs`、字典推导、类与继承、`re.findall`、`sorted+lambda` 等，考点明确不重复
- **五维奖励系统**：经验 / 信任 / 声望 / 金钱 / 武功，完成关卡解锁称号与下一章
- **即时代码校验**：在浏览器内编写 Python，关键词匹配自动判题，提示系统引导思路
- **纯前端，零依赖**：HTML + CSS + JavaScript，无需安装，打开即玩

---

## 章节结构

| 章节 | 地点 | 核心知识点 |
|------|------|-----------|
| 第一章 初入大理 | 大理城 | `print` / `input` / 变量 / 条件判断 |
| 第二章 无量剑湖 | 无量山 | 列表 / 字典 / `while` / `enumerate` |
| 第三章 杏子林疑云 | 杏子林 | 函数 / `*args` / `**kwargs` / 列表推导式 |
| 第四章 琅嬛玉洞 | 琅嬛福地 | 类 / `__init__` / 实例方法 / 对象状态 |
| 第五章 逍遥御风 | 灵鹫宫 | 模块 / `datetime` / `random` / 嵌套字典 |
| 第六章 逍遥试炼 | 无量洞天 | `enumerate+zip` / `*args` / 字典 dispatch |
| 第七章 江湖暗网 | 天机阁 | `str.find` / 切片 / `re.findall` / HTML 解析 |
| 第八章 西夏情报 | 西夏皇城 | `requests` / `BeautifulSoup` / CSV |
| 第九章 少林潜行 | 少林寺 | Cookie / Selenium / `time.sleep` |
| 第十章 爬虫综合 | 江湖各地 | 函数化爬虫 / 反爬 / `sorted+lambda` |
| 第十一章 卷宗归档 | 丐帮总舵 | `os.listdir` / 文件读写 / `openpyxl` |
| 第十二章 情报分析 | 少室山 | `pandas` / `DataFrame` / `matplotlib` |
| 第十三章 无相大阵 | 终局 | 综合项目 / 数据清洗 / 自动报告 |

另含两条平行线：
- **PCEP 考试线**（18 题）：对标 Python 入门认证考点
- **Python 100 Days 线**（30 题）：覆盖 Day01–Day30 知识点，每题考点独立不重复

---

## 快速开始

```bash
git clone https://github.com/icemapletree-cmd/jianghu.git
cd jianghu
# 直接用浏览器打开 index.html 即可
open index.html
```

无需 Node.js、无需服务器、无需安装任何依赖。

---

## 项目结构

```
jianghu/
├── index.html          # 游戏主界面
├── app.js              # 游戏逻辑（关卡推进、判题、奖励）
├── styles.css          # 武侠风格 UI
├── data/
│   └── quests.js       # 全部 161 道题目数据
├── assets/             # 图片/音效等静态资源
├── 游戏大纲.md         # 世界观、NPC、奖励系统设计文档
└── PCEP考点覆盖.md     # PCEP 认证考点与题目对照表
```

---

## 考点设计原则

- **考点明确**：每道题只考一个核心知识点，题面、变量名、数据均服务于该考点
- **不重复**：同章节内考点不雷同，161 题覆盖 Python 基础到进阶的完整知识树
- **最小脚手架**：编辑器中只给必要参数，核心逻辑由玩家自己完成
- **非补 print**：除入门教程题外，不以"补全 print 语句"作为唯一任务

---

## NPC 与教学功能

| NPC | 江湖角色 | 对应教学功能 |
|-----|---------|-------------|
| 段誉 | 新手引导 | 输入输出、变量、条件判断 |
| 乔峰 | 主线推动 | 循环、函数、复杂任务拆解 |
| 王语嫣 | 知识讲解 | 数据结构、算法思路、复盘提示 |
| 阿朱 | 情报伪装 | 字符串、正则、网页解析 |
| 虚竹 | 成长门派 | 模块、面向对象、项目组织 |
| 苏星河 | 闯关考官 | 综合练习、迷你项目 |
| 无名扫地僧 | 终局导师 | 综合项目评审、代码风格 |

---

## 技术栈

- **前端**：原生 HTML5 / CSS3 / Vanilla JavaScript
- **代码编辑器**：内嵌 `<textarea>` + 关键词校验引擎
- **数据**：`data/quests.js` 纯 JS 对象数组，结构如下：

```js
{
  id: 'ch02-q01',
  title: '琅嬛书架归位',
  difficulty: '初阶',
  story: '...',
  objective: '用字典推导式从 groups 建立 {类别: 数量} 字典...',
  knowledge: ['字典推导式', '负索引', '.items()', 'len()'],
  starterCode: '...',
  expectedKeywords: ['{', 'for', 'in groups.items()', 'len(', 'print'],
  expectedOutput: '...',
  referenceAnswer: '...',
  hint: '...',
  rewards: { exp: 30, trust: 1, gold: 5 }
}
```

---

## License

MIT — 欢迎 Fork、修改、用于教学。

---

*江湖路远，代码为剑。*
