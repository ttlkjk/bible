---
name: church-media-archive
description: >-
  H:\HDX\Church 로컬 설교/강좌 아카이브(HWP, 오디오, PPT)와 유튜브 에스라하우스 영상(youtube_links.js) 연동 및 미디어 플레이어 기능을 관리할 때 사용합니다.
---

# 교회 미디어 및 로컬 아카이브 연계 스킬 (Church Media Archive Skill)

이 스킬은 로컬 드라이브(`H:\HDX\Church`)에 보관된 방대한 설교 자료(HWP 문서, PPT 교안, MP3 녹음본)와 웹상의 공식 유튜브 영상(`youtube_links.js`)을 안정적으로 연계하고 관리하기 위한 지침입니다.

---

## 1. 로컬 파일 시스템 연계 규격 (`H:\HDX\Church`)

브라우저 보안 샌드박스 정책상 `file:///` 프로토콜 직접 열기는 차단될 수 있습니다. 따라서 다음과 같은 사용자 친화적 연계 패턴을 준수합니다:

### 표준 로컬 경로 규칙
```javascript
const LOCAL_CHURCH_BASE = "H:\\HDX\\Church";

// 예시: 001.창세기-001 하나님의 예정과 선택.hwp
// 전체 경로: H:\HDX\Church\001.창세기-001 하나님의 예정과 선택.hwp
```

### 브라우저 지원 UX 패턴
1. **클립보드 복사 기능**: 사용자가 '경로 복사' 버튼을 누르면 Windows 탐색기에 즉시 붙여넣을 수 있도록 전체 경로를 클립보드에 복사.
2. **토스트 알림 안내**: "로컬 경로가 복사되었습니다. 파일 탐색기(Win+E) 주소창에 붙여넣으세요."
3. **HTTP 로컬 서버 모드 지원**: 차후 로컬 웹서버(예: 포트 8080) 구동 시 `http://localhost:8080/...`를 통한 직접 다운로드/열기 전환 설계.

---

## 2. 유튜브 공식 강좌 영상 매핑 (`js/youtube_links.js`)

에스라하우스 공식 유튜브 채널(@ezrahousetv)의 66권 강좌 및 대하설교 영상 ID를 체계적으로 매핑합니다.

### 데이터 스키마
```javascript
const YOUTUBE_LINKS = {
  "창세기": [
    { title: "창세기 1강 - 천지창조와 에덴동산", videoId: "실제_유튜브_VIDEO_ID" },
    { title: "창세기 2강 - 노아 홍수와 방주", videoId: "실제_유튜브_VIDEO_ID" }
  ]
};
```

### 모달 뷰어 규칙
- 모달 열림 시 `iframe` src에 `https://www.youtube.com/embed/${videoId}?autoplay=1` 주입.
- 모달 닫힘 시 `iframe` src를 비워서 백그라운드 오디오 재생을 즉시 중단.
- ESC 키 및 백드롭 클릭 시 모달 자동 닫기 이벤트 지원.
