"""
영어 사이트(en/) 만들기.

    python tools/i18n_en.py extract   # 아직 번역 안 된 문장을 i18n/work/*.ko.json 으로 뽑는다
    python tools/i18n_en.py merge     # i18n/work/*.en.json 번역을 i18n/en/ 에 쌓는다
    python tools/i18n_en.py build     # en/ 폴더를 새로 만든다
    python tools/i18n_en.py status    # 남은 번역 개수
    python tools/i18n_en.py check 001-js-app-js-1   # 작업 파일 번역 미리 검사 (번역가용)

한국어 원본(index.html, js/, pansuh/)은 그대로 두고, 화면에 보이는 한국어 문장만 골라
영어로 바꾼 사본을 en/ 아래에 만든다. en/ 은 매번 새로 만드는 결과물이니 손으로 고치지 않는다.

- 번역표: i18n/en/<원본 경로>.json  {"한국어 문장": "English sentence"}
  같은 한국어는 사이트 어디서나 같은 영어가 된다 (책 이름 '창세기'를 비교에 쓰는 코드가 있어서).
- 판서 대본(pansuh/data/*-board.js)은 칠판 글씨 자리까지 손봐야 해서 통째로 번역한 파일을
  i18n/en/boards/ 에 두고 그대로 복사한다.
- 한국어 원본을 고친 뒤에는 extract → (번역) → merge → build 순서로 돌리면 바뀐 문장만 새로 번역하면 된다.

문장 단위: 자바스크립트 문자열 하나, 템플릿 문자열·HTML에서는 태그 사이의 글 덩어리
(<strong>, <br>, ${이름} 같은 짧은 것은 문장 안에 그대로 남긴다), 그리고 title/alt/placeholder 같은 속성 값.
주석은 번역하지 않는다. 줄에 'i18n:skip'이 있으면 그 줄의 문자열은 건드리지 않는다.
"""
import glob
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
I18N = os.path.join(ROOT, "i18n")
STORE = os.path.join(I18N, "en")
BOARDS = os.path.join(STORE, "boards")
WORK = os.path.join(I18N, "work")
OUT = os.path.join(ROOT, "en")

HANGUL = re.compile(r"[\uac00-\ud7a3\u3131-\u318e]")
CHUNK = 14000  # 작업 파일 하나에 담는 한글 글자 수 (대략)


def rel_sources():
    """번역할 원본 파일 (화면 글이 먼저 나오는 순서로)."""
    files = ["index.html", "js/app.js", "js/pansuh.js", "pansuh/index.html", "pansuh/intro.html",
             "pansuh/genesis.html", "pansuh/sound-test.html"]
    files += sorted(glob.glob("pansuh/assets/*.js", root_dir=ROOT))
    files += sorted(glob.glob("js/*.js", root_dir=ROOT))
    files += sorted(glob.glob("pansuh/*.html", root_dir=ROOT))
    files += sorted(f for f in glob.glob("pansuh/data/*.js", root_dir=ROOT) if not f.endswith(("-board.js", "-audio.js")))
    out = []
    for f in files:
        f = f.replace("\\", "/")
        if f not in out and os.path.exists(os.path.join(ROOT, f)):
            out.append(f)
    return out


COPY_AS_IS = ["css/style.css", "pansuh/assets/style.css"]


# ============================================================ JS scanner
WORD = re.compile(r"[A-Za-z0-9_$\u0080-\uffff]+")
REGEX_AFTER = set("(,=:[!&|?{};+-*%<>~^")
REGEX_WORDS = {"return", "typeof", "case", "in", "of", "new", "delete", "void", "throw", "else", "do",
               "yield", "await", "instanceof"}


def scan_js(s, i, end, lits, stop_brace=False):
    """JS를 훑으며 문자열 리터럴을 lits에 모은다. stop_brace면 짝 맞는 '}' 위치를 돌려준다."""
    prev, word, depth = "", "", 0
    while i < end:
        c = s[i]
        if c in " \t\r\n\ufeff":
            i += 1
            continue
        if s.startswith("//", i):
            j = s.find("\n", i)
            i = end if j < 0 else j
            continue
        if s.startswith("/*", i):
            j = s.find("*/", i + 2)
            i = end if j < 0 else j + 2
            continue
        if c in "\"'":
            j = i + 1
            while j < end and s[j] != c and s[j] != "\n":
                j += 2 if s[j] == "\\" else 1
            lits.append(("s", c, i + 1, j))
            i, prev, word = j + 1, "w", ""
            continue
        if c == "`":
            i = scan_tpl(s, i + 1, end, lits)
            prev, word = "w", ""
            continue
        if c == "/":
            if prev == "" or prev in REGEX_AFTER or (prev == "w" and word in REGEX_WORDS):
                j, cls = i + 1, False
                while j < end and s[j] != "\n":
                    ch = s[j]
                    if ch == "\\":
                        j += 2
                        continue
                    if ch == "[":
                        cls = True
                    elif ch == "]":
                        cls = False
                    elif ch == "/" and not cls:
                        break
                    j += 1
                j += 1
                while j < end and s[j].isalpha():
                    j += 1
                i, prev, word = j, "w", ""
                continue
            prev, word = "/", ""
            i += 1
            continue
        if stop_brace:
            if c == "{":
                depth += 1
            elif c == "}":
                if depth == 0:
                    return i
                depth -= 1
        m = WORD.match(s, i)
        if m:
            word, prev, i = m.group(), "w", m.end()
            continue
        prev, word = c, ""
        i += 1
    if stop_brace:
        raise ValueError("닫는 } 없음")
    return i


def scan_tpl(s, i, end, lits):
    pieces, start = [], i
    while i < end:
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if c == "`":
            pieces.append(("c", start, i))
            lits.append(("t", pieces))
            return i + 1
        if c == "$" and s.startswith("${", i):
            pieces.append(("c", start, i))
            j = scan_js(s, i + 2, end, lits, stop_brace=True)
            pieces.append(("x", i, j + 1))
            i = start = j + 1
            continue
        i += 1
    raise ValueError("닫는 ` 없음")


def scan_html(s):
    """HTML: 마크업 구간들과 <script> 안의 리터럴."""
    regions, lits, i = [], [], 0
    for m in re.finditer(r"<(script|style)\b[^>]*>(.*?)</\1\s*>", s, re.S | re.I):
        regions.append((i, m.start(2)))
        if m.group(1).lower() == "script":
            scan_js(s, m.start(2), m.end(2), lits)
        i = m.end(2)
    regions.append((i, len(s)))
    return regions, lits


def decode(raw):
    out, i = [], 0
    while i < len(raw):
        c = raw[i]
        if c != "\\":
            out.append(c)
            i += 1
            continue
        n = raw[i + 1]
        if n in "nrtbfv0" and not (n == "0" and raw[i + 2:i + 3].isdigit()):
            out.append({"n": "\n", "r": "\r", "t": "\t", "b": "\b", "f": "\f", "v": "\v", "0": "\0"}[n])
            i += 2
        elif n == "x":
            out.append(chr(int(raw[i + 2:i + 4], 16)))
            i += 4
        elif n == "u":
            if raw[i + 2] == "{":
                j = raw.index("}", i)
                out.append(chr(int(raw[i + 3:j], 16)))
                i = j + 1
            else:
                out.append(chr(int(raw[i + 2:i + 6], 16)))
                i += 6
        elif n in "\r\n":
            i += 3 if raw[i + 1:i + 3] == "\r\n" else 2
        else:
            out.append(n)
            i += 2
    return "".join(out).encode("utf-16", "surrogatepass").decode("utf-16")


def encode(value, q):
    return (value.replace("\\", "\\\\").replace(q, "\\" + q).replace("\n", "\\n").replace("\r", "\\r")
            .replace("\u2028", "\\u2028").replace("\u2029", "\\u2029"))


# ============================================================ 문장(unit) 나누기
INLINE = {"a", "abbr", "b", "br", "code", "em", "i", "kbd", "mark", "q", "s", "small", "span", "strong",
          "sub", "sup", "u", "wbr"}
UNIT_ATTRS = {"title", "alt", "placeholder", "aria-label", "content", "label", "value", "data-title",
              "data-label", "data-tooltip", "aria-description", "aria-roledescription"}
SIMPLE_X = re.compile(r"^\$\{[\w$.\s+\-*/%()\[\]?:!=<>&|,]{1,80}\}$")
ATTR = re.compile(r"([\w:.-]+)\s*=\s*([\"'])(.*?)\2", re.S)
PH = "\x00"


def markup_units(buf, pieces, warn):
    """buf 안의 pieces(정적 글 'c' / 표현식 'x') → [(start, end, kind)] kind: 'text' | 'attr'."""
    # 표현식을 한 글자(PH)로 접어서 훑는다
    m, ps, pe, simple = [], [], [], []
    for kind, a, b in pieces:
        if kind == "c":
            for k in range(a, b):
                m.append(buf[k])
                ps.append(k)
                pe.append(k + 1)
                simple.append(True)
        else:
            m.append(PH)
            ps.append(a)
            pe.append(b)
            simple.append(bool(SIMPLE_X.match(buf[a:b])))
    m = "".join(m)
    n = len(m)
    units = []

    def has_complex(a, b):
        return any(m[k] == PH and not simple[k] for k in range(a, b))

    tokens, i = [], 0
    while i < n:
        if m.startswith("<!--", i):
            j = m.find("-->", i + 4)
            j = n if j < 0 else j + 3
            tokens.append(("cm", i, j, None))
            i = j
            continue
        if m[i] == "<" and i + 1 < n and m[i + 1].isascii() and (m[i + 1].isalpha() or m[i + 1] in "/!?"):
            j = m.find(">", i + 1)
            if j >= 0:
                mm = re.match(r"</?([A-Za-z][\w-]*)", m[i:j])
                name = mm.group(1).lower() if mm else ""
                block = name not in INLINE or has_complex(i, j)
                for am in ATTR.finditer(m, i, j):
                    val_a, val_b = am.start(3), am.end(3)
                    if not HANGUL.search(m[val_a:val_b]):
                        continue
                    block = True
                    if am.group(1).lower() not in UNIT_ATTRS:
                        warn("속성 %s 은 번역 안 함: %s" % (am.group(1), m[val_a:val_b][:40]))
                        continue
                    if has_complex(val_a, val_b):
                        continue
                    while val_a < val_b and m[val_a].isspace():
                        val_a += 1
                    while val_b > val_a and m[val_b - 1].isspace():
                        val_b -= 1
                    units.append((ps[val_a], pe[val_b - 1], "attr"))
                tokens.append(("tag", i, j + 1, block))
                i = j + 1
                continue
        if m[i] == PH:
            tokens.append(("x", i, i + 1, not simple[i]))
            i += 1
            continue
        j = i + 1
        while j < n and m[j] not in "<" + PH:
            j += 1
        tokens.append(("txt", i, j, None))
        i = j

    # 줄바꿈과 맞닿은 태그는 문장 속 꾸밈이 아니라 화면 구조다 → 거기서 끊는다
    def nl(k):
        if not (0 <= k < len(tokens) and tokens[k][0] == "txt"):
            return False
        t = m[tokens[k][1]:tokens[k][2]]
        return "\n" in t and not t.strip()

    for k, t in enumerate(tokens):
        if t[0] == "tag" and not t[3] and (nl(k - 1) or nl(k + 1)):
            tokens[k] = ("tag", t[1], t[2], True)

    groups, cur = [], []
    for t in tokens:
        if t[0] == "cm" or (t[0] in ("tag", "x") and t[3]):
            groups.append(cur)
            cur = []
        else:
            cur.append(t)
    groups.append(cur)
    for g in groups:
        while g and (g[0][0] == "tag" or (g[0][0] == "txt" and not m[g[0][1]:g[0][2]].strip())):
            g = g[1:]
        while g and (g[-1][0] == "tag" or (g[-1][0] == "txt" and not m[g[-1][1]:g[-1][2]].strip())):
            g = g[:-1]
        if not g:
            continue
        a, b = g[0][1], g[-1][2]
        while a < b and m[a].isspace():
            a += 1
        while b > a and m[b - 1].isspace():
            b -= 1
        if a < b and HANGUL.search(m[a:b]):
            units.append((ps[a], pe[b - 1], "text"))
    return units


def line_starts(text):
    starts = [0]
    for mt in re.finditer("\n", text):
        starts.append(mt.end())
    return starts


def analyze(rel, text, warn=lambda msg: None):
    """원본 하나 → 번역 단위 목록.
    돌려주는 것: [("raw", s, e, kind, key)] 파일 위치 그대로 바꿀 곳,
                 [("dec", lit_s, lit_e, quote, decoded, [(s, e, kind)])] 문자열 리터럴 안에서 바꿀 곳."""
    starts = line_starts(text)

    def line_of(pos):
        lo, hi = 0, len(starts) - 1
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if starts[mid] <= pos:
                lo = mid
            else:
                hi = mid - 1
        return lo

    def skipped(pos):
        ln = line_of(pos)
        end = starts[ln + 1] if ln + 1 < len(starts) else len(text)
        line = text[starts[ln]:end]
        # 유튜브 검색어는 한국어 영상을 찾으므로 영어판에서도 한국어로 둔다
        return "i18n:skip" in line or re.search(r"youtube(Query|Search)\s*:|encodeURIComponent\(`", line)

    lits = []
    raw = []
    if rel.endswith(".html"):
        regions, lits = scan_html(text)
        for a, b in regions:
            for s, e, kind in markup_units(text, [("c", a, b)], warn):
                raw.append(("raw", s, e, kind, text[s:e]))
    elif rel.endswith(".js"):
        scan_js(text, 0, len(text), lits)
    dec = []
    for lit in lits:
        if lit[0] == "s":
            _, q, a, b = lit
            body = text[a:b]
            if not HANGUL.search(body) or skipped(a):
                continue
            value = decode(body)
            us = markup_units(value, [("c", 0, len(value))], warn)
            if us:
                dec.append(("dec", a, b, q, value, us))
        else:
            pieces = lit[1]
            if not any(HANGUL.search(text[a:b]) for k, a, b in pieces if k == "c"):
                continue
            if skipped(pieces[0][1]):
                continue
            for s, e, kind in markup_units(text, pieces, warn):
                raw.append(("raw", s, e, kind + "-tpl", text[s:e]))
    return raw, dec, line_of


def unit_keys(rel, text, warn=lambda msg: None):
    """(key, 줄 번호) 를 나오는 순서대로."""
    raw, dec, line_of = analyze(rel, text, warn)
    out = []
    for r in raw:
        out.append((r[1], r[4]))
    for d in dec:
        for s, e, kind in d[5]:
            out.append((d[1], d[4][s:e]))
    out.sort(key=lambda x: x[0])
    return [(k, line_of(p) + 1) for p, k in out]


# ============================================================ 번역표
def store_path(rel):
    return os.path.join(STORE, rel + ".json")


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def write_json(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")


def load_all():
    d = {}
    for path in sorted(glob.glob(os.path.join(STORE, "**", "*.json"), recursive=True)):
        for k, v in load_json(path).items():
            if v and k not in d:
                d[k] = v
    return d


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def all_units():
    """원본 전체 → {key: (처음 나온 파일, 줄)} (순서 유지)."""
    seen = {}
    for rel in rel_sources():
        warns = []
        for key, ln in unit_keys(rel, read(rel), warns.append):
            if key not in seen:
                seen[key] = (rel, ln)
        for w in sorted(set(warns)):
            print("  [%s] %s" % (rel, w))
    return seen


XEXPR = re.compile(r"\$\{[^}]*\}")
TAG = re.compile(r"</?[a-z][^<>]*>")  # 성경 구절 <Gen 1:1> 은 대문자라 태그가 아니다


def problems(ko, en):
    """번역이 원문의 코드 조각을 망가뜨렸는지."""
    p = []
    if not isinstance(en, str) or not en.strip():
        return ["빈 번역"]
    if sorted(XEXPR.findall(ko)) != sorted(XEXPR.findall(en)):
        p.append("${...} 가 원문과 다름")
    if sorted(TAG.findall(ko)) != sorted(TAG.findall(en)):
        p.append("HTML 태그가 원문과 다름 (태그는 글자 하나 바꾸지 말고 그대로)")
    return p


# ============================================================ 명령
def cmd_extract():
    seen = all_units()
    have = load_all()
    missing = [(k, v) for k, v in seen.items() if k not in have]
    if os.path.isdir(WORK):
        for f in glob.glob(os.path.join(WORK, "*.ko.json")):
            os.remove(f)
    os.makedirs(WORK, exist_ok=True)
    # 파일별로 묶고 CHUNK 글자씩 자른다
    by_file = {}
    for k, (rel, ln) in missing:
        by_file.setdefault(rel, []).append((k, ln))
    n = 0
    listing = []
    for rel, items in by_file.items():
        chunk, size, part = [], 0, 1
        slug = re.sub(r"[^A-Za-z0-9]+", "-", rel).strip("-")

        def flush():
            nonlocal n, chunk, size, part
            if not chunk:
                return
            n += 1
            name = "%03d-%s-%d" % (n, slug, part)
            write_json(os.path.join(WORK, name + ".ko.json"), {
                "source": rel,
                "items": [[str(i + 1), k, ln] for i, (k, ln) in enumerate(chunk)],
            })
            listing.append((name, len(chunk), size))
            chunk, size, part = [], 0, part + 1

        for k, ln in items:
            h = len(HANGUL.findall(k))
            if chunk and size + h > CHUNK:
                flush()
            chunk.append((k, ln))
            size += h
        flush()
    for name, cnt, size in listing:
        print("%-48s 문장 %5d  한글 %6d" % (name, cnt, size))
    print("번역할 문장 %d / 전체 %d  · 작업 파일 %d개 (i18n/work/)" % (len(missing), len(seen), len(listing)))


def cmd_merge():
    ok = bad = 0
    stores = {}
    for en_path in sorted(glob.glob(os.path.join(WORK, "*.en.json"))):
        ko_path = en_path[:-8] + ".ko.json"
        if not os.path.exists(ko_path):
            print("짝 없음:", os.path.basename(en_path))
            continue
        try:
            en = load_json(en_path)
        except ValueError as e:
            print("JSON 오류: %s (%s)" % (os.path.basename(en_path), e))
            bad += 1
            continue
        work = load_json(ko_path)
        rel = work["source"]
        st = stores.setdefault(rel, load_json(store_path(rel)) if os.path.exists(store_path(rel)) else {})
        errs = []
        for id_, ko, ln in work["items"]:
            v = en.get(id_)
            if v is None:
                errs.append("%s: 번역 없음" % id_)
                continue
            if isinstance(v, str):  # 검사기를 피하려던 우회 표기를 되돌린다: < Gen 1:1>, <⁠Gen 1:1>
                v = re.sub(r"<[\s⁠]+(?=(?:[1-3]\s?)?[A-Z][a-z]{1,5}\.?\s?\d)", "<", v)
            p = problems(ko, v)
            if p:
                errs.append("%s (줄 %s): %s" % (id_, ln, ", ".join(p)))
                continue
            st[ko] = v
            ok += 1
        if errs:
            bad += len(errs)
            print("== %s" % os.path.basename(en_path))
            for e in errs[:20]:
                print("  " + e)
            if len(errs) > 20:
                print("  … %d개 더" % (len(errs) - 20))
        else:
            os.remove(en_path)
            os.remove(ko_path)
    for rel, st in stores.items():
        write_json(store_path(rel), st)
    print("넣음 %d · 문제 %d" % (ok, bad))


def patches(rel):
    """영어판에서만 바꾸는 코드 (한글이 문자열 밖, 정규식이나 언어 코드에 있는 곳)."""
    P = {
        "pansuh/assets/app.js": [
            (r"/\((넘기기|넘김(?:\s*넘김)*)\)/g", r"/\((넘기기|넘김(?:\s*넘김)*|next(?:\s*next)*)\)/gi"),
            (r"[가-힣]{1,3}\s?\d+:\d+", r"(?:[1-3]\s?)?[A-Za-z가-힣]{1,5}\.?\s?\d+:\d+"),
        ],
        "pansuh/assets/board.js": [
            ('"ko-KR"', '"en-US"'),
            ("/^ko([-_]|$)/i", "/^en([-_]|$)/i"),
            ("voice = good[0] || ko[0] || voice;",
             "voice = good.filter(function (v) { return /US/i.test(v.lang); })[0] || good[0] || ko[0] || voice;"),
        ],
        "pansuh/sound-test.html": [
            ("/^ko/i", "/^en/i"),
            ('u.lang = "ko-KR"', 'u.lang = "en-US"'),
        ],
        "index.html": [
            # 대하 MOVIE 간판 그림은 한국어 쪽 img/ 에 하나만 둔다
            ('src="img/movie-hero.jpg"', 'src="../img/movie-hero.jpg"'),
        ],
        "js/app.js": [
            # 연대기 화면의 책 단추: 한국어는 첫 낱말로 찾지만 영어 책 이름은 '1 Samuel'처럼 띄어 쓴다
            ("b.split('(')[0].split('·')[0].split(' ')[0].trim()", "b.split('(')[0].split('·')[0].trim()"),
            # 영어판에서는 책 이름과 영어 이름이 같다 ('1 Kings (1 Kings)')
            ("elements.detailTitle.textContent = `${book.name} (${book.engName})`;", "elements.detailTitle.textContent = book.name;"),
        ],
        "js/lecture_media_studio.js": [
            ('utterance.lang = "ko-KR"', 'utterance.lang = "en-US"'),
            ('<html lang="ko">', '<html lang="en">'),
        ],
    }
    return P.get(rel, [])


def translate_file(rel, text, tr, stats):
    raw, dec, _ = analyze(rel, text)
    edits = []

    def pick(key, kind):
        v = tr.get(key)
        if v is None or problems(key, v):
            stats["missing"] += 1
            stats["missing_keys"].append(key)
            return None
        stats["done"] += 1
        if kind.startswith("attr"):
            v = v.replace('"', "&quot;")
        if kind.endswith("-tpl"):
            v = re.sub(r"(?<!\\)`", "\\`", v)
        return v

    for _, s, e, kind, key in raw:
        v = pick(key, kind)
        if v is not None:
            edits.append((s, e, v))
    for _, a, b, q, value, us in dec:
        new, changed = value, False
        for s, e, kind in sorted(us, reverse=True):
            v = pick(value[s:e], kind)
            if v is not None:
                new = new[:s] + v + new[e:]
                changed = True
        if changed:
            edits.append((a, b, encode(new, q)))
    edits.sort()
    for i in range(1, len(edits)):
        if edits[i][0] < edits[i - 1][1]:
            raise ValueError("%s: 겹치는 번역 위치 %s" % (rel, edits[i][:2]))
    for s, e, v in reversed(edits):
        text = text[:s] + v + text[e:]
    for old, new in patches(rel):
        if old not in text:
            raise ValueError("%s: 바꿀 코드를 못 찾음: %s" % (rel, old))
        text = text.replace(old, new)
    return text


def fix_paths(rel, text):
    """en/ 은 한 칸 깊다. 슬라이드 그림은 한국어 쪽 pansuh/img 를 같이 쓴다."""
    if rel.startswith("pansuh/"):
        text = re.sub(r"(?<=[\"'(])img/", "../../pansuh/img/", text)
    if rel.endswith(".html"):
        text = re.sub(r'<html lang="ko"', '<html lang="en"', text, count=1)
        # 사이트 아이콘은 한국어 쪽 맨 위 폴더에 하나만 둔다
        text = re.sub(r'(<link rel="(?:icon|apple-touch-icon)" href=")', r"\1../", text)
        text = text.replace('<img src="favicon.svg"', '<img src="../favicon.svg"')
        depth = rel.count("/")
        back = "../" * (depth + 1) + rel

        def switch(mt):
            a = mt.group(0)
            a = re.sub(r'href="[^"]*"', 'href="%s"' % back, a, count=1)
            a = a.replace('hreflang="en"', 'hreflang="ko"').replace('lang="en"', 'lang="ko"')
            return a.replace(">English<", ">한국어<")

        text = re.sub(r"<a\b[^>]*data-lang-switch[^>]*>.*?</a>", switch, text, flags=re.S)
    return text


def write_text(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


def link_scripts(ids):
    """영어 강의 페이지: 대본·녹음 목록의 ?v= 를 영어 파일 내용으로 다시 매기고 (휴대폰이 새 파일을 받게),
    한국어 페이지에 녹음 목록이 아직 없어도 영어 녹음이 있으면 연결한다."""
    import hashlib

    def ver(name):
        with open(os.path.join(OUT, "pansuh", "data", name), "rb") as f:
            return hashlib.sha1(f.read()).hexdigest()[:8]

    for pid in ids:
        page = os.path.join(OUT, "pansuh", pid + ".html")
        if not os.path.exists(page):
            continue
        with open(page, encoding="utf-8") as f:
            html = f.read()
        audio = os.path.exists(os.path.join(OUT, "pansuh", "data", pid + "-audio.js"))
        if audio and (pid + "-audio.js") not in html:
            html = re.sub(r'(<script src="data/%s-board\.js[^"]*"></script>\n)' % re.escape(pid),
                          lambda m: m.group(1) + '<script src="data/%s-audio.js"></script>\n' % pid, html, count=1)
        for name in (pid + ".js", pid + "-board.js", pid + "-audio.js"):
            if os.path.exists(os.path.join(OUT, "pansuh", "data", name)):
                html = re.sub(r'data/%s(\?v=[^"]*)?"' % re.escape(name), 'data/%s?v=%s"' % (name, ver(name)), html)
        write_text(page, html)


def cmd_build():
    tr = load_all()
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    report = []
    for rel in rel_sources():
        stats = {"done": 0, "missing": 0, "missing_keys": []}
        text = translate_file(rel, read(rel), tr, stats)
        write_text(os.path.join(OUT, rel), fix_paths(rel, text))
        report.append((rel, stats))
    for rel in COPY_AS_IS:
        write_text(os.path.join(OUT, rel), read(rel))
    # 녹음 목록: 영어 녹음(Ava, i18n/en/audio/, 판서강좌/tools/make_audio.py --en)이 있으면 그것을 쓴다.
    # 없으면 한국어 목록을 둔다 — 한국어 문장으로 찾으니 맞는 것이 없어 기기 영어 음성으로 읽는다.
    audio_missing = []
    ids = sorted(os.path.basename(f)[:-len("-board.js")] for f in glob.glob(os.path.join(ROOT, "pansuh", "data", "*-board.js")))
    for pid in ids:
        name = pid + "-audio.js"
        en_list, ko_list = os.path.join(STORE, "audio", name), os.path.join(ROOT, "pansuh", "data", name)
        src = en_list if os.path.exists(en_list) else ko_list if os.path.exists(ko_list) else None
        if src != en_list:
            audio_missing.append(name)
        if src:
            with open(src, encoding="utf-8") as f:
                write_text(os.path.join(OUT, "pansuh", "data", name), f.read())
    boards_missing = []
    for src in sorted(glob.glob(os.path.join(ROOT, "pansuh", "data", "*-board.js"))):
        name = os.path.basename(src)
        en = os.path.join(BOARDS, name)
        if not os.path.exists(en):
            boards_missing.append(name)
        with open(en if os.path.exists(en) else src, encoding="utf-8") as f:
            text = f.read()
        write_text(os.path.join(OUT, "pansuh", "data", name), fix_paths("pansuh/data/" + name, text))
    link_scripts(ids)
    total = sum(s["done"] + s["missing"] for _, s in report)
    miss = sum(s["missing"] for _, s in report)
    for rel, s in report:
        if s["missing"]:
            print("%-36s 번역 안 됨 %4d / %d" % (rel, s["missing"], s["done"] + s["missing"]))
    print("en/ 만듦 · 문장 %d 중 번역 안 된 것 %d · 판서 대본 영어판 없음 %d개 · 영어 녹음 없음 %d개"
          % (total, miss, len(boards_missing), len(audio_missing)))


def cmd_status():
    seen = all_units()
    have = load_all()
    by = {}
    for k, (rel, _) in seen.items():
        b = by.setdefault(rel, [0, 0])
        b[1] += 1
        if k in have:
            b[0] += 1
    for rel, (d, t) in by.items():
        if d < t:
            print("%-36s %5d / %5d" % (rel, d, t))
    boards = sorted(os.path.basename(f) for f in glob.glob(os.path.join(ROOT, "pansuh", "data", "*-board.js")))
    done = [b for b in boards if os.path.exists(os.path.join(BOARDS, b))]
    print("문장 %d / %d 번역됨 · 판서 대본 %d / %d" % (sum(v[0] for v in by.values()), len(seen), len(done), len(boards)))


def cmd_check(names):
    """번역가용: 작업 파일의 영어 번역이 그대로 넣을 수 있는지 미리 본다 (넣지는 않는다)."""
    bad = 0
    for name in names:
        name = os.path.basename(name).replace(".en.json", "").replace(".ko.json", "")
        ko_path = os.path.join(WORK, name + ".ko.json")
        en_path = os.path.join(WORK, name + ".en.json")
        work = load_json(ko_path)
        try:
            en = load_json(en_path)
        except FileNotFoundError:
            print("%s: 영어 파일 없음 (%s)" % (name, en_path))
            bad += 1
            continue
        except ValueError as e:
            print("%s: JSON 문법 오류 - %s" % (name, e))
            bad += 1
            continue
        errs = []
        ids = {i for i, _, _ in work["items"]}
        for id_, ko, ln in work["items"]:
            if id_ not in en:
                errs.append("%s: 번역 없음" % id_)
            else:
                errs += ["%s: %s" % (id_, p) for p in problems(ko, en[id_])]
        errs += ["%s: 없는 번호" % k for k in en if k not in ids]
        print("%s: %s" % (name, "ok (%d)" % len(ids) if not errs else "문제 %d" % len(errs)))
        for e in errs[:40]:
            print("  " + e)
        bad += len(errs)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    cmd = sys.argv[1] if len(sys.argv) > 1 else "status"
    if cmd == "check":
        cmd_check(sys.argv[2:])
    else:
        {"extract": cmd_extract, "merge": cmd_merge, "build": cmd_build, "status": cmd_status}[cmd]()
