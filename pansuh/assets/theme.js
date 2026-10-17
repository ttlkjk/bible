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
})();
