// ============================================================================
// 성경 각 권별 다중 성경 지리 지도 & 인포그래픽 모듈 (Maps Multi Data)
// 스킬(biblical-chronology-maps) 표준 규격 준수:
// - 표준 viewBox="0 0 700 440"
// - 해안선(지중해, 홍해, 페르시아만, 카스피해), 호수(갈릴리, 사해), 강(요단, 유프라테스, 티그리스, 나일) 지리 지형
// - 거점 핀, 이동 경로 점선, 지역 라벨, 다크모드 고대비 색상 팔레트
// ============================================================================

// ============================================================================
// [중요] 한눈에 지리가 들어오는 간단한 배경 지도 & 위성/지형도 선택 시스템
// ============================================================================
window.currentMapBgMode = window.currentMapBgMode || "simplified"; // 기본값: 간단한 지도 (클린 백지도)

// 1. 고대 근동 & 비옥한 초승달 지대 간단한 배경 지도 (메소포타미아 ~ 가나안 ~ 애굽)
function renderSimplifiedNearEastBaseMap() {
  return `
    <g class="simplified-base-map" pointer-events="none">
      <!-- 바다 기본 베이스 -->
      <rect width="100%" height="100%" fill="#071322"/>

      <!-- 육지 실루엣 (아나톨리아, 메소포타미아, 아라비아, 레반트, 애굽) -->
      <path d="M 0,0 L 700,0 L 700,320 
               Q 630,320 570,335 
               Q 540,360 525,440 
               L 220,440 
               L 205,370 
               L 190,440 
               L 165,440 
               L 145,365 
               Q 120,365 110,360
               Q 95,335 125,335
               Q 160,335 190,320
               Q 200,280 205,240 
               Q 208,230 202,225 
               Q 210,195 215,160 
               Q 230,135 210,120 
               Q 140,115 110,130 
               L 0,130 Z" 
            fill="#152132" stroke="#25374e" stroke-width="1.5"/>

      <!-- 아프리카 대륙 (애굽 본토) -->
      <path d="M 0,330 Q 70,330 95,335 Q 110,360 145,365 L 165,440 L 0,440 Z" 
            fill="#152132" stroke="#25374e" stroke-width="1.5"/>

      <!-- 지중해 바다 영역 (서쪽 대해) -->
      <path d="M 0,130 Q 110,130 140,115 Q 210,120 230,135 Q 215,160 210,195 Q 202,225 208,230 Q 205,240 200,280 Q 190,320 160,335 Q 125,335 95,335 Q 70,330 0,330 Z" 
            fill="#091c32" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.9"/>
      
      <!-- 구브로 (키프로스) 섬 -->
      <polygon points="120,165 155,150 170,155 145,175 125,175" 
               fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="145" y="186" fill="#7dd3fc" font-size="8.5" text-anchor="middle">구브로 (키프로스)</text>

      <!-- 홍해 (수에즈만 & 아카바만 & 시나이 반도) -->
      <path d="M 140,360 L 165,440 L 152,440 L 132,365 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <path d="M 195,365 L 185,440 L 195,440 L 205,365 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <polygon points="142,362 203,363 175,435" fill="#1e293b" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="175" y="390" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">시나이 반도</text>

      <!-- 페르시아만 (동남쪽 바다) -->
      <path d="M 570,335 Q 630,320 700,320 L 700,440 L 525,440 Q 540,360 570,335 Z" 
            fill="#091c32" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.9"/>
      <text x="625" y="375" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">페르시아만</text>

      <!-- 흑해 & 카스피해 -->
      <path d="M 160,0 Q 230,45 280,0 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="210" y="22" fill="#7dd3fc" font-size="9">흑 해</text>

      <path d="M 570,40 Q 640,60 620,140 Q 580,120 570,40 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="595" y="85" fill="#7dd3fc" font-size="9">카스피해</text>

      <!-- 나일강 & 고센 삼각주 -->
      <path d="M 85,340 L 130,340 L 110,380 Z" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <path d="M 110,380 L 105,440" stroke="#34d399" stroke-width="2.5"/>
      <text x="108" y="360" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">나일 삼각주</text>

      <!-- 가나안 요단 열곡대 (갈릴리 - 요단강 - 사해) -->
      <ellipse cx="225" cy="225" rx="5.5" ry="7.5" fill="#38bdf8" stroke="#0284c7"/>
      <path d="M 225,232 Q 223,250 225,260" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
      <ellipse cx="225" cy="275" rx="6.5" ry="15" fill="#0284c7" stroke="#38bdf8"/>
      <text x="238" y="278" fill="#7dd3fc" font-size="9">사해</text>

      <!-- 메소포타미아 2대 젖줄: 유프라테스강 & 티그리스강 -->
      <path d="M 300,90 Q 340,120 400,170 T 480,240 T 545,320" 
            fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <text x="430" y="195" fill="#bae6fd" font-size="10" font-weight="bold">유프라테스강</text>

      <path d="M 350,75 Q 410,110 470,180 T 530,260 T 555,320" 
            fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round"/>
      <text x="485" y="145" fill="#93c5fd" font-size="10" font-weight="bold">티그리스강</text>

      <!-- 비옥한 초승달 지대 (Fertile Crescent) 녹색 아치 -->
      <path d="M 545,310 C 470,220 410,115 320,85 C 260,70 230,140 220,250 C 205,290 160,325 125,335" 
            fill="none" stroke="#10b981" stroke-width="32" opacity="0.16" stroke-linecap="round"/>
      <text x="320" y="70" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">🌿 비옥한 초승달 지대 (Fertile Crescent)</text>

      <!-- 아라랏 산 (노아 방주) -->
      <polygon points="380,50 365,75 395,75" fill="#94a3b8" stroke="#f8fafc" stroke-width="1.2"/>
      <text x="380" y="45" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">🏔️ 아라랏산</text>

      <!-- 지중해 대해 텍스트 -->
      <text x="75" y="210" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">지 중 해 (대 해)</text>
    </g>
  `;
}

// 2. 가나안 / 이스라엘 본토 세부 간단한 배경 지도
function renderSimplifiedCanaanBaseMap() {
  return `
    <g class="simplified-canaan-map" pointer-events="none">
      <rect width="100%" height="100%" fill="#071322"/>

      <!-- 가나안 육지 본토 실루엣 -->
      <path d="M 120,0 L 700,0 L 700,440 L 0,440 L 0,380 
               Q 90,360 120,320 
               Q 140,280 150,230 
               Q 155,200 135,175 
               Q 160,165 175,130 
               Q 180,90 160,50 
               L 170,0 Z" 
            fill="#152132" stroke="#25374e" stroke-width="1.5"/>

      <!-- 지중해 바다 서쪽 영역 -->
      <path d="M 0,0 L 170,0 
               Q 160,50 180,90 
               Q 175,130 160,165 
               Q 135,175 155,200 
               Q 150,230 140,280 
               Q 120,320 90,360 
               L 0,380 Z" 
            fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="50" y="190" fill="#38bdf8" font-size="14" font-weight="bold" transform="rotate(-90, 50, 190)">지 중 해 (대 해)</text>

      <!-- 갈멜산 곶 (Mount Carmel) -->
      <text x="145" y="170" fill="#a7f3d0" font-size="9" font-weight="bold">갈멜산 곶 ➔</text>

      <!-- 갈릴리 호수 (북쪽) -->
      <ellipse cx="270" cy="80" rx="12" ry="16" fill="#0ea5e9" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="290" y="85" fill="#7dd3fc" font-size="10" font-weight="bold">갈릴리 호수</text>

      <!-- 요단강 물줄기 -->
      <path d="M 270,96 Q 265,150 270,195 T 275,230" fill="none" stroke="#0ea5e9" stroke-width="3.5" stroke-linecap="round"/>
      <text x="282" y="165" fill="#38bdf8" font-size="9.5" font-weight="bold">요단강</text>

      <!-- 얍복강 (요단 동편 지류) -->
      <path d="M 270,180 Q 320,175 360,190" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="325" y="172" fill="#93c5fd" font-size="9">얍복강 ➔</text>

      <!-- 사해 (염해) -->
      <ellipse cx="275" cy="295" rx="16" ry="55" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      <!-- 사해 리산 반도 (Lisan) -->
      <path d="M 265,300 Q 285,305 275,320 Z" fill="#152132"/>
      <text x="300" y="300" fill="#7dd3fc" font-size="11" font-weight="bold">사해 (염해)</text>

      <!-- 아르논 골짜기 -->
      <path d="M 290,310 Q 340,315 370,305" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <text x="330" y="305" fill="#93c5fd" font-size="8.5">아르논강</text>

      <!-- 중앙 산지 음영 (에브라임 산지, 유다 산지) -->
      <path d="M 215,110 Q 225,200 215,310" stroke="#f59e0b" stroke-width="22" opacity="0.08" stroke-linecap="round"/>
      <text x="215" y="115" fill="#fde047" font-size="9" text-anchor="middle">사마리아 산지</text>
      <text x="210" y="240" fill="#fde047" font-size="9" text-anchor="middle">유다 산지</text>

      <!-- 네게브 사막 (남방) -->
      <text x="180" y="390" fill="#fbbf24" font-size="11" font-weight="bold">네게브 (남방 광야)</text>

      <!-- 요단 동편 (길르앗 & 모압) -->
      <text x="340" y="140" fill="#cbd5e1" font-size="10">길르앗 산지</text>
      <text x="340" y="260" fill="#cbd5e1" font-size="10">모압 고원</text>
    </g>
  `;
}

// 3. 시나이 반도 & 40년 광야 여정 간단한 배경 지도
function renderSimplifiedSinaiWildernessBaseMap() {
  return `
    <g class="simplified-sinai-map" pointer-events="none">
      <rect width="100%" height="100%" fill="#071322"/>

      <!-- 육지 실루엣 -->
      <path d="M 0,0 L 700,0 L 700,440 L 400,440 
               L 310,440 Q 300,320 280,240 
               L 200,340 L 140,440 
               L 110,440 Q 130,350 120,290 
               L 0,280 Z" 
            fill="#152132" stroke="#25374e" stroke-width="1.5"/>

      <!-- 지중해 북부 바다 -->
      <path d="M 0,0 L 420,0 Q 360,40 320,80 L 0,80 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="70" y="45" fill="#38bdf8" font-size="13" font-weight="bold">지 중 해 (대 해)</text>

      <!-- 홍해 수에즈만 (서쪽 뿔) -->
      <path d="M 60,250 Q 110,320 135,440 L 105,440 Q 80,330 40,260 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="55" y="350" fill="#7dd3fc" font-size="10" font-weight="bold" transform="rotate(-65, 55, 350)">수에즈만 (홍해)</text>

      <!-- 홍해 아카바만 (동쪽 뿔) -->
      <path d="M 270,250 Q 285,320 295,440 L 270,440 Q 260,330 245,260 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="290" y="350" fill="#7dd3fc" font-size="10" font-weight="bold" transform="rotate(75, 290, 350)">아카바만</text>

      <!-- 시나이 반도 삼각 뿔 형태 -->
      <polygon points="115,265 255,265 200,380" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
      <text x="185" y="300" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">시나이 반도</text>

      <!-- 아라바 골짜기 (사해에서 아카바만까지 길게 뻗은 지구대) -->
      <line x1="285" y1="120" x2="265" y2="255" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,3"/>
      <text x="295" y="195" fill="#93c5fd" font-size="9">아라바 골짜기</text>

      <!-- 사해 (염해) -->
      <ellipse cx="285" cy="100" rx="9" ry="24" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8"/>
      <text x="305" y="105" fill="#7dd3fc" font-size="10" font-weight="bold">사해</text>

      <!-- 모압 평지 & 에돔 산지 라벨 -->
      <text x="330" y="80" fill="#a7f3d0" font-size="10" font-weight="bold">모압 평지 ➔</text>
      <text x="310" y="170" fill="#fdba74" font-size="9.5">에돔 산지</text>
    </g>
  `;
}

// 4. 배경 지도 분기 처리 헬퍼
function getRealMapBgLayer(region = "near_east", customOpacity = 0.90) {
  const mode = window.currentMapBgMode || "simplified"; // 기본값: 간단한 지도
  if (mode === "vector") return "";

  // 1) 간단한 지도 모드: SVG 백지도 벡터 레이어 반환 (오프라인 100%, 한눈에 쏙 들어오는 명확한 지형)
  if (mode === "simplified") {
    if (region === "canaan" || region === "israel") {
      return renderSimplifiedCanaanBaseMap();
    }
    if (region === "sinai" || region === "wilderness") {
      return renderSimplifiedSinaiWildernessBaseMap();
    }
    return renderSimplifiedNearEastBaseMap(); // default: near_east
  }

  // 2) 실제 물리 지형도 / 인공위성 사진 모드 (ESRI REST API)
  const serverType = (mode === "satellite") ? "World_Imagery" : "World_Physical_Map";
  
  let bbox = "27,27,53,39";
  if (region === "canaan" || region === "israel") {
    bbox = "34.1,30.8,36.2,33.5";
  } else if (region === "sinai" || region === "wilderness") {
    bbox = "31.2,27.5,36.5,32.0";
  } else if (region === "galilee") {
    bbox = "35.0,32.5,35.8,33.1";
  } else if (region === "mediterranean" || region === "paul") {
    bbox = "11,30,37,43";
  } else if (region === "asia_minor" || region === "seven_churches") {
    bbox = "25.8,37.0,30.5,40.0";
  } else if (region === "jerusalem") {
    bbox = "35.19,31.75,35.26,31.80";
  }

  const url = `https://server.arcgisonline.com/ArcGIS/rest/services/${serverType}/MapServer/export?bbox=${bbox}&bboxSR=4326&imageSR=4326&size=700,440&f=image`;

  return `
    <image href="${url}" x="0" y="0" width="700" height="440" preserveAspectRatio="none" opacity="${customOpacity}" />
    <rect width="700" height="440" fill="#020617" opacity="0.22" pointer-events="none" />
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제1장] 족장들의 이동 경로 지도 (우르 ~ 하란 ~ 가나안 ~ 애굽)
// ----------------------------------------------------------------------------
function renderPatriarchsFullMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#070c18"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#090e1a"/>
        </linearGradient>
        <filter id="pinGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.95"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBg1)"/>

      <!-- 1. 실제 지구 지형/위성 지도 BACKGROUND -->
      ${getRealMapBgLayer("near_east", 0.90)}

      <!-- 상단 타이틀 바 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#0f172a" fill-opacity="0.92" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 창세기 제1장: 아브라함·이삭·야곱 족장들의 대장정 지리 지도</text>
      <text x="530" y="35" fill="#cbd5e1" font-size="11">메소포타미아 ~ 가나안 ~ 애굽</text>



      <!-- 아브라함·족장 실제 이동 경로 (황금색 발광 점선 패스) -->
      <path d="M 520,295 L 475,235 L 325,85 L 248,200 L 222,248 L 220,260 L 216,275 L 210,290 L 125,310" 
            fill="none" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8,4" filter="url(#pinGlow)"/>

      <!-- 주요 지리 거점 핀 & 텍스트 카드 -->
      <g filter="url(#pinGlow)">
        <!-- 1. 갈대아 우르 -->
        <circle cx="520" cy="295" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.8"/>
        <circle cx="520" cy="295" r="14" fill="#ef4444" opacity="0.25"/>
        <rect x="445" y="307" width="150" height="30" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#ef4444" stroke-width="0.9"/>
        <text x="520" y="322" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">1. 갈대아 우르 (출발지)</text>
        <text x="520" y="333" fill="#cbd5e1" font-size="8.5" text-anchor="middle">우상 숭배지에서 소명 (창 11~12)</text>

        <!-- 2. 바벨론 -->
        <circle cx="475" cy="235" r="5" fill="#eab308" stroke="#ffffff" stroke-width="1.2"/>
        <rect x="430" y="212" width="90" height="18" rx="4" fill="#0f172a" fill-opacity="0.85" stroke="#ca8a04" stroke-width="0.8"/>
        <text x="475" y="225" fill="#fde047" font-size="9.5" font-weight="bold" text-anchor="middle">바벨론 (시날 평지)</text>

        <!-- 3. 하란 -->
        <circle cx="325" cy="85" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.8"/>
        <circle cx="325" cy="85" r="14" fill="#ef4444" opacity="0.25"/>
        <rect x="250" y="97" width="150" height="30" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#ef4444" stroke-width="0.9"/>
        <text x="325" y="112" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">2. 하란 (데라 별세)</text>
        <text x="325" y="123" fill="#cbd5e1" font-size="8.5" text-anchor="middle">75세에 가나안으로 출발</text>

        <!-- 4. 다메섹 -->
        <circle cx="248" cy="200" r="4.5" fill="#64748b" stroke="#ffffff" stroke-width="1"/>
        <rect x="256" y="191" width="105" height="18" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#475569" stroke-width="0.8"/>
        <text x="308" y="204" fill="#e2e8f0" font-size="9" text-anchor="middle">다메섹 (엘리에셀 고향)</text>

        <!-- 5. 세겜 (가나안 첫 제단) -->
        <circle cx="222" cy="248" r="5.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.2"/>
        <rect x="110" y="239" width="105" height="18" rx="3" fill="#0f172a" fill-opacity="0.9" stroke="#f59e0b" stroke-width="0.8"/>
        <text x="162" y="252" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">3. 세겜 (모레 상수리단)</text>

        <!-- 6. 벧엘 & 아이 -->
        <circle cx="220" cy="260" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
        <rect x="125" y="258" width="90" height="17" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#d97706" stroke-width="0.8"/>
        <text x="170" y="270" fill="#fde047" font-size="8.5" text-anchor="middle">벧엘 (장막 & 제단)</text>

        <!-- 7. 헤브론 (마므레 상수리) -->
        <circle cx="216" cy="275" r="6" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="95" y="276" width="115" height="19" rx="3" fill="#0f172a" fill-opacity="0.9" stroke="#10b981" stroke-width="0.8"/>
        <text x="152" y="289" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">4. 헤브론 (막벨라 굴)</text>

        <!-- 8. 브엘세바 -->
        <circle cx="210" cy="290" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
        <rect x="95" y="296" width="110" height="18" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#f59e0b" stroke-width="0.8"/>
        <text x="150" y="309" fill="#fde047" font-size="8.5" text-anchor="middle">5. 브엘세바 (에셀나무)</text>

        <!-- 9. 애굽 고센 땅 (나일강 삼각주) -->
        <circle cx="125" cy="310" r="6.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="125" cy="310" r="13" fill="#3b82f6" opacity="0.25"/>
        <rect x="50" y="322" width="150" height="28" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#3b82f6" stroke-width="0.9"/>
        <text x="125" y="336" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">6. 애굽 고센 땅 (요셉 정착)</text>
        <text x="125" y="346" fill="#cbd5e1" font-size="8" text-anchor="middle">기근 중 이스라엘 가문 보존</text>
      </g>

      <!-- 하단 범례 배너 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#0f172a" fill-opacity="0.95" stroke="#334155"/>
        <line x1="15" y1="18" x2="45" y2="18" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="55" y="22" fill="#fde047" font-size="11" font-weight="bold">족장 여정:</text>
        <text x="115" y="22" fill="#cbd5e1" font-size="10">우르(소명) ➔ 하란(머묾) ➔ 가나안 세겜·벧엘·헤브론(단 쌓음) ➔ 애굽 고센 땅(구원의 보존) | 배경: 실제 지구 지형도</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제2장] 에덴동산 4대 강 & 노아 아라랏산 & 시날 평지 지리 지도
// ----------------------------------------------------------------------------
function renderGenesisPrimevalMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080e1a"/>
          <stop offset="100%" stop-color="#111c30"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBg2)"/>

      <!-- 실제 메소포타미아 & 아라랏산 물리 지형도/위성 지도 BACKGROUND -->
      ${getRealMapBgLayer("near_east", 0.88)}

      <!-- 상단 타이틀 바 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#0f172a" fill-opacity="0.92" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="35" y="35" fill="#38bdf8" font-size="14" font-weight="bold">🗺️ 창세기 제2장: 에덴동산 4대 강 & 노아 방주 아라랏산 지리 지도</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">창 1~11장 원역사 지리</text>

      <!-- 바다들 -->
      <!-- 흑해 -->
      <path d="M 120,60 Q 200,50 260,80 L 240,110 Q 170,95 120,105 Z" fill="#0369a1" opacity="0.4"/>
      <text x="180" y="85" fill="#7dd3fc" font-size="10">흑 해 (Black Sea)</text>

      <!-- 카스피해 -->
      <path d="M 450,55 Q 490,65 520,130 L 490,160 Q 460,110 440,80 Z" fill="#0369a1" opacity="0.4"/>
      <text x="475" y="105" fill="#7dd3fc" font-size="10">카스피해</text>

      <!-- 페르시아만 -->
      <path d="M 520,340 Q 560,310 650,350 L 650,420 L 500,420 Z" fill="#0369a1" opacity="0.35"/>
      <text x="560" y="390" fill="#7dd3fc" font-size="11">페르시아만</text>

      <!-- 지중해 동부 -->
      <path d="M 0,140 L 90,140 Q 60,220 40,300 L 0,300 Z" fill="#0284c7" opacity="0.3"/>
      <text x="15" y="210" fill="#38bdf8" font-size="11">지중해</text>

      <!-- 1. 아라랏 산 (Mount Ararat: 노아 방주 착륙지) -->
      <polygon points="350,95 330,130 370,130" fill="#94a3b8" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="350" cy="115" r="5" fill="#ef4444"/>
      <text x="350" y="85" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">🏔️ 아라랏 산 (해발 5,137m)</text>
      <text x="350" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">노아 방주가 머문 곳 (창 8:4)</text>

      <!-- 에덴동산 추정지 & 4대 강 발원지 -->
      <ellipse cx="380" cy="185" rx="55" ry="35" fill="#065f46" opacity="0.35" stroke="#34d399" stroke-dasharray="4,3"/>
      <text x="380" y="180" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">🌿 에덴 동산 추정 영역</text>
      <text x="380" y="196" fill="#a7f3d0" font-size="9.5" text-anchor="middle">"강이 에덴에서 흘러나와..."</text>

      <!-- 에덴의 4대 강 물줄기 -->
      <!-- 1. 힛데겔 (티그리스강) -->
      <path d="M 370,195 Q 430,220 480,270 T 540,340" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
      <text x="480" y="255" fill="#93c5fd" font-size="10.5" font-weight="bold">1. 힛데겔강 (티그리스)</text>

      <!-- 2. 유브라데강 -->
      <path d="M 350,205 Q 390,250 450,295 T 525,350" fill="none" stroke="#0ea5e9" stroke-width="3"/>
      <text x="390" y="285" fill="#93c5fd" font-size="10.5" font-weight="bold">2. 유브라데강</text>

      <!-- 3. 기혼강 (구스 온 땅을 두름) -->
      <path d="M 360,215 Q 320,270 290,340" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,3"/>
      <text x="300" y="325" fill="#7dd3fc" font-size="10">3. 기혼강 (구스 땅)</text>

      <!-- 4. 비손강 (하윌라 온 땅 금이 있는 곳) -->
      <path d="M 400,215 Q 460,280 500,380" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,3"/>
      <text x="485" y="350" fill="#7dd3fc" font-size="10">4. 비손강 (하윌라 땅)</text>

      <!-- 2. 시날 평지와 바벨탑 (Tower of Babel) -->
      <g transform="translate(440, 300)">
        <rect x="-10" y="-12" width="100" height="36" rx="6" fill="#451a03" stroke="#f59e0b"/>
        <text x="40" y="5" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">🏛️ 바벨탑 (시날 평지)</text>
        <text x="40" y="18" fill="#fef3c7" font-size="9" text-anchor="middle">언어 혼잡 & 민족 분산</text>
      </g>

      <!-- 3. 원복음 배너 -->
      <g transform="translate(30, 310)">
        <rect width="250" height="75" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
        <text x="15" y="22" fill="#c7d2fe" font-size="11" font-weight="bold">⭐ 원복음 선포의 땅 (창 3:15)</text>
        <text x="15" y="40" fill="#e0e7ff" font-size="10">"여자의 후손은 네 머리를 상하게 할 것이요"</text>
        <text x="15" y="56" fill="#fde047" font-size="10">가죽옷(창 3:21)으로 시작된 구속사 언약</text>
      </g>

      <!-- 하단 설명 바 -->
      <rect x="20" y="398" width="660" height="32" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="350" y="419" fill="#e2e8f0" font-size="10.5" text-anchor="middle">
        창세기 원역사는 신화가 아닌 역사적 강과 산맥(아라랏 산, 유프라테스, 티그리스) 위에서 펼쳐진 하나님의 창조와 심판입니다.
      </text>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제3장] 가나안 본토 족장 거점 상세 지도 (세겜, 벧엘, 헤브론, 브엘세바)
// ----------------------------------------------------------------------------
function renderGenesisCanaanDetailedMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#071224"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBg3)"/>

      <!-- 실제 가나안 / 이스라엘 본토 물리 지형도/위성 지도 BACKGROUND -->
      ${getRealMapBgLayer("canaan", 0.90)}

      <!-- 상단 타이틀 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#0f172a" fill-opacity="0.92" stroke="#10b981" stroke-width="1.2"/>
      <text x="35" y="35" fill="#34d399" font-size="14" font-weight="bold">🗺️ 창세기 제3장: 아브라함과 야곱의 가나안 본토 거점 상세 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">약속의 땅 세부 지형</text>

      <!-- 좌측: 가나안 지리 지도 (지중해, 갈릴리, 요단강, 사해) -->
      <g transform="translate(30, 60)">
        <!-- 지중해 해안선 -->
        <path d="M 0,0 L 100,0 C 90,80 70,220 50,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="25" y="120" fill="#38bdf8" font-size="12" font-weight="bold" transform="rotate(-90, 25, 120)">지 중 해</text>

        <!-- 갈릴리 호수 -->
        <ellipse cx="230" cy="40" rx="10" ry="14" fill="#0ea5e9"/>
        <text x="245" y="45" fill="#93c5fd" font-size="9.5">갈릴리 호수</text>

        <!-- 요단강 물줄기 -->
        <path d="M 230,54 Q 225,120 230,170 T 235,210" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="245" y="130" fill="#38bdf8" font-size="9">요단강</text>

        <!-- 얍복강 (요단 동편 지류) -->
        <path d="M 230,140 Q 280,135 320,150" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
        <circle cx="280" cy="140" r="5" fill="#f59e0b"/>
        <text x="285" y="135" fill="#fde047" font-size="10" font-weight="bold">얍복 나루 (씨름 터)</text>

        <!-- 사해 (염해) -->
        <ellipse cx="235" cy="265" rx="14" ry="48" fill="#0284c7"/>
        <text x="255" y="270" fill="#93c5fd" font-size="10">사해 (염해)</text>

        <!-- 족장들의 거점 핀 -->
        <!-- 1. 세겜 (모레 상수리나무) -->
        <circle cx="180" cy="120" r="6" fill="#ef4444"/>
        <text x="120" y="123" fill="#fca5a5" font-size="11" font-weight="bold">1. 세겜 (첫 단)</text>
        <text x="120" y="136" fill="#cbd5e1" font-size="8.5">아브라함 단 & 야곱 밭</text>

        <!-- 2. 벧엘 (루스) -->
        <circle cx="180" cy="165" r="6" fill="#f59e0b"/>
        <text x="110" y="168" fill="#fde047" font-size="11" font-weight="bold">2. 벧엘 (하나님의 집)</text>
        <text x="110" y="181" fill="#cbd5e1" font-size="8.5">야곱의 사닥다리 서원</text>

        <!-- 3. 살렘 / 모리아산 (예루살렘) -->
        <circle cx="185" cy="195" r="5" fill="#a855f7"/>
        <text x="195" y="198" fill="#d8b4fe" font-size="10">살렘 (멜기세덱 축복)</text>

        <!-- 4. 베들레헴 (에브랏) -->
        <circle cx="180" cy="215" r="4" fill="#ec4899"/>
        <text x="110" y="218" fill="#f472b6" font-size="9.5">에브랏 (라헬 묘)</text>

        <!-- 5. 헤브론 (마므레 상수리, 기럇아르바) -->
        <circle cx="170" cy="245" r="7" fill="#10b981"/>
        <circle cx="170" cy="245" r="12" fill="#10b981" opacity="0.2"/>
        <text x="90" y="248" fill="#6ee7b7" font-size="11" font-weight="bold">3. 헤브론 (마므레)</text>
        <text x="80" y="261" fill="#cbd5e1" font-size="8.5">막벨라 굴(아브라함·사라 매장)</text>

        <!-- 6. 브엘세바 (일곱 우물) -->
        <circle cx="150" cy="300" r="6" fill="#f59e0b"/>
        <text x="75" y="303" fill="#fde047" font-size="11" font-weight="bold">4. 브엘세바 (우물)</text>
        <text x="75" y="316" fill="#cbd5e1" font-size="8.5">에셀나무 심고 기도함</text>
      </g>

      <!-- 우측: 족장의 믿음 계보 카드 -->
      <g transform="translate(400, 65)">
        <rect width="280" height="350" rx="10" fill="#1e293b" stroke="#334155"/>
        <rect width="280" height="32" rx="10" fill="#047857"/>
        <text x="140" y="21" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">👑 가나안 땅 언약의 계승자들</text>

        <g transform="translate(15, 45)">
          <!-- 아브라함 -->
          <rect width="250" height="62" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="20" fill="#fbbf24" font-size="11" font-weight="bold">아브라함 (믿음의 조상)</text>
          <text x="10" y="36" fill="#cbd5e1" font-size="9.5">헤브론 마므레 상수리 수풀에 거하며</text>
          <text x="10" y="50" fill="#cbd5e1" font-size="9.5">막벨라 굴을 은 400세겔로 매입함</text>

          <!-- 이삭 -->
          <rect y="70" width="250" height="62" rx="6" fill="#0f172a" stroke="#38bdf8"/>
          <text x="10" y="90" fill="#38bdf8" font-size="11" font-weight="bold">이삭 (순종과 화평의 조상)</text>
          <text x="10" y="106" fill="#cbd5e1" font-size="9.5">그랄 골짜기에서 파는 우물마다 양보,</text>
          <text x="10" y="120" fill="#cbd5e1" font-size="9.5">브엘세바에서 여호와의 이름을 부름</text>

          <!-- 야곱 -->
          <rect y="140" width="250" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="160" fill="#34d399" font-size="11" font-weight="bold">야곱 (이스라엘 12지파의 아비)</text>
          <text x="10" y="176" fill="#cbd5e1" font-size="9.5">얍복 나루에서 하나님의 사자와 씨름,</text>
          <text x="10" y="190" fill="#cbd5e1" font-size="9.5">세겜과 벧엘을 거쳐 헤브론에 이름</text>

          <!-- 요셉 -->
          <rect y="213" width="250" height="75" rx="6" fill="#0f172a" stroke="#ec4899"/>
          <text x="10" y="233" fill="#f472b6" font-size="11" font-weight="bold">요셉 (구속사의 보존자)</text>
          <text x="10" y="249" fill="#cbd5e1" font-size="9.5">도단에서 팔려 애굽 총리가 되어</text>
          <text x="10" y="263" fill="#cbd5e1" font-size="9.5">온 가문을 고센 땅으로 인도,</text>
          <text x="10" y="277" fill="#fde047" font-size="9.5">"내 해골을 메고 올라가라" 유언</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [민수기 제2장] 이스라엘 40년 광야 여정 실제 이동 경로 지도
// ----------------------------------------------------------------------------
function renderNumbersWildernessRouteMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgNum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgNum)"/>

      <!-- 실제 시나이 반도 & 아라바 골짜기 물리 지형도/위성 지도 BACKGROUND -->
      ${getRealMapBgLayer("sinai", 0.90)}

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#0f172a" fill-opacity="0.92" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 민수기 제2장: 이스라엘의 40년 광야 시험과 실제 이동 노정 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">시내산 ~ 가데스 ~ 모압</text>

      <!-- 지리 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 북부 -->
        <path d="M 0,0 L 220,0 Q 180,40 140,80 L 0,80 Z" fill="#0284c7" opacity="0.3"/>
        <text x="30" y="40" fill="#38bdf8" font-size="11">지중해</text>

        <!-- 사해 & 아라바 골짜기 -->
        <ellipse cx="280" cy="90" rx="8" ry="25" fill="#0284c7"/>
        <text x="295" y="95" fill="#93c5fd" font-size="10">사해</text>
        <line x1="280" y1="115" x2="260" y2="280" stroke="#0369a1" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="270" y="190" fill="#64748b" font-size="9">아라바 골짜기</text>

        <!-- 홍해 수에즈만 & 아카바만 -->
        <path d="M 40,240 Q 70,300 80,350 L 50,350 Q 40,300 20,250 Z" fill="#0369a1" opacity="0.35"/>
        <path d="M 230,260 Q 250,310 260,350 L 240,350 Q 230,310 215,260 Z" fill="#0369a1" opacity="0.35"/>
        <text x="30" y="310" fill="#7dd3fc" font-size="9">수에즈만</text>
        <text x="245" y="315" fill="#7dd3fc" font-size="9">아카바만</text>

        <!-- 시나이 반도 삼각 지형 -->
        <polygon points="50,220 230,240 140,345" fill="#1e293b" opacity="0.4"/>

        <!-- 40년 실제 방황 경로선 -->
        <!-- 1. 시내산 출발 -> 디베라 -> 기브롯핫다아와 -> 하세롯 -> 가데스바네아 -->
        <path d="M 140,335 L 155,290 L 175,250 L 190,210 L 200,140" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- 2. 가데스 바네아 38년 방황 루프 (원형 점선) -->
        <ellipse cx="180" cy="180" rx="40" ry="30" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="180" y="183" fill="#fca5a5" font-size="9" text-anchor="middle">38년 광야 방황 (불신앙 세대 별세)</text>

        <!-- 3. 가데스 -> 호르산 -> 에돔 우회로(아카바만 에시온게벨) -> 살모나·부논(놋뱀) -> 모압 평지 -->
        <path d="M 200,140 L 230,165 L 240,240 L 270,260 L 310,210 L 320,150 L 315,100 L 285,75" 
              fill="none" stroke="#34d399" stroke-width="3"/>

        <!-- 주요 거점 핀 -->
        <!-- 시내산 -->
        <polygon points="140,325 130,340 150,340" fill="#f97316"/>
        <circle cx="140" cy="335" r="4" fill="#ef4444"/>
        <text x="140" y="352" fill="#fb923c" font-size="10" font-weight="bold" text-anchor="middle">1. 시내산 출발 (민 10장)</text>

        <!-- 가데스 바네아 -->
        <circle cx="200" cy="140" r="7" fill="#ef4444"/>
        <circle cx="200" cy="140" r="12" fill="#ef4444" opacity="0.2"/>
        <text x="140" y="135" fill="#fca5a5" font-size="11" font-weight="bold">2. 가데스 바네아</text>
        <text x="130" y="148" fill="#cbd5e1" font-size="8.5">12정탐꾼 불신앙 ➔ 38년 방황 선고</text>

        <!-- 호르산 (아론의 죽음) -->
        <circle cx="230" cy="165" r="5" fill="#94a3b8"/>
        <text x="240" y="168" fill="#e2e8f0" font-size="9.5">호르산 (아론 별세)</text>

        <!-- 부논 (장대 위의 놋뱀) -->
        <circle cx="310" cy="210" r="6" fill="#f59e0b"/>
        <text x="320" y="213" fill="#fde047" font-size="10" font-weight="bold">3. 부논 (놋뱀 구원)</text>
        <text x="320" y="225" fill="#fef08a" font-size="8.5">"쳐다본즉 모두 살더라"</text>

        <!-- 에돔과 모압 경계 -->
        <text x="330" y="180" fill="#94a3b8" font-size="9">에돔 산지 (통과 거절)</text>
        <text x="330" y="125" fill="#94a3b8" font-size="9">모압 족속 영토</text>

        <!-- 모압 평지 (느보산 아래) -->
        <circle cx="285" cy="75" r="7" fill="#10b981"/>
        <text x="300" y="70" fill="#6ee7b7" font-size="11" font-weight="bold">4. 모압 평지 도착!</text>
        <text x="300" y="83" fill="#a7f3d0" font-size="8.5">2차 인구조사 & 신명기 고별설교</text>
      </g>

      <!-- 우측 정보 요약 패널 -->
      <g transform="translate(430, 65)">
        <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="250" height="30" rx="8" fill="#b45309"/>
        <text x="125" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">💡 민수기 40년 광야 교훈</text>

        <g transform="translate(12, 42)">
          <text x="0" y="16" fill="#fde047" font-size="11" font-weight="bold">불신앙의 대가와 하나님의 신실하심</text>
          <text x="0" y="35" fill="#cbd5e1" font-size="9.5">· 가데스 바네아에서 10명 정탐꾼의</text>
          <text x="0" y="49" fill="#cbd5e1" font-size="9.5">  악평을 듣고 원망한 출애굽 1세대는</text>
          <text x="0" y="63" fill="#f87171" font-size="9.5">  여호수아와 갈렙을 제외하고 광야서 소멸됨</text>

          <rect y="78" width="226" height="70" rx="6" fill="#0f172a" stroke="#ea580c"/>
          <text x="10" y="96" fill="#fdba74" font-size="10.5" font-weight="bold">🐍 놋뱀 (Nehushtan, 민 21장)</text>
          <text x="10" y="112" fill="#fed7aa" font-size="9">불뱀에 물려 죽어갈 때 모세가 만든</text>
          <text x="10" y="125" fill="#fed7aa" font-size="9">놋뱀을 쳐다본 자는 다 살아남!</text>
          <text x="10" y="139" fill="#fde047" font-size="9">→ 요 3:14 십자가 예수 그리스도 예표</text>

          <rect y="158" width="226" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="176" fill="#6ee7b7" font-size="10.5" font-weight="bold">🌟 발람의 메시야 별 예언 (민 24:17)</text>
          <text x="10" y="192" fill="#d1fae5" font-size="9">"한 별이 야곱에게서 나오며</text>
          <text x="10" y="206" fill="#d1fae5" font-size="9"> 한 규가 이스라엘에게서 일어나서"</text>
          <text x="10" y="220" fill="#fde047" font-size="9">원수의 저주를 축복으로 바꾸시는 하나님</text>

          <text x="113" y="252" fill="#93c5fd" font-size="9" text-anchor="middle">광야는 버림의 땅이 아닌</text>
          <text x="113" y="266" fill="#93c5fd" font-size="9" text-anchor="middle">하나님만을 의지하는 훈련 학교!</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [신명기 제2장] 느보산 비스가 봉우리에서 바라본 가나안 조망 파노라마 지도
// ----------------------------------------------------------------------------
function renderDeuteronomyNeboMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgDeu" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#07152b"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgDeu)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 신명기 제2장: 느보산 비스가 봉우리에서 바라본 약속의 땅 조망 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">신명기 34장 모세의 시선</text>

      <!-- 요단강 서편 조망 파노라마 맵 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 대해 (서쪽 끝) -->
        <path d="M 0,20 L 70,20 C 60,100 40,240 20,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="15" y="160" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 15, 160)">서해 (지중해)</text>

        <!-- 갈릴리 호수 (북쪽) -->
        <ellipse cx="200" cy="40" rx="8" ry="12" fill="#0ea5e9"/>
        <text x="215" y="43" fill="#93c5fd" font-size="9">갈릴리</text>

        <!-- 요단강 물줄기 -->
        <path d="M 200,52 Q 195,130 200,190 T 205,230" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="160" y="130" fill="#38bdf8" font-size="9">요단강</text>

        <!-- 사해 (남쪽) -->
        <ellipse cx="205" cy="280" rx="12" ry="45" fill="#0284c7"/>
        <text x="150" y="285" fill="#93c5fd" font-size="10">사해 (염해)</text>

        <!-- 느보산 (동편 조망 위치) -->
        <g transform="translate(290, 210)">
          <polygon points="0,-25 -25,15 25,15" fill="#b45309" stroke="#facc15" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="6" fill="#ef4444"/>
          <text x="35" y="-5" fill="#fde047" font-size="12" font-weight="bold">느보산 비스가 봉우리</text>
          <text x="35" y="10" fill="#cbd5e1" font-size="9.5">(해발 835m 모세의 별세 터)</text>
        </g>

        <!-- 느보산에서 가나안 전역으로 뻗어나가는 조망 시선 (황금색 방사선) -->
        <line x1="290" y1="210" x2="200" y2="40" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="290" y1="210" x2="160" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="290" y1="210" x2="170" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="290" y1="210" x2="130" y2="250" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>

        <!-- 모세가 바라본 가나안 각 거점 핀 -->
        <!-- 1. 종려나무의 성읍 여리고 -->
        <circle cx="170" cy="200" r="6" fill="#10b981"/>
        <text x="95" y="198" fill="#6ee7b7" font-size="11" font-weight="bold">여리고 성 (종려나무 성읍)</text>
        <text x="95" y="210" fill="#cbd5e1" font-size="8.5">요단강 건너 바로 맞은편</text>

        <!-- 2. 세겜 (그리심산과 에발산) -->
        <circle cx="160" cy="100" r="5" fill="#38bdf8"/>
        <text x="80" y="98" fill="#7dd3fc" font-size="10" font-weight="bold">그리심산(복) & 에발산(저주)</text>

        <!-- 3. 단과 납달리 (북부 끝) -->
        <circle cx="190" cy="25" r="4" fill="#a855f7"/>
        <text x="130" y="28" fill="#d8b4fe" font-size="9.5">단과 납달리 (북방)</text>

        <!-- 4. 헤브론과 유다 산지 -->
        <circle cx="130" cy="250" r="5" fill="#f59e0b"/>
        <text x="60" y="253" fill="#fde047" font-size="10">헤브론 & 남방 네게브</text>
      </g>

      <!-- 우측 성경 본문 묵상 카드 -->
      <g transform="translate(410, 65)">
        <rect width="270" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="270" height="30" rx="8" fill="#1e3a8a"/>
        <text x="135" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">📜 신명기 34장 1~4절 말씀</text>

        <g transform="translate(15, 42)">
          <p class="text-xs text-slate-300">
            <text x="0" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">"모세가 모압 평지에서 느보 산에 올라가</text>
            <text x="0" y="34" fill="#cbd5e1" font-size="9.5"> 여리고 맞은편 비스가 산꼭대기에 이르매</text>
            <text x="0" y="50" fill="#cbd5e1" font-size="9.5"> 여호와께서 길르앗 온 땅을 단까지 보이시고</text>
            <text x="0" y="66" fill="#cbd5e1" font-size="9.5"> 또 온 납달리와 에브라임과 므낫세의 땅과</text>
            <text x="0" y="82" fill="#cbd5e1" font-size="9.5"> 서해까지의 유다 온 땅과</text>
            <text x="0" y="98" fill="#cbd5e1" font-size="9.5"> 네겝과 종려나무의 성읍 여리고 골짜기</text>
            <text x="0" y="114" fill="#cbd5e1" font-size="9.5"> 평지를 소알까지 보이시고</text>
            <text x="0" y="134" fill="#fde047" font-size="10" font-weight="bold"> 여호와께서 그에게 이르시되</text>
            <text x="0" y="150" fill="#fde047" font-size="10" font-weight="bold"> '이는 내가 아브라함과 이삭과 야곱에게</text>
            <text x="0" y="166" fill="#fde047" font-size="10" font-weight="bold">  맹세하여 그 후손에게 주리라 한 땅이라!'"</text>
          </p>

          <rect y="180" width="240" height="70" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="200" fill="#fbbf24" font-size="10.5" font-weight="bold">💡 노우호 목사님 강좌 포인트</text>
          <text x="10" y="218" fill="#cbd5e1" font-size="9">모세는 비록 가나안에 들어가지 못했으나,</text>
          <text x="10" y="232" fill="#cbd5e1" font-size="9">주의 약속의 성취를 두 눈으로 목도하며</text>
          <text x="10" y="246" fill="#6ee7b7" font-size="9">사명을 완수하고 평안히 안식에 들어갔습니다.</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사사기 제2장] 12사사 활동 거점과 격전지 지리 지도
// ----------------------------------------------------------------------------
function renderJudgesLocationsMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgJdg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0f1d"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgJdg)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
      <text x="35" y="35" fill="#f87171" font-size="14" font-weight="bold">🗺️ 사사기 제2장: 이스라엘 주요 사사 12인의 활동 거점 및 격전지 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">사사 시대 350년 지리</text>

      <!-- 가나안 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 해안선 -->
        <path d="M 0,0 L 90,0 C 80,90 65,220 40,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="20" y="140" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 20, 140)">지 중 해</text>

        <!-- 갈릴리 호수 & 요단강 & 사해 -->
        <ellipse cx="200" cy="40" rx="8" ry="12" fill="#0ea5e9"/>
        <path d="M 200,52 Q 195,130 200,190 T 205,230" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
        <ellipse cx="205" cy="275" rx="12" ry="42" fill="#0284c7"/>

        <!-- 1. 드보라 & 바락: 다볼산 & 기손강 -->
        <circle cx="175" cy="55" r="6" fill="#38bdf8"/>
        <text x="185" y="55" fill="#7dd3fc" font-size="10.5" font-weight="bold">드보라·바락 (다볼산 & 기손강)</text>
        <text x="185" y="68" fill="#cbd5e1" font-size="8.5">가나안 왕 야빈 & 시스라 철병거 격파</text>

        <!-- 2. 기드온: 오브라 & 하롯샘 -->
        <circle cx="185" cy="90" r="7" fill="#f59e0b"/>
        <text x="195" y="90" fill="#fde047" font-size="11" font-weight="bold">기드온 (오브라 & 하롯샘)</text>
        <text x="195" y="103" fill="#cbd5e1" font-size="8.5">300용사 횃불·항아리로 미디안 대파</text>

        <!-- 3. 삼갈: 소 모는 막대기 -->
        <circle cx="80" cy="115" r="4" fill="#94a3b8"/>
        <text x="90" y="118" fill="#cbd5e1" font-size="9">삼갈 (블레셋 600명 처단)</text>

        <!-- 4. 입다: 길르앗 (요단 동편) -->
        <circle cx="260" cy="120" r="6" fill="#10b981"/>
        <text x="270" y="123" fill="#6ee7b7" font-size="10.5" font-weight="bold">입다 (길르앗 미스바)</text>
        <text x="270" y="136" fill="#cbd5e1" font-size="8.5">암몬 족속 격퇴 & 서원</text>

        <!-- 5. 에훗: 여리고 종려나무 성읍 -->
        <circle cx="180" cy="180" r="5" fill="#ef4444"/>
        <text x="100" y="183" fill="#fca5a5" font-size="10" font-weight="bold">에훗 (여리고)</text>
        <text x="80" y="196" fill="#cbd5e1" font-size="8.5">모압 왕 에글론 처단</text>

        <!-- 6. 삼손: 소라, 딤나, 가사 (블레셋 접경지) -->
        <circle cx="100" cy="200" r="7" fill="#ec4899"/>
        <text x="110" y="205" fill="#f472b6" font-size="11" font-weight="bold">삼손 (소라 & 딤나)</text>
        <text x="110" y="218" fill="#cbd5e1" font-size="8.5">나실인 나귀 턱뼈, 다곤 신전 무너뜨림</text>

        <!-- 7. 옷니엘: 드빌 (기럇세벨 - 남부) -->
        <circle cx="140" cy="265" r="6" fill="#a855f7"/>
        <text x="60" y="268" fill="#d8b4fe" font-size="10" font-weight="bold">옷니엘 (첫 사사 드빌)</text>
        <text x="60" y="281" fill="#cbd5e1" font-size="8.5">메소포타미아 구산리사다임 격퇴</text>
      </g>

      <!-- 우측 사사기 요약 카드 -->
      <g transform="translate(420, 65)">
        <rect width="260" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="260" height="30" rx="8" fill="#991b1b"/>
        <text x="130" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">⚡ 사사기 7대 영적 악순환</text>

        <g transform="translate(15, 42)">
          <text x="0" y="18" fill="#fca5a5" font-size="10.5" font-weight="bold">1. 범죄 (Sin)</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">바알과 아세라 우상 숭배</text>

          <text x="0" y="52" fill="#fca5a5" font-size="10.5" font-weight="bold">2. 징계 (Servitude)</text>
          <text x="0" y="66" fill="#cbd5e1" font-size="9">주변 이방 민족의 압제와 고통</text>

          <text x="0" y="86" fill="#fde047" font-size="10.5" font-weight="bold">3. 부르짖음 (Supplication)</text>
          <text x="0" y="100" fill="#cbd5e1" font-size="9">극심한 고난 속 회개 기도</text>

          <text x="0" y="120" fill="#6ee7b7" font-size="10.5" font-weight="bold">4. 구원 (Salvation)</text>
          <text x="0" y="134" fill="#cbd5e1" font-size="9">하나님이 사사를 세워 건지심</text>

          <text x="0" y="154" fill="#93c5fd" font-size="10.5" font-weight="bold">5. 평화 (Silence)</text>
          <text x="0" y="168" fill="#cbd5e1" font-size="9">사사가 사는 날 동안 평온</text>

          <rect y="190" width="230" height="65" rx="6" fill="#2d1515" stroke="#ef4444"/>
          <text x="10" y="210" fill="#fca5a5" font-size="10" font-weight="bold">사사기의 결론 (삿 21:25)</text>
          <text x="10" y="226" fill="#fecaca" font-size="9.5">"그 때에 이스라엘에 왕이 없으므로</text>
          <text x="10" y="240" fill="#fde68a" font-size="9.5" font-weight="bold">사람이 각기 자기의 소견에 옳은 대로 행하였더라"</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사무엘상/하 제2장] 다윗의 통일 이스라엘 왕국 최대 판도 지리 지도
// ----------------------------------------------------------------------------
function renderDavidKingdomMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgDav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgDav)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 사무엘하 제2장: 다윗의 통일 이스라엘 왕국 최대 영토 판도 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">삼하 5~8장 영토 확장</text>

      <!-- 영토 지도 그래픽 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 -->
        <path d="M 0,0 L 140,0 C 130,80 110,220 70,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="30" y="150" fill="#38bdf8" font-size="12" font-weight="bold" transform="rotate(-90, 30, 150)">지중해 (대해)</text>

        <!-- 다윗 통일왕국 최대 영토 영역 (유프라테스 ~ 하맛 ~ 애굽 시내) -->
        <polygon points="120,40 280,10 340,80 300,280 200,340 100,310 130,180" 
                 fill="#065f46" opacity="0.4" stroke="#10b981" stroke-width="2"/>
        <text x="230" y="160" fill="#a7f3d0" font-size="14" font-weight="bold" opacity="0.7">다윗의 통일 이스라엘 왕국</text>

        <!-- 유프라테스 강 (북동부 경계) -->
        <path d="M 280,10 Q 330,30 380,60" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="310" y="25" fill="#93c5fd" font-size="10">유프라테스강 경계</text>

        <!-- 갈릴리 & 요단강 & 사해 -->
        <ellipse cx="190" cy="110" rx="6" ry="10" fill="#0ea5e9"/>
        <path d="M 190,120 L 195,190" fill="none" stroke="#0ea5e9" stroke-width="2"/>
        <ellipse cx="195" cy="225" rx="9" ry="32" fill="#0284c7"/>

        <!-- 주요 수도 및 거점 핀 -->
        <!-- 1. 다메섹 (아람 정복) -->
        <circle cx="260" cy="70" r="5" fill="#f59e0b"/>
        <text x="270" y="73" fill="#fde047" font-size="10.5" font-weight="bold">다메섹 (수비대 둠)</text>

        <!-- 2. 단 (북부 국경) -->
        <circle cx="195" cy="90" r="4" fill="#38bdf8"/>
        <text x="165" y="93" fill="#93c5fd" font-size="9.5">단</text>

        <!-- 3. 예루살렘 (통일 왕국 수도 탈환!) -->
        <circle cx="185" cy="190" r="8" fill="#ef4444"/>
        <circle cx="185" cy="190" r="14" fill="#ef4444" opacity="0.25"/>
        <text x="95" y="188" fill="#fca5a5" font-size="12" font-weight="bold">예루살렘 (시온 산성)</text>
        <text x="95" y="202" fill="#fde047" font-size="9">법궤 안치 & 다윗 언약</text>

        <!-- 4. 헤브론 (첫 7년 반 유다 통치) -->
        <circle cx="180" cy="220" r="6" fill="#10b981"/>
        <text x="105" y="223" fill="#6ee7b7" font-size="10.5">헤브론 (기름부음)</text>

        <!-- 5. 블레셋 가드 (정복) -->
        <circle cx="140" cy="210" r="5" fill="#ec4899"/>
        <text x="145" y="215" fill="#f472b6" font-size="9.5">가드 (블레셋 굴복)</text>

        <!-- 6. 브엘세바 (남부 국경) -->
        <circle cx="160" cy="265" r="5" fill="#f59e0b"/>
        <text x="90" y="268" fill="#fde047" font-size="10">브엘세바 (단~브엘세바)</text>

        <!-- 7. 에돔 & 모압 & 암몬 (조공 바침) -->
        <text x="250" y="240" fill="#cbd5e1" font-size="10">모압 & 암몬 (조공)</text>
        <text x="220" y="300" fill="#cbd5e1" font-size="10">에돔 (수비대 설치)</text>
      </g>

      <!-- 우측 다윗 언약 카드 -->
      <g transform="translate(430, 65)">
        <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="250" height="30" rx="8" fill="#1e3a8a"/>
        <text x="125" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">👑 영원한 다윗 언약 (삼하 7장)</text>

        <g transform="translate(15, 42)">
          <text x="0" y="16" fill="#60a5fa" font-size="10.5" font-weight="bold">나단 선지자를 통한 하나님의 약속</text>
          <text x="0" y="34" fill="#cbd5e1" font-size="9.5">다윗이 하나님의 성전을 짓고자 했을 때,</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9.5">하나님께서 도리어 다윗의 집(가문)을</text>
          <text x="0" y="62" fill="#cbd5e1" font-size="9.5">영원히 세워주시겠다고 언약하심</text>

          <rect y="78" width="220" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="98" fill="#fde047" font-size="10.5" font-weight="bold">"네 집과 네 나라가 내 앞에서</text>
          <text x="10" y="114" fill="#fde047" font-size="10.5" font-weight="bold"> 영원히 보전되고 네 왕위가</text>
          <text x="10" y="130" fill="#fde047" font-size="10.5" font-weight="bold"> 영원히 견고하리라!" (삼하 7:16)</text>

          <rect y="165" width="220" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="185" fill="#6ee7b7" font-size="10" font-weight="bold">✝️ 구속사의 성취</text>
          <text x="10" y="201" fill="#cbd5e1" font-size="9">이 언약은 다윗의 자손으로 오실</text>
          <text x="10" y="215" fill="#fde68a" font-size="9.5" font-weight="bold">만왕의 왕 예수 그리스도로 완성됨!</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [복음서 제2장] 예루살렘 고난주간 동선 & 십자가의 길(Via Dolorosa) 지리 지도
// ----------------------------------------------------------------------------
function renderJerusalemPassionWeekMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgPas" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#140a1c"/>
          <stop offset="100%" stop-color="#04060f"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgPas)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fca5a5" font-size="14" font-weight="bold">🗺️ 사복음서 제2장: 예루살렘 고난 주간 실제 지형 동선 & 십자가의 길 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Via Dolorosa & Golgotha</text>

      <!-- 예루살렘 성벽 & 성전 지형도 -->
      <g transform="translate(30, 60)">
        <!-- 예루살렘 성벽 외곽선 -->
        <polygon points="120,60 260,50 320,120 320,280 200,320 100,280 80,180 100,100" 
                 fill="#1e293b" opacity="0.6" stroke="#94a3b8" stroke-width="2.5"/>
        <text x="140" y="295" fill="#cbd5e1" font-size="11" font-weight="bold">예루살렘 성벽 (시온 산성)</text>

        <!-- 기드론 골짜기 (성전 동편) -->
        <path d="M 330,40 Q 345,180 340,340" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="350" y="240" fill="#38bdf8" font-size="10" transform="rotate(90, 350, 240)">기드론 시내 / 골짜기</text>

        <!-- 감람산 (Mount of Olives - 동쪽) -->
        <ellipse cx="430" cy="180" rx="35" ry="70" fill="#1e3a8a" opacity="0.3" stroke="#60a5fa"/>
        <text x="430" y="120" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">감람산 (Olives)</text>

        <!-- 1. 벳바게 & 베다니 -->
        <circle cx="480" cy="250" r="5" fill="#f59e0b"/>
        <text x="490" y="253" fill="#fde047" font-size="9.5">베다니 (마리아·나사로)</text>

        <!-- 2. 겟세마네 동산 (감람산 기슭) -->
        <circle cx="360" cy="180" r="7" fill="#a855f7"/>
        <circle cx="360" cy="180" r="13" fill="#a855f7" opacity="0.25"/>
        <text x="375" y="175" fill="#d8b4fe" font-size="11" font-weight="bold">2. 겟세마네 동산</text>
        <text x="375" y="190" fill="#cbd5e1" font-size="8.5">피땀 흘리신 기도 & 체포</text>

        <!-- 3. 헤롯 성전 (외소 및 뜰) -->
        <rect x="210" y="90" width="90" height="90" rx="4" fill="#b45309" opacity="0.8" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="255" y="135" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">헤롯 성전</text>
        <text x="255" y="150" fill="#ffffff" font-size="8.5" text-anchor="middle">성전 정결 & 논쟁</text>

        <!-- 4. 마가 다락방 (최후의 만찬 터 - 성 남서쪽) -->
        <circle cx="130" cy="250" r="6" fill="#f59e0b"/>
        <text x="40" y="245" fill="#fde047" font-size="10" font-weight="bold">1. 마가 다락방</text>
        <text x="25" y="258" fill="#cbd5e1" font-size="8.5">최후의 성만찬 & 세족</text>

        <!-- 5. 가야바 대제사장 법정 -->
        <circle cx="140" cy="220" r="5" fill="#64748b"/>
        <text x="45" y="223" fill="#cbd5e1" font-size="9">가야바 집 (베드로 부인)</text>

        <!-- 6. 안토니아 요새 (빌라도 총독 관저) -->
        <circle cx="210" cy="75" r="6" fill="#ef4444"/>
        <text x="140" y="65" fill="#fca5a5" font-size="10" font-weight="bold">3. 빌라도 관저</text>
        <text x="130" y="78" fill="#cbd5e1" font-size="8.5">사형 선고 & 채찍질</text>

        <!-- 7. 비아 돌로로사 (십자가의 길 동선) -->
        <path d="M 210,75 L 150,85 L 110,120 L 70,120" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,3"/>
        <text x="135" y="115" fill="#f87171" font-size="9" font-weight="bold">비아 돌로로사</text>

        <!-- 8. 골고다 언덕 (성문 밖 갈보리 십자가) -->
        <polygon points="60,110 50,130 70,130" fill="#7f1d1d"/>
        <circle cx="60" cy="120" r="8" fill="#ef4444"/>
        <text x="60" y="100" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">✝️ 골고다 언덕</text>
        <text x="60" y="145" fill="#fca5a5" font-size="9.5" text-anchor="middle">"다 이루었다!"</text>

        <!-- 9. 아리마대 요셉의 빈 무덤 & 부활 -->
        <circle cx="45" cy="165" r="7" fill="#38bdf8"/>
        <text x="45" y="188" fill="#7dd3fc" font-size="10.5" font-weight="bold" text-anchor="middle">👑 빈 무덤 (부활!)</text>
      </g>

      <!-- 우측 고난주간 일정 요약 -->
      <g transform="translate(530, 65)">
        <rect width="150" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="150" height="28" rx="8" fill="#991b1b"/>
        <text x="75" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">8일간의 동선 요약</text>

        <g transform="translate(10, 36)">
          <text x="0" y="16" fill="#34d399" font-size="10" font-weight="bold">· 일: 왕의 예루살렘 입성</text>
          <text x="0" y="34" fill="#fde047" font-size="10" font-weight="bold">· 월: 성전 매매상 청결</text>
          <text x="0" y="52" fill="#60a5fa" font-size="10" font-weight="bold">· 화: 성전 논쟁 & 종말예언</text>
          <text x="0" y="70" fill="#94a3b8" font-size="10" font-weight="bold">· 수: 옥합 깨뜨림 & 유다배반</text>
          <text x="0" y="88" fill="#c084fc" font-size="10" font-weight="bold">· 목: 성만찬 & 겟세마네</text>
          <text x="0" y="106" fill="#f87171" font-size="10.5" font-weight="bold">· 금: 십자가 대속 죽음</text>
          <text x="0" y="124" fill="#94a3b8" font-size="10" font-weight="bold">· 토: 무덤 속 안식</text>
          <text x="0" y="144" fill="#38bdf8" font-size="11" font-weight="bold">· 일: 새벽 영광의 부활!</text>

          <rect y="165" width="130" height="125" rx="5" fill="#0f172a" stroke="#ef4444"/>
          <text x="65" y="185" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">가상칠언 (7가지 말씀)</text>
          <text x="8" y="202" fill="#cbd5e1" font-size="8">1. 저들을 사하여 주옵소서</text>
          <text x="8" y="216" fill="#cbd5e1" font-size="8">2. 오늘 네가 낙원에 있으리라</text>
          <text x="8" y="230" fill="#cbd5e1" font-size="8">3. 여자여 보소서 아들이니이다</text>
          <text x="8" y="244" fill="#cbd5e1" font-size="8">4. 엘리 엘리 라마 사박다니</text>
          <text x="8" y="258" fill="#cbd5e1" font-size="8">5. 내가 목마르다</text>
          <text x="8" y="272" fill="#fde047" font-size="8.5" font-weight="bold">6. 다 이루었다 (테텔레스타이)</text>
          <text x="8" y="285" fill="#cbd5e1" font-size="8">7. 내 영혼을 아버지께 부탁하나이다</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사도행전 제3장] 바울의 로마 호송 항해로 & 난파 지리 지도
// ----------------------------------------------------------------------------
function renderPaulRomeVoyageMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgRom" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#081020"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgRom)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
      <text x="35" y="35" fill="#38bdf8" font-size="14" font-weight="bold">🗺️ 사도행전 제3장: 사도 바울의 로마 압송 항해로 & 유라굴로 광풍 극복 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">행 27~28장 로마 호송</text>

      <!-- 지중해 전도 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 바다 베이스 -->
        <path d="M 0,110 Q 200,90 400,120 T 640,160 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>
        <text x="300" y="280" fill="#38bdf8" font-size="13" font-weight="bold" opacity="0.5">지 중 해 (Mediterranean Sea)</text>

        <!-- 이탈리아 반도 & 로마 -->
        <rect x="40" y="30" width="30" height="90" rx="5" fill="#1e293b" stroke="#94a3b8" transform="rotate(25, 40, 30)"/>
        <circle cx="80" cy="65" r="7" fill="#ef4444"/>
        <circle cx="80" cy="65" r="13" fill="#ef4444" opacity="0.25"/>
        <text x="95" y="70" fill="#fca5a5" font-size="12" font-weight="bold">로마 (Rome 🏛️ 최종 목적지)</text>
        <text x="95" y="85" fill="#cbd5e1" font-size="9">셋집 2년 담대히 하나님 나라 전파</text>

        <!-- 보디올 & 압비오 광장 -->
        <circle cx="95" cy="115" r="4" fill="#38bdf8"/>
        <text x="105" y="118" fill="#bae6fd" font-size="9">보디올 (형제들과 7일)</text>

        <!-- 시칠리아 섬 & 수라구사 -->
        <polygon points="120,180 150,170 140,200" fill="#1e293b" stroke="#64748b"/>
        <circle cx="140" cy="180" r="4" fill="#38bdf8"/>
        <text x="150" y="185" fill="#cbd5e1" font-size="9">수라구사</text>

        <!-- 멜리데 (몰타) 섬 -->
        <circle cx="130" cy="225" r="6" fill="#f59e0b"/>
        <text x="145" y="228" fill="#fde047" font-size="10.5" font-weight="bold">멜리데 섬 (276명 전원 구조!)</text>
        <text x="145" y="240" fill="#fef08a" font-size="8.5">독사 물림 무사 & 보블리오 부친 치유</text>

        <!-- 그레데 섬 & 미항 -->
        <rect x="280" y="210" width="70" height="12" rx="4" fill="#1e293b" stroke="#64748b"/>
        <circle cx="315" cy="215" r="5" fill="#ef4444"/>
        <text x="315" y="205" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">미항 (Fair Havens)</text>
        <text x="315" y="238" fill="#cbd5e1" font-size="8.5" text-anchor="middle">바울의 출항 만류 경고</text>

        <!-- 유라굴로 광풍 구역 -->
        <ellipse cx="220" cy="210" rx="35" ry="25" fill="#7f1d1d" opacity="0.3" stroke="#ef4444" stroke-dasharray="3,2"/>
        <text x="220" y="208" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">🌪️ 유라굴로 광풍</text>
        <text x="220" y="222" fill="#fecaca" font-size="8.5" text-anchor="middle">14일간 해도 별도 못 봄</text>

        <!-- 루기아 무라 -->
        <circle cx="430" cy="165" r="4" fill="#38bdf8"/>
        <text x="430" y="155" fill="#93c5fd" font-size="9" text-anchor="middle">무라 (알렉산드리아 배 환승)</text>

        <!-- 가이사랴 (출발지) & 시돈 -->
        <circle cx="580" cy="235" r="6" fill="#10b981"/>
        <text x="500" y="240" fill="#6ee7b7" font-size="11" font-weight="bold">1. 가이사랴 출항</text>
        <text x="500" y="253" fill="#cbd5e1" font-size="8.5">아그립바 왕 앞 변론 후 로마행</text>

        <circle cx="580" cy="210" r="4" fill="#38bdf8"/>
        <text x="590" y="213" fill="#cbd5e1" font-size="9">시돈</text>

        <!-- 항해로 점선 패스 (하늘색 -> 광풍 빨강 점선 -> 로마) -->
        <path d="M 580,235 L 580,210 L 510,180 L 430,165 L 350,195 L 315,215 L 260,225 L 130,225 L 140,180 L 120,135 L 95,115 L 80,65" 
              fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
      </g>

      <!-- 하단 설명 바 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10.5" text-anchor="middle">
          "바울아 두려워하지 말라 네가 가이사 앞에 서야 하겠고... (행 27:24)" ➔ 결박당한 죄수의 몸이었으나 승리자로 로마에 입성함!
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [요한계시록 제1장] 소아시아 7교회 실제 순환 지리 지도
// ----------------------------------------------------------------------------
function renderSevenChurchesMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgRev" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080e1c"/>
          <stop offset="100%" stop-color="#190d24"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgRev)"/>

      <!-- 상단 배너 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 요한계시록 제1장: 소아시아 일곱 교회 실제 순환 우편로 지리 지도</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">계 1~3장 7교회</text>

      <!-- 소아시아 및 에게해 지도 -->
      <g transform="translate(30, 60)">
        <!-- 에게해 바다 (서쪽) -->
        <path d="M 0,0 L 220,0 Q 180,150 160,340 L 0,340 Z" fill="#0284c7" opacity="0.3"/>
        <text x="60" y="160" fill="#38bdf8" font-size="12" font-weight="bold">에 게 해 (Aegean Sea)</text>

        <!-- 밧모 섬 (Patmos: 계시를 받은 섬) -->
        <ellipse cx="140" cy="240" rx="12" ry="16" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <circle cx="140" cy="240" r="5" fill="#ef4444"/>
        <text x="80" y="235" fill="#fca5a5" font-size="11" font-weight="bold">밧모 섬 (Patmos)</text>
        <text x="60" y="248" fill="#cbd5e1" font-size="8.5">사도 요한의 유배지</text>

        <!-- 밧모 섬에서 에베소로 향하는 말씀 전달선 -->
        <path d="M 152,240 Q 190,230 220,225" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,3"/>

        <!-- 7교회 순환 로마 가도 (황금색 원형 순환선) -->
        <!-- 에베소 -> 서머나 -> 버가모 -> 두아디라 -> 사데 -> 빌라델비아 -> 라오디게아 -->
        <path d="M 220,225 L 225,160 L 230,85 L 300,105 L 310,170 L 370,185 L 400,240 L 220,225" 
              fill="none" stroke="#f59e0b" stroke-width="3"/>

        <!-- 1. 에베소 (Ephesus: 첫사랑 회복) -->
        <circle cx="220" cy="225" r="7" fill="#ef4444"/>
        <text x="230" y="230" fill="#fca5a5" font-size="11" font-weight="bold">1. 에베소 (Ephesus)</text>
        <text x="230" y="243" fill="#cbd5e1" font-size="8.5">첫사랑을 버렸느니라</text>

        <!-- 2. 서머나 (Smyrna: 죽도록 충성) -->
        <circle cx="225" cy="160" r="7" fill="#10b981"/>
        <text x="235" y="160" fill="#6ee7b7" font-size="11" font-weight="bold">2. 서머나 (Smyrna)</text>
        <text x="235" y="173" fill="#a7f3d0" font-size="8.5">죽도록 충성하라 (칭찬만 받음)</text>

        <!-- 3. 버가모 (Pergamum: 사탄의 권좌) -->
        <circle cx="230" cy="85" r="6" fill="#f59e0b"/>
        <text x="240" y="85" fill="#fde047" font-size="10.5" font-weight="bold">3. 버가모 (Pergamum)</text>
        <text x="240" y="98" fill="#cbd5e1" font-size="8.5">발람의 교훈과 니골라당 책망</text>

        <!-- 4. 두아디라 (Thyatira: 이세벨 용납) -->
        <circle cx="300" cy="105" r="6" fill="#a855f7"/>
        <text x="310" y="105" fill="#d8b4fe" font-size="10.5" font-weight="bold">4. 두아디라 (Thyatira)</text>
        <text x="310" y="118" fill="#cbd5e1" font-size="8.5">이세벨 용납 책망 & 철장 권세</text>

        <!-- 5. 사데 (Sardis: 살았다 하나 죽은 자) -->
        <circle cx="310" cy="170" r="6" fill="#64748b"/>
        <text x="320" y="170" fill="#cbd5e1" font-size="10.5" font-weight="bold">5. 사데 (Sardis)</text>
        <text x="320" y="183" fill="#cbd5e1" font-size="8.5">살았다 하는 이름은 가졌으나 죽음</text>

        <!-- 6. 빌라델비아 (Philadelphia: 열린 문) -->
        <circle cx="370" cy="185" r="7" fill="#10b981"/>
        <text x="380" y="185" fill="#6ee7b7" font-size="11" font-weight="bold">6. 빌라델비아 (Philadelphia)</text>
        <text x="380" y="198" fill="#a7f3d0" font-size="8.5">작은 능력으로 말씀 지킴 (칭찬만 받음)</text>

        <!-- 7. 라오디게아 (Laodicea: 차지도 더웁지도 않음) -->
        <circle cx="400" cy="240" r="6" fill="#ef4444"/>
        <text x="410" y="240" fill="#fca5a5" font-size="10.5" font-weight="bold">7. 라오디게아 (Laodicea)</text>
        <text x="410" y="253" fill="#cbd5e1" font-size="8.5">미지근하여 토해 내치리라</text>
      </g>

      <!-- 하단 범례 카드 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fef08a" font-size="10.5" text-anchor="middle">
          "귀 있는 자는 성령이 교회들에게 하시는 말씀을 들을지어다 이기는 그에게는..." ➔ 각 교회는 오늘날 모든 성도와 교회의 거울입니다.
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [출애굽기 제2장] 시내산 성막(Tabernacle) 입체 구조 & 6대 성물 배치도
// ----------------------------------------------------------------------------
function renderTabernacleDetailSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgTabD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="goldHolyD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgTabD)"/>

      <!-- 상단 타이틀 -->
      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">시내산 성막(Tabernacle) 3단계 구조 & 6대 성물 정밀 평면도</text>
      <text x="530" y="35" fill="#94a3b8" font-size="11">출애굽기 25~40장 설계도</text>

      <!-- 성막 뜰 울타리 -->
      <rect x="30" y="58" width="640" height="340" rx="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8,4"/>
      <text x="50" y="80" fill="#94a3b8" font-size="11" font-weight="bold">성막 뜰 (세마포 울타리 100규빗 × 50규빗)</text>
      <text x="635" y="240" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(90, 635, 240)">동쪽 출입문 (20규빗)</text>

      <!-- 번제단 -->
      <g transform="translate(440, 165)">
        <rect width="105" height="100" rx="6" fill="#78350f" stroke="#ea580c" stroke-width="2"/>
        <text x="52" y="25" fill="#ffedd5" font-size="11" font-weight="bold" text-anchor="middle">번제단 (놋제단)</text>
        <text x="52" y="45" fill="#fde047" font-size="9.5" text-anchor="middle">5 × 5 × 3 규빗</text>
        <text x="52" y="68" fill="#cbd5e1" font-size="9" text-anchor="middle">희생 제물의 피 흘림</text>
        <text x="52" y="85" fill="#fca5a5" font-size="9" text-anchor="middle">십자가 대속의 죽음</text>
      </g>

      <!-- 놋 물두멍 -->
      <g transform="translate(345, 180)">
        <circle cx="35" cy="35" r="32" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="35" y="32" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">놋 물두멍</text>
        <text x="35" y="47" fill="#bae6fd" font-size="9" text-anchor="middle">손발 씻음</text>
        <text x="35" y="82" fill="#93c5fd" font-size="8.5" text-anchor="middle">성도의 성화·회개</text>
      </g>

      <!-- 성소 & 지성소 본체 텐트 -->
      <g transform="translate(55, 115)">
        <rect width="250" height="200" rx="8" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="90" y1="0" x2="90" y2="200" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="5,3"/>
        <text x="95" y="20" fill="#f472b6" font-size="9.5" font-weight="bold">휘장</text>

        <!-- 지성소 -->
        <rect x="8" y="8" width="74" height="184" rx="4" fill="#311042" opacity="0.6"/>
        <text x="45" y="25" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">지성소</text>

        <rect x="15" y="75" width="55" height="50" rx="4" fill="url(#goldHolyD)" stroke="#fef08a"/>
        <text x="42" y="98" fill="#451a03" font-size="9" font-weight="bold" text-anchor="middle">언약궤</text>
        <text x="42" y="112" fill="#78350f" font-size="8" text-anchor="middle">(속죄소 피)</text>
        <text x="42" y="145" fill="#fde047" font-size="7.5" text-anchor="middle">돌판·지팡이·만나</text>

        <!-- 성소 -->
        <text x="175" y="25" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">성소 (Holy Place)</text>
        <!-- 떡상 -->
        <rect x="140" y="40" width="70" height="30" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="175" y="58" fill="#ffffff" font-size="9" text-anchor="middle">진설병 떡상</text>
        <!-- 분향단 -->
        <rect x="100" y="90" width="40" height="35" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="120" y="112" fill="#ffffff" font-size="8.5" text-anchor="middle">분향단</text>
        <!-- 금촛대 -->
        <rect x="140" y="145" width="70" height="30" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="175" y="163" fill="#ffffff" font-size="9" text-anchor="middle">순금 등잔대</text>
      </g>

      <!-- 하단 설명 바 -->
      <g transform="translate(20, 403)">
        <text x="350" y="15" fill="#e2e8f0" font-size="10" text-anchor="middle">
          구속사의 여정: 번제단(칭의·대속) ➔ 물두멍(성화·성결) ➔ 성소(빛과 말씀과 기도) ➔ 지성소(하나님의 보좌와 은혜의 임재)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [레위기 제2장] 이스라엘 7대 절기 구속사 캘린더
// ----------------------------------------------------------------------------
function renderSevenFeastsSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgFeastsD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#070f22"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgFeastsD)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">구속사의 파노라마: 레위기 23장 이스라엘 7대 절기 (Feasts)</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">초림 성취와 재림 완성</text>

      <!-- 봄 절기 4개 -->
      <rect x="20" y="58" width="660" height="165" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
      <rect x="20" y="58" width="660" height="24" rx="8" fill="#047857"/>
      <text x="35" y="74" fill="#ffffff" font-size="11.5" font-weight="bold">🌸 봄 절기 4개 — 예수 그리스도의 초림(First Coming)으로 성취됨</text>

      <g transform="translate(30, 90)">
        <rect width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="10" y="22" fill="#34d399" font-size="11.5" font-weight="bold">1. 유월절</text>
        <text x="10" y="40" fill="#94a3b8" font-size="9.5">유대력 1월 14일</text>
        <text x="10" y="60" fill="#f87171" font-size="10" font-weight="bold">어린양의 피 대속</text>
        <text x="10" y="78" fill="#cbd5e1" font-size="9">죽음의 사자 넘어감</text>
        <rect x="8" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="75" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">✝️ 예수 십자가 죽음</text>

        <rect x="160" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="170" y="22" fill="#34d399" font-size="11.5" font-weight="bold">2. 무교절</text>
        <text x="170" y="40" fill="#94a3b8" font-size="9.5">1월 15~21일</text>
        <text x="170" y="60" fill="#facc15" font-size="10" font-weight="bold">누룩 없는 떡</text>
        <text x="170" y="78" fill="#cbd5e1" font-size="9">죄악 없는 성화의 삶</text>
        <rect x="168" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="235" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">무덤 안식 & 성결</text>

        <rect x="320" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="330" y="22" fill="#34d399" font-size="11.5" font-weight="bold">3. 초실절</text>
        <text x="330" y="40" fill="#94a3b8" font-size="9.5">안식일 다음날</text>
        <text x="330" y="60" fill="#38bdf8" font-size="10" font-weight="bold">보리 첫 이삭 흔듦</text>
        <text x="330" y="78" fill="#cbd5e1" font-size="9">새 생명의 첫 열매</text>
        <rect x="328" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="395" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">👑 부활의 첫 열매</text>

        <rect x="480" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="490" y="22" fill="#34d399" font-size="11.5" font-weight="bold">4. 칠칠절/오순절</text>
        <text x="490" y="40" fill="#94a3b8" font-size="9.5">초실절 후 50일</text>
        <text x="490" y="60" fill="#ec4899" font-size="10" font-weight="bold">밀 수확 & 시내산 율법</text>
        <text x="490" y="78" fill="#cbd5e1" font-size="9">성도들의 첫 추수</text>
        <rect x="488" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="555" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">🔥 성령강림 교회탄생</text>
      </g>

      <!-- 가을 절기 3개 -->
      <rect x="20" y="235" width="660" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <rect x="20" y="235" width="660" height="24" rx="8" fill="#b45309"/>
      <text x="35" y="251" fill="#ffffff" font-size="11.5" font-weight="bold">🍁 가을 절기 3개 — 예수 그리스도의 재림(Second Coming)과 영원한 완성 예표</text>

      <g transform="translate(30, 268)">
        <rect width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="12" y="24" fill="#fbbf24" font-size="12" font-weight="bold">5. 나팔절 (Trumpets)</text>
        <text x="12" y="42" fill="#94a3b8" font-size="9.5">유대력 7월 1일 (신년)</text>
        <text x="12" y="64" fill="#fde047" font-size="10.5" font-weight="bold">양각 나팔을 길게 불어 각성</text>
        <text x="12" y="82" fill="#cbd5e1" font-size="9">회개의 열흘, 재림 경고</text>
        <rect x="10" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="100" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">🎺 주님 재림 호령과 나팔</text>

        <rect x="215" width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="227" y="24" fill="#fbbf24" font-size="12" font-weight="bold">6. 대속죄일 (Atonement)</text>
        <text x="227" y="42" fill="#94a3b8" font-size="9.5">유대력 7월 10일 (금식)</text>
        <text x="227" y="64" fill="#f87171" font-size="10.5" font-weight="bold">아사셀 염소 광야 추방 & 피</text>
        <text x="227" y="82" fill="#cbd5e1" font-size="9">민족 전체의 죄 사함</text>
        <rect x="225" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="315" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">⚖️ 민족적 회개·최후 심판</text>

        <rect x="430" width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="442" y="24" fill="#fbbf24" font-size="12" font-weight="bold">7. 초막절 / 장막절</text>
        <text x="442" y="42" fill="#94a3b8" font-size="9.5">유대력 7월 15~21일</text>
        <text x="442" y="64" fill="#4ade80" font-size="10.5" font-weight="bold">광야 장막 기억 & 모든 수확</text>
        <text x="442" y="82" fill="#cbd5e1" font-size="9">기쁨의 큰 축제, 물 붓기</text>
        <rect x="440" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="530" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">🏰 천년왕국과 영원한 안식</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [여호수아 제2장] 12지파 가나안 기업 분배도 및 6대 도피성 위치도
// ----------------------------------------------------------------------------
function renderTwelveTribesAllotmentSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgTrb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#071224"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgTrb)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">여호수아 13~21장: 가나안 12지파 기업 분배도 & 6대 도피성 위치도</text>
      <text x="550" y="35" fill="#94a3b8" font-size="11">약속의 땅 안식</text>

      <g transform="translate(30, 58)">
        <path d="M 0,0 L 70,0 C 60,80 50,180 30,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="15" y="140" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 15, 140)">지중해</text>

        <ellipse cx="200" cy="50" rx="7" ry="10" fill="#0284c7"/>
        <path d="M 200,60 L 205,190" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
        <ellipse cx="205" cy="250" rx="10" ry="38" fill="#0284c7"/>
        <text x="220" y="250" fill="#93c5fd" font-size="9">사해</text>

        <!-- 서편 지파들 -->
        <rect x="80" y="10" width="55" height="35" rx="3" fill="#047857" opacity="0.8"/>
        <text x="107" y="32" fill="#ffffff" font-size="9.5" text-anchor="middle">아셀</text>
        <rect x="140" y="10" width="55" height="35" rx="3" fill="#1e3a8a" opacity="0.8"/>
        <text x="167" y="32" fill="#ffffff" font-size="9.5" text-anchor="middle">납달리</text>

        <rect x="85" y="50" width="50" height="30" rx="3" fill="#78350f" opacity="0.8"/>
        <text x="110" y="70" fill="#ffffff" font-size="9" text-anchor="middle">스불론</text>
        <rect x="140" y="50" width="55" height="30" rx="3" fill="#065f46" opacity="0.8"/>
        <text x="167" y="70" fill="#ffffff" font-size="9" text-anchor="middle">잇사갈</text>

        <rect x="85" y="85" width="110" height="40" rx="3" fill="#831843" opacity="0.8"/>
        <text x="140" y="110" fill="#ffffff" font-size="10.5" text-anchor="middle">므낫세 서편</text>

        <rect x="85" y="130" width="110" height="35" rx="3" fill="#1e40af" opacity="0.8"/>
        <text x="140" y="152" fill="#ffffff" font-size="10.5" text-anchor="middle">에브라임 지파</text>

        <rect x="65" y="170" width="50" height="30" rx="3" fill="#475569" opacity="0.8"/>
        <text x="90" y="190" fill="#ffffff" font-size="9" text-anchor="middle">단</text>
        <rect x="120" y="170" width="75" height="30" rx="3" fill="#047857" opacity="0.8"/>
        <text x="157" y="190" fill="#ffffff" font-size="9.5" text-anchor="middle">베냐민</text>

        <rect x="70" y="205" width="125" height="80" rx="5" fill="#b45309" opacity="0.85"/>
        <text x="132" y="240" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">👑 유다 지파</text>

        <rect x="90" y="290" width="90" height="40" rx="3" fill="#334155" opacity="0.8"/>
        <text x="135" y="315" fill="#ffffff" font-size="9.5" text-anchor="middle">시므온</text>

        <!-- 동편 지파들 -->
        <rect x="220" y="20" width="95" height="60" rx="3" fill="#831843" opacity="0.8"/>
        <text x="267" y="55" fill="#ffffff" font-size="9.5" text-anchor="middle">므낫세 동편</text>
        <rect x="220" y="85" width="95" height="70" rx="3" fill="#0e7490" opacity="0.8"/>
        <text x="267" y="125" fill="#ffffff" font-size="9.5" text-anchor="middle">갓 지파</text>
        <rect x="220" y="160" width="95" height="75" rx="3" fill="#4338ca" opacity="0.8"/>
        <text x="267" y="200" fill="#ffffff" font-size="9.5" text-anchor="middle">르우벤 지파</text>
      </g>

      <!-- 우측 6대 도피성 패널 -->
      <g transform="translate(365, 58)">
        <rect width="315" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <rect width="315" height="28" rx="8" fill="#0284c7"/>
        <text x="157" y="19" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">🛡️ 6대 도피성 (수 20장)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#e0f2fe" font-size="10" font-weight="bold">부지중에 오살(살인)한 자의 생명 피난처</text>
          <text x="0" y="30" fill="#94a3b8" font-size="9">대제사장이 죽기까지 보호받는 은혜의 처소 (그리스도 예표)</text>

          <rect y="40" width="290" height="60" rx="5" fill="#0f172a" stroke="#0ea5e9"/>
          <text x="10" y="56" fill="#38bdf8" font-size="10" font-weight="bold">📍 요단 서편 3개</text>
          <text x="10" y="72" fill="#cbd5e1" font-size="9">1. 게데스 (납달리 북부)  2. 세겜 (에브라임 중부)</text>
          <text x="10" y="88" fill="#cbd5e1" font-size="9">3. 헤브론 (유다 남부)</text>

          <rect y="106" width="290" height="60" rx="5" fill="#0f172a" stroke="#0ea5e9"/>
          <text x="10" y="122" fill="#38bdf8" font-size="10" font-weight="bold">📍 요단 동편 3개</text>
          <text x="10" y="138" fill="#cbd5e1" font-size="9">4. 골란 (바산 북부)  5. 길르앗 라못 (갓 중부)</text>
          <text x="10" y="154" fill="#cbd5e1" font-size="9">6. 베셀 (르우벤 남부)</text>

          <rect y="172" width="290" height="68" rx="5" fill="#1e1b4b" stroke="#818cf8"/>
          <text x="10" y="190" fill="#c7d2fe" font-size="10" font-weight="bold">⭐ 레위 지파의 48 성읍</text>
          <text x="10" y="206" fill="#e0e7ff" font-size="8.5">레위인은 별도 땅이 없고 12지파 가운데 48개 성읍에</text>
          <text x="10" y="220" fill="#e0e7ff" font-size="8.5">흩어져 살며 율법을 가르치는 영적 교사 역할을 감당함!</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [열왕기 제2장] 솔로몬 성전 입체 구조도
// ----------------------------------------------------------------------------
function renderSolomonTempleSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgSolD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgSolD)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">예루살렘 솔로몬 성전(Solomon's Temple) 입체 구조도</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">왕상 6~8장, 대하 3~5장</text>

      <g transform="translate(30, 60)">
        <rect width="440" height="210" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>

        <!-- 지성소 -->
        <g transform="translate(15, 15)">
          <rect width="130" height="180" rx="5" fill="#451a03" stroke="#f59e0b"/>
          <text x="65" y="28" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">내소 (지성소)</text>
          <text x="65" y="44" fill="#fde68a" font-size="9" text-anchor="middle">20 × 20 규빗</text>
          <ellipse cx="38" cy="90" rx="22" ry="26" fill="#78350f" stroke="#facc15"/>
          <ellipse cx="92" cy="90" rx="22" ry="26" fill="#78350f" stroke="#facc15"/>
          <rect x="47" y="130" width="36" height="30" rx="3" fill="#fbbf24"/>
          <text x="65" y="150" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">언약궤</text>
        </g>

        <!-- 성소 -->
        <g transform="translate(155, 15)">
          <rect width="195" height="180" rx="5" fill="#0f172a" stroke="#38bdf8"/>
          <text x="97" y="28" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">외소 (성소 40규빗)</text>
          <text x="97" y="55" fill="#fef08a" font-size="9.5" text-anchor="middle">금 분향단 (지성소 앞)</text>
          <text x="97" y="85" fill="#67e8f9" font-size="9.5" text-anchor="middle">10개의 순금 촛대 (좌우 5개씩)</text>
          <text x="97" y="115" fill="#fde047" font-size="9.5" text-anchor="middle">10개의 진설병상 (좌우 5개씩)</text>
          <text x="97" y="155" fill="#94a3b8" font-size="8.5" text-anchor="middle">백향목 널판 위 순금 입힘</text>
        </g>

        <!-- 낭실 -->
        <g transform="translate(355, 15)">
          <rect width="75" height="180" rx="5" fill="#1e293b" stroke="#94a3b8"/>
          <text x="37" y="28" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">현관(낭실)</text>
        </g>
      </g>

      <!-- 야긴과 보아스 -->
      <g transform="translate(500, 75)">
        <rect width="170" height="195" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="85" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">두 놋기둥 (높이 18규빗)</text>

        <rect x="15" y="35" width="60" height="115" rx="5" fill="#b45309"/>
        <text x="45" y="55" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">보아스</text>
        <text x="45" y="90" fill="#fef08a" font-size="8" text-anchor="middle">"그에게</text>
        <text x="45" y="103" fill="#fef08a" font-size="8" text-anchor="middle">능력이 있다"</text>

        <rect x="95" y="35" width="60" height="115" rx="5" fill="#b45309"/>
        <text x="125" y="55" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">야긴</text>
        <text x="125" y="90" fill="#fef08a" font-size="8" text-anchor="middle">"그가</text>
        <text x="125" y="103" fill="#fef08a" font-size="8" text-anchor="middle">세우시리라"</text>
      </g>

      <!-- 놋 바다 -->
      <g transform="translate(30, 285)">
        <rect width="640" height="100" rx="8" fill="#0f172a" stroke="#334155"/>
        <ellipse cx="50" cy="50" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="50" y="48" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">놋 바다</text>
        <text x="50" y="60" fill="#e0f2fe" font-size="8" text-anchor="middle">12마리 소 받침</text>
        <text x="100" y="35" fill="#38bdf8" font-size="10.5" font-weight="bold">🌊 제사장들의 몸을 씻는 거대한 물통 (지름 10규빗)</text>
        <text x="100" y="55" fill="#cbd5e1" font-size="9.5">12마리 놋소가 동서남북 3마리씩 바깥을 향해 놋 바다를 떠받침</text>
        <text x="100" y="75" fill="#facc15" font-size="9.5">좌우에 5개씩 배치된 10개의 놋 받침수레와 물두멍: 번제물을 씻는 용도</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [열왕기 제3장] 남북 왕조 39인 왕들과 선지자 연대표
// ----------------------------------------------------------------------------
function renderKingsProphetsTimelineSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgKngD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090d16"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgKngD)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">남북 분열왕국 39인 왕조 & 주요 활동 선지자 연대표</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">B.C. 930 ~ B.C. 586</text>

      <!-- 북이스라엘 -->
      <g transform="translate(20, 58)">
        <rect width="320" height="360" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
        <rect width="320" height="28" rx="8" fill="#991b1b"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">북이스라엘 19대 왕조 (전원 악함, 9개 왕조)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">시조: 여로보암 1세 (단·벧엘 금송아지 제단)</text>
          <text x="0" y="30" fill="#cbd5e1" font-size="9">바아사 ➔ 오므리(사마리아 천도) ➔ 아합</text>

          <rect y="40" width="296" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
          <text x="8" y="58" fill="#fecaca" font-size="10" font-weight="bold">👑 아합 & 이세벨 (바알 숭배 극성)</text>
          <text x="8" y="74" fill="#fde047" font-size="9.5" font-weight="bold">⚡ 엘리야 (갈멜산 850명 대결)</text>
          <text x="8" y="90" fill="#fde047" font-size="9.5" font-weight="bold">⚡ 엘리사 (갑절 영감, 나아만 치유)</text>

          <rect y="116" width="296" height="68" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="8" y="134" fill="#f87171" font-size="10" font-weight="bold">예후 왕조 & 여로보암 2세 (최대 영토)</text>
          <text x="8" y="150" fill="#67e8f9" font-size="9.5" font-weight="bold">📜 요나 (니느웨 회개 선포)</text>
          <text x="8" y="166" fill="#67e8f9" font-size="9.5" font-weight="bold">📜 아모스 (정의 강물) & 호세아 (헤세드 사랑)</text>

          <rect y="192" width="296" height="55" rx="5" fill="#2d1515" stroke="#991b1b"/>
          <text x="8" y="210" fill="#fca5a5" font-size="10" font-weight="bold">💀 B.C. 722년 멸망: 호세아 왕 때</text>
          <text x="8" y="226" fill="#fecaca" font-size="8.5">앗수르 사르곤 2세에 사마리아 함락 & 강제 이주</text>

          <text x="148" y="280" fill="#f87171" font-size="9.5" font-weight="bold" text-anchor="middle">"여로보암의 죄에서 떠나지 아니하였으므로..."</text>
        </g>
      </g>

      <!-- 남유다 -->
      <g transform="translate(360, 58)">
        <rect width="320" height="360" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
        <rect width="320" height="28" rx="8" fill="#1d4ed8"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">남유다 20대 왕조 (다윗 혈통, 선한 왕 8명)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#bfdbfe" font-size="10" font-weight="bold">시조: 르호보암 (솔로몬의 아들, 예루살렘 성전)</text>
          <text x="0" y="30" fill="#cbd5e1" font-size="9">아사(종교개혁), 여호사밧(찬양대 승리)</text>

          <rect y="40" width="296" height="68" rx="5" fill="#082f49" stroke="#0284c7"/>
          <text x="8" y="58" fill="#7dd3fc" font-size="10" font-weight="bold">👑 히스기야 왕 (유월절 회복, 기도 응답)</text>
          <text x="8" y="74" fill="#fde047" font-size="9.5" font-weight="bold">📜 이사야 (메시야 고난 53장 & 새하늘)</text>
          <text x="8" y="90" fill="#fde047" font-size="9.5" font-weight="bold">📜 미가 (베들레헴 에브라다야)</text>

          <rect y="116" width="296" height="68" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="8" y="134" fill="#60a5fa" font-size="10" font-weight="bold">👑 요시야 왕 (율법책 발견 대부흥 개혁)</text>
          <text x="8" y="150" fill="#fde047" font-size="9.5" font-weight="bold">📜 예레미야 (눈물의 선지자, 새 언약)</text>
          <text x="8" y="166" fill="#fde047" font-size="9.5" font-weight="bold">📜 하박국 (의인은 믿음으로) & 스바냐</text>

          <rect y="192" width="296" height="55" rx="5" fill="#1e1b4b" stroke="#6366f1"/>
          <text x="8" y="210" fill="#c7d2fe" font-size="10" font-weight="bold">⛓️ B.C. 586년 멸망: 시드기야 왕 때</text>
          <text x="8" y="226" fill="#e0e7ff" font-size="8.5">바벨론 70년 유수 ➔ 다니엘·에스겔 활동</text>

          <text x="148" y="280" fill="#60a5fa" font-size="9.5" font-weight="bold" text-anchor="middle">"다윗의 등불을 끄지 아니하시겠다는 언약 보존"</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [다니엘 제1장] 4대 제국 신상 환상
// ----------------------------------------------------------------------------
function renderDanielFourEmpiresStatueSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgStatD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgStatD)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">다니엘 2장: 느부갓네살의 거대한 신상 환상 & 4대 제국의 흥망성쇠</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">단 2:31~45 역사 파노라마</text>

      <g transform="translate(50, 65)">
        <!-- 신상 그래픽 -->
        <rect x="60" y="0" width="70" height="50" rx="8" fill="#eab308" stroke="#fef08a"/>
        <text x="95" y="30" fill="#713f12" font-size="11.5" font-weight="bold" text-anchor="middle">금 머리</text>

        <rect x="40" y="55" width="110" height="65" rx="6" fill="#94a3b8" stroke="#f1f5f9"/>
        <text x="95" y="92" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">은 가슴·팔</text>

        <rect x="55" y="125" width="80" height="70" rx="6" fill="#d97706" stroke="#fed7aa"/>
        <text x="95" y="165" fill="#451a03" font-size="11" font-weight="bold" text-anchor="middle">놋 배·넓적다리</text>

        <rect x="58" y="200" width="34" height="90" rx="3" fill="#475569" stroke="#94a3b8"/>
        <rect x="98" y="200" width="34" height="90" rx="3" fill="#475569" stroke="#94a3b8"/>
        <text x="95" y="250" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">철 종아리</text>

        <rect x="50" y="295" width="42" height="35" rx="3" fill="#78350f" stroke="#ea580c"/>
        <rect x="98" y="295" width="42" height="35" rx="3" fill="#78350f" stroke="#ea580c"/>
        <text x="95" y="318" fill="#ffedd5" font-size="9.5" font-weight="bold" text-anchor="middle">철+진흙 발</text>
      </g>

      <g transform="translate(250, 60)">
        <rect y="0" width="410" height="58" rx="6" fill="#1e293b" stroke="#eab308"/>
        <text x="12" y="22" fill="#fde047" font-size="11.5" font-weight="bold">1. 바벨론 (B.C. 605~539) — 순금 머리</text>
        <text x="12" y="38" fill="#cbd5e1" font-size="9.5">느부갓네살의 황금 영광 (단 7장 사자 환상 대응)</text>

        <rect y="65" width="410" height="58" rx="6" fill="#1e293b" stroke="#94a3b8"/>
        <text x="12" y="87" fill="#e2e8f0" font-size="11.5" font-weight="bold">2. 메대·페르시아 (B.C. 539~331) — 은 가슴·팔</text>
        <text x="12" y="103" fill="#cbd5e1" font-size="9.5">고레스 왕의 법치, 두 팔 연합 (단 7장 곰 대응)</text>

        <rect y="130" width="410" height="58" rx="6" fill="#1e293b" stroke="#d97706"/>
        <text x="12" y="152" fill="#fbbf24" font-size="11.5" font-weight="bold">3. 헬라 그리스 (B.C. 331~146) — 놋 배·넓적다리</text>
        <text x="12" y="168" fill="#cbd5e1" font-size="9.5">알렉산더 대왕의 신속한 정복 (단 7장 표범 대응)</text>

        <rect y="195" width="410" height="65" rx="6" fill="#1e293b" stroke="#64748b"/>
        <text x="12" y="217" fill="#93c5fd" font-size="11.5" font-weight="bold">4. 로마 제국 & 열국 (B.C. 146~재림) — 철 다리</text>
        <text x="12" y="233" fill="#cbd5e1" font-size="9.5">철 같은 군사력과 법률, 나뉜 열국 (단 7장 넷째 짐승)</text>

        <rect y="268" width="410" height="85" rx="6" fill="#450a0a" stroke="#f59e0b" stroke-width="2"/>
        <text x="12" y="292" fill="#fef08a" font-size="12.5" font-weight="bold">👑 손대지 아니한 뜨인 돌 (하나님 나라)</text>
        <text x="12" y="310" fill="#fef3c7" font-size="10">우상을 쳐부수고 온 세상에 가득 찬 영원한 메시야 왕국!</text>
        <text x="12" y="328" fill="#38bdf8" font-size="10" font-weight="bold">"이 나라는 영원히 망하지도 아니할 것이요" (단 2:44)</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사도행전 제1장] 사도 바울 1·2차 전도여행 지도
// ----------------------------------------------------------------------------
function renderPaulFirstSecondSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgP12" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgP12)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 사도행전 제1장: 사도 바울의 제1차 & 제2차 지중해 전도여행 지도</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">행 13~18장 소아시아·유럽</text>

      <g transform="translate(30, 60)">
        <path d="M 0,140 Q 150,120 300,150 T 640,170 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>
        <text x="300" y="280" fill="#38bdf8" font-size="13" font-weight="bold" opacity="0.5">지 중 해</text>

        <!-- 1차 여행선 (녹색 실선) -->
        <path d="M 590,210 L 550,220 L 490,230 L 450,170 L 420,135 L 445,145 L 460,165 L 485,170" 
              fill="none" stroke="#10b981" stroke-width="3"/>

        <!-- 2차 여행선 (황금 점선) -->
        <path d="M 590,210 L 510,170 L 460,165 L 380,90 L 290,55 L 270,75 L 260,90 L 280,155 L 260,165 L 370,155 L 560,265 L 590,210" 
              fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>

        <!-- 안디옥 본부 -->
        <circle cx="590" cy="210" r="6" fill="#ef4444"/>
        <text x="600" y="215" fill="#f87171" font-size="10.5" font-weight="bold">수리아 안디옥 (파송)</text>

        <circle cx="420" cy="135" r="4" fill="#34d399"/>
        <text x="360" y="130" fill="#a7f3d0" font-size="9">비시디아 안디옥</text>

        <circle cx="380" cy="90" r="5" fill="#38bdf8"/>
        <text x="390" y="88" fill="#38bdf8" font-size="10" font-weight="bold">드로아 (마게도냐 환상!)</text>

        <circle cx="290" cy="55" r="5" fill="#f59e0b"/>
        <text x="220" y="50" fill="#fde047" font-size="10" font-weight="bold">빌립보 (유럽 첫 성)</text>

        <circle cx="270" cy="75" r="4" fill="#f59e0b"/>
        <text x="195" y="75" fill="#fde047" font-size="9">데살로니가</text>

        <circle cx="260" cy="165" r="5" fill="#ec4899"/>
        <text x="175" y="170" fill="#f472b6" font-size="10" font-weight="bold">고린도 (18개월 사역)</text>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10" text-anchor="middle">
          초록선: 1차(구브로·갈라디아) | 황금점선: 2차(드로아 환상 건너와 우리를 도우라 ➔ 빌립보·데살로니가·고린도 유럽 복음화)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사도행전 제2장] 바울 3차 전도여행 지도
// ----------------------------------------------------------------------------
function renderPaulThirdRomeSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="mapBgP3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="100%" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mapBgP3)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 사도행전 제2장: 사도 바울의 제3차 전도여행 (에베소 3년 대부흥) 지도</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">행 18:23~21:17</text>

      <g transform="translate(30, 60)">
        <path d="M 0,140 Q 200,120 400,150 T 640,170 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>

        <!-- 3차 전도여행로 (보라색 굵은 실선) -->
        <path d="M 590,210 L 480,165 L 400,150 L 310,80 L 295,155 L 405,175 L 560,265" 
              fill="none" stroke="#c084fc" stroke-width="3.5"/>

        <circle cx="590" cy="210" r="5" fill="#ef4444"/>
        <text x="600" y="215" fill="#f87171" font-size="10">안디옥 출발</text>

        <!-- 에베소 두란노 서원 거점 -->
        <circle cx="400" cy="150" r="8" fill="#a855f7"/>
        <circle cx="400" cy="150" r="14" fill="#a855f7" opacity="0.25"/>
        <text x="415" y="145" fill="#e9d5ff" font-size="12" font-weight="bold">에베소 (두란노 서원 3년)</text>
        <text x="415" y="160" fill="#f5d0fe" font-size="9">아시아 모든 자가 주의 말씀 들음</text>

        <!-- 밀레도 -->
        <circle cx="405" cy="175" r="5" fill="#a855f7"/>
        <text x="415" y="180" fill="#cbd5e1" font-size="9.5">밀레도 (장로 고별 설교)</text>

        <!-- 예루살렘 체포 -->
        <circle cx="560" cy="265" r="6" fill="#f43f5e"/>
        <text x="480" y="275" fill="#fda4af" font-size="10" font-weight="bold">예루살렘 (체포 결박)</text>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10" text-anchor="middle">
          "나의 달려갈 길과 주 예수께 받은 사명 곧 하나님의 은혜의 복음을 증언하는 일을 마치려 함에는..." (행 20:24)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [요한계시록 제2장] 3대 재앙 사이클 & 새 예루살렘 성
// ----------------------------------------------------------------------------
function renderRevelationSealsTrumpetsBowlsSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgRevD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050814"/>
          <stop offset="100%" stop-color="#1e1026"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgRevD)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">요한계시록: 3대 심판 사이클 (7인·7나팔·7대접) ➔ 새 하늘과 새 땅</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">계 6~22장 종말 완성</text>

      <g transform="translate(20, 58)">
        <!-- 7인 -->
        <rect width="210" height="215" rx="6" fill="#1e293b" stroke="#60a5fa"/>
        <rect width="210" height="25" rx="6" fill="#1d4ed8"/>
        <text x="105" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">1. 일곱 인 (계 6-8장)</text>
        <g transform="translate(8, 34)">
          <text x="0" y="16" fill="#cbd5e1" font-size="9">· 1~4인: 4색 말 (정복, 전쟁, 기근, 사망)</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· 5인: 순교자 탄원 기도</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· 6인: 해 어두워짐, 별 떨어짐</text>
          <text x="0" y="66" fill="#93c5fd" font-size="9" font-weight="bold">삽경: 144,000 인침 (계 7장)</text>
          <text x="0" y="82" fill="#facc15" font-size="9">· 7인 ➔ 7나팔로 전개!</text>
        </g>

        <!-- 7나팔 -->
        <rect x="225" width="210" height="215" rx="6" fill="#1e293b" stroke="#f59e0b"/>
        <rect x="225" width="210" height="25" rx="6" fill="#b45309"/>
        <text x="330" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">2. 일곱 나팔 (계 8-11장)</text>
        <g transform="translate(233, 34)">
          <text x="0" y="16" fill="#cbd5e1" font-size="9">· 1~4나팔: 땅·바다·강·해 1/3 타격</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· 5나팔(화1): 무저갱 황충 재앙</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· 6나팔(화2): 유브라데 2만만 기마대</text>
          <text x="0" y="66" fill="#fde68a" font-size="9" font-weight="bold">삽경: 두 증인 순교와 부활 (계 11장)</text>
          <text x="0" y="82" fill="#facc15" font-size="9">· 7나팔 ➔ 세상 나라가 그리스도 나라로!</text>
        </g>

        <!-- 7대접 -->
        <rect x="450" width="210" height="215" rx="6" fill="#450a0a" stroke="#ef4444"/>
        <rect x="450" width="210" height="25" rx="6" fill="#991b1b"/>
        <text x="555" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">3. 일곱 대접 (계 15-16장)</text>
        <g transform="translate(458, 34)">
          <text x="0" y="16" fill="#fecaca" font-size="9">· 1~5대접: 악창, 피 바다, 해의 태움</text>
          <text x="0" y="32" fill="#fecaca" font-size="9">· 6대접: 유브라데 마름, 아마겟돈 결집</text>
          <text x="0" y="50" fill="#ffffff" font-size="10" font-weight="bold">· 7대접: "되었다!" (It is done!)</text>
          <text x="0" y="68" fill="#fca5a5" font-size="9">큰 성 바벨론 멸망 & 백보좌 심판</text>
          <text x="0" y="84" fill="#ffffff" font-size="9" font-weight="bold">사탄 불못 심판</text>
        </g>
      </g>

      <!-- 새 예루살렘 -->
      <g transform="translate(20, 285)">
        <rect width="660" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">
          👑 거룩한 성 새 예루살렘 (New Jerusalem, 계 21-22장)
        </text>
        <text x="30" y="50" fill="#38bdf8" font-size="10" font-weight="bold">🕊️ "다시는 사망이 없고 애통하는 것이나 아픈 것이 다시 있지 아니하리니"</text>
        <text x="30" y="68" fill="#cbd5e1" font-size="9.5">· 어린양의 보좌로부터 흐르는 수정 같은 생명수의 강 & 좌우 12가지 열매 맺는 생명나무</text>
        <text x="30" y="86" fill="#facc15" font-size="10" font-weight="bold">"아멘 주 예수여 오시옵소서 (마라나타!)"</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [열왕기·역대기 제3장] 남북 분열왕국 39인 왕조 & 활동 선지자 연대표 매트릭스
// ----------------------------------------------------------------------------
function renderKingsProphetsTimelineSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgKingsKP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090d16"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgKingsKP)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">👑 열왕기·역대기: 남북 분열왕국 39인 왕조 &amp; 활동 선지자 연대표</text>
      <text x="510" y="35" fill="#94a3b8" font-size="10.5">B.C. 931 ~ B.C. 586 (345년간)</text>

      <!-- 상단: 북이스라엘 (19대 왕, 모두 악함 ➔ B.C. 722 앗수르 멸망) -->
      <g transform="translate(20, 58)">
        <rect width="660" height="150" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
        <rect width="660" height="24" rx="8" fill="#4338ca"/>
        <text x="15" y="17" fill="#ffffff" font-size="11" font-weight="bold">🟦 북이스라엘 왕국 (19대 왕, 9왕조 전원 악함 ➔ B.C. 722 앗수르 멸망)</text>
        <text x="540" y="17" fill="#c7d2fe" font-size="10">수도: 사마리아 (단·벧엘 금송아지)</text>

        <g transform="translate(15, 34)">
          <rect width="95" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="47" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">여로보암 1세</text>
          <text x="47" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">금송아지 우상 (죄의 원흉)</text>

          <rect x="105" width="95" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="152" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">오므리 왕조</text>
          <text x="152" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">사마리아 천도 수도건설</text>

          <rect x="210" width="105" height="42" rx="4" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="262" y="18" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle">아합 &amp; 이세벨</text>
          <text x="262" y="32" fill="#fecdd3" font-size="8.5" text-anchor="middle">바알·아세라 국교화 (극악)</text>

          <rect x="325" width="105" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="377" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">예후 왕조</text>
          <text x="377" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">아합 가문 심판 4대 언약</text>

          <rect x="440" width="100" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="490" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">여로보암 2세</text>
          <text x="490" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">경제 번영 &amp; 영적 부패</text>

          <rect x="550" width="85" height="42" rx="4" fill="#1e1b4b" stroke="#ef4444"/>
          <text x="592" y="18" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">호세아 (마지막)</text>
          <text x="592" y="32" fill="#fca5a5" font-size="8.5" text-anchor="middle">B.C. 722 멸망</text>
        </g>

        <!-- 북이스라엘 활동 선지자 -->
        <g transform="translate(15, 88)">
          <rect width="630" height="50" rx="5" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="18" fill="#38bdf8" font-size="9.5" font-weight="bold">⚡ 북왕국 경고 선지자군:</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">아히야</strong>(열 지파 분열 예언) ➔ <strong class="text-amber-300">엘리야</strong>(갈멜산 불의 대결, 바알 타파) ➔ <strong class="text-amber-300">엘리사</strong>(갑절의 영감, 수많은 이적)
          </text>
          <text x="12" y="47" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">요나</strong>(니느웨 회개 선포) ➔ <strong class="text-amber-300">아모스</strong>("정의를 물 같이") ➔ <strong class="text-amber-300">호세아</strong>(음란한 고멜과 하나님의 찢어지는 긍휼 사랑)
          </text>
        </g>
      </g>

      <!-- 하단: 남유다 (20대 왕, 다윗 왕통 단일계보 ➔ B.C. 586 바벨론 멸망) -->
      <g transform="translate(20, 220)">
        <rect width="660" height="165" rx="8" fill="#451a03" stroke="#d97706" stroke-width="1.5"/>
        <rect width="660" height="24" rx="8" fill="#92400e"/>
        <text x="15" y="17" fill="#ffffff" font-size="11" font-weight="bold">🟥 남유다 왕국 (20대 왕, 다윗 언약 단일 왕조 ➔ B.C. 586 바벨론 멸망)</text>
        <text x="535" y="17" fill="#fde68a" font-size="10">수도: 예루살렘 (솔로몬 성전)</text>

        <g transform="translate(15, 34)">
          <rect width="85" height="42" rx="4" fill="#78350f" stroke="#f59e0b"/>
          <text x="42" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">르호보암</text>
          <text x="42" y="32" fill="#fed7aa" font-size="8.5" text-anchor="middle">솔로몬 아들(분열)</text>

          <rect x="95" width="85" height="42" rx="4" fill="#78350f" stroke="#10b981"/>
          <text x="137" y="18" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">아사 &amp; 여호사밧</text>
          <text x="137" y="32" fill="#a7f3d0" font-size="8.5" text-anchor="middle">종교개혁 &amp; 율법교육</text>

          <rect x="190" width="85" height="42" rx="4" fill="#78350f" stroke="#f59e0b"/>
          <text x="232" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">웃시야</text>
          <text x="232" y="32" fill="#fed7aa" font-size="8.5" text-anchor="middle">52년 치세 국력신장</text>

          <rect x="285" width="105" height="42" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="337" y="18" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">히스기야 (선왕)</text>
          <text x="337" y="32" fill="#d1fae5" font-size="8.5" text-anchor="middle">앗수르 격퇴·15년 연장</text>

          <rect x="400" width="85" height="42" rx="4" fill="#7f1d1d" stroke="#f87171"/>
          <text x="442" y="18" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">므낫세 (악왕)</text>
          <text x="442" y="32" fill="#fecaca" font-size="8.5" text-anchor="middle">55년 우상·멸망 자초</text>

          <rect x="495" width="100" height="42" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="545" y="18" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">요시야 (개혁)</text>
          <text x="545" y="32" fill="#d1fae5" font-size="8.5" text-anchor="middle">율법책 발견·유월절</text>

          <rect x="605" width="45" height="42" rx="4" fill="#7f1d1d" stroke="#ef4444"/>
          <text x="627" y="18" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">시드기야</text>
          <text x="627" y="32" fill="#ffffff" font-size="8" text-anchor="middle">B.C.586</text>
        </g>

        <!-- 남유다 활동 선지자 -->
        <g transform="translate(15, 88)">
          <rect width="630" height="65" rx="5" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="18" fill="#f59e0b" font-size="9.5" font-weight="bold">📜 남유다 파송 대·소선지자군:</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">이사야</strong>(메시아 고난의 종 사 53장) &amp; <strong class="text-amber-300">미가</strong>(베들레헴 탄생 미 5:2) ➔ <strong class="text-amber-300">스바냐·나훔·하박국</strong>("오직 의인은 믿음으로")
          </text>
          <text x="12" y="48" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">예레미야</strong>(눈물의 선지자, 새 언약 렘 31장, 70년 유수 예언) ➔ <strong class="text-amber-300">다니엘 &amp; 에스겔</strong>(바벨론 포로기 환상과 회복)
          </text>
          <text x="12" y="61" fill="#38bdf8" font-size="9">
            · 포로 귀환 후 선지자: <strong class="text-emerald-400">학개 &amp; 스가랴</strong>(스룹바벨 성전 재건 독려) ➔ <strong class="text-emerald-400">말라기</strong>(엘리야의 도래와 메시아 대망)
          </text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          💡 에스라 관점: "이스라엘이 멸망한 것은 군사력이 약해서가 아니라, 하나님의 계명을 버리고 우상을 숭배했기 때문이다!"
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사도행전 제3장] 바울의 로마 압송 항해로 & 유라굴로 광풍 극복 지도
// ----------------------------------------------------------------------------
function renderPaulRomeVoyageMapSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgRomeVoyage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgRomeVoyage)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🗺️ 사도행전 제3장: 바울의 로마 압송 항해로 &amp; 유라굴로 광풍 지도</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">행 27:1 ~ 28:31</text>

      <g transform="translate(30, 55)">
        <!-- 지중해 바다 배경 -->
        <path d="M 0,100 Q 150,80 300,100 T 640,110 L 640,335 L 0,335 Z" fill="#0369a1" opacity="0.22"/>
        <text x="280" y="250" fill="#38bdf8" font-size="14" font-weight="bold" opacity="0.4">지 중 해 (Mediterranean Sea)</text>

        <!-- 항해 경로 선 (붉은색/황금 점선) -->
        <path d="M 610,240 L 590,210 L 530,170 L 450,165 L 390,185 L 340,195 L 300,225 L 240,240 L 190,200 L 160,140 L 140,80" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>

        <!-- 1. 가이사랴 출발 -->
        <circle cx="610" cy="240" r="5" fill="#10b981"/>
        <text x="560" y="258" fill="#a7f3d0" font-size="9.5" font-weight="bold">가이사랴 (출항)</text>

        <!-- 2. 시돈 & 무라 -->
        <circle cx="590" cy="210" r="4" fill="#38bdf8"/>
        <text x="598" y="210" fill="#bae6fd" font-size="9">시돈</text>

        <circle cx="530" cy="170" r="4" fill="#38bdf8"/>
        <text x="500" y="160" fill="#bae6fd" font-size="9">무라 (알렉산드리아 배 환승)</text>

        <!-- 3. 그레데 미항 -->
        <circle cx="390" cy="185" r="5" fill="#f59e0b"/>
        <text x="360" y="200" fill="#fde047" font-size="9.5" font-weight="bold">그레데 미항 (출항 강행)</text>

        <!-- 4. 유라굴로 광풍 지대 -->
        <g transform="translate(300, 190)">
          <circle cx="0" cy="0" r="22" fill="#ef4444" opacity="0.25"/>
          <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.4"/>
          <text x="-40" y="-12" fill="#f87171" font-size="9.5" font-weight="black">🌪️ 유라굴로 광풍</text>
          <text x="-45" y="28" fill="#fca5a5" font-size="8.5">14일간 표류 &amp; 구원의 여망 소멸</text>
        </g>

        <!-- 5. 멜리데(몰타) 섬 난파 & 276명 전원 생환 -->
        <g transform="translate(240, 240)">
          <circle cx="0" cy="0" r="7" fill="#10b981"/>
          <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.3"/>
          <text x="-35" y="20" fill="#34d399" font-size="10.5" font-weight="black">멜리데(몰타) 섬</text>
          <text x="-45" y="33" fill="#a7f3d0" font-size="8.5">배 난파, 276명 전원 생환 기적!</text>
          <text x="-45" y="44" fill="#fde047" font-size="8">독사 물림 극복 &amp; 보블리오 부친 치유</text>
        </g>

        <!-- 6. 수라구사 & 레기온 -->
        <circle cx="190" cy="200" r="4" fill="#38bdf8"/>
        <text x="135" y="205" fill="#bae6fd" font-size="9">수라구사 (시칠리아)</text>

        <circle cx="160" cy="140" r="4" fill="#38bdf8"/>
        <text x="170" y="145" fill="#bae6fd" font-size="9">보디올 (성도 영접)</text>

        <!-- 7. 로마 도착 -->
        <g transform="translate(140, 80)">
          <circle cx="0" cy="0" r="8" fill="#ef4444"/>
          <circle cx="0" cy="0" r="16" fill="#ef4444" opacity="0.3"/>
          <text x="-80" y="5" fill="#fca5a5" font-size="12" font-weight="black">👑 로마 (Rome)</text>
          <text x="-120" y="20" fill="#fed7aa" font-size="9">압비오 광장 영접 ➔ 셋집 2년 거주</text>
          <text x="-120" y="32" fill="#38bdf8" font-size="8.5" font-weight="bold">담대하게 거침없이 하나님 나라 전파!</text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          🕊️ "바울아 두려워하지 말라 네가 가이사 앞에 서야 하겠고... 나는 내게 말씀하신 그대로 되리라고 하나님을 믿노라" (행 27:24-25)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제4장] 천지창조 6일의 거룩한 질서와 안식 (Creation Order)
// ----------------------------------------------------------------------------
function renderGenesisCreationSixDaysSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgGenCreation" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050d1a"/>
          <stop offset="100%" stop-color="#111f38"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGenCreation)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🌿 창세기 제4장: 천지창조 6일의 거룩한 질서와 안식 (Creation Order)</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">창 1:1 ~ 2:3 "보시기에 심히 좋았더라"</text>

      <!-- 3대 형성(Forming) vs 3대 충만(Filling) 대칭 매트릭스 -->
      <g transform="translate(20, 56)">
        
        <!-- 좌측 컬럼: 영역의 형성 (Days 1 ~ 3 Forming) -->
        <rect width="320" height="260" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#1d4ed8"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">🏗️ 1~3일: 틀을 만드심 (Forming / 영역 조성)</text>

        <!-- 제1일 -->
        <g transform="translate(10, 35)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">제1일: 빛과 어둠의 나뉨 (시간의 질서)</text>
          <text x="12" y="34" fill="#fde047" font-size="9.5">"빛이 있으라 하시니 빛이 있었고..."</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 빛을 낮이라 칭하시고 어둠을 밤이라 칭하심 (창 1:3-5)</text>
        </g>

        <!-- 제2일 -->
        <g transform="translate(10, 110)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">제2일: 궁창(하늘) 위의 물과 아래의 물</text>
          <text x="12" y="34" fill="#38bdf8" font-size="9.5">"물 가운데에 궁창이 있어 물과 물로 나뉘라"</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 대기권과 생명 호흡의 공간(하늘) 마련 (창 1:6-8)</text>
        </g>

        <!-- 제3일 -->
        <g transform="translate(10, 185)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">제3일: 뭍(땅)과 바다의 나뉨 &amp; 식물</text>
          <text x="12" y="34" fill="#4ade80" font-size="9.5">"천하의 물이 한 곳으로 모이고 뭍이 드러나라"</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 각기 종류대로 씨 가진 채소와 과목 창조 (창 1:9-13)</text>
        </g>

        <!-- 우측 컬럼: 공간의 충만 (Days 4 ~ 6 Filling) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="260" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#b45309"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">✨ 4~6일: 공간을 채우심 (Filling / 피조물 충만)</text>

          <!-- 제4일 (1일 대응) -->
          <g transform="translate(10, 35)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">제4일: 해, 달, 별 광명체 (1일의 빛을 채움)</text>
            <text x="12" y="34" fill="#facc15" font-size="9.5">"낮과 밤을 주관하고 계절과 날과 해를 이루라"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 큰 광명체(해), 작은 광명체(달)와 별들 (창 1:14-19)</text>
          </g>

          <!-- 제5일 (2일 대응) -->
          <g transform="translate(10, 110)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">제5일: 공중의 새 &amp; 바다 물고기 (2일 궁창 채움)</text>
            <text x="12" y="34" fill="#38bdf8" font-size="9.5">"물들은 생물로 번성하게 하라 땅 위 하늘에는 새가 날으라"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 생육하고 번성하여 충만하라 첫 축복 (창 1:20-23)</text>
          </g>

          <!-- 제6일 (3일 대응) -->
          <g transform="translate(10, 185)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">제6일: 육상 동물 &amp; 사람 (3일 땅을 채움)</text>
            <text x="12" y="34" fill="#f43f5e" font-size="9.5">👑 "우리의 형상을 따라 우리의 모양대로 사람을 만들고"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· 생육 번성 땅에 충만 정복 다스림의 청지기 사명 (창 1:24-31)</text>
          </g>
        </g>
      </g>

      <!-- 제7일 안식의 축복 -->
      <g transform="translate(20, 326)">
        <rect width="660" height="65" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="24" fill="#a7f3d0" font-size="12.5" font-weight="black" text-anchor="middle">
          🕊️ 제7일: 창조 사역을 마치시고 안식하심 (Sabbath Blessing &amp; Sanctification)
        </text>
        <text x="330" y="44" fill="#ffffff" font-size="10" text-anchor="middle">
          "하나님이 그가 하시던 일을 일곱째 날에 마치시니... 그 일곱째 날을 복되게 하사 거룩하게 하셨으니" (창 2:2-3)
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          💡 에스라 관점: 1~3일(틀/영역)과 4~6일(내용/채움)의 완벽한 짝을 통해 창조주 하나님의 질서와 지혜를 증거합니다.
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제5장] 인류의 타락과 여자의 후손 (원시복음, Protoevangelium)
// ----------------------------------------------------------------------------
function renderGenesisFallProtoevangeliumSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgGenFall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18040a"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGenFall)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🍎 창세기 제5장: 인류의 타락과 여자의 후손 (원시복음, Protoevangelium)</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">창세기 3장: 죄의 기원과 첫 구원 약속</text>

      <g transform="translate(20, 58)">
        <!-- 1단계: 유혹과 선악과 불순종 -->
        <rect width="210" height="255" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <rect width="210" height="24" rx="8" fill="#3730a3"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. 유혹과 선악과 불순종</text>
        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#f87171" font-size="10" font-weight="bold">🐍 사탄의 거짓말과 의심 조장</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· "결코 죽지 아니하리라"</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· "너희 눈이 밝아져 하나님 같이 되리라"</text>
          <text x="0" y="70" fill="#fde047" font-size="10" font-weight="bold">🍎 보암직·먹음직·탐스러운 욕망</text>
          <text x="0" y="86" fill="#cbd5e1" font-size="9">· 하나님의 말씀을 상대화하고 자기가 삶의 주인이 되려는 교만</text>
          <text x="0" y="112" fill="#f43f5e" font-size="10" font-weight="bold">💔 영적 단절과 수치심</text>
          <text x="0" y="128" fill="#cbd5e1" font-size="9">· 벗었으므로 두려워 숨음</text>
          <text x="0" y="144" fill="#cbd5e1" font-size="9">· 무화과나무 잎 치마 (인간적 노력의 헛됨)</text>
          <text x="0" y="166" fill="#94a3b8" font-size="9">· 책임 전가: 아담 ➔ 하와 ➔ 뱀</text>
        </g>

        <!-- 2단계: 공의로운 선고와 징벌 -->
        <g transform="translate(225, 0)">
          <rect width="210" height="255" rx="8" fill="#450a0a" stroke="#ef4444"/>
          <rect width="210" height="24" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. 공의로운 심판 선고</text>
          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ 뱀에 대한 저주</text>
            <text x="0" y="32" fill="#fecaca" font-size="9">· 모든 가축보다 더욱 저주를 받아 배로 기어 다니고 흙을 먹음</text>
            <text x="0" y="58" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ 여자에 대한 선고</text>
            <text x="0" y="74" fill="#fecaca" font-size="9">· 임신과 해산의 큰 고통</text>
            <text x="0" y="90" fill="#fecaca" font-size="9">· 남편을 원하고 다스림을 받음</text>
            <text x="0" y="116" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ 남자와 땅에 대한 선고</text>
            <text x="0" y="132" fill="#fecaca" font-size="9">· 땅이 가시덤불과 엉겅퀴를 냄</text>
            <text x="0" y="148" fill="#fecaca" font-size="9">· 얼굴에 땀을 흘려야 먹을 것</text>
            <text x="0" y="170" fill="#ffffff" font-size="9.5" font-weight="bold">"너는 흙이니 흙으로 돌아갈 것이니라"</text>
          </g>
        </g>

        <!-- 3단계: 원시복음(창 3:15) & 가죽옷 -->
        <g transform="translate(450, 0)">
          <rect width="210" height="255" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <rect width="210" height="24" rx="8" fill="#047857"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. 원시복음 &amp; 대속의 은혜</text>
          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">🌟 원시복음 (창 3:15)</text>
            <text x="0" y="32" fill="#ecfdf5" font-size="9">"내가 너로 여자와 원수가 되게 하고 네 후손도 여자의 후손과 원수가 되게 하리니"</text>
            <text x="0" y="62" fill="#fde047" font-size="9.5" font-weight="bold">"여자의 후손은 네 머리를 상하게 할 것이요 너는 그의 발꿈치를 상하게 할 것이니라"</text>
            <text x="0" y="96" fill="#6ee7b7" font-size="9">➔ 그리스도의 동정녀 탄생과 십자가 고난, 사탄의 완전한 궤멸 예언!</text>
            <text x="0" y="128" fill="#a7f3d0" font-size="10" font-weight="bold">🐑 가죽옷의 은혜 (창 3:21)</text>
            <text x="0" y="144" fill="#ecfdf5" font-size="9">· 하나님이 어린양을 잡으셔서 가죽옷을 지어 입히심</text>
            <text x="0" y="166" fill="#fde047" font-size="8.5" font-weight="bold">"피 흘림이 없은즉 사함이 없느니라" (히 9:22)</text>
          </g>
        </g>
      </g>

      <!-- 하단 요약 배너 -->
      <g transform="translate(20, 325)">
        <rect width="660" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">
          ✝️ 인류 타락의 절망 속에서 선포된 하나님의 첫 번째 구속사 언약
        </text>
        <text x="330" y="44" fill="#e2e8f0" font-size="10" text-anchor="middle">
          인간의 첫 죄가 발생한 바로 그 현장에서, 하나님은 이미 독생자 예수 그리스도의 십자가 대속 승리를 계획하셨습니다.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          창 3:15(원시복음) ➔ 창 12:3(아브라함 언약) ➔ 삼하 7:12(다윗 언약) ➔ 갈 4:4(때가 차매 여자에게서 나심) 성취!
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [창세기 제6장] 믿음의 조상 아브라함과 이스라엘 12지파 가계도
// ----------------------------------------------------------------------------
function renderPatriarchsFamilyTreeSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgGenTree" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#091428"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGenTree)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">📜 창세기 제6장: 믿음의 조상 아브라함과 이스라엘 12지파 가계도</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">창 12~50장: 언약의 가계 계보</text>

      <g transform="translate(20, 56)">
        <!-- 1대: 아브라함 (사라 / 하갈 / 그두라) -->
        <rect x="230" y="0" width="200" height="42" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="18" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">아브라함 &amp; 사라 (Abraham &amp; Sarah)</text>
        <text x="330" y="32" fill="#fed7aa" font-size="9" text-anchor="middle">믿음의 조상 / 열국의 아비와 어미 (창 17장)</text>

        <!-- 2대: 이삭 (리브가) & 이스마엘 -->
        <path d="M 330,42 L 330,68" stroke="#f59e0b" stroke-width="2"/>
        <path d="M 120,68 L 540,68" stroke="#94a3b8" stroke-width="1.5"/>
        
        <rect x="50" y="75" width="140" height="36" rx="5" fill="#1e293b" stroke="#64748b"/>
        <text x="120" y="92" fill="#94a3b8" font-size="9.5" text-anchor="middle">이스마엘 (하갈 소생)</text>
        <text x="120" y="104" fill="#64748b" font-size="8" text-anchor="middle">아라비아 12방백 기원</text>

        <rect x="250" y="72" width="160" height="42" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="89" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">이삭 &amp; 리브가 (Isaac)</text>
        <text x="330" y="104" fill="#fed7aa" font-size="9" text-anchor="middle">순종과 약속의 아들 (모리아산 번제)</text>

        <!-- 3대: 야곱(이스라엘) & 에서 -->
        <path d="M 330,114 L 330,135" stroke="#f59e0b" stroke-width="2"/>
        <path d="M 180,135 L 480,135" stroke="#94a3b8" stroke-width="1.5"/>

        <rect x="110" y="142" width="130" height="36" rx="5" fill="#1e293b" stroke="#ef4444"/>
        <text x="175" y="158" fill="#fca5a5" font-size="9.5" text-anchor="middle">에서 (에돔 족속)</text>
        <text x="175" y="170" fill="#f87171" font-size="8" text-anchor="middle">장자권 경홀히 여김 (세일산)</text>

        <rect x="240" y="138" width="180" height="44" rx="6" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <text x="330" y="156" fill="#c7d2fe" font-size="11.5" font-weight="black" text-anchor="middle">야곱 ➔ 이스라엘 (Jacob)</text>
        <text x="330" y="172" fill="#a5b4fc" font-size="9" text-anchor="middle">얍복 나루터 승리 / 12아들의 아비</text>

        <!-- 4대: 야곱의 4 아내와 12지파 (Leah, Rachel, Bilhah, Zilpah) -->
        <g transform="translate(0, 195)">
          <!-- 1. 레아 (6아들 + 디나) -->
          <rect x="0" y="0" width="190" height="135" rx="6" fill="#0f172a" stroke="#3b82f6"/>
          <text x="95" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold" text-anchor="middle">레아 (Leah) — 6지파</text>
          <text x="12" y="36" fill="#cbd5e1" font-size="9">1. 르우벤 (장자권 상실)</text>
          <text x="12" y="52" fill="#cbd5e1" font-size="9">2. 시므온 (세겜 학살 흩어짐)</text>
          <text x="12" y="68" fill="#cbd5e1" font-size="9">3. 레위 (구별된 제사장 지파)</text>
          <text x="12" y="86" fill="#fde047" font-size="10" font-weight="black">4. 유다 (★메시아 왕통 계보!)</text>
          <text x="12" y="102" fill="#cbd5e1" font-size="9">9. 잇사갈 (토지의 평안)</text>
          <text x="12" y="118" fill="#cbd5e1" font-size="9">10. 스불론 (해변의 거처)</text>

          <!-- 2. 라헬 (2아들 ➔ 요셉 두 아들) -->
          <rect x="200" y="0" width="220" height="135" rx="6" fill="#0f172a" stroke="#ec4899"/>
          <text x="310" y="18" fill="#f472b6" font-size="10.5" font-weight="bold" text-anchor="middle">라헬 (Rachel) — 요셉 2몫 축복</text>
          <text x="212" y="38" fill="#fde047" font-size="10" font-weight="bold">11. 요셉 (Joseph — 장자 2몫!)</text>
          <text x="225" y="55" fill="#fbcfe8" font-size="9">· 에브라임 (차자의 축복, 북왕국 주도)</text>
          <text x="225" y="70" fill="#fbcfe8" font-size="9">· 므낫세 (장자, 요단 동·서편 광대한 영토)</text>
          <text x="212" y="92" fill="#ffffff" font-size="10" font-weight="bold">12. 베냐민 (Benjamin)</text>
          <text x="225" y="108" fill="#cbd5e1" font-size="9">· 물어뜯는 이리 (사울 왕, 사도 바울 출신)</text>
          <text x="212" y="124" fill="#a7f3d0" font-size="8.5">남유다 왕국에 유다와 함께 끝까지 충성</text>

          <!-- 3. 빌하 (라헬의 여종, 2아들) -->
          <rect x="430" y="0" width="110" height="135" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="485" y="18" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">빌하 (Bilhah)</text>
          <text x="440" y="42" fill="#cbd5e1" font-size="9">5. 단 (Dan)</text>
          <text x="445" y="58" fill="#94a3b8" font-size="8">· 길의 뱀, 삼손 출신</text>
          <text x="440" y="85" fill="#cbd5e1" font-size="9">6. 납달리</text>
          <text x="445" y="101" fill="#94a3b8" font-size="8">· 놓인 암사슴, 아름다운 소리</text>

          <!-- 4. 실바 (레아의 여종, 2아들) -->
          <rect x="550" y="0" width="110" height="135" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="605" y="18" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">실바 (Zilpah)</text>
          <text x="560" y="42" fill="#cbd5e1" font-size="9">7. 갓 (Gad)</text>
          <text x="565" y="58" fill="#94a3b8" font-size="8">· 군대의 추격을 받으나 승리</text>
          <text x="560" y="85" fill="#cbd5e1" font-size="9">8. 아셀 (Asher)</text>
          <text x="565" y="101" fill="#94a3b8" font-size="8">· 기름진 먹거리, 왕의 수라상</text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          👑 구속사 핵심: 넷째 아들 유다 ➔ 베레스 ➔ 보아스 ➔ 다윗 왕 ➔ 예수 그리스도 탄생 (마 1장 족보 완성)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [출애굽기 제3장] 대제사장의 거룩한 의복과 판결 흉패 (출 28장)
// ----------------------------------------------------------------------------
function renderHighPriestGarmentsSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgPriest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgPriest)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">👔 출애굽기 제3장: 대제사장의 거룩한 의복과 판결 흉패 (출 28장)</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">인류의 완전한 대제사장 예수 그리스도 예표</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 대제사장 의복 구성도 일러스트 -->
        <g transform="translate(0, 0)">
          <rect width="310" height="265" rx="8" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
          <rect width="310" height="24" rx="8" fill="#78350f"/>
          <text x="155" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">👑 의복 각 부위 구조와 상징</text>

          <g transform="translate(15, 32)">
            <!-- 1. 관 & 순금 패 -->
            <rect width="280" height="36" rx="4" fill="#1e293b" stroke="#fde047"/>
            <text x="10" y="16" fill="#fde047" font-size="10" font-weight="bold">1. 세마포 관 &amp; 순금 패 (지극한 성결)</text>
            <text x="10" y="29" fill="#fef08a" font-size="8.5">순금 패에 도장을 새기듯 "여호와께 성결" 각인 (이마 부착)</text>

            <!-- 2. 견대 호마노 보석 2개 -->
            <rect y="42" width="280" height="36" rx="4" fill="#1e293b" stroke="#38bdf8"/>
            <text x="10" y="58" fill="#38bdf8" font-size="10" font-weight="bold">2. 양 어깨 견대 (호마노 보석 2개)</text>
            <text x="10" y="71" fill="#cbd5e1" font-size="8.5">각 보석에 6지파씩 12지파 이름을 새겨 어깨에 짊어짐 (구원 보증)</text>

            <!-- 3. 판결 흉패 -->
            <rect y="84" width="280" height="42" rx="4" fill="#1e293b" stroke="#ec4899"/>
            <text x="10" y="100" fill="#f472b6" font-size="10" font-weight="bold">3. 판결 흉패 &amp; 우림과 둠밈 (가슴)</text>
            <text x="10" y="113" fill="#cbd5e1" font-size="8.5">12보석(12지파 사랑) + 판결기구 우림(빛)·둠밈(완전) 내장</text>

            <!-- 4. 에봇 & 겉옷 -->
            <rect y="132" width="280" height="42" rx="4" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="148" fill="#93c5fd" font-size="10" font-weight="bold">4. 에봇(Ephod) &amp; 에봇 받침 청색 겉옷</text>
            <text x="10" y="161" fill="#cbd5e1" font-size="8.5">금색·청색·자색·홍색 실과 베실로 정교하게 짠 앞치마형 성의</text>

            <!-- 5. 석류와 금방울 -->
            <rect y="180" width="280" height="42" rx="4" fill="#1e293b" stroke="#f59e0b"/>
            <text x="10" y="196" fill="#fde68a" font-size="10" font-weight="bold">5. 옷자락 석류 &amp; 순금 방울</text>
            <text x="10" y="210" fill="#cbd5e1" font-size="8.5">청색·자색·홍색 석류와 금방울 교대 부착 ➔ 성소 출입시 소리</text>
          </g>
        </g>

        <!-- 우측: 판결 흉패 12가지 보석 (4열 3행) 상세도 -->
        <g transform="translate(325, 0)">
          <rect width="335" height="265" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
          <rect width="335" height="24" rx="8" fill="#1d4ed8"/>
          <text x="167" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">💎 판결 흉패 12보석과 12지파 (Breastplate)</text>

          <g transform="translate(12, 32)">
            <!-- 1열 (홍보석, 황옥, 녹주옥) -->
            <rect x="0" y="0" width="98" height="48" rx="4" fill="#7f1d1d" stroke="#f87171"/>
            <text x="49" y="18" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">홍보석 (유다)</text>
            <text x="49" y="32" fill="#fed7aa" font-size="8" text-anchor="middle">왕권과 피의 대속</text>

            <rect x="105" y="0" width="98" height="48" rx="4" fill="#78350f" stroke="#fbbf24"/>
            <text x="154" y="18" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">황옥 (잇사갈)</text>
            <text x="154" y="32" fill="#fef08a" font-size="8" text-anchor="middle">순결과 지혜</text>

            <rect x="210" y="0" width="98" height="48" rx="4" fill="#064e3b" stroke="#34d399"/>
            <text x="259" y="18" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">녹주옥 (스불론)</text>
            <text x="259" y="32" fill="#d1fae5" font-size="8" text-anchor="middle">생명과 소망</text>

            <!-- 2열 (석류석, 남보석, 홍마노) -->
            <rect x="0" y="54" width="98" height="48" rx="4" fill="#581c87" stroke="#c084fc"/>
            <text x="49" y="72" fill="#e9d5ff" font-size="9" font-weight="bold" text-anchor="middle">석류석 (르우벤)</text>
            <text x="49" y="86" fill="#f3e8ff" font-size="8" text-anchor="middle">영광과 능력</text>

            <rect x="105" y="54" width="98" height="48" rx="4" fill="#1e3a8a" stroke="#60a5fa"/>
            <text x="154" y="72" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">남보석 (시므온)</text>
            <text x="154" y="86" fill="#dbeafe" font-size="8" text-anchor="middle">하늘의 거룩</text>

            <rect x="210" y="54" width="98" height="48" rx="4" fill="#701a75" stroke="#f472b6"/>
            <text x="259" y="72" fill="#fbcfe8" font-size="9" font-weight="bold" text-anchor="middle">홍마노 (레위)</text>
            <text x="259" y="86" fill="#fdf2f8" font-size="8" text-anchor="middle">제사장 거룩</text>

            <!-- 3열 (호박, 백마노, 자수정) -->
            <rect x="0" y="108" width="98" height="48" rx="4" fill="#854d0e" stroke="#fde047"/>
            <text x="49" y="126" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">호박 (에브라임)</text>
            <text x="49" y="140" fill="#fef9c3" font-size="8" text-anchor="middle">풍성한 열매</text>

            <rect x="105" y="108" width="98" height="48" rx="4" fill="#334155" stroke="#cbd5e1"/>
            <text x="154" y="126" fill="#f1f5f9" font-size="9" font-weight="bold" text-anchor="middle">백마노 (므낫세)</text>
            <text x="154" y="140" fill="#ffffff" font-size="8" text-anchor="middle">은혜로운 잊음</text>

            <rect x="210" y="108" width="98" height="48" rx="4" fill="#4c1d95" stroke="#a78bfa"/>
            <text x="259" y="126" fill="#ddd6fe" font-size="9" font-weight="bold" text-anchor="middle">자수정 (베냐민)</text>
            <text x="259" y="140" fill="#ede9fe" font-size="8" text-anchor="middle">오른손의 아들</text>

            <!-- 4열 (녹보석, 호마노, 벽옥) -->
            <rect x="0" y="162" width="98" height="48" rx="4" fill="#065f46" stroke="#10b981"/>
            <text x="49" y="180" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">녹보석 (단)</text>
            <text x="49" y="194" fill="#a7f3d0" font-size="8" text-anchor="middle">공의로운 심판</text>

            <rect x="105" y="162" width="98" height="48" rx="4" fill="#365314" stroke="#84cc16"/>
            <text x="154" y="180" fill="#bef264" font-size="9" font-weight="bold" text-anchor="middle">호마노 (아셀)</text>
            <text x="154" y="194" fill="#d9f99d" font-size="8" text-anchor="middle">기름진 축복</text>

            <rect x="210" y="162" width="98" height="48" rx="4" fill="#14532d" stroke="#4ade80"/>
            <text x="259" y="180" fill="#86efac" font-size="9" font-weight="bold" text-anchor="middle">벽옥 (납달리)</text>
            <text x="259" y="194" fill="#bbf7d0" font-size="8" text-anchor="middle">승리의 자유</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          ✝️ 신약의 성취: 영원한 대제사장이신 예수 그리스도 (히브리서 7-9장)
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          아론의 반차를 따르지 않고 멜기세덱의 반차를 좇아 오신 예수님은 자기 백성을 가슴과 어깨에 품으시고 단번에 참된 지성소로 들어가셨습니다.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          "그러므로 우리에게 큰 대제사장이 계시니 승천하신 이 곧 하나님의 아들 예수시라" (히 4:14)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [출애굽기 제4장] 십계명 두 돌판 (Ten Commandments) 구조도
// ----------------------------------------------------------------------------
function renderTenCommandmentsSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgDecalogue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#09131f"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgDecalogue)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">📜 출애굽기 제4장: 십계명(Ten Commandments) 두 돌판 구조도</text>
      <text x="500" y="35" fill="#94a3b8" font-size="11">출 20:1~17 / 신 5:6~21 친필 언약</text>

      <g transform="translate(20, 56)">
        <!-- 첫째 돌판 (대신 관계: 1~4계명 하나님 사랑) -->
        <rect width="320" height="260" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <rect width="320" height="28" rx="16" fill="#4338ca"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="black" text-anchor="middle">
          🕊️ 제1돌판: 하나님을 향한 사랑 (대신 1~4계명)
        </text>

        <g transform="translate(15, 38)">
          <!-- 1계명 -->
          <rect width="290" height="46" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">제1계명: 오직 여호와 하나님만 섬기라</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="8.5">"너는 나 외에는 다른 신들을 네게 두지 말라" (유일신 신앙)</text>

          <!-- 2계명 -->
          <rect y="52" width="290" height="48" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="70" fill="#fde047" font-size="10.5" font-weight="bold">제2계명: 어떠한 우상도 만들지 말고 절하지 말라</text>
          <text x="12" y="86" fill="#cbd5e1" font-size="8.5">"새긴 우상을 만들지 말고 그것들에게 절하지 말며 섬기지 말라"</text>

          <!-- 3계명 -->
          <rect y="106" width="290" height="46" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="124" fill="#fde047" font-size="10.5" font-weight="bold">제3계명: 여호와의 이름을 망령되게 부르지 말라</text>
          <text x="12" y="140" fill="#cbd5e1" font-size="8.5">"여호와는 그의 이름을 망령되게 부르는 자를 죄 없다 하지 아니하리라"</text>

          <!-- 4계명 -->
          <rect y="158" width="290" height="52" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="176" fill="#fde047" font-size="10.5" font-weight="bold">제4계명: 안식일을 기억하여 거룩하게 지키라</text>
          <text x="12" y="192" fill="#cbd5e1" font-size="8.5">"엿새 동안은 힘써 네 모든 일을 행할 것이나 일곱째 날은 안식일인즉"</text>
        </g>

        <!-- 둘째 돌판 (대인 관계: 5~10계명 이웃 사랑) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="260" rx="16" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
          <rect width="320" height="28" rx="16" fill="#047857"/>
          <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="black" text-anchor="middle">
            🤝 제2돌판: 이웃을 향한 사랑 (대인 5~10계명)
          </text>

          <g transform="translate(15, 36)">
            <!-- 5계명 -->
            <rect width="290" height="34" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">제5계명: 네 부모를 공경하라 (약속 있는 첫 계명)</text>
            <text x="12" y="28" fill="#d1fae5" font-size="8">"그리하면 네 하나님 여호와가 준 땅에서 네 생명이 길리라"</text>

            <!-- 6계명 -->
            <rect y="38" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="53" fill="#a7f3d0" font-size="10" font-weight="bold">제6계명: 살인하지 말라 (생명 존중)</text>
            <text x="12" y="65" fill="#d1fae5" font-size="8">하나님의 형상대로 지음 받은 존엄한 인명 보호</text>

            <!-- 7계명 -->
            <rect y="74" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="89" fill="#a7f3d0" font-size="10" font-weight="bold">제7계명: 간음하지 말라 (가정과 순결)</text>
            <text x="12" y="101" fill="#d1fae5" font-size="8">거룩한 결혼 언약과 성적 순결 수호</text>

            <!-- 8계명 -->
            <rect y="110" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="125" fill="#a7f3d0" font-size="10" font-weight="bold">제8계명: 도둑질하지 말라 (정의와 정직)</text>
            <text x="12" y="137" fill="#d1fae5" font-size="8">이웃의 재산권과 땀 흘린 대가 존중</text>

            <!-- 9계명 -->
            <rect y="146" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="161" fill="#a7f3d0" font-size="10" font-weight="bold">제9계명: 거짓 증거하지 말라 (진실과 신뢰)</text>
            <text x="12" y="173" fill="#d1fae5" font-size="8">위증을 금하고 사회적 진실과 공평 유지</text>

            <!-- 10계명 -->
            <rect y="182" width="290" height="34" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="197" fill="#a7f3d0" font-size="10" font-weight="bold">제10계명: 네 이웃의 집을 탐내지 말라 (마음의 거룩)</text>
            <text x="12" y="210" fill="#d1fae5" font-size="8">행동뿐 아니라 탐욕이라는 마음의 동기까지 감찰</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 326)">
        <rect width="660" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">
          ❤️ 예수님의 십계명 대강령 총괄 요약 (마태복음 22:37~40)
        </text>
        <text x="330" y="44" fill="#ffffff" font-size="10" text-anchor="middle">
          "네 마음을 다하고 목숨을 다하고 뜻을 다하여 주 너의 하나님을 사랑하라 (첫째 계명) ... 네 이웃을 네 자신 같이 사랑하라 (둘째 계명)"
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          율법은 구원의 조건이 아니라, 구원받은 하나님의 언약 백성이 누릴 삶의 거룩한 도덕 규범입니다.
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [레위기 제3장] 정결한 음식과 부정한 음식 (레위기 11장 성결 규례)
// ----------------------------------------------------------------------------
function renderLeviticusDietaryLawsSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgFoodDiet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#061a14"/>
          <stop offset="100%" stop-color="#0f291e"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgFoodDiet)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
      <text x="35" y="35" fill="#34d399" font-size="13.5" font-weight="bold">🐟 레위기 제3장: 정결한 음식과 부정한 음식 (레위기 11장 성결 규례)</text>
      <text x="510" y="35" fill="#a7f3d0" font-size="11">"내가 거룩하니 너희도 거룩하라" (레 11:45)</text>

      <g transform="translate(20, 56)">
        <!-- 1. 육상 동물 (땅의 짐승) -->
        <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#10b981"/>
        <rect width="320" height="24" rx="8" fill="#047857"/>
        <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">1. 육상 동물 (굽 갈라짐 + 되새김질 2가지 조건)</text>
        <g transform="translate(12, 34)">
          <text x="0" y="16" fill="#4ade80" font-size="10" font-weight="bold">✅ 정결한 짐승 (먹을 수 있음):</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· 소, 양, 염소, 사슴, 노루 (굽이 갈라져 쪽발이고 되새김질함)</text>
          <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ 부정한 짐승 (먹을 수 없음):</text>
          <text x="0" y="72" fill="#fca5a5" font-size="9">· 낙타, 사반, 토끼 (되새김질하나 굽이 안 갈라짐)</text>
          <text x="0" y="88" fill="#fca5a5" font-size="9">· 돼지 (굽은 갈라졌으나 되새김질 못함 ➔ 영적 분별 없음)</text>
        </g>

        <!-- 2. 수중 생물 (바다와 강의 어류) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#38bdf8"/>
          <rect width="320" height="24" rx="8" fill="#0284c7"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">2. 수중 생물 (지느러미 + 비늘 2가지 조건)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#38bdf8" font-size="10" font-weight="bold">✅ 정결한 물고기 (먹을 수 있음):</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· 지느러미와 비늘이 모두 있는 물고기 (조기, 잉어, 붕어 등)</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ 부정한 생물 (먹을 수 없음):</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· 뱀장어, 미꾸라지, 메기 (비늘 없음 ➔ 바닥의 진흙/부패물 섭취)</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· 게, 새우, 굴, 조개류, 오징어 (독소 축적성 갑각·연체동물)</text>
          </g>
        </g>

        <!-- 3. 공중 조류 (새) -->
        <g transform="translate(0, 140)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#fbbf24"/>
          <rect width="320" height="24" rx="8" fill="#d97706"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">3. 공중 조류 (사체 섭취 맹금류 금지)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#fde047" font-size="10" font-weight="bold">✅ 정결한 새:</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· 곡식을 먹고 평화로운 새 (비둘기 등 제물에 쓰임)</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ 가증한 새 (20여 종):</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· 독수리, 솔개, 까마귀, 타조, 올빼미, 갈매기, 학, 박쥐 등</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· 썩은 시체를 뜯어먹고 밤에 활동하며 피를 흘리는 맹금류</text>
          </g>
        </g>

        <!-- 4. 곤충류 & 기는 것 -->
        <g transform="translate(340, 140)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#c084fc"/>
          <rect width="320" height="24" rx="8" fill="#7e22ce"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">4. 곤충류 &amp; 길짐승 (뛰는 다리 유무)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#e9d5ff" font-size="10" font-weight="bold">✅ 정결한 곤충:</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· 뛰는 다리가 있어 땅에서 뛰는 메뚜기, 방아깨비, 귀뚜라미</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ 부정한 기는 것:</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· 배로 밀어 다니거나 발이 많은 곤충 (바퀴벌레, 지네 등)</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· 족제비, 쥐, 도마뱀, 카멜레온 등 땅에 기는 생물 접촉 금지</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="22" fill="#a7f3d0" font-size="11.5" font-weight="bold" text-anchor="middle">
          💡 에스라 관점: 위생학적 보호 + 영적 성별(聖別)의 거룩한 교훈
        </text>
        <text x="330" y="40" fill="#cbd5e1" font-size="9.5" text-anchor="middle">
          부정한 것은 부패물을 먹고 독소를 품은 생물들입니다. 하나님은 광야에서 백성들의 건강을 보호하시며, 세상의 악에 물들지 않는 구별된 삶을 가르치셨습니다.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "너희는 짐승의 정하고 부정함과 새의 정하고 부정함을 구별하고... 너희를 만민 중에서 구별하였느니라" (레 20:25~26)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [레위기 제4장] 대속죄일(욤 키푸르)과 50년 희년(Jubilee)의 대자유
// ----------------------------------------------------------------------------
function renderDayOfAtonementJubileeSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgAtonement" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#111827"/>
          <stop offset="100%" stop-color="#311029"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgAtonement)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🕊️ 레위기 제4장: 대속죄일(욤 키푸르)과 50년 희년(Jubilee)의 대자유</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">레위기 16장 &amp; 25장 복음의 절정</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 7월 10일 대속죄일 (Yom Kippur) -->
        <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#be123c"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🩸 대속죄일 (7월 10일, 레 16장)
        </text>

        <g transform="translate(12, 34)">
          <text x="0" y="16" fill="#fda4af" font-size="10.5" font-weight="bold">1. 지성소 1년 1회 출입 (대제사장만)</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· 수송아지 피를 속죄소 위와 앞에 7번 뿌림</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· 백성의 1년 치 모든 죄를 온전히 사함 받는 날</text>

          <text x="0" y="74" fill="#fde047" font-size="10.5" font-weight="bold">2. 두 마리 염소의 구속사 의미</text>
          <rect y="82" width="296" height="60" rx="4" fill="#1e293b" stroke="#e11d48"/>
          <text x="10" y="98" fill="#fca5a5" font-size="9" font-weight="bold">① 여호와를 위한 염소 (속죄제 제물):</text>
          <text x="10" y="112" fill="#fecaca" font-size="8">지성소 속죄소에 피를 뿌려 하나님의 공의를 만족시킴</text>
          <text x="10" y="128" fill="#fde047" font-size="9" font-weight="bold">② 아사셀(Azazel) 염소 (광야 방출):</text>
          <text x="10" y="139" fill="#fef08a" font-size="8">머리에 안수하여 모든 죄를 짊어지고 사람이 살지 않는 광야로 보냄</text>

          <text x="0" y="164" fill="#a7f3d0" font-size="9.5" font-weight="bold">➔ 그리스도께서 우리의 죄를 등 뒤로 던지심 예표!</text>
        </g>

        <!-- 우측: 50년 희년 (The Year of Jubilee) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#b45309"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            🎺 50년 희년 (Jubilee, 레 25장)
          </text>

          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#fde68a" font-size="10.5" font-weight="bold">1. 안식년(7년)이 7번 지난 제50년</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· 대속죄일 7월 10일에 전국에 나팔을 크게 붊</text>
            <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· "전국 모든 주민에게 자유를 공포하라!"</text>

            <text x="0" y="74" fill="#a7f3d0" font-size="10.5" font-weight="bold">2. 희년의 3대 복음적 선포</text>
            <rect y="82" width="296" height="75" rx="4" fill="#1e293b" stroke="#f59e0b"/>
            <text x="10" y="98" fill="#fde047" font-size="9" font-weight="bold">① 토지 원주인 반환 (토지공개념):</text>
            <text x="10" y="112" fill="#cbd5e1" font-size="8">"토지는 다 내 것임이라 너희는 거류민이요" (레 25:23)</text>
            <text x="10" y="128" fill="#a7f3d0" font-size="9" font-weight="bold">② 노예 해방 (자유의 회복):</text>
            <text x="10" y="140" fill="#cbd5e1" font-size="8">빚 때문에 팔렸던 동족 종들을 무조건 해방</text>
            <text x="10" y="153" fill="#38bdf8" font-size="9" font-weight="bold">③ 부채 탕감 &amp; 땅의 완전한 안식</text>

            <text x="0" y="176" fill="#38bdf8" font-size="9.5" font-weight="bold">➔ 빈부격차의 영구 고착화 방지 &amp; 하나님 나라 예표</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="22" fill="#a7f3d0" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 예수님의 나사렛 첫 설교: 참된 희년의 선포 (누가복음 4:18~19)
        </text>
        <text x="330" y="40" fill="#ffffff" font-size="9.5" text-anchor="middle">
          "포로 된 자에게 자유를, 눈먼 자에게 다시 보게 함을 전파하며 눌린 자를 자유롭게 하고 주의 은혜의 해(희년)를 전파하게 하려 하심이라"
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          대속죄일의 피 흘림이 있은 후에야 비로소 희년의 대자유 나팔이 울려 퍼집니다! (십자가 대속 ➔ 참 자유)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [민수기 제3장] 제1차(시내산) vs 제2차(모압 평지) 인구조사 비교표
// ----------------------------------------------------------------------------
function renderNumbersCensusComparisonSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgCensus" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a1224"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgCensus)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">📊 민수기 제3장: 제1차(시내산) vs 제2차(모압 평지) 인구조사 비교표</text>
      <text x="500" y="35" fill="#94a3b8" font-size="10.5">민수기 1장 &amp; 26장 40년 광야 총람</text>

      <g transform="translate(20, 56)">
        <!-- 상단 요약 배너 -->
        <rect width="660" height="42" rx="6" fill="#1e1b4b" stroke="#6366f1"/>
        <text x="30" y="26" fill="#93c5fd" font-size="11" font-weight="bold">
          1차 인구조사 (출애굽 2년 시내산): <span class="text-amber-300 font-black">603,550명</span>
        </text>
        <text x="360" y="26" fill="#a7f3d0" font-size="11" font-weight="bold">
          2차 인구조사 (출애굽 40년 모압): <span class="text-emerald-400 font-black">601,730명</span> (-1,820명)
        </text>

        <!-- 12지파 비교 테이블 (6개 지파씩 2컬럼) -->
        <g transform="translate(0, 50)">
          <!-- 좌측 컬럼 (유다, 잇사갈, 스불론, 르우벤, 시므온, 갓) -->
          <rect width="325" height="215" rx="6" fill="#0f172a" stroke="#334155"/>
          <rect width="325" height="24" rx="6" fill="#1e293b"/>
          <text x="15" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">지파</text>
          <text x="100" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">1차 (시내산)</text>
          <text x="180" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">2차 (모압)</text>
          <text x="260" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">증감 추이</text>

          <g transform="translate(15, 30)">
            <!-- 유다 -->
            <text x="0" y="14" fill="#fde047" font-size="9.5" font-weight="bold">유다 (최대)</text>
            <text x="85" y="14" fill="#cbd5e1" font-size="9">74,600</text>
            <text x="165" y="14" fill="#cbd5e1" font-size="9">76,500</text>
            <text x="245" y="14" fill="#34d399" font-size="9" font-weight="bold">+1,900 ▲</text>

            <!-- 잇사갈 -->
            <text x="0" y="42" fill="#cbd5e1" font-size="9.5">잇사갈</text>
            <text x="85" y="42" fill="#cbd5e1" font-size="9">54,400</text>
            <text x="165" y="42" fill="#cbd5e1" font-size="9">64,300</text>
            <text x="245" y="42" fill="#34d399" font-size="9" font-weight="bold">+9,900 ▲</text>

            <!-- 스불론 -->
            <text x="0" y="70" fill="#cbd5e1" font-size="9.5">스불론</text>
            <text x="85" y="70" fill="#cbd5e1" font-size="9">57,400</text>
            <text x="165" y="70" fill="#cbd5e1" font-size="9">60,500</text>
            <text x="245" y="70" fill="#34d399" font-size="9" font-weight="bold">+3,100 ▲</text>

            <!-- 르우벤 -->
            <text x="0" y="98" fill="#cbd5e1" font-size="9.5">르우벤</text>
            <text x="85" y="98" fill="#cbd5e1" font-size="9">46,500</text>
            <text x="165" y="98" fill="#cbd5e1" font-size="9">43,730</text>
            <text x="245" y="98" fill="#f87171" font-size="9">-2,770 ▼</text>

            <!-- 시므온 (극적인 감소 -37,100) -->
            <rect x="-8" y="112" width="310" height="24" rx="4" fill="#7f1d1d" opacity="0.3"/>
            <text x="0" y="128" fill="#f87171" font-size="9.5" font-weight="black">시므온 (급감)</text>
            <text x="85" y="128" fill="#fca5a5" font-size="9">59,300</text>
            <text x="165" y="128" fill="#fca5a5" font-size="9">22,200</text>
            <text x="245" y="128" fill="#ef4444" font-size="9.5" font-weight="black">-37,100 ▼</text>

            <!-- 갓 -->
            <text x="0" y="156" fill="#cbd5e1" font-size="9.5">갓</text>
            <text x="85" y="156" fill="#cbd5e1" font-size="9">45,650</text>
            <text x="165" y="156" fill="#cbd5e1" font-size="9">40,500</text>
            <text x="245" y="156" fill="#f87171" font-size="9">-5,150 ▼</text>
          </g>

          <!-- 우측 컬럼 (에브라임, 므낫세, 베냐민, 단, 아셀, 납달리) -->
          <g transform="translate(335, 0)">
            <rect width="325" height="215" rx="6" fill="#0f172a" stroke="#334155"/>
            <rect width="325" height="24" rx="6" fill="#1e293b"/>
            <text x="15" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">지파</text>
            <text x="100" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">1차 (시내산)</text>
            <text x="180" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">2차 (모압)</text>
            <text x="260" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">증감 추이</text>

            <g transform="translate(15, 30)">
              <!-- 에브라임 -->
              <text x="0" y="14" fill="#cbd5e1" font-size="9.5">에브라임</text>
              <text x="85" y="14" fill="#cbd5e1" font-size="9">40,500</text>
              <text x="165" y="14" fill="#cbd5e1" font-size="9">32,500</text>
              <text x="245" y="14" fill="#f87171" font-size="9">-8,000 ▼</text>

              <!-- 므낫세 (최대 증가 +20,500) -->
              <rect x="-8" y="26" width="310" height="24" rx="4" fill="#065f46" opacity="0.3"/>
              <text x="0" y="42" fill="#6ee7b7" font-size="9.5" font-weight="black">므낫세 (최대증가)</text>
              <text x="85" y="42" fill="#a7f3d0" font-size="9">32,200</text>
              <text x="165" y="42" fill="#a7f3d0" font-size="9">52,700</text>
              <text x="245" y="42" fill="#10b981" font-size="9.5" font-weight="black">+20,500 ▲</text>

              <!-- 베냐민 -->
              <text x="0" y="70" fill="#cbd5e1" font-size="9.5">베냐민</text>
              <text x="85" y="70" fill="#cbd5e1" font-size="9">35,400</text>
              <text x="165" y="70" fill="#cbd5e1" font-size="9">45,600</text>
              <text x="245" y="70" fill="#34d399" font-size="9" font-weight="bold">+10,200 ▲</text>

              <!-- 단 -->
              <text x="0" y="98" fill="#cbd5e1" font-size="9.5">단</text>
              <text x="85" y="98" fill="#cbd5e1" font-size="9">62,700</text>
              <text x="165" y="98" fill="#cbd5e1" font-size="9">64,400</text>
              <text x="245" y="98" fill="#34d399" font-size="9" font-weight="bold">+1,700 ▲</text>

              <!-- 아셀 -->
              <text x="0" y="128" fill="#cbd5e1" font-size="9.5">아셀</text>
              <text x="85" y="128" fill="#cbd5e1" font-size="9">41,500</text>
              <text x="165" y="128" fill="#cbd5e1" font-size="9">53,400</text>
              <text x="245" y="128" fill="#34d399" font-size="9" font-weight="bold">+11,900 ▲</text>

              <!-- 납달리 -->
              <text x="0" y="156" fill="#cbd5e1" font-size="9.5">납달리</text>
              <text x="85" y="156" fill="#cbd5e1" font-size="9">53,400</text>
              <text x="165" y="156" fill="#cbd5e1" font-size="9">45,400</text>
              <text x="245" y="156" fill="#f87171" font-size="9">-8,000 ▼</text>
            </g>
          </g>
        </g>
      </g>

      <g transform="translate(20, 328)">
        <rect width="660" height="62" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          💡 에스라 관점: 시므온 지파 급감의 이유와 하나님의 신실하심
        </text>
        <text x="330" y="40" fill="#cbd5e1" font-size="9.5" text-anchor="middle">
          시므온 지파의 지도자 시므리가 싯딤에서 미디안 여인과 음행하다 비느하스의 창에 찔려 죽었습니다(민 25장). 이 사건으로 시므온 지파는 37,100명이 격감했습니다.
        </text>
        <text x="330" y="54" fill="#a7f3d0" font-size="9.5" text-anchor="middle">
          불신앙의 1세대는 여호수아와 갈렙 외에 다 죽었으나, 하나님은 2세대를 통해 약속하신 60만 대군을 신실하게 보존하셨습니다!
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "여호와께서 그들에게 대하여 말씀하시기를 그들이 반드시 광야에서 죽으리라 하셨음이라" (민 26:65)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [민수기 제4장] 장대 위의 놋뱀과 발람의 별(메시아) 예언
// ----------------------------------------------------------------------------
function renderBalaamStarBronzeSerpentSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgSerpentStar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c0a1a"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgSerpentStar)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🐍 민수기 제4장: 장대 위의 놋뱀과 발람의 별(메시아) 예언</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">민 21:4~9 &amp; 민 24:17 십자가와 별</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 장대 위의 놋뱀 (민 21:4~9) -->
        <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#991b1b"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🐍 장대 위의 놋뱀과 믿음의 치유 (민 21장)
        </text>

        <g transform="translate(15, 34)">
          <text x="0" y="16" fill="#fca5a5" font-size="10.5" font-weight="bold">1. 길로 말미암은 백성의 불평과 불뱀 심판</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· "어찌하여 우리를 애굽에서 인도하여... 물도 없고 하찮은 음식"</text>
          <text x="0" y="46" fill="#f87171" font-size="8.8">· 불뱀들이 백성을 물어 수많은 사람이 죽어감</text>

          <text x="0" y="72" fill="#fde047" font-size="10.5" font-weight="bold">2. 하나님의 치유 처방: 장대 위의 놋뱀</text>
          <rect y="80" width="290" height="65" rx="5" fill="#1e293b" stroke="#f59e0b"/>
          <text x="10" y="98" fill="#fed7aa" font-size="9" font-weight="bold">"놋뱀을 만들어 장대 위에 매달아라"</text>
          <text x="10" y="114" fill="#ffffff" font-size="9.5" font-weight="black">"물린 자마다 그것을 보면 살리라!"</text>
          <text x="10" y="130" fill="#a7f3d0" font-size="8.5">➔ 뱀에 물려 죽어가던 자가 쳐다본즉 모두 살더라 (행위가 아닌 믿음!)</text>

          <text x="0" y="166" fill="#38bdf8" font-size="10" font-weight="bold">✝️ 신약의 성취 (요한복음 3:14-15)</text>
          <text x="0" y="180" fill="#93c5fd" font-size="8.8">"모세가 광야에서 뱀을 든 것 같이 인자도 들려야 하리니 이는 그를 믿는 자마다 영생을 얻게 하려 하심이라"</text>
        </g>

        <!-- 우측: 발람의 별 예언 (민 24:17) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#818cf8" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#4338ca"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            ⭐ 발람의 별(메시아) 예언 (민 24장)
          </text>

          <g transform="translate(15, 34)">
            <text x="0" y="16" fill="#c7d2fe" font-size="10.5" font-weight="bold">1. 모압 왕 발락의 저주 청빙과 나귀의 책망</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· 물질의 탐욕에 눈먼 거짓 선지자 발람</text>
            <text x="0" y="46" fill="#cbd5e1" font-size="8.8">· 하나님께서 그 입을 주장하사 도리어 4차례 축복 선포!</text>

            <text x="0" y="72" fill="#fde047" font-size="10.5" font-weight="bold">2. 야곱에게서 나오는 한 별 (민 24:17)</text>
            <rect y="80" width="290" height="75" rx="5" fill="#1e293b" stroke="#fbbf24"/>
            <text x="10" y="98" fill="#fef08a" font-size="9" font-weight="bold">"내가 그를 보아도 이때의 일이 아니며..."</text>
            <text x="10" y="114" fill="#fde047" font-size="10" font-weight="black">"한 별이 야곱에게서 나오며"</text>
            <text x="10" y="128" fill="#fde047" font-size="10" font-weight="black">"한 규(Scepter)가 이스라엘에게서 일어나서"</text>
            <text x="10" y="144" fill="#a7f3d0" font-size="8.5">원수 대적들을 깨뜨리시고 다스리실 만왕의 왕 예언</text>

            <text x="0" y="176" fill="#38bdf8" font-size="10" font-weight="bold">🌟 동방 박사들의 증언 (마태복음 2:2)</text>
            <text x="0" y="190" fill="#93c5fd" font-size="8.8">"동방에서 그의 별을 보고 그에게 경배하러 왔노라"</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 구속사 맥락: 광야의 절망을 생명과 왕권으로 바꾸시는 그리스도
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          죄로 죽을 수밖에 없는 인생에게 장대에 높이 달린 놋뱀(십자가)을 바라보게 하시고, 영원한 통치자이신 야곱의 별(예수 그리스도)을 통해 승리를 주십니다.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라" (요 3:16)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [신명기 제3장] 그리심산(축복)과 에발산(저주) 언약 갱신도
// ----------------------------------------------------------------------------
function renderGerizimEbalBlessingCurseSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgGerizimEbal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a121e"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGerizimEbal)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">⛰️ 신명기 제3장: 그리심산(축복)과 에발산(저주) 언약 갱신도</text>
      <text x="500" y="35" fill="#94a3b8" font-size="11">신명기 27~28장 &amp; 수 8:30~35</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 그리심 산 (남쪽, 해발 881m - 축복 선포) -->
        <rect width="210" height="265" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
        <rect width="210" height="25" rx="8" fill="#047857"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🌿 그리심 산 (축복 선포, 6지파)
        </text>

        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">산 위에 선 6개 지파:</text>
          <text x="0" y="32" fill="#ffffff" font-size="9.5">· 시므온, 레위, 유다</text>
          <text x="0" y="48" fill="#ffffff" font-size="9.5">· 잇사갈, 요셉, 베냐민</text>
          <text x="0" y="64" fill="#a7f3d0" font-size="8.5">(라헬과 레아의 본처 아들들)</text>

          <rect y="74" width="190" height="110" rx="5" fill="#0f172a" stroke="#10b981"/>
          <text x="8" y="90" fill="#fde047" font-size="9" font-weight="bold">순종할 때 받는 복 (신 28:1~14):</text>
          <text x="8" y="106" fill="#cbd5e1" font-size="8.5">· 성읍에서도 복을 받고 들에서도 복</text>
          <text x="8" y="122" fill="#cbd5e1" font-size="8.5">· 자녀와 토지 소산과 우양이 복을 받음</text>
          <text x="8" y="138" fill="#cbd5e1" font-size="8.5">· 들어와도 복을 받고 나가도 복을 받음</text>
          <text x="8" y="154" fill="#cbd5e1" font-size="8.5">· 머리가 되고 꼬리가 되지 않음</text>
          <text x="8" y="170" fill="#34d399" font-size="8.5" font-weight="bold">· 대적이 한 길로 왔다가 일곱 길로 도망</text>
        </g>

        <!-- 중앙: 세겜 골짜기 (Shechem Valley - 언약궤와 제사장) -->
        <g transform="translate(225, 0)">
          <rect width="210" height="265" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#b45309"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            📜 세겜 골짜기 (중심 집결)
          </text>

          <g transform="translate(10, 34)">
            <text x="105" y="16" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">여호와의 언약궤</text>
            <text x="105" y="32" fill="#cbd5e1" font-size="9" text-anchor="middle">&amp; 제사장·레위 사람들</text>

            <rect y="44" width="190" height="145" rx="5" fill="#0f172a" stroke="#d97706"/>
            <text x="8" y="60" fill="#38bdf8" font-size="9" font-weight="bold">낭독과 화답의 장관:</text>
            <text x="8" y="76" fill="#cbd5e1" font-size="8.5">· 제사장들이 언약궤 곁에 서서</text>
            <text x="8" y="92" fill="#cbd5e1" font-size="8.5">  율법의 모든 말씀을 큰 소리로 선포</text>
            <text x="8" y="112" fill="#fde047" font-size="9.5" font-weight="black">온 백성이 "아멘! 아멘!"</text>
            <text x="8" y="128" fill="#cbd5e1" font-size="8.5">· 그리심산 쪽 백성이 아멘!</text>
            <text x="8" y="144" fill="#cbd5e1" font-size="8.5">· 에발산 쪽 백성이 아멘!</text>
            <text x="8" y="166" fill="#a7f3d0" font-size="8.5" font-weight="bold">요단강 건넌 후 수 8장에서 완전 거행!</text>
          </g>
        </g>

        <!-- 우측: 에발 산 (북쪽, 해발 940m - 저주 선포 & 돌제단) -->
        <g transform="translate(450, 0)">
          <rect width="210" height="265" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            ⚡ 에발 산 (저주 선포, 6지파)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">산 위에 선 6개 지파:</text>
            <text x="0" y="32" fill="#ffffff" font-size="9.5">· 르우벤, 갓, 아셀</text>
            <text x="0" y="48" fill="#ffffff" font-size="9.5">· 스불론, 단, 납달리</text>
            <text x="0" y="64" fill="#fca5a5" font-size="8.5">(여종의 아들들과 르우벤·스불론)</text>

            <rect y="74" width="190" height="110" rx="5" fill="#0f172a" stroke="#ef4444"/>
            <text x="8" y="90" fill="#f87171" font-size="9" font-weight="bold">불순종할 때 받는 저주 (신 28:15~68):</text>
            <text x="8" y="106" fill="#fecaca" font-size="8.5">· 성읍에서도 저주, 들에서도 저주</text>
            <text x="8" y="122" fill="#fecaca" font-size="8.5">· 질병, 가뭄, 염병, 메뚜기 재앙</text>
            <text x="8" y="138" fill="#fecaca" font-size="8.5">· 적국에 패하여 일곱 길로 도망</text>
            <text x="8" y="154" fill="#fecaca" font-size="8.5">· 천하 만국 중에 흩어짐 (포로 유수 예언)</text>
            <text x="8" y="170" fill="#fde047" font-size="8.5" font-weight="bold">★ 쇠연장 대지 않은 돌단을 쌓음</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          ⚡ 복음의 깊은 비밀: 왜 축복의 그리심산이 아니라 저주의 에발산에 돌제단을 쌓았는가?
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          저주 아래 있는 인간에게 번제와 화목제의 대속 피 흘림이 절대적으로 필요하기 때문입니다! 예수 그리스도께서 우리를 위하여 십자가에서 저주를 받으사 율법의 저주에서 우리를 속량하셨습니다 (갈 3:13).
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#38bdf8" font-size="9.5" text-anchor="middle">
          "내가 오늘 하늘과 땅을 불러 너희에게 증거를 삼노라 내가 생명과 사망과 복과 저주를 네 앞에 두었은즉... 너와 네 자손이 살기 위하여 생명을 택하라" (신 30:19)
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [여호수아 제3장] 요단 동서 6대 도피성 (Cities of Refuge) 구속사 지도
// ----------------------------------------------------------------------------
function renderSixCitiesOfRefugeSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgRefuge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgRefuge)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">🛡️ 여호수아 제3장: 요단 동서 6대 도피성 (Cities of Refuge) 구속사 지도</text>
      <text x="520" y="35" fill="#94a3b8" font-size="10.5">수 20:1~9 부지중 살인자의 피난처</text>

      <g transform="translate(30, 56)">
        <!-- 중앙 요단강 물줄기 그래픽 -->
        <g transform="translate(310, 0)">
          <!-- 갈릴리 호수 -->
          <ellipse cx="15" cy="40" rx="20" ry="14" fill="#0284c7" opacity="0.8"/>
          <text x="45" y="44" fill="#38bdf8" font-size="9" font-weight="bold">갈릴리 호수</text>

          <!-- 요단강 -->
          <path d="M 15,54 Q 5,120 15,180 T 15,240" fill="none" stroke="#0284c7" stroke-width="4"/>
          <text x="25" y="145" fill="#0284c7" font-size="8.5" font-weight="bold">요 단 강</text>

          <!-- 사해 -->
          <ellipse cx="15" cy="270" rx="22" ry="32" fill="#0369a1" opacity="0.8"/>
          <text x="45" y="275" fill="#38bdf8" font-size="9" font-weight="bold">염해 (사해)</text>
        </g>

        <!-- 요단 서편 3대 도피성 (가나안 본토) -->
        <g transform="translate(10, 10)">
          <rect width="270" height="280" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
          <rect width="270" height="24" rx="8" fill="#1d4ed8"/>
          <text x="135" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            요단 서편 3대 도피성 (가나안 서쪽)
          </text>

          <g transform="translate(12, 34)">
            <!-- 1. 게데스 -->
            <rect width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="18" fill="#fde047" font-size="11" font-weight="black">1. 게데스 (Kedesh) — 북부</text>
            <text x="10" y="34" fill="#93c5fd" font-size="9">위치: 갈릴리 납달리 산지</text>
            <text x="10" y="48" fill="#cbd5e1" font-size="8.5">의미: '거룩함(Holy Place)'</text>
            <text x="10" y="60" fill="#a7f3d0" font-size="8">➔ 거룩하신 예수 그리스도의 품으로 피함</text>

            <!-- 2. 세겜 -->
            <rect y="74" width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="92" fill="#fde047" font-size="11" font-weight="black">2. 세겜 (Shechem) — 중부</text>
            <text x="10" y="108" fill="#93c5fd" font-size="9">위치: 에브라임 산지 (그리심·에발 사이)</text>
            <text x="10" y="122" fill="#cbd5e1" font-size="8.5">의미: '어깨(Shoulder), 짐을 짊어짐'</text>
            <text x="10" y="134" fill="#a7f3d0" font-size="8">➔ 우리의 모든 무거운 죄짐을 대신 지신 주님</text>

            <!-- 3. 헤브론 -->
            <rect y="148" width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="166" fill="#fde047" font-size="11" font-weight="black">3. 헤브론 (Hebron) — 남부</text>
            <text x="10" y="182" fill="#93c5fd" font-size="9">위치: 유다 산지 (기럇 아르바)</text>
            <text x="10" y="196" fill="#cbd5e1" font-size="8.5">의미: '연합, 친밀한 교제(Fellowship)'</text>
            <text x="10" y="208" fill="#a7f3d0" font-size="8">➔ 하나님과 영원한 화평과 친교를 누림</text>
          </g>
        </g>

        <!-- 요단 동편 3대 도피성 (길르앗 & 바산) -->
        <g transform="translate(365, 10)">
          <rect width="275" height="280" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <rect width="275" height="24" rx="8" fill="#047857"/>
          <text x="137" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            요단 동편 3대 도피성 (트랜스요르단)
          </text>

          <g transform="translate(12, 34)">
            <!-- 4. 골란 -->
            <rect width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="18" fill="#fde047" font-size="11" font-weight="black">4. 골란 (Golan) — 북동부</text>
            <text x="10" y="34" fill="#a7f3d0" font-size="9">위치: 바산 므낫세 반 지파 평원</text>
            <text x="10" y="48" fill="#cbd5e1" font-size="8.5">의미: '기쁨, 포로에서의 피난(Joy)'</text>
            <text x="10" y="60" fill="#a7f3d0" font-size="8">➔ 구원받은 자가 누리는 구원의 참 기쁨</text>

            <!-- 5. 길르앗 라못 -->
            <rect y="74" width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="92" fill="#fde047" font-size="11" font-weight="black">5. 길르앗 라못 (Ramoth) — 중동부</text>
            <text x="10" y="108" fill="#a7f3d0" font-size="9">위치: 갓 지파 길르앗 산지</text>
            <text x="10" y="122" fill="#cbd5e1" font-size="8.5">의미: '높은 곳, 승리(High Places)'</text>
            <text x="10" y="134" fill="#a7f3d0" font-size="8">➔ 원수의 손이 미치지 못하는 가장 높은 피난처</text>

            <!-- 6. 베셀 -->
            <rect y="148" width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="166" fill="#fde047" font-size="11" font-weight="black">6. 베셀 (Bezer) — 남동부</text>
            <text x="10" y="182" fill="#a7f3d0" font-size="9">위치: 르우벤 지파 광야 고원 평지</text>
            <text x="10" y="196" fill="#cbd5e1" font-size="8.5">의미: '요새, 안전한 성채(Fortress)'</text>
            <text x="10" y="208" fill="#a7f3d0" font-size="8">➔ 환난 날의 영원한 반석 요새이신 하나님</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 348)">
        <rect width="660" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="20" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">
          ✝️ 도피성의 궁극적 해방 조건: "대제사장이 죽기까지 도피성에 머물라" (수 20:6)
        </text>
        <text x="330" y="38" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          당시 대제사장이 죽으면 살인자는 고향으로 돌아가 완전한 자유인이 됩니다. 영원한 대제사장이신 예수님의 십자가 죽음으로 인류가 죄의 형벌에서 영원히 해방되었습니다!
        </text>
      </g>

      <g transform="translate(20, 404)">
        <rect width="660" height="26" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="17" fill="#93c5fd" font-size="9" text-anchor="middle">
          어디서든 반나절(30km) 이내에 달려갈 수 있도록 도로를 평탄케 닦아 놓은 하나님의 무조건적인 긍휼의 배려!
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [사복음서 제3장] 골고다 십자가 가상칠언(架上七言)과 부활의 승리
// ----------------------------------------------------------------------------
function renderSevenWordsOnCrossSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgCrossSeven" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#19060b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgCrossSeven)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">✝️ 사복음서 제3장: 골고다 십자가 가상칠언(架上七言)과 부활의 승리</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">인류 대속의 완전한 완성 (Tetelestai)</text>

      <g transform="translate(20, 56)">
        <!-- 1~3언: 이웃과 타인을 향한 말씀 -->
        <g transform="translate(0, 0)">
          <rect width="320" height="150" rx="8" fill="#0f172a" stroke="#e11d48"/>
          <rect width="320" height="24" rx="8" fill="#9f1239"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">
            🕊️ 전반부: 용서와 구원과 사랑 (1~3언)
          </text>

          <g transform="translate(10, 32)">
            <!-- 제1언 -->
            <rect width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="15" fill="#fda4af" font-size="9.5" font-weight="bold">제1언 [용서]: "아버지 저들을 사하여 주옵소서"</text>
            <text x="10" y="28" fill="#fecdd3" font-size="8.5">"자기들이 하는 것을 알지 못함이니이다" (눅 23:34 대제사장적 중보)</text>

            <!-- 제2언 -->
            <rect y="40" width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="55" fill="#fde047" font-size="9.5" font-weight="bold">제2언 [구원]: "오늘 네가 나와 함께 낙원에 있으리라"</text>
            <text x="10" y="68" fill="#fef08a" font-size="8.5">회개한 우편 강도를 향한 즉각적인 천국 영생 보증 (눅 23:43)</text>

            <!-- 제3언 -->
            <rect y="80" width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="95" fill="#fda4af" font-size="9.5" font-weight="bold">제3언 [사랑]: "여자여 보소서 아들이니이다... 보라 네 어머니라"</text>
            <text x="10" y="108" fill="#fecdd3" font-size="8.5">육신의 어머니 마리아를 사랑하는 제자 요한에게 위탁 (요 19:26-27)</text>
          </g>
        </g>

        <!-- 4~7언: 하나님 아버지와 구속 사역 완성 -->
        <g transform="translate(340, 0)">
          <rect width="320" height="150" rx="8" fill="#0f172a" stroke="#3b82f6"/>
          <rect width="320" height="24" rx="8" fill="#1d4ed8"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">
            👑 후반부: 고뇌·갈증·승리·위탁 (4~7언)
          </text>

          <g transform="translate(10, 32)">
            <!-- 제4언 -->
            <rect width="300" height="26" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="14" fill="#93c5fd" font-size="9" font-weight="bold">제4언 [고뇌]: "엘리 엘리 라마 사박다니"</text>
            <text x="8" y="24" fill="#bfdbfe" font-size="7.8">"나의 하나님 어찌하여 나를 버리셨나이까" (시 22:1 대속의 버림받음)</text>

            <!-- 제5언 -->
            <rect y="29" width="300" height="26" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="42" fill="#93c5fd" font-size="9" font-weight="bold">제5언 [갈증]: "내가 목마르다" (요 19:28)</text>
            <text x="8" y="52" fill="#bfdbfe" font-size="7.8">인류의 목마름을 대신 겪으신 참 사람이시며 성경을 응하게 하심</text>

            <!-- 제6언 -->
            <rect y="58" width="300" height="28" rx="3" fill="#064e3b" stroke="#34d399"/>
            <text x="8" y="72" fill="#a7f3d0" font-size="9.5" font-weight="black">제6언 [승리]: "다 이루었다! (Tetelestai!)" (요 19:30)</text>
            <text x="8" y="82" fill="#d1fae5" font-size="8">모든 죗값을 완불(Paid in full)하시고 구속 언약 성취!</text>

            <!-- 제7언 -->
            <rect y="89" width="300" height="28" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="103" fill="#fde047" font-size="9.5" font-weight="bold">제7언 [위탁]: "아버지 내 영혼을 아버지 손에 부탁하나이다"</text>
            <text x="8" y="113" fill="#fef08a" font-size="8">숨을 거두시며 성전 휘장이 위에서 아래로 찢어짐 (눅 23:46)</text>
          </g>
        </g>

        <!-- 하단: 빈 무덤과 부활의 영광 파노라마 -->
        <g transform="translate(0, 158)">
          <rect width="660" height="165" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
          <rect width="660" height="26" rx="8" fill="#047857"/>
          <text x="330" y="18" fill="#ffffff" font-size="12" font-weight="black" text-anchor="middle">
            🌟 사흘 만의 사망 권세 파쇄와 부활 승리 (The Glorious Resurrection!)
          </text>

          <g transform="translate(15, 34)">
            <text x="0" y="16" fill="#a7f3d0" font-size="10.5" font-weight="bold">🕊️ "그가 여기 계시지 않고 살아나셨느니라!" (눅 24:6)</text>
            <text x="0" y="32" fill="#ffffff" font-size="9.5">
              · 굴려진 큰 무덤 돌 &amp; 개켜진 세마포와 수건 (도난당한 것이 아닌 부활의 명백한 역사적 증거)
            </text>
            <text x="0" y="48" fill="#cbd5e1" font-size="9">
              · 막달라 마리아 ➔ 엠마오 두 제자 ➔ 열한 사도 ➔ 500여 형제에게 일시에 보이심 (고전 15장 부활장)
            </text>

            <!-- 복음서 결론 대사명 배너 -->
            <rect y="60" width="630" height="65" rx="6" fill="#0f172a" stroke="#f59e0b"/>
            <text x="315" y="78" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">
              👑 부활하신 주님의 지상 대위임령 (Great Commission, 마 28:18~20)
            </text>
            <text x="315" y="96" fill="#ffffff" font-size="9.5" text-anchor="middle">
              "하늘과 땅의 모든 권세를 내게 주셨으니 그러므로 너희는 가서 모든 민족을 제자로 삼아..."
            </text>
            <text x="315" y="112" fill="#38bdf8" font-size="10" font-weight="black" text-anchor="middle">
              "볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라 하시니라"
            </text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          사복음서는 십자가의 죽음으로 끝나지 않고, 부활의 영광과 다시 오실 재림의 약속으로 절정을 이룹니다!
        </text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// [요한계시록 제3장] 천년왕국(Millennium)과 백보좌 최후 심판
// ----------------------------------------------------------------------------
function renderMillenniumGreatWhiteThroneSvg() {
  return `
    <svg viewBox="0 0 700 440" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="bgMillennium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050814"/>
          <stop offset="100%" stop-color="#1f112e"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgMillennium)"/>

      <rect x="20" y="12" width="660" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">👑 요한계시록 제3장: 천년왕국(Millennium)과 백보좌 최후 심판</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">요한계시록 20장 종말의 대단원</text>

      <g transform="translate(20, 56)">
        <!-- 1. 천년왕국 (성도들의 첫째 부활 & 통치) -->
        <rect width="210" height="265" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="210" height="25" rx="8" fill="#1d4ed8"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          1. 천년왕국 (계 20:1~6)
        </text>

        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#93c5fd" font-size="10" font-weight="bold">⛓️ 사탄의 1,000년 결박</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· 천사가 무저갱 열쇠로 용(옛 뱀, 마귀, 사탄)을 결박하여 무저갱에 던져 잠금</text>
          <text x="0" y="58" fill="#fde047" font-size="10" font-weight="bold">👑 첫째 부활과 성도의 통치</text>
          <text x="0" y="74" fill="#cbd5e1" font-size="8.8">· 예수의 증언과 말씀 때문에 목 베임을 당한 순교자들의 부활</text>
          <text x="0" y="98" fill="#a7f3d0" font-size="9" font-weight="bold">"이 첫째 부활에 참여하는 자들은 복이 있고 거룩하도다"</text>
          <text x="0" y="122" fill="#cbd5e1" font-size="8.8">· 둘째 사망이 그들을 다스리는 권세가 없고 그리스도와 더불어 1,000년 왕 노릇!</text>
        </g>

        <!-- 2. 곡과 마곡 최후 반역 & 사탄 멸망 -->
        <g transform="translate(225, 0)">
          <rect width="210" height="265" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            2. 곡과 마곡 &amp; 불못 (계 20:7~10)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">🌪️ 사탄의 잠깐 놓임</text>
            <text x="0" y="32" fill="#fecaca" font-size="8.8">· 1,000년이 차매 사탄이 옥에서 놓여 땅 사방 백성 곡과 마곡을 미혹</text>
            <text x="0" y="58" fill="#f87171" font-size="10" font-weight="bold">⚔️ 성도들의 진 결집 &amp; 불 심판</text>
            <text x="0" y="74" fill="#fecaca" font-size="8.8">· 바다 모래 같은 대적이 성도들의 진과 사랑하시는 성을 둘러쌈</text>
            <text x="0" y="98" fill="#ffffff" font-size="9.5" font-weight="black">하늘에서 불이 내려와 그들을 태워버림!</text>
            <text x="0" y="124" fill="#fde047" font-size="10" font-weight="bold">🔥 마귀의 영원한 파멸</text>
            <text x="0" y="140" fill="#fef08a" font-size="8.8">· 짐승과 거짓 선지자가 있는 불과 유황 못에 던져져 세세토록 밤낮 괴로움을 받음</text>
          </g>
        </g>

        <!-- 3. 크고 흰 보좌(백보좌) 심판 -->
        <g transform="translate(450, 0)">
          <rect width="210" height="265" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#b45309"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            3. 백보좌 심판 (계 20:11~15)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fde68a" font-size="10" font-weight="bold">⚖️ 크고 흰 보좌 (Great White Throne)</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· 땅과 하늘이 피하여 간 데 없더라</text>
            <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· 죽은 자들이 큰 자나 작은 자나 보좌 앞에 섬</text>
            <text x="0" y="74" fill="#38bdf8" font-size="10" font-weight="bold">📖 두 종류의 책</text>
            <text x="0" y="90" fill="#cbd5e1" font-size="8.8">· 행위록: 자기 행위를 따라 기록된 대로 심판</text>
            <text x="0" y="106" fill="#fde047" font-size="9" font-weight="black">· 생명책 (Book of Life)</text>
            <text x="0" y="128" fill="#f87171" font-size="10" font-weight="bold">⚰️ 둘째 사망 (불못)</text>
            <text x="0" y="144" fill="#fca5a5" font-size="8.5">· 사망과 음부도 불못에 던져짐</text>
            <text x="0" y="160" fill="#ffffff" font-size="8.5" font-weight="bold">"누구든지 생명책에 기록되지 못한 자는 불못에 던져지더라"</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 죄와 사망의 완전한 종결 ➔ 거룩한 성 새 예루살렘 (계 21~22장)
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          옛 하늘과 옛 땅이 사라지고, 하나님께서 성도들의 눈에서 모든 눈물을 닦아 주시며 영원한 기쁨과 생명수의 강이 흐르는 새 창조의 완성이 도래합니다.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#38bdf8" font-size="9.5" text-anchor="middle">
          "이것들을 증언하신 이가 이르시되 내가 진실로 속히 오리라 하시거늘 아멘 주 예수여 오시옵소서!" (계 22:20)
        </text>
      </g>
    </svg>
  `;
}

// ============================================================================
// [중요] getMultiMapsForBook: 66권 전체에 실제 지리 지도가 반드시 포함되도록 구성
// ============================================================================
function getMultiMapsForBook(book) {
  if (!book) return [];

  const bookId = book.id;
  const bookName = book.name;

  // 1. 창세기 (총 6장: 3장 실제 지도 + 3장 핵심 구속사 인포그래픽)
  if (bookId === 1 || bookName === "창세기") {
    return [
      {
        id: "gen_1",
        label: "1장. 족장 대장정 지도",
        title: "창세기 제1장: 메소포타미아 ~ 가나안 ~ 애굽 족장 이동 경로 지도",
        desc: "갈대아 우르(출발) ➔ 하란(데라 별세) ➔ 세겜(첫 단) ➔ 벧엘(장막) ➔ 헤브론(막벨라 굴) ➔ 브엘세바(에셀나무) ➔ 애굽 고센 땅(요셉) 지리 경로.",
        render: () => renderPatriarchsFullMapSvg()
      },
      {
        id: "gen_2",
        label: "2장. 에덴 4대강 & 아라랏산 지도",
        title: "창세기 제2장: 에덴동산 4대 강(유프라테스·티그리스)과 노아 방주 아라랏산 지도",
        desc: "에덴동산 4대 강(비손, 기혼, 힛데겔, 유브라데)과 노아 방주가 머문 아라랏 산(해발 5,137m), 그리고 바벨탑 사건의 시날 평지 지리 지도.",
        render: () => renderGenesisPrimevalMapSvg()
      },
      {
        id: "gen_3",
        label: "3장. 가나안 본토 거점 상세 지도",
        title: "창세기 제3장: 아브라함과 야곱의 가나안 본토 거점 상세 지도",
        desc: "세겜 모레 상수리나무, 벧엘과 아이 사이 제단, 살렘(예루살렘), 헤브론 마므레 상수리 수풀, 브엘세바 일곱 우물과 얍복 나루터 지리 상세도.",
        render: () => renderGenesisCanaanDetailedMapSvg()
      },
      {
        id: "gen_4",
        label: "4장. 천지창조 6일의 질서",
        title: "창세기 제4장: 천지창조 6일의 거룩한 질서와 안식 (Creation Order)",
        desc: "1~3일(틀/영역 조성)과 4~6일(공간/피조물 충만)의 완벽한 짝과 제7일 안식의 축복 (창 1:1 ~ 2:3).",
        render: () => renderGenesisCreationSixDaysSvg()
      },
      {
        id: "gen_5",
        label: "5장. 타락과 원시복음(창 3:15)",
        title: "창세기 제5장: 인류의 타락과 여자의 후손(원시복음, Protoevangelium)",
        desc: "선악과 불순종과 죄의 기원, 공의로운 심판 선고, 그리고 여자의 후손(창 3:15)과 가죽옷을 통한 대속의 첫 복음.",
        render: () => renderGenesisFallProtoevangeliumSvg()
      },
      {
        id: "gen_6",
        label: "6장. 12지파 가계도 & 메시아 계보",
        title: "창세기 제6장: 믿음의 조상 아브라함과 이스라엘 12지파 가계도",
        desc: "아브라함 ➔ 이삭 ➔ 야곱의 4 아내(레아, 라헬, 빌하, 실바)와 12아들, 넷째 아들 유다를 통한 메시아 왕통 계보도.",
        render: () => renderPatriarchsFamilyTreeSvg()
      }
    ];
  }

  // 2. 출애굽기 (총 5장: 3장 시내산/성막 + 대제사장 의복 + 십계명 돌판)
  if (bookId === 2 || bookName === "출애굽기") {
    return [
      {
        id: "exo_1",
        label: "1장. 출애굽 & 홍해 지도",
        title: "출애굽기 제1장: 출애굽 10대 재앙과 홍해 도하 여정 지도",
        desc: "라암셋 출발 ➔ 숙곳 ➔ 비하히롯(홍해 기적 도하) ➔ 수르 광야 ➔ 마라(쓴물) ➔ 엘림(종려 70주) ➔ 르비딤(반석 생수) ➔ 시내산 도착.",
        render: () => renderExodusAndTabernacleSvg()
      },
      {
        id: "exo_2",
        label: "2장. 시내산 성막 입체 평면도",
        title: "출애굽기 제2장: 시내산 성막(Tabernacle) 3단계 구조 & 6대 성물 배치도",
        desc: "성막 뜰(번제단, 물두멍) ➔ 성소(순금 등잔대, 진설병 떡상, 분향단) ➔ 지성소(속죄소 시은좌, 언약궤 안 십계명 돌판, 아론 싹난 지팡이, 만나 항아리).",
        render: () => renderTabernacleDetailSvg()
      },
      {
        id: "exo_3",
        label: "3장. 대제사장 의복 & 흉패 12보석",
        title: "출애굽기 제3장: 대제사장의 거룩한 의복과 판결 흉패 (출 28장)",
        desc: "여호와께 성결 순금 패, 12지파 이름을 짊어진 양 어깨 견대, 가슴의 12보석 판결 흉패와 우림·둠밈, 그리고 예수 그리스도의 대제사장 직분 예표.",
        render: () => renderHighPriestGarmentsSvg()
      },
      {
        id: "exo_4",
        label: "4장. 십계명 두 돌판 구조도",
        title: "출애굽기 제4장: 십계명(Ten Commandments) 두 돌판 구조도",
        desc: "대신(對神) 관계 1~4계명(하나님 사랑)과 대인(對人) 관계 5~10계명(이웃 사랑), 예수님의 대강령 총괄 요약(마 22장).",
        render: () => renderTenCommandmentsSvg()
      },
      {
        id: "exo_5",
        label: "5장. 출애굽기 구조 로드맵",
        title: "출애굽기 제5장: 출애굽과 시내산 언약 전체 구속사 구조도",
        desc: "노예 생활의 비탄과 하나님의 구원, 시내산 언약 체결과 십계명 율법, 그리고 하나님의 영광이 충만한 성막 봉헌의 파노라마.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 3. 레위기 (총 4장: 5대 제사 + 7대 절기 + 레위기 11장 식생활 + 대속죄일·희년)
  if (bookId === 3 || bookName === "레위기") {
    return [
      {
        id: "lev_1",
        label: "1장. 5대 제사 일람표",
        title: "레위기 제1장: 시내산 성막 5대 제사(번제, 소제, 화목제, 속죄제, 속건제) 인포그래픽",
        desc: "거룩하신 하나님께 나아가는 5대 제사의 제물, 절차, 그리스도의 십자가 대속 의미 일람.",
        render: () => renderLeviticusSvg()
      },
      {
        id: "lev_2",
        label: "2장. 7대 절기 구속사 지도",
        title: "레위기 제2장: 이스라엘 7대 절기(Feasts) 구속사 캘린더",
        desc: "초림으로 성취된 봄 절기(유월절, 무교절, 초실절, 칠칠절/오순절)와 재림 완성 예표인 가을 절기(나팔절, 대속죄일, 초막절).",
        render: () => renderSevenFeastsSvg()
      },
      {
        id: "lev_3",
        label: "3장. 정결 음식과 성결 규례",
        title: "레위기 제3장: 정결한 음식과 부정한 음식 (레위기 11장 성결 규례)",
        desc: "육상 동물(굽 갈라짐+되새김질), 수중 생물(지느러미+비늘), 조류와 곤충의 정결 기준과 성도의 세속 구별 사명.",
        render: () => renderLeviticusDietaryLawsSvg()
      },
      {
        id: "lev_4",
        label: "4장. 대속죄일 & 50년 희년",
        title: "레위기 제4장: 대속죄일(욤 키푸르)과 50년 희년(Jubilee)의 대자유",
        desc: "지성소 피 뿌림과 아사셀 염소, 50년 희년의 토지 반환·노예 해방·부채 탕감과 예수님의 참된 해방 복음.",
        render: () => renderDayOfAtonementJubileeSvg()
      }
    ];
  }

  // 4. 민수기 (총 4장: 진영도 + 40년 여정 + 인구조사 비교 + 놋뱀과 별)
  if (bookId === 4 || bookName === "민수기") {
    return [
      {
        id: "num_1",
        label: "1장. 12지파 진영 배치도",
        title: "민수기 제1장: 성막 중심 동서남북 12지파 진영 배치 & 행진 순서도",
        desc: "동쪽(유다·잇사갈·스불론), 남쪽(르우벤·시므온·갓), 서쪽(에브라임·므낫세·베냐민), 북쪽(단·아셀·납달리)과 레위 지파.",
        render: () => renderWildernessCampSvg()
      },
      {
        id: "num_2",
        label: "2장. 40년 광야 여정 지도",
        title: "민수기 제2장: 이스라엘 40년 광야 시험과 실제 이동 노정 지도",
        desc: "시내산 ➔ 기브롯 핫다아와 ➔ 하세롯 ➔ 가데스 바네아 12정탐꾼 불신앙 ➔ 38년 방황 루프 ➔ 호르산 ➔ 부논 놋뱀 구원 ➔ 모압 평지 도착 지도.",
        render: () => renderNumbersWildernessRouteMapSvg()
      },
      {
        id: "num_3",
        label: "3장. 1·2차 인구조사 비교표",
        title: "민수기 제3장: 제1차(시내산) vs 제2차(모압 평지) 인구조사 비교표",
        desc: "총 60만 대군의 보존, 므낫세 지파의 대증가(+20,500) vs 바알브올 범죄로 급감한 시므온 지파(-37,100)의 구속사 교훈.",
        render: () => renderNumbersCensusComparisonSvg()
      },
      {
        id: "num_4",
        label: "4장. 놋뱀 구원 & 발람의 별",
        title: "민수기 제4장: 장대 위의 놋뱀과 발람의 별(메시아) 예언",
        desc: "쳐다본즉 모두 산 장대 위의 놋뱀(요 3:14 십자가 예표)과 야곱에게서 나오는 한 별(민 24:17 만왕의 왕).",
        render: () => renderBalaamStarBronzeSerpentSvg()
      }
    ];
  }

  // 5. 신명기 (총 3장: 쉐마 + 느보산 조망 + 그리심/에발산 언약 갱신)
  if (bookId === 5 || bookName === "신명기") {
    return [
      {
        id: "deu_1",
        label: "1장. 모압 언약 & 쉐마",
        title: "신명기 제1장: 모압 평지 언약과 쉐마(Shema) 이스라엘 교육",
        desc: "느보산 조망과 모세의 3대 고별 설교, 마음과 뜻과 힘을 다해 여호와를 사랑하라는 쉐마 신앙 교육.",
        render: () => renderDeuteronomySvg()
      },
      {
        id: "deu_2",
        label: "2장. 느보산 가나안 조망 지도",
        title: "신명기 제2장: 느보산 비스가 봉우리에서 바라본 약속의 땅 조망 지도",
        desc: "모세의 마지막 시선: 여리고 종려나무 성읍, 길르앗, 단, 납달리, 에브라임, 서해 지중해까지 한눈에 조망한 신명기 34장 현장 지도.",
        render: () => renderDeuteronomyNeboMapSvg()
      },
      {
        id: "deu_3",
        label: "3장. 그리심·에발산 언약 갱신도",
        title: "신명기 제3장: 그리심산(축복)과 에발산(저주) 언약 갱신도",
        desc: "세겜 골짜기 앞 12지파 낭독과 아멘 화답, 저주의 에발산에 쌓은 돌제단과 번제·화목제의 대속 은혜.",
        render: () => renderGerizimEbalBlessingCurseSvg()
      }
    ];
  }

  // 6. 여호수아 (총 3장: 정복 작전도 + 12지파 분배도 + 6대 도피성 지도)
  if (bookId === 6 || bookName === "여호수아") {
    return [
      {
        id: "jos_1",
        label: "1장. 가나안 정복 작전도",
        title: "여호수아 제1장: 가나안 정복 3대 작전 지도 (중부·남부·북부)",
        desc: "요단강 도하 ➔ 길갈 진영 ➔ 중부(여리고·아이) ➔ 남부(기브온 태양 머묾 연합군 격파) ➔ 북부(메롬 물가 하솔 연합군 소탕).",
        render: () => renderJoshuaConquestSvg()
      },
      {
        id: "jos_2",
        label: "2장. 12지파 가나안 분배도",
        title: "여호수아 제2장: 가나안 12지파 기업 분배도 및 실로 성막 중심 지도",
        desc: "요단 서편(유다, 에브라임, 므낫세 서편 등)과 동편(르우벤, 갓, 므낫세 동편) 땅 분배 및 실로 회막 안치.",
        render: () => renderTwelveTribesAllotmentSvg()
      },
      {
        id: "jos_3",
        label: "3장. 6대 도피성 구속사 지도",
        title: "여호수아 제3장: 요단 동서 6대 도피성 (Cities of Refuge) 구속사 지도",
        desc: "서편(게데스, 세겜, 헤브론) & 동편(골란, 길르앗 라못, 베셀) 6대 도피성과 대제사장의 죽음으로 얻는 완전한 자유.",
        render: () => renderSixCitiesOfRefugeSvg()
      }
    ];
  }

  // 7. 사사기 (총 2장 모두 지도)
  if (bookId === 7 || bookName === "사사기") {
    return [
      {
        id: "jdg_1",
        label: "1장. 7대 악순환 & 사사 거점",
        title: "사사기 제1장: 7대 영적 악순환 사이클 & 사사들의 활동 거점",
        desc: "범죄 ➔ 징계 ➔ 부르짖음 ➔ 구원 ➔ 평화의 사이클과 옷니엘, 에훗, 드보라, 기드온, 입다, 삼손의 거점.",
        render: () => renderJudgesCycleSvg()
      },
      {
        id: "jdg_2",
        label: "2장. 12사사 격전지 지리 지도",
        title: "사사기 제2장: 이스라엘 주요 사사 12인의 활동 거점 및 격전지 지도",
        desc: "드보라(다볼산 & 기손강 철병거 격파), 기드온(오브라 & 하롯샘 300용사), 삼손(소라, 딤나, 가사), 에훗(여리고) 등 실제 현장 지도.",
        render: () => renderJudgesLocationsMapSvg()
      }
    ];
  }

  // 8. 룻기 (총 2장)
  if (bookId === 8 || bookName === "룻기") {
    return [
      {
        id: "rut_1",
        label: "1장. 모압~베들레헴 여정 지도",
        title: "룻기 제1장: 모압에서 베들레헴 보아스의 밭으로의 귀환 여정 지도",
        desc: "흉년을 피해 떠났던 모압에서 베들레헴으로 돌아온 나오미와 룻, 보리 추수 밭에서의 은혜로운 만남.",
        render: () => renderRuthSvg()
      },
      {
        id: "rut_2",
        label: "2장. 고엘 구속사 계보",
        title: "룻기 제2장: 기업 무를 자(고엘) 제도와 다윗·그리스도 구속사 계보",
        desc: "보아스와 룻 ➔ 오벳 ➔ 이새 ➔ 다윗 왕 ➔ 예수 그리스도 탄생으로 이어지는 이방 여인을 품으신 하나님의 은혜.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 9. 사무엘상 / 사무엘하 (총 2장 모두 지도)
  if (bookId === 9 || bookId === 10 || bookName.includes("사무엘")) {
    return [
      {
        id: "sam_1",
        label: "1장. 다윗 10년 망명 도피로 지도",
        title: "사무엘상: 다윗의 10년 망명 도피 경로 지리 지도",
        desc: "기브아 ➔ 놉 ➔ 가드 ➔ 아둘람 굴 ➔ 모압 미스베 ➔ 그일라 ➔ 십 황무지 ➔ 엔게디 요새 ➔ 시글락으로 이어진 연단 여정.",
        render: () => renderDavidSvg()
      },
      {
        id: "sam_2",
        label: "2장. 다윗 통일왕국 판도 지도",
        title: "사무엘하: 다윗의 통일 이스라엘 왕국 최대 판도 및 시온 산성 지도",
        desc: "유프라테스 강에서 다메섹, 가나안, 애굽 시내까지 확장된 최대 영토와 예루살렘 시온 산성 수도 탈환 & 다윗 언약.",
        render: () => renderDavidKingdomMapSvg()
      }
    ];
  }

  // 10. 열왕기상/하, 역대상/하 (총 3장: 분열왕국 + 솔로몬 성전 + 왕조·선지자 연대표)
  if (bookId >= 11 && bookId <= 14) {
    return [
      {
        id: "kgs_1",
        label: "1장. 분열왕국 지도 & 갈멜산",
        title: "열왕기 제1장: 북이스라엘 vs 남유다 분열왕국 지도 & 갈멜산 영적 대결",
        desc: "솔로몬 사후 분열: 북이스라엘(사마리아, 단·벧엘 금송아지 제단, 엘리야의 갈멜산) vs 남유다(예루살렘 성전 다윗 왕조).",
        render: () => renderDividedKingdomSvg()
      },
      {
        id: "kgs_2",
        label: "2장. 솔로몬 성전 입체도",
        title: "열왕기 제2장: 예루살렘 솔로몬 성전(Solomon's Temple) 입체 구조도",
        desc: "모리아 산 위에 세워진 솔로몬 성전 내소(지성소), 외소(성소), 낭실, 야긴과 보아스 놋기둥, 놋 바다 정밀 구조도.",
        render: () => renderSolomonTempleSvg()
      },
      {
        id: "kgs_3",
        label: "3장. 남북 왕조·선지자 연대표",
        title: "열왕기 제3장: 남북 분열왕국 39인 왕조 & 주요 활동 선지자 연대표 매트릭스",
        desc: "북이스라엘 19대 왕조(모두 악함)와 남유다 20대 왕조, 엘리야·엘리사·이사야·예레미야 등 동시대 활동 선지자 총람.",
        render: () => renderKingsProphetsTimelineSvg()
      }
    ];
  }

  // 11. 에스라 / 느헤미야 / 에스더 (총 2장 모두 지도)
  if (bookId >= 15 && bookId <= 17) {
    return [
      {
        id: "ezr_1",
        label: "1장. 바벨론 포로 귀환 지도",
        title: "에스라·느헤미야: 바벨론 70년 유수와 3차 귀환 경로 지도",
        desc: "바벨론 유수지 ➔ 페르시아 수산궁 ➔ 1차 스룹바벨(성전 재건), 2차 에스라(율법 부흥), 3차 느헤미야(성벽 완공) 귀환로.",
        render: () => renderExileAndWallSvg()
      },
      {
        id: "ezr_2",
        label: "2장. 예루살렘 성벽 & 10개 성문도",
        title: "느헤미야 52일 예루살렘 성벽 & 10개 성문 재건 배치도",
        desc: "양문, 어문, 옛문, 골짜기문, 분문, 샘문, 수문(에스라 성경강좌 사경회 현장), 마문, 동문, 함밉갓문 예루살렘 성벽도.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 12. 다니엘서 (총 2장)
  if (bookId === 27 || bookName === "다니엘") {
    return [
      {
        id: "dan_1",
        label: "1장. 4대 제국 신상 환상",
        title: "다니엘 제1장: 느부갓네살의 거대한 신상 환상 & 4대 제국의 흥망성쇠",
        desc: "금 머리(바벨론) ➔ 은 가슴·팔(메대·페르시아) ➔ 놋 배(헬라) ➔ 철 다리(로마) ➔ 영원한 뜨인 돌 하나님 나라.",
        render: () => renderDanielFourEmpiresStatueSvg()
      },
      {
        id: "dan_2",
        label: "2장. 4대 제국 판도 & 비전",
        title: "다니엘 제2장: 바벨론 제국과 페르시아 수산궁 지리 지도 및 환상",
        desc: "바벨론 궁전 풀무불, 사자굴, 네 짐승 환상, 그리고 세상 제국을 심판하실 인자 같은 이의 영원한 권세.",
        render: () => renderMajorProphetsSvg(book)
      }
    ];
  }

  // 13. 사복음서 (마태, 마가, 누가, 요한) (총 4장: 갈릴리 + 예루살렘 고난 + 가상칠언·부활 + 4색 관점)
  if (bookId >= 40 && bookId <= 43) {
    return [
      {
        id: "gos_1",
        label: "1장. 갈릴리 사역 지도",
        title: `${book.name} 제1장: 예수 그리스도의 갈릴리 호수 중심 천국 복음 사역 지도`,
        desc: "가버나움(본부), 벳새다, 거라사, 고라신, 막달라, 디베랴, 가나, 나사렛, 팔복산 산상수훈 현장 지리 지도.",
        render: () => renderGospelsJesusSvg()
      },
      {
        id: "gos_2",
        label: "2장. 예루살렘 고난주간 동선 지도",
        title: `${book.name} 제2장: 예루살렘 고난 주간 실제 지형 동선 & 십자가의 길(Via Dolorosa) 지도`,
        desc: "감람산 ➔ 베다니 ➔ 마가 다락방 ➔ 겟세마네 동산 ➔ 가야바 법정 ➔ 빌라도 관저 ➔ 골고다 언덕 ➔ 빈 무덤 부활 현장.",
        render: () => renderJerusalemPassionWeekMapSvg()
      },
      {
        id: "gos_3",
        label: "3장. 가상칠언과 부활 승리",
        title: `${book.name} 제3장: 골고다 십자가 가상칠언(架上七言)과 부활의 승리`,
        desc: "용서·구원·효도·고뇌·갈증·승리·위탁의 7가지 마지막 말씀, 빈 무덤과 부활 승리, 온 천하 만민을 향한 대사명 선포.",
        render: () => renderSevenWordsOnCrossSvg()
      },
      {
        id: "gos_4",
        label: "4장. 복음서 관점 구조도",
        title: `${book.name} 제4장: 사복음서 고유 관점 & 핵심 테마 인포그래픽`,
        desc: "마태(왕으로 오신 메시야), 마가(섬기는 종), 누가(인자의 긍휼), 요한(하나님의 독생자)의 구속사적 계시 체계.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 14. 사도행전 (총 3장 모두 실제 지도)
  if (bookId === 44 || bookName === "사도행전") {
    return [
      {
        id: "act_1",
        label: "1장. 1·2차 전도여행 지도",
        title: "사도행전 제1장: 사도 바울의 제1차 & 제2차 지중해 전도여행 지도",
        desc: "1차(안디옥 ➔ 구브로 ➔ 버가 ➔ 비시디아 안디옥 ➔ 루스드라) & 2차(드로아 유럽 환상 ➔ 빌립보 ➔ 데살로니가 ➔ 고린도 18개월).",
        render: () => renderPaulFirstSecondSvg()
      },
      {
        id: "act_2",
        label: "2장. 3차 여행 & 에베소 부흥",
        title: "사도행전 제2장: 사도 바울의 제3차 전도여행 & 로마 호송 항해 여정 지도",
        desc: "에베소 두란노 서원 3년 부흥 ➔ 밀레도 눈물의 고별 설교 ➔ 예루살렘 체포 ➔ 가이사랴 2년 구금 ➔ 로마행 출항.",
        render: () => renderPaulThirdRomeSvg()
      },
      {
        id: "act_3",
        label: "3장. 로마 압송 난파 항해로 지도",
        title: "사도행전 제3장: 바울의 로마 압송 항해로 & 유라굴로 광풍 극복 지도",
        desc: "그레데 미항 ➔ 유라굴로 광풍 14일 표류 ➔ 멜리데(몰타) 섬 276명 전원 구조 ➔ 수라구사 ➔ 보디올 ➔ 로마 셋집 전도.",
        render: () => renderPaulRomeVoyageMapSvg()
      }
    ];
  }

  // 15. 요한계시록 (총 4장: 7교회 지도 + 3대 심판 + 천년왕국/백보좌 + 새 예루살렘)
  if (bookId === 66 || bookName === "요한계시록") {
    return [
      {
        id: "rev_1",
        label: "1장. 소아시아 7교회 지도",
        title: "요한계시록 제1장: 소아시아 일곱 교회 실제 순환 우편로 지리 지도",
        desc: "에게해 밧모 섬 ➔ 에베소 ➔ 서머나 ➔ 버가모 ➔ 두아디라 ➔ 사데 ➔ 빌라델비아 ➔ 라오디게아 순환 도로망 지도.",
        render: () => renderSevenChurchesMapSvg()
      },
      {
        id: "rev_2",
        label: "2장. 3대 재앙 파노라마",
        title: "요한계시록 제2장: 3대 심판 사이클 (7인·7나팔·7대접) ➔ 새 하늘과 새 땅",
        desc: "어린양의 7인 심판, 7나팔, 7대접 마지막 진노와 사탄의 파멸, 그리고 영원한 생명수 강 흐르는 거룩한 새 예루살렘 성.",
        render: () => renderRevelationSealsTrumpetsBowlsSvg()
      },
      {
        id: "rev_3",
        label: "3장. 천년왕국 & 백보좌 심판",
        title: "요한계시록 제3장: 천년왕국(Millennium)과 백보좌 최후 심판",
        desc: "사탄의 1,000년 결박과 성도들의 첫째 부활 왕 노릇, 곡과 마곡 최후 반역 소멸, 그리고 생명책에 따른 백보좌 공의의 심판.",
        render: () => renderMillenniumGreatWhiteThroneSvg()
      },
      {
        id: "rev_4",
        label: "4장. 새 예루살렘과 종말 완성",
        title: "요한계시록 제4장: 거룩한 성 새 예루살렘과 영원한 하나님 나라",
        desc: "다시는 눈물과 사망과 애통이 없는 새 하늘과 새 땅, 어린양의 보좌로부터 솟아나는 생명수 강과 만왕의 왕 통치.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 16. 그 밖의 모든 권 (시가서, 대예언서, 소예언서, 서신서 등) ➔ 기본 2장 제공!
  const defaultCategoryMap = BIBLE_MAPS_DATA[book.mapType] || {
    title: `${book.name} 배경 지도`,
    desc: book.theme || "역사적 배경과 지리적 상황"
  };

  return [
    {
      id: `book_${book.id}_1`,
      label: "1장. 역사·지리 배경 지도",
      title: defaultCategoryMap.title || `${book.name} 배경 지도`,
      desc: defaultCategoryMap.desc || `${book.name}의 역사적 배경과 지리적 상황`,
      render: () => renderInteractiveSvgMap(book.mapType, book)
    },
    {
      id: `book_${book.id}_2`,
      label: "2장. 책의 구조 & 요점 인포그래픽",
      title: `${book.name} (${book.engName}) 전체 구조 및 핵심 요절 인포그래픽`,
      desc: `저자: ${book.author || '미상'} | 연대: ${book.date || '역사적 기록'} | 총 ${book.chapters}장의 4단계 전개 구조와 핵심 요절.`,
      render: () => renderUniversalBookInfographic(book)
    }
  ];
}
