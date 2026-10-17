// ============================================================================
// 판서 강의 연결 (pansuh/ 폴더의 칠판 강의를 아카이브 화면에 붙인다)
//  1) 책 상세의 '🖍️ 판서 강의' 탭: 그 책의 판서 강의를 그 자리에서 재생
//  2) 맨 위 '🖍️ 판서 강의' 화면: 강의 76개를 강의 순서대로
// 강의 목록(js/pansuh_index.js)은 판서강좌/tools/build.py가 만든다.
// app.js는 건드리지 않고, 화면의 단추와 제목을 보고 따라 움직인다.
// ============================================================================
(function () {
  "use strict";
  const P = window.PANSUH_INDEX;
  if (!P) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const all = P.parts.flatMap((part) => part.pages.map((pg) => Object.assign({ part: part.name }, pg)));
  const byBook = {};
  all.forEach((pg) => pg.books.forEach((b) => (byBook[b] = byBook[b] || []).push(pg)));
  const ntBooks = new Set(P.parts.filter((p) => p.name === "New Testament").flatMap((p) => p.pages.flatMap((pg) => pg.books)));
  const url = (pg, hash) => P.base + pg.id + ".html" + (hash || "");

  // ---------------------------------------------------------------- 1) 상세 탭
  const tab = document.querySelector('[data-detail-tab="pansuh"]');
  const panel = document.getElementById("tab-panel-pansuh");
  const titleEl = document.getElementById("detail-book-title");
  let book = null, current = null;

  const bookName = () => (titleEl ? titleEl.textContent.trim().replace(/\s*\(.*$/, "") : "");
  const tabOn = () => tab && tab.classList.contains("active");

  function renderPanel() {
    if (!panel) return;
    const pages = byBook[book] || [];
    if (tab) tab.textContent = "🖍️ Whiteboard Lectures" + (pages.length ? ` (${pages.length})` : "");
    if (!pages.length) {
      panel.innerHTML = `<p class="text-sm text-slate-500 dark:text-slate-400 py-8 text-center">There is no whiteboard lecture for ${esc(book)} yet.</p>`;
      return;
    }
    if (!current || !pages.includes(current)) current = pages[0];
    const chips = pages.length > 1 ? `
      <div class="flex flex-wrap gap-2 mb-4">
        ${pages.map((pg, i) => `
          <button data-pansuh-page="${i}" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition ${pg === current
            ? "bg-amber-600 text-white border-amber-600 shadow-sm"
            : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-500"}">
            ${esc(pg.title)}
          </button>`).join("")}
      </div>` : "";
    panel.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span> ${esc(current.title)} · Whiteboard Lectures
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${esc(current.lead)}</p>
          </div>
          <a href="${url(current)}" target="_blank" rel="noopener"
             class="shrink-0 px-3 py-1.5 rounded-lg bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-700 dark:hover:bg-slate-200 transition">
            Open with slides and lecture notes in a new window ↗
          </a>
        </div>
        ${chips}
        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <iframe data-pansuh-frame title="${esc(current.title)} whiteboard lecture" loading="lazy"
                  class="w-full block border-0" style="height: 640px"
                  allow="fullscreen; autoplay"></iframe>
        </div>
        <p class="text-[11px] text-slate-400">Press ▶ on the board, and the whiteboard notes are drawn along with the voice. It is based on lecture notes covering ${current.slides} slides.</p>
      </div>`;
    panel.querySelectorAll("[data-pansuh-page]").forEach((b) =>
      b.addEventListener("click", () => { current = pages[+b.dataset.pansuhPage]; renderPanel(); load(); }));
    if (tabOn()) load();
  }

  // 무거운 강의 페이지는 탭을 열 때만 불러온다
  function load() {
    const f = panel && panel.querySelector("[data-pansuh-frame]");
    if (!f || !current || f.getAttribute("src")) return;
    // 안에 든 칠판 높이에 맞춰 틀 높이를 바꾼다 (같은 사이트라 안을 볼 수 있다)
    f.onload = () => {
      try {
        const d = f.contentDocument;
        const fit = () => { f.style.height = d.documentElement.scrollHeight + "px"; };
        fit();
        if (window.ResizeObserver) new ResizeObserver(fit).observe(d.body);
      } catch (e) { /* 파일로 직접 열면 막힐 수 있다: 기본 높이 그대로 */ }
    };
    f.setAttribute("src", url(current, "?embed=1"));
  }

  if (tab && panel) {
    document.querySelectorAll("[data-detail-tab]").forEach((t) =>
      t.addEventListener("click", () => {
        const on = t === tab;
        panel.classList.toggle("hidden", !on);
        if (on) load();
        else { // 다른 탭으로 가면 재생을 멈춘다
          const f = panel.querySelector("[data-pansuh-frame]");
          if (f && f.getAttribute("src")) { f.removeAttribute("src"); }
        }
      }));
    const sync = () => { const b = bookName(); if (b && b !== book) { book = b; current = null; renderPanel(); } };
    if (titleEl) new MutationObserver(sync).observe(titleEl, { childList: true, characterData: true, subtree: true });
    sync();
  }

  // ---------------------------------------------------------------- 2) 전체 강의 화면
  const view = document.getElementById("view-pansuh");
  const shelf = document.getElementById("pansuh-shelf");

  document.querySelectorAll("[data-nav-view]").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (view) view.classList.toggle("hidden", btn.getAttribute("data-nav-view") !== "pansuh");
      // 모바일 탭은 글자색으로 현재 화면을 표시한다
      document.querySelectorAll(".md\\:hidden [data-nav-view]").forEach((m) => {
        const on = m.getAttribute("data-nav-view") === btn.getAttribute("data-nav-view");
        m.classList.toggle("text-amber-600", on);
        m.classList.toggle("text-slate-500", !on);
      });
    }));

  // 66권 화면으로 가서 그 책을 고르고 판서 탭을 연다
  function openBook(name) {
    const nav = document.querySelector('[data-nav-view="bible"]');
    if (nav) nav.click();
    const isNT = ntBooks.has(name);
    const t = document.querySelector(`[data-testament="${isNT ? "NT" : "OT"}"]`);
    if (t) t.click();
    const search = document.getElementById("search-input");
    if (search && search.value) { search.value = ""; search.dispatchEvent(new Event("input", { bubbles: true })); }
    const card = [...document.querySelectorAll("#books-grid .book-card")].find((c) => (c.querySelector("h4") || {}).textContent === name);
    if (card) card.click();
    if (tab) tab.click();
    const sec = document.getElementById("book-detail-section");
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  window.ezraPansuhOpenBook = openBook;

  if (shelf) {
    shelf.innerHTML = P.parts.map((part) => `
      <div>
        <h3 class="text-base font-black text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span class="w-1.5 h-5 rounded-full bg-amber-500"></span>${esc(part.name)}
          <span class="text-xs font-medium text-slate-400">${part.pages.length} lectures</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          ${part.pages.map((pg) => `
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-500 transition flex flex-col gap-2">
              <div class="flex items-start justify-between gap-2">
                <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${esc(pg.title)}</h4>
                <span class="shrink-0 text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">${pg.slides} slides</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 flex-1">${esc(pg.lead)}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <a href="${url(pg, "#player")}" class="px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition">▶ Whiteboard lecture</a>
                ${pg.books.map((b) => `<button data-pansuh-book="${esc(b)}" class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition">📖 ${esc(b)}</button>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>`).join("");
    shelf.addEventListener("click", (e) => {
      const b = e.target.closest("[data-pansuh-book]");
      if (b) openBook(b.dataset.pansuhBook);
    });
  }
})();
