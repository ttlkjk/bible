// 명화로 읽는 성경 — 화면 순서와 시간 계산 (화면을 건드리지 않는 부분). 브라우저: window.StoryCore, node: require
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.StoryCore = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // 화면 순서: 막 표지 → 그 막의 그림들 → … → 끝(그림 출처)
  function frames(story) {
    const out = [];
    for (const a of story.acts) {
      out.push({ type: "act", act: a.n });
      story.slides.forEach((s, i) => { if (s.act === a.n) out.push({ type: "slide", act: a.n, i }); });
    }
    const last = story.acts[story.acts.length - 1];
    out.push({ type: "end", act: last ? last.n : 0 });
    return out;
  }

  // 목소리를 끄고 볼 때 한 장에 머무는 시간(ms): 그림 보는 4초 + 글자당 0.13초, 8~30초
  function readMs(text) {
    const chars = text.join("").replace(/\s/g, "").length;
    return Math.max(8000, Math.min(30000, 4000 + chars * 130));
  }

  // 목소리가 지금 읽는 문장 번호 (times: 문장마다 시작 초). 첫 문장 전이면 -1
  function sentenceAt(times, t) {
    let k = -1;
    for (let i = 0; i < times.length; i++) if (t >= times[i]) k = i;
    return k;
  }

  // 이어 보기: 저장된 값이 이상하면 처음부터
  function resumeIndex(saved, count) {
    const n = Number.parseInt(saved, 10);
    return Number.isInteger(n) && n >= 0 && n < count ? n : 0;
  }

  // 막 목록에서 고른 막의 표지 자리
  function actStart(list, n) {
    const i = list.findIndex((f) => f.type === "act" && f.act === n);
    return i < 0 ? 0 : i;
  }

  // 그림이 화면을 꽉 채울 때(cover) 잘리는 쪽: 그림이 화면보다 세로로 길면 "y"(위아래가 잘림), 가로로 길면 "x"(좌우가 잘림), 거의 같거나 값이 이상하면 "none"
  function panAxis(imgRatio, screenRatio) {
    if (!(imgRatio > 0) || !(screenRatio > 0) || !isFinite(imgRatio) || !isFinite(screenRatio)) return "none";
    const r = imgRatio / screenRatio;
    if (Math.abs(r - 1) < 0.01) return "none";
    return r < 1 ? "y" : "x";
  }

  // 목소리를 끄고 볼 때 문장마다 보여 줄 시작 시각(ms): 글자 수 비율대로 totalMs를 나눈다. 첫 문장은 0
  function textTimes(text, totalMs) {
    const lens = text.map((t) => t.replace(/\s/g, "").length);
    const all = lens.reduce((a, b) => a + b, 0);
    let acc = 0;
    return lens.map((n) => { const at = all ? Math.round((totalMs * acc) / all) : 0; acc += n; return at; });
  }

  return { frames, readMs, sentenceAt, resumeIndex, actStart, panAxis, textTimes };
});
