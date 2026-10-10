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
  Portfolio1: "img/portfolio1.png",
  kadai: "img/saiyou.png",
  work2: "img/work2.png",
  work1: "img/work1.png",
  MyTasks_Claude: "img/MyTasks.png",
  todo_list: "img/TOdo.png",
  work_React: "img/Quiz.png"
};

const NOTES = {
  LP5_claude: { industry: "ファストフード", type: "Webサイト / LP", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  LP4_claude: { industry: "スポーツ・アパレル", type: "Webサイト / LP", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  LP3_claude: { industry: "カフェ・飲食（コーヒー）", type: "Webサイト / LP", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  LP_2: { industry: "自動車メーカー", type: "Webサイト / LP", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  LP1_claude: { industry: "マーケティング・ブランディング", type: "Webサイト / LP", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  MyTasks_Claude: { industry: "個人開発", type: "アプリケーション", tech: "TypeScript / React", production: "自主的に制作" },
  JavaScript_Primer_Todo: { industry: "個人開発", type: "アプリケーション", tech: "JavaScript", production: "自主的に制作" },
  todo_list: { industry: "個人開発", type: "アプリケーション", tech: "TypeScript / React", production: "自主的に制作" },
  "Typing-game": { industry: "個人開発", type: "アプリケーション（ゲーム）", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  omikuji: { industry: "個人開発", type: "アプリケーション", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  work_React: { industry: "個人開発", type: "アプリケーション（クイズ）", tech: "JavaScript / React", production: "自主的に制作" },
  Portfolio1: { industry: "個人ポートフォリオ", type: "Webサイト", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  kadai: { industry: "コーポレート・採用", type: "Webサイト", tech: "HTML / CSS / JavaScript", production: "自主的に制作" },
  work2: { industry: "インテリア・オフィスデザイン", type: "Webサイト", tech: "HTML / CSS", production: "自主的に制作" },
  work1: { industry: "飲食店", type: "Webサイト", tech: "HTML / CSS", production: "自主的に制作" }
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
    .forEach((w, i) => {
      const [id, cat, title, band, , url] = w;
      const ph = title;

      const card = document.createElement("a");
      card.href = url;
      card.target = "_blank";
      card.rel = "noopener";
      card.className = "work-card reveal";
      card.style.transitionDelay = (i % 4) * 0.08 + "s";

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

      const notes = NOTES[id];
      if (notes) {
        const overlay = document.createElement("div");
        overlay.className = "work-overlay";
        overlay.innerHTML =
          '<dl>' +
          '<div><dt>業種</dt><dd>' + notes.industry + '</dd></div>' +
          '<div><dt>制作内容</dt><dd>' + notes.type + '</dd></div>' +
          '<div><dt>使用技術</dt><dd>' + notes.tech + '</dd></div>' +
          '<div><dt>制作</dt><dd>' + notes.production + '</dd></div>' +
          '</dl>';
        thumb.appendChild(overlay);
      }

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

  observeReveals();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

render();
