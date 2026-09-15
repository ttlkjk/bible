// ============================================================================
// 에스라 성경강좌 인터랙티브 웹 애플리케이션 메인 제어 로직 (App.js)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 상태 (State)
  // --------------------------------------------------------------------------
  const state = {
    currentTestament: "OT", // "OT" or "NT"
    currentCategory: "전체",
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
    const cats = BIBLE_CATEGORIES[state.currentTestament] || ["전체"];
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
    if (state.currentCategory !== "전체") {
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
          <p class="text-base font-medium">검색 조건에 일치하는 성경이 없습니다.</p>
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
          <p class="text-xs text-slate-400 dark:text-slate-500 truncate">${book.engName} (${book.chapters}장)</p>
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
    if (elements.detailTitle) elements.detailTitle.textContent = `${book.name} (${book.engName})`;
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
          ${book.testament === "OT" ? "구약" : "신약"} ${book.category}
        </span>
        <button onclick="window.showMetaInfo('author', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          저자: <strong>${book.author}</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('date', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          기록연대: <strong>${book.date}</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('chapters', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-300 transition cursor-pointer flex items-center gap-1 group">
          총 분량: <strong>${book.chapters}장</strong>
          <svg class="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button onclick="window.showMetaInfo('order', ${book.id})"
                class="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-500/20 transition cursor-pointer flex items-center gap-1 group">
          연대기 순서: 제 ${book.chronologicalOrder}번째
          <svg class="w-3 h-3 text-indigo-400 group-hover:text-indigo-600 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
      `;
    }

    if (elements.detailKeyVerse) {
      elements.detailKeyVerse.innerHTML = `
        <div class="p-4 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 text-slate-800 dark:text-slate-200">
          <div class="flex items-center gap-2 mb-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            핵심 요절 (Key Verse)
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
              <span class="w-2 h-2 rounded-full bg-amber-500"></span> 책의 개요 및 중심 메시지
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              ${book.summary}
            </p>
          </div>

          <div>
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span> 장별 구조 파노라마
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
              
              <h4 class="text-lg font-bold text-slate-900 dark:text-slate-100 mt-4 mb-2">역사적 배경 및 성경의 위치</h4>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                ${era.summary}
              </p>
              
              <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h5 class="text-sm font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-2">
                  <span class="text-lg">💡</span> 에스라 관점 연대기 통독 핵심
                </h5>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  ${era.ezraKeyPoint}
                </p>
              </div>

              <div class="mt-5">
                <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">이 시대에 속한 성경들</h5>
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
        elements.tabPanels.timeline.innerHTML = `<div class="p-6 text-center text-slate-500 text-sm">해당 성경의 연대기 맥락 정보가 없습니다.</div>`;
      }
    }

    // 3. 에스라 관점 탭 (Ezra Insight)
    if (elements.tabPanels.ezra) {
      elements.tabPanels.ezra.innerHTML = `
        <div class="space-y-6">
          <div class="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 border border-amber-500/30">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center shadow">
                에
              </span>
              <div>
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">에스라하우스 노우호 목사님의 성경강좌 맥</h4>
                <p class="text-xs text-slate-500">역사적 사실과 하나님의 심정으로 성경을 통독하는 핵심 열쇠</p>
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
                <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">에스라하우스TV 공식 유튜브 연동</h5>
                <p class="text-xs text-slate-500">노우호 목사님의 [${book.name}] 전문 영상강좌 바로 시청</p>
              </div>
            </div>
            <a href="${EZRA_YOUTUBE_DATA.getBookYoutubeUrl(book.name)}" target="_blank" 
               class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-1.5 shrink-0">
              <span>YouTube에서 보기</span>
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
                    제 ${lec.no}강
                  </span>
                  <h5 class="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100">${lec.title}</h5>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400">본문: <strong>${lec.scripture}</strong></p>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <button onclick="event.stopPropagation(); openSermonModal('${book.name}', '${lec.no}')" 
                        title="녹취록 전문 크게 읽기" 
                        class="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-white shadow-sm flex items-center gap-1 transition">
                  <span>📖 전문 읽기</span>
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
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 대하설교 핵심 분석 요약
                </h6>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-white dark:bg-slate-800/60 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60">
                  ${lec.summary || "본 강의는 노우호 목사님의 에스라 강좌 핵심 녹취록입니다."}
                </p>
              </div>

              <!-- 2. 주요 강해 포인트 3가지 -->
              ${lec.keyPoints && lec.keyPoints.length > 0 ? `
                <div>
                  <h6 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 설교 본문 핵심 포인트
                  </h6>
                  <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 bg-slate-100/70 dark:bg-slate-800/40 p-3.5 rounded-lg">
                    ${keyPointsList}
                  </ul>
                </div>
              ` : ''}

              <!-- 3. 삶의 적용 및 에스라 관점 메시지 -->
              ${lec.message ? `
                <div class="p-3.5 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <strong class="text-amber-600 dark:text-amber-400 block mb-1">💡 에스라 강단 결론 &amp; 묵상:</strong>
                  ${lec.message}
                </div>
              ` : ''}

              <!-- 4. 전문 독서 팝업 안내 버튼 (외부 파일 연결 없이 완독 가능) -->
              <div class="pt-3 border-t border-slate-200/70 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  녹취록 전문이 웹앱에 완전 수록되어 있습니다 (외부 파일 불필요)
                </span>
                <button onclick="openSermonModal('${book.name}', '${lec.no}')" 
                        class="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white text-xs font-bold rounded-lg shadow transition flex items-center gap-1.5">
                  <span>📖 전문 독서창으로 크게 읽기</span>
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
                <span>🎙️ [${book.name}] 대하설교 녹취록 전문 뷰어</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-bold">총 ${lectures.length}강의</span>
              </h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                별도의 HWP 파일 연계나 프로그램 실행 없이, <strong>강의 항목을 클릭하여 요약 강해를 보시거나 [📖 전문 읽기] 버튼을 눌러 녹취록 전체를 책처럼 완독</strong>하실 수 있습니다.
              </p>
            </div>
            <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0">
              ✓ 앱 내 직접 완독 가능
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
              <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span> [${book.name}] 에스라 성경강좌 PPT 슬라이드 교재
            </h4>
            <span class="text-xs text-slate-500">[수정] 버튼으로 강의안 직접 편집 및 추가 가능</span>
          </div>
          <div id="tab-book-slide-studio"></div>
        </div>

        <!-- 성경강좌 및 낭독 오디오 플레이어 -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> [${book.name}] 성경강좌 &amp; 오디오 플레이어
            </h4>
            <span class="text-xs text-slate-500">배속(0.8x~2.0x) / A-B 구간반복 지원</span>
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
          <h4 class="text-base font-bold text-slate-700 dark:text-slate-300">현재 등록된 퀴즈를 준비 중입니다.</h4>
          <p class="text-xs text-slate-500 mt-1">곧 에스라 성경강좌 심화 문제가 업데이트됩니다.</p>
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
      let gradeTitle = "👑 에스라 성경 박사";
      let gradeDesc = "말씀을 온전히 통달하여 하나님의 심정을 깊이 깨달은 성경의 거목입니다!";
      let gradeBadgeBg = "from-amber-500 to-amber-600 text-white";
      if (scorePct < 60) {
        gradeTitle = "🥉 새싹 성경 통독자";
        gradeDesc = "성경 통독 파노라마 강좌를 들으며 차근차근 다시 복습해 보시는 것을 추천합니다!";
        gradeBadgeBg = "from-slate-600 to-slate-700 text-white";
      } else if (scorePct < 80) {
        gradeTitle = "🥈 말씀 탐구자";
        gradeDesc = "에스라 성경강좌를 성실히 청강하며 진리의 기초를 탄탄히 다지고 있습니다.";
        gradeBadgeBg = "from-blue-600 to-blue-700 text-white";
      } else if (scorePct < 100) {
        gradeTitle = "🥇 베레아 성도";
        gradeDesc = "신사적인 베레아 사람처럼 날마다 성경을 상고하며 탁월한 통찰력을 보여주셨습니다!";
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
                🎉 퀴즈 최종 성적표: ${correctCount} / ${totalCount} 정답 (${scorePct}점)
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-xl">
                ${gradeDesc}
              </p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2">
              ${wrongCount > 0 ? `
                <button onclick="filterWrongQuizNotes()" class="px-4 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold shadow transition flex items-center gap-1.5">
                  <span>📝 오답만 모아보기 (${wrongCount}문제)</span>
                </button>
              ` : ''}
              <button onclick="resetBookQuizzes(${book.id})" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow transition flex items-center gap-1.5">
                <span>🔄 퀴즈 다시 풀기</span>
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
          <p class="text-sm font-semibold text-slate-600 dark:text-slate-300">검색 조건에 일치하는 문제가 없습니다.</p>
          <button onclick="clearQuizSearchFilter()" class="mt-3 px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition">
            전체 문제 보기
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
                  ✓ 정답
                </span>
              ` : `
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 shrink-0">
                  ✕ 오답
                </span>
              `) : ''}
            </div>

            <div class="space-y-2 pt-1">
              ${optsHtml}
            </div>

            <div id="quiz-exp-${qIdx}" class="${isAnswered ? '' : 'hidden'} mt-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm leading-relaxed">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1 font-bold flex items-center gap-1.5">
                <span>💡 정답 해설 및 에스라 관점:</span>
              </strong>
              ${highlightedExp}
            </div>
          </div>
        `;
      }).join("");
    }

    const titleHtml = state.isGoldenBellMode
      ? `<span>🏆 에스라 성경 골든벨 (${totalCount}제 실전 모의고사)</span>`
      : `<span>🎯 [${book.name}] 핵심 성경 퀴즈</span>`;

    const descHtml = state.isGoldenBellMode
      ? `창세기부터 요한계시록까지 전체 성경에서 엄선된 퀴즈를 풀며 성경 지식과 구속사 안목을 점검해 보세요!`
      : `[${book.name}]의 핵심 성구와 역사적 배경, 에스라 성경통독 관점을 퀴즈로 재미있게 마스터하세요.`;

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
                총 ${totalCount}문제
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
                ← [${book.name}] 퀴즈로 복귀
              </button>
              <button onclick="startRandomQuizGoldenBell(10)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow transition">
                🎲 10제 새로 뽑기
              </button>
              <button onclick="startRandomQuizGoldenBell(20)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 text-white shadow transition">
                🌟 20제 종합평가
              </button>
            ` : `
              <button onclick="resetBookQuizzes(${book.id})" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5 shadow-sm">
                <span>🎲 문제 섞기</span>
              </button>
              <button onclick="startRandomQuizGoldenBell(10)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 text-white shadow transition flex items-center gap-1.5">
                <span>🏆 10제 골든벨</span>
              </button>
              <button onclick="startRandomQuizGoldenBell(20)" class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 shadow transition flex items-center gap-1.5">
                <span>🌟 20제 종합평가</span>
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
                   placeholder="질문, 보기, 성경 인물 키워드 검색..." 
                   class="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 dark:text-slate-200 placeholder-slate-400" />
            ${state.quizSearchQuery ? `
              <button onclick="clearQuizSearchFilter()" class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-xs text-slate-400 hover:text-slate-600">✕</button>
            ` : ''}
          </div>

          <!-- 퀵 필터 칩 -->
          <div class="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <button onclick="setQuizFilterMode('all')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'all' ? 'bg-amber-500 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              전체 (${totalCount})
            </button>
            <button onclick="setQuizFilterMode('unanswered')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'unanswered' ? 'bg-amber-500 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              미답변 (${totalCount - answeredCount})
            </button>
            <button onclick="setQuizFilterMode('wrong')" class="px-3 py-1 text-xs rounded-lg font-bold transition ${state.quizFilterMode === 'wrong' ? 'bg-red-600 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
              오답 노트 (${wrongCount})
            </button>
          </div>
        </div>

        <!-- 4. 실시간 진행도 & 채점 게이지 바 -->
        <div class="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2 shadow-sm">
          <div class="flex flex-wrap items-center justify-between text-xs font-semibold gap-2">
            <div class="flex items-center gap-2">
              <span class="text-slate-600 dark:text-slate-400">
                풀이 진행도: <strong class="text-slate-900 dark:text-slate-100">${answeredCount} / ${totalCount} 완료 (${progressPct}%)</strong>
              </span>
              ${state.quizStreak >= 2 ? `
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-black animate-pulse-golden flex items-center gap-1">
                  <span>🔥 ${state.quizStreak}연속 정답!</span>
                </span>
              ` : ''}
            </div>
            <div class="flex items-center gap-3">
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">정답: ${correctCount}개</span>
              <span class="text-red-500 font-bold">오답: ${wrongCount}개</span>
              <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-black">
                현재: ${scorePct}점
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
            label: "1장. 배경 지도",
            title: (BIBLE_MAPS_DATA[book.mapType] && BIBLE_MAPS_DATA[book.mapType].title) || `${book.name} 배경 지도`,
            desc: (BIBLE_MAPS_DATA[book.mapType] && BIBLE_MAPS_DATA[book.mapType].desc) || "해당 권의 역사적 지리 배경",
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
          <span>${m.label || `제 ${idx + 1}장`}</span>
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
                <span>📚 인포그래픽</span>
                <span class="font-black text-amber-300">(${state.currentMapIndex + 1} / ${totalPages}장)</span>
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
                        title="지리를 한눈에 볼 수 있는 클린 백지도 배경">
                  <span>🗺️ 간단한 지도</span>
                </button>
                <button onclick="window.setMapBgMode('physical')" 
                        class="px-2 py-1 text-[11px] rounded-md font-bold transition-all flex items-center gap-1 ${window.currentMapBgMode === 'physical' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}" 
                        title="실제 물리 지형도 배경">
                  <span>🌄 지형도</span>
                </button>
                <button onclick="window.setMapBgMode('satellite')" 
                        class="px-2 py-1 text-[11px] rounded-md font-bold transition-all flex items-center gap-1 ${window.currentMapBgMode === 'satellite' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}" 
                        title="인공위성 사진 배경">
                  <span>🛰️ 위성</span>
                </button>
              </div>

              <!-- 이전 / 다음 장 버튼 -->
              <button onclick="window.changeMapPage(${state.currentMapIndex - 1})" 
                      ${prevDisabled ? "disabled" : ""} 
                      class="px-2.5 py-1.5 text-xs rounded-lg font-bold border transition-all flex items-center gap-1 ${prevDisabled ? 'opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 shadow'}"
                      title="이전 인포그래픽 보기">
                <span>◀ 이전 장</span>
              </button>
              <button onclick="window.changeMapPage(${state.currentMapIndex + 1})" 
                      ${nextDisabled ? "disabled" : ""} 
                      class="px-2.5 py-1.5 text-xs rounded-lg font-bold border transition-all flex items-center gap-1 ${nextDisabled ? 'opacity-30 cursor-not-allowed bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 shadow'}"
                      title="다음 인포그래픽 보기">
                <span>다음 장 ▶</span>
              </button>
              <button id="btn-map-expand-view" class="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/40 flex items-center gap-1.5 transition shadow-sm" title="사이드바를 접어 지도를 모니터 전체 화면으로 넓게 봅니다">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5-5m-7 11v4m0 0H4m4 0l-5-5m16 5v-4m0 0h-4m4 0l-5 5"></path></svg>
                <span>화면 넓게 보기</span>
              </button>
            </div>
          </div>

          <!-- 현재 선택된 장 타이틀 및 설명 배너 -->
          <div class="mb-3.5 pb-3 border-b border-slate-800/80">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-xs font-black">제 ${state.currentMapIndex + 1}장</span>
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
          <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition cursor-pointer" onclick="window.timelineMode='detail'; window.currentDetailedEraIndex=${index}; window.renderTimeline();" title="클릭하여 자세히 보기">
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
              <strong class="text-amber-600 dark:text-amber-400">에스라 통독 관점:</strong> ${item.ezraKeyPoint || item.ezraPerspective}
            </div>
            <div class="flex items-center justify-between mt-2">
              <div class="flex flex-wrap gap-1.5">
                ${booksListHtml}
              </div>
              <span class="text-[10px] text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">자세히 보기 ▶</span>
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
        let q = b.split('(')[0].split('·')[0].split(' ')[0].trim();
        return `
        <button class="px-3 py-1.5 rounded-lg bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-bold shadow-sm hover:bg-slate-700 dark:hover:bg-slate-200 transition" title="해당 성경으로 바로가기" onclick="document.querySelector('[data-nav-view=bible]').click(); state.searchQuery='${q}'; renderBooksGrid();">
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
              <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">역사적 배경과 흐름</h4>
              <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                ${era.summary}
              </p>
            </div>

            <div class="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 class="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                <span class="text-lg">💡</span> 에스라하우스 통독 맥락 해설
              </h4>
              <p class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-bold">
                ${era.ezraKeyPoint || era.ezraPerspective}
              </p>
            </div>

            <div>
              <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 border-b border-slate-200 dark:border-slate-700 pb-1">이 시대에 속한 성경들 (클릭 시 이동)</h4>
              <div class="flex flex-wrap gap-2">
                ${booksHtml}
              </div>
            </div>
            
            <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-right">
               <button onclick="window.timelineMode='overview'; window.renderTimeline();" class="px-4 py-2 text-xs font-bold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition">
                 ◀ 파노라마 전체 보기로 돌아가기
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

  let activeSlideCategory = "전체";

  // --------------------------------------------------------------------------
  // 로컬 파일 색인 뷰 렌더링 (PPT 및 집중강좌 오디오)
  // --------------------------------------------------------------------------
  function renderLocalFilesIndex() {
    // 1. VIEW 3의 PPT 슬라이드 스튜디오 렌더링
    if (document.getElementById("view-files-slide-studio") && typeof window.renderSlideStudioComponent === "function") {
      window.renderSlideStudioComponent("view-files-slide-studio", "창세기");
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
            <button onclick="window.ezraSlideStudio.setBook('${file.book || '창세기'}'); document.getElementById('view-files-slide-studio').scrollIntoView({behavior:'smooth'})" 
                    class="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition">
              슬라이드 보기
            </button>
            <button onclick="copyFilePath('${file.path.replace(/\\/g, '\\\\')}')" 
                    class="px-2.5 py-1 text-xs font-semibold rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              경로 복사
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
              <span>▶ 즉시 재생</span>
            </button>
            <button onclick="copyFilePath('${audio.path.replace(/\\/g, '\\\\')}')" 
                    class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="H: 드라이브 경로 복사">
              경로 복사
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
    { key: "성경강좌원리", label: "강좌원리와 구약상관관계 (1강)", badge: "1강" },
    { key: "식생활특강", label: "레위기 거룩한 식생활과 건강 (3강)", badge: "3강" },
    { key: "신구약중간사", label: "신구약 중간사 400년 (말라기~마태)", badge: "중간사" },
    { key: "로마역사", label: "로마 제국 역사와 사도행전 배경", badge: "로마사" },
    { key: "구약종합", label: "에스라 30시간 구약 종합 교재", badge: "구약종합" },
    { key: "신약종합", label: "에스라 30시간 신약 종합 교재", badge: "신약종합" },
    { key: "쉐마특강", label: "쉐마교육 다음 세대 신앙전수", badge: "쉐마" },
    { key: "성경과역사", label: "특강: 성경과 역사 그리고 미래", badge: "종말론" }
  ];

  function renderSlideBookSelectorUI() {
    const labelEl = document.getElementById("current-slide-book-label");
    const selectBox = document.getElementById("slide-book-select-box");
    const catContainer = document.getElementById("slide-category-filters");
    const buttonsGrid = document.getElementById("slide-book-buttons-grid");

    const currentBook = window.ezraSlideStudio ? window.ezraSlideStudio.activeBook : "창세기";
    if (labelEl) {
      labelEl.innerHTML = `현재 강의: <strong class="text-amber-600 dark:text-amber-400 text-sm font-black">${currentBook}</strong>`;
    }

    // 1. 빠른 이동 드롭다운 (66권 전체 구약/신약 그룹핑 + 집중특강 8개)
    if (selectBox && selectBox.options.length === 0) {
      const otBooks = BIBLE_BOOKS_DATA.filter(b => b.testament === "OT");
      const ntBooks = BIBLE_BOOKS_DATA.filter(b => b.testament === "NT");

      let optHtml = `<optgroup label="구약성경 (39권)">`;
      otBooks.forEach(b => {
        optHtml += `<option value="${b.name}" ${b.name === currentBook ? 'selected' : ''}>[구약 ${b.id}] ${b.name} (${b.chapters}장) - ${b.category}</option>`;
      });
      optHtml += `</optgroup><optgroup label="신약성경 (27권)">`;
      ntBooks.forEach(b => {
        optHtml += `<option value="${b.name}" ${b.name === currentBook ? 'selected' : ''}>[신약 ${b.id}] ${b.name} (${b.chapters}장) - ${b.category}</option>`;
      });
      optHtml += `</optgroup><optgroup label="💡 에스라 집중강의 및 특강 교재 (8개)">`;
      SPECIAL_LECTURE_TOPICS.forEach(t => {
        optHtml += `<option value="${t.key}" ${t.key === currentBook ? 'selected' : ''}>[특강] ${t.label}</option>`;
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
        "전체 66권",
        "율법서", "역사서", "시가서", "대예언서", "소예언서",
        "복음서", "바울서신", "공동서신", "예언서",
        "💡 집중특강"
      ];

      catContainer.innerHTML = categories.map(cat => {
        const isCatActive = (cat === "전체 66권" && activeSlideCategory === "전체") || activeSlideCategory === cat;
        return `
          <button onclick="window.filterSlideCategory('${cat === '전체 66권' ? '전체' : cat}')" 
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
      if (activeSlideCategory === "💡 집중특강") {
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
        if (activeSlideCategory !== "전체") {
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
                    }" title="${b.name} (${b.chapters}장) - ${b.theme}">
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
        state.currentCategory = "전체";

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
          elements.orderModeLabel.textContent = state.currentOrderMode === "canonical" ? "정경 순서" : "연대기 역사 순서";
        }
        elements.orderToggleBtn.classList.toggle("bg-indigo-600", state.currentOrderMode === "chronological");
        elements.orderToggleBtn.classList.toggle("text-white", state.currentOrderMode === "chronological");
        renderBooksGrid();
        showToast(`정렬 모드: ${state.currentOrderMode === "canonical" ? "창세기~계시록 정경 순서" : "노우호 목사님 연대별 역사 순서"}`);
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
        showToast(`글자 크기: ${state.fontSize}px`);
      });
    }
    if (elements.fontDecreaseBtn) {
      elements.fontDecreaseBtn.addEventListener("click", () => {
        applyFontSize(state.fontSize - 1);
        showToast(`글자 크기: ${state.fontSize}px`);
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
          showToast("전체 화면 모드로 전환되었습니다.");
        } else {
          document.exitFullscreen().catch(err => console.warn(err));
          showToast("전체 화면 모드가 종료되었습니다.");
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
          if (elements.labelToggleSidebar) elements.labelToggleSidebar.textContent = "목록 펼치기 (2단 보기)";
          if (elements.iconToggleSidebar) {
            elements.iconToggleSidebar.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>`;
          }
          showToast("상세 화면을 100% 전체 너비로 넓혔습니다.");
        } else {
          if (elements.booksSidebarCol) elements.booksSidebarCol.classList.remove("hidden");
          if (elements.bookDetailSection) {
            elements.bookDetailSection.classList.remove("lg:col-span-12", "xl:col-span-12");
            elements.bookDetailSection.classList.add("lg:col-span-8", "xl:col-span-9");
          }
          if (elements.labelToggleSidebar) elements.labelToggleSidebar.textContent = "목록 접기 (화면 넓게)";
          if (elements.iconToggleSidebar) {
            elements.iconToggleSidebar.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>`;
          }
          showToast("성경 목록과 함께 2단 화면으로 복원했습니다.");
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
      alert("설교 내용을 불러오는 중입니다.");
      return;
    }

    const modal = document.getElementById("sermon-modal");
    const badge = document.getElementById("sermon-modal-badge");
    const title = document.getElementById("sermon-modal-title");
    const scripture = document.getElementById("sermon-modal-scripture");
    const content = document.getElementById("sermon-modal-content");

    if (badge) badge.textContent = `[${bookName}] 제 ${lecNo}강 대하설교 녹취록 전문`;
    if (title) title.textContent = sermon.title;
    if (scripture) scripture.textContent = `본문: ${sermon.scripture}`;
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
    showToast("📝 틀린 문제(오답 노트)만 필터링하여 표시합니다.");
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
      showToast(`🎉 퀴즈 완료! ${correctCount}/${totalCount}문제 정답 (${pct}점)`);
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
    showToast("🎲 새로운 문제와 보기 순서로 무작위 셔플되었습니다!");
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
    showToast(`🏆 에스라 성경 골든벨 ${count}문제가 출제되었습니다!`);
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
      toast.textContent = "클립보드에 파일 경로가 복사되었습니다!";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2500);
    }
  }).catch(() => {
    alert(`파일 경로: ${path}`);
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
    "모세": "모세(Moses)는 기원전 1526년경 이집트에서 태어났습니다. 레위 지파 출신으로 바로의 딸에게 양육받았으나, 40세에 광야로 도피하여 미디안에서 목자로 40년을 보낸 후 호렙산에서 하나님의 부름을 받았습니다. 이후 이스라엘 민족을 출애굽시키고 시내산에서 율법을 받아 모세오경(창세기~신명기)을 기록했습니다. 에스라 강좌에서는 모세를 '율법의 중보자'이자 '그리스도의 모형'으로 봅니다.",
    "여호수아": "여호수아(Joshua)는 에브라임 지파 출신으로 모세의 수종자였습니다. 가나안 정복 전쟁을 이끈 이스라엘의 지도자로, 하나님의 약속의 땅을 분배하는 역할을 담당했습니다. '여호와는 구원이시다'라는 이름의 뜻처럼 예수 그리스도의 이름(예수=여호수아)의 원형입니다.",
    "사무엘/저자미상": "사무엘서의 저자는 사무엘 선지자로 추정되나, 사무엘의 사후 기록은 나단·갓 선지자가 이어 기록한 것으로 알려져 있습니다(대상 29:29). 사무엘은 이스라엘 마지막 사사이자 최초의 선지자 학교(라마의 선지자 무리) 창설자입니다.",
    "다윗 외 여러 저자": "시편은 다윗(73편), 아삽(12편), 고라 자손(11편), 솔로몬(2편), 모세(1편), 에단(1편) 등 다양한 저자가 수백 년에 걸쳐 기록한 성경의 '찬양집'입니다. 에스라 강좌에서는 시편을 히브리 시문학의 정수로, 하나님의 심정을 가장 깊이 담은 책으로 봅니다.",
    "솔로몬": "솔로몬은 다윗의 아들로 이스라엘 통일왕국 제3대 왕(재위 약 B.C. 970~931)입니다. 지혜의 왕으로 잠언·전도서·아가를 기록했으며, 예루살렘 성전(제1성전)을 건립했습니다. 에스라 강좌에서는 솔로몬을 '그리스도의 지혜와 영광의 모형'으로 봅니다.",
    "이사야": "이사야(Isaiah, '여호와는 구원이시다')는 B.C. 8세기 남유다의 대선지자로, 아모스·호세아와 동시대인입니다. 왕족 출신으로 추정되며 웃시야·요담·아하스·히스기야 왕 시대에 약 40년간 예언했습니다. 이사야서의 메시아 예언(사 7:14; 53장)의 정확성으로 '구약의 복음서'라 불립니다.",
    "예레미야": "예레미야(Jeremiah)는 B.C. 626년 소명을 받은 '눈물의 선지자'로, 유다 멸망 직전부터 바벨론 포로 초기까지 약 40년간 사역했습니다. 아나돗 제사장 가문 출신으로 극심한 핍박 속에서도 회개를 촉구했습니다. 예레미야애가도 그의 저작으로 예루살렘 함락을 슬퍼하며 기록했습니다.",
    "에스겔": "에스겔(Ezekiel)은 바벨론 포로기(B.C. 597~571)에 활동한 제사장 출신 선지자입니다. 그발강 가에서 하나님의 영광의 보좌 환상을 받으며 소명을 받았습니다. 마른 뼈 소생(겔 37장), 새 성전 환상(겔 40~48장) 등 묵시적 예언이 특징입니다.",
    "다니엘": "다니엘(Daniel)은 유다 왕족 출신으로 B.C. 605년 느부갓네살의 1차 침공 때 바벨론으로 끌려간 청년입니다. 뜻을 정하여 왕의 음식을 거부하고 하나님만을 경외했으며, 꿈 해석의 은사와 묵시적 환상으로 바벨론·페르시아 왕궁에서 하나님의 주권을 증거했습니다.",
    "에스라": "에스라(Ezra)는 대제사장 아론의 16대손으로 바벨론에서 귀환한 서기관 제사장입니다. 율법에 능통한 학사로, 하나님의 율례와 법도를 이스라엘 백성에게 가르쳤습니다. 에스라-느헤미야서(원래 한 권)를 기록했으며, 역대기의 저작도 그에게 돌리는 전통이 있습니다.",
    "느헤미야": "느헤미야(Nehemiah)는 페르시아 아닥사스다 1세 왕의 술 관원으로, B.C. 445년 예루살렘 성벽 재건을 위해 귀환했습니다. 52일 만에 성벽을 완공하고 총독으로 12년간 유다를 통치했습니다. 에스라와 함께 신앙 개혁과 율법 부흥 운동을 이끌었습니다.",
    "마태": "마태(Matthew, 레위)는 가버나움의 세리(세금 징수원)였으나 예수님의 부름을 받고 제자가 되었습니다. 유대인 그리스도인을 대상으로 예수님이 구약의 메시아 왕임을 증명하기 위해 마태복음을 기록했습니다. 5개의 큰 강화(산상수훈 등)가 특징입니다.",
    "마가": "마가(Mark, 요한 마가)는 바나바의 사촌으로 바울의 1차 전도여행에 동참했다 중도 이탈한 인물입니다. 베드로의 통역자로 알려져 있으며, 마가복음은 베드로의 회고를 기초로 기록되었습니다. 로마인 독자를 위해 예수님을 '능력의 종'으로 소개하며 생생한 현장감이 특징입니다.",
    "누가": "누가(Luke)는 헬라 출신 의사(골 4:14)로 바울의 동역자였습니다. 신약 27권 중 가장 긴 누가복음과 사도행전 두 권을 기록했습니다. 역사가적 정확성과 함께 소외된 자(여인, 세리, 죄인)에 대한 예수님의 사랑을 강조합니다. '인자로 오신 그리스도'가 핵심 주제입니다.",
    "요한": "요한(John)은 세베대의 아들로 예수님의 '사랑하시는 제자'입니다. 열두 사도 중 가장 오래 살아 에베소를 중심으로 사역했습니다. 요한복음·요한1·2·3서·요한계시록을 기록했으며, 에스라 강좌에서는 요한복음을 '말씀이 육신이 되신 성육신의 복음'으로 강조합니다.",
    "바울": "바울(Paul, 히브리어 사울)은 베냐민 지파 출신 로마 시민권자로 가말리엘 문하의 율법 박사였습니다. 다메섹 도상에서 부활하신 그리스도를 만나 이방인의 사도가 되었습니다. 로마서·갈라디아서·고린도전후서·에베소서 등 13편의 서신을 기록했습니다.",
    "베드로": "베드로(Peter)는 어부 출신으로 예수님으로부터 '반석'(케파)이라는 이름을 받은 수제자입니다. 오순절 성령 강림 이후 유대인 선교의 중심이 되었으며, 소아시아 흩어진 성도들에게 박해 속 소망과 거룩한 삶을 권면하는 베드로전후서를 기록했습니다.",
    "야고보": "야고보(James)는 예수님의 형제(갈 1:19)로, 초대 예루살렘 교회의 지도자였습니다. 야고보서는 신약 서신 중 가장 이른 시기(A.D. 45~49년경)에 기록된 것으로 추정됩니다. '믿음은 행함으로 온전하게 된다'는 실천 신앙을 강조합니다.",
    "히브리서 저자 미상": "히브리서의 저자는 바울·아볼로·바나바·브리스길라 등 다양한 설이 있으나 확정되지 않았습니다. 구약의 제사 제도·성막·레위 제사장직이 그리스도 안에서 성취되었음을 정밀하게 논증한 신학적 걸작입니다.",
    "유다": "유다(Jude)는 예수님의 형제(마 13:55)입니다. 당시 교회를 위협하던 거짓 교사들(방종한 자들)을 경고하며 '우리 주 예수 그리스도의 사도들이 미리 말한 것을 기억하라'고 권면합니다.",
  };

  // ── 기록연대 역사 배경 ────────────────────────────────────────
  function getDateDesc(book) {
    const d = book.date || "";
    if (d.includes("B.C. 1")) return `모세오경 기록 시기는 이스라엘이 출애굽(B.C. 1446년경)하여 가나안 정복을 마칠 무렵입니다. 이 시대는 고대 이집트 신왕국(제18~19왕조) 전성기로, 람세스 2세 이전의 투트모시스 3세 시대가 출애굽의 역사적 배경으로 주목받습니다. 에스라 강좌에서는 이 시기를 '이스라엘 민족의 탄생과 하나님 나라의 헌법(율법) 수여 시대'로 봅니다.`;
    if (d.includes("B.C. 10")) return `이 시기는 이스라엘 통일왕국(사울·다윗·솔로몬)과 분열왕국 초기에 해당합니다(B.C. 1050~900년경). 근동에서는 아람 다메섹, 모압, 블레셋 등 주변 민족들이 강성한 시대였습니다. 에스라 강좌에서는 이 시기를 '다윗 언약과 솔로몬 성전 완성, 그리고 우상숭배로 인한 분열의 비극'이 시작된 시대로 봅니다.`;
    if (d.includes("B.C. 8") || d.includes("B.C. 7")) return `이 시기는 북이스라엘이 앗수르에 멸망(B.C. 722)하고 남유다가 위기를 맞는 격동의 시대입니다. 앗수르 제국의 전성기(살만에셀 5세, 산헤립)와 이집트 제25왕조(쿠쉬/에티오피아)가 팽팽히 맞선 국제 정세 속에서 이사야·미가·하박국·스바냐 선지자들이 활동했습니다.`;
    if (d.includes("B.C. 6") || d.includes("포로")) return `바벨론 포로기(B.C. 605~538년)로, 느부갓네살의 3차례 예루살렘 침공과 성전 파괴(B.C. 586), 70년 바벨론 포로 생활의 시대입니다. 이 시기에 에스겔·다니엘이 활동했으며, '포로기'는 이스라엘 신앙의 가장 큰 위기이자 성숙의 시간이었습니다. 에스라 강좌에서는 이 시기를 '하나님의 심판과 회복의 약속이 동시에 임한 시대'로 봅니다.`;
    if (d.includes("B.C. 5") || d.includes("B.C. 4") || d.includes("귀환")) return `바벨론 포로귀환 시대(B.C. 538~400년경)로, 페르시아 고레스 왕의 칙령에 의해 세 차례에 걸쳐 이스라엘이 귀환했습니다(스룹바벨, 에스라, 느헤미야). 제2성전을 재건하고 율법을 회복한 시기로, 구약성경의 마지막 시대입니다.`;
    if (d.includes("A.D. 5") || d.includes("A.D. 6") || d.includes("A.D. 7") || d.includes("A.D. 8") || d.includes("A.D. 9")) return `신약 기록 시기(A.D. 45~100년경)입니다. 로마 황제 클라우디우스·네로·도미티아누스 치하에서 초대 교회가 박해를 받으면서도 복음이 전 세계로 확산된 시대입니다. 예루살렘 성전 파괴(A.D. 70년)를 전후한 이 시기에 신약 27권이 모두 기록되었습니다.`;
    return `${book.date}에 기록된 ${book.name}은 ${book.testament === "OT" ? "구약" : "신약"}의 ${book.category}에 속합니다. 성경 기록의 역사적 정확성은 고고학과 고대 문헌들을 통해 지속적으로 확인되고 있습니다.`;
  }

  // ── 총 분량 설명 ─────────────────────────────────────────────
  function getChaptersDesc(book) {
    const c = book.chapters;
    const totalOT = 39, totalNT = 27;
    const bibleTotal = 66;
    let sizeDesc = c >= 40 ? "성경 전체에서 가장 분량이 많은 책 중 하나로" : c >= 20 ? "중간 분량의" : "비교적 짧은";
    return `${book.name}은 총 <strong>${c}장</strong>으로 구성된 ${sizeDesc} 책입니다. 성경 전체(${bibleTotal}권)에서 ${book.testament === "OT" ? `구약 39권 중` : `신약 27권 중`} ${book.chronologicalOrder}번째에 해당합니다. 각 장은 평균 수십 절로 이루어져 있으며, ${book.name}의 핵심 메시지인 <em>"${book.theme}"</em>를 이해하기 위해 전체 흐름을 파악하는 것이 중요합니다. 에스라 강좌에서는 각 책을 <strong>장별 파노라마</strong>로 읽어 전체 맥락을 먼저 잡는 방식을 강조합니다.`;
  }

  // ── 연대기 순서 설명 ─────────────────────────────────────────
  function getOrderDesc(book) {
    const order = book.chronologicalOrder;
    const total = booksData.length || 66;
    const prev = booksData.find(b => b.chronologicalOrder === order - 1);
    const next = booksData.find(b => b.chronologicalOrder === order + 1);
    let nav = "";
    if (prev) nav += `이전 권: <strong>${prev.name}</strong> `;
    if (next) nav += `/ 다음 권: <strong>${next.name}</strong>`;
    return `${book.name}은 에스라 성경강좌 연대기 순서로 전체 ${total}권 중 <strong>제 ${order}번째</strong> 책입니다. ${nav ? `<br><span class="text-slate-500">${nav}</span>` : ""}<br>연대기 순서란 성경 각 권이 실제 역사적으로 기록된 시대 순서를 말합니다. 성경의 정경 순서(창세기~요한계시록)와는 다를 수 있으며, 에스라 강좌에서는 역사적 흐름 속에서 각 권의 위치를 파악하여 성경 전체의 큰 그림을 이해하는 것을 중요시합니다.`;
  }

  // 각 타입별 제목과 내용
  const INFO = {
    author: {
      icon: "✍️",
      title: `저자: ${book.author}`,
      color: "amber",
      content: AUTHOR_DESC[book.author] || `${book.author}에 의해 기록된 ${book.name}은 하나님의 영감으로 쓰인 성경의 일부입니다. 저자의 생애와 시대적 배경을 알면 책의 메시지가 더욱 풍성하게 다가옵니다.`
    },
    date: {
      icon: "📅",
      title: `기록연대: ${book.date}`,
      color: "blue",
      content: getDateDesc(book)
    },
    chapters: {
      icon: "📖",
      title: `총 분량: ${book.chapters}장`,
      color: "emerald",
      content: getChaptersDesc(book)
    },
    order: {
      icon: "🗓️",
      title: `연대기 순서: 제 ${book.chronologicalOrder}번째`,
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
                    class="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition ml-2 shrink-0" title="닫기">
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
