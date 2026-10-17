/*
 * 대본 따라가기: 받아쓰기 결과(지금까지 들린 말 전체)를 넣으면
 * 강사가 대본의 몇 번째 문장을, 얼마나 말했는지 알려 준다.
 *
 * 받아쓰기는 띄어쓰기, 조사, 숫자 표기가 대본과 조금씩 다르다.
 * 그래서 글자를 두 개씩 묶은 조각(바이그램)이 얼마나 겹치는지로 비교한다.
 */
(function (global) {
  "use strict";

  var DIG = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var UNIT = ["", "ten", "hundred", "thousand"];

  function under10000(n) {
    var s = "";
    for (var i = 3; i >= 0; i--) {
      var d = Math.floor(n / Math.pow(10, i)) % 10;
      if (d) s += (d === 1 && i > 0 ? "" : DIG[d]) + UNIT[i];
    }
    return s;
  }

  // 2000 -> 이천, 4400 -> 사천사백 (대본과 받아쓰기의 숫자 표기를 맞춘다)
  function numKo(str) {
    var n = parseInt(str, 10);
    if (!isFinite(n) || str.length > 8) return str;
    if (n === 0) return "zero";
    var man = Math.floor(n / 10000), rest = n % 10000;
    return (man ? (man === 1 ? "tenthousand" : under10000(man) + "tenthousand") : "") + under10000(rest);
  }

  function norm(s) {
    return String(s).replace(/\d+/g, numKo).replace(/[^0-9A-Za-z가-힣]/g, "").toLowerCase();
  }

  function grams(s) {
    var g = {};
    for (var i = 0; i < s.length - 1; i++) {
      var k = s.substr(i, 2);
      g[k] = (g[k] || 0) + 1;
    }
    return g;
  }

  // target의 조각 중 heard에 들어 있는 비율 (0..1)
  function cover(target, heard) {
    var t = grams(target), h = grams(heard), hit = 0, tot = 0;
    for (var k in t) { tot += t[k]; hit += Math.min(t[k], h[k] || 0); }
    return tot ? hit / tot : 0;
  }

  // 두 글자열이 얼마나 닮았는지 (0..1, 양쪽 길이를 함께 본다)
  function dice(a, b) {
    var x = grams(a), y = grams(b), common = 0, n = Math.max(0, a.length - 1) + Math.max(0, b.length - 1);
    for (var k in x) common += Math.min(x[k], y[k] || 0);
    return n ? (2 * common) / n : 0;
  }

  // s 안에서 tail과 가장 닮은 구간의 점수
  function bestWindow(s, tail) {
    var L = tail.length, best = 0;
    if (s.length <= L) return dice(s, tail);
    for (var i = 0; i + L <= s.length; i++) best = Math.max(best, dice(s.substr(i, L), tail));
    return best;
  }

  var PREFIX = 10;   // 문장 첫 10글자 안팎을 들으면 "그 문장을 시작했다"고 본다
  var LOOK = 3;      // 문장을 건너뛰어도 3개 앞까지는 찾아간다
  var MARGIN = 0.1;  // 다음 문장 시작이 지금 문장보다 이만큼은 더 닮아야 넘어간다

  function Tracker(sentences) {
    this.s = sentences.map(norm);
    this.cur = -1;   // 지금 말하는 문장 (-1: 아직 시작 전)
    this.start = 0;  // 그 문장이 시작된 위치 (정규화된 heard 기준)
    this.pos = 0;    // 그 문장에서 어디까지 말했나 (정규화된 글자 수)
  }

  // 방금 들린 몇 글자가 지금 문장의 어디와 맞는지 찾아 위치를 앞으로만 옮긴다 (0..1)
  Tracker.prototype.where = function (h) {
    if (this.cur < 0) return 0;
    var s = this.s[this.cur], part = h.slice(this.start);
    var tail = part.slice(-6);
    if (tail.length >= 2) {
      var L = Math.min(tail.length, s.length), best = 0, at = -1;
      for (var i = Math.max(0, this.pos - 4); i + L <= s.length; i++) {
        var d = dice(s.substr(i, L), tail.slice(-L));
        if (d > best) { best = d; at = i; }
      }
      if (best >= 0.5) this.pos = Math.max(this.pos, Math.min(s.length, at + L));
    }
    return s.length ? this.pos / s.length : 1;
  };

  Tracker.prototype.progress = function (h) {
    return this.cur < 0 ? 0 : cover(this.s[this.cur], h.slice(this.start));
  };

  // heard: 지금까지 들린 말 전체 (원문 그대로)
  Tracker.prototype.update = function (heard) {
    var h = norm(heard);
    var last = Math.min(this.cur + LOOK, this.s.length - 1);
    for (var j = this.cur + 1; j <= last; j++) {
      var pre = this.s[j].slice(0, PREFIX);
      var need = j === this.cur + 1 ? 0.55 : 0.75; // 건너뛸 때는 더 확실해야
      // 받아쓰기는 어절 단위로 들어와서, 문장 첫머리가 맨 끝에 딱 맞게 걸리지 않는다.
      // 마지막 몇 글자 안에서 자리를 밀어 가며 가장 닮은 곳을 찾는다.
      var span = h.slice(-(pre.length + 8)), a = 0, tail = "", at = 0;
      for (var i = 0; i + pre.length <= span.length || i === 0; i++) {
        var w = span.substr(i, pre.length), d = dice(pre, w);
        if (d > a) { a = d; tail = w; at = i; }
      }
      if (a < need) continue;
      // 방금 들린 말이 지금 문장의 어느 부분과 더 닮았다면 아직 지금 문장을 말하는 중이다
      if (this.cur >= 0 && a < bestWindow(this.s[this.cur], tail) + MARGIN) continue;
      this.cur = j;
      this.start = h.length - span.length + at; // 문장이 시작된 자리
      this.pos = 0;
      return { beat: j, at: this.where(h), moved: true };
    }
    return { beat: this.cur, at: this.where(h), moved: false };
  };

  // 손으로 넘겼을 때: 이 문장부터 다시 따라간다
  Tracker.prototype.set = function (j, heard) {
    this.cur = j;
    this.start = norm(heard || "").length;
    this.pos = 0;
  };

  // 대본 원문에서, 정규화된 글자 n개에 해당하는 위치 (화면 색칠용)
  function rawIndex(raw, n) {
    var count = 0, i = 0;
    while (i < raw.length && count < n) {
      var m = /^\d+/.exec(raw.slice(i));
      if (m) { count += numKo(m[0]).length; i += m[0].length; continue; }
      if (/[0-9A-Za-z가-힣]/.test(raw[i])) count++;
      i++;
    }
    return i;
  }

  var api = { Tracker: Tracker, norm: norm, cover: cover, rawIndex: rawIndex };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else global.ScriptSync = api;
})(this);
