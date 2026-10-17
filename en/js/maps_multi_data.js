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
      <text x="145" y="186" fill="#7dd3fc" font-size="8.5" text-anchor="middle">Cyprus</text>

      <!-- 홍해 (수에즈만 & 아카바만 & 시나이 반도) -->
      <path d="M 140,360 L 165,440 L 152,440 L 132,365 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <path d="M 195,365 L 185,440 L 195,440 L 205,365 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <polygon points="142,362 203,363 175,435" fill="#1e293b" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="175" y="390" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">Sinai Peninsula</text>

      <!-- 페르시아만 (동남쪽 바다) -->
      <path d="M 570,335 Q 630,320 700,320 L 700,440 L 525,440 Q 540,360 570,335 Z" 
            fill="#091c32" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.9"/>
      <text x="625" y="375" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">Persian Gulf</text>

      <!-- 흑해 & 카스피해 -->
      <path d="M 160,0 Q 230,45 280,0 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="210" y="22" fill="#7dd3fc" font-size="9">Black Sea</text>

      <path d="M 570,40 Q 640,60 620,140 Q 580,120 570,40 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="1.5"/>
      <text x="595" y="85" fill="#7dd3fc" font-size="9">Caspian Sea</text>

      <!-- 나일강 & 고센 삼각주 -->
      <path d="M 85,340 L 130,340 L 110,380 Z" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
      <path d="M 110,380 L 105,440" stroke="#34d399" stroke-width="2.5"/>
      <text x="108" y="360" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Nile Delta</text>

      <!-- 가나안 요단 열곡대 (갈릴리 - 요단강 - 사해) -->
      <ellipse cx="225" cy="225" rx="5.5" ry="7.5" fill="#38bdf8" stroke="#0284c7"/>
      <path d="M 225,232 Q 223,250 225,260" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
      <ellipse cx="225" cy="275" rx="6.5" ry="15" fill="#0284c7" stroke="#38bdf8"/>
      <text x="238" y="278" fill="#7dd3fc" font-size="9">Dead Sea</text>

      <!-- 메소포타미아 2대 젖줄: 유프라테스강 & 티그리스강 -->
      <path d="M 300,90 Q 340,120 400,170 T 480,240 T 545,320" 
            fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <text x="430" y="195" fill="#bae6fd" font-size="10" font-weight="bold">Euphrates</text>

      <path d="M 350,75 Q 410,110 470,180 T 530,260 T 555,320" 
            fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round"/>
      <text x="485" y="145" fill="#93c5fd" font-size="10" font-weight="bold">Tigris</text>

      <!-- 비옥한 초승달 지대 (Fertile Crescent) 녹색 아치 -->
      <path d="M 545,310 C 470,220 410,115 320,85 C 260,70 230,140 220,250 C 205,290 160,325 125,335" 
            fill="none" stroke="#10b981" stroke-width="32" opacity="0.16" stroke-linecap="round"/>
      <text x="320" y="70" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">🌿 Fertile Crescent</text>

      <!-- 아라랏 산 (노아 방주) -->
      <polygon points="380,50 365,75 395,75" fill="#94a3b8" stroke="#f8fafc" stroke-width="1.2"/>
      <text x="380" y="45" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">🏔️ Mount Ararat</text>

      <!-- 지중해 대해 텍스트 -->
      <text x="75" y="210" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Mediterranean (Great Sea)</text>
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
      <text x="50" y="190" fill="#38bdf8" font-size="14" font-weight="bold" transform="rotate(-90, 50, 190)">Mediterranean (Great Sea)</text>

      <!-- 갈멜산 곶 (Mount Carmel) -->
      <text x="145" y="170" fill="#a7f3d0" font-size="9" font-weight="bold">Cape Carmel ➔</text>

      <!-- 갈릴리 호수 (북쪽) -->
      <ellipse cx="270" cy="80" rx="12" ry="16" fill="#0ea5e9" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="290" y="85" fill="#7dd3fc" font-size="10" font-weight="bold">Sea of Galilee</text>

      <!-- 요단강 물줄기 -->
      <path d="M 270,96 Q 265,150 270,195 T 275,230" fill="none" stroke="#0ea5e9" stroke-width="3.5" stroke-linecap="round"/>
      <text x="282" y="165" fill="#38bdf8" font-size="9.5" font-weight="bold">Jordan River</text>

      <!-- 얍복강 (요단 동편 지류) -->
      <path d="M 270,180 Q 320,175 360,190" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="325" y="172" fill="#93c5fd" font-size="9">Jabbok River ➔</text>

      <!-- 사해 (염해) -->
      <ellipse cx="275" cy="295" rx="16" ry="55" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      <!-- 사해 리산 반도 (Lisan) -->
      <path d="M 265,300 Q 285,305 275,320 Z" fill="#152132"/>
      <text x="300" y="300" fill="#7dd3fc" font-size="11" font-weight="bold">Dead Sea (Salt Sea)</text>

      <!-- 아르논 골짜기 -->
      <path d="M 290,310 Q 340,315 370,305" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <text x="330" y="305" fill="#93c5fd" font-size="8.5">Arnon River</text>

      <!-- 중앙 산지 음영 (에브라임 산지, 유다 산지) -->
      <path d="M 215,110 Q 225,200 215,310" stroke="#f59e0b" stroke-width="22" opacity="0.08" stroke-linecap="round"/>
      <text x="215" y="115" fill="#fde047" font-size="9" text-anchor="middle">Hills of Samaria</text>
      <text x="210" y="240" fill="#fde047" font-size="9" text-anchor="middle">Hills of Judah</text>

      <!-- 네게브 사막 (남방) -->
      <text x="180" y="390" fill="#fbbf24" font-size="11" font-weight="bold">Negev (southern desert)</text>

      <!-- 요단 동편 (길르앗 & 모압) -->
      <text x="340" y="140" fill="#cbd5e1" font-size="10">Hills of Gilead</text>
      <text x="340" y="260" fill="#cbd5e1" font-size="10">Moab Plateau</text>
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
      <text x="70" y="45" fill="#38bdf8" font-size="13" font-weight="bold">Mediterranean (Great Sea)</text>

      <!-- 홍해 수에즈만 (서쪽 뿔) -->
      <path d="M 60,250 Q 110,320 135,440 L 105,440 Q 80,330 40,260 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="55" y="350" fill="#7dd3fc" font-size="10" font-weight="bold" transform="rotate(-65, 55, 350)">Gulf of Suez (Red Sea)</text>

      <!-- 홍해 아카바만 (동쪽 뿔) -->
      <path d="M 270,250 Q 285,320 295,440 L 270,440 Q 260,330 245,260 Z" fill="#091c32" stroke="#0ea5e9" stroke-width="2"/>
      <text x="290" y="350" fill="#7dd3fc" font-size="10" font-weight="bold" transform="rotate(75, 290, 350)">Gulf of Aqaba</text>

      <!-- 시나이 반도 삼각 뿔 형태 -->
      <polygon points="115,265 255,265 200,380" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
      <text x="185" y="300" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">Sinai Peninsula</text>

      <!-- 아라바 골짜기 (사해에서 아카바만까지 길게 뻗은 지구대) -->
      <line x1="285" y1="120" x2="265" y2="255" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,3"/>
      <text x="295" y="195" fill="#93c5fd" font-size="9">Arabah Valley</text>

      <!-- 사해 (염해) -->
      <ellipse cx="285" cy="100" rx="9" ry="24" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8"/>
      <text x="305" y="105" fill="#7dd3fc" font-size="10" font-weight="bold">Dead Sea</text>

      <!-- 모압 평지 & 에돔 산지 라벨 -->
      <text x="330" y="80" fill="#a7f3d0" font-size="10" font-weight="bold">Plains of Moab ➔</text>
      <text x="310" y="170" fill="#fdba74" font-size="9.5">Hills of Edom</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Genesis Part 1: Map of the great journeys of the patriarchs Abraham, Isaac and Jacob</text>
      <text x="530" y="35" fill="#cbd5e1" font-size="11">Mesopotamia ~ Canaan ~ Egypt</text>



      <!-- 아브라함·족장 실제 이동 경로 (황금색 발광 점선 패스) -->
      <path d="M 520,295 L 475,235 L 325,85 L 248,200 L 222,248 L 220,260 L 216,275 L 210,290 L 125,310" 
            fill="none" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8,4" filter="url(#pinGlow)"/>

      <!-- 주요 지리 거점 핀 & 텍스트 카드 -->
      <g filter="url(#pinGlow)">
        <!-- 1. 갈대아 우르 -->
        <circle cx="520" cy="295" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.8"/>
        <circle cx="520" cy="295" r="14" fill="#ef4444" opacity="0.25"/>
        <rect x="445" y="307" width="150" height="30" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#ef4444" stroke-width="0.9"/>
        <text x="520" y="322" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">1. Ur of the Chaldees (start)</text>
        <text x="520" y="333" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Called out of idolatry (Gen 11~12)</text>

        <!-- 2. 바벨론 -->
        <circle cx="475" cy="235" r="5" fill="#eab308" stroke="#ffffff" stroke-width="1.2"/>
        <rect x="430" y="212" width="90" height="18" rx="4" fill="#0f172a" fill-opacity="0.85" stroke="#ca8a04" stroke-width="0.8"/>
        <text x="475" y="225" fill="#fde047" font-size="9.5" font-weight="bold" text-anchor="middle">Babylon (plain of Shinar)</text>

        <!-- 3. 하란 -->
        <circle cx="325" cy="85" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.8"/>
        <circle cx="325" cy="85" r="14" fill="#ef4444" opacity="0.25"/>
        <rect x="250" y="97" width="150" height="30" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#ef4444" stroke-width="0.9"/>
        <text x="325" y="112" fill="#fca5a5" font-size="10.5" font-weight="bold" text-anchor="middle">2. Haran (Terah dies)</text>
        <text x="325" y="123" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Leaves for Canaan at 75</text>

        <!-- 4. 다메섹 -->
        <circle cx="248" cy="200" r="4.5" fill="#64748b" stroke="#ffffff" stroke-width="1"/>
        <rect x="256" y="191" width="105" height="18" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#475569" stroke-width="0.8"/>
        <text x="308" y="204" fill="#e2e8f0" font-size="9" text-anchor="middle">Damascus (Eliezer's home)</text>

        <!-- 5. 세겜 (가나안 첫 제단) -->
        <circle cx="222" cy="248" r="5.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.2"/>
        <rect x="110" y="239" width="105" height="18" rx="3" fill="#0f172a" fill-opacity="0.9" stroke="#f59e0b" stroke-width="0.8"/>
        <text x="162" y="252" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">3. Shechem (oak of Moreh)</text>

        <!-- 6. 벧엘 & 아이 -->
        <circle cx="220" cy="260" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
        <rect x="125" y="258" width="90" height="17" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#d97706" stroke-width="0.8"/>
        <text x="170" y="270" fill="#fde047" font-size="8.5" text-anchor="middle">Bethel (tent & altar)</text>

        <!-- 7. 헤브론 (마므레 상수리) -->
        <circle cx="216" cy="275" r="6" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="95" y="276" width="115" height="19" rx="3" fill="#0f172a" fill-opacity="0.9" stroke="#10b981" stroke-width="0.8"/>
        <text x="152" y="289" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">4. Hebron (Machpelah)</text>

        <!-- 8. 브엘세바 -->
        <circle cx="210" cy="290" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
        <rect x="95" y="296" width="110" height="18" rx="3" fill="#0f172a" fill-opacity="0.85" stroke="#f59e0b" stroke-width="0.8"/>
        <text x="150" y="309" fill="#fde047" font-size="8.5" text-anchor="middle">5. Beersheba (tamarisk)</text>

        <!-- 9. 애굽 고센 땅 (나일강 삼각주) -->
        <circle cx="125" cy="310" r="6.5" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="125" cy="310" r="13" fill="#3b82f6" opacity="0.25"/>
        <rect x="50" y="322" width="150" height="28" rx="5" fill="#0f172a" fill-opacity="0.9" stroke="#3b82f6" stroke-width="0.9"/>
        <text x="125" y="336" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">6. Goshen, Egypt (Joseph settles)</text>
        <text x="125" y="346" fill="#cbd5e1" font-size="8" text-anchor="middle">Israel's family preserved in famine</text>
      </g>

      <!-- 하단 범례 배너 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#0f172a" fill-opacity="0.95" stroke="#334155"/>
        <line x1="15" y1="18" x2="45" y2="18" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="55" y="22" fill="#fde047" font-size="11" font-weight="bold">Patriarchs' journey:</text>
        <text x="115" y="22" fill="#cbd5e1" font-size="10">Ur (call) ➔ Haran (stay) ➔ Canaan: Shechem·Bethel·Hebron (altars built) ➔ Goshen in Egypt (preserved for salvation) | Background: real terrain map</text>
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
      <text x="35" y="35" fill="#38bdf8" font-size="14" font-weight="bold">🗺️ Genesis Part 2: Map of the four rivers of Eden & Mount Ararat, where Noah's ark rested</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Geography of primeval history, Gen 1~11</text>

      <!-- 바다들 -->
      <!-- 흑해 -->
      <path d="M 120,60 Q 200,50 260,80 L 240,110 Q 170,95 120,105 Z" fill="#0369a1" opacity="0.4"/>
      <text x="180" y="85" fill="#7dd3fc" font-size="10">Black Sea</text>

      <!-- 카스피해 -->
      <path d="M 450,55 Q 490,65 520,130 L 490,160 Q 460,110 440,80 Z" fill="#0369a1" opacity="0.4"/>
      <text x="475" y="105" fill="#7dd3fc" font-size="10">Caspian Sea</text>

      <!-- 페르시아만 -->
      <path d="M 520,340 Q 560,310 650,350 L 650,420 L 500,420 Z" fill="#0369a1" opacity="0.35"/>
      <text x="560" y="390" fill="#7dd3fc" font-size="11">Persian Gulf</text>

      <!-- 지중해 동부 -->
      <path d="M 0,140 L 90,140 Q 60,220 40,300 L 0,300 Z" fill="#0284c7" opacity="0.3"/>
      <text x="15" y="210" fill="#38bdf8" font-size="11">Mediterranean</text>

      <!-- 1. 아라랏 산 (Mount Ararat: 노아 방주 착륙지) -->
      <polygon points="350,95 330,130 370,130" fill="#94a3b8" stroke="#f8fafc" stroke-width="1.5"/>
      <circle cx="350" cy="115" r="5" fill="#ef4444"/>
      <text x="350" y="85" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">🏔️ Mount Ararat (5,137 m)</text>
      <text x="350" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">Where Noah's ark rested (Gen 8:4)</text>

      <!-- 에덴동산 추정지 & 4대 강 발원지 -->
      <ellipse cx="380" cy="185" rx="55" ry="35" fill="#065f46" opacity="0.35" stroke="#34d399" stroke-dasharray="4,3"/>
      <text x="380" y="180" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">🌿 Likely area of Eden</text>
      <text x="380" y="196" fill="#a7f3d0" font-size="9.5" text-anchor="middle">"A river went out of Eden..."</text>

      <!-- 에덴의 4대 강 물줄기 -->
      <!-- 1. 힛데겔 (티그리스강) -->
      <path d="M 370,195 Q 430,220 480,270 T 540,340" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
      <text x="480" y="255" fill="#93c5fd" font-size="10.5" font-weight="bold">1. Hiddekel (Tigris)</text>

      <!-- 2. 유브라데강 -->
      <path d="M 350,205 Q 390,250 450,295 T 525,350" fill="none" stroke="#0ea5e9" stroke-width="3"/>
      <text x="390" y="285" fill="#93c5fd" font-size="10.5" font-weight="bold">2. Euphrates</text>

      <!-- 3. 기혼강 (구스 온 땅을 두름) -->
      <path d="M 360,215 Q 320,270 290,340" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,3"/>
      <text x="300" y="325" fill="#7dd3fc" font-size="10">3. Gihon (land of Cush)</text>

      <!-- 4. 비손강 (하윌라 온 땅 금이 있는 곳) -->
      <path d="M 400,215 Q 460,280 500,380" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5,3"/>
      <text x="485" y="350" fill="#7dd3fc" font-size="10">4. Pishon (land of Havilah)</text>

      <!-- 2. 시날 평지와 바벨탑 (Tower of Babel) -->
      <g transform="translate(440, 300)">
        <rect x="-10" y="-12" width="100" height="36" rx="6" fill="#451a03" stroke="#f59e0b"/>
        <text x="40" y="5" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">🏛️ Tower of Babel (Shinar)</text>
        <text x="40" y="18" fill="#fef3c7" font-size="9" text-anchor="middle">Languages confused & peoples scattered</text>
      </g>

      <!-- 3. 원복음 배너 -->
      <g transform="translate(30, 310)">
        <rect width="250" height="75" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
        <text x="15" y="22" fill="#c7d2fe" font-size="11" font-weight="bold">⭐ Land of the first gospel (Gen 3:15)</text>
        <text x="15" y="40" fill="#e0e7ff" font-size="10">"The seed of the woman shall bruise your head"</text>
        <text x="15" y="56" fill="#fde047" font-size="10">The redemptive covenant begun with garments of skin (Gen 3:21)</text>
      </g>

      <!-- 하단 설명 바 -->
      <rect x="20" y="398" width="660" height="32" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="350" y="419" fill="#e2e8f0" font-size="10.5" text-anchor="middle">
        Genesis's primeval history is not myth: it is God's creation and judgment unfolding on real rivers and mountains (Mount Ararat, the Euphrates, the Tigris).
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
      <text x="35" y="35" fill="#34d399" font-size="14" font-weight="bold">🗺️ Genesis Part 3: Detailed map of Abraham's and Jacob's bases in Canaan</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Terrain of the Promised Land</text>

      <!-- 좌측: 가나안 지리 지도 (지중해, 갈릴리, 요단강, 사해) -->
      <g transform="translate(30, 60)">
        <!-- 지중해 해안선 -->
        <path d="M 0,0 L 100,0 C 90,80 70,220 50,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="25" y="120" fill="#38bdf8" font-size="12" font-weight="bold" transform="rotate(-90, 25, 120)">Mediterranean</text>

        <!-- 갈릴리 호수 -->
        <ellipse cx="230" cy="40" rx="10" ry="14" fill="#0ea5e9"/>
        <text x="245" y="45" fill="#93c5fd" font-size="9.5">Sea of Galilee</text>

        <!-- 요단강 물줄기 -->
        <path d="M 230,54 Q 225,120 230,170 T 235,210" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="245" y="130" fill="#38bdf8" font-size="9">Jordan River</text>

        <!-- 얍복강 (요단 동편 지류) -->
        <path d="M 230,140 Q 280,135 320,150" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
        <circle cx="280" cy="140" r="5" fill="#f59e0b"/>
        <text x="285" y="135" fill="#fde047" font-size="10" font-weight="bold">Ford of Jabbok (wrestling site)</text>

        <!-- 사해 (염해) -->
        <ellipse cx="235" cy="265" rx="14" ry="48" fill="#0284c7"/>
        <text x="255" y="270" fill="#93c5fd" font-size="10">Dead Sea (Salt Sea)</text>

        <!-- 족장들의 거점 핀 -->
        <!-- 1. 세겜 (모레 상수리나무) -->
        <circle cx="180" cy="120" r="6" fill="#ef4444"/>
        <text x="120" y="123" fill="#fca5a5" font-size="11" font-weight="bold">1. Shechem (first altar)</text>
        <text x="120" y="136" fill="#cbd5e1" font-size="8.5">Abraham's altar & Jacob's field</text>

        <!-- 2. 벧엘 (루스) -->
        <circle cx="180" cy="165" r="6" fill="#f59e0b"/>
        <text x="110" y="168" fill="#fde047" font-size="11" font-weight="bold">2. Bethel (house of God)</text>
        <text x="110" y="181" fill="#cbd5e1" font-size="8.5">Jacob's ladder & vow</text>

        <!-- 3. 살렘 / 모리아산 (예루살렘) -->
        <circle cx="185" cy="195" r="5" fill="#a855f7"/>
        <text x="195" y="198" fill="#d8b4fe" font-size="10">Salem (Melchizedek's blessing)</text>

        <!-- 4. 베들레헴 (에브랏) -->
        <circle cx="180" cy="215" r="4" fill="#ec4899"/>
        <text x="110" y="218" fill="#f472b6" font-size="9.5">Ephrath (Rachel's tomb)</text>

        <!-- 5. 헤브론 (마므레 상수리, 기럇아르바) -->
        <circle cx="170" cy="245" r="7" fill="#10b981"/>
        <circle cx="170" cy="245" r="12" fill="#10b981" opacity="0.2"/>
        <text x="90" y="248" fill="#6ee7b7" font-size="11" font-weight="bold">3. Hebron (Mamre)</text>
        <text x="80" y="261" fill="#cbd5e1" font-size="8.5">Cave of Machpelah (Abraham & Sarah buried)</text>

        <!-- 6. 브엘세바 (일곱 우물) -->
        <circle cx="150" cy="300" r="6" fill="#f59e0b"/>
        <text x="75" y="303" fill="#fde047" font-size="11" font-weight="bold">4. Beersheba (wells)</text>
        <text x="75" y="316" fill="#cbd5e1" font-size="8.5">Planted a tamarisk & prayed</text>
      </g>

      <!-- 우측: 족장의 믿음 계보 카드 -->
      <g transform="translate(400, 65)">
        <rect width="280" height="350" rx="10" fill="#1e293b" stroke="#334155"/>
        <rect width="280" height="32" rx="10" fill="#047857"/>
        <text x="140" y="21" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">👑 Heirs of the covenant of Canaan</text>

        <g transform="translate(15, 45)">
          <!-- 아브라함 -->
          <rect width="250" height="62" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="20" fill="#fbbf24" font-size="11" font-weight="bold">Abraham (father of faith)</text>
          <text x="10" y="36" fill="#cbd5e1" font-size="9.5">Lived by the oaks of Mamre in Hebron,</text>
          <text x="10" y="50" fill="#cbd5e1" font-size="9.5">bought the cave of Machpelah for 400 shekels of silver</text>

          <!-- 이삭 -->
          <rect y="70" width="250" height="62" rx="6" fill="#0f172a" stroke="#38bdf8"/>
          <text x="10" y="90" fill="#38bdf8" font-size="11" font-weight="bold">Isaac (father of obedience & peace)</text>
          <text x="10" y="106" fill="#cbd5e1" font-size="9.5">Gave up every well he dug in the valley of Gerar,</text>
          <text x="10" y="120" fill="#cbd5e1" font-size="9.5">called on the name of the LORD at Beersheba</text>

          <!-- 야곱 -->
          <rect y="140" width="250" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="160" fill="#34d399" font-size="11" font-weight="bold">Jacob (father of the 12 tribes of Israel)</text>
          <text x="10" y="176" fill="#cbd5e1" font-size="9.5">Wrestled with God's angel at the ford of Jabbok,</text>
          <text x="10" y="190" fill="#cbd5e1" font-size="9.5">came to Hebron by way of Shechem and Bethel</text>

          <!-- 요셉 -->
          <rect y="213" width="250" height="75" rx="6" fill="#0f172a" stroke="#ec4899"/>
          <text x="10" y="233" fill="#f472b6" font-size="11" font-weight="bold">Joseph (preserver of redemptive history)</text>
          <text x="10" y="249" fill="#cbd5e1" font-size="9.5">Sold at Dothan, became Egypt's prime minister,</text>
          <text x="10" y="263" fill="#cbd5e1" font-size="9.5">led the whole family to the land of Goshen,</text>
          <text x="10" y="277" fill="#fde047" font-size="9.5">dying wish: "Carry up my bones from here"</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Numbers Part 2: Map of Israel's 40-year wilderness testing and actual route</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Sinai ~ Kadesh ~ Moab</text>

      <!-- 지리 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 북부 -->
        <path d="M 0,0 L 220,0 Q 180,40 140,80 L 0,80 Z" fill="#0284c7" opacity="0.3"/>
        <text x="30" y="40" fill="#38bdf8" font-size="11">Mediterranean</text>

        <!-- 사해 & 아라바 골짜기 -->
        <ellipse cx="280" cy="90" rx="8" ry="25" fill="#0284c7"/>
        <text x="295" y="95" fill="#93c5fd" font-size="10">Dead Sea</text>
        <line x1="280" y1="115" x2="260" y2="280" stroke="#0369a1" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="270" y="190" fill="#64748b" font-size="9">Arabah Valley</text>

        <!-- 홍해 수에즈만 & 아카바만 -->
        <path d="M 40,240 Q 70,300 80,350 L 50,350 Q 40,300 20,250 Z" fill="#0369a1" opacity="0.35"/>
        <path d="M 230,260 Q 250,310 260,350 L 240,350 Q 230,310 215,260 Z" fill="#0369a1" opacity="0.35"/>
        <text x="30" y="310" fill="#7dd3fc" font-size="9">Gulf of Suez</text>
        <text x="245" y="315" fill="#7dd3fc" font-size="9">Gulf of Aqaba</text>

        <!-- 시나이 반도 삼각 지형 -->
        <polygon points="50,220 230,240 140,345" fill="#1e293b" opacity="0.4"/>

        <!-- 40년 실제 방황 경로선 -->
        <!-- 1. 시내산 출발 -> 디베라 -> 기브롯핫다아와 -> 하세롯 -> 가데스바네아 -->
        <path d="M 140,335 L 155,290 L 175,250 L 190,210 L 200,140" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- 2. 가데스 바네아 38년 방황 루프 (원형 점선) -->
        <ellipse cx="180" cy="180" rx="40" ry="30" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="180" y="183" fill="#fca5a5" font-size="9" text-anchor="middle">38 years of wandering (unbelieving generation dies)</text>

        <!-- 3. 가데스 -> 호르산 -> 에돔 우회로(아카바만 에시온게벨) -> 살모나·부논(놋뱀) -> 모압 평지 -->
        <path d="M 200,140 L 230,165 L 240,240 L 270,260 L 310,210 L 320,150 L 315,100 L 285,75" 
              fill="none" stroke="#34d399" stroke-width="3"/>

        <!-- 주요 거점 핀 -->
        <!-- 시내산 -->
        <polygon points="140,325 130,340 150,340" fill="#f97316"/>
        <circle cx="140" cy="335" r="4" fill="#ef4444"/>
        <text x="140" y="352" fill="#fb923c" font-size="10" font-weight="bold" text-anchor="middle">1. Leaving Sinai (Num 10)</text>

        <!-- 가데스 바네아 -->
        <circle cx="200" cy="140" r="7" fill="#ef4444"/>
        <circle cx="200" cy="140" r="12" fill="#ef4444" opacity="0.2"/>
        <text x="140" y="135" fill="#fca5a5" font-size="11" font-weight="bold">2. Kadesh Barnea</text>
        <text x="130" y="148" fill="#cbd5e1" font-size="8.5">12 spies' unbelief ➔ 38 years of wandering decreed</text>

        <!-- 호르산 (아론의 죽음) -->
        <circle cx="230" cy="165" r="5" fill="#94a3b8"/>
        <text x="240" y="168" fill="#e2e8f0" font-size="9.5">Mount Hor (Aaron dies)</text>

        <!-- 부논 (장대 위의 놋뱀) -->
        <circle cx="310" cy="210" r="6" fill="#f59e0b"/>
        <text x="320" y="213" fill="#fde047" font-size="10" font-weight="bold">3. Punon (bronze serpent)</text>
        <text x="320" y="225" fill="#fef08a" font-size="8.5">"When he looked, he lived"</text>

        <!-- 에돔과 모압 경계 -->
        <text x="330" y="180" fill="#94a3b8" font-size="9">Hills of Edom (passage refused)</text>
        <text x="330" y="125" fill="#94a3b8" font-size="9">Territory of Moab</text>

        <!-- 모압 평지 (느보산 아래) -->
        <circle cx="285" cy="75" r="7" fill="#10b981"/>
        <text x="300" y="70" fill="#6ee7b7" font-size="11" font-weight="bold">4. Arrival at the plains of Moab!</text>
        <text x="300" y="83" fill="#a7f3d0" font-size="8.5">2nd census & Deuteronomy farewell sermons</text>
      </g>

      <!-- 우측 정보 요약 패널 -->
      <g transform="translate(430, 65)">
        <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="250" height="30" rx="8" fill="#b45309"/>
        <text x="125" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">💡 Lessons of Numbers' 40 wilderness years</text>

        <g transform="translate(12, 42)">
          <text x="0" y="16" fill="#fde047" font-size="11" font-weight="bold">The price of unbelief and God's faithfulness</text>
          <text x="0" y="35" fill="#cbd5e1" font-size="9.5">· At Kadesh Barnea, after hearing the evil report</text>
          <text x="0" y="49" fill="#cbd5e1" font-size="9.5">  of 10 spies, the first Exodus generation grumbled</text>
          <text x="0" y="63" fill="#f87171" font-size="9.5">  and died in the wilderness, all but Joshua and Caleb</text>

          <rect y="78" width="226" height="70" rx="6" fill="#0f172a" stroke="#ea580c"/>
          <text x="10" y="96" fill="#fdba74" font-size="10.5" font-weight="bold">🐍 Bronze serpent (Nehushtan, Num 21)</text>
          <text x="10" y="112" fill="#fed7aa" font-size="9">When people were dying from fiery serpent bites,</text>
          <text x="10" y="125" fill="#fed7aa" font-size="9">all who looked at Moses' bronze serpent lived!</text>
          <text x="10" y="139" fill="#fde047" font-size="9">→ John 3:14: a type of Jesus Christ on the cross</text>

          <rect y="158" width="226" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="176" fill="#6ee7b7" font-size="10.5" font-weight="bold">🌟 Balaam's Messianic star prophecy (Num 24:17)</text>
          <text x="10" y="192" fill="#d1fae5" font-size="9">"There shall come a Star out of Jacob,</text>
          <text x="10" y="206" fill="#d1fae5" font-size="9"> and a Sceptre shall rise out of Israel"</text>
          <text x="10" y="220" fill="#fde047" font-size="9">God turns the enemy's curse into blessing</text>

          <text x="113" y="252" fill="#93c5fd" font-size="9" text-anchor="middle">The wilderness is not a land of abandonment</text>
          <text x="113" y="266" fill="#93c5fd" font-size="9" text-anchor="middle">but a training school for relying on God alone!</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Deuteronomy Part 2: Map of the Promised Land as seen from Pisgah on Mount Nebo</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Moses' view in Deuteronomy 34</text>

      <!-- 요단강 서편 조망 파노라마 맵 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 대해 (서쪽 끝) -->
        <path d="M 0,20 L 70,20 C 60,100 40,240 20,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="15" y="160" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 15, 160)">Western Sea (Mediterranean)</text>

        <!-- 갈릴리 호수 (북쪽) -->
        <ellipse cx="200" cy="40" rx="8" ry="12" fill="#0ea5e9"/>
        <text x="215" y="43" fill="#93c5fd" font-size="9">Galilee</text>

        <!-- 요단강 물줄기 -->
        <path d="M 200,52 Q 195,130 200,190 T 205,230" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="160" y="130" fill="#38bdf8" font-size="9">Jordan River</text>

        <!-- 사해 (남쪽) -->
        <ellipse cx="205" cy="280" rx="12" ry="45" fill="#0284c7"/>
        <text x="150" y="285" fill="#93c5fd" font-size="10">Dead Sea (Salt Sea)</text>

        <!-- 느보산 (동편 조망 위치) -->
        <g transform="translate(290, 210)">
          <polygon points="0,-25 -25,15 25,15" fill="#b45309" stroke="#facc15" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="6" fill="#ef4444"/>
          <text x="35" y="-5" fill="#fde047" font-size="12" font-weight="bold">Pisgah peak on Mount Nebo</text>
          <text x="35" y="10" fill="#cbd5e1" font-size="9.5">(835 m, where Moses died)</text>
        </g>

        <!-- 느보산에서 가나안 전역으로 뻗어나가는 조망 시선 (황금색 방사선) -->
        <line x1="290" y1="210" x2="200" y2="40" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="290" y1="210" x2="160" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
        <line x1="290" y1="210" x2="170" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="290" y1="210" x2="130" y2="250" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>

        <!-- 모세가 바라본 가나안 각 거점 핀 -->
        <!-- 1. 종려나무의 성읍 여리고 -->
        <circle cx="170" cy="200" r="6" fill="#10b981"/>
        <text x="95" y="198" fill="#6ee7b7" font-size="11" font-weight="bold">Jericho (city of palm trees)</text>
        <text x="95" y="210" fill="#cbd5e1" font-size="8.5">Just across the Jordan</text>

        <!-- 2. 세겜 (그리심산과 에발산) -->
        <circle cx="160" cy="100" r="5" fill="#38bdf8"/>
        <text x="80" y="98" fill="#7dd3fc" font-size="10" font-weight="bold">Gerizim (blessing) & Ebal (curse)</text>

        <!-- 3. 단과 납달리 (북부 끝) -->
        <circle cx="190" cy="25" r="4" fill="#a855f7"/>
        <text x="130" y="28" fill="#d8b4fe" font-size="9.5">Dan & Naphtali (north)</text>

        <!-- 4. 헤브론과 유다 산지 -->
        <circle cx="130" cy="250" r="5" fill="#f59e0b"/>
        <text x="60" y="253" fill="#fde047" font-size="10">Hebron & the southern Negev</text>
      </g>

      <!-- 우측 성경 본문 묵상 카드 -->
      <g transform="translate(410, 65)">
        <rect width="270" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="270" height="30" rx="8" fill="#1e3a8a"/>
        <text x="135" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">📜 Deuteronomy 34:1~4</text>

        <g transform="translate(15, 42)">
          <p class="text-xs text-slate-300">
            <text x="0" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">"Moses went up from the plains of Moab to Mount Nebo,</text>
            <text x="0" y="34" fill="#cbd5e1" font-size="9.5"> to the top of Pisgah, that is over against Jericho.</text>
            <text x="0" y="50" fill="#cbd5e1" font-size="9.5"> The LORD showed him all the land of Gilead, unto Dan,</text>
            <text x="0" y="66" fill="#cbd5e1" font-size="9.5"> and all Naphtali, and the land of Ephraim and Manasseh,</text>
            <text x="0" y="82" fill="#cbd5e1" font-size="9.5"> and all the land of Judah, unto the western sea,</text>
            <text x="0" y="98" fill="#cbd5e1" font-size="9.5"> and the south, and the valley of Jericho, the city of palm trees,</text>
            <text x="0" y="114" fill="#cbd5e1" font-size="9.5"> and the plain unto Zoar.</text>
            <text x="0" y="134" fill="#fde047" font-size="10" font-weight="bold"> And the LORD said unto him,</text>
            <text x="0" y="150" fill="#fde047" font-size="10" font-weight="bold"> 'This is the land which I sware unto Abraham, Isaac and Jacob,</text>
            <text x="0" y="166" fill="#fde047" font-size="10" font-weight="bold">  to give unto their seed!'"</text>
          </p>

          <rect y="180" width="240" height="70" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="200" fill="#fbbf24" font-size="10.5" font-weight="bold">💡 Pastor Woo-ho Noh's lecture point</text>
          <text x="10" y="218" fill="#cbd5e1" font-size="9">Though Moses did not enter Canaan,</text>
          <text x="10" y="232" fill="#cbd5e1" font-size="9">he saw the fulfillment of the Lord's promise with his own eyes,</text>
          <text x="10" y="246" fill="#6ee7b7" font-size="9">finished his mission, and entered into rest in peace.</text>
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
      <text x="35" y="35" fill="#f87171" font-size="14" font-weight="bold">🗺️ Judges Part 2: Map of the bases and battlefields of Israel's 12 main judges</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Geography of the 350-year era of the Judges</text>

      <!-- 가나안 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 해안선 -->
        <path d="M 0,0 L 90,0 C 80,90 65,220 40,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="20" y="140" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 20, 140)">Mediterranean</text>

        <!-- 갈릴리 호수 & 요단강 & 사해 -->
        <ellipse cx="200" cy="40" rx="8" ry="12" fill="#0ea5e9"/>
        <path d="M 200,52 Q 195,130 200,190 T 205,230" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
        <ellipse cx="205" cy="275" rx="12" ry="42" fill="#0284c7"/>

        <!-- 1. 드보라 & 바락: 다볼산 & 기손강 -->
        <circle cx="175" cy="55" r="6" fill="#38bdf8"/>
        <text x="185" y="55" fill="#7dd3fc" font-size="10.5" font-weight="bold">Deborah·Barak (Mt Tabor & Kishon)</text>
        <text x="185" y="68" fill="#cbd5e1" font-size="8.5">Defeat King Jabin of Canaan & Sisera's iron chariots</text>

        <!-- 2. 기드온: 오브라 & 하롯샘 -->
        <circle cx="185" cy="90" r="7" fill="#f59e0b"/>
        <text x="195" y="90" fill="#fde047" font-size="11" font-weight="bold">Gideon (Ophrah & spring of Harod)</text>
        <text x="195" y="103" fill="#cbd5e1" font-size="8.5">300 men rout Midian with torches & jars</text>

        <!-- 3. 삼갈: 소 모는 막대기 -->
        <circle cx="80" cy="115" r="4" fill="#94a3b8"/>
        <text x="90" y="118" fill="#cbd5e1" font-size="9">Shamgar (kills 600 Philistines)</text>

        <!-- 4. 입다: 길르앗 (요단 동편) -->
        <circle cx="260" cy="120" r="6" fill="#10b981"/>
        <text x="270" y="123" fill="#6ee7b7" font-size="10.5" font-weight="bold">Jephthah (Mizpah in Gilead)</text>
        <text x="270" y="136" fill="#cbd5e1" font-size="8.5">Drives back the Ammonites & his vow</text>

        <!-- 5. 에훗: 여리고 종려나무 성읍 -->
        <circle cx="180" cy="180" r="5" fill="#ef4444"/>
        <text x="100" y="183" fill="#fca5a5" font-size="10" font-weight="bold">Ehud (Jericho)</text>
        <text x="80" y="196" fill="#cbd5e1" font-size="8.5">Kills King Eglon of Moab</text>

        <!-- 6. 삼손: 소라, 딤나, 가사 (블레셋 접경지) -->
        <circle cx="100" cy="200" r="7" fill="#ec4899"/>
        <text x="110" y="205" fill="#f472b6" font-size="11" font-weight="bold">Samson (Zorah & Timnah)</text>
        <text x="110" y="218" fill="#cbd5e1" font-size="8.5">Nazirite, jawbone of a donkey, pulls down Dagon's temple</text>

        <!-- 7. 옷니엘: 드빌 (기럇세벨 - 남부) -->
        <circle cx="140" cy="265" r="6" fill="#a855f7"/>
        <text x="60" y="268" fill="#d8b4fe" font-size="10" font-weight="bold">Othniel (first judge, Debir)</text>
        <text x="60" y="281" fill="#cbd5e1" font-size="8.5">Defeats Cushan-rishathaim of Mesopotamia</text>
      </g>

      <!-- 우측 사사기 요약 카드 -->
      <g transform="translate(420, 65)">
        <rect width="260" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="260" height="30" rx="8" fill="#991b1b"/>
        <text x="130" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">⚡ The spiritual vicious cycle of Judges (7 times)</text>

        <g transform="translate(15, 42)">
          <text x="0" y="18" fill="#fca5a5" font-size="10.5" font-weight="bold">1. Sin</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">Worship of the idols Baal and Asherah</text>

          <text x="0" y="52" fill="#fca5a5" font-size="10.5" font-weight="bold">2. Servitude</text>
          <text x="0" y="66" fill="#cbd5e1" font-size="9">Oppression and suffering under nearby nations</text>

          <text x="0" y="86" fill="#fde047" font-size="10.5" font-weight="bold">3. Supplication</text>
          <text x="0" y="100" fill="#cbd5e1" font-size="9">Prayers of repentance in deep suffering</text>

          <text x="0" y="120" fill="#6ee7b7" font-size="10.5" font-weight="bold">4. Salvation</text>
          <text x="0" y="134" fill="#cbd5e1" font-size="9">God raises up a judge to deliver them</text>

          <text x="0" y="154" fill="#93c5fd" font-size="10.5" font-weight="bold">5. Silence (peace)</text>
          <text x="0" y="168" fill="#cbd5e1" font-size="9">Quiet as long as the judge lived</text>

          <rect y="190" width="230" height="65" rx="6" fill="#2d1515" stroke="#ef4444"/>
          <text x="10" y="210" fill="#fca5a5" font-size="10" font-weight="bold">Conclusion of Judges (Judg 21:25)</text>
          <text x="10" y="226" fill="#fecaca" font-size="9.5">"In those days there was no king in Israel:</text>
          <text x="10" y="240" fill="#fde68a" font-size="9.5" font-weight="bold">every man did that which was right in his own eyes"</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ 2 Samuel Part 2: Map of the greatest extent of David's united kingdom of Israel</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Expansion of territory, 2 Sam 5~8</text>

      <!-- 영토 지도 그래픽 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 -->
        <path d="M 0,0 L 140,0 C 130,80 110,220 70,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="30" y="150" fill="#38bdf8" font-size="12" font-weight="bold" transform="rotate(-90, 30, 150)">Mediterranean (Great Sea)</text>

        <!-- 다윗 통일왕국 최대 영토 영역 (유프라테스 ~ 하맛 ~ 애굽 시내) -->
        <polygon points="120,40 280,10 340,80 300,280 200,340 100,310 130,180" 
                 fill="#065f46" opacity="0.4" stroke="#10b981" stroke-width="2"/>
        <text x="230" y="160" fill="#a7f3d0" font-size="14" font-weight="bold" opacity="0.7">David's united kingdom of Israel</text>

        <!-- 유프라테스 강 (북동부 경계) -->
        <path d="M 280,10 Q 330,30 380,60" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="310" y="25" fill="#93c5fd" font-size="10">Euphrates border</text>

        <!-- 갈릴리 & 요단강 & 사해 -->
        <ellipse cx="190" cy="110" rx="6" ry="10" fill="#0ea5e9"/>
        <path d="M 190,120 L 195,190" fill="none" stroke="#0ea5e9" stroke-width="2"/>
        <ellipse cx="195" cy="225" rx="9" ry="32" fill="#0284c7"/>

        <!-- 주요 수도 및 거점 핀 -->
        <!-- 1. 다메섹 (아람 정복) -->
        <circle cx="260" cy="70" r="5" fill="#f59e0b"/>
        <text x="270" y="73" fill="#fde047" font-size="10.5" font-weight="bold">Damascus (garrisons)</text>

        <!-- 2. 단 (북부 국경) -->
        <circle cx="195" cy="90" r="4" fill="#38bdf8"/>
        <text x="165" y="93" fill="#93c5fd" font-size="9.5">Dan</text>

        <!-- 3. 예루살렘 (통일 왕국 수도 탈환!) -->
        <circle cx="185" cy="190" r="8" fill="#ef4444"/>
        <circle cx="185" cy="190" r="14" fill="#ef4444" opacity="0.25"/>
        <text x="95" y="188" fill="#fca5a5" font-size="12" font-weight="bold">Jerusalem (stronghold of Zion)</text>
        <text x="95" y="202" fill="#fde047" font-size="9">The ark placed & the Davidic covenant</text>

        <!-- 4. 헤브론 (첫 7년 반 유다 통치) -->
        <circle cx="180" cy="220" r="6" fill="#10b981"/>
        <text x="105" y="223" fill="#6ee7b7" font-size="10.5">Hebron (anointed)</text>

        <!-- 5. 블레셋 가드 (정복) -->
        <circle cx="140" cy="210" r="5" fill="#ec4899"/>
        <text x="145" y="215" fill="#f472b6" font-size="9.5">Gath (Philistines subdued)</text>

        <!-- 6. 브엘세바 (남부 국경) -->
        <circle cx="160" cy="265" r="5" fill="#f59e0b"/>
        <text x="90" y="268" fill="#fde047" font-size="10">Beersheba (Dan~Beersheba)</text>

        <!-- 7. 에돔 & 모압 & 암몬 (조공 바침) -->
        <text x="250" y="240" fill="#cbd5e1" font-size="10">Moab & Ammon (tribute)</text>
        <text x="220" y="300" fill="#cbd5e1" font-size="10">Edom (garrisons set)</text>
      </g>

      <!-- 우측 다윗 언약 카드 -->
      <g transform="translate(430, 65)">
        <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="250" height="30" rx="8" fill="#1e3a8a"/>
        <text x="125" y="20" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">👑 The eternal Davidic covenant (2 Sam 7)</text>

        <g transform="translate(15, 42)">
          <text x="0" y="16" fill="#60a5fa" font-size="10.5" font-weight="bold">God's promise through the prophet Nathan</text>
          <text x="0" y="34" fill="#cbd5e1" font-size="9.5">When David wanted to build God a house,</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9.5">God instead made a covenant</text>
          <text x="0" y="62" fill="#cbd5e1" font-size="9.5">to establish David's house (dynasty) forever</text>

          <rect y="78" width="220" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="10" y="98" fill="#fde047" font-size="10.5" font-weight="bold">"Your house and your kingdom shall be</text>
          <text x="10" y="114" fill="#fde047" font-size="10.5" font-weight="bold"> made sure forever before you; your throne</text>
          <text x="10" y="130" fill="#fde047" font-size="10.5" font-weight="bold"> shall be established forever!" (2 Sam 7:16)</text>

          <rect y="165" width="220" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="10" y="185" fill="#6ee7b7" font-size="10" font-weight="bold">✝️ Fulfilled in redemptive history</text>
          <text x="10" y="201" fill="#cbd5e1" font-size="9">This covenant is completed in Jesus Christ,</text>
          <text x="10" y="215" fill="#fde68a" font-size="9.5" font-weight="bold">the King of kings, who came as David's son!</text>
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
      <text x="35" y="35" fill="#fca5a5" font-size="14" font-weight="bold">🗺️ Four Gospels Part 2: Map of Passion Week routes over Jerusalem's real terrain & the Way of the Cross</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Via Dolorosa & Golgotha</text>

      <!-- 예루살렘 성벽 & 성전 지형도 -->
      <g transform="translate(30, 60)">
        <!-- 예루살렘 성벽 외곽선 -->
        <polygon points="120,60 260,50 320,120 320,280 200,320 100,280 80,180 100,100" 
                 fill="#1e293b" opacity="0.6" stroke="#94a3b8" stroke-width="2.5"/>
        <text x="140" y="295" fill="#cbd5e1" font-size="11" font-weight="bold">Jerusalem walls (stronghold of Zion)</text>

        <!-- 기드론 골짜기 (성전 동편) -->
        <path d="M 330,40 Q 345,180 340,340" fill="none" stroke="#0ea5e9" stroke-width="3"/>
        <text x="350" y="240" fill="#38bdf8" font-size="10" transform="rotate(90, 350, 240)">Kidron brook / valley</text>

        <!-- 감람산 (Mount of Olives - 동쪽) -->
        <ellipse cx="430" cy="180" rx="35" ry="70" fill="#1e3a8a" opacity="0.3" stroke="#60a5fa"/>
        <text x="430" y="120" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">Mount of Olives</text>

        <!-- 1. 벳바게 & 베다니 -->
        <circle cx="480" cy="250" r="5" fill="#f59e0b"/>
        <text x="490" y="253" fill="#fde047" font-size="9.5">Bethany (Mary·Lazarus)</text>

        <!-- 2. 겟세마네 동산 (감람산 기슭) -->
        <circle cx="360" cy="180" r="7" fill="#a855f7"/>
        <circle cx="360" cy="180" r="13" fill="#a855f7" opacity="0.25"/>
        <text x="375" y="175" fill="#d8b4fe" font-size="11" font-weight="bold">2. Garden of Gethsemane</text>
        <text x="375" y="190" fill="#cbd5e1" font-size="8.5">Prayer with sweat like blood & arrest</text>

        <!-- 3. 헤롯 성전 (외소 및 뜰) -->
        <rect x="210" y="90" width="90" height="90" rx="4" fill="#b45309" opacity="0.8" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="255" y="135" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Herod's Temple</text>
        <text x="255" y="150" fill="#ffffff" font-size="8.5" text-anchor="middle">Temple cleansing & debates</text>

        <!-- 4. 마가 다락방 (최후의 만찬 터 - 성 남서쪽) -->
        <circle cx="130" cy="250" r="6" fill="#f59e0b"/>
        <text x="40" y="245" fill="#fde047" font-size="10" font-weight="bold">1. Mark's upper room</text>
        <text x="25" y="258" fill="#cbd5e1" font-size="8.5">The Last Supper & foot washing</text>

        <!-- 5. 가야바 대제사장 법정 -->
        <circle cx="140" cy="220" r="5" fill="#64748b"/>
        <text x="45" y="223" fill="#cbd5e1" font-size="9">Caiaphas's house (Peter's denial)</text>

        <!-- 6. 안토니아 요새 (빌라도 총독 관저) -->
        <circle cx="210" cy="75" r="6" fill="#ef4444"/>
        <text x="140" y="65" fill="#fca5a5" font-size="10" font-weight="bold">3. Pilate's residence</text>
        <text x="130" y="78" fill="#cbd5e1" font-size="8.5">Death sentence & scourging</text>

        <!-- 7. 비아 돌로로사 (십자가의 길 동선) -->
        <path d="M 210,75 L 150,85 L 110,120 L 70,120" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,3"/>
        <text x="135" y="115" fill="#f87171" font-size="9" font-weight="bold">Via Dolorosa</text>

        <!-- 8. 골고다 언덕 (성문 밖 갈보리 십자가) -->
        <polygon points="60,110 50,130 70,130" fill="#7f1d1d"/>
        <circle cx="60" cy="120" r="8" fill="#ef4444"/>
        <text x="60" y="100" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">✝️ Hill of Golgotha</text>
        <text x="60" y="145" fill="#fca5a5" font-size="9.5" text-anchor="middle">"It is finished!"</text>

        <!-- 9. 아리마대 요셉의 빈 무덤 & 부활 -->
        <circle cx="45" cy="165" r="7" fill="#38bdf8"/>
        <text x="45" y="188" fill="#7dd3fc" font-size="10.5" font-weight="bold" text-anchor="middle">👑 Empty tomb (risen!)</text>
      </g>

      <!-- 우측 고난주간 일정 요약 -->
      <g transform="translate(530, 65)">
        <rect width="150" height="340" rx="8" fill="#1e293b" stroke="#334155"/>
        <rect width="150" height="28" rx="8" fill="#991b1b"/>
        <text x="75" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Summary of the 8-day route</text>

        <g transform="translate(10, 36)">
          <text x="0" y="16" fill="#34d399" font-size="10" font-weight="bold">· Sun: the King enters Jerusalem</text>
          <text x="0" y="34" fill="#fde047" font-size="10" font-weight="bold">· Mon: temple traders cleared out</text>
          <text x="0" y="52" fill="#60a5fa" font-size="10" font-weight="bold">· Tue: temple debates & end-times prophecy</text>
          <text x="0" y="70" fill="#94a3b8" font-size="10" font-weight="bold">· Wed: alabaster jar broken & Judas betrays</text>
          <text x="0" y="88" fill="#c084fc" font-size="10" font-weight="bold">· Thu: Lord's Supper & Gethsemane</text>
          <text x="0" y="106" fill="#f87171" font-size="10.5" font-weight="bold">· Fri: atoning death on the cross</text>
          <text x="0" y="124" fill="#94a3b8" font-size="10" font-weight="bold">· Sat: rest in the tomb</text>
          <text x="0" y="144" fill="#38bdf8" font-size="11" font-weight="bold">· Sun: glorious resurrection at dawn!</text>

          <rect y="165" width="130" height="125" rx="5" fill="#0f172a" stroke="#ef4444"/>
          <text x="65" y="185" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">Seven sayings from the cross</text>
          <text x="8" y="202" fill="#cbd5e1" font-size="8">1. Father, forgive them</text>
          <text x="8" y="216" fill="#cbd5e1" font-size="8">2. Today you will be with me in paradise</text>
          <text x="8" y="230" fill="#cbd5e1" font-size="8">3. Woman, behold your son</text>
          <text x="8" y="244" fill="#cbd5e1" font-size="8">4. Eli, Eli, lama sabachthani</text>
          <text x="8" y="258" fill="#cbd5e1" font-size="8">5. I thirst</text>
          <text x="8" y="272" fill="#fde047" font-size="8.5" font-weight="bold">6. It is finished (Tetelestai)</text>
          <text x="8" y="285" fill="#cbd5e1" font-size="8">7. Father, into your hands I commit my spirit</text>
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
      <text x="35" y="35" fill="#38bdf8" font-size="14" font-weight="bold">🗺️ Acts Part 3: Map of the apostle Paul's voyage to Rome as a prisoner & surviving the Euroclydon storm</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">Taken to Rome, Acts 27~28</text>

      <!-- 지중해 전도 맵 영역 -->
      <g transform="translate(30, 60)">
        <!-- 지중해 바다 베이스 -->
        <path d="M 0,110 Q 200,90 400,120 T 640,160 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>
        <text x="300" y="280" fill="#38bdf8" font-size="13" font-weight="bold" opacity="0.5">Mediterranean Sea</text>

        <!-- 이탈리아 반도 & 로마 -->
        <rect x="40" y="30" width="30" height="90" rx="5" fill="#1e293b" stroke="#94a3b8" transform="rotate(25, 40, 30)"/>
        <circle cx="80" cy="65" r="7" fill="#ef4444"/>
        <circle cx="80" cy="65" r="13" fill="#ef4444" opacity="0.25"/>
        <text x="95" y="70" fill="#fca5a5" font-size="12" font-weight="bold">Rome (🏛️ final destination)</text>
        <text x="95" y="85" fill="#cbd5e1" font-size="9">2 years in a rented house, boldly preaching God's kingdom</text>

        <!-- 보디올 & 압비오 광장 -->
        <circle cx="95" cy="115" r="4" fill="#38bdf8"/>
        <text x="105" y="118" fill="#bae6fd" font-size="9">Puteoli (7 days with brothers)</text>

        <!-- 시칠리아 섬 & 수라구사 -->
        <polygon points="120,180 150,170 140,200" fill="#1e293b" stroke="#64748b"/>
        <circle cx="140" cy="180" r="4" fill="#38bdf8"/>
        <text x="150" y="185" fill="#cbd5e1" font-size="9">Syracuse</text>

        <!-- 멜리데 (몰타) 섬 -->
        <circle cx="130" cy="225" r="6" fill="#f59e0b"/>
        <text x="145" y="228" fill="#fde047" font-size="10.5" font-weight="bold">Melita (all 276 rescued!)</text>
        <text x="145" y="240" fill="#fef08a" font-size="8.5">Viper bite unharmed & Publius's father healed</text>

        <!-- 그레데 섬 & 미항 -->
        <rect x="280" y="210" width="70" height="12" rx="4" fill="#1e293b" stroke="#64748b"/>
        <circle cx="315" cy="215" r="5" fill="#ef4444"/>
        <text x="315" y="205" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">Fair Havens</text>
        <text x="315" y="238" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Paul warns against sailing</text>

        <!-- 유라굴로 광풍 구역 -->
        <ellipse cx="220" cy="210" rx="35" ry="25" fill="#7f1d1d" opacity="0.3" stroke="#ef4444" stroke-dasharray="3,2"/>
        <text x="220" y="208" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">🌪️ The Euroclydon storm</text>
        <text x="220" y="222" fill="#fecaca" font-size="8.5" text-anchor="middle">14 days with neither sun nor stars</text>

        <!-- 루기아 무라 -->
        <circle cx="430" cy="165" r="4" fill="#38bdf8"/>
        <text x="430" y="155" fill="#93c5fd" font-size="9" text-anchor="middle">Myra (change to Alexandrian ship)</text>

        <!-- 가이사랴 (출발지) & 시돈 -->
        <circle cx="580" cy="235" r="6" fill="#10b981"/>
        <text x="500" y="240" fill="#6ee7b7" font-size="11" font-weight="bold">1. Sails from Caesarea</text>
        <text x="500" y="253" fill="#cbd5e1" font-size="8.5">To Rome after defense before King Agrippa</text>

        <circle cx="580" cy="210" r="4" fill="#38bdf8"/>
        <text x="590" y="213" fill="#cbd5e1" font-size="9">Sidon</text>

        <!-- 항해로 점선 패스 (하늘색 -> 광풍 빨강 점선 -> 로마) -->
        <path d="M 580,235 L 580,210 L 510,180 L 430,165 L 350,195 L 315,215 L 260,225 L 130,225 L 140,180 L 120,135 L 95,115 L 80,65" 
              fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
      </g>

      <!-- 하단 설명 바 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10.5" text-anchor="middle">
          "Fear not, Paul; you must be brought before Caesar... (Acts 27:24)" ➔ Though in chains as a prisoner, he entered Rome as a victor!
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Revelation Part 1: Geographic map of the actual circular postal road of the seven churches of Asia Minor</text>
      <text x="560" y="35" fill="#94a3b8" font-size="11">The 7 churches, Rev 1~3</text>

      <!-- 소아시아 및 에게해 지도 -->
      <g transform="translate(30, 60)">
        <!-- 에게해 바다 (서쪽) -->
        <path d="M 0,0 L 220,0 Q 180,150 160,340 L 0,340 Z" fill="#0284c7" opacity="0.3"/>
        <text x="60" y="160" fill="#38bdf8" font-size="12" font-weight="bold">Aegean Sea</text>

        <!-- 밧모 섬 (Patmos: 계시를 받은 섬) -->
        <ellipse cx="140" cy="240" rx="12" ry="16" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <circle cx="140" cy="240" r="5" fill="#ef4444"/>
        <text x="80" y="235" fill="#fca5a5" font-size="11" font-weight="bold">Patmos</text>
        <text x="60" y="248" fill="#cbd5e1" font-size="8.5">Apostle John's place of exile</text>

        <!-- 밧모 섬에서 에베소로 향하는 말씀 전달선 -->
        <path d="M 152,240 Q 190,230 220,225" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,3"/>

        <!-- 7교회 순환 로마 가도 (황금색 원형 순환선) -->
        <!-- 에베소 -> 서머나 -> 버가모 -> 두아디라 -> 사데 -> 빌라델비아 -> 라오디게아 -->
        <path d="M 220,225 L 225,160 L 230,85 L 300,105 L 310,170 L 370,185 L 400,240 L 220,225" 
              fill="none" stroke="#f59e0b" stroke-width="3"/>

        <!-- 1. 에베소 (Ephesus: 첫사랑 회복) -->
        <circle cx="220" cy="225" r="7" fill="#ef4444"/>
        <text x="230" y="230" fill="#fca5a5" font-size="11" font-weight="bold">1. Ephesus</text>
        <text x="230" y="243" fill="#cbd5e1" font-size="8.5">You have left your first love</text>

        <!-- 2. 서머나 (Smyrna: 죽도록 충성) -->
        <circle cx="225" cy="160" r="7" fill="#10b981"/>
        <text x="235" y="160" fill="#6ee7b7" font-size="11" font-weight="bold">2. Smyrna</text>
        <text x="235" y="173" fill="#a7f3d0" font-size="8.5">Be faithful unto death (only praised)</text>

        <!-- 3. 버가모 (Pergamum: 사탄의 권좌) -->
        <circle cx="230" cy="85" r="6" fill="#f59e0b"/>
        <text x="240" y="85" fill="#fde047" font-size="10.5" font-weight="bold">3. Pergamum</text>
        <text x="240" y="98" fill="#cbd5e1" font-size="8.5">Rebuked for Balaam's teaching & the Nicolaitans</text>

        <!-- 4. 두아디라 (Thyatira: 이세벨 용납) -->
        <circle cx="300" cy="105" r="6" fill="#a855f7"/>
        <text x="310" y="105" fill="#d8b4fe" font-size="10.5" font-weight="bold">4. Thyatira</text>
        <text x="310" y="118" fill="#cbd5e1" font-size="8.5">Rebuked for tolerating Jezebel & rod of iron</text>

        <!-- 5. 사데 (Sardis: 살았다 하나 죽은 자) -->
        <circle cx="310" cy="170" r="6" fill="#64748b"/>
        <text x="320" y="170" fill="#cbd5e1" font-size="10.5" font-weight="bold">5. Sardis</text>
        <text x="320" y="183" fill="#cbd5e1" font-size="8.5">Has a name that it lives, but is dead</text>

        <!-- 6. 빌라델비아 (Philadelphia: 열린 문) -->
        <circle cx="370" cy="185" r="7" fill="#10b981"/>
        <text x="380" y="185" fill="#6ee7b7" font-size="11" font-weight="bold">6. Philadelphia</text>
        <text x="380" y="198" fill="#a7f3d0" font-size="8.5">Kept the word with little strength (only praised)</text>

        <!-- 7. 라오디게아 (Laodicea: 차지도 더웁지도 않음) -->
        <circle cx="400" cy="240" r="6" fill="#ef4444"/>
        <text x="410" y="240" fill="#fca5a5" font-size="10.5" font-weight="bold">7. Laodicea</text>
        <text x="410" y="253" fill="#cbd5e1" font-size="8.5">Lukewarm: will be spewed out</text>
      </g>

      <!-- 하단 범례 카드 -->
      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fef08a" font-size="10.5" text-anchor="middle">
          "He that hath an ear, let him hear what the Spirit saith unto the churches; to him that overcometh..." ➔ Each church is a mirror of every believer and church today.
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Detailed floor plan of the Sinai Tabernacle: 3-part structure & 6 sacred furnishings</text>
      <text x="530" y="35" fill="#94a3b8" font-size="11">Blueprint of Exodus 25~40</text>

      <!-- 성막 뜰 울타리 -->
      <rect x="30" y="58" width="640" height="340" rx="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8,4"/>
      <text x="50" y="80" fill="#94a3b8" font-size="11" font-weight="bold">Tabernacle court (linen fence 100 × 50 cubits)</text>
      <text x="635" y="240" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(90, 635, 240)">East gate (20 cubits)</text>

      <!-- 번제단 -->
      <g transform="translate(440, 165)">
        <rect width="105" height="100" rx="6" fill="#78350f" stroke="#ea580c" stroke-width="2"/>
        <text x="52" y="25" fill="#ffedd5" font-size="11" font-weight="bold" text-anchor="middle">Altar of burnt offering (bronze altar)</text>
        <text x="52" y="45" fill="#fde047" font-size="9.5" text-anchor="middle">5 × 5 × 3 cubits</text>
        <text x="52" y="68" fill="#cbd5e1" font-size="9" text-anchor="middle">Blood of the sacrifice shed</text>
        <text x="52" y="85" fill="#fca5a5" font-size="9" text-anchor="middle">Atoning death on the cross</text>
      </g>

      <!-- 놋 물두멍 -->
      <g transform="translate(345, 180)">
        <circle cx="35" cy="35" r="32" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="35" y="32" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">Bronze laver</text>
        <text x="35" y="47" fill="#bae6fd" font-size="9" text-anchor="middle">Washing hands & feet</text>
        <text x="35" y="82" fill="#93c5fd" font-size="8.5" text-anchor="middle">Believers' sanctification & repentance</text>
      </g>

      <!-- 성소 & 지성소 본체 텐트 -->
      <g transform="translate(55, 115)">
        <rect width="250" height="200" rx="8" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="90" y1="0" x2="90" y2="200" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="5,3"/>
        <text x="95" y="20" fill="#f472b6" font-size="9.5" font-weight="bold">Veil</text>

        <!-- 지성소 -->
        <rect x="8" y="8" width="74" height="184" rx="4" fill="#311042" opacity="0.6"/>
        <text x="45" y="25" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">Holiest</text>

        <rect x="15" y="75" width="55" height="50" rx="4" fill="url(#goldHolyD)" stroke="#fef08a"/>
        <text x="42" y="98" fill="#451a03" font-size="9" font-weight="bold" text-anchor="middle">Ark</text>
        <text x="42" y="112" fill="#78350f" font-size="8" text-anchor="middle">(blood on mercy seat)</text>
        <text x="42" y="145" fill="#fde047" font-size="7.5" text-anchor="middle">Tablets·rod·manna</text>

        <!-- 성소 -->
        <text x="175" y="25" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Holy Place</text>
        <!-- 떡상 -->
        <rect x="140" y="40" width="70" height="30" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="175" y="58" fill="#ffffff" font-size="9" text-anchor="middle">Table of showbread</text>
        <!-- 분향단 -->
        <rect x="100" y="90" width="40" height="35" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="120" y="112" fill="#ffffff" font-size="8.5" text-anchor="middle">Altar of incense</text>
        <!-- 금촛대 -->
        <rect x="140" y="145" width="70" height="30" rx="4" fill="#b45309" stroke="#fcd34d"/>
        <text x="175" y="163" fill="#ffffff" font-size="9" text-anchor="middle">Pure gold lampstand</text>
      </g>

      <!-- 하단 설명 바 -->
      <g transform="translate(20, 403)">
        <text x="350" y="15" fill="#e2e8f0" font-size="10" text-anchor="middle">
          Journey of redemptive history: altar of burnt offering (justification·atonement) ➔ laver (sanctification·holiness) ➔ Holy Place (light, Word and prayer) ➔ Most Holy Place (God's throne and gracious presence)
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Panorama of redemptive history: Israel's 7 feasts in Leviticus 23</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Fulfilled at the first coming, completed at the second</text>

      <!-- 봄 절기 4개 -->
      <rect x="20" y="58" width="660" height="165" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
      <rect x="20" y="58" width="660" height="24" rx="8" fill="#047857"/>
      <text x="35" y="74" fill="#ffffff" font-size="11.5" font-weight="bold">🌸 4 spring feasts — fulfilled at Jesus Christ's First Coming</text>

      <g transform="translate(30, 90)">
        <rect width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="10" y="22" fill="#34d399" font-size="11.5" font-weight="bold">1. Passover</text>
        <text x="10" y="40" fill="#94a3b8" font-size="9.5">1st month, 14th day (Jewish calendar)</text>
        <text x="10" y="60" fill="#f87171" font-size="10" font-weight="bold">Atonement by the Lamb's blood</text>
        <text x="10" y="78" fill="#cbd5e1" font-size="9">Angel of death passes over</text>
        <rect x="8" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="75" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">✝️ Jesus' death on the cross</text>

        <rect x="160" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="170" y="22" fill="#34d399" font-size="11.5" font-weight="bold">2. Unleavened Bread</text>
        <text x="170" y="40" fill="#94a3b8" font-size="9.5">1st month, 15th~21st</text>
        <text x="170" y="60" fill="#facc15" font-size="10" font-weight="bold">Bread without yeast</text>
        <text x="170" y="78" fill="#cbd5e1" font-size="9">A sanctified life free of sin</text>
        <rect x="168" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="235" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">Rest in the tomb & holiness</text>

        <rect x="320" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="330" y="22" fill="#34d399" font-size="11.5" font-weight="bold">3. Firstfruits</text>
        <text x="330" y="40" fill="#94a3b8" font-size="9.5">Day after the Sabbath</text>
        <text x="330" y="60" fill="#38bdf8" font-size="10" font-weight="bold">First sheaf of barley waved</text>
        <text x="330" y="78" fill="#cbd5e1" font-size="9">Firstfruits of new life</text>
        <rect x="328" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="395" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">👑 Firstfruits of resurrection</text>

        <rect x="480" width="150" height="122" rx="6" fill="#0f172a" stroke="#34d399"/>
        <text x="490" y="22" fill="#34d399" font-size="11.5" font-weight="bold">4. Weeks/Pentecost</text>
        <text x="490" y="40" fill="#94a3b8" font-size="9.5">50 days after Firstfruits</text>
        <text x="490" y="60" fill="#ec4899" font-size="10" font-weight="bold">Wheat harvest & Sinai law</text>
        <text x="490" y="78" fill="#cbd5e1" font-size="9">First harvest of believers</text>
        <rect x="488" y="90" width="134" height="24" rx="4" fill="#1e3a8a"/>
        <text x="555" y="106" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">🔥 Spirit comes, church born</text>
      </g>

      <!-- 가을 절기 3개 -->
      <rect x="20" y="235" width="660" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
      <rect x="20" y="235" width="660" height="24" rx="8" fill="#b45309"/>
      <text x="35" y="251" fill="#ffffff" font-size="11.5" font-weight="bold">🍁 3 autumn feasts — foreshadow Jesus Christ's Second Coming and the eternal completion</text>

      <g transform="translate(30, 268)">
        <rect width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="12" y="24" fill="#fbbf24" font-size="12" font-weight="bold">5. Trumpets</text>
        <text x="12" y="42" fill="#94a3b8" font-size="9.5">7th month, 1st day (New Year)</text>
        <text x="12" y="64" fill="#fde047" font-size="10.5" font-weight="bold">Long ram's horn blast to awaken</text>
        <text x="12" y="82" fill="#cbd5e1" font-size="9">Ten days of repentance, warning of return</text>
        <rect x="10" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="100" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">🎺 The Lord's return: shout & trumpet</text>

        <rect x="215" width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="227" y="24" fill="#fbbf24" font-size="12" font-weight="bold">6. Day of Atonement</text>
        <text x="227" y="42" fill="#94a3b8" font-size="9.5">7th month, 10th day (fast)</text>
        <text x="227" y="64" fill="#f87171" font-size="10.5" font-weight="bold">Scapegoat sent into wilderness & blood</text>
        <text x="227" y="82" fill="#cbd5e1" font-size="9">Sins of the whole nation forgiven</text>
        <rect x="225" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="315" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">⚖️ National repentance·final judgment</text>

        <rect x="430" width="200" height="130" rx="6" fill="#0f172a" stroke="#fbbf24"/>
        <text x="442" y="24" fill="#fbbf24" font-size="12" font-weight="bold">7. Tabernacles / Booths</text>
        <text x="442" y="42" fill="#94a3b8" font-size="9.5">7th month, 15th~21st</text>
        <text x="442" y="64" fill="#4ade80" font-size="10.5" font-weight="bold">Remembering wilderness tents & full harvest</text>
        <text x="442" y="82" fill="#cbd5e1" font-size="9">Great feast of joy, water pouring</text>
        <rect x="440" y="94" width="180" height="26" rx="4" fill="#78350f"/>
        <text x="530" y="111" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">🏰 Millennium & eternal rest</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Joshua 13~21: Map of the 12 tribes' allotments in Canaan & the 6 cities of refuge</text>
      <text x="550" y="35" fill="#94a3b8" font-size="11">Rest in the Promised Land</text>

      <g transform="translate(30, 58)">
        <path d="M 0,0 L 70,0 C 60,80 50,180 30,350 L 0,350 Z" fill="#0284c7" opacity="0.3"/>
        <text x="15" y="140" fill="#38bdf8" font-size="11" font-weight="bold" transform="rotate(-90, 15, 140)">Mediterranean</text>

        <ellipse cx="200" cy="50" rx="7" ry="10" fill="#0284c7"/>
        <path d="M 200,60 L 205,190" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
        <ellipse cx="205" cy="250" rx="10" ry="38" fill="#0284c7"/>
        <text x="220" y="250" fill="#93c5fd" font-size="9">Dead Sea</text>

        <!-- 서편 지파들 -->
        <rect x="80" y="10" width="55" height="35" rx="3" fill="#047857" opacity="0.8"/>
        <text x="107" y="32" fill="#ffffff" font-size="9.5" text-anchor="middle">Asher</text>
        <rect x="140" y="10" width="55" height="35" rx="3" fill="#1e3a8a" opacity="0.8"/>
        <text x="167" y="32" fill="#ffffff" font-size="9.5" text-anchor="middle">Naphtali</text>

        <rect x="85" y="50" width="50" height="30" rx="3" fill="#78350f" opacity="0.8"/>
        <text x="110" y="70" fill="#ffffff" font-size="9" text-anchor="middle">Zebulun</text>
        <rect x="140" y="50" width="55" height="30" rx="3" fill="#065f46" opacity="0.8"/>
        <text x="167" y="70" fill="#ffffff" font-size="9" text-anchor="middle">Issachar</text>

        <rect x="85" y="85" width="110" height="40" rx="3" fill="#831843" opacity="0.8"/>
        <text x="140" y="110" fill="#ffffff" font-size="10.5" text-anchor="middle">West Manasseh</text>

        <rect x="85" y="130" width="110" height="35" rx="3" fill="#1e40af" opacity="0.8"/>
        <text x="140" y="152" fill="#ffffff" font-size="10.5" text-anchor="middle">Ephraim</text>

        <rect x="65" y="170" width="50" height="30" rx="3" fill="#475569" opacity="0.8"/>
        <text x="90" y="190" fill="#ffffff" font-size="9" text-anchor="middle">Dan</text>
        <rect x="120" y="170" width="75" height="30" rx="3" fill="#047857" opacity="0.8"/>
        <text x="157" y="190" fill="#ffffff" font-size="9.5" text-anchor="middle">Benjamin</text>

        <rect x="70" y="205" width="125" height="80" rx="5" fill="#b45309" opacity="0.85"/>
        <text x="132" y="240" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">👑 Tribe of Judah</text>

        <rect x="90" y="290" width="90" height="40" rx="3" fill="#334155" opacity="0.8"/>
        <text x="135" y="315" fill="#ffffff" font-size="9.5" text-anchor="middle">Simeon</text>

        <!-- 동편 지파들 -->
        <rect x="220" y="20" width="95" height="60" rx="3" fill="#831843" opacity="0.8"/>
        <text x="267" y="55" fill="#ffffff" font-size="9.5" text-anchor="middle">East Manasseh</text>
        <rect x="220" y="85" width="95" height="70" rx="3" fill="#0e7490" opacity="0.8"/>
        <text x="267" y="125" fill="#ffffff" font-size="9.5" text-anchor="middle">Tribe of Gad</text>
        <rect x="220" y="160" width="95" height="75" rx="3" fill="#4338ca" opacity="0.8"/>
        <text x="267" y="200" fill="#ffffff" font-size="9.5" text-anchor="middle">Tribe of Reuben</text>
      </g>

      <!-- 우측 6대 도피성 패널 -->
      <g transform="translate(365, 58)">
        <rect width="315" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <rect width="315" height="28" rx="8" fill="#0284c7"/>
        <text x="157" y="19" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">🛡️ The 6 cities of refuge (Josh 20)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#e0f2fe" font-size="10" font-weight="bold">Refuge for the life of one who killed someone unawares</text>
          <text x="0" y="30" fill="#94a3b8" font-size="9">A place of grace, protected until the high priest's death (a type of Christ)</text>

          <rect y="40" width="290" height="60" rx="5" fill="#0f172a" stroke="#0ea5e9"/>
          <text x="10" y="56" fill="#38bdf8" font-size="10" font-weight="bold">📍 3 west of the Jordan</text>
          <text x="10" y="72" fill="#cbd5e1" font-size="9">1. Kedesh (north, Naphtali)  2. Shechem (central, Ephraim)</text>
          <text x="10" y="88" fill="#cbd5e1" font-size="9">3. Hebron (south, Judah)</text>

          <rect y="106" width="290" height="60" rx="5" fill="#0f172a" stroke="#0ea5e9"/>
          <text x="10" y="122" fill="#38bdf8" font-size="10" font-weight="bold">📍 3 east of the Jordan</text>
          <text x="10" y="138" fill="#cbd5e1" font-size="9">4. Golan (north, Bashan)  5. Ramoth Gilead (central, Gad)</text>
          <text x="10" y="154" fill="#cbd5e1" font-size="9">6. Bezer (south, Reuben)</text>

          <rect y="172" width="290" height="68" rx="5" fill="#1e1b4b" stroke="#818cf8"/>
          <text x="10" y="190" fill="#c7d2fe" font-size="10" font-weight="bold">⭐ The 48 cities of the Levites</text>
          <text x="10" y="206" fill="#e0e7ff" font-size="8.5">The Levites had no land of their own; they lived scattered</text>
          <text x="10" y="220" fill="#e0e7ff" font-size="8.5">in 48 cities among the 12 tribes as spiritual teachers of the law!</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">3D structure of Solomon's Temple in Jerusalem</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">1 Kgs 6~8, 2 Chr 3~5</text>

      <g transform="translate(30, 60)">
        <rect width="440" height="210" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>

        <!-- 지성소 -->
        <g transform="translate(15, 15)">
          <rect width="130" height="180" rx="5" fill="#451a03" stroke="#f59e0b"/>
          <text x="65" y="28" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Inner sanctuary (Most Holy Place)</text>
          <text x="65" y="44" fill="#fde68a" font-size="9" text-anchor="middle">20 × 20 cubits</text>
          <ellipse cx="38" cy="90" rx="22" ry="26" fill="#78350f" stroke="#facc15"/>
          <ellipse cx="92" cy="90" rx="22" ry="26" fill="#78350f" stroke="#facc15"/>
          <rect x="47" y="130" width="36" height="30" rx="3" fill="#fbbf24"/>
          <text x="65" y="150" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Ark</text>
        </g>

        <!-- 성소 -->
        <g transform="translate(155, 15)">
          <rect width="195" height="180" rx="5" fill="#0f172a" stroke="#38bdf8"/>
          <text x="97" y="28" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">Outer sanctuary (Holy Place, 40 cubits)</text>
          <text x="97" y="55" fill="#fef08a" font-size="9.5" text-anchor="middle">Gold altar of incense (before Most Holy)</text>
          <text x="97" y="85" fill="#67e8f9" font-size="9.5" text-anchor="middle">10 pure gold lampstands (5 each side)</text>
          <text x="97" y="115" fill="#fde047" font-size="9.5" text-anchor="middle">10 tables of showbread (5 each side)</text>
          <text x="97" y="155" fill="#94a3b8" font-size="8.5" text-anchor="middle">Cedar boards overlaid with pure gold</text>
        </g>

        <!-- 낭실 -->
        <g transform="translate(355, 15)">
          <rect width="75" height="180" rx="5" fill="#1e293b" stroke="#94a3b8"/>
          <text x="37" y="28" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Porch (vestibule)</text>
        </g>
      </g>

      <!-- 야긴과 보아스 -->
      <g transform="translate(500, 75)">
        <rect width="170" height="195" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="85" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">Two bronze pillars (18 cubits high)</text>

        <rect x="15" y="35" width="60" height="115" rx="5" fill="#b45309"/>
        <text x="45" y="55" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Boaz</text>
        <text x="45" y="90" fill="#fef08a" font-size="8" text-anchor="middle">"In him</text>
        <text x="45" y="103" fill="#fef08a" font-size="8" text-anchor="middle">is strength"</text>

        <rect x="95" y="35" width="60" height="115" rx="5" fill="#b45309"/>
        <text x="125" y="55" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Jachin</text>
        <text x="125" y="90" fill="#fef08a" font-size="8" text-anchor="middle">"He shall</text>
        <text x="125" y="103" fill="#fef08a" font-size="8" text-anchor="middle">establish"</text>
      </g>

      <!-- 놋 바다 -->
      <g transform="translate(30, 285)">
        <rect width="640" height="100" rx="8" fill="#0f172a" stroke="#334155"/>
        <ellipse cx="50" cy="50" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="50" y="48" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Bronze Sea</text>
        <text x="50" y="60" fill="#e0f2fe" font-size="8" text-anchor="middle">Resting on 12 oxen</text>
        <text x="100" y="35" fill="#38bdf8" font-size="10.5" font-weight="bold">🌊 A huge basin for the priests to wash in (10 cubits across)</text>
        <text x="100" y="55" fill="#cbd5e1" font-size="9.5">12 bronze oxen, 3 facing out each way (N, S, E, W), hold up the Bronze Sea</text>
        <text x="100" y="75" fill="#facc15" font-size="9.5">10 bronze carts with lavers, 5 on each side: for washing the burnt offerings</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Timeline of the 39 kings of the divided kingdom & the main prophets</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">B.C. 930 ~ B.C. 586</text>

      <!-- 북이스라엘 -->
      <g transform="translate(20, 58)">
        <rect width="320" height="360" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
        <rect width="320" height="28" rx="8" fill="#991b1b"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">Northern Israel: 19 kings (all evil, 9 dynasties)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">Founder: Jeroboam I (golden calf altars at Dan·Bethel)</text>
          <text x="0" y="30" fill="#cbd5e1" font-size="9">Baasha ➔ Omri (capital moved to Samaria) ➔ Ahab</text>

          <rect y="40" width="296" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
          <text x="8" y="58" fill="#fecaca" font-size="10" font-weight="bold">👑 Ahab & Jezebel (Baal worship at its peak)</text>
          <text x="8" y="74" fill="#fde047" font-size="9.5" font-weight="bold">⚡ Elijah (contest with 850 on Carmel)</text>
          <text x="8" y="90" fill="#fde047" font-size="9.5" font-weight="bold">⚡ Elisha (double portion, Naaman healed)</text>

          <rect y="116" width="296" height="68" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="8" y="134" fill="#f87171" font-size="10" font-weight="bold">Jehu dynasty & Jeroboam II (largest territory)</text>
          <text x="8" y="150" fill="#67e8f9" font-size="9.5" font-weight="bold">📜 Jonah (preaches repentance to Nineveh)</text>
          <text x="8" y="166" fill="#67e8f9" font-size="9.5" font-weight="bold">📜 Amos (justice like a river) & Hosea (hesed love)</text>

          <rect y="192" width="296" height="55" rx="5" fill="#2d1515" stroke="#991b1b"/>
          <text x="8" y="210" fill="#fca5a5" font-size="10" font-weight="bold">💀 Fell in B.C. 722: under King Hoshea</text>
          <text x="8" y="226" fill="#fecaca" font-size="8.5">Samaria taken by Sargon II of Assyria & people deported</text>

          <text x="148" y="280" fill="#f87171" font-size="9.5" font-weight="bold" text-anchor="middle">"Because they departed not from the sins of Jeroboam..."</text>
        </g>
      </g>

      <!-- 남유다 -->
      <g transform="translate(360, 58)">
        <rect width="320" height="360" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
        <rect width="320" height="28" rx="8" fill="#1d4ed8"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">Southern Judah: 20 kings (line of David, 8 good kings)</text>

        <g transform="translate(12, 38)">
          <text x="0" y="16" fill="#bfdbfe" font-size="10" font-weight="bold">Founder: Rehoboam (Solomon's son, Jerusalem temple)</text>
          <text x="0" y="30" fill="#cbd5e1" font-size="9">Asa (religious reform), Jehoshaphat (victory by the choir)</text>

          <rect y="40" width="296" height="68" rx="5" fill="#082f49" stroke="#0284c7"/>
          <text x="8" y="58" fill="#7dd3fc" font-size="10" font-weight="bold">👑 King Hezekiah (Passover restored, prayer answered)</text>
          <text x="8" y="74" fill="#fde047" font-size="9.5" font-weight="bold">📜 Isaiah (suffering Messiah ch. 53 & new heavens)</text>
          <text x="8" y="90" fill="#fde047" font-size="9.5" font-weight="bold">📜 Micah (Bethlehem Ephratah)</text>

          <rect y="116" width="296" height="68" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="8" y="134" fill="#60a5fa" font-size="10" font-weight="bold">👑 King Josiah (Book of the Law found, great revival & reform)</text>
          <text x="8" y="150" fill="#fde047" font-size="9.5" font-weight="bold">📜 Jeremiah (weeping prophet, new covenant)</text>
          <text x="8" y="166" fill="#fde047" font-size="9.5" font-weight="bold">📜 Habakkuk (the just shall live by faith) & Zephaniah</text>

          <rect y="192" width="296" height="55" rx="5" fill="#1e1b4b" stroke="#6366f1"/>
          <text x="8" y="210" fill="#c7d2fe" font-size="10" font-weight="bold">⛓️ Fell in B.C. 586: under King Zedekiah</text>
          <text x="8" y="226" fill="#e0e7ff" font-size="8.5">70-year Babylonian Exile ➔ Daniel·Ezekiel minister</text>

          <text x="148" y="280" fill="#60a5fa" font-size="9.5" font-weight="bold" text-anchor="middle">"The covenant not to put out David's lamp is kept"</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Daniel 2: Nebuchadnezzar's vision of the great statue & the rise and fall of four empires</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Panorama of history, Dan 2:31~45</text>

      <g transform="translate(50, 65)">
        <!-- 신상 그래픽 -->
        <rect x="60" y="0" width="70" height="50" rx="8" fill="#eab308" stroke="#fef08a"/>
        <text x="95" y="30" fill="#713f12" font-size="11.5" font-weight="bold" text-anchor="middle">Head of gold</text>

        <rect x="40" y="55" width="110" height="65" rx="6" fill="#94a3b8" stroke="#f1f5f9"/>
        <text x="95" y="92" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Chest·arms of silver</text>

        <rect x="55" y="125" width="80" height="70" rx="6" fill="#d97706" stroke="#fed7aa"/>
        <text x="95" y="165" fill="#451a03" font-size="11" font-weight="bold" text-anchor="middle">Belly·thighs of bronze</text>

        <rect x="58" y="200" width="34" height="90" rx="3" fill="#475569" stroke="#94a3b8"/>
        <rect x="98" y="200" width="34" height="90" rx="3" fill="#475569" stroke="#94a3b8"/>
        <text x="95" y="250" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Legs of iron</text>

        <rect x="50" y="295" width="42" height="35" rx="3" fill="#78350f" stroke="#ea580c"/>
        <rect x="98" y="295" width="42" height="35" rx="3" fill="#78350f" stroke="#ea580c"/>
        <text x="95" y="318" fill="#ffedd5" font-size="9.5" font-weight="bold" text-anchor="middle">Feet of iron+clay</text>
      </g>

      <g transform="translate(250, 60)">
        <rect y="0" width="410" height="58" rx="6" fill="#1e293b" stroke="#eab308"/>
        <text x="12" y="22" fill="#fde047" font-size="11.5" font-weight="bold">1. Babylon (B.C. 605~539) — head of pure gold</text>
        <text x="12" y="38" fill="#cbd5e1" font-size="9.5">Nebuchadnezzar's golden glory (= lion vision, Dan 7)</text>

        <rect y="65" width="410" height="58" rx="6" fill="#1e293b" stroke="#94a3b8"/>
        <text x="12" y="87" fill="#e2e8f0" font-size="11.5" font-weight="bold">2. Medo-Persia (B.C. 539~331) — chest·arms of silver</text>
        <text x="12" y="103" fill="#cbd5e1" font-size="9.5">Cyrus's rule of law, two arms united (= bear, Dan 7)</text>

        <rect y="130" width="410" height="58" rx="6" fill="#1e293b" stroke="#d97706"/>
        <text x="12" y="152" fill="#fbbf24" font-size="11.5" font-weight="bold">3. Greece (B.C. 331~146) — belly·thighs of bronze</text>
        <text x="12" y="168" fill="#cbd5e1" font-size="9.5">Alexander the Great's swift conquest (= leopard, Dan 7)</text>

        <rect y="195" width="410" height="65" rx="6" fill="#1e293b" stroke="#64748b"/>
        <text x="12" y="217" fill="#93c5fd" font-size="11.5" font-weight="bold">4. Roman Empire & nations (B.C. 146~Second Coming) — legs of iron</text>
        <text x="12" y="233" fill="#cbd5e1" font-size="9.5">Iron-like military & law, divided nations (= 4th beast, Dan 7)</text>

        <rect y="268" width="410" height="85" rx="6" fill="#450a0a" stroke="#f59e0b" stroke-width="2"/>
        <text x="12" y="292" fill="#fef08a" font-size="12.5" font-weight="bold">👑 Stone cut out without hands (God's kingdom)</text>
        <text x="12" y="310" fill="#fef3c7" font-size="10">The eternal Messianic kingdom that smashes the idol and fills the whole earth!</text>
        <text x="12" y="328" fill="#38bdf8" font-size="10" font-weight="bold">"This kingdom shall never be destroyed" (Dan 2:44)</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Acts Part 1: Map of the apostle Paul's 1st & 2nd Mediterranean missionary journeys</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Asia Minor·Europe, Acts 13~18</text>

      <g transform="translate(30, 60)">
        <path d="M 0,140 Q 150,120 300,150 T 640,170 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>
        <text x="300" y="280" fill="#38bdf8" font-size="13" font-weight="bold" opacity="0.5">Mediterranean</text>

        <!-- 1차 여행선 (녹색 실선) -->
        <path d="M 590,210 L 550,220 L 490,230 L 450,170 L 420,135 L 445,145 L 460,165 L 485,170" 
              fill="none" stroke="#10b981" stroke-width="3"/>

        <!-- 2차 여행선 (황금 점선) -->
        <path d="M 590,210 L 510,170 L 460,165 L 380,90 L 290,55 L 270,75 L 260,90 L 280,155 L 260,165 L 370,155 L 560,265 L 590,210" 
              fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>

        <!-- 안디옥 본부 -->
        <circle cx="590" cy="210" r="6" fill="#ef4444"/>
        <text x="600" y="215" fill="#f87171" font-size="10.5" font-weight="bold">Antioch in Syria (sent out)</text>

        <circle cx="420" cy="135" r="4" fill="#34d399"/>
        <text x="360" y="130" fill="#a7f3d0" font-size="9">Pisidian Antioch</text>

        <circle cx="380" cy="90" r="5" fill="#38bdf8"/>
        <text x="390" y="88" fill="#38bdf8" font-size="10" font-weight="bold">Troas (Macedonian vision!)</text>

        <circle cx="290" cy="55" r="5" fill="#f59e0b"/>
        <text x="220" y="50" fill="#fde047" font-size="10" font-weight="bold">Philippi (1st in Europe)</text>

        <circle cx="270" cy="75" r="4" fill="#f59e0b"/>
        <text x="195" y="75" fill="#fde047" font-size="9">Thessalonica</text>

        <circle cx="260" cy="165" r="5" fill="#ec4899"/>
        <text x="175" y="170" fill="#f472b6" font-size="10" font-weight="bold">Corinth (18 months' ministry)</text>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10" text-anchor="middle">
          Green line: 1st (Cyprus·Galatia) | Gold dotted line: 2nd (Troas vision "Come over and help us" ➔ gospel to Europe: Philippi·Thessalonica·Corinth)
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">🗺️ Acts Part 2: Map of the apostle Paul's 3rd missionary journey (3-year great revival in Ephesus)</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Acts 18:23~21:17</text>

      <g transform="translate(30, 60)">
        <path d="M 0,140 Q 200,120 400,150 T 640,170 L 640,340 L 0,340 Z" fill="#0284c7" opacity="0.25"/>

        <!-- 3차 전도여행로 (보라색 굵은 실선) -->
        <path d="M 590,210 L 480,165 L 400,150 L 310,80 L 295,155 L 405,175 L 560,265" 
              fill="none" stroke="#c084fc" stroke-width="3.5"/>

        <circle cx="590" cy="210" r="5" fill="#ef4444"/>
        <text x="600" y="215" fill="#f87171" font-size="10">Leaves Antioch</text>

        <!-- 에베소 두란노 서원 거점 -->
        <circle cx="400" cy="150" r="8" fill="#a855f7"/>
        <circle cx="400" cy="150" r="14" fill="#a855f7" opacity="0.25"/>
        <text x="415" y="145" fill="#e9d5ff" font-size="12" font-weight="bold">Ephesus (Tyrannus, 3 yrs)</text>
        <text x="415" y="160" fill="#f5d0fe" font-size="9">All in Asia heard the word of the Lord</text>

        <!-- 밀레도 -->
        <circle cx="405" cy="175" r="5" fill="#a855f7"/>
        <text x="415" y="180" fill="#cbd5e1" font-size="9.5">Miletus (farewell to elders)</text>

        <!-- 예루살렘 체포 -->
        <circle cx="560" cy="265" r="6" fill="#f43f5e"/>
        <text x="480" y="275" fill="#fda4af" font-size="10" font-weight="bold">Jerusalem (arrested, bound)</text>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#e2e8f0" font-size="10" text-anchor="middle">
          "So that I might finish my course with joy, and the ministry which I received of the Lord Jesus, to testify the gospel of the grace of God..." (Acts 20:24)
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
      <text x="35" y="35" fill="#fbbf24" font-size="14" font-weight="bold">Revelation: Three judgment cycles (7 seals · 7 trumpets · 7 bowls) ➔ a new heaven and a new earth</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">The end completed, Rev 6~22</text>

      <g transform="translate(20, 58)">
        <!-- 7인 -->
        <rect width="210" height="215" rx="6" fill="#1e293b" stroke="#60a5fa"/>
        <rect width="210" height="25" rx="6" fill="#1d4ed8"/>
        <text x="105" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">1. Seven seals (Rev 6-8)</text>
        <g transform="translate(8, 34)">
          <text x="0" y="16" fill="#cbd5e1" font-size="9">· Seals 1~4: 4 horses (conquest, war, famine, death)</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· Seal 5: martyrs' plea</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· Seal 6: sun darkened, stars fall</text>
          <text x="0" y="66" fill="#93c5fd" font-size="9" font-weight="bold">Interlude: 144,000 sealed (Rev 7)</text>
          <text x="0" y="82" fill="#facc15" font-size="9">· Seal 7 ➔ unfolds into 7 trumpets!</text>
        </g>

        <!-- 7나팔 -->
        <rect x="225" width="210" height="215" rx="6" fill="#1e293b" stroke="#f59e0b"/>
        <rect x="225" width="210" height="25" rx="6" fill="#b45309"/>
        <text x="330" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">2. Seven trumpets (Rev 8-11)</text>
        <g transform="translate(233, 34)">
          <text x="0" y="16" fill="#cbd5e1" font-size="9">· Trumpets 1~4: 1/3 of land·sea·rivers·sun struck</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· Trumpet 5 (woe 1): locusts from the abyss</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· Trumpet 6 (woe 2): 200 million horsemen of the Euphrates</text>
          <text x="0" y="66" fill="#fde68a" font-size="9" font-weight="bold">Interlude: two witnesses martyred & raised (Rev 11)</text>
          <text x="0" y="82" fill="#facc15" font-size="9">· Trumpet 7 ➔ the world's kingdoms become Christ's!</text>
        </g>

        <!-- 7대접 -->
        <rect x="450" width="210" height="215" rx="6" fill="#450a0a" stroke="#ef4444"/>
        <rect x="450" width="210" height="25" rx="6" fill="#991b1b"/>
        <text x="555" y="17" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">3. Seven bowls (Rev 15-16)</text>
        <g transform="translate(458, 34)">
          <text x="0" y="16" fill="#fecaca" font-size="9">· Bowls 1~5: sores, sea of blood, scorching sun</text>
          <text x="0" y="32" fill="#fecaca" font-size="9">· Bowl 6: Euphrates dried, gathering at Armageddon</text>
          <text x="0" y="50" fill="#ffffff" font-size="10" font-weight="bold">· Bowl 7: "It is done!"</text>
          <text x="0" y="68" fill="#fca5a5" font-size="9">Fall of Babylon the great city & white throne judgment</text>
          <text x="0" y="84" fill="#ffffff" font-size="9" font-weight="bold">Satan judged in the lake of fire</text>
        </g>
      </g>

      <!-- 새 예루살렘 -->
      <g transform="translate(20, 285)">
        <rect width="660" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">
          👑 The holy city, New Jerusalem (Rev 21-22)
        </text>
        <text x="30" y="50" fill="#38bdf8" font-size="10" font-weight="bold">🕊️ "There shall be no more death, neither sorrow, nor crying, neither shall there be any more pain"</text>
        <text x="30" y="68" fill="#cbd5e1" font-size="9.5">· The river of the water of life, clear as crystal, flowing from the throne of the Lamb & the tree of life on both sides bearing 12 kinds of fruit</text>
        <text x="30" y="86" fill="#facc15" font-size="10" font-weight="bold">"Amen. Even so, come, Lord Jesus (Maranatha!)"</text>
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
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">👑 Kings·Chronicles: Timeline of the 39 kings of the divided kingdom &amp; their prophets</text>
      <text x="510" y="35" fill="#94a3b8" font-size="10.5">B.C. 931 ~ B.C. 586 (345 years)</text>

      <!-- 상단: 북이스라엘 (19대 왕, 모두 악함 ➔ B.C. 722 앗수르 멸망) -->
      <g transform="translate(20, 58)">
        <rect width="660" height="150" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
        <rect width="660" height="24" rx="8" fill="#4338ca"/>
        <text x="15" y="17" fill="#ffffff" font-size="11" font-weight="bold">🟦 Northern Kingdom of Israel (19 kings, 9 dynasties, all evil ➔ fell to Assyria B.C. 722)</text>
        <text x="540" y="17" fill="#c7d2fe" font-size="10">Capital: Samaria (golden calves at Dan·Bethel)</text>

        <g transform="translate(15, 34)">
          <rect width="95" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="47" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Jeroboam I</text>
          <text x="47" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">Golden calf idols (root of sin)</text>

          <rect x="105" width="95" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="152" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Omri dynasty</text>
          <text x="152" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">Built new capital, Samaria</text>

          <rect x="210" width="105" height="42" rx="4" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="262" y="18" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle">Ahab &amp; Jezebel</text>
          <text x="262" y="32" fill="#fecdd3" font-size="8.5" text-anchor="middle">Baal·Asherah made state religion (most evil)</text>

          <rect x="325" width="105" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="377" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Jehu dynasty</text>
          <text x="377" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">Judged Ahab's house, 4-generation promise</text>

          <rect x="440" width="100" height="42" rx="4" fill="#312e81" stroke="#818cf8"/>
          <text x="490" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Jeroboam II</text>
          <text x="490" y="32" fill="#c7d2fe" font-size="8.5" text-anchor="middle">Economic boom &amp; spiritual decay</text>

          <rect x="550" width="85" height="42" rx="4" fill="#1e1b4b" stroke="#ef4444"/>
          <text x="592" y="18" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Hoshea (last)</text>
          <text x="592" y="32" fill="#fca5a5" font-size="8.5" text-anchor="middle">Fell B.C. 722</text>
        </g>

        <!-- 북이스라엘 활동 선지자 -->
        <g transform="translate(15, 88)">
          <rect width="630" height="50" rx="5" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="18" fill="#38bdf8" font-size="9.5" font-weight="bold">⚡ Prophets who warned the northern kingdom:</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">Ahijah</strong>(foretold the split of the ten tribes) ➔ <strong class="text-amber-300">Elijah</strong>(contest of fire on Carmel, Baal defeated) ➔ <strong class="text-amber-300">Elisha</strong>(double portion, many miracles)
          </text>
          <text x="12" y="47" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">Jonah</strong>(preached repentance to Nineveh) ➔ <strong class="text-amber-300">Amos</strong>("let justice roll down like waters") ➔ <strong class="text-amber-300">Hosea</strong>(unfaithful Gomer and God's heartbroken, compassionate love)
          </text>
        </g>
      </g>

      <!-- 하단: 남유다 (20대 왕, 다윗 왕통 단일계보 ➔ B.C. 586 바벨론 멸망) -->
      <g transform="translate(20, 220)">
        <rect width="660" height="165" rx="8" fill="#451a03" stroke="#d97706" stroke-width="1.5"/>
        <rect width="660" height="24" rx="8" fill="#92400e"/>
        <text x="15" y="17" fill="#ffffff" font-size="11" font-weight="bold">🟥 Southern Kingdom of Judah (20 kings, single dynasty of the Davidic covenant ➔ fell to Babylon B.C. 586)</text>
        <text x="535" y="17" fill="#fde68a" font-size="10">Capital: Jerusalem (Solomon's temple)</text>

        <g transform="translate(15, 34)">
          <rect width="85" height="42" rx="4" fill="#78350f" stroke="#f59e0b"/>
          <text x="42" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Rehoboam</text>
          <text x="42" y="32" fill="#fed7aa" font-size="8.5" text-anchor="middle">Solomon's son (split)</text>

          <rect x="95" width="85" height="42" rx="4" fill="#78350f" stroke="#10b981"/>
          <text x="137" y="18" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Asa &amp; Jehoshaphat</text>
          <text x="137" y="32" fill="#a7f3d0" font-size="8.5" text-anchor="middle">Religious reform &amp; teaching the law</text>

          <rect x="190" width="85" height="42" rx="4" fill="#78350f" stroke="#f59e0b"/>
          <text x="232" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Uzziah</text>
          <text x="232" y="32" fill="#fed7aa" font-size="8.5" text-anchor="middle">52-year reign, national strength</text>

          <rect x="285" width="105" height="42" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="337" y="18" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Hezekiah (good king)</text>
          <text x="337" y="32" fill="#d1fae5" font-size="8.5" text-anchor="middle">Assyria repelled·15 more years</text>

          <rect x="400" width="85" height="42" rx="4" fill="#7f1d1d" stroke="#f87171"/>
          <text x="442" y="18" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Manasseh (evil king)</text>
          <text x="442" y="32" fill="#fecaca" font-size="8.5" text-anchor="middle">55 years of idols·brought ruin</text>

          <rect x="495" width="100" height="42" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="545" y="18" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Josiah (reformer)</text>
          <text x="545" y="32" fill="#d1fae5" font-size="8.5" text-anchor="middle">Book of Law found·Passover</text>

          <rect x="605" width="45" height="42" rx="4" fill="#7f1d1d" stroke="#ef4444"/>
          <text x="627" y="18" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Zedekiah</text>
          <text x="627" y="32" fill="#ffffff" font-size="8" text-anchor="middle">B.C.586</text>
        </g>

        <!-- 남유다 활동 선지자 -->
        <g transform="translate(15, 88)">
          <rect width="630" height="65" rx="5" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="18" fill="#f59e0b" font-size="9.5" font-weight="bold">📜 Major & minor prophets sent to Judah:</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">Isaiah</strong>(the Messiah, suffering servant, Isa 53) &amp; <strong class="text-amber-300">Micah</strong>(birth in Bethlehem, Mic 5:2) ➔ <strong class="text-amber-300">Zephaniah·Nahum·Habakkuk</strong>("the just shall live by faith")
          </text>
          <text x="12" y="48" fill="#cbd5e1" font-size="9">
            · <strong class="text-amber-300">Jeremiah</strong>(weeping prophet, new covenant Jer 31, foretold 70-year Exile) ➔ <strong class="text-amber-300">Daniel &amp; Ezekiel</strong>(visions and restoration in the Babylonian Exile)
          </text>
          <text x="12" y="61" fill="#38bdf8" font-size="9">
            · Prophets after the Return from Exile: <strong class="text-emerald-400">Haggai &amp; Zechariah</strong>(urged rebuilding of Zerubbabel's temple) ➔ <strong class="text-emerald-400">Malachi</strong>(Elijah's coming and hope for the Messiah)
          </text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          💡 Ezra's view: "Israel fell not because its army was weak, but because it forsook God's commandments and worshiped idols!"
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🗺️ Acts Part 3: Map of Paul's voyage to Rome as a prisoner &amp; the Euroclydon storm</text>
      <text x="540" y="35" fill="#94a3b8" font-size="11">Acts 27:1 ~ 28:31</text>

      <g transform="translate(30, 55)">
        <!-- 지중해 바다 배경 -->
        <path d="M 0,100 Q 150,80 300,100 T 640,110 L 640,335 L 0,335 Z" fill="#0369a1" opacity="0.22"/>
        <text x="280" y="250" fill="#38bdf8" font-size="14" font-weight="bold" opacity="0.4">Mediterranean Sea</text>

        <!-- 항해 경로 선 (붉은색/황금 점선) -->
        <path d="M 610,240 L 590,210 L 530,170 L 450,165 L 390,185 L 340,195 L 300,225 L 240,240 L 190,200 L 160,140 L 140,80" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3"/>

        <!-- 1. 가이사랴 출발 -->
        <circle cx="610" cy="240" r="5" fill="#10b981"/>
        <text x="560" y="258" fill="#a7f3d0" font-size="9.5" font-weight="bold">Caesarea (sets sail)</text>

        <!-- 2. 시돈 & 무라 -->
        <circle cx="590" cy="210" r="4" fill="#38bdf8"/>
        <text x="598" y="210" fill="#bae6fd" font-size="9">Sidon</text>

        <circle cx="530" cy="170" r="4" fill="#38bdf8"/>
        <text x="500" y="160" fill="#bae6fd" font-size="9">Myra (change to Alexandrian ship)</text>

        <!-- 3. 그레데 미항 -->
        <circle cx="390" cy="185" r="5" fill="#f59e0b"/>
        <text x="360" y="200" fill="#fde047" font-size="9.5" font-weight="bold">Fair Havens, Crete (sails anyway)</text>

        <!-- 4. 유라굴로 광풍 지대 -->
        <g transform="translate(300, 190)">
          <circle cx="0" cy="0" r="22" fill="#ef4444" opacity="0.25"/>
          <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.4"/>
          <text x="-40" y="-12" fill="#f87171" font-size="9.5" font-weight="black">🌪️ The Euroclydon storm</text>
          <text x="-45" y="28" fill="#fca5a5" font-size="8.5">14 days adrift &amp; all hope of rescue gone</text>
        </g>

        <!-- 5. 멜리데(몰타) 섬 난파 & 276명 전원 생환 -->
        <g transform="translate(240, 240)">
          <circle cx="0" cy="0" r="7" fill="#10b981"/>
          <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.3"/>
          <text x="-35" y="20" fill="#34d399" font-size="10.5" font-weight="black">Melita (Malta)</text>
          <text x="-45" y="33" fill="#a7f3d0" font-size="8.5">Shipwrecked, all 276 survive: a miracle!</text>
          <text x="-45" y="44" fill="#fde047" font-size="8">Survives viper bite &amp; Publius's father healed</text>
        </g>

        <!-- 6. 수라구사 & 레기온 -->
        <circle cx="190" cy="200" r="4" fill="#38bdf8"/>
        <text x="135" y="205" fill="#bae6fd" font-size="9">Syracuse (Sicily)</text>

        <circle cx="160" cy="140" r="4" fill="#38bdf8"/>
        <text x="170" y="145" fill="#bae6fd" font-size="9">Puteoli (welcomed by believers)</text>

        <!-- 7. 로마 도착 -->
        <g transform="translate(140, 80)">
          <circle cx="0" cy="0" r="8" fill="#ef4444"/>
          <circle cx="0" cy="0" r="16" fill="#ef4444" opacity="0.3"/>
          <text x="-80" y="5" fill="#fca5a5" font-size="12" font-weight="black">👑 Rome</text>
          <text x="-120" y="20" fill="#fed7aa" font-size="9">Welcomed at Appii Forum ➔ 2 years in a rented house</text>
          <text x="-120" y="32" fill="#38bdf8" font-size="8.5" font-weight="bold">Preaching God's kingdom boldly, without hindrance!</text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          🕊️ "Fear not, Paul; you must be brought before Caesar... I believe God, that it shall be even as it was told me" (Acts 27:24-25)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🌿 Genesis Part 4: The holy order of the six days of creation and rest (Creation Order)</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">Gen 1:1 ~ 2:3 "It was very good"</text>

      <!-- 3대 형성(Forming) vs 3대 충만(Filling) 대칭 매트릭스 -->
      <g transform="translate(20, 56)">
        
        <!-- 좌측 컬럼: 영역의 형성 (Days 1 ~ 3 Forming) -->
        <rect width="320" height="260" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#1d4ed8"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">🏗️ Days 1~3: Forming (realms made)</text>

        <!-- 제1일 -->
        <g transform="translate(10, 35)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">Day 1: Light separated from darkness (order of time)</text>
          <text x="12" y="34" fill="#fde047" font-size="9.5">"Let there be light: and there was light..."</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· Called the light Day and the darkness Night (Gen 1:3-5)</text>
        </g>

        <!-- 제2일 -->
        <g transform="translate(10, 110)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">Day 2: Waters above and below the firmament (sky)</text>
          <text x="12" y="34" fill="#38bdf8" font-size="9.5">"Let there be a firmament in the midst of the waters, and let it divide the waters from the waters"</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· The atmosphere, a space for breath and life (sky), prepared (Gen 1:6-8)</text>
        </g>

        <!-- 제3일 -->
        <g transform="translate(10, 185)">
          <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#60a5fa"/>
          <text x="12" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold">Day 3: Dry land separated from sea &amp; plants</text>
          <text x="12" y="34" fill="#4ade80" font-size="9.5">"Let the waters under the heaven be gathered together unto one place, and let the dry land appear"</text>
          <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· Plants and fruit trees with seed, each after its kind, created (Gen 1:9-13)</text>
        </g>

        <!-- 우측 컬럼: 공간의 충만 (Days 4 ~ 6 Filling) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="260" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#b45309"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">✨ Days 4~6: Filling (creatures fill the realms)</text>

          <!-- 제4일 (1일 대응) -->
          <g transform="translate(10, 35)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">Day 4: Sun, moon, stars (filling Day 1's light)</text>
            <text x="12" y="34" fill="#facc15" font-size="9.5">"To rule over the day and the night, and for seasons, and for days, and years"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· The greater light (sun), the lesser light (moon) and the stars (Gen 1:14-19)</text>
          </g>

          <!-- 제5일 (2일 대응) -->
          <g transform="translate(10, 110)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">Day 5: Birds of the air &amp; fish of the sea (filling Day 2's firmament)</text>
            <text x="12" y="34" fill="#38bdf8" font-size="9.5">"Let the waters bring forth abundantly the moving creature, and fowl that may fly above the earth"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· First blessing: be fruitful, multiply and fill (Gen 1:20-23)</text>
          </g>

          <!-- 제6일 (3일 대응) -->
          <g transform="translate(10, 185)">
            <rect width="300" height="65" rx="6" fill="#1e293b" stroke="#fbbf24"/>
            <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">Day 6: Land animals &amp; man (filling Day 3's land)</text>
            <text x="12" y="34" fill="#f43f5e" font-size="9.5">👑 "Let us make man in our image, after our likeness"</text>
            <text x="12" y="50" fill="#cbd5e1" font-size="8.5">· Steward's mission: be fruitful, multiply, fill the earth, subdue and rule (Gen 1:24-31)</text>
          </g>
        </g>
      </g>

      <!-- 제7일 안식의 축복 -->
      <g transform="translate(20, 326)">
        <rect width="660" height="65" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="24" fill="#a7f3d0" font-size="12.5" font-weight="black" text-anchor="middle">
          🕊️ Day 7: God finished His work of creation and rested (Sabbath Blessing &amp; Sanctification)
        </text>
        <text x="330" y="44" fill="#ffffff" font-size="10" text-anchor="middle">
          "On the seventh day God ended his work which he had made... And God blessed the seventh day, and sanctified it" (Gen 2:2-3)
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          💡 Ezra's view: The perfect pairing of Days 1~3 (frame/realms) and Days 4~6 (content/filling) testifies to the order and wisdom of God the Creator.
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🍎 Genesis Part 5: The fall of mankind and the seed of the woman (the first gospel, Protoevangelium)</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">Genesis 3: The origin of sin and the first promise of salvation</text>

      <g transform="translate(20, 58)">
        <!-- 1단계: 유혹과 선악과 불순종 -->
        <rect width="210" height="255" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <rect width="210" height="24" rx="8" fill="#3730a3"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. Temptation and disobedience over the forbidden fruit</text>
        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#f87171" font-size="10" font-weight="bold">🐍 Satan's lies stir up doubt</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· "Ye shall not surely die"</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="9">· "Your eyes shall be opened, and ye shall be as gods"</text>
          <text x="0" y="70" fill="#fde047" font-size="10" font-weight="bold">🍎 Desire: pleasant to the eyes, good for food, to be desired</text>
          <text x="0" y="86" fill="#cbd5e1" font-size="9">· The pride of making God's word relative and wanting to be master of one's own life</text>
          <text x="0" y="112" fill="#f43f5e" font-size="10" font-weight="bold">💔 Spiritual separation and shame</text>
          <text x="0" y="128" fill="#cbd5e1" font-size="9">· Afraid because naked, they hid</text>
          <text x="0" y="144" fill="#cbd5e1" font-size="9">· Fig-leaf aprons (the futility of human effort)</text>
          <text x="0" y="166" fill="#94a3b8" font-size="9">· Shifting blame: Adam ➔ Eve ➔ serpent</text>
        </g>

        <!-- 2단계: 공의로운 선고와 징벌 -->
        <g transform="translate(225, 0)">
          <rect width="210" height="255" rx="8" fill="#450a0a" stroke="#ef4444"/>
          <rect width="210" height="24" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. Righteous judgment pronounced</text>
          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ Curse on the serpent</text>
            <text x="0" y="32" fill="#fecaca" font-size="9">· Cursed above all cattle: to crawl on its belly and eat dust</text>
            <text x="0" y="58" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ Sentence on the woman</text>
            <text x="0" y="74" fill="#fecaca" font-size="9">· Great pain in pregnancy and childbirth</text>
            <text x="0" y="90" fill="#fecaca" font-size="9">· Her desire for her husband, and he shall rule over her</text>
            <text x="0" y="116" fill="#fca5a5" font-size="10" font-weight="bold">⚠️ Sentence on the man and the ground</text>
            <text x="0" y="132" fill="#fecaca" font-size="9">· The ground brings forth thorns and thistles</text>
            <text x="0" y="148" fill="#fecaca" font-size="9">· Eating bread in the sweat of his face</text>
            <text x="0" y="170" fill="#ffffff" font-size="9.5" font-weight="bold">"For dust thou art, and unto dust shalt thou return"</text>
          </g>
        </g>

        <!-- 3단계: 원시복음(창 3:15) & 가죽옷 -->
        <g transform="translate(450, 0)">
          <rect width="210" height="255" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <rect width="210" height="24" rx="8" fill="#047857"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. The first gospel &amp; the grace of atonement</text>
          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">🌟 The first gospel (Gen 3:15)</text>
            <text x="0" y="32" fill="#ecfdf5" font-size="9">"I will put enmity between thee and the woman, and between thy seed and her seed"</text>
            <text x="0" y="62" fill="#fde047" font-size="9.5" font-weight="bold">"It shall bruise thy head, and thou shalt bruise his heel"</text>
            <text x="0" y="96" fill="#6ee7b7" font-size="9">➔ A prophecy of Christ's virgin birth, His suffering on the cross, and Satan's total defeat!</text>
            <text x="0" y="128" fill="#a7f3d0" font-size="10" font-weight="bold">🐑 The grace of garments of skin (Gen 3:21)</text>
            <text x="0" y="144" fill="#ecfdf5" font-size="9">· God killed a lamb and made garments of skin to clothe them</text>
            <text x="0" y="166" fill="#fde047" font-size="8.5" font-weight="bold">"Without shedding of blood is no remission" (Heb 9:22)</text>
          </g>
        </g>
      </g>

      <!-- 하단 요약 배너 -->
      <g transform="translate(20, 325)">
        <rect width="660" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">
          ✝️ God's first covenant of redemptive history, proclaimed amid the despair of mankind's fall
        </text>
        <text x="330" y="44" fill="#e2e8f0" font-size="10" text-anchor="middle">
          At the very scene of humanity's first sin, God had already planned the atoning victory of the cross of His only Son, Jesus Christ.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          Gen 3:15 (first gospel) ➔ Gen 12:3 (Abrahamic covenant) ➔ 2 Sam 7:12 (Davidic covenant) ➔ Gal 4:4 (when the fullness of time came, made of a woman) fulfilled!
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">📜 Genesis Part 6: Family tree of Abraham, father of faith, and the 12 tribes of Israel</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">Gen 12~50: the line of the covenant family</text>

      <g transform="translate(20, 56)">
        <!-- 1대: 아브라함 (사라 / 하갈 / 그두라) -->
        <rect x="230" y="0" width="200" height="42" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="18" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Abraham &amp; Sarah</text>
        <text x="330" y="32" fill="#fed7aa" font-size="9" text-anchor="middle">Father of faith / father and mother of nations (Gen 17)</text>

        <!-- 2대: 이삭 (리브가) & 이스마엘 -->
        <path d="M 330,42 L 330,68" stroke="#f59e0b" stroke-width="2"/>
        <path d="M 120,68 L 540,68" stroke="#94a3b8" stroke-width="1.5"/>
        
        <rect x="50" y="75" width="140" height="36" rx="5" fill="#1e293b" stroke="#64748b"/>
        <text x="120" y="92" fill="#94a3b8" font-size="9.5" text-anchor="middle">Ishmael (son of Hagar)</text>
        <text x="120" y="104" fill="#64748b" font-size="8" text-anchor="middle">Origin of 12 Arabian princes</text>

        <rect x="250" y="72" width="160" height="42" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="89" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Isaac &amp; Rebekah</text>
        <text x="330" y="104" fill="#fed7aa" font-size="9" text-anchor="middle">Son of obedience and promise (offering on Moriah)</text>

        <!-- 3대: 야곱(이스라엘) & 에서 -->
        <path d="M 330,114 L 330,135" stroke="#f59e0b" stroke-width="2"/>
        <path d="M 180,135 L 480,135" stroke="#94a3b8" stroke-width="1.5"/>

        <rect x="110" y="142" width="130" height="36" rx="5" fill="#1e293b" stroke="#ef4444"/>
        <text x="175" y="158" fill="#fca5a5" font-size="9.5" text-anchor="middle">Esau (Edomites)</text>
        <text x="175" y="170" fill="#f87171" font-size="8" text-anchor="middle">Despised the birthright (Mount Seir)</text>

        <rect x="240" y="138" width="180" height="44" rx="6" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <text x="330" y="156" fill="#c7d2fe" font-size="11.5" font-weight="black" text-anchor="middle">Jacob ➔ Israel</text>
        <text x="330" y="172" fill="#a5b4fc" font-size="9" text-anchor="middle">Victory at the ford of Jabbok / father of 12 sons</text>

        <!-- 4대: 야곱의 4 아내와 12지파 (Leah, Rachel, Bilhah, Zilpah) -->
        <g transform="translate(0, 195)">
          <!-- 1. 레아 (6아들 + 디나) -->
          <rect x="0" y="0" width="190" height="135" rx="6" fill="#0f172a" stroke="#3b82f6"/>
          <text x="95" y="18" fill="#93c5fd" font-size="10.5" font-weight="bold" text-anchor="middle">Leah — 6 tribes</text>
          <text x="12" y="36" fill="#cbd5e1" font-size="9">1. Reuben (lost the birthright)</text>
          <text x="12" y="52" fill="#cbd5e1" font-size="9">2. Simeon (scattered after Shechem massacre)</text>
          <text x="12" y="68" fill="#cbd5e1" font-size="9">3. Levi (set-apart priestly tribe)</text>
          <text x="12" y="86" fill="#fde047" font-size="10" font-weight="black">4. Judah (★ royal line of the Messiah!)</text>
          <text x="12" y="102" fill="#cbd5e1" font-size="9">9. Issachar (rest in the land)</text>
          <text x="12" y="118" fill="#cbd5e1" font-size="9">10. Zebulun (haven by the sea)</text>

          <!-- 2. 라헬 (2아들 ➔ 요셉 두 아들) -->
          <rect x="200" y="0" width="220" height="135" rx="6" fill="#0f172a" stroke="#ec4899"/>
          <text x="310" y="18" fill="#f472b6" font-size="10.5" font-weight="bold" text-anchor="middle">Rachel — Joseph's double blessing</text>
          <text x="212" y="38" fill="#fde047" font-size="10" font-weight="bold">11. Joseph (double portion of firstborn!)</text>
          <text x="225" y="55" fill="#fbcfe8" font-size="9">· Ephraim (younger son's blessing, led the north)</text>
          <text x="225" y="70" fill="#fbcfe8" font-size="9">· Manasseh (elder, vast land east & west of Jordan)</text>
          <text x="212" y="92" fill="#ffffff" font-size="10" font-weight="bold">12. Benjamin</text>
          <text x="225" y="108" fill="#cbd5e1" font-size="9">· Ravening wolf (King Saul, apostle Paul's tribe)</text>
          <text x="212" y="124" fill="#a7f3d0" font-size="8.5">Loyal to the end with Judah in the southern kingdom</text>

          <!-- 3. 빌하 (라헬의 여종, 2아들) -->
          <rect x="430" y="0" width="110" height="135" rx="6" fill="#0f172a" stroke="#10b981"/>
          <text x="485" y="18" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Bilhah</text>
          <text x="440" y="42" fill="#cbd5e1" font-size="9">5. Dan</text>
          <text x="445" y="58" fill="#94a3b8" font-size="8">· Serpent by the way, Samson's tribe</text>
          <text x="440" y="85" fill="#cbd5e1" font-size="9">6. Naphtali</text>
          <text x="445" y="101" fill="#94a3b8" font-size="8">· Hind let loose, goodly words</text>

          <!-- 4. 실바 (레아의 여종, 2아들) -->
          <rect x="550" y="0" width="110" height="135" rx="6" fill="#0f172a" stroke="#f59e0b"/>
          <text x="605" y="18" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Zilpah</text>
          <text x="560" y="42" fill="#cbd5e1" font-size="9">7. Gad</text>
          <text x="565" y="58" fill="#94a3b8" font-size="8">· Pursued by a troop, but overcomes</text>
          <text x="560" y="85" fill="#cbd5e1" font-size="9">8. Asher</text>
          <text x="565" y="101" fill="#94a3b8" font-size="8">· Rich food, royal dainties</text>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          👑 Core of redemptive history: 4th son Judah ➔ Perez ➔ Boaz ➔ King David ➔ birth of Jesus Christ (genealogy completed in Matt 1)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">👔 Exodus Part 3: The high priest's holy garments and the breastplate of judgment (Exod 28)</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">A type of Jesus Christ, mankind's perfect High Priest</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 대제사장 의복 구성도 일러스트 -->
        <g transform="translate(0, 0)">
          <rect width="310" height="265" rx="8" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
          <rect width="310" height="24" rx="8" fill="#78350f"/>
          <text x="155" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">👑 The parts of the garments and their meaning</text>

          <g transform="translate(15, 32)">
            <!-- 1. 관 & 순금 패 -->
            <rect width="280" height="36" rx="4" fill="#1e293b" stroke="#fde047"/>
            <text x="10" y="16" fill="#fde047" font-size="10" font-weight="bold">1. Linen mitre &amp; pure gold plate (utmost holiness)</text>
            <text x="10" y="29" fill="#fef08a" font-size="8.5">"HOLINESS TO THE LORD" engraved like a seal on a pure gold plate (on the forehead)</text>

            <!-- 2. 견대 호마노 보석 2개 -->
            <rect y="42" width="280" height="36" rx="4" fill="#1e293b" stroke="#38bdf8"/>
            <text x="10" y="58" fill="#38bdf8" font-size="10" font-weight="bold">2. Shoulder pieces (2 onyx stones)</text>
            <text x="10" y="71" fill="#cbd5e1" font-size="8.5">Names of the 12 tribes, 6 on each stone, carried on the shoulders (assurance of salvation)</text>

            <!-- 3. 판결 흉패 -->
            <rect y="84" width="280" height="42" rx="4" fill="#1e293b" stroke="#ec4899"/>
            <text x="10" y="100" fill="#f472b6" font-size="10" font-weight="bold">3. Breastplate of judgment &amp; Urim and Thummim (chest)</text>
            <text x="10" y="113" fill="#cbd5e1" font-size="8.5">12 stones (love for 12 tribes) + Urim (lights)·Thummim (perfections) for judgment inside</text>

            <!-- 4. 에봇 & 겉옷 -->
            <rect y="132" width="280" height="42" rx="4" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="148" fill="#93c5fd" font-size="10" font-weight="bold">4. Ephod &amp; blue robe of the ephod</text>
            <text x="10" y="161" fill="#cbd5e1" font-size="8.5">Apron-like holy garment finely woven of gold, blue, purple and scarlet thread and linen</text>

            <!-- 5. 석류와 금방울 -->
            <rect y="180" width="280" height="42" rx="4" fill="#1e293b" stroke="#f59e0b"/>
            <text x="10" y="196" fill="#fde68a" font-size="10" font-weight="bold">5. Pomegranates &amp; pure gold bells on the hem</text>
            <text x="10" y="210" fill="#cbd5e1" font-size="8.5">Blue, purple and scarlet pomegranates alternating with gold bells ➔ sound when entering the sanctuary</text>
          </g>
        </g>

        <!-- 우측: 판결 흉패 12가지 보석 (4열 3행) 상세도 -->
        <g transform="translate(325, 0)">
          <rect width="335" height="265" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
          <rect width="335" height="24" rx="8" fill="#1d4ed8"/>
          <text x="167" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">💎 The 12 stones of the breastplate and the 12 tribes (Breastplate)</text>

          <g transform="translate(12, 32)">
            <!-- 1열 (홍보석, 황옥, 녹주옥) -->
            <rect x="0" y="0" width="98" height="48" rx="4" fill="#7f1d1d" stroke="#f87171"/>
            <text x="49" y="18" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Sardius (Judah)</text>
            <text x="49" y="32" fill="#fed7aa" font-size="8" text-anchor="middle">Kingship & atoning blood</text>

            <rect x="105" y="0" width="98" height="48" rx="4" fill="#78350f" stroke="#fbbf24"/>
            <text x="154" y="18" fill="#fde047" font-size="9" font-weight="bold" text-anchor="middle">Topaz (Issachar)</text>
            <text x="154" y="32" fill="#fef08a" font-size="8" text-anchor="middle">Purity & wisdom</text>

            <rect x="210" y="0" width="98" height="48" rx="4" fill="#064e3b" stroke="#34d399"/>
            <text x="259" y="18" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Carbuncle (Zebulun)</text>
            <text x="259" y="32" fill="#d1fae5" font-size="8" text-anchor="middle">Life & hope</text>

            <!-- 2열 (석류석, 남보석, 홍마노) -->
            <rect x="0" y="54" width="98" height="48" rx="4" fill="#581c87" stroke="#c084fc"/>
            <text x="49" y="72" fill="#e9d5ff" font-size="9" font-weight="bold" text-anchor="middle">Emerald (Reuben)</text>
            <text x="49" y="86" fill="#f3e8ff" font-size="8" text-anchor="middle">Glory & power</text>

            <rect x="105" y="54" width="98" height="48" rx="4" fill="#1e3a8a" stroke="#60a5fa"/>
            <text x="154" y="72" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">Sapphire (Simeon)</text>
            <text x="154" y="86" fill="#dbeafe" font-size="8" text-anchor="middle">Heavenly holiness</text>

            <rect x="210" y="54" width="98" height="48" rx="4" fill="#701a75" stroke="#f472b6"/>
            <text x="259" y="72" fill="#fbcfe8" font-size="9" font-weight="bold" text-anchor="middle">Diamond (Levi)</text>
            <text x="259" y="86" fill="#fdf2f8" font-size="8" text-anchor="middle">Priestly holiness</text>

            <!-- 3열 (호박, 백마노, 자수정) -->
            <rect x="0" y="108" width="98" height="48" rx="4" fill="#854d0e" stroke="#fde047"/>
            <text x="49" y="126" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">Ligure (Ephraim)</text>
            <text x="49" y="140" fill="#fef9c3" font-size="8" text-anchor="middle">Abundant fruit</text>

            <rect x="105" y="108" width="98" height="48" rx="4" fill="#334155" stroke="#cbd5e1"/>
            <text x="154" y="126" fill="#f1f5f9" font-size="9" font-weight="bold" text-anchor="middle">Agate (Manasseh)</text>
            <text x="154" y="140" fill="#ffffff" font-size="8" text-anchor="middle">Gracious forgetting</text>

            <rect x="210" y="108" width="98" height="48" rx="4" fill="#4c1d95" stroke="#a78bfa"/>
            <text x="259" y="126" fill="#ddd6fe" font-size="9" font-weight="bold" text-anchor="middle">Amethyst (Benjamin)</text>
            <text x="259" y="140" fill="#ede9fe" font-size="8" text-anchor="middle">Son of the right hand</text>

            <!-- 4열 (녹보석, 호마노, 벽옥) -->
            <rect x="0" y="162" width="98" height="48" rx="4" fill="#065f46" stroke="#10b981"/>
            <text x="49" y="180" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Beryl (Dan)</text>
            <text x="49" y="194" fill="#a7f3d0" font-size="8" text-anchor="middle">Righteous judgment</text>

            <rect x="105" y="162" width="98" height="48" rx="4" fill="#365314" stroke="#84cc16"/>
            <text x="154" y="180" fill="#bef264" font-size="9" font-weight="bold" text-anchor="middle">Onyx (Asher)</text>
            <text x="154" y="194" fill="#d9f99d" font-size="8" text-anchor="middle">Rich blessing</text>

            <rect x="210" y="162" width="98" height="48" rx="4" fill="#14532d" stroke="#4ade80"/>
            <text x="259" y="180" fill="#86efac" font-size="9" font-weight="bold" text-anchor="middle">Jasper (Naphtali)</text>
            <text x="259" y="194" fill="#bbf7d0" font-size="8" text-anchor="middle">Freedom of victory</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          ✝️ Fulfilled in the New Testament: Jesus Christ, the eternal High Priest (Hebrews 7-9)
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          Jesus, who came not after the order of Aaron but after the order of Melchizedek, carries His people on His breast and shoulders, and entered once for all into the true Most Holy Place.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          "Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God" (Heb 4:14)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">📜 Exodus Part 4: Structure of the two stone tablets of the Ten Commandments</text>
      <text x="500" y="35" fill="#94a3b8" font-size="11">Exod 20:1~17 / Deut 5:6~21, the covenant written by God's own hand</text>

      <g transform="translate(20, 56)">
        <!-- 첫째 돌판 (대신 관계: 1~4계명 하나님 사랑) -->
        <rect width="320" height="260" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <rect width="320" height="28" rx="16" fill="#4338ca"/>
        <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="black" text-anchor="middle">
          🕊️ First tablet: love toward God (commandments 1~4)
        </text>

        <g transform="translate(15, 38)">
          <!-- 1계명 -->
          <rect width="290" height="46" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="18" fill="#fde047" font-size="10.5" font-weight="bold">1st: Serve the LORD God alone</text>
          <text x="12" y="34" fill="#cbd5e1" font-size="8.5">"Thou shalt have no other gods before me" (faith in one God)</text>

          <!-- 2계명 -->
          <rect y="52" width="290" height="48" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="70" fill="#fde047" font-size="10.5" font-weight="bold">2nd: Make no idol of any kind and do not bow to it</text>
          <text x="12" y="86" fill="#cbd5e1" font-size="8.5">"Thou shalt not make unto thee any graven image... thou shalt not bow down thyself to them, nor serve them"</text>

          <!-- 3계명 -->
          <rect y="106" width="290" height="46" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="124" fill="#fde047" font-size="10.5" font-weight="bold">3rd: Do not take the LORD's name in vain</text>
          <text x="12" y="140" fill="#cbd5e1" font-size="8.5">"The LORD will not hold him guiltless that taketh his name in vain"</text>

          <!-- 4계명 -->
          <rect y="158" width="290" height="52" rx="5" fill="#0f172a" stroke="#6366f1"/>
          <text x="12" y="176" fill="#fde047" font-size="10.5" font-weight="bold">4th: Remember the Sabbath day, to keep it holy</text>
          <text x="12" y="192" fill="#cbd5e1" font-size="8.5">"Six days shalt thou labour, and do all thy work: but the seventh day is the sabbath"</text>
        </g>

        <!-- 둘째 돌판 (대인 관계: 5~10계명 이웃 사랑) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="260" rx="16" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
          <rect width="320" height="28" rx="16" fill="#047857"/>
          <text x="160" y="19" fill="#ffffff" font-size="11.5" font-weight="black" text-anchor="middle">
            🤝 Second tablet: love toward neighbor (commandments 5~10)
          </text>

          <g transform="translate(15, 36)">
            <!-- 5계명 -->
            <rect width="290" height="34" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">5th: Honor your father and mother (first commandment with a promise)</text>
            <text x="12" y="28" fill="#d1fae5" font-size="8">"That thy days may be long upon the land which the LORD thy God giveth thee"</text>

            <!-- 6계명 -->
            <rect y="38" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="53" fill="#a7f3d0" font-size="10" font-weight="bold">6th: Do not murder (respect for life)</text>
            <text x="12" y="65" fill="#d1fae5" font-size="8">Protecting human life, dignified and made in God's image</text>

            <!-- 7계명 -->
            <rect y="74" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="89" fill="#a7f3d0" font-size="10" font-weight="bold">7th: Do not commit adultery (family and purity)</text>
            <text x="12" y="101" fill="#d1fae5" font-size="8">Guarding the holy marriage covenant and sexual purity</text>

            <!-- 8계명 -->
            <rect y="110" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="125" fill="#a7f3d0" font-size="10" font-weight="bold">8th: Do not steal (justice and honesty)</text>
            <text x="12" y="137" fill="#d1fae5" font-size="8">Respecting neighbors' property and the fruit of their labor</text>

            <!-- 9계명 -->
            <rect y="146" width="290" height="32" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="161" fill="#a7f3d0" font-size="10" font-weight="bold">9th: Do not bear false witness (truth and trust)</text>
            <text x="12" y="173" fill="#d1fae5" font-size="8">Forbidding perjury, keeping truth and fairness in society</text>

            <!-- 10계명 -->
            <rect y="182" width="290" height="34" rx="4" fill="#0f172a" stroke="#10b981"/>
            <text x="12" y="197" fill="#a7f3d0" font-size="10" font-weight="bold">10th: Do not covet your neighbor's house (holiness of heart)</text>
            <text x="12" y="210" fill="#d1fae5" font-size="8">God sees not only actions but the heart's motive of greed</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 326)">
        <rect width="660" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">
          ❤️ Jesus' summary of the Ten Commandments (Matthew 22:37~40)
        </text>
        <text x="330" y="44" fill="#ffffff" font-size="10" text-anchor="middle">
          "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind (first commandment) ... Thou shalt love thy neighbour as thyself (second commandment)"
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#93c5fd" font-size="9.5" text-anchor="middle">
          The law is not a condition for salvation; it is the holy moral standard for the life of God's saved covenant people.
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
      <text x="35" y="35" fill="#34d399" font-size="13.5" font-weight="bold">🐟 Leviticus Part 3: Clean and unclean food (holiness rules of Leviticus 11)</text>
      <text x="510" y="35" fill="#a7f3d0" font-size="11">"Ye shall therefore be holy, for I am holy" (Lev 11:45)</text>

      <g transform="translate(20, 56)">
        <!-- 1. 육상 동물 (땅의 짐승) -->
        <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#10b981"/>
        <rect width="320" height="24" rx="8" fill="#047857"/>
        <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">1. Land animals (2 conditions: split hoof + chews the cud)</text>
        <g transform="translate(12, 34)">
          <text x="0" y="16" fill="#4ade80" font-size="10" font-weight="bold">✅ Clean animals (may be eaten):</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="9">· Cattle, sheep, goats, deer, roe deer (split, cloven hoof and chew the cud)</text>
          <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ Unclean animals (may not be eaten):</text>
          <text x="0" y="72" fill="#fca5a5" font-size="9">· Camel, coney, hare (chew the cud but hoof not split)</text>
          <text x="0" y="88" fill="#fca5a5" font-size="9">· Pig (split hoof but does not chew the cud ➔ no spiritual discernment)</text>
        </g>

        <!-- 2. 수중 생물 (바다와 강의 어류) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#38bdf8"/>
          <rect width="320" height="24" rx="8" fill="#0284c7"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">2. Water creatures (2 conditions: fins + scales)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#38bdf8" font-size="10" font-weight="bold">✅ Clean fish (may be eaten):</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· Fish with both fins and scales (croaker, carp, crucian carp, etc.)</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ Unclean creatures (may not be eaten):</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· Eel, loach, catfish (no scales ➔ eat mud/rot from the bottom)</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· Crab, shrimp, oyster, shellfish, squid (shellfish and mollusks that build up toxins)</text>
          </g>
        </g>

        <!-- 3. 공중 조류 (새) -->
        <g transform="translate(0, 140)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#fbbf24"/>
          <rect width="320" height="24" rx="8" fill="#d97706"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">3. Birds of the air (birds of prey that eat carcasses forbidden)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#fde047" font-size="10" font-weight="bold">✅ Clean birds:</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· Peaceful grain-eating birds (doves etc., used in offerings)</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ Detestable birds (about 20 kinds):</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· Eagle, kite, raven, ostrich, owl, gull, heron, bat, etc.</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· Birds of prey that tear rotting carcasses, hunt at night and shed blood</text>
          </g>
        </g>

        <!-- 4. 곤충류 & 기는 것 -->
        <g transform="translate(340, 140)">
          <rect width="320" height="130" rx="8" fill="#0f172a" stroke="#c084fc"/>
          <rect width="320" height="24" rx="8" fill="#7e22ce"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">4. Insects &amp; creeping things (legs for leaping or not)</text>
          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#e9d5ff" font-size="10" font-weight="bold">✅ Clean insects:</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="9">· Locusts, grasshoppers, crickets that leap on the ground with jumping legs</text>
            <text x="0" y="56" fill="#f87171" font-size="10" font-weight="bold">❌ Unclean creeping things:</text>
            <text x="0" y="72" fill="#fca5a5" font-size="9">· Insects that crawl on their belly or have many feet (cockroaches, centipedes, etc.)</text>
            <text x="0" y="88" fill="#fca5a5" font-size="9">· No touching weasels, mice, lizards, chameleons and other creatures that creep on the ground</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="22" fill="#a7f3d0" font-size="11.5" font-weight="bold" text-anchor="middle">
          💡 Ezra's view: hygienic protection + a holy lesson of spiritual separation (聖別)
        </text>
        <text x="330" y="40" fill="#cbd5e1" font-size="9.5" text-anchor="middle">
          Unclean creatures are those that eat rot and carry toxins. God protected His people's health in the wilderness and taught them a set-apart life not stained by the world's evil.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "Ye shall therefore put difference between clean beasts and unclean, and between unclean fowls and clean... and have severed you from other people" (Lev 20:25~26)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🕊️ Leviticus Part 4: The Day of Atonement (Yom Kippur) and the great freedom of the 50-year Jubilee</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">Leviticus 16 &amp; 25: the peak of the gospel</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 7월 10일 대속죄일 (Yom Kippur) -->
        <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#be123c"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🩸 Day of Atonement (7th month, 10th day, Lev 16)
        </text>

        <g transform="translate(12, 34)">
          <text x="0" y="16" fill="#fda4af" font-size="10.5" font-weight="bold">1. Enters the Most Holy Place once a year (high priest only)</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· Sprinkles the bullock's blood on and before the mercy seat 7 times</text>
          <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· The day all the people's sins of the year are fully forgiven</text>

          <text x="0" y="74" fill="#fde047" font-size="10.5" font-weight="bold">2. Meaning of the two goats in redemptive history</text>
          <rect y="82" width="296" height="60" rx="4" fill="#1e293b" stroke="#e11d48"/>
          <text x="10" y="98" fill="#fca5a5" font-size="9" font-weight="bold">① The LORD's goat (sin offering):</text>
          <text x="10" y="112" fill="#fecaca" font-size="8">Its blood sprinkled on the mercy seat satisfies God's justice</text>
          <text x="10" y="128" fill="#fde047" font-size="9" font-weight="bold">② The scapegoat (Azazel) (released into wilderness):</text>
          <text x="10" y="139" fill="#fef08a" font-size="8">Hands laid on its head, it bears all sins into an uninhabited wilderness</text>

          <text x="0" y="164" fill="#a7f3d0" font-size="9.5" font-weight="bold">➔ A type of Christ casting our sins behind His back!</text>
        </g>

        <!-- 우측: 50년 희년 (The Year of Jubilee) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#b45309"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            🎺 The 50-year Jubilee (Lev 25)
          </text>

          <g transform="translate(12, 34)">
            <text x="0" y="16" fill="#fde68a" font-size="10.5" font-weight="bold">1. The 50th year, after 7 sabbatical years (of 7 years)</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· On the Day of Atonement, 7th month 10th day, a loud trumpet throughout the land</text>
            <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· "Proclaim liberty throughout all the land unto all the inhabitants thereof!"</text>

            <text x="0" y="74" fill="#a7f3d0" font-size="10.5" font-weight="bold">2. Three gospel proclamations of Jubilee</text>
            <rect y="82" width="296" height="75" rx="4" fill="#1e293b" stroke="#f59e0b"/>
            <text x="10" y="98" fill="#fde047" font-size="9" font-weight="bold">① Land returned to original owners (land belongs to all):</text>
            <text x="10" y="112" fill="#cbd5e1" font-size="8">"For the land is mine; for ye are strangers and sojourners" (Lev 25:23)</text>
            <text x="10" y="128" fill="#a7f3d0" font-size="9" font-weight="bold">② Slaves set free (freedom restored):</text>
            <text x="10" y="140" fill="#cbd5e1" font-size="8">Fellow Israelites sold for debt freed without condition</text>
            <text x="10" y="153" fill="#38bdf8" font-size="9" font-weight="bold">③ Debts cancelled &amp; full rest for the land</text>

            <text x="0" y="176" fill="#38bdf8" font-size="9.5" font-weight="bold">➔ Prevents a permanent rich-poor gap &amp; foreshadows God's kingdom</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="22" fill="#a7f3d0" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 Jesus' first sermon in Nazareth: proclaiming the true Jubilee (Luke 4:18~19)
        </text>
        <text x="330" y="40" fill="#ffffff" font-size="9.5" text-anchor="middle">
          "To preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, to preach the acceptable year of the Lord (Jubilee)"
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          Only after the blood of the Day of Atonement does the trumpet of Jubilee's great freedom ring out! (atonement on the cross ➔ true freedom)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">📊 Numbers Part 3: Comparison of the 1st (Sinai) vs. 2nd (plains of Moab) census</text>
      <text x="500" y="35" fill="#94a3b8" font-size="10.5">Numbers 1 &amp; 26: overview of 40 wilderness years</text>

      <g transform="translate(20, 56)">
        <!-- 상단 요약 배너 -->
        <rect width="660" height="42" rx="6" fill="#1e1b4b" stroke="#6366f1"/>
        <text x="30" y="26" fill="#93c5fd" font-size="11" font-weight="bold">
          1st census (2nd year of Exodus, Sinai): <span class="text-amber-300 font-black">603,550</span>
        </text>
        <text x="360" y="26" fill="#a7f3d0" font-size="11" font-weight="bold">
          2nd census (40th year of Exodus, Moab): <span class="text-emerald-400 font-black">601,730</span> (-1,820)
        </text>

        <!-- 12지파 비교 테이블 (6개 지파씩 2컬럼) -->
        <g transform="translate(0, 50)">
          <!-- 좌측 컬럼 (유다, 잇사갈, 스불론, 르우벤, 시므온, 갓) -->
          <rect width="325" height="215" rx="6" fill="#0f172a" stroke="#334155"/>
          <rect width="325" height="24" rx="6" fill="#1e293b"/>
          <text x="15" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">Tribe</text>
          <text x="100" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">1st (Sinai)</text>
          <text x="180" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">2nd (Moab)</text>
          <text x="260" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">Change</text>

          <g transform="translate(15, 30)">
            <!-- 유다 -->
            <text x="0" y="14" fill="#fde047" font-size="9.5" font-weight="bold">Judah (largest)</text>
            <text x="85" y="14" fill="#cbd5e1" font-size="9">74,600</text>
            <text x="165" y="14" fill="#cbd5e1" font-size="9">76,500</text>
            <text x="245" y="14" fill="#34d399" font-size="9" font-weight="bold">+1,900 ▲</text>

            <!-- 잇사갈 -->
            <text x="0" y="42" fill="#cbd5e1" font-size="9.5">Issachar</text>
            <text x="85" y="42" fill="#cbd5e1" font-size="9">54,400</text>
            <text x="165" y="42" fill="#cbd5e1" font-size="9">64,300</text>
            <text x="245" y="42" fill="#34d399" font-size="9" font-weight="bold">+9,900 ▲</text>

            <!-- 스불론 -->
            <text x="0" y="70" fill="#cbd5e1" font-size="9.5">Zebulun</text>
            <text x="85" y="70" fill="#cbd5e1" font-size="9">57,400</text>
            <text x="165" y="70" fill="#cbd5e1" font-size="9">60,500</text>
            <text x="245" y="70" fill="#34d399" font-size="9" font-weight="bold">+3,100 ▲</text>

            <!-- 르우벤 -->
            <text x="0" y="98" fill="#cbd5e1" font-size="9.5">Reuben</text>
            <text x="85" y="98" fill="#cbd5e1" font-size="9">46,500</text>
            <text x="165" y="98" fill="#cbd5e1" font-size="9">43,730</text>
            <text x="245" y="98" fill="#f87171" font-size="9">-2,770 ▼</text>

            <!-- 시므온 (극적인 감소 -37,100) -->
            <rect x="-8" y="112" width="310" height="24" rx="4" fill="#7f1d1d" opacity="0.3"/>
            <text x="0" y="128" fill="#f87171" font-size="9.5" font-weight="black">Simeon (sharp drop)</text>
            <text x="85" y="128" fill="#fca5a5" font-size="9">59,300</text>
            <text x="165" y="128" fill="#fca5a5" font-size="9">22,200</text>
            <text x="245" y="128" fill="#ef4444" font-size="9.5" font-weight="black">-37,100 ▼</text>

            <!-- 갓 -->
            <text x="0" y="156" fill="#cbd5e1" font-size="9.5">Gad</text>
            <text x="85" y="156" fill="#cbd5e1" font-size="9">45,650</text>
            <text x="165" y="156" fill="#cbd5e1" font-size="9">40,500</text>
            <text x="245" y="156" fill="#f87171" font-size="9">-5,150 ▼</text>
          </g>

          <!-- 우측 컬럼 (에브라임, 므낫세, 베냐민, 단, 아셀, 납달리) -->
          <g transform="translate(335, 0)">
            <rect width="325" height="215" rx="6" fill="#0f172a" stroke="#334155"/>
            <rect width="325" height="24" rx="6" fill="#1e293b"/>
            <text x="15" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">Tribe</text>
            <text x="100" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">1st (Sinai)</text>
            <text x="180" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">2nd (Moab)</text>
            <text x="260" y="16" fill="#94a3b8" font-size="9.5" font-weight="bold">Change</text>

            <g transform="translate(15, 30)">
              <!-- 에브라임 -->
              <text x="0" y="14" fill="#cbd5e1" font-size="9.5">Ephraim</text>
              <text x="85" y="14" fill="#cbd5e1" font-size="9">40,500</text>
              <text x="165" y="14" fill="#cbd5e1" font-size="9">32,500</text>
              <text x="245" y="14" fill="#f87171" font-size="9">-8,000 ▼</text>

              <!-- 므낫세 (최대 증가 +20,500) -->
              <rect x="-8" y="26" width="310" height="24" rx="4" fill="#065f46" opacity="0.3"/>
              <text x="0" y="42" fill="#6ee7b7" font-size="9.5" font-weight="black">Manasseh (biggest rise)</text>
              <text x="85" y="42" fill="#a7f3d0" font-size="9">32,200</text>
              <text x="165" y="42" fill="#a7f3d0" font-size="9">52,700</text>
              <text x="245" y="42" fill="#10b981" font-size="9.5" font-weight="black">+20,500 ▲</text>

              <!-- 베냐민 -->
              <text x="0" y="70" fill="#cbd5e1" font-size="9.5">Benjamin</text>
              <text x="85" y="70" fill="#cbd5e1" font-size="9">35,400</text>
              <text x="165" y="70" fill="#cbd5e1" font-size="9">45,600</text>
              <text x="245" y="70" fill="#34d399" font-size="9" font-weight="bold">+10,200 ▲</text>

              <!-- 단 -->
              <text x="0" y="98" fill="#cbd5e1" font-size="9.5">Dan</text>
              <text x="85" y="98" fill="#cbd5e1" font-size="9">62,700</text>
              <text x="165" y="98" fill="#cbd5e1" font-size="9">64,400</text>
              <text x="245" y="98" fill="#34d399" font-size="9" font-weight="bold">+1,700 ▲</text>

              <!-- 아셀 -->
              <text x="0" y="128" fill="#cbd5e1" font-size="9.5">Asher</text>
              <text x="85" y="128" fill="#cbd5e1" font-size="9">41,500</text>
              <text x="165" y="128" fill="#cbd5e1" font-size="9">53,400</text>
              <text x="245" y="128" fill="#34d399" font-size="9" font-weight="bold">+11,900 ▲</text>

              <!-- 납달리 -->
              <text x="0" y="156" fill="#cbd5e1" font-size="9.5">Naphtali</text>
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
          💡 Ezra's view: Why Simeon dropped sharply, and God's faithfulness
        </text>
        <text x="330" y="40" fill="#cbd5e1" font-size="9.5" text-anchor="middle">
          Zimri, a leader of the tribe of Simeon, committed immorality with a Midianite woman at Shittim and was killed by Phinehas's spear (Num 25). After this, the tribe of Simeon fell by 37,100.
        </text>
        <text x="330" y="54" fill="#a7f3d0" font-size="9.5" text-anchor="middle">
          The unbelieving first generation all died except Joshua and Caleb, but through the second generation God faithfully preserved the promised army of 600,000!
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "For the LORD had said of them, They shall surely die in the wilderness" (Num 26:65)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">🐍 Numbers Part 4: The bronze serpent on a pole and Balaam's star (Messiah) prophecy</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">Num 21:4~9 &amp; Num 24:17: the cross and the star</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 장대 위의 놋뱀 (민 21:4~9) -->
        <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
        <rect width="320" height="25" rx="8" fill="#991b1b"/>
        <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🐍 The bronze serpent on a pole and healing by faith (Num 21)
        </text>

        <g transform="translate(15, 34)">
          <text x="0" y="16" fill="#fca5a5" font-size="10.5" font-weight="bold">1. The people complain because of the way, and the fiery serpents judge them</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· "Wherefore have ye brought us up out of Egypt... there is no water, and our soul loatheth this light bread"</text>
          <text x="0" y="46" fill="#f87171" font-size="8.8">· Fiery serpents bit the people, and many died</text>

          <text x="0" y="72" fill="#fde047" font-size="10.5" font-weight="bold">2. God's cure: the bronze serpent on a pole</text>
          <rect y="80" width="290" height="65" rx="5" fill="#1e293b" stroke="#f59e0b"/>
          <text x="10" y="98" fill="#fed7aa" font-size="9" font-weight="bold">"Make thee a fiery serpent, and set it upon a pole"</text>
          <text x="10" y="114" fill="#ffffff" font-size="9.5" font-weight="black">"Every one that is bitten, when he looketh upon it, shall live!"</text>
          <text x="10" y="130" fill="#a7f3d0" font-size="8.5">➔ All who were dying of snakebite looked and lived (not works but faith!)</text>

          <text x="0" y="166" fill="#38bdf8" font-size="10" font-weight="bold">✝️ Fulfilled in the New Testament (John 3:14-15)</text>
          <text x="0" y="180" fill="#93c5fd" font-size="8.8">"As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: that whosoever believeth in him should... have eternal life"</text>
        </g>

        <!-- 우측: 발람의 별 예언 (민 24:17) -->
        <g transform="translate(340, 0)">
          <rect width="320" height="265" rx="8" fill="#0f172a" stroke="#818cf8" stroke-width="1.5"/>
          <rect width="320" height="25" rx="8" fill="#4338ca"/>
          <text x="160" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            ⭐ Balaam's star (Messiah) prophecy (Num 24)
          </text>

          <g transform="translate(15, 34)">
            <text x="0" y="16" fill="#c7d2fe" font-size="10.5" font-weight="bold">1. Moab's King Balak hires a curse, and the donkey rebukes</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· Balaam, a false prophet blinded by greed for money</text>
            <text x="0" y="46" fill="#cbd5e1" font-size="8.8">· God took control of his mouth, and instead he pronounced blessing 4 times!</text>

            <text x="0" y="72" fill="#fde047" font-size="10.5" font-weight="bold">2. A Star out of Jacob (Num 24:17)</text>
            <rect y="80" width="290" height="75" rx="5" fill="#1e293b" stroke="#fbbf24"/>
            <text x="10" y="98" fill="#fef08a" font-size="9" font-weight="bold">"I shall see him, but not now..."</text>
            <text x="10" y="114" fill="#fde047" font-size="10" font-weight="black">"There shall come a Star out of Jacob"</text>
            <text x="10" y="128" fill="#fde047" font-size="10" font-weight="black">"And a Sceptre shall rise out of Israel"</text>
            <text x="10" y="144" fill="#a7f3d0" font-size="8.5">Prophecy of the King of kings who will crush and rule His enemies</text>

            <text x="0" y="176" fill="#38bdf8" font-size="10" font-weight="bold">🌟 The wise men's testimony (Matthew 2:2)</text>
            <text x="0" y="190" fill="#93c5fd" font-size="8.8">"We have seen his star in the east, and are come to worship him"</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 In redemptive history: Christ turns the wilderness's despair into life and kingship
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          To people doomed to die for sin, God has them look at the bronze serpent lifted high on a pole (the cross), and gives victory through the Star of Jacob, the eternal Ruler (Jesus Christ).
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#fde047" font-size="9.5" text-anchor="middle">
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" (John 3:16)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">⛰️ Deuteronomy Part 3: Covenant renewal at Mount Gerizim (blessing) and Mount Ebal (curse)</text>
      <text x="500" y="35" fill="#94a3b8" font-size="11">Deuteronomy 27~28 &amp; Josh 8:30~35</text>

      <g transform="translate(20, 56)">
        <!-- 좌측: 그리심 산 (남쪽, 해발 881m - 축복 선포) -->
        <rect width="210" height="265" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
        <rect width="210" height="25" rx="8" fill="#047857"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          🌿 Mount Gerizim (blessings, 6 tribes)
        </text>

        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#a7f3d0" font-size="10" font-weight="bold">6 tribes standing on the mountain:</text>
          <text x="0" y="32" fill="#ffffff" font-size="9.5">· Simeon, Levi, Judah</text>
          <text x="0" y="48" fill="#ffffff" font-size="9.5">· Issachar, Joseph, Benjamin</text>
          <text x="0" y="64" fill="#a7f3d0" font-size="8.5">(sons of the wives Rachel and Leah)</text>

          <rect y="74" width="190" height="110" rx="5" fill="#0f172a" stroke="#10b981"/>
          <text x="8" y="90" fill="#fde047" font-size="9" font-weight="bold">Blessings for obedience (Deut 28:1~14):</text>
          <text x="8" y="106" fill="#cbd5e1" font-size="8.5">· Blessed in the city and blessed in the field</text>
          <text x="8" y="122" fill="#cbd5e1" font-size="8.5">· Blessed children, crops, cattle and flocks</text>
          <text x="8" y="138" fill="#cbd5e1" font-size="8.5">· Blessed coming in and blessed going out</text>
          <text x="8" y="154" fill="#cbd5e1" font-size="8.5">· The head and not the tail</text>
          <text x="8" y="170" fill="#34d399" font-size="8.5" font-weight="bold">· Enemies come one way, flee seven ways</text>
        </g>

        <!-- 중앙: 세겜 골짜기 (Shechem Valley - 언약궤와 제사장) -->
        <g transform="translate(225, 0)">
          <rect width="210" height="265" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#b45309"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            📜 Valley of Shechem (central gathering)
          </text>

          <g transform="translate(10, 34)">
            <text x="105" y="16" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Ark of the LORD's covenant</text>
            <text x="105" y="32" fill="#cbd5e1" font-size="9" text-anchor="middle">&amp; the priests·Levites</text>

            <rect y="44" width="190" height="145" rx="5" fill="#0f172a" stroke="#d97706"/>
            <text x="8" y="60" fill="#38bdf8" font-size="9" font-weight="bold">A grand scene of reading and response:</text>
            <text x="8" y="76" fill="#cbd5e1" font-size="8.5">· Priests stand beside the ark</text>
            <text x="8" y="92" fill="#cbd5e1" font-size="8.5">  and loudly proclaim every word of the law</text>
            <text x="8" y="112" fill="#fde047" font-size="9.5" font-weight="black">All the people: "Amen! Amen!"</text>
            <text x="8" y="128" fill="#cbd5e1" font-size="8.5">· People on the Gerizim side: Amen!</text>
            <text x="8" y="144" fill="#cbd5e1" font-size="8.5">· People on the Ebal side: Amen!</text>
            <text x="8" y="166" fill="#a7f3d0" font-size="8.5" font-weight="bold">Fully carried out in Josh 8 after crossing the Jordan!</text>
          </g>
        </g>

        <!-- 우측: 에발 산 (북쪽, 해발 940m - 저주 선포 & 돌제단) -->
        <g transform="translate(450, 0)">
          <rect width="210" height="265" rx="8" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            ⚡ Mount Ebal (curses, 6 tribes)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">6 tribes standing on the mountain:</text>
            <text x="0" y="32" fill="#ffffff" font-size="9.5">· Reuben, Gad, Asher</text>
            <text x="0" y="48" fill="#ffffff" font-size="9.5">· Zebulun, Dan, Naphtali</text>
            <text x="0" y="64" fill="#fca5a5" font-size="8.5">(sons of the maids, plus Reuben·Zebulun)</text>

            <rect y="74" width="190" height="110" rx="5" fill="#0f172a" stroke="#ef4444"/>
            <text x="8" y="90" fill="#f87171" font-size="9" font-weight="bold">Curses for disobedience (Deut 28:15~68):</text>
            <text x="8" y="106" fill="#fecaca" font-size="8.5">· Cursed in the city, cursed in the field</text>
            <text x="8" y="122" fill="#fecaca" font-size="8.5">· Disease, drought, pestilence, locusts</text>
            <text x="8" y="138" fill="#fecaca" font-size="8.5">· Defeated by enemies, flee seven ways</text>
            <text x="8" y="154" fill="#fecaca" font-size="8.5">· Scattered among all nations (foretells Exile)</text>
            <text x="8" y="170" fill="#fde047" font-size="8.5" font-weight="bold">★ Altar of stones untouched by iron tools</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          ⚡ A deep secret of the gospel: why was the stone altar built on Ebal, the mount of curse, not Gerizim, the mount of blessing?
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          Because people under the curse absolutely need the atoning blood of burnt offerings and peace offerings! Jesus Christ redeemed us from the curse of the law, being made a curse for us on the cross (Gal 3:13).
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#38bdf8" font-size="9.5" text-anchor="middle">
          "I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live" (Deut 30:19)
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
      <text x="35" y="35" fill="#fbbf24" font-size="13" font-weight="bold">🛡️ Joshua Part 3: Redemptive-history map of the 6 Cities of Refuge east and west of the Jordan</text>
      <text x="520" y="35" fill="#94a3b8" font-size="10.5">Josh 20:1~9: refuge for one who killed unawares</text>

      <g transform="translate(30, 56)">
        <!-- 중앙 요단강 물줄기 그래픽 -->
        <g transform="translate(310, 0)">
          <!-- 갈릴리 호수 -->
          <ellipse cx="15" cy="40" rx="20" ry="14" fill="#0284c7" opacity="0.8"/>
          <text x="45" y="44" fill="#38bdf8" font-size="9" font-weight="bold">Sea of Galilee</text>

          <!-- 요단강 -->
          <path d="M 15,54 Q 5,120 15,180 T 15,240" fill="none" stroke="#0284c7" stroke-width="4"/>
          <text x="25" y="145" fill="#0284c7" font-size="8.5" font-weight="bold">Jordan River</text>

          <!-- 사해 -->
          <ellipse cx="15" cy="270" rx="22" ry="32" fill="#0369a1" opacity="0.8"/>
          <text x="45" y="275" fill="#38bdf8" font-size="9" font-weight="bold">Salt Sea (Dead Sea)</text>
        </g>

        <!-- 요단 서편 3대 도피성 (가나안 본토) -->
        <g transform="translate(10, 10)">
          <rect width="270" height="280" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
          <rect width="270" height="24" rx="8" fill="#1d4ed8"/>
          <text x="135" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            3 cities of refuge west of the Jordan (west Canaan)
          </text>

          <g transform="translate(12, 34)">
            <!-- 1. 게데스 -->
            <rect width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="18" fill="#fde047" font-size="11" font-weight="black">1. Kedesh — north</text>
            <text x="10" y="34" fill="#93c5fd" font-size="9">Location: hills of Naphtali, Galilee</text>
            <text x="10" y="48" fill="#cbd5e1" font-size="8.5">Meaning: 'Holy Place'</text>
            <text x="10" y="60" fill="#a7f3d0" font-size="8">➔ Fleeing into the arms of the holy Jesus Christ</text>

            <!-- 2. 세겜 -->
            <rect y="74" width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="92" fill="#fde047" font-size="11" font-weight="black">2. Shechem — central</text>
            <text x="10" y="108" fill="#93c5fd" font-size="9">Location: hills of Ephraim (between Gerizim·Ebal)</text>
            <text x="10" y="122" fill="#cbd5e1" font-size="8.5">Meaning: 'Shoulder, bearing a burden'</text>
            <text x="10" y="134" fill="#a7f3d0" font-size="8">➔ The Lord who carried all our heavy sins for us</text>

            <!-- 3. 헤브론 -->
            <rect y="148" width="246" height="65" rx="5" fill="#1e293b" stroke="#60a5fa"/>
            <text x="10" y="166" fill="#fde047" font-size="11" font-weight="black">3. Hebron — south</text>
            <text x="10" y="182" fill="#93c5fd" font-size="9">Location: hills of Judah (Kiriath Arba)</text>
            <text x="10" y="196" fill="#cbd5e1" font-size="8.5">Meaning: 'Union, close Fellowship'</text>
            <text x="10" y="208" fill="#a7f3d0" font-size="8">➔ Enjoying eternal peace and fellowship with God</text>
          </g>
        </g>

        <!-- 요단 동편 3대 도피성 (길르앗 & 바산) -->
        <g transform="translate(365, 10)">
          <rect width="275" height="280" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <rect width="275" height="24" rx="8" fill="#047857"/>
          <text x="137" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            3 cities of refuge east of the Jordan (Transjordan)
          </text>

          <g transform="translate(12, 34)">
            <!-- 4. 골란 -->
            <rect width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="18" fill="#fde047" font-size="11" font-weight="black">4. Golan — northeast</text>
            <text x="10" y="34" fill="#a7f3d0" font-size="9">Location: Bashan plain, half-tribe of Manasseh</text>
            <text x="10" y="48" fill="#cbd5e1" font-size="8.5">Meaning: 'Joy, refuge from exile'</text>
            <text x="10" y="60" fill="#a7f3d0" font-size="8">➔ The true joy of salvation that the saved enjoy</text>

            <!-- 5. 길르앗 라못 -->
            <rect y="74" width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="92" fill="#fde047" font-size="11" font-weight="black">5. Ramoth Gilead — mid-east</text>
            <text x="10" y="108" fill="#a7f3d0" font-size="9">Location: hills of Gilead, tribe of Gad</text>
            <text x="10" y="122" fill="#cbd5e1" font-size="8.5">Meaning: 'High Places, victory'</text>
            <text x="10" y="134" fill="#a7f3d0" font-size="8">➔ The highest refuge, out of the enemy's reach</text>

            <!-- 6. 베셀 -->
            <rect y="148" width="250" height="65" rx="5" fill="#1e293b" stroke="#34d399"/>
            <text x="10" y="166" fill="#fde047" font-size="11" font-weight="black">6. Bezer — southeast</text>
            <text x="10" y="182" fill="#a7f3d0" font-size="9">Location: wilderness plateau, tribe of Reuben</text>
            <text x="10" y="196" fill="#cbd5e1" font-size="8.5">Meaning: 'Fortress, safe stronghold'</text>
            <text x="10" y="208" fill="#a7f3d0" font-size="8">➔ God, our eternal rock and fortress in the day of trouble</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 348)">
        <rect width="660" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="20" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">
          ✝️ The final condition for release from a city of refuge: "Stay in the city of refuge until the death of the high priest" (Josh 20:6)
        </text>
        <text x="330" y="38" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          Back then, when the high priest died, the killer could go home a fully free man. By the death on the cross of Jesus, our eternal High Priest, mankind has been set free forever from the penalty of sin!
        </text>
      </g>

      <g transform="translate(20, 404)">
        <rect width="660" height="26" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="17" fill="#93c5fd" font-size="9" text-anchor="middle">
          God's unconditional, compassionate care: roads leveled so that anyone could run to one within half a day (30 km) from anywhere!
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">✝️ Four Gospels Part 3: The seven sayings from the cross at Golgotha (架上七言) and the victory of the resurrection</text>
      <text x="510" y="35" fill="#94a3b8" font-size="11">The perfect completion of mankind's atonement (Tetelestai)</text>

      <g transform="translate(20, 56)">
        <!-- 1~3언: 이웃과 타인을 향한 말씀 -->
        <g transform="translate(0, 0)">
          <rect width="320" height="150" rx="8" fill="#0f172a" stroke="#e11d48"/>
          <rect width="320" height="24" rx="8" fill="#9f1239"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">
            🕊️ First half: forgiveness, salvation and love (sayings 1~3)
          </text>

          <g transform="translate(10, 32)">
            <!-- 제1언 -->
            <rect width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="15" fill="#fda4af" font-size="9.5" font-weight="bold">1st saying [forgiveness]: "Father, forgive them"</text>
            <text x="10" y="28" fill="#fecdd3" font-size="8.5">"For they know not what they do" (Luke 23:34, high-priestly intercession)</text>

            <!-- 제2언 -->
            <rect y="40" width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="55" fill="#fde047" font-size="9.5" font-weight="bold">2nd saying [salvation]: "Today shalt thou be with me in paradise"</text>
            <text x="10" y="68" fill="#fef08a" font-size="8.5">Immediate assurance of eternal life in heaven to the repentant thief on the right (Luke 23:43)</text>

            <!-- 제3언 -->
            <rect y="80" width="300" height="36" rx="4" fill="#1e293b" stroke="#f43f5e"/>
            <text x="10" y="95" fill="#fda4af" font-size="9.5" font-weight="bold">3rd saying [love]: "Woman, behold thy son... Behold thy mother"</text>
            <text x="10" y="108" fill="#fecdd3" font-size="8.5">Entrusts His earthly mother Mary to John, the beloved disciple (John 19:26-27)</text>
          </g>
        </g>

        <!-- 4~7언: 하나님 아버지와 구속 사역 완성 -->
        <g transform="translate(340, 0)">
          <rect width="320" height="150" rx="8" fill="#0f172a" stroke="#3b82f6"/>
          <rect width="320" height="24" rx="8" fill="#1d4ed8"/>
          <text x="160" y="17" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">
            👑 Second half: anguish·thirst·victory·entrusting (sayings 4~7)
          </text>

          <g transform="translate(10, 32)">
            <!-- 제4언 -->
            <rect width="300" height="26" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="14" fill="#93c5fd" font-size="9" font-weight="bold">4th saying [anguish]: "Eli, Eli, lama sabachthani"</text>
            <text x="8" y="24" fill="#bfdbfe" font-size="7.8">"My God, my God, why hast thou forsaken me?" (Ps 22:1, forsaken to atone)</text>

            <!-- 제5언 -->
            <rect y="29" width="300" height="26" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="42" fill="#93c5fd" font-size="9" font-weight="bold">5th saying [thirst]: "I thirst" (John 19:28)</text>
            <text x="8" y="52" fill="#bfdbfe" font-size="7.8">True man who bore mankind's thirst for us, and fulfilled the Scripture</text>

            <!-- 제6언 -->
            <rect y="58" width="300" height="28" rx="3" fill="#064e3b" stroke="#34d399"/>
            <text x="8" y="72" fill="#a7f3d0" font-size="9.5" font-weight="black">6th saying [victory]: "It is finished! (Tetelestai!)" (John 19:30)</text>
            <text x="8" y="82" fill="#d1fae5" font-size="8">Paid in full the price of every sin and fulfilled the covenant of redemption!</text>

            <!-- 제7언 -->
            <rect y="89" width="300" height="28" rx="3" fill="#1e293b" stroke="#60a5fa"/>
            <text x="8" y="103" fill="#fde047" font-size="9.5" font-weight="bold">7th saying [entrusting]: "Father, into thy hands I commend my spirit"</text>
            <text x="8" y="113" fill="#fef08a" font-size="8">As He breathed His last, the temple veil was torn from top to bottom (Luke 23:46)</text>
          </g>
        </g>

        <!-- 하단: 빈 무덤과 부활의 영광 파노라마 -->
        <g transform="translate(0, 158)">
          <rect width="660" height="165" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
          <rect width="660" height="26" rx="8" fill="#047857"/>
          <text x="330" y="18" fill="#ffffff" font-size="12" font-weight="black" text-anchor="middle">
            🌟 Death's power broken on the third day and the victory of resurrection (The Glorious Resurrection!)
          </text>

          <g transform="translate(15, 34)">
            <text x="0" y="16" fill="#a7f3d0" font-size="10.5" font-weight="bold">🕊️ "He is not here, but is risen!" (Luke 24:6)</text>
            <text x="0" y="32" fill="#ffffff" font-size="9.5">
              · The great stone rolled away &amp; the linen cloths and napkin folded (not theft but clear historical evidence of the resurrection)
            </text>
            <text x="0" y="48" fill="#cbd5e1" font-size="9">
              · Appeared to Mary Magdalene ➔ two disciples at Emmaus ➔ the eleven apostles ➔ over 500 brethren at once (1 Cor 15, the resurrection chapter)
            </text>

            <!-- 복음서 결론 대사명 배너 -->
            <rect y="60" width="630" height="65" rx="6" fill="#0f172a" stroke="#f59e0b"/>
            <text x="315" y="78" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">
              👑 The risen Lord's Great Commission (Matt 28:18~20)
            </text>
            <text x="315" y="96" fill="#ffffff" font-size="9.5" text-anchor="middle">
              "All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations..."
            </text>
            <text x="315" y="112" fill="#38bdf8" font-size="10" font-weight="black" text-anchor="middle">
              "And, lo, I am with you alway, even unto the end of the world"
            </text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 395)">
        <rect width="660" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
        <text x="330" y="22" fill="#fde047" font-size="10" text-anchor="middle">
          The four Gospels do not end with the death on the cross; they reach their climax in the glory of the resurrection and the promise of His return!
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
      <text x="35" y="35" fill="#fbbf24" font-size="13.5" font-weight="bold">👑 Revelation Part 3: The Millennium and the final judgment of the great white throne</text>
      <text x="520" y="35" fill="#94a3b8" font-size="11">Revelation 20: the grand finale of the end</text>

      <g transform="translate(20, 56)">
        <!-- 1. 천년왕국 (성도들의 첫째 부활 & 통치) -->
        <rect width="210" height="265" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect width="210" height="25" rx="8" fill="#1d4ed8"/>
        <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
          1. The Millennium (Rev 20:1~6)
        </text>

        <g transform="translate(10, 34)">
          <text x="0" y="16" fill="#93c5fd" font-size="10" font-weight="bold">⛓️ Satan bound for 1,000 years</text>
          <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· An angel with the key of the bottomless pit binds the dragon (that old serpent, the Devil, Satan), casts him in and shuts it</text>
          <text x="0" y="58" fill="#fde047" font-size="10" font-weight="bold">👑 The first resurrection and the reign of the saints</text>
          <text x="0" y="74" fill="#cbd5e1" font-size="8.8">· Resurrection of martyrs beheaded for the witness of Jesus and the word</text>
          <text x="0" y="98" fill="#a7f3d0" font-size="9" font-weight="bold">"Blessed and holy is he that hath part in the first resurrection"</text>
          <text x="0" y="122" fill="#cbd5e1" font-size="8.8">· The second death has no power over them; they reign with Christ 1,000 years!</text>
        </g>

        <!-- 2. 곡과 마곡 최후 반역 & 사탄 멸망 -->
        <g transform="translate(225, 0)">
          <rect width="210" height="265" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#991b1b"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            2. Gog and Magog &amp; the lake of fire (Rev 20:7~10)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fca5a5" font-size="10" font-weight="bold">🌪️ Satan loosed for a little season</text>
            <text x="0" y="32" fill="#fecaca" font-size="8.8">· When the 1,000 years are over, Satan is loosed and deceives the nations in the four corners of the earth, Gog and Magog</text>
            <text x="0" y="58" fill="#f87171" font-size="10" font-weight="bold">⚔️ The camp of the saints surrounded &amp; judgment by fire</text>
            <text x="0" y="74" fill="#fecaca" font-size="8.8">· Enemies as many as the sand of the sea surround the camp of the saints and the beloved city</text>
            <text x="0" y="98" fill="#ffffff" font-size="9.5" font-weight="black">Fire comes down from heaven and devours them!</text>
            <text x="0" y="124" fill="#fde047" font-size="10" font-weight="bold">🔥 The devil's eternal destruction</text>
            <text x="0" y="140" fill="#fef08a" font-size="8.8">· Cast into the lake of fire and brimstone with the beast and the false prophet, tormented day and night for ever and ever</text>
          </g>
        </g>

        <!-- 3. 크고 흰 보좌(백보좌) 심판 -->
        <g transform="translate(450, 0)">
          <rect width="210" height="265" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <rect width="210" height="25" rx="8" fill="#b45309"/>
          <text x="105" y="17" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">
            3. The white throne judgment (Rev 20:11~15)
          </text>

          <g transform="translate(10, 34)">
            <text x="0" y="16" fill="#fde68a" font-size="10" font-weight="bold">⚖️ The Great White Throne</text>
            <text x="0" y="32" fill="#cbd5e1" font-size="8.8">· The earth and the heaven fled away, and there was found no place for them</text>
            <text x="0" y="48" fill="#cbd5e1" font-size="8.8">· The dead, small and great, stand before the throne</text>
            <text x="0" y="74" fill="#38bdf8" font-size="10" font-weight="bold">📖 Two kinds of books</text>
            <text x="0" y="90" fill="#cbd5e1" font-size="8.8">· Books of deeds: judged by what is written, according to their works</text>
            <text x="0" y="106" fill="#fde047" font-size="9" font-weight="black">· The Book of Life</text>
            <text x="0" y="128" fill="#f87171" font-size="10" font-weight="bold">⚰️ The second death (lake of fire)</text>
            <text x="0" y="144" fill="#fca5a5" font-size="8.5">· Death and hell are also cast into the lake of fire</text>
            <text x="0" y="160" fill="#ffffff" font-size="8.5" font-weight="bold">"Whosoever was not found written in the book of life was cast into the lake of fire"</text>
          </g>
        </g>
      </g>

      <g transform="translate(20, 335)">
        <rect width="660" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="330" y="22" fill="#fbbf24" font-size="11.5" font-weight="bold" text-anchor="middle">
          👑 The complete end of sin and death ➔ the holy city, New Jerusalem (Rev 21~22)
        </text>
        <text x="330" y="40" fill="#e2e8f0" font-size="9.5" text-anchor="middle">
          The old heaven and earth pass away; God wipes away every tear from the saints' eyes, and the completed new creation arrives, with eternal joy and the river of the water of life.
        </text>
      </g>

      <g transform="translate(20, 400)">
        <rect width="660" height="30" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="330" y="19" fill="#38bdf8" font-size="9.5" text-anchor="middle">
          "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus!" (Rev 22:20)
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
  if (bookId === 1 || bookName === "Genesis") {
    return [
      {
        id: "gen_1",
        label: "1. Patriarchs' Journey Map",
        title: "Genesis Part 1: Map of the patriarchs' route from Mesopotamia ~ Canaan ~ Egypt",
        desc: "Geographic route: Ur of the Chaldees (start) ➔ Haran (Terah dies) ➔ Shechem (first altar) ➔ Bethel (tent) ➔ Hebron (cave of Machpelah) ➔ Beersheba (tamarisk) ➔ Goshen in Egypt (Joseph).",
        render: () => renderPatriarchsFullMapSvg()
      },
      {
        id: "gen_2",
        label: "2. Eden's 4 Rivers & Ararat Map",
        title: "Genesis Part 2: Map of the four rivers of Eden (Euphrates·Tigris) and Mount Ararat, where Noah's ark rested",
        desc: "Geographic map of Eden's four rivers (Pishon, Gihon, Hiddekel, Euphrates), Mount Ararat (5,137 m) where Noah's ark rested, and the plain of Shinar of the Tower of Babel.",
        render: () => renderGenesisPrimevalMapSvg()
      },
      {
        id: "gen_3",
        label: "3. Canaan Bases Detail Map",
        title: "Genesis Part 3: Detailed map of Abraham's and Jacob's bases in Canaan",
        desc: "Detailed geography: the oak of Moreh at Shechem, the altar between Bethel and Ai, Salem (Jerusalem), the oaks of Mamre at Hebron, the seven wells of Beersheba, and the ford of Jabbok.",
        render: () => renderGenesisCanaanDetailedMapSvg()
      },
      {
        id: "gen_4",
        label: "4. Order of the 6 Days of Creation",
        title: "Genesis Part 4: The holy order of the six days of creation and rest (Creation Order)",
        desc: "The perfect pairing of Days 1~3 (frame/realms made) and Days 4~6 (space/filled with creatures), and the blessing of rest on Day 7 (Gen 1:1 ~ 2:3).",
        render: () => renderGenesisCreationSixDaysSvg()
      },
      {
        id: "gen_5",
        label: "5. The Fall & First Gospel (Gen 3:15)",
        title: "Genesis Part 5: The fall of mankind and the seed of the woman (the first gospel, Protoevangelium)",
        desc: "Disobedience over the forbidden fruit and the origin of sin, the sentence of righteous judgment, and the first gospel of atonement through the seed of the woman (Gen 3:15) and garments of skin.",
        render: () => renderGenesisFallProtoevangeliumSvg()
      },
      {
        id: "gen_6",
        label: "6. 12 Tribes Tree & Messiah's Line",
        title: "Genesis Part 6: Family tree of Abraham, father of faith, and the 12 tribes of Israel",
        desc: "Abraham ➔ Isaac ➔ Jacob's 4 wives (Leah, Rachel, Bilhah, Zilpah) and 12 sons, and the royal line of the Messiah through the 4th son, Judah.",
        render: () => renderPatriarchsFamilyTreeSvg()
      }
    ];
  }

  // 2. 출애굽기 (총 5장: 3장 시내산/성막 + 대제사장 의복 + 십계명 돌판)
  if (bookId === 2 || bookName === "Exodus") {
    return [
      {
        id: "exo_1",
        label: "1. Exodus & Red Sea Map",
        title: "Exodus Part 1: Map of the 10 plagues of the Exodus and the crossing of the Red Sea",
        desc: "From Rameses ➔ Succoth ➔ Pi-hahiroth (miraculous crossing of the Red Sea) ➔ wilderness of Shur ➔ Marah (bitter water) ➔ Elim (70 palm trees) ➔ Rephidim (water from the rock) ➔ arrival at Mount Sinai.",
        render: () => renderExodusAndTabernacleSvg()
      },
      {
        id: "exo_2",
        label: "2. Sinai Tabernacle 3D Plan",
        title: "Exodus Part 2: Layout of the Sinai Tabernacle: 3-part structure & 6 sacred furnishings",
        desc: "Tabernacle court (altar of burnt offering, laver) ➔ Holy Place (pure gold lampstand, table of showbread, altar of incense) ➔ Most Holy Place (mercy seat, the Ten Commandments tablets in the ark, Aaron's rod that budded, the jar of manna).",
        render: () => renderTabernacleDetailSvg()
      },
      {
        id: "exo_3",
        label: "3. High Priest's Garments & 12 Stones",
        title: "Exodus Part 3: The high priest's holy garments and the breastplate of judgment (Exod 28)",
        desc: "The pure gold plate \"Holiness to the LORD,\" the shoulder pieces bearing the 12 tribes' names, the breastplate of judgment with 12 stones and the Urim·Thummim on the chest, and a type of Jesus Christ's high priesthood.",
        render: () => renderHighPriestGarmentsSvg()
      },
      {
        id: "exo_4",
        label: "4. Ten Commandments Tablets Chart",
        title: "Exodus Part 4: Structure of the two stone tablets of the Ten Commandments",
        desc: "Commandments 1~4 toward God (對神, loving God) and 5~10 toward people (對人, loving neighbor), and Jesus' summary of the great commandments (Matt 22).",
        render: () => renderTenCommandmentsSvg()
      },
      {
        id: "exo_5",
        label: "5. Exodus Structure Roadmap",
        title: "Exodus Part 5: Redemptive-history structure of the whole Exodus and the Sinai covenant",
        desc: "A panorama of the grief of slavery and God's salvation, the Sinai covenant and the law of the Ten Commandments, and the dedication of the tabernacle filled with God's glory.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 3. 레위기 (총 4장: 5대 제사 + 7대 절기 + 레위기 11장 식생활 + 대속죄일·희년)
  if (bookId === 3 || bookName === "Leviticus") {
    return [
      {
        id: "lev_1",
        label: "1. Chart of the 5 Offerings",
        title: "Leviticus Part 1: Infographic of the 5 offerings of the Sinai tabernacle (burnt, grain, peace, sin, guilt)",
        desc: "Overview of the 5 offerings for drawing near to the holy God: sacrifices, procedures, and their meaning in Christ's atonement on the cross.",
        render: () => renderLeviticusSvg()
      },
      {
        id: "lev_2",
        label: "2. Redemptive Map of 7 Feasts",
        title: "Leviticus Part 2: Redemptive-history calendar of Israel's 7 feasts",
        desc: "Spring feasts fulfilled at the first coming (Passover, Unleavened Bread, Firstfruits, Weeks/Pentecost) and autumn feasts foreshadowing completion at the Second Coming (Trumpets, Day of Atonement, Tabernacles).",
        render: () => renderSevenFeastsSvg()
      },
      {
        id: "lev_3",
        label: "3. Clean Food & Holiness Rules",
        title: "Leviticus Part 3: Clean and unclean food (holiness rules of Leviticus 11)",
        desc: "Standards of cleanness for land animals (split hoof + chews cud), water creatures (fins + scales), birds and insects, and the believer's calling to be set apart from the world.",
        render: () => renderLeviticusDietaryLawsSvg()
      },
      {
        id: "lev_4",
        label: "4. Day of Atonement & Jubilee",
        title: "Leviticus Part 4: The Day of Atonement (Yom Kippur) and the great freedom of the 50-year Jubilee",
        desc: "Blood sprinkled in the Most Holy Place and the scapegoat; Jubilee's return of land, freeing of slaves and cancelling of debts; and Jesus' gospel of true liberation.",
        render: () => renderDayOfAtonementJubileeSvg()
      }
    ];
  }

  // 4. 민수기 (총 4장: 진영도 + 40년 여정 + 인구조사 비교 + 놋뱀과 별)
  if (bookId === 4 || bookName === "Numbers") {
    return [
      {
        id: "num_1",
        label: "1. 12 Tribes Camp Layout",
        title: "Numbers Part 1: Layout of the 12 tribes' camps around the tabernacle (east, west, south, north) & order of march",
        desc: "East (Judah·Issachar·Zebulun), south (Reuben·Simeon·Gad), west (Ephraim·Manasseh·Benjamin), north (Dan·Asher·Naphtali), and the tribe of Levi.",
        render: () => renderWildernessCampSvg()
      },
      {
        id: "num_2",
        label: "2. 40-Year Wilderness Route",
        title: "Numbers Part 2: Map of Israel's 40-year wilderness testing and actual route",
        desc: "Map: Mount Sinai ➔ Kibroth-hattaavah ➔ Hazeroth ➔ Kadesh Barnea, the 12 spies' unbelief ➔ 38-year wandering loop ➔ Mount Hor ➔ Punon, saved by the bronze serpent ➔ arrival at the plains of Moab.",
        render: () => renderNumbersWildernessRouteMapSvg()
      },
      {
        id: "num_3",
        label: "3. 1st & 2nd Census Compared",
        title: "Numbers Part 3: Comparison of the 1st (Sinai) vs. 2nd (plains of Moab) census",
        desc: "Lessons in redemptive history: an army of 600,000 preserved, the tribe of Manasseh's big rise (+20,500) vs. the tribe of Simeon's sharp drop (-37,100) after the sin at Baal-peor.",
        render: () => renderNumbersCensusComparisonSvg()
      },
      {
        id: "num_4",
        label: "4. Bronze Serpent & Balaam's Star",
        title: "Numbers Part 4: The bronze serpent on a pole and Balaam's star (Messiah) prophecy",
        desc: "The bronze serpent on a pole, and all who looked lived (type of the cross, John 3:14); and a Star out of Jacob (Num 24:17, the King of kings).",
        render: () => renderBalaamStarBronzeSerpentSvg()
      }
    ];
  }

  // 5. 신명기 (총 3장: 쉐마 + 느보산 조망 + 그리심/에발산 언약 갱신)
  if (bookId === 5 || bookName === "Deuteronomy") {
    return [
      {
        id: "deu_1",
        label: "1. Moab Covenant & Shema",
        title: "Deuteronomy Part 1: The covenant on the plains of Moab and Shema Israel education",
        desc: "The view from Mount Nebo and Moses' 3 farewell sermons; teaching the Shema faith: love the LORD with all your heart, soul and might.",
        render: () => renderDeuteronomySvg()
      },
      {
        id: "deu_2",
        label: "2. View of Canaan from Nebo",
        title: "Deuteronomy Part 2: Map of the Promised Land as seen from Pisgah on Mount Nebo",
        desc: "Moses' last look: on-site map of Deuteronomy 34, taking in Jericho the city of palm trees, Gilead, Dan, Naphtali, Ephraim, all the way to the western sea, the Mediterranean.",
        render: () => renderDeuteronomyNeboMapSvg()
      },
      {
        id: "deu_3",
        label: "3. Gerizim·Ebal Covenant Renewal",
        title: "Deuteronomy Part 3: Covenant renewal at Mount Gerizim (blessing) and Mount Ebal (curse)",
        desc: "The 12 tribes' reading and \"Amen\" response before the valley of Shechem, the stone altar built on Ebal, the mount of curse, and the atoning grace of burnt and peace offerings.",
        render: () => renderGerizimEbalBlessingCurseSvg()
      }
    ];
  }

  // 6. 여호수아 (총 3장: 정복 작전도 + 12지파 분배도 + 6대 도피성 지도)
  if (bookId === 6 || bookName === "Joshua") {
    return [
      {
        id: "jos_1",
        label: "1. Conquest of Canaan Battle Map",
        title: "Joshua Part 1: Map of the 3 campaigns of the conquest of Canaan (central, south, north)",
        desc: "Crossing the Jordan ➔ camp at Gilgal ➔ central (Jericho·Ai) ➔ south (sun stands still at Gibeon, allied army defeated) ➔ north (Hazor's allied army wiped out at the waters of Merom).",
        render: () => renderJoshuaConquestSvg()
      },
      {
        id: "jos_2",
        label: "2. 12 Tribes' Land in Canaan",
        title: "Joshua Part 2: Map of the 12 tribes' allotments in Canaan, centered on the tabernacle at Shiloh",
        desc: "Land allotted west of the Jordan (Judah, Ephraim, West Manasseh, etc.) and east (Reuben, Gad, East Manasseh), and the tent of meeting set up at Shiloh.",
        render: () => renderTwelveTribesAllotmentSvg()
      },
      {
        id: "jos_3",
        label: "3. 6 Cities of Refuge Map",
        title: "Joshua Part 3: Redemptive-history map of the 6 Cities of Refuge east and west of the Jordan",
        desc: "The 6 cities of refuge, west (Kedesh, Shechem, Hebron) & east (Golan, Ramoth Gilead, Bezer), and the complete freedom gained through the high priest's death.",
        render: () => renderSixCitiesOfRefugeSvg()
      }
    ];
  }

  // 7. 사사기 (총 2장 모두 지도)
  if (bookId === 7 || bookName === "Judges") {
    return [
      {
        id: "jdg_1",
        label: "1. 7-Fold Cycle & Judges' Bases",
        title: "Judges Part 1: The 7-fold spiritual vicious cycle & the judges' bases of activity",
        desc: "The cycle of sin ➔ servitude ➔ supplication ➔ salvation ➔ peace, and the bases of Othniel, Ehud, Deborah, Gideon, Jephthah and Samson.",
        render: () => renderJudgesCycleSvg()
      },
      {
        id: "jdg_2",
        label: "2. 12 Judges' Battlefields Map",
        title: "Judges Part 2: Map of the bases and battlefields of Israel's 12 main judges",
        desc: "On-site map of Deborah (Mt Tabor & Kishon, iron chariots defeated), Gideon (Ophrah & spring of Harod, 300 men), Samson (Zorah, Timnah, Gaza), Ehud (Jericho) and others.",
        render: () => renderJudgesLocationsMapSvg()
      }
    ];
  }

  // 8. 룻기 (총 2장)
  if (bookId === 8 || bookName === "Ruth") {
    return [
      {
        id: "rut_1",
        label: "1. Moab~Bethlehem Journey Map",
        title: "Ruth Part 1: Map of the journey back from Moab to Boaz's field in Bethlehem",
        desc: "Naomi and Ruth return to Bethlehem from Moab, where they had gone to escape famine, and the gracious meeting in the barley harvest field.",
        render: () => renderRuthSvg()
      },
      {
        id: "rut_2",
        label: "2. Goel & Redemptive Line",
        title: "Ruth Part 2: The kinsman-redeemer (goel) system and the redemptive line of David·Christ",
        desc: "Boaz and Ruth ➔ Obed ➔ Jesse ➔ King David ➔ the birth of Jesus Christ: the grace of God who embraced a Gentile woman.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 9. 사무엘상 / 사무엘하 (총 2장 모두 지도)
  if (bookId === 9 || bookId === 10 || bookName.includes("Samuel")) {
    return [
      {
        id: "sam_1",
        label: "1. David's 10-Year Flight Map",
        title: "1 Samuel: Geographic map of David's 10-year flight route in exile",
        desc: "A journey of refining: Gibeah ➔ Nob ➔ Gath ➔ cave of Adullam ➔ Mizpeh of Moab ➔ Keilah ➔ wilderness of Ziph ➔ stronghold of En-gedi ➔ Ziklag.",
        render: () => renderDavidSvg()
      },
      {
        id: "sam_2",
        label: "2. David's United Kingdom Map",
        title: "2 Samuel: Map of the greatest extent of David's united kingdom of Israel and the stronghold of Zion",
        desc: "The largest territory, from the Euphrates through Damascus and Canaan to the brook of Egypt, the capture of the stronghold of Zion in Jerusalem as capital & the Davidic covenant.",
        render: () => renderDavidKingdomMapSvg()
      }
    ];
  }

  // 10. 열왕기상/하, 역대상/하 (총 3장: 분열왕국 + 솔로몬 성전 + 왕조·선지자 연대표)
  if (bookId >= 11 && bookId <= 14) {
    return [
      {
        id: "kgs_1",
        label: "1. Divided Kingdom & Mt Carmel",
        title: "Kings Part 1: Map of the divided kingdom, northern Israel vs. southern Judah & the spiritual showdown on Mount Carmel",
        desc: "The split after Solomon's death: northern Israel (Samaria, golden calf altars at Dan·Bethel, Elijah's Mount Carmel) vs. southern Judah (Jerusalem temple, David's dynasty).",
        render: () => renderDividedKingdomSvg()
      },
      {
        id: "kgs_2",
        label: "2. Solomon's Temple in 3D",
        title: "Kings Part 2: 3D structure of Solomon's Temple in Jerusalem",
        desc: "Detailed structure of Solomon's Temple built on Mount Moriah: inner sanctuary (Most Holy Place), outer sanctuary (Holy Place), porch, the bronze pillars Jachin and Boaz, and the Bronze Sea.",
        render: () => renderSolomonTempleSvg()
      },
      {
        id: "kgs_3",
        label: "3. Kings & Prophets Timeline",
        title: "Kings Part 3: Timeline matrix of the 39 kings of the divided kingdom & the main prophets",
        desc: "Overview of northern Israel's 19 kings (all evil) and southern Judah's 20 kings, with contemporary prophets such as Elijah, Elisha, Isaiah and Jeremiah.",
        render: () => renderKingsProphetsTimelineSvg()
      }
    ];
  }

  // 11. 에스라 / 느헤미야 / 에스더 (총 2장 모두 지도)
  if (bookId >= 15 && bookId <= 17) {
    return [
      {
        id: "ezr_1",
        label: "1. Return from Babylonian Exile Map",
        title: "Ezra·Nehemiah: Map of the 70-year Babylonian Exile and the 3 Return routes",
        desc: "Return routes from the place of Exile in Babylon ➔ the Persian palace at Shushan ➔ 1st Zerubbabel (temple rebuilt), 2nd Ezra (revival of the law), 3rd Nehemiah (walls completed).",
        render: () => renderExileAndWallSvg()
      },
      {
        id: "ezr_2",
        label: "2. Jerusalem Walls & 10 Gates",
        title: "Layout of Nehemiah's 52-day rebuilding of Jerusalem's walls & 10 gates",
        desc: "Jerusalem wall map: Sheep Gate, Fish Gate, Old Gate, Valley Gate, Dung Gate, Fountain Gate, Water Gate (where the Ezra Bible Course revival meeting was held), Horse Gate, East Gate, Miphkad Gate.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 12. 다니엘서 (총 2장)
  if (bookId === 27 || bookName === "Daniel") {
    return [
      {
        id: "dan_1",
        label: "1. Four Empires Statue Vision",
        title: "Daniel Part 1: Nebuchadnezzar's vision of the great statue & the rise and fall of four empires",
        desc: "Head of gold (Babylon) ➔ chest & arms of silver (Medo-Persia) ➔ belly of bronze (Greece) ➔ legs of iron (Rome) ➔ the stone cut without hands: God's eternal kingdom.",
        render: () => renderDanielFourEmpiresStatueSvg()
      },
      {
        id: "dan_2",
        label: "2. Four Empires & Visions",
        title: "Daniel Part 2: Map of the Babylonian Empire and the Persian palace at Shushan, and the visions",
        desc: "The fiery furnace of Babylon's palace, the lions' den, the vision of four beasts, and the everlasting dominion of one like a son of man who will judge the world's empires.",
        render: () => renderMajorProphetsSvg(book)
      }
    ];
  }

  // 13. 사복음서 (마태, 마가, 누가, 요한) (총 4장: 갈릴리 + 예루살렘 고난 + 가상칠언·부활 + 4색 관점)
  if (bookId >= 40 && bookId <= 43) {
    return [
      {
        id: "gos_1",
        label: "1. Galilee Ministry Map",
        title: `${book.name} Part 1: Map of Jesus Christ's kingdom-gospel ministry around the Sea of Galilee`,
        desc: "Geographic map of Capernaum (home base), Bethsaida, Gerasa, Chorazin, Magdala, Tiberias, Cana, Nazareth, and the Mount of Beatitudes where the Sermon on the Mount was given.",
        render: () => renderGospelsJesusSvg()
      },
      {
        id: "gos_2",
        label: "2. Jerusalem Passion Week Route",
        title: `${book.name} Part 2: Map of Passion Week routes over Jerusalem's real terrain & the Way of the Cross (Via Dolorosa)`,
        desc: "Mount of Olives ➔ Bethany ➔ Mark's upper room ➔ Garden of Gethsemane ➔ Caiaphas's court ➔ Pilate's residence ➔ hill of Golgotha ➔ the empty tomb of the resurrection.",
        render: () => renderJerusalemPassionWeekMapSvg()
      },
      {
        id: "gos_3",
        label: "3. Seven Words & Resurrection",
        title: `${book.name} Part 3: The seven sayings from the cross at Golgotha (架上七言) and the victory of the resurrection`,
        desc: "Seven last words of forgiveness, salvation, filial care, anguish, thirst, victory and entrusting; the empty tomb and resurrection victory; the Great Commission proclaimed to all nations under heaven.",
        render: () => renderSevenWordsOnCrossSvg()
      },
      {
        id: "gos_4",
        label: "4. Gospel Perspectives Chart",
        title: `${book.name} Part 4: Infographic of each Gospel's unique perspective & core themes`,
        desc: "The redemptive-history revelation of Matthew (the Messiah who came as King), Mark (the serving Servant), Luke (the compassion of the Son of Man), and John (the only begotten Son of God).",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 14. 사도행전 (총 3장 모두 실제 지도)
  if (bookId === 44 || bookName === "Acts") {
    return [
      {
        id: "act_1",
        label: "1. 1st & 2nd Journey Map",
        title: "Acts Part 1: Map of the apostle Paul's 1st & 2nd Mediterranean missionary journeys",
        desc: "1st (Antioch ➔ Cyprus ➔ Perga ➔ Pisidian Antioch ➔ Lystra) & 2nd (Troas vision of Europe ➔ Philippi ➔ Thessalonica ➔ Corinth 18 months).",
        render: () => renderPaulFirstSecondSvg()
      },
      {
        id: "act_2",
        label: "2. 3rd Journey & Ephesus Revival",
        title: "Acts Part 2: Map of the apostle Paul's 3rd missionary journey & the voyage to Rome under guard",
        desc: "3-year revival at the school of Tyrannus in Ephesus ➔ tearful farewell sermon at Miletus ➔ arrest in Jerusalem ➔ 2 years' custody in Caesarea ➔ sails for Rome.",
        render: () => renderPaulThirdRomeSvg()
      },
      {
        id: "act_3",
        label: "3. Shipwreck Voyage to Rome",
        title: "Acts Part 3: Map of Paul's voyage to Rome as a prisoner & surviving the Euroclydon storm",
        desc: "Fair Havens on Crete ➔ 14 days adrift in the Euroclydon storm ➔ all 276 rescued on Melita (Malta) ➔ Syracuse ➔ Puteoli ➔ preaching from a rented house in Rome.",
        render: () => renderPaulRomeVoyageMapSvg()
      }
    ];
  }

  // 15. 요한계시록 (총 4장: 7교회 지도 + 3대 심판 + 천년왕국/백보좌 + 새 예루살렘)
  if (bookId === 66 || bookName === "Revelation") {
    return [
      {
        id: "rev_1",
        label: "1. Seven Churches of Asia Map",
        title: "Revelation Part 1: Geographic map of the actual circular postal road of the seven churches of Asia Minor",
        desc: "Map of the circular road network: island of Patmos in the Aegean ➔ Ephesus ➔ Smyrna ➔ Pergamum ➔ Thyatira ➔ Sardis ➔ Philadelphia ➔ Laodicea.",
        render: () => renderSevenChurchesMapSvg()
      },
      {
        id: "rev_2",
        label: "2. Three Judgments Panorama",
        title: "Revelation Part 2: Three judgment cycles (7 seals · 7 trumpets · 7 bowls) ➔ a new heaven and a new earth",
        desc: "The Lamb's 7 seal judgments, 7 trumpets, the 7 bowls of final wrath and Satan's destruction, and the holy New Jerusalem with the everlasting river of the water of life.",
        render: () => renderRevelationSealsTrumpetsBowlsSvg()
      },
      {
        id: "rev_3",
        label: "3. Millennium & White Throne",
        title: "Revelation Part 3: The Millennium and the final judgment of the great white throne",
        desc: "Satan bound for 1,000 years and the saints reigning in the first resurrection, the final rebellion of Gog and Magog consumed, and the righteous judgment of the white throne according to the book of life.",
        render: () => renderMillenniumGreatWhiteThroneSvg()
      },
      {
        id: "rev_4",
        label: "4. New Jerusalem & the End",
        title: "Revelation Part 4: The holy city, New Jerusalem, and God's eternal kingdom",
        desc: "A new heaven and new earth with no more tears, death or sorrow; the river of the water of life flowing from the throne of the Lamb, and the reign of the King of kings.",
        render: () => renderUniversalBookInfographic(book)
      }
    ];
  }

  // 16. 그 밖의 모든 권 (시가서, 대예언서, 소예언서, 서신서 등) ➔ 기본 2장 제공!
  const defaultCategoryMap = BIBLE_MAPS_DATA[book.mapType] || {
    title: `${book.name} background map`,
    desc: book.theme || "Historical background and geographical setting"
  };

  return [
    {
      id: `book_${book.id}_1`,
      label: "1. History & Geography Map",
      title: defaultCategoryMap.title || `${book.name} background map`,
      desc: defaultCategoryMap.desc || `Historical background and geographical setting of ${book.name}`,
      render: () => renderInteractiveSvgMap(book.mapType, book)
    },
    {
      id: `book_${book.id}_2`,
      label: "2. Book Structure & Key Points",
      title: `${book.name} (${book.engName}): overall structure and key verses infographic`,
      desc: `Author: ${book.author || 'Unknown'} | Date: ${book.date || 'Historical record'} | 4-stage structure of all ${book.chapters} chapters and key verses.`,
      render: () => renderUniversalBookInfographic(book)
    }
  ];
}
