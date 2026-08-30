const LANG_COLORS = {
  JavaScript: "#f2c500",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "-": "#efece6"
};

const IMAGES = {
  LP5_claude: "img/LP5_claude.png",
  LP4_claude: "img/LP4_claude.png",
  LP3_claude: "img/LP3_claude.png",
  LP_2: "img/LP2_claude.png",
  LP1_claude: "img/LP1_claude.png",
  JavaScript_Primer_Todo: "img/JS_TodoApp.png",
  "Typing-game": "img/JS_TypingGame.png",
  omikuji: "img/omikuji.png",
  work3: "img/work3.png",
  Portfolio1: "img/portfolio1.png",
  kadai: "img/saiyou.png",
  work2: "img/work2.png",
  work1: "img/work1.png"
};

const WORKS = [
  ["LP5_claude", "JavaScript", "web", "LP5_claude", "https://taikiyamasaki.github.io/LP5_claude/"],
  ["LP4_claude", "CSS", "web", "LP4_claude", "https://taikiyamasaki.github.io/LP4_claude/"],
  ["LP3_claude", "CSS", "web", "LP3_claude", "https://taikiyamasaki.github.io/LP3_claude/"],
  ["LP_2", "JavaScript", "web", "LP_2", "https://taikiyamasaki.github.io/LP_2/"],
  ["LP1_claude", "HTML", "web", "LP1_claude", "https://taikiyamasaki.github.io/LP1_claude/"],
  ["MyTasks_Claude", "TypeScript", "application", "MyTasks_Claude", "https://taikiyamasaki.github.io/MyTasks_Claude/"],
  ["JavaScript_Primer_Todo", "JavaScript", "application", "JavaScript_Primer_Todo", "https://taikiyamasaki.github.io/JavaScript_Primer_Todo/"],
  ["todo_list", "TypeScript", "application", "todo_list", "https://taikiyamasaki.github.io/todo_list/"],
  ["Typing-game", "CSS", "application", "Typing-game", "https://taikiyamasaki.github.io/Typing-game/"],
  ["omikuji", "HTML", "application", "omikuji", "https://taikiyamasaki.github.io/omikuji/"],
  ["work3", "HTML", "web", "work3", "https://taikiyamasaki.github.io/work3/"],
  ["work_React", "JavaScript", "application", "work_React", "https://taikiyamasaki.github.io/work_React/"],
  ["Portfolio1", "CSS", "web", "Portfolio1", "https://taikiyamasaki.github.io/Portfolio1/"],
  ["kadai", "HTML", "web", "kadai", "https://taikiyamasaki.github.io/kadai/"],
  ["work2", "CSS", "web", "work2", "https://taikiyamasaki.github.io/work2/"],
  ["work1", "HTML", "web", "work1", "https://taikiyamasaki.github.io/work1/"]
].map(([id, lang, group, title, url]) => [
  id,
  group === "web" ? "WEB SITE" : "APPLICATION",
  title,
  LANG_COLORS[lang] || "#efece6",
  [group],
  url
]);

const TABS = [
  ["all", "ALL"], ["web", "WEBSITE"], ["application", "APPLICATION"]
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
      const imgSrc = IMAGES[id];
      if (imgSrc) {
        slot.classList.add("has-image");
        thumb.classList.add("has-image");
        const imgEl = document.createElement("img");
        imgEl.src = imgSrc;
        imgEl.alt = title;
        slot.appendChild(imgEl);
      } else {
        slot.innerHTML = '<span class="slot-label">' + ph + "</span>";
      }
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
