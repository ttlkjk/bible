// ============================================================================
// 대하 MOVIE — 판서 강의를 명화와 해설로 옮긴 영화 (목록: js/movies_index.js)
// 맨 위 '🎬 대하 MOVIE' 탭 화면. 판서 강의 76강을 강의 순서대로 놓고(js/pansuh_index.js),
// 맨 위는 간판 그림이고, 영화가 있는 강의는 카드를 누르면 그 자리에서 바로 재생, 없는 강의는 '준비 중'으로 흐리게 둔다.
// app.js는 건드리지 않고, js/pansuh.js처럼 화면의 단추를 보고 따라 움직인다.
// ============================================================================
(function () {
  "use strict";
  const M = window.MOVIES || [];
  const view = document.getElementById("view-movie");
  const stage = document.getElementById("movie-stage");
  const shelf = document.getElementById("movie-shelf");
  if (!view || !stage || !shelf) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const thumb = (m) => `https://i.ytimg.com/vi/${m.youtube}/hqdefault.jpg`;
  const P = window.PANSUH_INDEX;
  // 강의 묶음: 판서 강의 목록이 있으면 그 순서대로, 없으면 영화만
  const parts = P ? P.parts.map((part) => ({ name: part.name, pages: part.pages }))
                  : [{ name: "", pages: M.map((m) => ({ id: m.id, title: m.title })) }];
  const total = parts.reduce((n, part) => n + part.pages.length, 0);
  const count = document.getElementById("movie-count");
  if (count) count.textContent = `${M.length} / ${total}편 완성`;

  function play(m, autoplay) {
    stage.innerHTML = `
      <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-sm">
        <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/${m.youtube}${autoplay ? "?autoplay=1" : ""}"
          title="${esc(m.title)} — ${esc(m.subtitle)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 mt-3">
        <div>
          <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">${esc(m.title)}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">${esc(m.subtitle)} · ${m.minutes}분</p>
        </div>
        <a href="${m.pansuh}" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:border-amber-500 transition">🖍️ 판서 강의로</a>
      </div>`;
    shelf.querySelectorAll("[data-movie]").forEach((c) => {
      const on = c.getAttribute("data-movie") === m.id;
      c.classList.toggle("ring-2", on);
      c.classList.toggle("ring-amber-500", on);
    });
  }

  const ready = (m) => `
    <button type="button" data-movie="${m.id}" class="group text-left rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-sm transition">
      <div class="relative aspect-video bg-black">
        <img src="${thumb(m)}" alt="" loading="lazy" class="w-full h-full object-cover group-hover:opacity-90 transition">
        <span class="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 text-white text-[11px] font-bold">${m.minutes}분</span>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-slate-900 dark:text-slate-100">${esc(m.title)}</p>
        <p class="text-xs text-slate-500 dark:text-slate-400">${esc(m.subtitle)}</p>
      </div>
    </button>`;
  // 아직 영화가 없는 강의: 흐린 카드. 누르면 그 강의의 칠판 페이지로 간다
  const soon = (pg) => `
    <a href="${P ? P.base : "pansuh/"}${pg.id}.html" title="판서 강의 보기" class="block rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-90 transition">
      <div class="aspect-video flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs font-bold">🎬 준비 중</div>
      <div class="p-3">
        <p class="text-sm font-bold text-slate-700 dark:text-slate-300">${esc(pg.title)}</p>
        <p class="text-xs text-slate-400 dark:text-slate-500">판서 강의 보기 →</p>
      </div>
    </a>`;
  const byId = Object.fromEntries(M.map((m) => [m.id, m]));
  shelf.innerHTML = parts.map((part) => `
    <div>
      ${part.name ? `<h4 class="text-sm font-black text-slate-700 dark:text-slate-300 mb-3">${esc(part.name)}</h4>` : ""}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        ${part.pages.map((pg) => (byId[pg.id] ? ready(byId[pg.id]) : soon(pg))).join("")}
      </div>
    </div>`).join("");

  shelf.addEventListener("click", (e) => {
    const card = e.target.closest("[data-movie]");
    if (!card) return;
    const m = M.find((x) => x.id === card.getAttribute("data-movie"));
    if (!m) return;
    play(m, true);
    stage.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // 첫 화면은 index.html의 간판 그림. '첫 편부터 보기'를 누르면 그 자리에 첫 영화를 튼다
  const start = stage.querySelector("[data-movie-start]");
  if (start) {
    if (!M.length) start.remove();
    else start.addEventListener("click", () => play(M[0], true));
  }

  document.querySelectorAll("[data-nav-view]").forEach((btn) =>
    btn.addEventListener("click", () => {
      view.classList.toggle("hidden", btn.getAttribute("data-nav-view") !== "movie");
    }));
})();
