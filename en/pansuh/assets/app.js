(function () {
  "use strict";

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  // lecture text: escape, then mark slide-advance cues and scripture refs
  function prose(s) {
    return esc(s)
      .replace(/Þ/g, "⇒")
      .replace(/\((넘기기|넘김(?:\s*넘김)*|next(?:\s*next)*)\)/gi, '<span class="cue">next</span>')
      .replace(/&lt;\s*((?:[1-3]\s?)?[A-Za-z가-힣]{1,5}\.?\s?\d+:\d+(?:[~\-]\d+)?[a-z]?)\s*&gt;/g, '<span class="ref">$1</span>');
  }

  function table(t) {
    var h = "<table><thead><tr>" + t.head.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
    t.rows.forEach(function (r) {
      h += "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
    });
    return h + "</tbody></table>";
  }

  function slide(s) {
    var talk = s.body.map(function (b) {
      return typeof b === "string" ? "<p>" + prose(b) + "</p>" : table(b.table);
    }).join("");
    // 그림 없이 말만 있는 대목 (책과 책 사이의 이음말 등)
    if (!s.img) return '<article class="slide words"><div class="talk">' + talk + "</div></article>";
    return (
      '<article class="slide' + (talk ? "" : " solo") + '" id="s' + s.n + '">' +
      "<figure><button type=\"button\" aria-label=\"Slide " + s.n + " – view larger\">" +
      '<img src="' + s.img + '" width="' + s.w + '" height="' + s.h + '" loading="lazy" alt="Lecture slide ' + s.n + '">' +
      "</button><figcaption>Slide " + s.n + "</figcaption></figure>" +
      (talk ? '<div class="talk">' + talk + "</div>" : "") +
      "</article>"
    );
  }

  function renderLesson(L) {
    var toc = document.getElementById("toc");
    var body = document.getElementById("chapters");
    var t = "", b = "";
    L.chapters.forEach(function (c) {
      if (c.part) t += '<p class="part">' + esc(c.part) + "</p>";
      t += '<a href="#' + c.id + '" data-id="' + c.id + '">' + esc(c.title) + "</a>";
      b += '<section class="chapter" id="' + c.id + '">' +
        (c.part ? '<p class="part">' + esc(c.part) + "</p>" : "") +
        "<h2>" + esc(c.title) + "</h2>" + c.slides.map(slide).join("") + "</section>";
    });
    toc.innerHTML = t;

    var pager = '<nav class="pager" aria-label="Previous and next">';
    if (L.prev) pager += '<a href="' + L.prev.href + '"><small>← Previous</small><b>' + esc(L.prev.label) + "</b></a>";
    if (L.next) {
      pager += L.next.soon
        ? '<span class="next soon"><small>Next · Coming soon</small><b>' + esc(L.next.label) + "</b></span>"
        : '<a class="next" href="' + L.next.href + '"><small>Next →</small><b>' + esc(L.next.label) + "</b></a>";
    }
    pager += "</nav>";
    body.innerHTML = b + pager;
    // 칠판 오른쪽 위에도 작은 이전·다음: 강의를 다 듣고 곧장 다음 강의로 갈 수 있게
    var player = document.getElementById("player");
    var heading = player && player.querySelector("h2");
    if (heading) {
      var small = '<nav class="pager-top" aria-label="Previous and next lectures">' +
        (L.prev ? '<a href="' + L.prev.href + '" title="Previous lecture: ' + esc(L.prev.label) + '">← ' + esc(L.prev.label) + "</a>" : "") +
        (L.next && !L.next.soon ? '<a class="next" href="' + L.next.href + '" title="Next lecture: ' + esc(L.next.label) + '">' + esc(L.next.label) + " →</a>" : "") +
        "</nav>";
      var row = document.createElement("div");
      row.className = "player-head";
      heading.parentNode.insertBefore(row, heading);
      row.appendChild(heading);
      row.insertAdjacentHTML("beforeend", small);
    }

    spy(toc);
    lightbox(body);
    // content is injected after load, so the browser's own jump to #hash missed it
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
  }

  // highlight the chapter currently on screen
  function spy(toc) {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    toc.querySelectorAll("a").forEach(function (a) { links[a.dataset.id] = a; });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (current) current.classList.remove("on");
        current = links[e.target.id];
        if (!current) return;
        current.classList.add("on");
        // keep the active chip visible on the mobile chip bar
        if (toc.scrollWidth > toc.clientWidth) {
          toc.scrollTo({ left: current.offsetLeft - 16, behavior: "smooth" });
        }
      });
    }, { rootMargin: "-30% 0px -65% 0px" });
    document.querySelectorAll(".chapter").forEach(function (s) { io.observe(s); });
  }

  function lightbox(root) {
    var dlg = document.createElement("dialog");
    dlg.className = "lb";
    dlg.innerHTML = '<img alt="">';
    document.body.appendChild(dlg);
    var big = dlg.querySelector("img");
    root.addEventListener("click", function (e) {
      var btn = e.target.closest("figure button");
      if (!btn) return;
      var img = btn.querySelector("img");
      big.src = img.src;
      big.alt = img.alt;
      dlg.showModal();
    });
    dlg.addEventListener("click", function () { dlg.close(); });
  }

  // home: reveal the structure diagram when it scrolls into view
  function reveal() {
    var el = document.querySelector(".draw");
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("on"); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { el.classList.add("on"); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(el);
  }

  if (window.LESSON) renderLesson(window.LESSON);
  reveal();
})();
