// 명화로 읽는 성경 탭 — 맨 위 탭을 따라 보이고 숨긴다 (js/movies.js와 같은 방식, app.js는 건드리지 않는다).
// 슬라이드쇼 페이지는 story/ (판서강좌/movie/tools/story_build.js가 만든다)
(function () {
  "use strict";
  const view = document.getElementById("view-story");
  if (!view) return;
  document.querySelectorAll("[data-nav-view]").forEach((btn) =>
    btn.addEventListener("click", () => view.classList.toggle("hidden", btn.getAttribute("data-nav-view") !== "story")));
})();
