const LANG_COLORS = {
  JavaScript: "#f2c500",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "-": "#efece6"
};

const WORKS = [
  ["LP5_claude", "JavaScript", "LP5_claude", "https://taikiyamasaki.github.io/LP5_claude/"],
  ["LP4_claude", "CSS", "LP4_claude", "https://taikiyamasaki.github.io/LP4_claude/"],
  ["LP3_claude", "CSS", "LP3_claude", "https://taikiyamasaki.github.io/LP3_claude/"],
  ["LP_2", "JavaScript", "LP_2", "https://taikiyamasaki.github.io/LP_2/"],
  ["LP1_claude", "HTML", "LP1_claude", "https://taikiyamasaki.github.io/LP1_claude/"],
  ["MyTasks_Claude", "TypeScript", "MyTasks_Claude", "https://github.com/TaikiYamasaki/MyTasks_Claude"],
  ["JavaScript_Primer_Todo", "JavaScript", "JavaScript_Primer_Todo", "https://taikiyamasaki.github.io/JavaScript_Primer_Todo/"],
  ["todo_list", "TypeScript", "todo_list", "https://github.com/TaikiYamasaki/todo_list"],
  ["Typing-game", "CSS", "Typing-game", "https://taikiyamasaki.github.io/Typing-game/"],
  ["omikuji", "HTML", "omikuji", "https://taikiyamasaki.github.io/omikuji/"],
  ["work3", "HTML", "work3", "https://taikiyamasaki.github.io/work3/"],
  ["work_React", "JavaScript", "work_React", "https://github.com/TaikiYamasaki/work_React"],
  ["Portfolio1", "CSS", "Portfolio1", "https://taikiyamasaki.github.io/Portfolio1/"],
  ["kadai", "HTML", "kadai", "https://taikiyamasaki.github.io/kadai/"],
  ["work2", "CSS", "work2", "https://taikiyamasaki.github.io/work2/"],
  ["work1", "HTML", "work1", "https://taikiyamasaki.github.io/work1/"]
].map(([id, lang, title, url]) => [id, lang, title, LANG_COLORS[lang] || "#efece6", [lang.toLowerCase()], url]);

const TABS = [
  ["all", "ALL"], ["javascript", "JAVASCRIPT"], ["typescript", "TYPESCRIPT"], ["css", "CSS"], ["html", "HTML"]
];

const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("works-grid");
let filter = "all";

function render() {
  tabsEl.innerHTML = "";
  TABS.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tab" + (filter === key ? " is-active" : "");
    btn.textContent = label;
    btn.addEventListener("click", () => { filter = key; render(); });
    tabsEl.appendChild(btn);
  });

  gridEl.innerHTML = "";
  WORKS
    .filter(w => filter === "all" || w[4].indexOf(filter) !== -1)
    .forEach(w => {
      const [id, cat, title, band, , url] = w;
      const ph = title;

      const card = document.createElement("a");
      card.href = url;
      card.target = "_blank";
      card.rel = "noopener";
      card.className = "work-card";

      const thumb = document.createElement("div");
      thumb.className = "work-thumb";

      const bandEl = document.createElement("div");
      bandEl.className = "work-band";
      bandEl.style.background = band;
      thumb.appendChild(bandEl);

      const slot = document.createElement("div");
      slot.className = "slot";
      slot.id = "work-" + id;
      slot.innerHTML = '<span class="slot-label">' + ph + "</span>";
      thumb.appendChild(slot);

      const catEl = document.createElement("p");
      catEl.className = "work-cat";
      catEl.textContent = cat;

      const titleEl = document.createElement("p");
      titleEl.className = "work-title";
      titleEl.textContent = title;

      card.appendChild(thumb);
      card.appendChild(catEl);
      card.appendChild(titleEl);
      gridEl.appendChild(card);
    });
}

render();
