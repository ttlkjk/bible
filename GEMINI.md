# 에스라 성경강좌 & 대하설교 아카이브 프로젝트 규칙 및 가이드

## 프로젝트 개요
노우호 목사님의 샤론강단 대하설교 500여 편 및 에스라 성경강좌(창세기~요한계시록 66권)를 학습하고 탐색할 수 있는 반응형 웹 애플리케이션입니다.

## 파일 및 아키텍처 구조
- `index.html`: 메인 애플리케이션 싱글 페이지 (Tailwind CSS 기반)
- `css/style.css`: 테마, 애니메이션, 커스텀 타이포그래피 스타일
- `js/app.js`: 메인 상태(State) 제어, 이벤트 리스너, 동적 DOM 렌더러
- `js/bible_data.js`: 성경 66권 메타데이터 (저자, 기록시기, 핵심구절, 에스라 관점 해설)
- `js/lecture_index.js`: 각 권별 대하설교 녹취록 분석 데이터 (500여 편 요약, 3대 핵심요점, 메시지)
- `js/lecture_full_text.js`: 설교 전문 텍스트 데이터셋
- `js/timeline_data.js`: 10대 시대별 성경 연대기 타임라인 데이터
- `js/maps_data.js`: 성경 66권 지리 및 사건 인포그래픽 SVG 다이어그램 데이터
- `js/quiz_data.js`: 성경 골든벨 퀴즈 데이터
- `js/youtube_links.js`: 에스라하우스TV 공식 유튜브 링크

## 활성화된 에이전트 스킬 (`.agents/skills/`)
1. `sermon-curator`: 대하설교 녹취록/강해 데이터 정제, 요약, 핵심 요점 도출 및 `lecture_index.js` 생성 스킬.
2. `biblical-chronology-maps`: 성경 66권 연대기 타임라인 및 SVG 지도/인포그래픽 시각화 스킬.
3. `bible-study-ux`: 본문 뷰어 가독성, 골든벨 퀴즈, 초성/키워드 검색, 다크모드 등 웹 UI/UX 최적화 스킬.
4. `church-media-archive`: `H:\HDX\Church` 로컬 HWP/오디오/PPT 연계 및 유튜브 플레이어 관리 스킬.
5. `sermon-audio-player`: 대하설교 MP3 오디오 연속 재생, A-B 구간 반복, 배속 조절 및 백그라운드 재생(MediaSession) 최적화 스킬.
6. `hwp-text-extractor`: 로컬 H:\HDX\Church의 HWP/HWPX 한글 설교 녹취록에서 본문 텍스트를 자동 추출하고 정제하는 스킬.

## 개발 주의사항
- 로컬 환경(Windows Build 14393) 특성상 터미널 `run_command`는 절대 실행하지 마십시오.
- 클라이언트 순수 Vanilla JS(ES6+)와 Tailwind CSS CDN 구조를 유지하여 별도 빌드 단계 없이 즉시 브라우저에서 실행되도록 유지합니다.
