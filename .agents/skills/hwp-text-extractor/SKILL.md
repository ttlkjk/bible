---
name: hwp-text-extractor
description: >-
  로컬 H:\HDX\Church 드라이브의 HWP/HWPX 한글 설교 녹취록 파일에서 텍스트를 추출하고 lecture_index.js, lecture_full_text.js 규격으로 자동 정제할 때 사용합니다.
---

# HWP 한글 파일 텍스트 자동 추출 스킬 (HWP Text Extractor Skill)

이 스킬은 `H:\HDX\Church` 로컬 아카이브에 저장된 수백 편의 한글(HWP/HWPX) 설교 녹취록 파일에서 순수 텍스트를 추출하고, 대하설교 웹사이트 데이터 규격(`lecture_full_text.js`, `lecture_index.js`)으로 변환·정제하는 절차를 안내합니다.

---

## 1. HWP 문서 구조 및 추출 메커니즘

### 1) HWP 5.0 (OLE 복합 바이너리) 구조
- HWP 5.0 형식은 Microsoft Compound Document(OLE) 포맷입니다.
- 본문 텍스트는 `BodyText/Section0`, `BodyText/Section1` 스트림에 저장되어 있으며, zlib(DEFLATE)으로 압축되어 있습니다.
- 압축을 해제한 후 16비트 유니코드(UTF-16LE) 문자열을 파싱하여 순수 텍스트를 추출합니다.

### 2) HWPX (XML 기반 차세대 형식) 구조
- ZIP 압축 파일 내부의 `Contents/section0.xml`을 열어 `<hp:t>` 태그 사이의 텍스트 노드를 추출합니다.

---

## 2. 웹 브라우저 클라이언트 기반 추출 방식 (권장)

브라우저 내에서 사용자가 HWP 파일을 드래그앤드롭(Drag & Drop)하여 즉시 텍스트를 읽어낼 수 있는 순수 JS 파서 아키텍처:

```javascript
// HWP 파일 ArrayBuffer 읽기 및 OLE 헤더 검증
async function extractTextFromHwp(file) {
  const arrayBuffer = await file.arrayBuffer();
  // 1. OLE 시그니처 (D0 CF 11 E0 A1 B1 1A E1) 확인
  // 2. CFB/OLE 라이브러리(또는 pako/zlib)를 통한 BodyText/Section 스트림 디컴프레션
  // 3. UTF-16LE 텍스트 디코딩
  // 4. 설교 제목, 본문 구절, 본문 단락 정규표현식 추출
  return extractedText;
}
```

---

## 3. 오프라인 배치 파이썬 스크립트 방식 (`scripts/extract_hwp.py`)

수백 개의 HWP 파일을 한 번에 일괄 변환하여 `js/lecture_full_text.js`를 생성할 때 사용하는 파이썬 워크플로우:

```python
import zlib
import olefile

def get_hwp_text(filename):
    f = olefile.OleFileIO(filename)
    dirs = f.listdir()
    
    # BodyText 스트림 탐색
    sections = [d for d in dirs if d[0] == "BodyText"]
    text = ""
    for sec in sections:
        data = f.openstream(sec).read()
        # HWP 5.0은 기본적으로 zlib 압축됨 (deflate -15)
        decompressed = zlib.decompress(data, -15)
        
        # 16비트 유니코드 텍스트 디코딩 (제어문자 필터링)
        # 텍스트 레코드 태그를 파싱하여 순수 본문만 결합
        text += decompressed.decode('utf-16-le', errors='ignore')
    
    return text
```

---

## 4. 설교 데이터 자동 정제 및 분류 규칙

추출된 텍스트에서 정규표현식을 통해 메타데이터를 자동 분리합니다:

1. **설교 번호 및 제목 감지**:
   - 파일명 또는 첫 문단 패턴: `001.창세기-001 하나님의 예정과 선택(에베소서 3장 8-13절).hwp`
   - 정규식: `^(\d{3})\.(.+?)-(\d{3})\s*(.+?)\((.+?)\)`
2. **본문 성경 구절 추출**:
   - 괄호 안의 구절(예: `에베소서 3장 8-13절`)을 표준 표기로 정규화.
3. **불필요한 제어 문자 제거**:
   - 머리말, 꼬리말, 쪽번호, 표(Table) 내부 속성 태그 제거.
4. **결과물 출력**:
   - `LECTURE_FULL_TEXT["번호"] = { title, scripture, content }` 형태로 자동 포맷팅.
