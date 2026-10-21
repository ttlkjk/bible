// 명화로 읽는 성경 — 슬라이드쇼 화면. 데이터: data.js (window.STORY), 순서·시간 계산: core.js (window.StoryCore)
(function () {
  "use strict";
  const S = window.STORY, C = window.StoryCore;
  if (!S || !C) return;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = { // 저장이 막힌 브라우저(사생활 보호 창 등)에서도 그냥 돈다
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* 저장 못 해도 괜찮다 */ } },
  };
  const F = C.frames(S);
  const total = S.slides.length;
  const layers = Array.from(document.querySelectorAll(".layer"));
  const audio = $("audio");
  const actOf = (n) => S.acts.find((a) => a.n === n);
  const itemOf = (f) => (f.type === "act" ? actOf(f.act) : f.type === "slide" ? S.slides[f.i] : null);
  const holdMs = (f, item) => (f.type === "act" ? 7000 : C.readMs(item.text));

  let at = 0, front = 0, seq = 0, runSeq = 0, playing = false, timer = null, wait = null;
  let voiceOn = store.get("story.voice") !== "off";
  let infoOn = false, idleT = null, capK = -2, fadeSeq = 0, capTimers = [];

  // 그림은 화면을 꽉 채운다(cover). 잘리는 쪽(위아래 또는 좌우)으로 천천히 훑어 가며 보여 준다. 창 크기가 바뀌면 다시 고른다
  function applyAxis(layer) {
    const img = layer.querySelector("img.main"), sz = layer._size;
    const w = sz ? sz[0] : img.naturalWidth, h = sz ? sz[1] : img.naturalHeight;
    const axis = C.panAxis(w / h, innerWidth / innerHeight);
    img.classList.toggle("pan-x", axis === "x");
    img.classList.toggle("pan-y", axis === "y");
  }

  // 그림을 뒤 레이어에 불러 겹쳐 바꾼다.
  // dim: 막 표지 뒤에 흐리게. dur: 훑어 가는 시간(초). size: [너비, 높이]
  function picture(src, dim, dur, size) {
    const token = ++seq;
    if (!src) { layers.forEach((l) => l.classList.remove("on")); return; }
    const back = layers[1 - front], img = back.querySelector("img.main");
    const swap = () => {
      if (token !== seq) return; // 그새 다른 장으로 넘어갔다
      img.classList.remove("kb");
      back._size = size || null;
      applyAxis(back);
      void img.offsetWidth; // 훑기를 처음부터
      back.style.setProperty("--dur", (dur || 20) + "s");
      back.classList.toggle("dim", !!dim);
      if (!dim) img.classList.add("kb");
      back.classList.add("on");
      layers[front].classList.remove("on");
      front = 1 - front;
    };
    if (img.getAttribute("src") === src && img.complete) return swap();
    img.onload = swap;
    img.onerror = swap;
    img.src = src;
  }

  function preload(i) {
    const f = F[i];
    if (f && f.type === "slide") new Image().src = S.slides[f.i].img;
  }

  function stopClock() {
    runSeq++; // 멈춘 장의 늦게 오는 재생 실패가 다음 장을 넘기지 않게
    clearTimeout(timer); clearTimeout(wait);
    timer = wait = null;
    capTimers.forEach(clearTimeout); capTimers = []; // 시간으로 바뀌던 자막도 멈춘다
    audio.pause();
  }

  // 자막: 지금 읽는 한 문장만. 바뀔 때 부드럽게 (fadeSeq: 그새 다른 문장·다른 장으로 넘어가면 늦은 교체를 버린다)
  // 설명 패널의 밝은 문장도 같이 맞춘다
  function setCap(k, instant) {
    const f = F[at];
    if (f.type !== "slide") return;
    const s = S.slides[f.i];
    const kk = Math.max(0, Math.min(s.text.length - 1, k));
    const box = $("p-text");
    box.classList.add("reading");
    box.querySelectorAll("span").forEach((sp) => sp.classList.toggle("now", Number(sp.dataset.k) === kk));
    if (kk === capK) return;
    capK = kk;
    const my = ++fadeSeq, line = $("cap-line");
    if (instant) { line.textContent = s.text[kk] || ""; line.classList.remove("out"); return; }
    line.classList.add("out");
    setTimeout(() => {
      if (my !== fadeSeq) return;
      line.textContent = s.text[kk] || "";
      line.classList.remove("out");
    }, 250);
  }

  // 목소리가 없을 때: 머무는 시간을 글자 수대로 나눠 문장을 차례로 바꿔 보여 준다
  function capClock(f, ms) {
    capTimers.forEach(clearTimeout); capTimers = [];
    if (f.type !== "slide") return;
    C.textTimes(S.slides[f.i].text, ms).forEach((t, k) => { if (k > 0) capTimers.push(setTimeout(() => setCap(k), t)); });
    setCap(0);
  }

  // 위 막대·단추 줄: 재생 중 3초 가만히 있으면 사라지고, 움직이면 다시 뜬다. 멈춤·패널·막 목록·시작/끝 화면에서는 늘 보인다
  const pinned = () => !playing || !$("gate").hidden || $("menu").open || F[at].type === "end" || (infoOn && F[at].type === "slide");
  function armIdle() {
    clearTimeout(idleT); idleT = null;
    if (pinned()) return;
    idleT = setTimeout(() => { idleT = null; if (!pinned()) document.body.classList.add("idle"); }, 3000);
  }
  function wake() { document.body.classList.remove("idle"); armIdle(); }
  function refreshUi() {
    if (pinned()) { document.body.classList.remove("idle"); clearTimeout(idleT); idleT = null; }
    else if (!idleT && !document.body.classList.contains("idle")) armIdle();
  }
  // 막대 높이를 알려 줘서 자막과 설명 패널이 막대에 가리지 않게 한다
  function measure() {
    const root = document.documentElement.style;
    root.setProperty("--bar-h", document.querySelector(".bar").offsetHeight + "px");
    root.setProperty("--top-h", document.querySelector(".top").offsetHeight + "px");
  }

  // 설명 패널: ⓘ 단추로 열고 닫는다. 막 표지·끝 화면에서는 열려 있어도 보이지 않는다
  function syncInfo() {
    const slide = F[at].type === "slide", open = infoOn && slide;
    $("info-btn").hidden = !slide;
    $("info-btn").setAttribute("aria-pressed", String(open));
    $("plate").hidden = !open;
    document.body.classList.toggle("info-open", open);
  }
  function setInfo(on) { infoOn = on; syncInfo(); refreshUi(); }

  function showAct(a) {
    picture(a.cover, true, 0);
    const card = $("card");
    card.querySelector(".card-n").textContent = `${a.n}막`;
    card.querySelector(".card-title").textContent = a.title;
    card.querySelector(".card-summary").textContent = a.summary;
    card.querySelector(".card-range").textContent = a.range;
  }

  function showSlide(s) {
    const secs = voiceOn && s.audio ? s.dur + 2 : C.readMs(s.text) / 1000;
    picture(s.img, false, secs + 1.2, s.size);
    $("cap-tag").textContent = `〈${s.title}〉 ${[s.artist, s.year].filter(Boolean).join(" · ")}`;
    $("p-title").textContent = `〈${s.title}〉`;
    $("p-meta").textContent = [s.artist, s.year, s.museum].filter(Boolean).join(" · ");
    const text = $("p-text");
    text.innerHTML = s.text.map((t, k) => `<span data-k="${k}">${esc(t)}</span>`).join(" ");
    text.classList.remove("reading");
    const links = [esc(s.verse), `<a href="../pansuh/${encodeURIComponent(s.lecture)}.html">판서 강의 · ${esc(s.lectureTitle)}</a>`];
    if (s.youtube) links.push(`<a href="https://youtu.be/${encodeURIComponent(s.youtube)}" target="_blank" rel="noopener">이 강의 영화 보기</a>`);
    $("p-links").innerHTML = links.join(" · ");
    $("p-credit").innerHTML = `${esc(s.credit)} · ${esc(s.license)} · <a href="${esc(s.page)}" target="_blank" rel="noopener">위키미디어 공용</a>`;
    $("plate").scrollTop = 0;
    text.classList.remove("reading");
    capK = -2; setCap(0, true); // 새 장의 첫 문장부터
  }

  function showEnd() {
    picture(null);
    const list = $("credits");
    if (!list.children.length) list.innerHTML = S.slides.map((s) =>
      `<li>〈${esc(s.title)}〉 ${esc([s.artist, s.year, s.museum].filter(Boolean).join(", "))} — ${esc(s.credit)} · ${esc(s.license)} · <a href="${esc(s.page)}" target="_blank" rel="noopener">출처</a></li>`).join("");
    $("end").scrollTop = 0;
  }

  function show(i) {
    stopClock();
    if (audio.getAttribute("src")) { audio.removeAttribute("src"); audio.load(); } // 새 장은 목소리를 처음부터
    at = Math.max(0, Math.min(F.length - 1, i));
    store.set("story.pos", String(at));
    const f = F[at], act = actOf(f.act);
    $("card").hidden = f.type !== "act";
    $("end").hidden = f.type !== "end";
    $("cap").hidden = f.type !== "slide";
    fadeSeq++; // 앞 장의 늦은 자막 교체를 버린다
    syncInfo();
    $("where").textContent = f.type === "end" ? "그림 출처" : act ? `${act.n}막 · ${act.title}` : "";
    $("count").textContent = f.type === "slide" ? `${f.i + 1} / ${total}` : "";
    if (f.type === "act") showAct(act);
    else if (f.type === "slide") showSlide(S.slides[f.i]);
    else showEnd();
    preload(at + 1);
    markMenu();
    refreshUi();
    if (playing) run(f);
  }

  // 지금 장을 목소리나 시간에 맞춰 흘려보낸다
  function run(f) {
    const item = itemOf(f);
    if (!item) { setPlaying(false); return; } // 끝 화면에서 멈춘다
    if (voiceOn && item.audio) {
      const my = runSeq;
      if (audio.getAttribute("src") !== item.audio) audio.src = item.audio; // 같으면 멈춘 자리에서 이어 읽는다
      audio.play().catch(() => { // 자동 재생이 막히면 시간으로
        if (my !== runSeq) return;
        timer = setTimeout(next, holdMs(f, item));
        capClock(f, holdMs(f, item));
      });
    } else {
      timer = setTimeout(next, holdMs(f, item));
      capClock(f, holdMs(f, item));
    }
  }

  function setPlaying(on) {
    playing = on;
    $("play").textContent = on ? "⏸" : "▶︎";
    $("play").setAttribute("aria-label", on ? "멈춤" : "재생");
    refreshUi();
    if (!on) { stopClock(); return; }
    if (F[at].type === "end") { show(0); return; }
    run(F[at]);
  }

  function setVoice(on) {
    voiceOn = on;
    store.set("story.voice", on ? "on" : "off");
    $("voice").setAttribute("aria-pressed", String(on));
    $("voice").querySelector(".ico").textContent = on ? "🔊" : "🔇";
    if (playing) { stopClock(); audio.currentTime = 0; run(F[at]); }
  }

  function next() { if (at < F.length - 1) show(at + 1); }
  function prev() { show(at - 1); }

  // 시작 화면이 떠 있으면 걷고 재생을 켠다
  function enter() {
    if ($("gate").hidden) return false;
    $("gate").hidden = true;
    playing = true;
    $("play").textContent = "⏸";
    return true;
  }

  audio.addEventListener("ended", () => { if (playing) wait = setTimeout(next, 2000); });
  // 목소리 파일을 못 읽으면(깨진 파일 등) 시간으로 넘어간다. 끝 화면이나 장을 바꾸며 src를 지운 경우는 무시
  audio.addEventListener("error", () => {
    const item = itemOf(F[at]);
    if (!playing || !item || !audio.getAttribute("src")) return;
    clearTimeout(timer); // play() 실패 쪽 타이머와 겹쳐 두 번 넘어가지 않게
    timer = setTimeout(next, holdMs(F[at], item));
    capClock(F[at], holdMs(F[at], item));
  });
  audio.addEventListener("timeupdate", () => {
    const f = F[at];
    if (f.type !== "slide" || !voiceOn) return;
    setCap(C.sentenceAt(S.slides[f.i].times, audio.currentTime)); // 첫 문장 전에는 첫 문장을 보여 준다
  });

  $("prev").onclick = () => { enter(); prev(); };
  $("next").onclick = () => { if (enter()) show(at); else next(); };
  $("play").onclick = () => { if (enter()) show(at); else setPlaying(!playing); };
  $("voice").onclick = () => setVoice(!voiceOn);
  $("full").onclick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  };

  // 막 목록
  $("acts").innerHTML = S.acts.map((a) =>
    `<li><button type="button" data-act="${a.n}">${a.n}막 · ${esc(a.title)}<small>${esc(a.range)}</small></button></li>`).join("");
  $("acts").onclick = (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    $("menu").close();
    enter();
    show(C.actStart(F, Number(b.dataset.act)));
  };
  $("menu-btn").onclick = () => { $("menu").showModal(); refreshUi(); };
  $("menu-close").onclick = () => $("menu").close();
  $("menu").addEventListener("close", () => { refreshUi(); wake(); });
  $("info-btn").onclick = () => setInfo(!infoOn);
  $("p-close").onclick = () => setInfo(false);
  function markMenu() {
    const n = F[at].act;
    $("acts").querySelectorAll("[data-act]").forEach((b) => b.classList.toggle("here", Number(b.dataset.act) === n));
  }

  // 키보드: ← → 스페이스 (단추에 초점이 있을 때 스페이스는 그 단추가 받는다), Esc 는 설명 패널 닫기
  document.addEventListener("keydown", (e) => {
    if ($("menu").open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === "Escape") { if (infoOn) { e.preventDefault(); setInfo(false); } }
    else if (e.key === "ArrowRight") { if (enter()) show(at); else next(); }
    else if (e.key === "ArrowLeft") { enter(); prev(); }
    else if (e.key === " " && !e.target.closest("button, a")) { e.preventDefault(); if (enter()) show(at); else setPlaying(!playing); }
  });

  // 움직임이 있으면 막대를 다시 띄운다
  let mx = -1, my = -1;
  document.addEventListener("mousemove", (e) => { if (e.screenX !== mx || e.screenY !== my) { mx = e.screenX; my = e.screenY; wake(); } }, { passive: true });
  ["pointerdown", "touchstart", "keydown", "wheel", "focusin"].forEach((n) => document.addEventListener(n, wake, { passive: true }));
  window.addEventListener("resize", () => { layers.forEach(applyAxis); measure(); });
  if (window.ResizeObserver) { const ro = new ResizeObserver(measure); ro.observe(document.querySelector(".bar")); ro.observe(document.querySelector(".top")); }
  measure();

  // 휴대폰: 좌우로 밀기
  let x0 = null, y0 = null;
  $("stage").addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  $("stage").addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = y0 = null;
    // 가로로 밀 때만 넘긴다. 세로로 긁는 것(끝 화면 출처 목록 스크롤)은 그냥 둔다
    if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy) || !$("gate").hidden) return;
    if (dx < 0) next(); else prev();
  });

  // 시작 화면
  const label = (i) => (F[i].type === "slide" ? `${F[i].i + 1} / ${total}` : F[i].type === "act" ? `${F[i].act}막` : "끝");
  const saved = C.resumeIndex(store.get("story.pos"), F.length);
  $("gate-sub").textContent = `창세기에서 요한계시록까지 · 명화 ${total}점 · ${S.acts.length}막`;
  if (saved > 0) { $("resume").hidden = false; $("resume").textContent = `이어 보기 (${label(saved)})`; }
  $("go").onclick = () => { enter(); show(0); };
  $("resume").onclick = () => { enter(); show(saved); };
  setVoice(voiceOn);
  if (S.acts[0]) picture(S.acts[0].cover, true, 0);
})();
