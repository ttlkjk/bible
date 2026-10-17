// 영어 판서 대본에서 읽는 말(say)만 바뀌었는지 검사한다 (칠판 글씨·위치·장면은 그대로여야 한다).
//   node tools/check_say_only.js i18n/en/boards/exodus-board.js [더 많은 파일...]
// 비교 기준은 git에 마지막으로 저장된(HEAD) 같은 파일이다.
"use strict";
const fs = require("fs");
const vm = require("vm");
const { execFileSync } = require("child_process");

function load(src, name) {
  const c = { window: {} };
  vm.runInNewContext(src, c, { filename: name });
  return c.window.BOARD;
}
const strip = (B) => JSON.stringify(B.scenes.map((s) => ({ ...s, beats: s.beats.map((b) => ({ ...b, say: "" })) })));

let bad = 0;
for (const f of process.argv.slice(2)) {
  const rel = f.replace(/\\/g, "/").replace(/^.*?(i18n\/en\/boards\/)/, "$1");
  let msg;
  try {
    const now = load(fs.readFileSync(f, "utf8"), f);
    const old = load(execFileSync("git", ["show", "HEAD:" + rel], { encoding: "utf8" }), rel);
    if (strip(now) !== strip(old)) msg = "say 말고 다른 것이 바뀜 (칠판 글씨·위치·장면은 그대로 둘 것)";
    else {
      const says = now.scenes.flatMap((s) => s.beats.map((b) => b.say));
      const prev = old.scenes.flatMap((s) => s.beats.map((b) => b.say));
      const empty = says.filter((s) => !s || !s.trim()).length;
      const changed = says.filter((s, i) => s !== prev[i]).length;
      msg = empty ? `빈 say ${empty}개` : `ok · 문장 ${says.length} · 바뀐 말 ${changed}`;
    }
  } catch (e) {
    msg = "읽기 실패: " + e.message;
  }
  if (!msg.startsWith("ok")) bad++;
  console.log(`${f}: ${msg}`);
}
process.exit(bad ? 1 : 0);
