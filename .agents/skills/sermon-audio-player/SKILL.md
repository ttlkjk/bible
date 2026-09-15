---
name: sermon-audio-player
description: >-
  대하설교 오디오 파일(MP3)의 연속 재생, A-B 구간 반복, 재생 배속, 이어듣기 북마크 및 설교 본문 싱크 기능을 설계·구현·유지보수할 때 사용합니다.
---

# 대하설교 오디오 플레이어 & 구간 반복 스킬 (Sermon Audio Player Skill)

이 스킬은 성도들이 이동 중이거나 작업 중에도 노우호 목사님의 대하설교를 끊김 없이 청취하고, 깊이 있는 묵상을 위해 특정 성경 강해 단락을 집중적으로 구간 반복 학습할 수 있는 오디오 플레이어 시스템을 구축하고 관리하는 지침입니다.

---

## 핵심 기능 요구사항

1. **연속 재생 (Continuous Playback / Playlist Queue)**:
   - 현재 설교(예: 창세기 001강) 청취가 끝나면 멈추지 않고 자동으로 다음 설교(002강)로 전환.
   - 단일 반복(한 곡 반복), 전곡 반복, 셔플(랜덤) 모드 토글 지원.
   - 브라우저 백그라운드 탭 또는 모바일 화면 꺼짐(Media Session API) 제어 연동.

2. **A-B 구간 반복 (A-B Loop Repeater)**:
   - **[A점 설정]**: 반복 시작 시점(초 단위) 마킹.
   - **[B점 설정]**: 반복 종료 시점 마킹.
   - B점에 도달하면 즉시 A점으로 되돌아가 자동 반복 재생 (원클릭 해제 지원).
   - 중요 성구 해석, 핵심 교리 강조 부분을 반복하여 묵상할 때 필수적인 기능.

3. **재생 속도 및 탐색 제어 (Speed & Seek)**:
   - 배속 제어: `0.8x`, `1.0x`, `1.2x`, `1.5x`, `1.7x`, `2.0x` 지원 (피치 보정 유지).
   - 건너뛰기: 5초/10초/30초 뒤로 가기 및 앞으로 가기 퀵 버튼.

4. **스마트 이어듣기 & 북마크 (Smart Resume & Bookmark)**:
   - 설교 번호별 최종 청취 시간(`currentTime`)을 `localStorage`에 자동 보관.
   - 재방문 시 "이전 청취 지점(예: 32분 15초)부터 이어들으시겠습니까?" 원클릭 안내.

---

## 오디오 데이터 및 상태 스키마 규격

### 1. 플레이어 상태 객체 (`state.audioPlayer`)
```javascript
const audioState = {
  currentTrack: null,     // 예: { book: "창세기", no: "001", title: "하나님의 예정과 선택", src: "..." }
  playlist: [],           // 연속 재생할 설교 트랙 큐
  currentIndex: -1,
  isPlaying: false,
  playbackRate: 1.0,
  loopMode: "all",        // "none", "one", "all"
  abRepeat: {
    enabled: false,
    pointA: null,         // 초 단위 (예: 125.4)
    pointB: null          // 초 단위 (예: 240.0)
  }
};
```

### 2. A-B 구간 반복 핸들러 구현 패턴
```javascript
// HTML5 Audio 요소의 'timeupdate' 이벤트에 연결
audioElement.addEventListener("timeupdate", () => {
  const { abRepeat } = audioState;
  if (abRepeat.enabled && abRepeat.pointA !== null && abRepeat.pointB !== null) {
    if (audioElement.currentTime >= abRepeat.pointB) {
      audioElement.currentTime = abRepeat.pointA;
      if (audioElement.paused) audioElement.play();
    }
  }
});
```

### 3. MediaSession API 연동 (모바일 잠금화면 & 블루투스 컨트롤)
```javascript
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: currentTrack.title,
    artist: "노우호 목사 (샤론강단)",
    album: `${currentTrack.book} 대하설교`,
    artwork: [{ src: "css/ezra_logo.png", sizes: "512x512", type: "image/png" }]
  });

  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
  navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
}
```

---

## 로컬/웹 소스 연계 고려사항
- `H:\HDX\Church\Audio` 로컬 경로와 연계할 경우 브라우저 보안 제약을 감안하여, 로컬 미디어 서버(HTTP) 스트리밍 주소 또는 파일 드롭/선택 방식을 지원합니다.
- 외부 CDN 또는 클라우드 스토리지에 업로드된 MP3가 있을 경우 CORS 헤더 설정을 반드시 확인합니다.
