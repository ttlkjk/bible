// 에스라 아카이브(../index.html)와 같은 테마·글자 크기를 쓴다. <head>에서 바로 실행.
//  ?embed=1 이면 아카이브 안에 끼워 넣는 모드: 칠판만 보여 준다.
(function () {
  var html = document.documentElement;
  try {
    html.setAttribute("data-theme", localStorage.getItem("ezra_theme") || "light");
  } catch (e) {
    html.setAttribute("data-theme", "light");
  }
  if (/[?&]embed\b/.test(location.search)) html.classList.add("embed");

  // 언어 전환 단추: 한국어 페이지(pansuh/)에는 English, 영어 페이지(en/pansuh/)에는 한국어
  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("header.top nav");
    if (!nav) return;
    var path = location.pathname;
    var file = path.slice(path.lastIndexOf("/") + 1) || "index.html";
    var en = /\/en\/pansuh\//.test(path);
    var a = document.createElement("a");
    a.className = "lang-switch";
    a.href = (en ? "../../pansuh/" : "../en/pansuh/") + file + location.hash;
    a.hreflang = a.lang = en ? "ko" : "en";
    a.textContent = en ? "한국어" : "English"; // i18n:skip
    nav.appendChild(a);
  });
})();
