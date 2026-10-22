// ============================================================================
// 1분 성경 — 대하 MOVIE 영화의 한 장면을 1분 안에 담은 유튜브 쇼츠 (목록: js/shorts_index.js)
// 맨 위 '⏱️ 1분 성경' 탭 화면. 판서 강의 순서(js/pansuh_index.js)대로 놓고, 위에는 세로 플레이어와
// 이전·다음 단추, 아래는 전체 쇼츠 카드. '다음 편 자동 재생'을 켜 두면 한 편이 끝날 때 다음 편을 튼다.
// app.js는 건드리지 않고, js/movies.js처럼 화면의 단추를 보고 따라 움직인다.
// ============================================================================
(function () {
  "use strict";
  const view = document.getElementById("view-shorts");
  const stage = document.getElementById("shorts-stage");
  const shelf = document.getElementById("shorts-shelf");
  if (!view || !stage || !shelf) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const thumb = (s) => `https://i.ytimg.com/vi/${s.youtube}/hqdefault.jpg`;
  const films = Object.fromEntries((window.MOVIES || []).map((m) => [m.id, m]));
  const byId = Object.fromEntries((window.SHORTS || []).map((s) => [s.id, s]));
  const P = window.PANSUH_INDEX;
  // 강의 묶음: 판서 강의 목록 순서대로, 쇼츠가 있는 강의만
  const parts = (P ? P.parts.map((part) => ({ name: part.name, ids: part.pages.map((pg) => pg.id) }))
                   : [{ name: "", ids: Object.keys(byId) }])
    .map((part) => ({ name: part.name, list: part.ids.filter((id) => byId[id]).map((id) => byId[id]) }))
    .filter((part) => part.list.length);
  const order = parts.flatMap((part) => part.list);
  if (!order.length) return;
  const count = document.getElementById("shorts-count");
  if (count) count.textContent = `${order.length} Shorts`;

  const AUTO_KEY = "shortsAutoNext";
  let auto = true;
  try { auto = localStorage.getItem(AUTO_KEY) !== "0"; } catch (e) { /* 저장소를 못 쓰면 켠 채로 둔다 */ }
  let at = 0;
  let player = null;
  let apiWanted = null;

  // 유튜브 IFrame API — 한 편이 끝난 것을 알아야 다음 편으로 넘어갈 수 있다. 탭을 처음 열 때 한 번만 부른다
  function loadApi() {
    if (apiWanted) return apiWanted;
    apiWanted = new Promise((resolve) => {
      if (window.YT && window.YT.Player) return resolve();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(); };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    });
    return apiWanted;
  }

  const info = (s, i) => {
    const m = films[s.id];
    const prev = order[i - 1], next = order[i + 1];
    // 휴대폰에서는 이전·다음 단추가 화면 밖으로 밀리지 않게 영상 바로 밑에 먼저 놓는다
    return `
      <div class="order-2 md:order-1">
        <p class="text-xs font-bold text-amber-600">${i + 1} / ${order.length}</p>
        <h4 class="mt-1 text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">${esc(s.title)}</h4>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${m ? esc(m.title) : ""}</p>
      </div>
      <div class="order-1 md:order-2 mb-4 md:mb-0 md:mt-5 grid grid-cols-2 gap-2">
        <button type="button" data-shorts-go="${i - 1}" ${prev ? "" : "disabled"}
          class="px-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-left hover:border-amber-500 disabled:opacity-40 disabled:hover:border-slate-200 transition">
          <span class="block text-xs font-bold text-slate-500 dark:text-slate-400">◀ Previous</span>
          <span class="block mt-0.5 text-sm font-bold text-slate-800 dark:text-slate-200 truncate">${prev ? esc(prev.title) : "This is the first"}</span>
        </button>
        <button type="button" data-shorts-go="${i + 1}" ${next ? "" : "disabled"}
          class="px-3 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 text-right disabled:opacity-40 transition">
          <span class="block text-xs font-black">Next ▶</span>
          <span class="block mt-0.5 text-sm font-bold truncate">${next ? esc(next.title) : "This is the last"}</span>
        </button>
      </div>
      <label class="order-3 mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer select-none">
        <input type="checkbox" data-shorts-auto ${auto ? "checked" : ""} class="w-4 h-4 accent-amber-500">
        Play the next one automatically when one ends
      </label>
      <div class="order-4 mt-5 flex flex-wrap gap-2">
        ${m ? `<a href="${m.pansuh}#movie" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-amber-500 transition">🎬 Full film (${m.minutes} min)</a>
        <a href="${m.pansuh}#player" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-amber-500 transition">🖍️ To the whiteboard lecture</a>` : ""}
        <a href="https://youtube.com/shorts/${s.youtube}" target="_blank" rel="noopener" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-amber-500 transition">Watch on YouTube ↗</a>
      </div>`;
  };

  async function play(i, autoplay) {
    if (i < 0 || i >= order.length) return;
    at = i;
    const s = order[i];
    stage.querySelector("[data-shorts-info]").innerHTML = info(s, i);
    shelf.querySelectorAll("[data-short]").forEach((c) => {
      const on = c.getAttribute("data-short") === s.id;
      c.classList.toggle("ring-2", on);
      c.classList.toggle("ring-amber-500", on);
    });
    await loadApi();
    if (player && player.loadVideoById) {
      autoplay ? player.loadVideoById(s.youtube) : player.cueVideoById(s.youtube);
      return;
    }
    player = new YT.Player(stage.querySelector("[data-shorts-player]"), {
      host: "https://www.youtube-nocookie.com",
      videoId: s.youtube,
      width: "100%",
      height: "100%",
      playerVars: { autoplay: autoplay ? 1 : 0, playsinline: 1, rel: 0 },
      events: {
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED && auto && at + 1 < order.length) play(at + 1, true);
        },
      },
    });
  }

  stage.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
      <div class="shrink-0" style="width: min(22rem, 100%, calc(56svh * 9 / 16))">
        <div class="aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black shadow-sm">
          <div data-shorts-player class="w-full h-full"></div>
        </div>
      </div>
      <div data-shorts-info class="w-full md:max-w-sm md:pt-4 flex flex-col"></div>
    </div>`;

  const card = (s) => `
    <button type="button" data-short="${s.id}" class="group text-left rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-sm transition">
      <div class="aspect-[9/16] bg-black">
        <img src="${thumb(s)}" alt="" loading="lazy" class="w-full h-full object-cover group-hover:opacity-90 transition">
      </div>
      <div class="p-2.5">
        <p class="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">${esc(s.title)}</p>
        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">${films[s.id] ? esc(films[s.id].title) : ""}</p>
      </div>
    </button>`;
  shelf.innerHTML = parts.map((part) => `
    <div>
      ${part.name ? `<h4 class="text-sm font-black text-slate-700 dark:text-slate-300 mb-3">${esc(part.name)}</h4>` : ""}
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        ${part.list.map(card).join("")}
      </div>
    </div>`).join("");

  stage.addEventListener("click", (e) => {
    const go = e.target.closest("[data-shorts-go]");
    if (go && !go.disabled) play(Number(go.getAttribute("data-shorts-go")), true);
  });
  stage.addEventListener("change", (e) => {
    if (!e.target.matches("[data-shorts-auto]")) return;
    auto = e.target.checked;
    try { localStorage.setItem(AUTO_KEY, auto ? "1" : "0"); } catch (err) { /* 저장 못 해도 이번에는 따른다 */ }
  });
  shelf.addEventListener("click", (e) => {
    const c = e.target.closest("[data-short]");
    if (!c) return;
    play(order.findIndex((s) => s.id === c.getAttribute("data-short")), true);
    stage.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  let opened = false;
  document.querySelectorAll("[data-nav-view]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const on = btn.getAttribute("data-nav-view") === "shorts";
      view.classList.toggle("hidden", !on);
      if (on && !opened) { opened = true; play(0, false); }
      if (!on && player && player.pauseVideo) player.pauseVideo();
    }));
})();
