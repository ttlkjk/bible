// ============================================================================
// 에스라 성경강좌 인터랙티브 웹 애플리케이션 메인 제어 로직 (App.js)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 상태 (State)
  // --------------------------------------------------------------------------
  const state = {
    currentTestament: "OT", // "OT" or "NT"
    currentCategory: "All",
    currentOrderMode: "canonical", // "canonical" (정경순서) or "chronological" (연대기순서)
    currentBookId: 1, // 1: 창세기
    currentDetailTab: "overview", // "overview", "ezra", "lectures", "quiz", "maps"
    searchQuery: "",
    theme: localStorage.getItem("ezra_theme") || "light",
    fontSize: parseInt(localStorage.getItem("ezra_font_size")) || 16,
    activeLectureNo: null, // 현재 펼쳐진 설교 번호
    activeQuizzes: [],
    quizScore: 0,
    quizAnsweredCount: 0,
    isGoldenBellMode: false,
    quizSearchQuery: "",
    quizFilterMode: "all", // "all", "unanswered", "wrong"
    quizUserAnswers: {}, // { [qIdx]: { selectedIdx, isCorrect } }
    quizStreak: 0,
    maxQuizStreak: 0,
    currentMapIndex: 0 // 현재 책의 인포그래픽 장 번호 (0, 1, 2...)
  };

  // --------------------------------------------------------------------------
  // DOM 요소 선택자
  // --------------------------------------------------------------------------
  const elements = {
    // 뷰 전환
    mainViewNav: document.querySelectorAll("[data-nav-view]"),
    viewSections: {
      bible: document.getElementById("view-bible"),
      timeline: document.getElementById("view-timeline"),
      files: document.getElementById("view-files")
    },
    // 구약/신약 토글
    testamentTabs: document.querySelectorAll("[data-testament]"),
    categoryPillsContainer: document.getElementById("category-pills"),
    orderToggleBtn: document.getElementById("btn-order-toggle"),
    orderModeLabel: document.getElementById("order-mode-label"),
    searchBar: document.getElementById("search-input"),
    booksGrid: document.getElementById("books-grid"),
    
    // 상세 보기 영역
    detailSection: document.getElementById("book-detail-section"),
    detailTitle: document.getElementById("detail-book-title"),
    detailSubtitle: document.getElementById("detail-book-subtitle"),
    detailMetaBadges: document.getElementById("detail-meta-badges"),
    detailKeyVerse: document.getElementById("detail-key-verse"),
    
    // 상세 탭
    detailTabs: document.querySelectorAll("[data-detail-tab]"),
    tabPanels: {
      overview: document.getElementById("tab-panel-overview"),
      timeline: document.getElementById("tab-panel-timeline"),
      ezra: document.getElementById("tab-panel-ezra"),
      lectures: document.getElementById("tab-panel-lectures"),
      media: document.getElementById("tab-panel-media"),
      quiz: document.getElementById("tab-panel-quiz"),
      maps: document.getElementById("tab-panel-maps")
    },
    
    // 타임라인 컨테이너
    timelineContainer: document.getElementById("timeline-container"),
    
    // 로컬 파일 안내 컨테이너
    localFilesPpt: document.getElementById("local-files-ppt"),
    localFilesAudio: document.getElementById("local-files-audio"),
    
    // 유튜브 모달
    youtubeModal: document.getElementById("youtube-modal"),
    youtubeIframe: document.getElementById("youtube-iframe"),
    closeYoutubeModal: document.getElementById("btn-close-youtube"),
    modalYoutubeTitle: document.getElementById("youtube-modal-title"),
    
    // 설교 전문 모달
    sermonModal: document.getElementById("sermon-modal"),
    closeSermonModal: document.getElementById("btn-close-sermon"),
    
    // 설정 및 화면 제어 버튼
    fullscreenBtn: document.getElementById("btn-fullscreen-toggle"),
    sidebarToggleBtn: document.getElementById("btn-toggle-sidebar"),
    booksSidebarCol: document.getElementById("books-sidebar-col"),
    bookDetailSection: document.getElementById("book-detail-section"),
    labelToggleSidebar: document.getElementById("label-toggle-sidebar"),
    iconToggleSidebar: document.getElementById("icon-toggle-sidebar"),
    themeToggleBtn: document.getElementById("btn-theme-toggle"),
    fontIncreaseBtn: document.getElementById("btn-font-increase"),
    fontDecreaseBtn: document.getElementById("btn-font-decrease"),
    
    // 토스트
    toast: document.getElementById("toast")
  };

  // --------------------------------------------------------------------------
  // 초기화 (Init)
  // --------------------------------------------------------------------------
  function init() {
    applyTheme(state.theme);
    applyFontSize(state.fontSize);
    renderCategoryPills();
    renderBooksGrid();
    renderBookDetails(state.currentBookId);
    renderTimeline();
    renderLocalFilesIndex();
    bindEvents();
  }

  // --------------------------------------------------------------------------
  // 테마 및 폰트 제어
  // --------------------------------------------------------------------------
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ezra_theme", theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.innerHTML = theme === "dark" 
        ? `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
        : `<svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
  }

  function applyFontSize(size) {
    state.fontSize = Math.min(22, Math.max(14, size));
    document.documentElement.style.setProperty("--font-base-size", `${state.fontSize}px`);
    localStorage.setItem("ezra_font_size", state.fontSize);
  }

  function showToast(message) {
    if (!elements.toast) return;
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    setTimeout(() => {
      elements.toast.classList.remove("show");
    }, 2500);
  }

  // --------------------------------------------------------------------------
  // 카테고리 필터 필스 렌더링
  // --------------------------------------------------------------------------
  function renderCategoryPills() {
    if (!elements.categoryPillsContainer) return;
    const cats = BIBLE_CATEGORIES[state.currentTestament] || ["All"];
    elements.categoryPillsContainer.innerHTML = "";
    
    cats.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
        state.currentCategory === cat
          ? "bg-amber-600 text-white shadow"
          : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
      }`;
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        state.currentCategory = cat;
        renderCategoryPills();
        renderBooksGrid();
      });
      elements.categoryPillsContainer.appendChild(btn);
    });
  }

  // --------------------------------------------------------------------------
  // 66권 그리드 렌더링
  // --------------------------------------------------------------------------
  function renderBooksGrid() {
    if (!elements.booksGrid) return;
    elements.booksGrid.innerHTML = "";

    let list = state.currentOrderMode === "canonical"
      ? [...BIBLE_BOOKS_DATA]
      : getChronologicalBooks();

    // 1. 구약 / 신약 필터
    list = list.filter(b => b.testament === state.currentTestament);

    // 2. 카테고리 필터
    if (state.currentCategory !== "All") {
      list = list.filter(b => b.category === state.currentCategory);
    }

    // 3. 검색어 필터
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(b => 
        b.name.includes(q) || 
        b.engName.toLowerCase().includes(q) ||
        b.theme.toLowerCase().includes(q) ||
        b.author.includes(q) ||
        b.category.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      elements.booksGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <p class="text-base font-medium">No books match your search.</p>
        </div>
      `;
      return;
    }

    list.forEach(book => {
      const card = document.createElement("div");
      const isSelected = book.id === state.currentBookId;
      card.className = `book-card p-3.5 rounded-xl border flex flex-col justify-between ${
        isSelected ? "active ring-2 ring-amber-500" : ""
      }`;

      card.innerHTML = `
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-6 h-6 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center">
              ${state.currentOrderMode === "canonical" ? book.id : book.chronologicalOrder}
            </span>
            <span class="text-xs font-medium text-slate-400 dark:text-slate-500">${book.abbr}</span>
          </div>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
            ${book.category}
          </span>
        </div>
        <div class="my-2">
          <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">${book.name}</h4>
          <p class="text-xs text-slate-400 dark:text-slate-500 truncate">${book.engName} (${book.chapters} chapters)</p>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
          ${book.theme}
        </p>
      `;

      card.addEventListener("click", () => {
        state.currentBookId = book.id;
        state.activeLectureNo = null; // 책 바뀌면 펼침 초기화
        state.isGoldenBellMode = false;
        renderBooksGrid();
        renderBookDetails(book.id);
        
        // 모바일 화면에서 상세 보기 영역으로 부드럽게 스크롤
        if (window.innerWidth < 1024 && elements.detailSection) {
          elements.detailSection.scrollIntoView({ behavior: "smooth" });
        }
      });

      elements.booksGrid.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 권별 상세 내용 렌더링 (개요, 에스라 관점, 설교 목록 및 분석 강해, 퀴즈, 지도)
  // --------------------------------------------------------------------------
  function renderBookDetails(bookId) {
    const book = getBookById(bookId);
    if (!book) return;

    // 책이 바뀔 때 인포그래픽 장 번호 1장(인덱스 0)으로 초기화
    if (state.currentBookId !== bookId) {
      state.currentMapIndex = 0;
    }

    // 헤더 영역
    if (elements.detailTitle) elements.detailTitle.textContent = book.name;
    if (elements.detailSubtitle) elements.detailSubtitle.textContent = book.theme;

    if (elements.detailMetaBadges) {
      // 책이 바뀔 때 메타 패널 초기화
      const existingPanel = document.getElementById("meta-info-panel");
      if (existingPanel) {
        existingPanel.classList.add("hidden");
        existingPanel.innerHTML = "";
        window._metaInfoActiveKey = null;
      }

      elements.detailMetaBadges.innerHTML = `
        <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
          ${book.testament === "OT" ? "Old Testament" : "New Testament"} ${book.category}
        </span>
        <button onclick="window.showMetaInfo('author', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          Author: <strong>${book.author}</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('date', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          Date written: <strong>${book.date}</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('chapters', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          Length: <strong>${book.chapters} chapters</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('order', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-500/20 transition cursor-pointer flex items-center gap-1 group">
          Chronological order: No. ${book.chronologicalOrder}
          <svg class="w-3 h-3 text-indigo-400 group-hover:text-indigo-600 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
      `;
    }

    if (elements.detailKeyVerse) {
      elements.detailKeyVerse.innerHTML = `
        <div class="p-4 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 text-slate-800 dark:text-slate-200">
          <div class="flex items-center gap-2 mb-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Key Verse
          </div>
          <p class="font-medium italic leading-relaxed text-sm md:text-base">${book.keyVerse}</p>
        </div>
      `;
    }

    // 1. 개요 탭 (Overview)
    if (elements.tabPanels.overview) {
      let structureHtml = book.structure.map((item, idx) => `
        <div class="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h5 class="text-sm font-bold text-amber-600 dark:text-amber-400 mb-1">${item.part}</h5>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.content}</p>
        </div>
      `).join("");

      elements.tabPanels.overview.innerHTML = `
        <div class="space-y-6">
          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span> Overview and Central Message of the Book
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              ${book.summary}
            </p>
          </div>

          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span> Chapter-by-Chapter Panorama
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${structureHtml}
            </div>
          </div>
        </div>
      `;
    }

    // 2. 연대기 맥락 탭 (Timeline Context)
    if (elements.tabPanels.timeline) {
      let timelineData = [];
      if (typeof BIBLE_TIMELINE_DATA !== "undefined") {
        timelineData = BIBLE_TIMELINE_DATA;
      }
      
      const era = timelineData.find(e => 
        e.books.some(b => b.includes(book.name) || book.name.includes(b.replace(/·.*/, '')))
      );

      if (era) {
        elements.tabPanels.timeline.innerHTML = `
          <div class="space-y-6">
            <div class="p-6 rounded-2xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-2 h-full" style="background-color: ${era.color}"></div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-sm" style="background-color: ${era.color}">
                  ${era.period}
                </span>
                <span class="text-xs font-semibold text-slate-500">${era.approxDate}</span>
              </div>
              
              <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">Historical Background and Place in the Bible</h4>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                ${era.summary}
              </p>
              
              <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h5 class="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-2">
                  <span class="text-lg">💡</span> Ezra view: key points of the chronological read-through
                </h5>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  ${era.ezraKeyPoint}
                </p>
              </div>

              <div class="mt-5">
                <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Books from this era</h5>
                <div class="flex flex-wrap gap-2">
                  ${era.books.map(b => {
                    const isCurrent = b.includes(book.name) || book.name.includes(b.replace(/·.*/, ''));
                    return `<span class="px-3 py-1 rounded-lg text-xs font-semibold border ${isCurrent ? 'bg-slate-800 text-white border-slate-800 dark:bg-slate-100 dark:text-slate-900' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}">${b}</span>`;
                  }).join("")}
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        elements.tabPanels.timeline.innerHTML = `<div class="p-6 text-center text-slate-500 text-sm">No chronological context is available for this book.</div>`;
      }
    }

    // 3. 에스라 관점 탭 (Ezra Insight)
    if (elements.tabPanels.ezra) {
      elements.tabPanels.ezra.innerHTML = `
        <div class="space-y-6">
          <div class="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 border border-amber-500/30">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center shadow">
                E
              </span>
              <div>
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">The Thread of Pastor Woo-ho Noh's Bible Course at Ezra House</h4>
                <p class="text-xs text-slate-500">The key to reading through the Bible with historical facts and God's heart</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              ${book.ezraPerspective}
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
              <div>
                <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">Ezra House TV official YouTube</h5>
                <p class="text-xs text-slate-500">Watch Pastor Woo-ho Noh's video lectures on [${book.name}]</p>
              </div>
            </div>
            <a href="${EZRA_YOUTUBE_DATA.getBookYoutubeUrl(book.name)}" target="_blank" 
               class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-1.5 shrink-0">
              <span>Watch on YouTube</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    // 3. 대하설교 녹취록 탭 (Lectures & 심층 분석 뷰어)
    if (elements.tabPanels.lectures) {
      const lectures = getLecturesForBook(book.name);
      
      let lectureListHtml = lectures.map(lec => {
        const isExpanded = state.activeLectureNo === lec.no;
        const keyPointsList = lec.keyPoints ? lec.keyPoints.map(kp => `<li class="flex items-start gap-2"><span class="text-amber-500 font-bold">•</span><span>${kp}</span></li>`).join("") : "";

        return `
          <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all shadow-sm">
            
            <!-- 설교 헤더 카드 (클릭 시 아코디언 토글) -->
            <div class="p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition"
                 onclick="toggleLectureDetails('${lec.no}')">
              <div class="space-y-1 flex-1">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    Lecture ${lec.no}
                  </span>
                  <h5 class="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100">${lec.title}</h5>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">Text: <strong>${lec.scripture}</strong></p>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <button onclick="event.stopPropagation(); openSermonModal('${book.name}', '${lec.no}')" 
                        title="Read the full transcript in a large view" 
                        class="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-white shadow-sm flex items-center gap-1 transition">
                  <span>📖 Read in full</span>
                </button>
                
                <span class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-bold transition-transform ${isExpanded ? 'rotate-180' : ''}">
                  ▼
                </span>
              </div>
            </div>

            <!-- 설교 분석 강해 상세 내용 (아코디언 펼침 영역) -->
            <div id="lecture-body-${lec.no}" class="${isExpanded ? 'block' : 'hidden'} border-t border-slate-100 dark:border-slate-800 p-5 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/80 dark:to-slate-900 space-y-4">
              
              <!-- 1. 핵심 개요 요약 -->
              <div>
                <h6 class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Saga Sermon key summary
                </h6>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-white dark:bg-slate-800/60 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                  ${lec.summary || "This lecture is a key transcript from Pastor Woo-ho Noh's Ezra course."}
                </p>
              </div>

              <!-- 2. 주요 강해 포인트 3가지 -->
              ${lec.keyPoints && lec.keyPoints.length > 0 ? `
                <div>
                  <h6 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Key points of the sermon text
                  </h6>
                  <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 bg-slate-100/70 dark:bg-slate-800/40 p-3.5 rounded-lg">
                    ${keyPointsList}
                  </ul>
                </div>
              ` : ''}

              <!-- 3. 삶의 적용 및 에스라 관점 메시지 -->
              ${lec.message ? `
                <div class="p-3.5 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <strong class="text-amber-600 dark:text-amber-400 block mb-1">💡 Ezra Pulpit conclusion &amp; meditation:</strong>
                  ${lec.message}
                </div>
              ` : ''}

              <!-- 4. 전문 독서 팝업 안내 버튼 (외부 파일 연결 없이 완독 가능) -->
              <div class="pt-3 border-t border-slate-200/70 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  The full transcript is included in the web app (no external file needed)
                </span>
                <button onclick="openSermonModal('${book.name}', '${lec.no}')" 
                        class="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-1.5">
                  <span>📖 Read large in the full-text reader</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>

            </div>

          </div>
        `;
      }).join("");

      elements.tabPanels.lectures.innerHTML = `
        <div class="space-y-4">
          
          <!-- 안내 배너 -->
          <div class="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>🎙️ [${book.name}] Saga Sermon full transcript viewer</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-bold">${lectures.length} lectures in all</span>
              </h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                No HWP files or other programs needed: <strong>click a lecture to see its summary exposition, or press the [📖 Read in full] button to read the whole transcript like a book</strong>.
              </p>
            </div>
            <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0">
              ✓ Read in full inside the app
            </span>
          </div>

          <!-- 설교 아코디언 목록 -->
          <div class="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            ${lectureListHtml}
          </div>

        </div>
      `;
    }

    // 4. PPT·오디오 강좌 탭 (Media Studio)
    if (elements.tabPanels.media) {
      renderBookMediaTab(book);
    }

    // 5. 퀴즈 탭 (Interactive Quiz with Real-time Search, Typography & Golden Bell)
    if (elements.tabPanels.quiz) {
      renderQuizTab(book);
    }

    // 6. 성경 지도 및 미디어 탭 (Maps & Media)
    if (elements.tabPanels.maps) {
      renderBookMapsTab(book);
    }
  }

  // --------------------------------------------------------------------------
  // 권별 PPT·오디오 강좌 미디어 스튜디오 탭 렌더링
  // --------------------------------------------------------------------------
  function renderBookMediaTab(book) {
    if (!elements.tabPanels.media || !book) return;
    elements.tabPanels.media.innerHTML = `
      <div class="space-y-6">
        <!-- PPT 강의 슬라이드 스튜디오 -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span> [${book.name}] Ezra Bible Course PPT slide materials
            </h4>
            <span class="text-xs text-slate-500">Edit and add lecture notes yourself with the [Edit] button</span>
          </div>
          <div id="tab-book-slide-studio"></div>
        </div>

        <!-- 성경강좌 및 낭독 오디오 플레이어 -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> [${book.name}] Bible course &amp; audio player
            </h4>
            <span class="text-xs text-slate-500">Speed (0.8x–2.0x) / A-B section repeat</span>
          </div>
          <div id="tab-book-audio-studio"></div>
        </div>
      </div>
    `;

    if (typeof window.renderSlideStudioComponent === "function") {
      window.renderSlideStudioComponent("tab-book-slide-studio", book.name);
    }
    if (typeof window.renderAudioStudioComponent === "function") {
      window.renderAudioStudioComponent("tab-book-audio-studio", book.name);
    }
  }

  // --------------------------------------------------------------------------
  // 권별 및 골든벨 핵심 성경 퀴즈 탭 렌더링 (실시간 검색, 가독성 폰트, 채점 게이지)
  // --------------------------------------------------------------------------
  function renderQuizTab(book) {
    if (!elements.tabPanels.quiz || !book) return;

    if (!state.isGoldenBellMode && (!state.activeQuizzes || state.activeQuizzes.length === 0 || state.lastLoadedBookId !== book.id)) {
      state.activeQuizzes = typeof getBookQuizzes === "function" 
        ? getBookQuizzes(book.id, book.name) 
        : (book.quizzes || []);
      state.lastLoadedBookId = book.id;
      state.quizUserAnswers = {};
      state.quizScore = 0;
      state.quizAnsweredCount = 0;
      state.quizStreak = 0;
      state.maxQuizStreak = 0;
      state.quizSearchQuery = "";
      state.quizFilterMode = "all";
    }

    const quizzes = state.activeQuizzes || [];
    window.currentActiveQuizzes = quizzes;

    if (quizzes.length === 0) {
      elements.tabPanels.quiz.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">📖</div>
          <h4 class="text-base font-bold text-slate-700 dark:text-slate-300">Quizzes for this book are being prepared.</h4>
          <p class="text-xs text-slate-500 mt-1">In-depth questions from the Ezra Bible Course will be added soon.</p>
        </div>
      `;
      return;
    }

    // 통계 계산
    const totalCount = quizzes.length;
    const answeredCount = Object.keys(state.quizUserAnswers || {}).length;
    const correctCount = Object.values(state.quizUserAnswers || {}).filter(a => a.isCorrect).length;
    const wrongCount = answeredCount - correctCount;
    const progressPct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
    const scorePct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    // 필터링 적용
    const qQuery = (state.quizSearchQuery || "").trim().toLowerCase();
    
    // 텍스트 하이라이트 헬퍼
    const highlightMatch = (text) => {
      if (!qQuery || !text) return text;
      const regex = new RegExp(`(${qQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<mark class="bg-amber-400/30 text-amber-900 dark:text-amber-200 px-1 rounded font-bold">$1</mark>');
    };

    // 문제 필터링
    const filteredQuizzes = quizzes.map((q, originalIdx) => ({ q, originalIdx })).filter(({ q, originalIdx }) => {
      // 1. 상태 필터 모드
      const ansInfo = state.quizUserAnswers ? state.quizUserAnswers[originalIdx] : null;
      if (state.quizFilterMode === "unanswered" && ansInfo) return false;
      if (state.quizFilterMode === "wrong" && (!ansInfo || ansInfo.isCorrect)) return false;

      // 2. 검색어 필터
      if (qQuery) {
        const inQuestion = q.q && q.q.toLowerCase().includes(qQuery);
        const inOptions = q.options && q.options.some(opt => opt.toLowerCase().includes(qQuery));
        const inExp = q.exp && q.exp.toLowerCase().includes(qQuery);
        const inBook = q.bookName && q.bookName.toLowerCase().includes(qQuery);
        return inQuestion || inOptions || inExp || inBook;
      }
      return true;
    });

    // 전 문제 완료 여부 및 성적표 HTML
    const isAllFinished = totalCount > 0 && answeredCount === totalCount;
    let resultReportHtml = "";
    if (isAllFinished) {
      let gradeTitle = "👑 Ezra Bible Scholar";
      let gradeDesc = "You have fully mastered the Word and deeply understood God's heart. A giant of the Bible!";
      let gradeBadgeBg = "from-amber-500 to-amber-600 text-white";
      if (scorePct < 60) {
        gradeTitle = "🥉 Budding Bible Reader";
        gradeDesc = "We recommend reviewing step by step while listening to the Bible read-through panorama lectures!";
        gradeBadgeBg = "from-slate-600 to-slate-700 text-white";
      } else if (scorePct < 80) {
        gradeTitle = "🥈 Seeker of the Word";
        gradeDesc = "You are faithfully attending the Ezra Bible Course and laying a firm foundation of truth.";
        gradeBadgeBg = "from-blue-600 to-blue-700 text-white";
      } else if (scorePct < 100) {
        gradeTitle = "🥇 Berean Believer";
        gradeDesc = "Like the noble Bereans, you search the Scriptures daily and have shown outstanding insight!";
        gradeBadgeBg = "from-emerald-600 to-emerald-700 text-white";
      }

      resultReportHtml = `
        <div class="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 border-2 border-amber-500/40 text-white shadow-xl animate-fade-in mb-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-center md:text-left">
              <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradeBadgeBg} text-xs font-black shadow mb-2">
                ${gradeTitle}
              </span>
              <h3 class="text-xl sm:text-2xl font-black text-amber-300">
                🎉 Final quiz score: ${correctCount} / ${totalCount} correct (${scorePct} points)
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-xl">
                ${gradeDesc}
              </p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2">
              ${wrongCount > 0 ? `
                <button onclick="filterWrongQuizNotes()" class="px-4 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold shadow transition flex items-center gap-1.5">
                  <span>📝 Review wrong answers only (${wrongCount} questions)</span>
                </button>
              ` : ''}
              <button onclick="resetBookQuizzes(${book.id})" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow transition flex items-center gap-1.5">
                <span>🔄 Take the quiz again</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // 퀴즈 항목 리스트 HTML
    let quizzesHtml = "";
    if (filteredQuizzes.length === 0) {
      quizzesHtml = `
        <div class="py-12 text-center text-slate-400 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <span class="text-2xl block mb-2">🔍</span>
          <p class="text-sm font-semibold text-slate-600 dark:text-slate-300">No questions match your search.</p>
          <button onclick="clearQuizSearchFilter()" class="mt-3 px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition">
            Show all questions
          </button>
        </div>
      `;
    } else {
      quizzesHtml = filteredQuizzes.map(({ q: quiz, originalIdx: qIdx }) => {
        const ansInfo = state.quizUserAnswers ? state.quizUserAnswers[qIdx] : null;
        const isAnswered = !!ansInfo;
        const userSelected = ansInfo ? ansInfo.selectedIdx : null;

        let optsHtml = quiz.options.map((opt, optIdx) => {
          let btnClass = "quiz-option-btn";
          let badgeHtml = `
            <span class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
              ${optIdx + 1}
            </span>
          `;

          if (isAnswered) {
            if (optIdx === quiz.ans) {
              btnClass += " correct";
              badgeHtml = `<span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>`;
            } else if (optIdx === userSelected) {
              btnClass += " wrong";
              badgeHtml = `<span class="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shrink-0">✕</span>`;
            } else {
              btnClass += " dimmed";
            }
          }

          const highlightedOpt = highlightMatch(opt);
          return `
            <button class="${btnClass}" onclick="checkQuizAnswer(${qIdx}, ${optIdx})" ${isAnswered ? 'disabled' : ''}>
              ${badgeHtml}
              <span class="flex-1">${highlightedOpt}</span>
            </button>
          `;
        }).join("");

        const sourceBadge = quiz.bookName 
          ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 mr-1.5">[${quiz.bookName}]</span>` 
          : '';

        const highlightedQ = highlightMatch(quiz.q);
        const highlightedExp = highlightMatch(quiz.exp);

        return `
          <div id="quiz-block-${qIdx}" class="quiz-card p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm hover:border-amber-400/50">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-2.5">
                <span class="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-xs font-black shrink-0 shadow-sm">
                  Q${qIdx + 1}
                </span>
                <h5 class="quiz-question-text font-bold text-slate-900 dark:text-slate-100">
                  ${sourceBadge}${highlightedQ}
                </h5>
              </div>
              ${isAnswered ? (ansInfo.isCorrect ? `
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                  ✓ Correct
                </span>
              ` : `
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 shrink-0">
                  ✕ Wrong
                </span>
              `) : ''}
            </div>

            <div class="space-y-2 pt-1">
              ${optsHtml}
            </div>

            <div id="quiz-exp-${qIdx}" class="${isAnswered ? '' : 'hidden'} mt-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm leading-relaxed">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1 font-bold flex items-center gap-1.5">
                <span>💡 Explanation and Ezra view:</span>
              </strong>
              ${highlightedExp}
            </div>
          </div>
        `;
      }).join("");
    }

    const titleHtml = state.isGoldenBellMode
      ? `<span>🏆 Ezra Bible Golden Bell (${totalCount}-question practice exam)</span>`
      : `<span>🎯 [${book.name}] Key Bible Quiz</span>`;

    const descHtml = state.isGoldenBellMode
      ? `Check your Bible knowledge and your eye for redemptive history with quizzes chosen from the whole Bible, from Genesis to Revelation!`
      : `Master the key verses, historical background, and Ezra read-through view of [${book.name}] with a fun quiz.`;

    elements.tabPanels.quiz.innerHTML = `
      <div class="space-y-5 animate-fade-in">
        
        <!-- 1. 성적표 배너 (전 문제 완료 시 표시) -->
        ${resultReportHtml}

        <!-- 2. 퀴즈 헤더 컨트롤 바 -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-sm">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                ${titleHtml}
              </h4>
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-xs font-bold">
                ${totalCount} questions
              </span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              ${descHtml}
            </p>
          </div>

          <!-- 액션 버튼군 -->
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            ${state.isGoldenBellMode ? `
              <button onclick="exitGoldenBellQuiz()" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition shadow-sm">
                ← Back to the [${book.name}] quiz
              </button>
              <button onclick="startRandomQuizGoldenBell(10)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow transition">
                🎲 Draw 10 new
              </button>
              <button onclick="startRandomQuizGoldenBell(20)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 text-white shadow transition">
                🌟 20-question review
              </button>
            ` : `
              <button onclick="resetBookQuizzes(${book.id})" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5 shadow-sm">
                <span>🎲 Shuffle questions</span>
              </button>
              <button onclick="startRandomQuizGoldenBell(10)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 text-white shadow transition flex items-center gap-1.5">
                <span>🏆 10-question Golden Bell</span>
              </button>
              <button onclick="startRandomQuizGoldenBell(20)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 shadow transition flex items-center gap-1.5">
                <span>🌟 20-question review</span>
              </button>
            `}
          </div>
        </div>

        <!-- 3. 실시간 검색 & 필터 칩 바 -->
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          
          <!-- 실시간 검색창 -->
          <div class="relative w-full sm:w-80">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              🔍
            </span>
            <input id="quiz-search-bar" type="text" 
                   value="${state.quizSearchQuery || ''}"
                   placeholder="Search questions, choices, Bible people..." 
                   class="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 dark:text-slate-200 placeholder-slate-400" />
            ${state.quizSearchQuery ? `
              <button onclick="clearQuizSearchFilter()" class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-slate-400 hover:text-slate-600">✕</button>
            ` : ''}
          </div>

          <!-- 퀵 필터 칩 -->
          <div class="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <button onclick="setQuizFilterMode('all')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'all' ? 'bg-amber-500 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              All (${totalCount})
            </button>
            <button onclick="setQuizFilterMode('unanswered')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'unanswered' ? 'bg-amber-500 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              Unanswered (${totalCount - answeredCount})
            </button>
            <button onclick="setQuizFilterMode('wrong')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'wrong' ? 'bg-red-600 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              Wrong answers (${wrongCount})
            </button>
          </div>
        </div>

        <!-- 4. 실시간 진행도 & 채점 게이지 바 -->
        <div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2 shadow-sm">
          <div class="flex flex-wrap items-center justify-between text-xs font-semibold gap-2">
            <div class="flex items-center gap-2">
              <span class="text-slate-600 dark:text-slate-400">
                Progress: <strong class="text-slate-900 dark:text-slate-100">${answeredCount} / ${totalCount} done (${progressPct}%)</strong>
              </span>
              ${state.quizStreak >= 2 ? `
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-black animate-pulse-golden flex items-center gap-1">
                  <span>🔥 ${state.quizStreak} correct in a row!</span>
                </span>
              ` : ''}
            </div>
            <div class="flex items-center gap-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">Correct: ${correctCount}</span>
              <span class="text-red-500 font-bold">Wrong: ${wrongCount}</span>
              <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-black">
                Score: ${scorePct}
              </span>
            </div>
          </div>

          <!-- 게이지 바 -->
          <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
            <div class="bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-400 h-full quiz-progress-fill" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <!-- 5. 퀴즈 카드 목록 -->
        <div class="space-y-4">
          ${quizzesHtml}
        </div>

      </div>
    `;

    // 검색창 입력 이벤트 리스너 연동 (디바운스)
    const searchInput = document.getElementById("quiz-search-bar");
    if (searchInput) {
      let debounceTimer = null;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.quizSearchQuery = e.target.value;
          renderQuizTab(book);
        }, 150);
      });
    }
  }

  // --------------------------------------------------------------------------
  // 권별 다중 성경 지도 및 인포그래픽 탭 렌더링 (1장, 2장, 3장 슬라이드 전환 지원)
  // --------------------------------------------------------------------------
  function renderBookMapsTab(book) {
    if (!elements.tabPanels.maps || !book) return;

    // 다중 인포그래픽 목록 추출 (maps_multi_data.js의 getMultiMapsForBook 우선 연동)
    const mapsList = (typeof getMultiMapsForBook === "function") 
      ? getMultiMapsForBook(book) 
      : [
          {
            id: "default_1",
            label: "Page 1. Background map",
            title: (BIBLE_MAPS_DATA[book.mapType] && BIBLE_MAPS_DATA[book.mapType].title) || `${book.name} background map`,
            desc: (BIBLE_MAPS_DATA[book.mapType] && BIBLE_MAPS_DATA[book.mapType].desc) || "The historical geography of this book",
            render: () => renderInteractiveSvgMap(book.mapType, book)
          }
        ];

    if (!mapsList || mapsList.length === 0) return;

    // 인덱스 유효성 검사
    if (state.currentMapIndex < 0) state.currentMapIndex = 0;
    if (state.currentMapIndex >= mapsList.length) state.currentMapIndex = 0;

    const currentMap = mapsList[state.currentMapIndex];
    const totalPages = mapsList.length;

    // 장 선택 탭 버튼 목록 생성
    const pageTabsHtml = mapsList.map((m, idx) => {
      const isActive = idx === state.currentMapIndex;
      const activeClass = isActive 
        ? "bg-amber-500 text-slate-950 font-black shadow-md border-amber-400 ring-2 ring-amber-400/40" 
        : "bg-slate-800/90 hover:bg-slate-700 text-slate-300 border-slate-700 hover:text-white";
      return `
        <button onclick="window.changeMapPage(${idx})" class="px-3 py-1.5 text-xs rounded-lg border transition-all flex items-center gap-1.5 shrink-0 ${activeClass}">
          <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-slate-950' : 'bg-amber-400'}"></span>
          <span>${m.label || `Page ${idx + 1}`}</span>
        </button>
      `;
    }).join("");

    const prevDisabled = state.currentMapIndex <= 0;
    const nextDisabled = state.currentMapIndex >= totalPages - 1;

    elements.tabPanels.maps.innerHTML = `
      <div class="space-y-4 animate-fade-in">
        <div class="bg-slate-900 p-4 md:p-6 rounded-2xl text-white shadow-xl border border-slate-800">
          
          <!-- 상단 다중 장(슬라이드) 네비게이션 컨트롤 바 -->
          <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 mb-4 shadow-inner">
            
            <!-- 좌측: 현재 장 배지 & 장별 선택 탭 버튼들 -->
            <div class="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold shrink-0 flex items-center gap-1">
                <span>📚 Infographics</span>
                <span class="font-black text-amber-300">(${state.currentMapIndex + 1} / ${totalPages})</span>
              </span>
              <div class="flex items-center gap-1.5 shrink-0">
                ${pageTabsHtml}
              </div>
            </div>

            <!-- 우측: 배경 지도 스타일 토글 & 이전/다음 장 & 와이드 보기 -->
            <div class="flex flex-wrap items-center gap-2 shrink-0 ml-auto">
              <!-- 배경 지도 스타일 토글 (간단한 지도 / 물리 지형도 / 위성 사진) -->
              <div class="flex items-center rounded-lg bg-slate-900/90 p-0.5 border border-slate-700/80 shadow-sm shrink-0">
                <button onclick="window.setMapBgMode('simplified')" 
                        class="px-2 py-1 text-[11px] rounded-md font-bold transition-all flex items-center gap-1 ${(window.currentMapBgMode || 'simplified') === 'simplified' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}" 
                        title="Clean blank map background, to see the geography at a glance">
                  <span>🗺️ Simple map</span>
                </button>
                <button onclick="window.setMapBgMode('physical')" 
                        class="px-2 py-1 text-[11px] rounded-md font-bold transition-all flex items-center gap-1 ${window.currentMapBgMode === 'physical' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}" 
                        title="Real physical terrain map background">
                  <span>🌄 Terrain</span>
                </button>
                <button onclick="window.setMapBgMode('satellite')" 
                        class="px-2 py-1 text-[11px] rounded-md font-bold transition-all flex items-center gap-1 ${window.currentMapBgMode === 'satellite' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}" 
                        title="Satellite photo background">
                  <span>🛰️ Satellite</span>
                </button>
              </div>

              <!-- 이전 / 다음 장 버튼 -->
              <button onclick="window.changeMapPage(${state.currentMapIndex - 1})" 
                      ${prevDisabled ? "disabled" : ""} 
                      class="px-2.5 py-1.5 text-xs rounded-lg font-bold border transition-all flex items-center gap-1 ${prevDisabled ? 'opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 shadow'}"
                      title="Previous infographic">
                <span>◀ Previous page</span>
              </button>
              <button onclick="window.changeMapPage(${state.currentMapIndex + 1})" 
                      ${nextDisabled ? "disabled" : ""} 
                      class="px-2.5 py-1.5 text-xs rounded-lg font-bold border transition-all flex items-center gap-1 ${nextDisabled ? 'opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 shadow'}"
                      title="Next infographic">
                <span>Next page ▶</span>
              </button>
              <button id="btn-map-expand-view" class="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/40 flex items-center gap-1.5 transition shadow-sm" title="Fold the sidebar to see the map across the full screen">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5-5m-7 11v4m0 0H4m4 0l-5-5m16 5v-4m0 0h-4m4 0l-5 5"></path></svg>
                <span>Wider view</span>
              </button>
            </div>
          </div>

          <!-- 현재 선택된 장 타이틀 및 설명 배너 -->
          <div class="mb-3.5 pb-3 border-b border-slate-800/80">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-xs font-black">Page ${state.currentMapIndex + 1}</span>
              <h4 class="text-base md:text-xl font-bold text-amber-400">${currentMap.title}</h4>
            </div>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${currentMap.desc}</p>
          </div>

          <!-- SVG 인터랙티브 그래픽 컨테이너 -->
          <div class="overflow-hidden rounded-xl w-full flex justify-center bg-slate-950 p-2 md:p-3 border border-slate-800/80 shadow-inner">
            ${currentMap.render ? currentMap.render() : renderInteractiveSvgMap(currentMap.svgType || book.mapType, book)}
          </div>
        </div>
      </div>
    `;

    // 사이드바 토글 버튼 이벤트 연동
    const mapExpandBtn = document.getElementById("btn-map-expand-view");
    if (mapExpandBtn && elements.sidebarToggleBtn) {
      mapExpandBtn.addEventListener("click", () => {
        elements.sidebarToggleBtn.click();
      });
    }
  }

  // 전역 장 전환 및 배경 모드 핸들러 함수
  window.changeMapPage = function(index) {
    const book = getBookById(state.currentBookId);
    if (!book) return;
    state.currentMapIndex = index;
    renderBookMapsTab(book);
  };

  window.setMapBgMode = function(mode) {
    window.currentMapBgMode = mode;
    const book = getBookById(state.currentBookId);
    if (book) {
      renderBookMapsTab(book);
    }
  };

  // --------------------------------------------------------------------------
  // 타임라인 뷰 렌더링 (전체 요약 vs 시대별 자세히 보기)
  // --------------------------------------------------------------------------
  window.timelineMode = "overview"; // 'overview' | 'detail'
  window.currentDetailedEraIndex = 0;

  function renderTimeline() {
    window.renderTimeline = renderTimeline;
    if (!elements.timelineContainer) return;
    const container = elements.timelineContainer;
    container.innerHTML = "";

    const btnOverview = document.getElementById("btn-timeline-overview");
    const btnDetail = document.getElementById("btn-timeline-detail");

    if (btnOverview && btnDetail) {
      // 탭 스타일 업데이트
      if (window.timelineMode === "overview") {
        btnOverview.className = "px-4 py-2.5 text-sm font-bold border-b-2 border-amber-600 text-amber-600 dark:text-amber-400 transition whitespace-nowrap";
        btnDetail.className = "px-4 py-2.5 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition whitespace-nowrap";
      } else {
        btnDetail.className = "px-4 py-2.5 text-sm font-bold border-b-2 border-amber-600 text-amber-600 dark:text-amber-400 transition whitespace-nowrap";
        btnOverview.className = "px-4 py-2.5 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition whitespace-nowrap";
      }

      // 이벤트 리스너 바인딩 (최초 1회 방지를 위해 onclick 덮어쓰기)
      btnOverview.onclick = () => { window.timelineMode = "overview"; window.renderTimeline(); };
      btnDetail.onclick = () => { window.timelineMode = "detail"; window.renderTimeline(); };
    }

    if (window.timelineMode === "overview") {
      // -------------------------------------------------------------
      // 모드 1: 전체 요약 파노라마 (기존 방식)
      // -------------------------------------------------------------
      container.className = "mt-4 timeline-stem pl-2";
      BIBLE_TIMELINE_DATA.forEach((item, index) => {
        const booksListHtml = item.books.map(b => `
          <span class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm">
            ${b}
          </span>
        `).join("");

        const block = document.createElement("div");
        block.className = "relative pl-10 pb-8";
        block.innerHTML = `
          <div class="absolute left-2 top-1.5 w-6 h-6 rounded-full border-4 border-slate-900 dark:border-slate-950 flex items-center justify-center shadow" style="background-color: ${item.color};">
          </div>
          <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition cursor-pointer" onclick="window.timelineMode='detail'; window.currentDetailedEraIndex=${index}; window.renderTimeline();" title="Click for details">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 class="text-base font-bold text-slate-900 dark:text-slate-100" style="color: ${item.color};">
                ${item.period}
              </h4>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                ${item.approxDate}
              </span>
            </div>
            <p class="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              ${item.summary}
            </p>
            <div class="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 mb-3">
              <strong class="text-amber-600 dark:text-amber-400">Ezra read-through view:</strong> ${item.ezraKeyPoint || item.ezraPerspective}
            </div>
            <div class="flex items-center justify-between mt-2">
              <div class="flex flex-wrap gap-1.5">
                ${booksListHtml}
              </div>
              <span class="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">Details ▶</span>
            </div>
          </div>
        `;
        container.appendChild(block);
      });
    } else {
      // -------------------------------------------------------------
      // 모드 2: 시대별 자세히 보기 (심층 해설)
      // -------------------------------------------------------------
      container.className = "mt-4 flex flex-col md:flex-row gap-6";
      
      // 좌측: 시대 선택 메뉴 (모바일: 가로 스크롤 탭, 데스크탑: 세로 목록)
      const sidebar = document.createElement("div");
      sidebar.className = "w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-1.5 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-4 md:pb-0 pr-0 md:pr-4 custom-scrollbar";
      
      const eraListHtml = BIBLE_TIMELINE_DATA.map((item, idx) => {
        const isActive = window.currentDetailedEraIndex === idx;
        return `
          <button id="era-tab-btn-${idx}" onclick="window.currentDetailedEraIndex=${idx}; window.renderTimeline();" 
                  class="shrink-0 md:w-full text-left px-3 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition flex items-center justify-between ${
                    isActive ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 md:border-transparent'
                  }">
            <div class="flex items-center gap-1.5 md:gap-2">
              <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full shrink-0" style="background-color: ${item.color}"></span>
              <span class="whitespace-nowrap md:whitespace-normal md:truncate">${item.period.replace(/^\d+\.\s*/, '')}</span>
            </div>
            ${isActive ? '<span class="hidden md:inline ml-2 text-amber-600 dark:text-amber-400">▶</span>' : ''}
          </button>
        `;
      }).join("");
      sidebar.innerHTML = eraListHtml;

      // 우측: 상세 콘텐츠 패널
      const content = document.createElement("div");
      content.className = "w-full md:w-2/3";
      
      const era = BIBLE_TIMELINE_DATA[window.currentDetailedEraIndex];
      const booksHtml = era.books.map(b => {
        let q = b.split('(')[0].split('·')[0].trim();
        return `
        <button class="px-3 py-1.5 rounded-lg bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-700 dark:hover:bg-slate-200 transition" title="Go to this book" onclick="document.querySelector('[data-nav-view=bible]').click(); state.searchQuery='${q}'; renderBooksGrid();">
          📖 ${b}
        </button>
        `;
      }).join("");

      content.innerHTML = `
        <div class="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-inner">
          <div class="absolute top-0 left-0 w-2 h-full" style="background-color: ${era.color}"></div>
          
          <div class="mb-6">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-black text-white shadow-sm mb-3" style="background-color: ${era.color}">
              ${era.approxDate}
            </span>
            <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100" style="color: ${era.color}">
              ${era.period}
            </h2>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Historical background and flow</h4>
              <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                ${era.summary}
              </p>
            </div>

            <div class="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 class="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                <span class="text-lg">💡</span> Ezra House read-through context commentary
              </h4>
              <p class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-bold">
                ${era.ezraKeyPoint || era.ezraPerspective}
              </p>
            </div>

            <div>
              <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 border-b border-slate-200 dark:border-slate-700 pb-1">Books from this era (click to open)</h4>
              <div class="flex flex-wrap gap-2">
                ${booksHtml}
              </div>
            </div>
            
            <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-right">
               <button onclick="window.timelineMode='overview'; window.renderTimeline();" class="px-4 py-2 text-xs font-bold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition">
                 ◀ Back to the full panorama
               </button>
            </div>
          </div>
        </div>
      `;

      container.appendChild(sidebar);
      container.appendChild(content);

      // 모바일 환경에서 활성화된 탭이 중앙에 오도록 스크롤 이동
      setTimeout(() => {
        const activeBtn = document.getElementById(`era-tab-btn-${window.currentDetailedEraIndex}`);
        if (activeBtn && window.innerWidth < 768) {
          activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 50);
    }
  }

  let activeSlideCategory = "All";

  // --------------------------------------------------------------------------
  // 로컬 파일 색인 뷰 렌더링 (PPT 및 집중강좌 오디오)
  // --------------------------------------------------------------------------
  function renderLocalFilesIndex() {
    // 1. VIEW 3의 PPT 슬라이드 스튜디오 렌더링
    if (document.getElementById("view-files-slide-studio") && typeof window.renderSlideStudioComponent === "function") {
      window.renderSlideStudioComponent("view-files-slide-studio", "Genesis");
    }

    // 2. 성경 66권 전체 선택 패널 렌더링 (드롭다운, 카테고리 필터, 66권 버튼 그리드)
    renderSlideBookSelectorUI();

    // 3. VIEW 3의 MP3 오디오 스튜디오 렌더링
    if (document.getElementById("view-files-audio-studio") && typeof window.renderAudioStudioComponent === "function") {
      window.renderAudioStudioComponent("view-files-audio-studio");
    }

    // 4. 로컬 PPT 파일 목록 렌더링 (경로 복사 및 슬라이드 바로가기)
    if (elements.localFilesPpt) {
      const pptList = window.LOCAL_PPT_FILES || [];
      elements.localFilesPpt.innerHTML = pptList.map(file => `
        <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start justify-between gap-3 shadow-sm hover:border-amber-500/40 transition">
          <div class="space-y-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500 text-white shrink-0">PPT</span>
              <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">${file.name}</h5>
            </div>
            <p class="text-xs text-slate-500 line-clamp-1">${file.desc}</p>
            <p class="text-[11px] text-amber-600 dark:text-amber-400 font-mono select-all truncate">${file.path}</p>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="window.ezraSlideStudio.setBook('${file.book || 'Genesis'}'); document.getElementById('view-files-slide-studio').scrollIntoView({behavior:'smooth'})" 
                    class="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition">
              View slides
            </button>
            <button onclick="copyFilePath('${file.path.replace(/\\/g, '\\\\')}')" 
                    class="px-2.5 py-1 text-xs font-semibold rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Copy path
            </button>
          </div>
        </div>
      `).join("");
    }

    // 5. 로컬 오디오 파일 목록 렌더링 (트랙 바로 재생 및 경로 복사)
    if (elements.localFilesAudio) {
      const audioList = window.LOCAL_AUDIO_FILES || [];
      elements.localFilesAudio.innerHTML = audioList.map((audio, idx) => `
        <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 shadow-sm hover:border-emerald-500/40 transition">
          <div class="flex items-center gap-2.5 truncate">
            <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
              ${audio.id || (idx + 1)}
            </span>
            <div class="truncate">
              <div class="flex items-center gap-1.5 truncate">
                <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">${audio.title}</span>
                ${audio.book ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">${audio.book}</span>` : ''}
              </div>
              <span class="text-[11px] text-slate-400 font-mono truncate block">${audio.fileName}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button onclick="window.ezraAudioStudio.playTrack(${idx}); const s = document.getElementById('view-files-audio-studio'); if (s) s.scrollIntoView({behavior:'smooth', block:'center'});" 
                    class="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow transition flex items-center gap-1">
              <span>▶ Play now</span>
            </button>
            <button onclick="copyFilePath('${audio.path.replace(/\\/g, '\\\\')}')" 
                    class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Copy H: drive path">
              Copy path
            </button>
          </div>
        </div>
      `).join("");
    }
  }

  // --------------------------------------------------------------------------
  // 성경 66권 전체 슬라이드 네비게이터 UI 렌더러 (드롭다운, 카테고리, 66권 버튼)
  // --------------------------------------------------------------------------
  const SPECIAL_LECTURE_TOPICS = [
    { key: "Course Principles", label: "Course principles and how the OT books relate (Lecture 1)", badge: "Lecture 1" },
    { key: "Diet Lecture", label: "Leviticus: holy eating and health (Lecture 3)", badge: "Lecture 3" },
    { key: "Intertestamental Period", label: "The 400-year Intertestamental Period (Malachi – Matthew)", badge: "Intertestamental" },
    { key: "Roman History", label: "History of the Roman Empire and the background of Acts", badge: "Rome" },
    { key: "OT Survey", label: "Ezra 30-hour Old Testament survey textbook", badge: "OT Survey" },
    { key: "NT Survey", label: "Ezra 30-hour New Testament survey textbook", badge: "NT Survey" },
    { key: "Shema Lecture", label: "Shema education: passing the faith to the next generation", badge: "Shema" },
    { key: "Bible and History", label: "Special lecture: the Bible, history, and the future", badge: "Eschatology" }
  ];

  function renderSlideBookSelectorUI() {
    const labelEl = document.getElementById("current-slide-book-label");
    const selectBox = document.getElementById("slide-book-select-box");
    const catContainer = document.getElementById("slide-category-filters");
    const buttonsGrid = document.getElementById("slide-book-buttons-grid");

    const currentBook = window.ezraSlideStudio ? window.ezraSlideStudio.activeBook : "Genesis";
    if (labelEl) {
      labelEl.innerHTML = `Current lecture: <strong class="text-amber-600 dark:text-amber-400 text-sm font-black">${currentBook}</strong>`;
    }

    // 1. 빠른 이동 드롭다운 (66권 전체 구약/신약 그룹핑 + 집중특강 8개)
    if (selectBox && selectBox.options.length === 0) {
      const otBooks = BIBLE_BOOKS_DATA.filter(b => b.testament === "OT");
      const ntBooks = BIBLE_BOOKS_DATA.filter(b => b.testament === "NT");

      let optHtml = `<optgroup label="Old Testament (39 books)">`;
      otBooks.forEach(b => {
        optHtml += `<option value="${b.name}" ${b.name === currentBook ? 'selected' : ''}>[OT ${b.id}] ${b.name} (${b.chapters} chapters) - ${b.category}</option>`;
      });
      optHtml += `</optgroup><optgroup label="New Testament (27 books)">`;
      ntBooks.forEach(b => {
        optHtml += `<option value="${b.name}" ${b.name === currentBook ? 'selected' : ''}>[NT ${b.id}] ${b.name} (${b.chapters} chapters) - ${b.category}</option>`;
      });
      optHtml += `</optgroup><optgroup label="💡 Ezra Intensive Lectures and special lecture materials (8)">`;
      SPECIAL_LECTURE_TOPICS.forEach(t => {
        optHtml += `<option value="${t.key}" ${t.key === currentBook ? 'selected' : ''}>[Special] ${t.label}</option>`;
      });
      optHtml += `</optgroup>`;
      selectBox.innerHTML = optHtml;

      selectBox.addEventListener("change", (e) => {
        if (window.ezraSlideStudio) {
          window.ezraSlideStudio.setBook(e.target.value);
          const canvas = document.getElementById("view-files-slide-studio");
          if (canvas) canvas.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else if (selectBox) {
      selectBox.value = currentBook;
    }

    // 2. 카테고리 필터 탭 (66권 카테고리 + 집중특강 탭)
    if (catContainer) {
      const categories = [
        "All 66 books",
        "Law", "History", "Poetry & Wisdom", "Major Prophets", "Minor Prophets",
        "Gospels", "Pauline Epistles", "General Epistles", "Prophecy",
        "💡 Intensive Lectures"
      ];

      catContainer.innerHTML = categories.map(cat => {
        const isCatActive = (cat === "All 66 books" && activeSlideCategory === "All") || activeSlideCategory === cat;
        return `
          <button onclick="window.filterSlideCategory('${cat === 'All 66 books' ? 'All' : cat}')" 
                  class="px-2.5 py-1 rounded-full text-xs font-bold transition ${
                    isCatActive 
                      ? 'bg-amber-600 text-white shadow-sm' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }">
            ${cat}
          </button>
        `;
      }).join("");
    }

    // 3. 성경 권별 버튼 목록 (선택된 카테고리 또는 집중특강 목록)
    if (buttonsGrid) {
      if (activeSlideCategory === "💡 Intensive Lectures") {
        buttonsGrid.innerHTML = SPECIAL_LECTURE_TOPICS.map(t => {
          const isActive = t.key === currentBook;
          return `
            <button onclick="window.ezraSlideStudio.setBook('${t.key}'); document.getElementById('view-files-slide-studio').scrollIntoView({behavior:'smooth'})" 
                    class="px-3 py-1.5 rounded-lg text-xs transition flex items-center gap-1.5 shrink-0 ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 font-black shadow-md ring-2 ring-amber-400 scale-105' 
                        : 'border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-white font-bold'
                    }">
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-600 text-white font-mono">${t.badge}</span>
              <span>${t.label}</span>
            </button>
          `;
        }).join("");
      } else {
        let filtered = [...BIBLE_BOOKS_DATA];
        if (activeSlideCategory !== "All") {
          filtered = filtered.filter(b => b.category === activeSlideCategory);
        }

        buttonsGrid.innerHTML = filtered.map(b => {
          const isBookActive = b.name === currentBook;
          return `
            <button onclick="window.ezraSlideStudio.setBook('${b.name}'); document.getElementById('view-files-slide-studio').scrollIntoView({behavior:'smooth'})" 
                    class="px-2.5 py-1 rounded-lg text-xs transition flex items-center gap-1 shrink-0 ${
                      isBookActive 
                        ? 'bg-amber-500 text-slate-950 font-black shadow-md ring-2 ring-amber-400 scale-105' 
                        : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-white font-medium'
                    }" title="${b.name} (${b.chapters} chapters) - ${b.theme}">
              <span class="text-[10px] opacity-70">${b.id}.</span>
              <span>${b.name}</span>
            </button>
          `;
        }).join("");
      }
    }
  }

  // 전역 카테고리 필터 및 슬라이드 권 변경 훅
  window.filterSlideCategory = function(cat) {
    activeSlideCategory = cat;
    renderSlideBookSelectorUI();
  };

  window.onSlideBookChanged = function(bookName) {
    renderSlideBookSelectorUI();
  };

  // --------------------------------------------------------------------------
  // 이벤트 바인딩 (Event Handlers)
  // --------------------------------------------------------------------------
  function bindEvents() {
    // 1. 메인 뷰 전환 네비게이션 (성경강좌 66권 / 연대기 타임라인 / 로컬 강좌자료)
    elements.mainViewNav.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.getAttribute("data-nav-view");
        
        elements.mainViewNav.forEach(b => b.classList.remove("active", "text-amber-600", "border-amber-600", "bg-white", "dark:bg-slate-900"));
        btn.classList.add("active", "text-amber-600", "border-amber-600", "bg-white", "dark:bg-slate-900");

        Object.keys(elements.viewSections).forEach(vKey => {
          if (elements.viewSections[vKey]) {
            elements.viewSections[vKey].classList.toggle("hidden", vKey !== targetView);
          }
        });
      });
    });

    // 2. 구약 / 신약 탭
    elements.testamentTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const test = tab.getAttribute("data-testament");
        state.currentTestament = test;
        state.currentCategory = "All";

        elements.testamentTabs.forEach(t => t.classList.remove("active", "bg-amber-600", "text-white"));
        tab.classList.add("active", "bg-amber-600", "text-white");

        renderCategoryPills();
        renderBooksGrid();
      });
    });

    // 3. 정경 순서 vs 연대기 순서 토글
    if (elements.orderToggleBtn) {
      elements.orderToggleBtn.addEventListener("click", () => {
        state.currentOrderMode = state.currentOrderMode === "canonical" ? "chronological" : "canonical";
        if (elements.orderModeLabel) {
          elements.orderModeLabel.textContent = state.currentOrderMode === "canonical" ? "Canonical order" : "Chronological order";
        }
        elements.orderToggleBtn.classList.toggle("bg-indigo-600", state.currentOrderMode === "chronological");
        elements.orderToggleBtn.classList.toggle("text-white", state.currentOrderMode === "chronological");
        renderBooksGrid();
        showToast(`Order: ${state.currentOrderMode === "canonical" ? "Canonical order, Genesis – Revelation" : "Pastor Woo-ho Noh's historical order by era"}`);
      });
    }

    // 4. 실시간 검색
    if (elements.searchBar) {
      elements.searchBar.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderBooksGrid();
      });
    }

    // 5. 상세 보기 하위 탭 (개요 / 에스라 / 설교 / 퀴즈 / 지도)
    elements.detailTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const tKey = tab.getAttribute("data-detail-tab");
        state.currentDetailTab = tKey;

        elements.detailTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        Object.keys(elements.tabPanels).forEach(pKey => {
          if (elements.tabPanels[pKey]) {
            elements.tabPanels[pKey].classList.toggle("hidden", pKey !== tKey);
          }
        });
      });
    });

    // 6. 테마 토글 버튼
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener("click", () => {
        const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(newTheme);
      });
    }

    // 7. 폰트 크기 조절
    if (elements.fontIncreaseBtn) {
      elements.fontIncreaseBtn.addEventListener("click", () => {
        applyFontSize(state.fontSize + 1);
        showToast(`Text size: ${state.fontSize}px`);
      });
    }
    if (elements.fontDecreaseBtn) {
      elements.fontDecreaseBtn.addEventListener("click", () => {
        applyFontSize(state.fontSize - 1);
        showToast(`Text size: ${state.fontSize}px`);
      });
    }

    // 8. 설교 전문 모달 닫기
    if (elements.closeSermonModal) {
      elements.closeSermonModal.addEventListener("click", () => {
        if (elements.sermonModal) elements.sermonModal.classList.add("hidden");
      });
    }
    if (elements.sermonModal) {
      elements.sermonModal.addEventListener("click", (e) => {
        if (e.target === elements.sermonModal) {
          elements.sermonModal.classList.add("hidden");
        }
      });
    }

    // 10. 전체화면 토글 (Fullscreen API)
    if (elements.fullscreenBtn) {
      elements.fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            console.warn("Fullscreen request failed:", err);
          });
          showToast("Switched to full screen.");
        } else {
          document.exitFullscreen().catch(err => console.warn(err));
          showToast("Exited full screen.");
        }
      });
    }

    // 11. 성경 목록 사이드바 접기/펼치기 (와이드 전체화면 뷰)
    let isSidebarCollapsed = false;
    if (elements.sidebarToggleBtn) {
      elements.sidebarToggleBtn.addEventListener("click", () => {
        isSidebarCollapsed = !isSidebarCollapsed;
        if (isSidebarCollapsed) {
          if (elements.booksSidebarCol) elements.booksSidebarCol.classList.add("hidden");
          if (elements.bookDetailSection) {
            elements.bookDetailSection.classList.remove("lg:col-span-8", "xl:col-span-9");
            elements.bookDetailSection.classList.add("lg:col-span-12", "xl:col-span-12", "w-full");
          }
          if (elements.labelToggleSidebar) elements.labelToggleSidebar.textContent = "Unfold list (two columns)";
          if (elements.iconToggleSidebar) {
            elements.iconToggleSidebar.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>`;
          }
          showToast("The details now use 100% of the screen width.");
        } else {
          if (elements.booksSidebarCol) elements.booksSidebarCol.classList.remove("hidden");
          if (elements.bookDetailSection) {
            elements.bookDetailSection.classList.remove("lg:col-span-12", "xl:col-span-12");
            elements.bookDetailSection.classList.add("lg:col-span-8", "xl:col-span-9");
          }
          if (elements.labelToggleSidebar) elements.labelToggleSidebar.textContent = "Fold list (wider view)";
          if (elements.iconToggleSidebar) {
            elements.iconToggleSidebar.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>`;
          }
          showToast("Back to two columns with the book list.");
        }
      });
    }

    // 12. 키보드 단축키 지원 (ESC 모달 닫기 & 좌우 방향키 인포그래픽 장 전환)
    window.addEventListener("keydown", (e) => {
      // ESC 키로 모든 모달 닫기
      if (e.key === "Escape") {
        if (elements.sermonModal) elements.sermonModal.classList.add("hidden");
        if (elements.youtubeModal) {
          elements.youtubeModal.classList.add("hidden");
          if (elements.youtubeIframe) elements.youtubeIframe.src = "";
        }
        return;
      }

      // 검색창이나 입력 필드에 포커스된 경우 무시
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

      // 지도 탭 활성화 시 좌우 방향키로 인포그래픽 장 넘기기
      if (state.currentDetailTab === "maps") {
        if (e.key === "ArrowLeft") {
          window.changeMapPage(state.currentMapIndex - 1);
        } else if (e.key === "ArrowRight") {
          window.changeMapPage(state.currentMapIndex + 1);
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 전역 토글 헬퍼 바인딩
  // --------------------------------------------------------------------------
  window.toggleLectureDetails = function(lecNo) {
    state.activeLectureNo = state.activeLectureNo === lecNo ? null : lecNo;
    renderBookDetails(state.currentBookId);
  };

  // 설교 전문 독서 모달 열기 함수 (전역 바인딩)
  window.openSermonModal = function(bookName, lecNo) {
    const sermon = typeof getFullLectureContent === "function" 
      ? getFullLectureContent(bookName, lecNo) 
      : null;
    
    if (!sermon) {
      alert("Loading the sermon.");
      return;
    }

    const modal = document.getElementById("sermon-modal");
    const badge = document.getElementById("sermon-modal-badge");
    const title = document.getElementById("sermon-modal-title");
    const scripture = document.getElementById("sermon-modal-scripture");
    const content = document.getElementById("sermon-modal-content");

    if (badge) badge.textContent = `[${bookName}] Lecture ${lecNo}: Full Saga Sermon Transcript`;
    if (title) title.textContent = sermon.title;
    if (scripture) scripture.textContent = `Text: ${sermon.scripture}`;
    if (content) content.textContent = sermon.fullText.trim();

    if (modal) {
      modal.classList.remove("hidden");
      const scrollContainer = modal.querySelector(".overflow-y-auto");
      if (scrollContainer) scrollContainer.scrollTop = 0;
    }
  };

  // --------------------------------------------------------------------------
  // Web Audio API 기반 퀴즈 피드백 사운드 이펙트 (외부 파일 불필요)
  // --------------------------------------------------------------------------
  function playQuizSound(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === "correct") {
        // 맑고 경쾌한 챠임 (도-미-솔 C5-E5-G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
          gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.08);
          osc.stop(ctx.currentTime + i * 0.08 + 0.35);
        });
      } else if (type === "wrong") {
        // 부드러운 둔탁음
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "complete") {
        // 축하 아르페지오 (C5-E5-G5-C6)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
          gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.45);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.1);
          osc.stop(ctx.currentTime + i * 0.1 + 0.5);
        });
      }
    } catch (e) {
      // 무음 처리 폴백
    }
  }

  // 필터 모드 전환 (전체 / 미답변 / 오답 노트)
  window.setQuizFilterMode = function(mode) {
    state.quizFilterMode = mode;
    const book = getBookById(state.currentBookId);
    if (book) renderQuizTab(book);
  };

  // 검색어 초기화
  window.clearQuizSearchFilter = function() {
    state.quizSearchQuery = "";
    state.quizFilterMode = "all";
    const book = getBookById(state.currentBookId);
    if (book) renderQuizTab(book);
  };

  // 오답 노트 모아보기
  window.filterWrongQuizNotes = function() {
    state.quizFilterMode = "wrong";
    state.quizSearchQuery = "";
    const book = getBookById(state.currentBookId);
    if (book) renderQuizTab(book);
    showToast("📝 Showing only the questions you got wrong (wrong-answer notes).");
  };

  // 퀴즈 응답 점수 및 진행도 반영 훅
  window.onQuizAnswered = function(isCorrect) {
    if (isCorrect) {
      state.quizStreak = (state.quizStreak || 0) + 1;
      if (state.quizStreak > (state.maxQuizStreak || 0)) {
        state.maxQuizStreak = state.quizStreak;
      }
      playQuizSound("correct");
    } else {
      state.quizStreak = 0;
      playQuizSound("wrong");
    }

    const totalCount = (state.activeQuizzes || []).length;
    const answeredCount = Object.keys(state.quizUserAnswers || {}).length;
    const correctCount = Object.values(state.quizUserAnswers || {}).filter(a => a.isCorrect).length;

    if (totalCount > 0 && answeredCount === totalCount) {
      setTimeout(() => playQuizSound("complete"), 300);
      const pct = Math.round((correctCount / totalCount) * 100);
      showToast(`🎉 Quiz complete! ${correctCount}/${totalCount} correct (${pct} points)`);
    }

    const book = getBookById(state.currentBookId);
    if (book) {
      renderQuizTab(book);
    }
  };

  // 권별 퀴즈 다시 풀기
  window.resetBookQuizzes = function(bookId) {
    state.isGoldenBellMode = false;
    const bId = bookId || state.currentBookId;
    const book = getBookById(bId);
    if (book) {
      state.activeQuizzes = typeof getBookQuizzes === "function" 
        ? getBookQuizzes(book.id, book.name) 
        : (book.quizzes || []);
      state.quizUserAnswers = {};
      state.quizScore = 0;
      state.quizAnsweredCount = 0;
      state.quizStreak = 0;
      state.quizSearchQuery = "";
      state.quizFilterMode = "all";
      renderQuizTab(book);
    }
    showToast("🎲 Shuffled into new questions and a new order of choices!");
  };

  // 에스라 성경 골든벨 (랜덤 10/20문제) 시작
  window.startRandomQuizGoldenBell = function(count = 10) {
    state.isGoldenBellMode = true;
    if (typeof getRandomBibleQuizzes === "function") {
      state.activeQuizzes = getRandomBibleQuizzes(count);
    }
    state.quizUserAnswers = {};
    state.quizScore = 0;
    state.quizAnsweredCount = 0;
    state.quizStreak = 0;
    state.quizSearchQuery = "";
    state.quizFilterMode = "all";
    const book = getBookById(state.currentBookId);
    if (book) renderQuizTab(book);
    showToast(`🏆 ${count} Ezra Bible Golden Bell questions are ready!`);
  };

  // 골든벨 종료 후 원래 성경 권별 퀴즈로 복귀
  window.exitGoldenBellQuiz = function() {
    state.isGoldenBellMode = false;
    const book = getBookById(state.currentBookId);
    if (book) {
      state.activeQuizzes = typeof getBookQuizzes === "function" 
        ? getBookQuizzes(book.id, book.name) 
        : (book.quizzes || []);
      state.quizUserAnswers = {};
      state.quizScore = 0;
      state.quizAnsweredCount = 0;
      state.quizStreak = 0;
      state.quizSearchQuery = "";
      state.quizFilterMode = "all";
      renderQuizTab(book);
    }
  };

  // 초기 실행
  init();
});

// ----------------------------------------------------------------------------
// 전역 헬퍼 함수
// ----------------------------------------------------------------------------
window.copyFilePath = function(path) {
  navigator.clipboard.writeText(path).then(() => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = "File path copied to the clipboard!";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2500);
    }
  }).catch(() => {
    alert(`File path: ${path}`);
  });
};

window.checkQuizAnswer = function(arg1, arg2, arg3) {
  let qIdx, selectedOptIdx;
  if (arguments.length >= 3) {
    qIdx = arg2;
    selectedOptIdx = arg3;
  } else {
    qIdx = arg1;
    selectedOptIdx = arg2;
  }

  let quiz = null;
  if (window.currentActiveQuizzes && window.currentActiveQuizzes[qIdx]) {
    quiz = window.currentActiveQuizzes[qIdx];
  }
  if (!quiz) return;

  const isCorrect = selectedOptIdx === quiz.ans;
  if (!state.quizUserAnswers) state.quizUserAnswers = {};
  state.quizUserAnswers[qIdx] = { selectedIdx: selectedOptIdx, isCorrect: isCorrect };

  if (typeof window.onQuizAnswered === "function") {
    window.onQuizAnswered(isCorrect);
  }
};

// ----------------------------------------------------------------------------
// 메타정보 설명 패널 (저자 / 기록연대 / 총 분량 / 연대기 순서 클릭 시)
// ----------------------------------------------------------------------------
window._metaInfoActiveKey = null; // 현재 열린 패널 키

window.showMetaInfo = function(type, bookId) {
  const booksData = typeof BIBLE_BOOKS_DATA !== "undefined" ? BIBLE_BOOKS_DATA : (window.BIBLE_BOOKS_DATA || []);
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  const panel = document.getElementById("meta-info-panel");
  if (!panel) return;

  const key = `${type}-${bookId}`;

  // 같은 버튼 재클릭 시 토글(닫기)
  if (window._metaInfoActiveKey === key && !panel.classList.contains("hidden")) {
    panel.classList.add("hidden");
    panel.innerHTML = "";
    window._metaInfoActiveKey = null;
    return;
  }
  window._metaInfoActiveKey = key;

  // ── 저자 설명 ──────────────────────────────────────────────────
  const AUTHOR_DESC = {
    "Moses": "Moses was born in Egypt around 1526 B.C. He came from the tribe of Levi and was raised by Pharaoh's daughter, but at 40 he fled into the wilderness and spent 40 years as a shepherd in Midian, and then received God's call at Mount Horeb. After that he led the people of Israel out of Egypt, received the Law at Mount Sinai, and wrote the Pentateuch (Genesis–Deuteronomy). The Ezra course sees Moses as 'the mediator of the Law' and 'a type of Christ.'",
    "Joshua": "Joshua came from the tribe of Ephraim and was Moses' servant. He was the leader of Israel who led the war to conquer Canaan, and he divided up the land God had promised. As his name means, 'the LORD is salvation,' he is the original of the name of Jesus Christ (Jesus = Joshua).",
    "Samuel/Unknown": "Samuel the prophet is thought to have written the books of Samuel, but the records after Samuel's death are known to have been continued by the prophets Nathan and Gad (1 Chr 29:29). Samuel was the last judge of Israel and the founder of the first school of prophets (the company of prophets at Ramah).",
    "David and other authors": "The Psalms are the Bible's 'hymnbook,' written over hundreds of years by many authors: David (73 psalms), Asaph (12), the sons of Korah (11), Solomon (2), Moses (1), Ethan (1), and others. The Ezra course sees the Psalms as the very essence of Hebrew poetry, the book that holds God's heart most deeply.",
    "Solomon": "Solomon, the son of David, was the third king of the united kingdom of Israel (reigned c. 970–931 B.C.). The king of wisdom, he wrote Proverbs, Ecclesiastes, and Song of Songs, and built the temple in Jerusalem (the First Temple). The Ezra course sees Solomon as 'a type of Christ's wisdom and glory.'",
    "Isaiah": "Isaiah ('the LORD is salvation') was a major prophet of the southern kingdom of Judah in the 8th century B.C., a contemporary of Amos and Hosea. He is thought to have come from the royal family, and he prophesied for about 40 years in the days of Kings Uzziah, Jotham, Ahaz, and Hezekiah. Because its messianic prophecies (Isa 7:14; chapter 53) are so exact, the book of Isaiah is called 'the gospel of the Old Testament.'",
    "Jeremiah": "Jeremiah, 'the weeping prophet,' was called in 626 B.C. and served for about 40 years, from just before the fall of Judah to the early Babylonian Exile. He came from a priestly family of Anathoth and called for repentance even under severe persecution. Lamentations is also his work, written in grief over the fall of Jerusalem.",
    "Ezekiel": "Ezekiel was a prophet from a priestly family who served during the Babylonian Exile (597–571 B.C.). He received his call by the river Chebar in a vision of the throne of God's glory. His apocalyptic prophecies, such as the dry bones coming to life (Ezek 37) and the vision of the new temple (Ezek 40–48), are what mark the book.",
    "Daniel": "Daniel was a young man of Judah's royal family who was taken to Babylon in 605 B.C., during Nebuchadnezzar's first invasion. He purposed in his heart to refuse the king's food and feared God alone, and with the gift of interpreting dreams and his apocalyptic visions he bore witness to God's sovereignty in the courts of Babylon and Persia.",
    "Ezra": "Ezra was a priest and scribe, a 16th-generation descendant of the high priest Aaron, who returned from Babylon. A scholar skilled in the Law, he taught God's statutes and ordinances to the people of Israel. He wrote Ezra–Nehemiah (originally one book), and tradition also credits him with Chronicles.",
    "Nehemiah": "Nehemiah was cupbearer to King Artaxerxes I of Persia, and in 445 B.C. he returned to rebuild the walls of Jerusalem. He finished the walls in 52 days and governed Judah for 12 years. Together with Ezra he led a reform of faith and a revival of the Law.",
    "Matthew": "Matthew (Levi) was a tax collector in Capernaum, but he was called by Jesus and became a disciple. He wrote the Gospel of Matthew for Jewish Christians, to prove that Jesus is the Messiah King of the Old Testament. Its five great discourses (such as the Sermon on the Mount) are its mark.",
    "Mark": "Mark (John Mark) was Barnabas's cousin; he joined Paul's first missionary journey but left partway. He is known as Peter's interpreter, and the Gospel of Mark was written from Peter's memories. Written for Roman readers, it presents Jesus as 'the Servant of power,' and its vivid, on-the-scene detail is its mark.",
    "Luke": "Luke was a Greek physician (Col 4:14) and Paul's co-worker. Of the 27 New Testament books he wrote two: the Gospel of Luke, the longest, and Acts. Along with a historian's accuracy, he stresses Jesus' love for the outcast (women, tax collectors, sinners). His central theme is 'Christ who came as the Son of Man.'",
    "John": "John, son of Zebedee, was Jesus' 'beloved disciple.' He lived the longest of the twelve apostles and served mainly in Ephesus. He wrote the Gospel of John, 1, 2, and 3 John, and Revelation. The Ezra course stresses the Gospel of John as 'the gospel of the incarnation, where the Word became flesh.'",
    "Paul": "Paul (Saul in Hebrew) was a Roman citizen from the tribe of Benjamin and a teacher of the Law trained under Gamaliel. On the road to Damascus he met the risen Christ and became the apostle to the Gentiles. He wrote 13 letters, including Romans, Galatians, 1 and 2 Corinthians, and Ephesians.",
    "Peter": "Peter, a fisherman, was the leading disciple, who received from Jesus the name 'rock' (Cephas). After the Holy Spirit came at Pentecost he became the center of the mission to the Jews, and he wrote 1 and 2 Peter, urging the scattered believers of Asia Minor to hope and holy living in the midst of persecution.",
    "James": "James was the brother of Jesus (Gal 1:19) and a leader of the early church in Jerusalem. The letter of James is thought to be the earliest of the New Testament letters (c. A.D. 45–49). It stresses a faith that is lived out: 'by works was faith made perfect.'",
    "Author of Hebrews unknown": "There are many views on who wrote Hebrews (Paul, Apollos, Barnabas, Priscilla, and others), but it has not been settled. It is a theological masterpiece that carefully shows how the Old Testament sacrifices, the tabernacle, and the Levitical priesthood are fulfilled in Christ.",
    "Jude": "Jude was the brother of Jesus (Matt 13:55). He warns against the false teachers (the licentious) who threatened the church at that time, and urges, 'remember ye the words which were spoken before of the apostles of our Lord Jesus Christ.'",
  };

  // ── 기록연대 역사 배경 ────────────────────────────────────────
  function getDateDesc(book) {
    const d = book.date || "";
    if (d.includes("B.C. 1")) return `The Pentateuch was written around the time Israel came out of Egypt (c. 1446 B.C.) and was finishing the conquest of Canaan. This was the golden age of ancient Egypt's New Kingdom (18th–19th Dynasties), and the reign of Thutmose III, before Ramesses II, draws attention as the historical background of the Exodus. The Ezra course sees this period as 'the birth of the nation of Israel and the age when the constitution of God's kingdom (the Law) was given.'`;
    if (d.includes("B.C. 10")) return `This period covers the united kingdom of Israel (Saul, David, Solomon) and the early divided kingdom (c. 1050–900 B.C.). In the Near East, surrounding nations such as Aram-Damascus, Moab, and the Philistines were strong. The Ezra course sees this period as the age when 'the covenant with David, the completion of Solomon's temple, and then the tragedy of division caused by idolatry' began.`;
    if (d.includes("B.C. 8") || d.includes("B.C. 7")) return `This was a turbulent age: the northern kingdom of Israel fell to Assyria (722 B.C.) and the southern kingdom of Judah faced crisis. While the Assyrian Empire at its height (Shalmaneser V, Sennacherib) stood face to face with Egypt's 25th Dynasty (Cush/Ethiopia), the prophets Isaiah, Micah, Habakkuk, and Zephaniah were at work.`;
    if (d.includes("B.C. 6") || d.includes("Exile")) return `This is the Babylonian Exile (605–538 B.C.): Nebuchadnezzar's three attacks on Jerusalem, the destruction of the temple (586 B.C.), and 70 years of captivity in Babylon. Ezekiel and Daniel were at work in this period, and 'the Exile' was both the greatest crisis of Israel's faith and a time of growing up. The Ezra course sees this period as 'the age when God's judgment and the promise of restoration came at the same time.'`;
    if (d.includes("B.C. 5") || d.includes("B.C. 4") || d.includes("Return")) return `This is the age of the Return from Exile (c. 538–400 B.C.). By the decree of King Cyrus of Persia, Israel returned in three waves (Zerubbabel, Ezra, Nehemiah). It was the time when the Second Temple was rebuilt and the Law restored, the last age of the Old Testament.`;
    if (d.includes("A.D. 5") || d.includes("A.D. 6") || d.includes("A.D. 7") || d.includes("A.D. 8") || d.includes("A.D. 9")) return `This is the age when the New Testament was written (c. A.D. 45–100). Under the Roman emperors Claudius, Nero, and Domitian the early church was persecuted, yet the gospel spread across the world. All 27 books of the New Testament were written in this period, around the destruction of the Jerusalem temple (A.D. 70).`;
    return `${book.name}, written ${book.date}, belongs to the ${book.testament === "OT" ? "Old Testament" : "New Testament"}, in the ${book.category} group. The historical accuracy of the Bible's records continues to be confirmed by archaeology and ancient documents.`;
  }

  // ── 총 분량 설명 ─────────────────────────────────────────────
  function getChaptersDesc(book) {
    const c = book.chapters;
    const totalOT = 39, totalNT = 27;
    const bibleTotal = 66;
    let sizeDesc = c >= 40 ? "one of the longest in the whole Bible, a" : c >= 20 ? "a medium-length" : "a relatively short";
    return `${book.name} is ${sizeDesc} book of <strong>${c} chapters</strong>. In the whole Bible (${bibleTotal} books) it is, ${book.testament === "OT" ? `among the 39 Old Testament books,` : `among the 27 New Testament books,`} number ${book.chronologicalOrder}. Each chapter has dozens of verses on average, and to understand the key message of ${book.name}, <em>"${book.theme}"</em>, it is important to grasp the whole flow. The Ezra course stresses reading each book as a <strong>chapter-by-chapter panorama</strong>, to first get hold of the whole context.`;
  }

  // ── 연대기 순서 설명 ─────────────────────────────────────────
  function getOrderDesc(book) {
    const order = book.chronologicalOrder;
    const total = booksData.length || 66;
    const prev = booksData.find(b => b.chronologicalOrder === order - 1);
    const next = booksData.find(b => b.chronologicalOrder === order + 1);
    let nav = "";
    if (prev) nav += `Previous book: <strong>${prev.name}</strong> `;
    if (next) nav += `/ Next book: <strong>${next.name}</strong>`;
    return `In the Ezra Bible Course chronological order, ${book.name} is book <strong>number ${order}</strong> of ${total}. ${nav ? `<br><span class="text-slate-500">${nav}</span>` : ""}<br>Chronological order is the order of the times in which each book of the Bible was actually written in history. It can differ from the Bible's canonical order (Genesis–Revelation), and the Ezra course puts weight on finding each book's place in the flow of history, to understand the big picture of the whole Bible.`;
  }

  // 각 타입별 제목과 내용
  const INFO = {
    author: {
      icon: "✍️",
      title: `Author: ${book.author}`,
      color: "amber",
      content: AUTHOR_DESC[book.author] || `${book.name}, written by ${book.author}, is part of Scripture, written by the inspiration of God. When you know the author's life and times, the book's message comes to you all the more richly.`
    },
    date: {
      icon: "📅",
      title: `Date written: ${book.date}`,
      color: "blue",
      content: getDateDesc(book)
    },
    chapters: {
      icon: "📖",
      title: `Length: ${book.chapters} chapters`,
      color: "emerald",
      content: getChaptersDesc(book)
    },
    order: {
      icon: "🗓️",
      title: `Chronological order: No. ${book.chronologicalOrder}`,
      color: "indigo",
      content: getOrderDesc(book)
    }
  };

  const info = INFO[type];
  if (!info) return;

  const colorMap = {
    amber:  { bg: "bg-amber-500/8 dark:bg-amber-900/20",  border: "border-amber-400/30", title: "text-amber-700 dark:text-amber-300", icon: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
    blue:   { bg: "bg-blue-500/8 dark:bg-blue-900/20",    border: "border-blue-400/30",  title: "text-blue-700 dark:text-blue-300",   icon: "bg-blue-500/15 text-blue-700 dark:text-blue-300"   },
    emerald:{ bg: "bg-emerald-500/8 dark:bg-emerald-900/20", border: "border-emerald-400/30", title: "text-emerald-700 dark:text-emerald-300", icon: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
    indigo: { bg: "bg-indigo-500/8 dark:bg-indigo-900/20", border: "border-indigo-400/30", title: "text-indigo-700 dark:text-indigo-300", icon: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300" }
  };
  const c = colorMap[info.color];

  panel.innerHTML = `
    <div class="rounded-xl border ${c.border} ${c.bg} p-3.5 mt-1 animate-fade-in">
      <div class="flex items-start gap-2.5">
        <span class="w-8 h-8 rounded-lg ${c.icon} flex items-center justify-center text-base shrink-0 font-bold">${info.icon}</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1.5">
            <h6 class="text-xs font-bold ${c.title}">${info.title}</h6>
            <button onclick="window.showMetaInfo('${type}', ${bookId})" 
                    class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition ml-2 shrink-0" title="Close">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${info.content}</p>
        </div>
      </div>
    </div>
  `;
  panel.classList.remove("hidden");
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
};
