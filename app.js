(function () {
  const fallbackQuests = [
    {
      id: "ch01-q00",
      chapterId: "ch01",
      chapterTitle: "第一篇：初入大理",
      title: "忘川石碑问真名",
      npc: "段誉",
      difficulty: "入门",
      story: "你在无量山脚醒来，石碑上浮出一行字：报上真名，方可入江湖。",
      objective: "输入或保存少侠姓名，并打印一张江湖通行牌。",
      knowledge: ["print()", "input()", "变量"],
      starterCode: "# 补全代码：接收名字并打印通行牌\nname = input('少侠名号：')\n# 按期望输出写 print(...)",
      expectedOutput: "输入示例：云栖\n输出：少侠云栖，可入无量山。",
      expectedKeywords: ["input", "print"],
      reward: { exp: 10, trust: 1, reputation: 0, money: 0, art: "传音入密" },
      successMessage: "石碑光芒一闪，段誉对你多了几分信任。",
      hint: "需要用 input 接收名字，再用 print 输出结果。"
    }
  ];

  const quests = Array.isArray(window.JIANGHU_QUESTS) && window.JIANGHU_QUESTS.length
    ? window.JIANGHU_QUESTS
    : fallbackQuests;

  const saveKey = localStorage.getItem("jianghu2.activeSaveKey") || "jianghu-python-game-save-v4";
  const defaultState = {
    currentQuestId: quests[0].id,
    completed: [],
    exp: 0,
    trust: 0,
    reputation: 0,
    money: 10,
    martialArts: []
  };

  let state = loadState();

  const els = {
    chapterList: document.querySelector("#chapter-list"),
    questTabs: document.querySelector("#quest-tabs"),
    questChapter: document.querySelector("#quest-chapter"),
    questDifficulty: document.querySelector("#quest-difficulty"),
    questNpc: document.querySelector("#quest-npc"),
    questTitle: document.querySelector("#quest-title"),
    questStory: document.querySelector("#quest-story"),
    resourceLink: document.querySelector("#resource-link"),
    questObjective: document.querySelector("#quest-objective"),
    expectedOutput: document.querySelector("#expected-output"),
    knowledgeList: document.querySelector("#knowledge-list"),
    codeEditor: document.querySelector("#code-editor"),
    keywordList: document.querySelector("#keyword-list"),
    outputPanel: document.querySelector("#output-panel"),
    hintText: document.querySelector("#hint-text"),
    answerButton: document.querySelector("#show-answer"),
    answerPanel: document.querySelector("#answer-panel"),
    stats: {
      exp: document.querySelector("#stat-exp"),
      trust: document.querySelector("#stat-trust"),
      reputation: document.querySelector("#stat-reputation"),
      money: document.querySelector("#stat-money")
    },
    artsList: document.querySelector("#arts-list"),
    progressLabel: document.querySelector("#progress-label"),
    completionPercent: document.querySelector("#completion-percent"),
    progressFill: document.querySelector("#progress-fill"),
    rankLabel: document.querySelector("#rank-label"),
    guideDialog: document.querySelector("#guide-dialog")
  };

  const chapters = groupByChapter(quests);
  const indentUnit = "    ";
  const editorPairs = new Map([
    ['"', '"'],
    ["'", "'"],
    ["`", "`"],
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["（", "）"],
    ["“", "”"],
    ["‘", "’"],
    ["【", "】"],
    ["《", "》"],
    ["「", "」"],
    ["『", "』"]
  ]);
  const editorClosers = new Set(editorPairs.values());

  document.querySelector("#run-code").addEventListener("click", runCurrentQuest);
  document.querySelector("#show-hint").addEventListener("click", showHint);
  document.querySelector("#show-answer").addEventListener("click", showReferenceAnswer);
  document.querySelector("#next-quest").addEventListener("click", goToNextQuest);
  document.querySelector("#reset-save").addEventListener("click", resetSave);
  document.querySelector("#open-guide").addEventListener("click", () => els.guideDialog.showModal());
  document.querySelector("#close-guide").addEventListener("click", () => els.guideDialog.close());
  els.codeEditor.addEventListener("keydown", handleEditorKeydown);
  els.codeEditor.addEventListener("input", saveCurrentCode);

  render();

  function loadState() {
    try {
      const raw = localStorage.getItem(saveKey);
      if (!raw) return { ...defaultState };
      const parsed = JSON.parse(raw);
      const questIds = new Set(quests.map((quest) => quest.id));
      const completed = Array.isArray(parsed.completed)
        ? parsed.completed.filter((id) => questIds.has(id))
        : [];
      return {
        ...defaultState,
        ...parsed,
        currentQuestId: questIds.has(parsed.currentQuestId) ? parsed.currentQuestId : defaultState.currentQuestId,
        completed,
        martialArts: Array.isArray(parsed.martialArts) ? parsed.martialArts : []
      };
    } catch {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(saveKey, JSON.stringify(state));
  }

  function groupByChapter(items) {
    const map = new Map();
    items.forEach((quest) => {
      if (!map.has(quest.chapterId)) {
        map.set(quest.chapterId, {
          id: quest.chapterId,
          title: quest.chapterTitle,
          quests: []
        });
      }
      map.get(quest.chapterId).quests.push(quest);
    });
    return Array.from(map.values());
  }

  function getCurrentQuest() {
    return quests.find((quest) => quest.id === state.currentQuestId) || quests[0];
  }

  function getCurrentChapter() {
    const current = getCurrentQuest();
    return chapters.find((chapter) => chapter.id === current.chapterId) || chapters[0];
  }

  function render() {
    renderChapters();
    renderQuestTabs();
    renderQuest();
    renderStats();
  }

  function renderChapters() {
    els.chapterList.innerHTML = "";
    chapters.forEach((chapter) => {
      const done = chapter.quests.filter((quest) => state.completed.includes(quest.id)).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = chapter.id === getCurrentQuest().chapterId ? "chapter-item active" : "chapter-item";
      button.innerHTML = `
        <span>${chapter.title}</span>
        <strong>${done}/${chapter.quests.length}</strong>
      `;
      button.addEventListener("click", () => {
        state.currentQuestId = chapter.quests[0].id;
        saveState();
        render();
      });
      els.chapterList.appendChild(button);
    });
  }

  function renderQuestTabs() {
    const chapter = getCurrentChapter();
    els.questTabs.innerHTML = "";
    chapter.quests.forEach((quest) => {
      const button = document.createElement("button");
      button.type = "button";
      const complete = state.completed.includes(quest.id);
      button.className = [
        "quest-tab",
        quest.id === state.currentQuestId ? "active" : "",
        complete ? "complete" : ""
      ].join(" ").trim();
      button.textContent = complete ? `${quest.title} ✓` : quest.title;
      button.addEventListener("click", () => {
        state.currentQuestId = quest.id;
        saveState();
        render();
      });
      els.questTabs.appendChild(button);
    });
  }

  function renderQuest() {
    const quest = getCurrentQuest();
    const complete = state.completed.includes(quest.id);
    els.questChapter.textContent = quest.chapterTitle;
    els.questDifficulty.textContent = quest.difficulty;
    els.questNpc.textContent = quest.npc;
    els.questTitle.textContent = quest.title;
    els.questStory.textContent = quest.story;
    if (quest.resource) {
      els.resourceLink.hidden = false;
      els.resourceLink.href = quest.resource.href;
      els.resourceLink.textContent = quest.resource.label || "详细学习";
    } else {
      els.resourceLink.hidden = true;
      els.resourceLink.removeAttribute("href");
      els.resourceLink.textContent = "详细学习";
    }
    els.questObjective.textContent = quest.objective;
    els.expectedOutput.textContent = quest.expectedOutput || "按题目要求打印或生成结果。";
    els.knowledgeList.innerHTML = "";
    quest.knowledge.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      els.knowledgeList.appendChild(li);
    });
    renderKeywordList(quest);
    els.codeEditor.value = localStorage.getItem(codeKey(quest.id)) || quest.starterCode || "";
    els.outputPanel.className = complete ? "output-panel success" : "output-panel";
    els.outputPanel.textContent = complete ? quest.successMessage : "等待少侠出招。";
    els.hintText.textContent = "先看期望输出，再把任务拆成准备数据、处理逻辑、输出结果三步。";
    els.answerPanel.hidden = true;
    els.answerPanel.textContent = "";
    const cost = getAnswerCost(quest);
    els.answerButton.textContent = `参考答案 -${cost} 两`;
    els.answerButton.disabled = !quest.referenceAnswer;
  }

  function renderStats() {
    const completeCount = state.completed.length;
    const percent = Math.round((completeCount / quests.length) * 100);
    els.stats.exp.textContent = state.exp;
    els.stats.trust.textContent = state.trust;
    els.stats.reputation.textContent = state.reputation;
    els.stats.money.textContent = `${state.money} 两`;
    els.progressLabel.textContent = `${completeCount}/${quests.length}`;
    els.completionPercent.textContent = `${percent}%`;
    els.progressFill.style.width = `${percent}%`;
    els.rankLabel.textContent = getRank(state.exp);

    els.artsList.innerHTML = "";
    if (!state.martialArts.length) {
      const empty = document.createElement("span");
      empty.className = "empty-state";
      empty.textContent = "尚未悟得武功";
      els.artsList.appendChild(empty);
    } else {
      state.martialArts.forEach((art) => {
        const tag = document.createElement("span");
        tag.className = "art-tag";
        tag.textContent = art;
        els.artsList.appendChild(tag);
      });
    }
  }

  function renderKeywordList(quest) {
    els.keywordList.innerHTML = "";
    (quest.expectedKeywords || []).forEach((keyword) => {
      const tag = document.createElement("span");
      tag.className = "keyword-chip";
      tag.textContent = keyword;
      els.keywordList.appendChild(tag);
    });
  }

  function handleEditorKeydown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        outdentSelection();
      } else {
        indentSelection();
      }
      return;
    }

    if (event.metaKey || event.ctrlKey || event.altKey) return;

    if (event.key === "Backspace" && removeEmptyPair()) {
      event.preventDefault();
      return;
    }

    if (skipExistingCloser(event.key)) {
      event.preventDefault();
      return;
    }

    if (editorPairs.has(event.key)) {
      event.preventDefault();
      insertPairedText(event.key, editorPairs.get(event.key));
    }
  }

  function indentSelection() {
    const editor = els.codeEditor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    if (start === end) {
      replaceEditorRange(start, end, indentUnit, start + indentUnit.length, start + indentUnit.length);
      return;
    }

    const range = getSelectedLineRange(start, end);
    const block = editor.value.slice(range.start, range.end);
    const lines = block.split("\n");
    const replacement = lines.map((line) => indentUnit + line).join("\n");
    const added = lines.length * indentUnit.length;
    const newStart = start + indentUnit.length;
    const newEnd = end + added;
    replaceEditorRange(range.start, range.end, replacement, newStart, newEnd);
  }

  function outdentSelection() {
    const editor = els.codeEditor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const range = getSelectedLineRange(start, end);
    const block = editor.value.slice(range.start, range.end);
    const lines = block.split("\n");
    let offset = range.start;
    let removedBeforeStart = 0;
    let removedBeforeEnd = 0;

    const replacement = lines.map((line) => {
      const removed = countRemovableIndent(line);
      if (offset < start) removedBeforeStart += removed;
      if (offset < end) removedBeforeEnd += removed;
      offset += line.length + 1;
      return line.slice(removed);
    }).join("\n");

    replaceEditorRange(
      range.start,
      range.end,
      replacement,
      Math.max(range.start, start - removedBeforeStart),
      Math.max(range.start, end - removedBeforeEnd)
    );
  }

  function insertPairedText(opener, closer) {
    const editor = els.codeEditor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = editor.value.slice(start, end);
    const replacement = opener + selected + closer;
    const nextStart = start + opener.length;
    const nextEnd = end + opener.length;
    replaceEditorRange(start, end, replacement, nextStart, nextEnd);
  }

  function skipExistingCloser(key) {
    const editor = els.codeEditor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    if (start !== end || !editorClosers.has(key)) return false;
    if (editor.value.slice(start, start + key.length) !== key) return false;
    editor.setSelectionRange(start + key.length, start + key.length);
    saveCurrentCode();
    return true;
  }

  function removeEmptyPair() {
    const editor = els.codeEditor;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    if (start !== end || start === 0) return false;

    for (const [opener, closer] of editorPairs.entries()) {
      const before = editor.value.slice(start - opener.length, start);
      const after = editor.value.slice(start, start + closer.length);
      if (before === opener && after === closer) {
        replaceEditorRange(start - opener.length, start + closer.length, "", start - opener.length, start - opener.length);
        return true;
      }
    }
    return false;
  }

  function getSelectedLineRange(start, end) {
    const value = els.codeEditor.value;
    const rangeStart = value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
    const adjustedEnd = end > start && value[end - 1] === "\n" ? end - 1 : end;
    const nextBreak = value.indexOf("\n", adjustedEnd);
    return {
      start: rangeStart,
      end: nextBreak === -1 ? value.length : nextBreak
    };
  }

  function countRemovableIndent(line) {
    if (line.startsWith(indentUnit)) return indentUnit.length;
    if (line.startsWith("\t")) return 1;
    const match = line.match(/^ {1,3}/);
    return match ? match[0].length : 0;
  }

  function replaceEditorRange(start, end, replacement, selectionStart, selectionEnd) {
    const editor = els.codeEditor;
    const scrollTop = editor.scrollTop;
    editor.value = editor.value.slice(0, start) + replacement + editor.value.slice(end);
    editor.setSelectionRange(selectionStart, selectionEnd);
    editor.scrollTop = scrollTop;
    saveCurrentCode();
  }

  function saveCurrentCode() {
    const quest = getCurrentQuest();
    localStorage.setItem(codeKey(quest.id), els.codeEditor.value);
  }

  function runCurrentQuest() {
    const quest = getCurrentQuest();
    const code = els.codeEditor.value;
    localStorage.setItem(codeKey(quest.id), code);

    const initialCode = quest.starterCode || "";
    const checkedCode = stripLineComments(code);
    const checkedInitial = stripLineComments(initialCode);
    const missing = (quest.expectedKeywords || []).filter((keyword) => !checkedCode.includes(keyword));

    if (normalizeCode(checkedCode) === normalizeCode(checkedInitial)) {
      els.outputPanel.className = "output-panel warning";
      els.outputPanel.textContent = "这还是初始代码。请亲手补上关键语句，再来闯关。";
      return;
    }

    const unfinished = findUnfinishedMarkers(checkedCode);
    if (unfinished.length) {
      els.outputPanel.className = "output-panel warning";
      els.outputPanel.textContent = `代码里还有未完成标记：${unfinished.join("、")}。请把它改成真正的 Python 代码。`;
      return;
    }

    if (missing.length) {
      els.outputPanel.className = "output-panel warning";
      els.outputPanel.textContent = `尚缺关键心法：${missing.join("、")}。\n\n试着回到“你的任务”，把输入、处理、输出三步补完整。`;
      return;
    }

    if (!state.completed.includes(quest.id)) {
      applyReward(quest.reward || {});
      state.completed.push(quest.id);
    }

    saveState();
    render();
    els.outputPanel.className = "output-panel success";
    els.outputPanel.textContent = `${quest.successMessage}\n\n奖励已结算：${formatReward(quest.reward || {})}`;
  }

  function applyReward(reward) {
    state.exp += Number(reward.exp || 0);
    state.trust += Number(reward.trust || 0);
    state.reputation += Number(reward.reputation || 0);
    state.money += Number(reward.money || 0);
    if (reward.art && !state.martialArts.includes(reward.art)) {
      state.martialArts.push(reward.art);
    }
  }

  function showHint() {
    const quest = getCurrentQuest();
    els.hintText.textContent = quest.hint || "先看期望输出，再找准备数据、处理逻辑、输出结果三件事。";
  }

  function showReferenceAnswer() {
    const quest = getCurrentQuest();
    if (!quest.referenceAnswer) {
      els.outputPanel.className = "output-panel warning";
      els.outputPanel.textContent = "本关暂未收录参考答案。";
      return;
    }

    const cost = getAnswerCost(quest);
    if (state.money < cost) {
      els.outputPanel.className = "output-panel warning";
      els.outputPanel.textContent = `银两不足。查看本关参考答案需要 ${cost} 两，你当前只有 ${state.money} 两。`;
      return;
    }

    state.money -= cost;
    saveState();
    renderStats();
    els.answerPanel.hidden = false;
    els.answerPanel.textContent = quest.referenceAnswer;
    els.outputPanel.className = "output-panel warning";
    els.outputPanel.textContent = `已支付 ${cost} 两。参考答案只作拆解思路，不会自动填入代码区。`;
  }

  function stripLineComments(code) {
    return code
      .split("\n")
      .map((line) => {
        const index = line.indexOf("#");
        return index >= 0 ? line.slice(0, index) : line;
      })
      .join("\n");
  }

  function normalizeCode(code) {
    return code.replace(/\s+/g, "");
  }

  function findUnfinishedMarkers(code) {
    const markers = [];
    if (/\bTODO\b|待补全|补全这里|\.\.\./i.test(code)) markers.push("TODO 或临时标记");
    if (/^\s*pass\s*$/m.test(code)) markers.push("pass");
    if (/=\s*None(\s*(#.*)?)?$/m.test(code)) markers.push("None 占位值");
    return markers;
  }

  function goToNextQuest() {
    const currentIndex = quests.findIndex((quest) => quest.id === getCurrentQuest().id);
    const next = quests[currentIndex + 1];
    if (!next) {
      els.outputPanel.className = "output-panel success";
      els.outputPanel.textContent = "少室山真相已明，百日教程与考前心法都已融入主线。当前版本的江湖试炼全部通关。";
      return;
    }
    state.currentQuestId = next.id;
    saveState();
    render();
  }

  function resetSave() {
    const ok = confirm("确定重置江湖存档？已完成任务和奖励都会清空。");
    if (!ok) return;
    Object.keys(localStorage)
      .filter((key) => key === saveKey || key === "jianghu-python-game-save-v1" || key === "jianghu-python-game-save-v2" || key === "jianghu-python-game-save-v3" || key.startsWith("jianghu-code-") || key.startsWith("jianghu-code-v2-") || key.startsWith("jianghu-code-v3-") || key.startsWith("jianghu-code-v4-") || key.startsWith("jianghu-code-v5-"))
      .forEach((key) => localStorage.removeItem(key));
    state = { ...defaultState, completed: [], martialArts: [] };
    render();
  }

  function codeKey(questId) {
    return `jianghu-code-v5-${questId}`;
  }

  function formatReward(reward) {
    const parts = [];
    if (reward.exp) parts.push(`经验 +${reward.exp}`);
    if (reward.trust) parts.push(`信任 +${reward.trust}`);
    if (reward.reputation) parts.push(`声望 +${reward.reputation}`);
    if (reward.money) parts.push(`金钱 +${reward.money}`);
    if (reward.art) parts.push(`武功：${reward.art}`);
    return parts.join("，") || "无额外奖励";
  }

  function getRank(exp) {
    if (exp >= 1600) return "少室山破局者";
    if (exp >= 1000) return "名动武林";
    if (exp >= 600) return "独闯江湖";
    if (exp >= 250) return "小有所成";
    return "初入江湖";
  }

  function getAnswerCost(quest) {
    const table = {
      "入门": 2,
      "初阶": 4,
      "进阶": 6,
      "高阶": 8,
      "终局": 10
    };
    return Number(quest.answerCost || table[quest.difficulty] || 5);
  }
})();
