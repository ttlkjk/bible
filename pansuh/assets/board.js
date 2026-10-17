/*
 * 판서 플레이어: 문장(beat)을 하나씩 읽으면서 그 문장의 판서를 칠판에 그린다.
 *
 * window.BOARD = { scenes: [ { id, title, slides: [n...], beats: [ { say, draw: [op...] } ] } ] }
 *
 * op (첫 칸이 종류):
 *   ["title", id, text]                      제목 (왼쪽 위)
 *   ["write", id, pos, text, style?]         글씨
 *   ["under", id, color?]                    밑줄
 *   ["circle", id, color?]                   동그라미
 *   ["box", id, color?]                      네모
 *   ["strike", id, color?]                   가운데 줄 긋기
 *   ["arrow", from, to, color?]              화살표 (id 또는 [x, y])
 *   ["line", [x1, y1], [x2, y2], color?]     선
 *   ["cross", [x, y], color?]                X 표시
 *   ["photo", id, src, [x, y, w, h], opt?]   사진을 테이프로 붙인다. opt: { tilt (도), caption }
 *   ["clear"]                                칠판 지우기
 * pos: [x, y] | { after: id, gap? } | { below: id, gap? } | { at: [x, y], anchor: "middle" }
 * style: { size, color, anchor }
 * 색 이름: ink, red, blue, green, gray
 */
(function () {
  "use strict";
  var B = window.BOARD;
  var root = document.getElementById("board");
  if (!B || !root) return;

  var NS = "http://www.w3.org/2000/svg";
  var W = 1600, H = 900;
  var COLORS = { ink: "#1f2638", red: "#c8372d", blue: "#2b5fa8", green: "#2e7d5b", gray: "#6b7285" };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- flatten scenes into one beat list ----------
  var beats = [];
  B.scenes.forEach(function (sc, si) {
    sc.beats.forEach(function (b, bi) {
      beats.push({ scene: si, first: bi === 0, say: b.say, draw: b.draw || [] });
    });
  });

  // 사진은 붙는 순간 빈 테두리로 보이지 않게 미리 불러 둔다
  beats.forEach(function (b) {
    b.draw.forEach(function (op) { if (op[0] === "photo") new Image().src = op[2]; });
  });

  // ---------- DOM ----------
  root.innerHTML =
    '<div class="bd-stage">' +
    '<svg class="bd-svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="판서 칠판"><defs class="bd-fx"><filter id="bd-shadow" x="-10%" y="-10%" width="125%" height="130%"><feDropShadow dx="4" dy="10" stdDeviation="9" flood-color="#1b2233" flood-opacity="0.32"/></filter></defs><defs></defs><g class="bd-ink"></g></svg>' +
    '<button class="bd-big" type="button" aria-label="판서 강의 재생"><span>▶</span></button>' +
    "</div>" +
    '<p class="bd-cap" aria-live="polite"></p>' +
    '<div class="bd-bar">' +
    '<button type="button" class="bd-play" aria-label="재생">▶</button>' +
    '<button type="button" class="bd-prev" aria-label="이전 문장">⏮</button>' +
    '<button type="button" class="bd-next" aria-label="다음 문장">⏭</button>' +
    '<div class="bd-track" role="slider" tabindex="0" aria-label="진행 위치" aria-valuemin="1" aria-valuemax="' + beats.length + '"><div class="bd-fill"></div></div>' +
    '<span class="bd-count"></span>' +
    '<select class="bd-rate" aria-label="말하기 속도"><option value="0.9">0.9×</option><option value="1" selected>1×</option><option value="1.2">1.2×</option><option value="1.5">1.5×</option></select>' +
    '<button type="button" class="bd-cc on" aria-pressed="true" aria-label="자막">자막</button>' +
    '<button type="button" class="bd-full" aria-label="전체 화면">⛶</button>' +
    '<button type="button" class="bd-mode" aria-pressed="false">🎤 강사 모드</button>' +
    "</div>" +
    '<div class="bd-prompt" hidden>' +
    '<p class="bd-status"></p>' +
    '<p class="bd-now"></p>' +
    '<p class="bd-after"></p>' +
    '<p class="bd-heard"></p>' +
    "</div>" +
    '<nav class="bd-scenes" aria-label="장면"></nav>' +
    '<p class="bd-note" hidden></p>';

  var svg = root.querySelector(".bd-svg");
  var defs = svg.querySelector("defs:not(.bd-fx)");
  var ink = svg.querySelector(".bd-ink");
  var cap = root.querySelector(".bd-cap");
  var big = root.querySelector(".bd-big");
  var playBtn = root.querySelector(".bd-play");
  var track = root.querySelector(".bd-track");
  var fill = root.querySelector(".bd-fill");
  var count = root.querySelector(".bd-count");
  var rateSel = root.querySelector(".bd-rate");
  var ccBtn = root.querySelector(".bd-cc");
  var note = root.querySelector(".bd-note");
  var sceneNav = root.querySelector(".bd-scenes");
  var modeBtn = root.querySelector(".bd-mode");
  var prompt = root.querySelector(".bd-prompt");
  var pStatus = root.querySelector(".bd-status");
  var pNow = root.querySelector(".bd-now");
  var pAfter = root.querySelector(".bd-after");
  var pHeard = root.querySelector(".bd-heard");

  sceneNav.innerHTML = B.scenes.map(function (sc, i) {
    return '<button type="button" data-scene="' + i + '">' + sc.title + "</button>";
  }).join("");

  // ---------- rough drawing helpers ----------
  function rng(seed) { // mulberry32: same shape every time for the same op
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function color(c) { return COLORS[c] || c || COLORS.ink; }
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || ink).appendChild(e);
    return e;
  }
  function roughLine(x1, y1, x2, y2, r, wob) {
    wob = wob == null ? 4 : wob;
    var mx = (x1 + x2) / 2 + (r() - 0.5) * wob * 2, my = (y1 + y2) / 2 + (r() - 0.5) * wob * 2;
    return "M" + x1.toFixed(1) + " " + y1.toFixed(1) + " Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + x2.toFixed(1) + " " + y2.toFixed(1);
  }

  // ---------- state ----------
  var boxes = {}; // id -> {x, y, w, h, base}
  var seq = 0;

  function bbox(id) {
    if (Array.isArray(id)) return { x: id[0], y: id[1], w: 0, h: 0 };
    var b = boxes[id];
    if (!b) throw new Error("판서 id 없음: " + id);
    return b;
  }

  function place(pos, size) {
    if (Array.isArray(pos)) return { x: pos[0], y: pos[1] };
    if (pos.after) { var a = bbox(pos.after); return { x: a.x + a.w + (pos.gap == null ? 28 : pos.gap), y: a.base }; }
    if (pos.below) { var b = bbox(pos.below); return { x: b.x, y: b.base + (pos.gap == null ? size * 1.45 : pos.gap) }; }
    return { x: pos.at[0], y: pos.at[1] };
  }

  // each op returns an animation: { dur (ms), step(t 0..1) }
  function text(id, pos, str, st) {
    st = st || {};
    var size = (st.size || 64) * 1.12; // pen font runs narrow; scale everything up a little
    var p = place(pos, size);
    var anchor = st.anchor || (pos && pos.anchor) || "start";
    var t = el("text", {
      x: p.x, y: p.y, "font-size": size, fill: color(st.color), "text-anchor": anchor, "class": "bd-t"
    });
    t.textContent = str;
    var bb = t.getBBox();
    boxes[id] = { x: bb.x, y: bb.y, w: bb.width, h: bb.height, base: p.y };
    // writing = a clip rectangle sweeping left to right
    var cid = "c" + (++seq);
    var cp = el("clipPath", { id: cid }, defs);
    var rect = el("rect", { x: bb.x - 4, y: bb.y - 12, width: 0, height: bb.height + 24 }, cp);
    t.setAttribute("clip-path", "url(#" + cid + ")");
    var full = bb.width + 8;
    return {
      dur: Math.max(350, str.length * 70),
      step: function (k) { rect.setAttribute("width", (full * k).toFixed(1)); }
    };
  }

  function stroke(d, c, width) {
    var p = el("path", { d: d, fill: "none", stroke: color(c), "stroke-width": width || 6, "stroke-linecap": "round", "stroke-linejoin": "round" });
    var len = p.getTotalLength();
    p.style.strokeDasharray = len + " " + len;
    p.style.strokeDashoffset = len;
    return {
      dur: Math.min(900, 250 + len * 0.6),
      step: function (k) { p.style.strokeDashoffset = (len * (1 - k)).toFixed(1); }
    };
  }

  var OPS = {
    title: function (r, id, str) {
      var a = text(id, [80, 128], str, { size: 92 });
      var b = bbox(id);
      var u = stroke(roughLine(b.x - 6, b.base + 22, b.x + b.w + 10, b.base + 18, r, 3), "red", 7);
      return chain([a, u]);
    },
    write: function (r, id, pos, str, st) { return text(id, pos, str, st); },
    under: function (r, id, c) {
      var b = bbox(id);
      return stroke(roughLine(b.x - 6, b.y + b.h + 6, b.x + b.w + 6, b.y + b.h + 2, r), c || "red", 6);
    },
    strike: function (r, id, c) {
      var b = bbox(id), y = b.y + b.h * 0.55;
      return stroke(roughLine(b.x - 10, y + 4, b.x + b.w + 10, y - 4, r), c || "red", 7);
    },
    circle: function (r, id, c) {
      var b = bbox(id), cx = b.x + b.w / 2, cy = b.y + b.h / 2;
      var rx = b.w / 2 + 34, ry = b.h / 2 + 22, d = "";
      var start = -Math.PI * 0.6, steps = 28;
      for (var i = 0; i <= steps; i++) {
        var a = start + (Math.PI * 2.15) * (i / steps);
        var j = 1 + (r() - 0.5) * 0.05 + (i / steps) * 0.06;
        d += (i ? " L" : "M") + (cx + Math.cos(a) * rx * j).toFixed(1) + " " + (cy + Math.sin(a) * ry * j).toFixed(1);
      }
      return stroke(d, c || "red", 6);
    },
    box: function (r, id, c) {
      var b = bbox(id), x1 = b.x - 22, y1 = b.y - 14, x2 = b.x + b.w + 22, y2 = b.y + b.h + 14;
      var d = roughLine(x1, y1, x2 + 6, y1 - 2, r, 3) + " " + roughLine(x2, y1 - 6, x2 - 2, y2 + 4, r, 3).replace("M", "M") +
        " " + roughLine(x2 + 4, y2, x1 - 4, y2 + 2, r, 3) + " " + roughLine(x1, y2 + 6, x1 + 2, y1 - 8, r, 3);
      return stroke(d, c || "blue", 5);
    },
    arrow: function (r, from, to, c) {
      var a = bbox(from), b = bbox(to);
      var ax = a.x + a.w / 2, ay = a.y + a.h / 2, bx = b.x + b.w / 2, by = b.y + b.h / 2;
      var p1 = edge(a, ax, ay, bx, by, 18), p2 = edge(b, bx, by, ax, ay, 22);
      var ang = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]), hl = 26;
      var h1 = [p2[0] - hl * Math.cos(ang - 0.45), p2[1] - hl * Math.sin(ang - 0.45)];
      var h2 = [p2[0] - hl * Math.cos(ang + 0.45), p2[1] - hl * Math.sin(ang + 0.45)];
      var d = roughLine(p1[0], p1[1], p2[0], p2[1], r, 6) +
        " M" + h1[0].toFixed(1) + " " + h1[1].toFixed(1) + " L" + p2[0].toFixed(1) + " " + p2[1].toFixed(1) +
        " L" + h2[0].toFixed(1) + " " + h2[1].toFixed(1);
      return stroke(d, c || "ink", 5);
    },
    line: function (r, p1, p2, c) { return stroke(roughLine(p1[0], p1[1], p2[0], p2[1], r, 4), c || "ink", 5); },
    cross: function (r, p, c) {
      var x = p[0], y = p[1], s = 22;
      return stroke(roughLine(x - s, y - s, x + s, y + s, r, 2) + " " + roughLine(x + s, y - s, x - s, y + s, r, 2), c || "red", 7);
    },
    // 사진: 흰 테두리 + 위쪽 테이프, 살짝 기울여서 칠판에 붙인 것처럼
    photo: function (r, id, src, box, opt) {
      opt = opt || {};
      var x = box[0], y = box[1], w = box[2], h = box[3], pad = 12, capH = opt.caption ? 46 : 0;
      var fw = w + pad * 2, fh = h + pad * 2 + capH;
      var tilt = opt.tilt == null ? (r() - 0.5) * 5 : opt.tilt;
      var cx = x + fw / 2, cy = y + fh / 2;
      var g = el("g", { "class": "bd-photo", opacity: 0 });
      var inner = el("g", { transform: "rotate(" + tilt.toFixed(2) + " " + cx + " " + cy + ")" }, g);
      el("rect", { x: x, y: y, width: fw, height: fh, rx: 3, fill: "#fffdf8", filter: "url(#bd-shadow)" }, inner);
      el("image", { href: src, x: x + pad, y: y + pad, width: w, height: h, preserveAspectRatio: "xMidYMid slice" }, inner);
      if (opt.caption) {
        var t = el("text", { x: cx, y: y + pad + h + 36, "font-size": 34, fill: COLORS.ink, "text-anchor": "middle", "class": "bd-t" }, inner);
        t.textContent = opt.caption;
      }
      [[x + fw * 0.12, -8], [x + fw * 0.88, 8]].forEach(function (tp) {
        el("rect", { x: tp[0] - 46, y: y - 14, width: 92, height: 30, fill: "rgba(232, 200, 120, 0.72)",
          transform: "rotate(" + tp[1] + " " + tp[0] + " " + y + ")" }, inner);
      });
      boxes[id] = { x: x, y: y, w: fw, h: fh, base: y + fh };
      return {
        dur: 600,
        step: function (k) {
          var e = 1 - Math.pow(1 - k, 3);
          g.setAttribute("opacity", e.toFixed(3));
          g.setAttribute("transform", "translate(0 " + ((1 - e) * -24).toFixed(1) + ")");
        }
      };
    },
    clear: function () {
      // only what is on the board now; ops after this one in the same beat are already built
      var nodes = Array.prototype.slice.call(ink.childNodes);
      boxes = {};
      return {
        dur: 450,
        step: function (k) {
          nodes.forEach(function (n) {
            n.style.opacity = String(1 - k);
            if (k >= 1 && n.parentNode) n.parentNode.removeChild(n);
          });
        }
      };
    }
  };

  // point where the line from (cx,cy) toward (tx,ty) leaves the box, plus padding
  function edge(b, cx, cy, tx, ty, pad) {
    if (!b.w && !b.h) return [cx, cy];
    var dx = tx - cx, dy = ty - cy;
    var sx = dx ? (b.w / 2 + pad) / Math.abs(dx) : Infinity;
    var sy = dy ? (b.h / 2 + pad) / Math.abs(dy) : Infinity;
    var s = Math.min(sx, sy, 1);
    return [cx + dx * s, cy + dy * s];
  }

  function chain(parts) {
    var total = parts.reduce(function (s, p) { return s + p.dur; }, 0);
    return {
      dur: total,
      step: function (k) {
        var t = k * total;
        parts.forEach(function (p) {
          p.step(Math.max(0, Math.min(1, t / p.dur)));
          t -= p.dur;
        });
      }
    };
  }

  function wipe() {
    while (ink.firstChild) ink.removeChild(ink.firstChild);
    while (defs.firstChild) defs.removeChild(defs.firstChild);
    boxes = {};
  }

  function build(op, seed) {
    var fn = OPS[op[0]];
    if (!fn) throw new Error("모르는 판서 동작: " + op[0]);
    return fn.apply(null, [rng(seed)].concat(op.slice(1)));
  }

  // draw beats [from, to) instantly (used to rebuild the board when jumping)
  function drawInstant(upto) {
    wipe();
    var start = 0;
    for (var i = upto - 1; i >= 0; i--) {
      if (beats[i].draw.some(function (op) { return op[0] === "clear"; })) { start = i; break; }
    }
    for (var j = start; j < upto; j++) {
      beats[j].draw.forEach(function (op, k) {
        if (op[0] === "clear") { wipe(); return; }
        build(op, j * 100 + k).step(1);
      });
    }
  }

  // ---------- voice ----------
  var synth = window.speechSynthesis;
  var voice = null;
  // 안드로이드 크롬은 목소리 목록을 늦게 주거나 아예 비워 둔다.
  // 그래서 목록에서 못 찾아도 lang만 "ko-KR"로 주고 휴대폰 기본 음성에 맡긴다.
  var speechBroken = !synth;
  function pickVoice() {
    if (!synth) return;
    var ko = synth.getVoices().filter(function (v) { return /^ko/i.test(v.lang); });
    var good = ko.filter(function (v) { return /natural|online|google|neural/i.test(v.name); });
    voice = good[0] || ko[0] || voice;
  }
  function noVoice() {
    speechBroken = true;
    note.hidden = false;
    note.textContent = "이 기기에서는 한국어 목소리를 낼 수 없어서 자막으로만 진행됩니다. 휴대폰 설정 → 텍스트 음성 변환(TTS)에서 한국어를 설치하거나, Chrome·Edge에서 열어 주세요.";
  }
  if (synth) {
    pickVoice();
    synth.addEventListener("voiceschanged", pickVoice);
  } else {
    noVoice();
  }

  // ---------- player ----------
  var idx = 0, playing = false, run = 0, raf = 0, utter = null;

  function rate() { return parseFloat(rateSel.value) || 1; }

  function ui() {
    if (mode === "live") { uiLive(); return; }
    var b = beats[Math.min(idx, beats.length - 1)];
    cap.textContent = b ? b.say : "";
    fill.style.width = ((idx) / beats.length * 100).toFixed(2) + "%";
    count.textContent = Math.min(idx + 1, beats.length) + " / " + beats.length;
    track.setAttribute("aria-valuenow", String(idx + 1));
    playBtn.textContent = playing ? "❚❚" : "▶";
    playBtn.setAttribute("aria-label", playing ? "일시정지" : "재생");
    big.hidden = playing || idx > 0;
    var cur = b ? b.scene : 0;
    sceneNav.querySelectorAll("button").forEach(function (btn, i) {
      btn.classList.toggle("on", i === cur);
    });
  }

  function stopAll() {
    run++;
    cancelAnimationFrame(raf);
    if (synth) synth.cancel();
    utter = null;
  }

  // play beat idx: speak + draw together; advance when both are done
  function playBeat() {
    var my = ++run;
    var b = beats[idx];
    if (!b) { playing = false; ui(); return; }
    drawInstant(idx);
    ui();

    var anims = b.draw.map(function (op, k) { return build(op, idx * 100 + k); });
    var spoken = false, drawn = false;

    function maybeNext() {
      if (my !== run || !spoken || !drawn) return;
      setTimeout(function () {
        if (my !== run || !playing) return;
        idx++;
        if (idx >= beats.length) { playing = false; idx = beats.length - 1; fill.style.width = "100%"; ui(); big.hidden = true; return; }
        playBeat();
      }, 450 / rate());
    }

    // drawing: ops one after another, slightly faster when speech is faster
    var speed = rate();
    var total = anims.reduce(function (s, a) { return s + a.dur; }, 0) / speed;
    var t0 = null;
    function frame(ts) {
      if (my !== run) return;
      if (t0 === null) t0 = ts;
      var t = reduced ? total : ts - t0;
      var acc = 0;
      anims.forEach(function (a) {
        var d = a.dur / speed;
        a.step(Math.max(0, Math.min(1, d ? (t - acc) / d : 1)));
        acc += d;
      });
      if (t < total) raf = requestAnimationFrame(frame);
      else { drawn = true; maybeNext(); }
    }
    raf = requestAnimationFrame(frame);

    // speech (falls back to a reading-time timer when this device cannot speak Korean)
    if (!voice) pickVoice();
    var timer = function () {
      setTimeout(function () { if (my === run) { spoken = true; maybeNext(); } }, (900 + b.say.length * 140) / speed);
    };
    if (!speechBroken) {
      // Chrome drops 'end' events now and then, and cuts off long utterances,
      // so speak sentence by sentence and also watch synth.speaking ourselves.
      var parts = b.say.split(/(?<=[.?!])\s+/);
      var done = function () {
        if (my !== run || spoken) return;
        spoken = true;
        clearInterval(watch);
        maybeNext();
      };
      utter = parts.map(function (s, i) {
        var u = new SpeechSynthesisUtterance(s);
        if (voice) u.voice = voice;
        u.lang = voice ? voice.lang : "ko-KR";
        u.rate = speed;
        u.onerror = function (e) {
          // 끊거나 넘긴 것(interrupted, canceled)은 정상. 그 밖의 실패는 이 기기가 못 읽는 것이다.
          if (my !== run || spoken) return;
          if (e.error === "interrupted" || e.error === "canceled") { if (i === parts.length - 1) done(); return; }
          clearInterval(watch);
          noVoice();
          timer();
        };
        if (i === parts.length - 1) u.onend = done;
        synth.speak(u);
        return u;
      });
      var began = Date.now(), heard = false;
      var limit = (3000 + b.say.length * 300) / speed;
      var watch = setInterval(function () {
        if (my !== run) { clearInterval(watch); return; }
        if (synth.speaking) heard = true;
        var quiet = !synth.speaking && !synth.pending;
        // 휴대폰은 음성 엔진이 깨어나는 데 시간이 걸려서 처음 3초는 기다린다
        if ((heard && quiet) || (!heard && quiet && Date.now() - began > 3000) || Date.now() - began > limit) done();
      }, 250);
    } else {
      timer();
    }
  }

  function play() {
    if (idx >= beats.length - 1 && !playing && fill.style.width === "100%") idx = 0;
    playing = true;
    playBeat();
  }
  function pause() {
    playing = false;
    stopAll();
    drawInstant(idx + 1); // show the whole current beat while paused
    ui();
  }
  function jump(i) {
    if (mode === "live") { liveJump(i); return; }
    var was = playing;
    stopAll();
    idx = Math.max(0, Math.min(beats.length - 1, i));
    if (was) { playing = true; playBeat(); }
    else { drawInstant(idx + 1); ui(); }
  }

  playBtn.addEventListener("click", function () {
    if (mode === "live") { live.on ? liveStop() : liveStart(); return; }
    playing ? pause() : play();
  });
  big.addEventListener("click", function () { mode === "live" ? liveStart() : play(); });
  root.querySelector(".bd-prev").addEventListener("click", function () { jump(idx - 1); });
  root.querySelector(".bd-next").addEventListener("click", function () { jump(idx + 1); });
  rateSel.addEventListener("change", function () { if (playing) jump(idx); });
  ccBtn.addEventListener("click", function () {
    var on = !ccBtn.classList.contains("on");
    ccBtn.classList.toggle("on", on);
    ccBtn.setAttribute("aria-pressed", String(on));
    cap.hidden = !on;
  });
  root.querySelector(".bd-full").addEventListener("click", function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (root.requestFullscreen) root.requestFullscreen();
  });
  sceneNav.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    var s = +btn.dataset.scene;
    for (var i = 0; i < beats.length; i++) if (beats[i].scene === s) { jump(i); break; }
  });
  function seek(clientX) {
    var r = track.getBoundingClientRect();
    jump(Math.floor(((clientX - r.left) / r.width) * beats.length));
  }
  track.addEventListener("click", function (e) { seek(e.clientX); });
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { jump(idx + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { jump(idx - 1); e.preventDefault(); }
  });
  root.addEventListener("keydown", function (e) {
    if (mode === "live") return; // live mode has its own keys (see below)
    if (e.key === " " && e.target.tagName !== "SELECT" && e.target.tagName !== "BUTTON") {
      e.preventDefault();
      playing ? pause() : play();
    }
  });
  // leaving the page should not keep talking
  window.addEventListener("pagehide", function () { stopAll(); liveStop(); });

  // ---------- 강사 모드: 강사의 목소리를 듣고 대본 위치를 따라간다 ----------
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var TEST = /[?&]test\b/.test(location.search); // 마이크 없이 시험: window.__live.say("...")
  var mode = "tts"; // "tts": 컴퓨터가 읽음, "live": 강사가 말함
  var live = { on: false, rec: null, base: "", sess: "", tracker: null, anims: [], fired: 0, queue: [], busy: false, progress: 0, gen: 0 };

  function heard() { return live.base + " " + live.sess; }

  // 판서 동작은 순서대로 하나씩 그린다 (글씨가 다 써진 뒤에 동그라미)
  function enqueue(a) { live.queue.push(a); if (!live.busy) runQueue(); }
  function runQueue() {
    var a = live.queue.shift();
    if (!a) { live.busy = false; return; }
    live.busy = true;
    if (reduced) { a.step(1); runQueue(); return; }
    var t0 = null, my = live.gen;
    function f(ts) {
      if (my !== live.gen) return;
      if (t0 === null) t0 = ts;
      var k = Math.min(1, (ts - t0) / a.dur);
      a.step(k);
      if (k < 1) requestAnimationFrame(f); else runQueue();
    }
    requestAnimationFrame(f);
  }

  // 문장 j로 넘어간다: 앞 문장들은 바로 완성하고, j의 판서는 말하는 만큼 그린다
  function liveGo(j) {
    live.gen++;
    live.queue = []; live.busy = false;
    idx = j;
    drawInstant(j);
    live.anims = beats[j].draw.map(function (op, k) { return build(op, j * 100 + k); });
    live.fired = 0;
    live.progress = 0;
    fireUpTo(0);
  }

  // 문장의 몇 %를 말했느냐에 따라 판서 동작을 하나씩 꺼낸다
  function fireUpTo(p) {
    var n = live.anims.length;
    while (live.fired < n && (live.fired === 0 || live.fired / n * 0.75 <= p)) {
      enqueue(live.anims[live.fired++]);
    }
  }
  function fireAll() { while (live.fired < live.anims.length) enqueue(live.anims[live.fired++]); }

  function onHeard() {
    if (!live.tracker) return;
    var r = live.tracker.update(heard());
    if (r.moved) liveGo(r.beat);
    if (live.tracker.cur >= 0 && live.tracker.cur === idx) { live.progress = r.at; fireUpTo(r.at); }
    uiLive();
  }

  function liveStart() {
    if (!SR && !TEST) {
      note.hidden = false;
      note.textContent = "이 브라우저는 받아쓰기를 지원하지 않아요. Chrome이나 Edge에서 열어 주세요.";
      return;
    }
    stopAll(); playing = false;
    live.on = true; live.base = ""; live.sess = "";
    live.tracker = new ScriptSync.Tracker(beats.map(function (b) { return b.say; }));
    live.tracker.cur = idx - 1; // 지금 보이는 문장부터 기다린다
    live.gen++; live.queue = []; live.busy = false; live.anims = []; live.fired = 0; live.progress = 0;
    drawInstant(idx);
    note.hidden = true;
    if (SR && !TEST) {
      var rec = new SR();
      rec.lang = "ko-KR"; rec.continuous = true; rec.interimResults = true;
      rec.onresult = function (e) {
        var s = "";
        for (var i = 0; i < e.results.length; i++) s += e.results[i][0].transcript + " ";
        live.sess = s;
        onHeard();
      };
      // 크롬은 조용하면 받아쓰기를 끝내 버린다. 강의 중에는 다시 켠다.
      rec.onend = function () {
        if (!live.on) return;
        live.base += " " + live.sess; live.sess = "";
        setTimeout(function () { if (live.on) try { rec.start(); } catch (_) {} }, 150);
      };
      rec.onerror = function (e) {
        if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") {
          liveStop();
          note.hidden = false;
          note.textContent = e.error === "audio-capture"
            ? "마이크를 찾지 못했어요. 마이크가 연결되어 있는지 확인해 주세요."
            : "마이크 사용이 막혀 있어요. Chrome이나 Edge라면 주소창 왼쪽 아이콘을 눌러 마이크를 허용해 주세요. 다른 앱 안에 들어 있는 미리보기 화면에서는 마이크를 쓸 수 없어요.";
        } else if (e.error === "network") {
          pStatus.textContent = "인터넷 연결이 끊겨 받아쓰기를 못 하고 있어요. 키보드 →로 넘겨 주세요.";
        }
      };
      live.rec = rec;
      try { rec.start(); } catch (_) {}
    }
    uiLive();
  }

  function liveStop() {
    live.on = false;
    if (live.rec) { var r = live.rec; live.rec = null; try { r.stop(); } catch (_) {} }
    if (mode === "live") { fireAll(); uiLive(); }
  }

  // 손으로 넘기기 (키보드, 발표용 리모컨, 장면 버튼)
  function liveJump(i) {
    i = Math.max(0, Math.min(beats.length - 1, i));
    liveGo(i);
    fireAll();
    if (live.tracker) live.tracker.set(i, heard());
    uiLive();
  }

  function setMode(m) {
    if (m === mode) return;
    if (m === "live") { pause(); mode = "live"; drawInstant(idx); }
    else { liveStop(); mode = "tts"; drawInstant(idx + 1); }
    root.classList.toggle("is-live", mode === "live");
    modeBtn.setAttribute("aria-pressed", String(mode === "live"));
    modeBtn.textContent = mode === "live" ? "🔊 자동 낭독으로" : "🎤 강사 모드";
    prompt.hidden = mode !== "live";
    cap.hidden = mode === "live" || !ccBtn.classList.contains("on");
    big.querySelector("span").textContent = mode === "live" ? "🎤" : "▶";
    big.setAttribute("aria-label", mode === "live" ? "강의 시작 (마이크 켜기)" : "판서 강의 재생");
    ui();
  }
  modeBtn.addEventListener("click", function () { setMode(mode === "live" ? "tts" : "live"); });
  // 강사 모드는 당장은 안 써서 버튼만 숨겨 둔다 (2026-10-17). 다시 쓰려면 이 줄을 지운다.
  modeBtn.hidden = true;

  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }

  function uiLive() {
    var started = !!live.tracker && live.tracker.cur >= idx;
    var b = beats[idx];
    fill.style.width = (idx / beats.length * 100).toFixed(2) + "%";
    count.textContent = (idx + 1) + " / " + beats.length;
    track.setAttribute("aria-valuenow", String(idx + 1));
    playBtn.textContent = live.on ? "■" : "🎤";
    playBtn.setAttribute("aria-label", live.on ? "강의 끝내기" : "강의 시작");
    big.hidden = live.on;
    sceneNav.querySelectorAll("button").forEach(function (btn, i) { btn.classList.toggle("on", i === b.scene); });

    pStatus.textContent = !live.on
      ? "🎤를 누르고 대본대로 말하면, 말에 맞춰 판서가 그려져요. → / ← 키로 직접 넘길 수도 있어요."
      : started ? "● 듣는 중" : "● 듣는 중 · 아래 문장을 말하면 시작해요";
    pStatus.classList.toggle("on", live.on);
    // 이미 말한 만큼 색칠 (대략적인 위치)
    var said = started ? ScriptSync.rawIndex(b.say, live.tracker.pos) : 0;
    pNow.innerHTML = "<mark>" + esc(b.say.slice(0, said)) + "</mark>" + esc(b.say.slice(said));
    pAfter.textContent = beats[idx + 1] ? "다음: " + beats[idx + 1].say : "마지막 문장이에요.";
    var h = heard().trim();
    pHeard.textContent = live.on && h ? "들린 말: …" + h.slice(-40) : "";
  }

  // 강의 중 발표용 리모컨(PageDown/PageUp)이나 화살표로 넘긴다
  document.addEventListener("keydown", function (e) {
    if (mode !== "live") return;
    var tag = e.target.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    var waiting = !live.tracker || live.tracker.cur < idx; // 아직 이 문장을 시작 안 함
    if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && tag !== "BUTTON")) {
      e.preventDefault();
      liveJump(waiting ? idx : idx + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      liveJump(idx - 1);
    }
  });

  if (TEST) window.__live = {
    say: function (text) { live.sess += " " + text; onHeard(); },
    state: function () { return { idx: idx, cur: live.tracker && live.tracker.cur, progress: +live.progress.toFixed(2), fired: live.fired, ops: live.anims.length }; }
  };

  // text boxes are measured with the pen font, so wait for it
  (document.fonts ? document.fonts.load('64px "Nanum Pen Script"').then(function () { return document.fonts.ready; }) : Promise.resolve())
    .then(function () { drawInstant(1); ui(); }, function () { drawInstant(1); ui(); });
})();
