// ============================================================================
// 성경 지도 & 인포그래픽 시각화 데이터 (SVG 지도 및 다이어그램)
// 창세기부터 요한계시록까지 66권 전체 인포그래픽 지원
// ============================================================================

const BIBLE_MAPS_DATA = {
  // 모세오경
  "genesis": {
    title: "창세기 족장들의 이동 경로 (메소포타미아 ~ 가나안 ~ 애굽)",
    desc: "갈대아 우르를 떠나 하란을 거쳐 가나안 땅(세겜, 벧엘, 헤브론, 브엘세바)으로 향한 아브라함의 여정과, 야곱의 밧단아람 왕복, 요셉을 통한 애굽 고센 땅 정착 경로.",
    svgType: "patriarchs"
  },
  "exodus": {
    title: "출애굽 경로 & 시내산 성막(Tabernacle) 구조도",
    desc: "라암셋 출발 → 홍해 도하 → 마라·엘림 → 르비딤 반석 생수 → 시내산 언약 체결 및 성막(번제단, 물두멍, 촛대, 떡상, 분향단, 언약궤) 설계도.",
    svgType: "exodus_route"
  },
  "sinai": {
    title: "레위기 시내산 성막 5대 제사와 7대 절기 인포그래픽",
    desc: "거룩하신 하나님께 나아가는 5대 제사(번제, 소제, 화목제, 속죄제, 속건제)와 구속사의 파노라마인 7대 절기(유월절부터 초막절까지).",
    svgType: "tabernacle_sacrifices"
  },
  "wilderness": {
    title: "이스라엘의 40년 광야 여정 & 12지파 성막 진영 배치도",
    desc: "성막을 중심으로 동서남북 3지파씩 진을 친 12지파의 질서정연한 진영 배치와 가데스 바네아 12정탐꾼 불신앙 및 38년 광야 방황 경로.",
    svgType: "wilderness_route"
  },
  "moab": {
    title: "신명기 모압 평지 언약과 쉐마(Shema) 이스라엘",
    desc: "가나안 입성을 눈앞에 둔 느보산 조망과 모세의 3대 고별 설교, 그리심산(축복)과 에발산(저주), 그리고 가정 신앙 전수의 핵심인 쉐마 교육.",
    svgType: "moab_covenant"
  },

  // 역사서
  "canaan_conquest": {
    title: "여호수아의 가나안 정복 3대 작전 & 12지파 기업 분배도",
    desc: "요단강 도하 → 길갈 진영 → 여리고·아이 중부 작전 → 기브온 태양 머문 남부 연합군 격파 → 메롬 물가 북부 연합군 평정 및 12지파 땅 분배.",
    svgType: "conquest_route"
  },
  "judges": {
    title: "사사기 7대 영적 악순환 사이클 & 주요 사사들의 활동 거점",
    desc: "범죄 → 이방 징계 → 백성의 부르짖음 → 사사를 통한 구원 → 평화의 순환 주기와 기드온(300용사), 드보라, 삼손, 입다의 거점.",
    svgType: "judges_cycle"
  },
  "bethlehem": {
    title: "룻기 모압~베들레헴 여정 & 다윗·그리스도의 고엘(Goel) 족보",
    desc: "흉년을 피해 떠났던 모압에서 베들레헴 보아스의 밭으로 돌아온 룻의 헌신과, 기업 무를 자를 통해 다윗 왕과 예수 그리스도로 이어지는 구속사.",
    svgType: "bethlehem_ruth"
  },
  "david_flight": {
    title: "사무엘상 다윗의 10년 망명 도피 경로 지도",
    desc: "사울의 박해를 피해 기브아 왕궁을 떠나 놉, 가드, 아둘람 굴, 모압, 엔게디 요새, 십 황무지, 시글락으로 이어진 다윗의 연단 여정.",
    svgType: "david_flight"
  },
  "david_kingdom": {
    title: "사무엘하 다윗의 통일왕국과 다윗 언약(삼하 7장)",
    desc: "헤브론 7년 반 통치 후 예루살렘 시온 산성 정복, 법궤 안치, 그리고 영원한 왕국을 약속하신 하나님의 다윗 언약 체결.",
    svgType: "david_kingdom"
  },
  "divided_kingdom": {
    title: "분열왕국 지도 (북이스라엘 vs 남유다) & 갈멜산의 영적 대결",
    desc: "솔로몬 사후 분열: 북이스라엘(10지파, 수도 사마리아, 단·벧엘 금송아지 제단, 엘리야의 갈멜산) vs 남유다(2지파, 수도 예루살렘 다윗 성전).",
    svgType: "divided_map"
  },
  "exile_return": {
    title: "바벨론 70년 포로 유수와 3차 귀환 경로",
    desc: "바벨론 유수지에서 고레스 칙령으로 시작된 3차 귀환: 1차 스룹바벨 성전 재건, 2차 에스라 율법 부흥, 3차 느헤미야 성벽 완공.",
    svgType: "exile_return"
  },
  "jerusalem_wall": {
    title: "느헤미야의 52일 예루살렘 성벽 & 10개 성문 재건 배치도",
    desc: "양문, 어문, 옛문, 골짜기문, 분문, 샘문, 수문(에스라 성경강좌 사경회 현장), 마문, 동문, 함밉갓문으로 둘러싸인 예루살렘 성벽.",
    svgType: "jerusalem_wall"
  },
  "persia_susa": {
    title: "에스더 페르시아 수산궁의 구원 드라마 & 부림절",
    desc: "거대한 페르시아 제국 수산궁에서 하만의 유대인 말살 음모를 기도로 분쇄하고 민족을 건져낸 '죽으면 죽으리이다' 신앙의 승리.",
    svgType: "persia_susa"
  },

  // 시가서
  "land_of_uz": {
    title: "욥기 우스 땅의 고난과 하나님의 창조 세계 지혜",
    desc: "동방 우스 땅에서 겪은 욥의 극한 고난과 세 친구의 인과응보 변론을 넘어, 폭풍 속 우주 창조 지혜로 임하신 하나님의 주권적 회복.",
    svgType: "land_of_uz"
  },
  "jerusalem_temple": {
    title: "시편 5권 구조 & 다윗 성전 찬양대 배치도",
    desc: "모세오경에 대응하는 시편 5권 구조와, 영혼의 모든 희로애락을 찬양으로 승화시킨 레위 찬양대 및 성전에 올라가는 노래들.",
    svgType: "jerusalem_temple"
  },
  "palestine_daily": {
    title: "잠언 지혜의 7개 기둥 & 일상 삶의 거룩한 윤리",
    desc: "여호와를 경외하는 참된 지혜가 말, 재물, 가정, 친구, 근면, 통치 등 인생의 모든 영역을 밝혀주는 실천적 생활 헌법 인포그래픽.",
    svgType: "palestine_daily"
  },
  "solomon_palace": {
    title: "전도서 해 아래의 헛됨 vs 창조주를 기억하는 참된 본분",
    desc: "세상의 쾌락과 부귀영화의 덧없음을 고백하고, 청년의 때에 창조주를 기억하며 심판을 준비하는 인간의 궁극적 본분.",
    svgType: "solomon_palace"
  },
  "shunem_garden": {
    title: "아가서 솔로몬과 술람미의 사랑의 정원 & 그리스도의 신부",
    desc: "죽음보다 강한 거룩한 부부의 사랑과, 신랑 되신 예수 그리스도께서 신부 된 교회를 향해 쏟으시는 아가페 사랑의 모형.",
    svgType: "shunem_garden"
  },

  // 대예언서
  "assyria_jerusalem": {
    title: "이사야 66장 구속사 파노라마 & 고난받는 종 메시야",
    desc: "1~39장 심판 경고와 40~66장 위로와 회복, 이사야 53장의 십자가 대속 예언, 그리고 새 하늘과 새 땅의 소망을 담은 소성경.",
    svgType: "assyria_jerusalem"
  },
  "jeremiah_path": {
    title: "예레미야의 눈물과 70년 포로 선고 & 새 언약(렘 31장)",
    desc: "예루살렘의 멸망을 눈물로 호소한 선지자의 생애와 바벨론 70년 포로 기한, 그리고 마음에 친히 새겨주실 '새 언약'의 완성.",
    svgType: "jeremiah_path"
  },
  "ruined_jerusalem": {
    title: "예레미야 애가 불타버린 시온의 애가 & 주의 성실하심",
    desc: "무너진 성전 터에서 아침마다 새로운 주의 인자와 성실하심(애 3:22-23)을 바라보며 침묵으로 구원을 기다리는 눈물의 기도.",
    svgType: "ruined_jerusalem"
  },
  "ezekiel_exile": {
    title: "에스겔 그발 강가의 환상과 새 성전 생명수의 강",
    desc: "포로지 그발 강가에서 본 네 생물 병거 환상, 마른 뼈 골짜기의 부활 군대(37장), 그리고 성전 문지방에서 흘러나와 사해를 살리는 생명수 강(47장).",
    svgType: "ezekiel_exile"
  },
  "four_empires": {
    title: "다니엘 4대 세계 제국 신상 환상 & 영원한 하나님 나라",
    desc: "금(바벨론) → 은(페르시아) → 놋(헬라) → 철(로마) 제국의 흥망성쇠와, 우상을 부수고 온 땅에 가득한 '뜨인 돌' 메시야 왕국.",
    svgType: "four_empires"
  },

  // 소예언서
  "northern_israel": {
    title: "호세아 배역한 백성을 향한 하나님의 찢어지는 사랑(헤세드)",
    desc: "음란한 아내 고멜을 끝까지 찾아와 속전으로 사 온 호세아의 사랑을 통해 보여주신, 하나님을 아는 지식과 포기할 수 없는 구원의 은혜.",
    svgType: "minor_prophets"
  },
  "judah_plague": {
    title: "요엘 메뚜기 재앙과 만민에게 부어주실 성령의 약속",
    desc: "옷을 찢지 말고 마음을 찢으라는 여호와의 날 경고와, 오순절 교회의 탄생으로 성취된 만민 성령 강림(행 2장) 예언.",
    svgType: "minor_prophets"
  },
  "zechariah_visions": {
    title: "스가랴 8가지 밤의 환상과 겸손한 나귀를 타신 왕",
    desc: "힘으로도 능으로도 되지 않고 오직 나의 영으로 되느니라(슥 4:6), 순(Branch) 메시야의 초림과 감람산 재림의 묵시적 파노라마.",
    svgType: "minor_prophets"
  },
  "malachi_temple": {
    title: "말라기 6대 논쟁과 치료하는 광선 & 주의 길을 예비할 엘리야",
    desc: "형식적 제사와 식어버린 사랑을 책망하시며, 온전한 십일조와 공의로운 해의 치료 광선, 세례 요한(엘리야)의 도래를 예고한 구약의 결론.",
    svgType: "minor_prophets"
  },

  // 사복음서 & 신약
  "gospel_galilee": {
    title: "마태복음 유대인의 왕 예수 그리스도 & 갈릴리 사역 지도",
    desc: "가버나움 중심 갈릴리 사역, 팔복산 산상수훈(5-7장), 5대 천국 강화, 그리고 모든 민족을 제자로 삼으라는 지상대명령.",
    svgType: "gospels"
  },
  "gospel_passion": {
    title: "마가복음 섬기는 종으로 오신 예수님의 고난과 십자가의 길",
    desc: "즉시(유뒤스) 순종하시며 자기 목숨을 대속물로 내어주신 종의 사역과, 예루살렘 고난 주간 십자가 대속 죽음 및 부활.",
    svgType: "gospels"
  },
  "luke_journey": {
    title: "누가복음 온 인류의 구주 예수님의 예루살렘 여행 여정",
    desc: "소외된 자와 이방인을 향한 긍휼, 잃어버린 자를 찾아 구원하시는 탕자의 비유, 선한 사마리아인, 삭개오의 구원과 엠마오 도상 동행.",
    svgType: "gospels"
  },
  "john_seven_signs": {
    title: "요한복음 하나님의 아들 예수 그리스도의 7대 표적 & 7대 자기선언",
    desc: "물로 포도주를 만드심부터 나사로 부활까지의 7대 표적과, '나는 생명의 떡이다, 세상의 빛이다, 부활이요 생명이다'의 생명 계시.",
    svgType: "gospels"
  },
  "paul_journeys": {
    title: "사도 바울의 1~3차 전도여행과 로마 호송 항해로",
    desc: "수리아 안디옥 파송 → 소아시아 갈라디아 → 마게도냐(빌립보, 데살로니가)와 아가야(고린도) → 에베소 3년 사역 → 로마 압송과 제국 복음화.",
    svgType: "paul_map"
  },
  "seven_churches_patmos": {
    title: "요한계시록 소아시아 일곱 교회 순환 지도 & 새 예루살렘 성",
    desc: "에게해 밧모 섬에서 본 환상: 에베소·서머나·버가모·두아디라·사데·빌라델비아·라오디게아 교회와, 어린양의 혼인잔치 및 새 예루살렘 성.",
    svgType: "seven_churches_map"
  }
};

// ============================================================================
// 인터랙티브 SVG 렌더러 함수
// ============================================================================
function renderInteractiveSvgMap(mapType, book) {
  const type = (mapType || (book && book.mapType) || "").toLowerCase();

  // 1. 창세기 족장들의 여정
  if (type === "patriarchs" || type === "genesis") {
    return renderPatriarchsSvg();
  }

  // 2. 출애굽기 & 성막 구조도
  if (type === "exodus" || type === "exodus_route") {
    return renderExodusAndTabernacleSvg();
  }

  // 3. 레위기 5대 제사와 7대 절기
  if (type === "sinai" || type === "tabernacle_sacrifices" || type === "leviticus") {
    return renderLeviticusSvg();
  }

  // 4. 민수기 광야 진영 배치 & 40년 방황
  if (type === "wilderness" || type === "wilderness_route" || type === "numbers") {
    return renderWildernessCampSvg();
  }

  // 5. 신명기 모압 언약 & 쉐마
  if (type === "moab" || type === "moab_covenant" || type === "deuteronomy") {
    return renderDeuteronomySvg();
  }

  // 6. 여호수아 가나안 정복 & 12지파
  if (type === "conquest_route" || type === "canaan_conquest" || type === "joshua") {
    return renderJoshuaConquestSvg();
  }

  // 7. 사사기 7대 악순환 & 사사 거점
  if (type === "judges" || type === "judges_cycle") {
    return renderJudgesCycleSvg();
  }

  // 8. 룻기 고엘 구속사
  if (type === "bethlehem" || type === "bethlehem_ruth" || type === "ruth") {
    return renderRuthSvg();
  }

  // 9. 사무엘상하 다윗 도피로 & 통일왕국
  if (type === "david_flight" || type === "david_kingdom" || type === "samuel") {
    return renderDavidSvg();
  }

  // 10. 분열왕국 북이스라엘 vs 남유다
  if (type === "divided_kingdom" || type === "divided_map" || type === "kings" || type === "chronicles") {
    return renderDividedKingdomSvg();
  }

  // 11. 바벨론 포로 & 귀환 & 느헤미야 성벽
  if (type === "exile_return" || type === "jerusalem_wall" || type === "persia_susa" || type === "ezra" || type === "nehemiah" || type === "esther") {
    return renderExileAndWallSvg();
  }

  // 12. 시가서 5대 기둥 (욥기, 시편, 잠언, 전도서, 아가)
  if (type === "land_of_uz" || type === "jerusalem_temple" || type === "palestine_daily" || type === "solomon_palace" || type === "shunem_garden" || (book && book.category === "시가서")) {
    return renderWisdomPoetrySvg(book);
  }

  // 13. 대예언서 (이사야, 예레미야, 에스겔, 다니엘)
  if (type === "assyria_jerusalem" || type === "jeremiah_path" || type === "ruined_jerusalem" || type === "ezekiel_exile" || type === "four_empires" || (book && book.category === "대예언서")) {
    return renderMajorProphetsSvg(book);
  }

  // 14. 소예언서 12권
  if (type === "minor_prophets" || type === "northern_israel" || type === "judah_plague" || type === "zechariah_visions" || type === "malachi_temple" || (book && book.category === "소예언서")) {
    return renderMinorProphetsSvg(book);
  }

  // 15. 사복음서 예수님의 생애와 사역
  if (type === "gospels" || type === "gospel_galilee" || type === "gospel_passion" || type === "luke_journey" || type === "john_seven_signs" || (book && book.category === "복음서")) {
    return renderGospelsJesusSvg();
  }

  // 16. 사도 바울의 전도여행 & 사도행전
  if (type === "paul_map" || type === "paul_journeys" || type === "acts") {
    return renderPaulJourneysSvg();
  }

  // 17. 서신서 (로마서, 갈라디아서 등 바울서신 및 공동서신)
  if (type.includes("churches") || type.includes("colony") || type.includes("city") || (book && (book.category.includes("서신") || book.category.includes("바울")))) {
    return renderEpistlesNetworkSvg(book);
  }

  // 18. 요한계시록 7교회 & 새 예루살렘
  if (type === "seven_churches_map" || type === "seven_churches_patmos" || type === "revelation") {
    return renderSevenChurchesSvg();
  }

  // 19. 기본: 어떤 책이든 아름답고 유익한 범용 성경 구조 인포그래픽 렌더링 (준비 중 없음!)
  return renderUniversalBookInfographic(book);
}

// ----------------------------------------------------------------------------
// 1. 창세기 족장들의 여정 SVG
// ----------------------------------------------------------------------------
function renderPatriarchsSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="crescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="50%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0b0f19"/>
        </linearGradient>
        <filter id="glowP" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#crescentGrad)"/>

      <!-- 바다 영역 (지중해, 홍해, 페르시아만) -->
      <path d="M 0,0 L 220,0 C 190,70 170,140 140,230 L 0,230 Z" fill="#0284c7" opacity="0.25"/>
      <text x="35" y="60" fill="#38bdf8" font-size="13" font-weight="bold">지중해 (Great Sea)</text>

      <path d="M 70,330 Q 110,340 130,400 L 90,400 Q 70,350 40,340 Z" fill="#0284c7" opacity="0.3"/>
      <text x="50" y="380" fill="#7dd3fc" font-size="10">홍해</text>

      <path d="M 580,330 Q 610,300 680,340 L 680,400 L 560,400 Z" fill="#0284c7" opacity="0.25"/>
      <text x="590" y="375" fill="#7dd3fc" font-size="11">페르시아만</text>

      <!-- 비옥한 초승달 지대 밴드 -->
      <path d="M 610,290 C 530,220 450,130 350,90 C 270,60 210,130 180,240 C 160,280 110,300 50,300" 
            fill="none" stroke="#10b981" stroke-width="26" opacity="0.12" stroke-linecap="round"/>
      <text x="330" y="55" fill="#34d399" font-size="13" font-weight="bold" opacity="0.7">비옥한 초승달 지대 (Fertile Crescent)</text>

      <!-- 유프라테스 & 티그리스 강 -->
      <path d="M 330,90 Q 420,130 520,220 T 600,300" fill="none" stroke="#0ea5e9" stroke-width="3" opacity="0.7"/>
      <path d="M 360,70 Q 450,110 550,190 T 620,290" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.5"/>
      <text x="470" y="160" fill="#7dd3fc" font-size="10">유프라테스강</text>
      <text x="510" y="135" fill="#7dd3fc" font-size="10">티그리스강</text>

      <!-- 요단강, 갈릴리, 사해 -->
      <ellipse cx="185" cy="195" rx="5" ry="7" fill="#38bdf8"/>
      <line x1="185" y1="202" x2="185" y2="235" stroke="#38bdf8" stroke-width="2"/>
      <ellipse cx="185" cy="245" rx="6" ry="14" fill="#38bdf8"/>
      <text x="195" y="240" fill="#bae6fd" font-size="10">사해</text>

      <!-- 아브라함 이동 경로 (황금색 점선) -->
      <path d="M 580,280 L 480,200 L 350,95 L 250,130 L 195,190 L 180,220 L 175,255 L 75,295" 
            fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4" filter="url(#glowP)"/>

      <!-- 주요 거점 핀 -->
      <!-- 갈대아 우르 -->
      <circle cx="580" cy="280" r="7" fill="#ef4444"/>
      <text x="545" y="270" fill="#fca5a5" font-size="12" font-weight="bold">1. 갈대아 우르</text>
      <text x="545" y="300" fill="#cbd5e1" font-size="10">소명 출발 (창 11:31)</text>

      <!-- 바벨론 -->
      <circle cx="480" cy="200" r="5" fill="#94a3b8"/>
      <text x="490" y="195" fill="#cbd5e1" font-size="11">바벨론</text>

      <!-- 하란 -->
      <circle cx="350" cy="95" r="7" fill="#eab308"/>
      <text x="350" y="85" fill="#fef08a" font-size="12" font-weight="bold">2. 하란</text>
      <text x="355" y="115" fill="#cbd5e1" font-size="10">데라 사망 / 75세 소명</text>

      <!-- 다메섹 -->
      <circle cx="230" cy="150" r="4" fill="#64748b"/>
      <text x="238" y="148" fill="#94a3b8" font-size="10">다메섹</text>

      <!-- 가나안 땅 (세겜, 벧엘, 헤브론, 브엘세바) -->
      <rect x="135" y="175" width="85" height="110" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-dasharray="3,3"/>
      
      <circle cx="182" cy="205" r="5" fill="#10b981"/>
      <text x="110" y="208" fill="#86efac" font-size="11" font-weight="bold">3. 세겜 (첫 제단)</text>

      <circle cx="180" cy="225" r="5" fill="#10b981"/>
      <text x="115" y="228" fill="#86efac" font-size="11">벧엘 (하늘 사닥다리)</text>

      <circle cx="175" cy="250" r="6" fill="#f59e0b"/>
      <text x="100" y="253" fill="#fde68a" font-size="11" font-weight="bold">4. 헤브론 (막벨라 굴)</text>

      <circle cx="170" cy="275" r="5" fill="#10b981"/>
      <text x="110" y="278" fill="#86efac" font-size="11">브엘세바 (맹세의 우물)</text>

      <!-- 애굽 고센 땅 -->
      <circle cx="75" cy="295" r="7" fill="#3b82f6"/>
      <text x="35" y="320" fill="#93c5fd" font-size="12" font-weight="bold">5. 애굽 고센</text>
      <text x="35" y="335" fill="#bfdbfe" font-size="10">요셉 국무총리 & 70인 이주</text>

      <!-- 범례 박스 -->
      <g transform="translate(420, 20)">
        <rect width="240" height="90" rx="8" fill="#1e293b" opacity="0.9" stroke="#334155"/>
        <text x="15" y="22" fill="#fbbf24" font-size="12" font-weight="bold">창세기 4대 인물 구속사 여정</text>
        <circle cx="20" cy="38" r="4" fill="#f59e0b"/>
        <text x="32" y="42" fill="#e2e8f0" font-size="11">아브라함 : 믿음의 조상 & 횃불 언약</text>
        <circle cx="20" cy="56" r="4" fill="#10b981"/>
        <text x="32" y="60" fill="#e2e8f0" font-size="11">이삭 : 모리아산 순종 & 백배의 축복</text>
        <circle cx="20" cy="74" r="4" fill="#38bdf8"/>
        <text x="32" y="78" fill="#e2e8f0" font-size="11">야곱·요셉 : 얍복강 씨름과 애굽 구원</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 2. 출애굽기 & 시내산 성막 구조도 SVG
// ----------------------------------------------------------------------------
function renderExodusAndTabernacleSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <defs>
        <linearGradient id="exGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#exGrad)"/>

      <!-- 좌측: 출애굽 이동 지도 (라암셋 ~ 시내산) -->
      <g transform="translate(10, 10)">
        <rect width="280" height="380" rx="8" fill="#0f172a" stroke="#334155"/>
        <text x="15" y="28" fill="#38bdf8" font-size="13" font-weight="bold">🗺️ 출애굽과 홍해 도하 여정</text>
        
        <!-- 바다 -->
        <path d="M 10,40 L 150,40 Q 120,90 90,130 L 10,130 Z" fill="#0369a1" opacity="0.3"/>
        <text x="30" y="70" fill="#7dd3fc" font-size="11">지중해</text>
        
        <path d="M 60,220 Q 90,260 110,370 L 80,370 Q 70,280 40,240 Z" fill="#0369a1" opacity="0.4"/>
        <path d="M 190,250 Q 200,310 210,370 L 180,370 Q 180,310 170,260 Z" fill="#0369a1" opacity="0.4"/>
        <text x="65" y="320" fill="#7dd3fc" font-size="9">홍해(수에즈)</text>
        <text x="185" y="320" fill="#7dd3fc" font-size="9">아카바만</text>

        <!-- 이동 경로 -->
        <path d="M 40,110 Q 75,135 95,130 T 110,180 T 140,250 T 155,340" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- 핀들 -->
        <circle cx="40" cy="110" r="5" fill="#ef4444"/>
        <text x="48" y="108" fill="#fca5a5" font-size="10" font-weight="bold">1. 라암셋 출발</text>

        <circle cx="95" cy="130" r="6" fill="#38bdf8"/>
        <text x="105" y="132" fill="#7dd3fc" font-size="10" font-weight="bold">2. 홍해 기적 도하</text>

        <circle cx="110" cy="180" r="4" fill="#eab308"/>
        <text x="118" y="182" fill="#fde047" font-size="10">3. 마라 & 엘림</text>

        <circle cx="140" cy="250" r="5" fill="#a855f7"/>
        <text x="148" y="252" fill="#d8b4fe" font-size="10">4. 르비딤 반석 물</text>

        <polygon points="155,325 145,345 165,345" fill="#f97316"/>
        <circle cx="155" cy="345" r="5" fill="#ef4444"/>
        <text x="105" y="365" fill="#fb923c" font-size="11" font-weight="bold">5. 시내산 (율법·성막)</text>
      </g>

      <!-- 우측: 시내산 성막(Tabernacle) 입체 배치도 -->
      <g transform="translate(305, 10)">
        <rect width="365" height="380" rx="8" fill="#0b1329" stroke="#d97706" stroke-width="1.5"/>
        <text x="20" y="28" fill="#fbbf24" font-size="14" font-weight="bold">⛺ 시내산 성막(Tabernacle) 설계 평면도</text>
        <text x="20" y="46" fill="#94a3b8" font-size="10">동쪽 문으로 들어가 하나님께 이르는 거룩한 성막 구조 (출 25~40장)</text>

        <!-- 성막 뜰 외벽 울타리 -->
        <rect x="25" y="60" width="315" height="300" rx="4" fill="#1e293b" opacity="0.6" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6,3"/>
        
        <!-- 동쪽 출입문 -->
        <rect x="335" y="180" width="10" height="60" fill="#3b82f6"/>
        <text x="290" y="215" fill="#60a5fa" font-size="11" font-weight="bold">성막문 (동쪽)</text>

        <!-- 뜰 기물: 번제단 & 물두멍 -->
        <g transform="translate(240, 185)">
          <rect x="-20" y="-20" width="40" height="40" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
          <text x="-16" y="5" fill="#fef3c7" font-size="10" font-weight="bold">번제단</text>
          <text x="-25" y="32" fill="#d97706" font-size="9">희생 제물·피의 속죄</text>
        </g>

        <g transform="translate(180, 185)">
          <circle cx="0" cy="0" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          <text x="-12" y="4" fill="#e0f2fe" font-size="10" font-weight="bold">물두멍</text>
          <text x="-16" y="26" fill="#38bdf8" font-size="9">손발 씻음·성결</text>
        </g>

        <!-- 성막 본관 (성소 + 지성소) -->
        <rect x="35" y="125" width="115" height="120" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        
        <!-- 지성소 (Holy of Holies) -->
        <rect x="35" y="125" width="45" height="120" fill="#311042" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="40" y="142" fill="#f472b6" font-size="9" font-weight="bold">지성소</text>

        <!-- 언약궤 & 속죄소 -->
        <rect x="45" y="172" width="22" height="16" fill="#f59e0b" stroke="#fef08a"/>
        <text x="42" y="202" fill="#fde047" font-size="8" font-weight="bold">언약궤</text>
        <text x="38" y="215" fill="#fbcfe8" font-size="7">쉐키나 영광</text>

        <!-- 휘장 -->
        <line x1="80" y1="125" x2="80" y2="245" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>

        <!-- 성소 (Holy Place) 기물들 -->
        <text x="85" y="142" fill="#c084fc" font-size="9" font-weight="bold">성소</text>

        <!-- 떡상 (북쪽) -->
        <rect x="95" y="140" width="22" height="12" fill="#eab308"/>
        <text x="96" y="162" fill="#fef08a" font-size="8">떡상(말씀)</text>

        <!-- 분향단 (서쪽 휘장 앞) -->
        <rect x="85" y="180" width="12" height="12" fill="#f59e0b"/>
        <text x="80" y="202" fill="#fed7aa" font-size="7">분향단(기도)</text>

        <!-- 금촛대 (남쪽) -->
        <circle cx="106" cy="225" r="7" fill="#fbbf24"/>
        <text x="90" y="242" fill="#fde68a" font-size="8">금촛대(성령)</text>

        <!-- 하단 설명 -->
        <rect x="25" y="325" width="315" height="30" rx="4" fill="#1e293b" opacity="0.8"/>
        <text x="35" y="344" fill="#a7f3d0" font-size="10">진행 순서: 번제단(회개) → 물두멍(정결) → 성소(교제) → 지성소(임재)</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 3. 레위기 5대 제사와 7대 절기 SVG
// ----------------------------------------------------------------------------
function renderLeviticusSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 타이틀 바 -->
      <rect x="15" y="15" width="650" height="40" rx="8" fill="#1e293b" stroke="#f59e0b"/>
      <text x="30" y="40" fill="#fbbf24" font-size="15" font-weight="bold">⚖️ 레위기: 내가 거룩하니 너희도 거룩할지어다 (레 11:45)</text>

      <!-- 상단: 5대 제사 (Five Sacrifices) -->
      <text x="25" y="80" fill="#38bdf8" font-size="13" font-weight="bold">1. 하나님께 나아가는 5대 제사 규례 (레 1~7장)</text>
      
      <g transform="translate(20, 95)">
        <!-- 번제 -->
        <rect x="0" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
        <text x="12" y="22" fill="#f87171" font-size="12" font-weight="bold">번제 (Olah)</text>
        <text x="12" y="42" fill="#e2e8f0" font-size="10">완전한 헌신</text>
        <text x="12" y="60" fill="#94a3b8" font-size="9">전부를 불살라</text>
        <text x="12" y="74" fill="#94a3b8" font-size="9">향기로운 냄새</text>

        <!-- 소제 -->
        <rect x="130" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
        <text x="142" y="22" fill="#fde047" font-size="12" font-weight="bold">소제 (Minchah)</text>
        <text x="142" y="42" fill="#e2e8f0" font-size="10">감사와 충성</text>
        <text x="142" y="60" fill="#94a3b8" font-size="9">고운 가루·기름</text>
        <text x="142" y="74" fill="#94a3b8" font-size="9">피 없는 곡물 제사</text>

        <!-- 화목제 -->
        <rect x="260" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="272" y="22" fill="#6ee7b7" font-size="12" font-weight="bold">화목제 (Shelamim)</text>
        <text x="272" y="42" fill="#e2e8f0" font-size="10">친교와 화평</text>
        <text x="272" y="60" fill="#94a3b8" font-size="9">하나님·이웃과</text>
        <text x="272" y="74" fill="#94a3b8" font-size="9">제물 식사 나눔</text>

        <!-- 속죄제 -->
        <rect x="390" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="402" y="22" fill="#93c5fd" font-size="12" font-weight="bold">속죄제 (Chattat)</text>
        <text x="402" y="42" fill="#e2e8f0" font-size="10">원죄·부지중 범죄</text>
        <text x="402" y="60" fill="#94a3b8" font-size="9">피를 휘장 앞에</text>
        <text x="402" y="74" fill="#94a3b8" font-size="9">오염된 성소 정결</text>

        <!-- 속건제 -->
        <rect x="520" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="532" y="22" fill="#d8b4fe" font-size="12" font-weight="bold">속건제 (Asham)</text>
        <text x="532" y="42" fill="#e2e8f0" font-size="10">배상과 책임</text>
        <text x="532" y="60" fill="#94a3b8" font-size="9">성물·이웃 침해</text>
        <text x="532" y="74" fill="#94a3b8" font-size="9">본물 + 5분의 1 배상</text>
      </g>

      <!-- 하단: 구속사의 파노라마 7대 절기 (Seven Feasts) -->
      <text x="25" y="215" fill="#fbbf24" font-size="13" font-weight="bold">2. 구속사의 달력: 여호와의 7대 절기 (레 23장)</text>

      <g transform="translate(20, 230)">
        <!-- 봄 절기 4개 -->
        <rect x="0" y="0" width="310" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="15" y="25" fill="#38bdf8" font-size="12" font-weight="bold">🌱 봄 절기: 예수 그리스도의 초림 성취</text>
        
        <text x="15" y="52" fill="#fca5a5" font-size="11" font-weight="bold">1. 유월절 (1월 14일)</text>
        <text x="145" y="52" fill="#cbd5e1" font-size="10">→ 어린양 십자가 대속 죽음</text>

        <text x="15" y="78" fill="#fef08a" font-size="11" font-weight="bold">2. 무교절 (1월 15~21일)</text>
        <text x="145" y="78" fill="#cbd5e1" font-size="10">→ 누룩 없는 성결 & 무덤 안식</text>

        <text x="15" y="104" fill="#86efac" font-size="11" font-weight="bold">3. 초실절 (안식 후 첫날)</text>
        <text x="145" y="104" fill="#cbd5e1" font-size="10">→ 첫 열매 예수 그리스도의 부활</text>

        <text x="15" y="130" fill="#93c5fd" font-size="11" font-weight="bold">4. 칠칠절/오순절 (50일째)</text>
        <text x="145" y="130" fill="#cbd5e1" font-size="10">→ 성령 강림과 신약 교회 탄생</text>

        <!-- 가을 절기 3개 -->
        <rect x="330" y="0" width="310" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="345" y="25" fill="#fbbf24" font-size="12" font-weight="bold">🍂 가을 절기: 예수 그리스도의 재림 소망</text>

        <text x="345" y="55" fill="#fde047" font-size="11" font-weight="bold">5. 나팔절 (7월 1일)</text>
        <text x="475" y="55" fill="#cbd5e1" font-size="10">→ 천사장 나팔 소리 & 재림</text>

        <text x="345" y="85" fill="#f87171" font-size="11" font-weight="bold">6. 대속죄일 (7월 10일)</text>
        <text x="475" y="85" fill="#cbd5e1" font-size="10">→ 민족적 대회개 & 심판</text>

        <text x="345" y="115" fill="#a7f3d0" font-size="11" font-weight="bold">7. 초막절/장막절 (7월 15~22일)</text>
        <text x="475" y="115" fill="#cbd5e1" font-size="10">→ 새 하늘 새 땅 영원한 안식 잔치</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 4. 민수기 광야 진영 배치 & 40년 방황 SVG
// ----------------------------------------------------------------------------
function renderWildernessCampSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 타이틀 -->
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">⛺ 민수기: 성막 중심 12지파 진영 배치도 & 40년 광야 여정</text>

      <!-- 중앙: 성막 중심 12지파 진영 (좌측 380x340) -->
      <g transform="translate(25, 45)">
        <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#475569"/>

        <!-- 중앙 성막 -->
        <rect x="140" y="130" width="80" height="80" rx="6" fill="#312e81" stroke="#f59e0b" stroke-width="2"/>
        <text x="155" y="165" fill="#fde68a" font-size="11" font-weight="bold">회막 (성막)</text>
        <text x="148" y="185" fill="#93c5fd" font-size="9">하나님의 임재</text>

        <!-- 레위 지파 (내측) -->
        <rect x="150" y="95" width="60" height="25" rx="3" fill="#334155"/>
        <text x="158" y="112" fill="#cbd5e1" font-size="10">모세·아론</text>

        <rect x="150" y="220" width="60" height="25" rx="3" fill="#334155"/>
        <text x="168" y="237" fill="#cbd5e1" font-size="10">고핫</text>

        <rect x="65" y="155" width="65" height="25" rx="3" fill="#334155"/>
        <text x="75" y="172" fill="#cbd5e1" font-size="10">게르손</text>

        <rect x="230" y="155" width="65" height="25" rx="3" fill="#334155"/>
        <text x="242" y="172" fill="#cbd5e1" font-size="10">므라리</text>

        <!-- 동쪽 (선봉): 유다, 잇사갈, 스불론 (우측) -->
        <g transform="translate(230, 70)">
          <rect width="120" height="70" rx="4" fill="#065f46" stroke="#10b981"/>
          <text x="10" y="20" fill="#6ee7b7" font-size="11" font-weight="bold">동쪽 (선봉 진영)</text>
          <text x="10" y="38" fill="#fef08a" font-size="11" font-weight="bold">🦁 유다 지파 (74,600)</text>
          <text x="10" y="52" fill="#a7f3d0" font-size="10">잇사갈 · 스불론 지파</text>
        </g>

        <!-- 남쪽: 르우벤, 시므온, 갓 (하단) -->
        <g transform="translate(90, 260)">
          <rect width="180" height="65" rx="4" fill="#1e3a8a" stroke="#3b82f6"/>
          <text x="10" y="18" fill="#93c5fd" font-size="10" font-weight="bold">남쪽 제2진영: 르우벤 지파</text>
          <text x="10" y="34" fill="#e2e8f0" font-size="9">시므온 · 갓 지파 (총 151,450명)</text>
        </g>

        <!-- 서쪽: 에브라임, 므낫세, 베냐민 (좌측) -->
        <g transform="translate(10, 70)">
          <rect width="120" height="70" rx="4" fill="#831843" stroke="#f43f5e"/>
          <text x="10" y="20" fill="#fda4af" font-size="10" font-weight="bold">서쪽 제3진영</text>
          <text x="10" y="36" fill="#e2e8f0" font-size="10">에브라임 지파</text>
          <text x="10" y="52" fill="#fbcfe8" font-size="9">므낫세 · 베냐민 지파</text>
        </g>

        <!-- 북쪽: 단, 아셀, 납달리 (상단) -->
        <g transform="translate(90, 15)">
          <rect width="180" height="65" rx="4" fill="#713f12" stroke="#eab308"/>
          <text x="10" y="18" fill="#fef08a" font-size="10" font-weight="bold">북쪽 후위진영: 단 지파</text>
          <text x="10" y="34" fill="#e2e8f0" font-size="9">아셀 · 납달리 지파 (총 157,600명)</text>
        </g>
      </g>

      <!-- 우측: 40년 광야 여정 요약 카드 (우측 255x340) -->
      <g transform="translate(400, 45)">
        <rect width="255" height="340" rx="8" fill="#1e293b" stroke="#d97706"/>
        <text x="15" y="28" fill="#fbbf24" font-size="13" font-weight="bold">🏜️ 40년 광야 여정의 핵심 교훈</text>
        
        <circle cx="20" cy="55" r="4" fill="#ef4444"/>
        <text x="32" y="58" fill="#fca5a5" font-size="11" font-weight="bold">다베라 & 기브롯 핫다아와</text>
        <text x="32" y="74" fill="#94a3b8" font-size="10">원망과 탐욕으로 인한 재앙</text>

        <circle cx="20" cy="100" r="4" fill="#f59e0b"/>
        <text x="32" y="103" fill="#fde68a" font-size="11" font-weight="bold">가데스 바네아 불신앙 (민 14장)</text>
        <text x="32" y="119" fill="#94a3b8" font-size="10">10정탐꾼 불신앙 → 38년 방황</text>
        <text x="32" y="133" fill="#6ee7b7" font-size="10">여호수아와 갈렙의 믿음의 선포</text>

        <circle cx="20" cy="160" r="4" fill="#38bdf8"/>
        <text x="32" y="163" fill="#7dd3fc" font-size="11" font-weight="bold">놋뱀 사건 (민 21장)</text>
        <text x="32" y="179" fill="#94a3b8" font-size="10">불뱀에 물린 자마다 장대 위의</text>
        <text x="32" y="193" fill="#cbd5e1" font-size="10">놋뱀을 쳐다본즉 살리라 (십자가 예표)</text>

        <circle cx="20" cy="220" r="4" fill="#10b981"/>
        <text x="32" y="223" fill="#86efac" font-size="11" font-weight="bold">발람의 꾀와 비느하스의 열심</text>
        <text x="32" y="239" fill="#94a3b8" font-size="10">바알브올 음행 사건과 언약 갱신</text>

        <circle cx="20" cy="270" r="4" fill="#a855f7"/>
        <text x="32" y="273" fill="#d8b4fe" font-size="11" font-weight="bold">모압 평지 2차 인구조사</text>
        <text x="32" y="289" fill="#cbd5e1" font-size="10">새 세대 601,730명 가나안 준비</text>

        <rect x="15" y="305" width="225" height="24" rx="4" fill="#0f172a"/>
        <text x="25" y="322" fill="#fbbf24" font-size="10">아론의 축도: "평강 주시기를 원하노라"</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 5. 신명기 모압 언약 & 쉐마 SVG
// ----------------------------------------------------------------------------
function renderDeuteronomySvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 상단 황금 쉐마 배너 -->
      <g transform="translate(20, 15)">
        <rect width="640" height="75" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="25" y="32" fill="#fbbf24" font-size="15" font-weight="bold">📜 쉐마 이스라엘 (Shema Yisrael - 신 6:4-5)</text>
        <text x="25" y="56" fill="#fef08a" font-size="13">"이스라엘아 들으라 우리 하나님 여호와는 오직 유일한 여호와이시니</text>
        <text x="25" y="70" fill="#a7f3d0" font-size="11">너는 마음을 다하고 뜻을 다하고 힘을 다하여 네 하나님 여호와를 사랑하라"</text>
      </g>

      <!-- 중앙 3개 영역: 모세 3대 설교 구조 -->
      <g transform="translate(20, 105)">
        <rect x="0" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#38bdf8"/>
        <text x="15" y="25" fill="#38bdf8" font-size="12" font-weight="bold">제1 설교 (1~4장)</text>
        <text x="15" y="45" fill="#fde68a" font-size="11">과거 광야 40년 회고</text>
        <text x="15" y="70" fill="#cbd5e1" font-size="10">• 가데스 바네아 불순종</text>
        <text x="15" y="90" fill="#cbd5e1" font-size="10">• 하나님의 신실하신 보호</text>
        <text x="15" y="110" fill="#cbd5e1" font-size="10">• 율법 준수 절대 권면</text>

        <rect x="220" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#10b981"/>
        <text x="235" y="25" fill="#34d399" font-size="12" font-weight="bold">제2 설교 (5~26장)</text>
        <text x="235" y="45" fill="#fde68a" font-size="11">율법의 상세한 강해</text>
        <text x="235" y="70" fill="#cbd5e1" font-size="10">• 십계명 재선포</text>
        <text x="235" y="90" fill="#cbd5e1" font-size="10">• 쉐마와 자녀 신앙 교육</text>
        <text x="235" y="110" fill="#cbd5e1" font-size="10">• 십일조, 절기, 시민법</text>

        <rect x="440" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="455" y="25" fill="#fbbf24" font-size="12" font-weight="bold">제3 설교 (27~30장)</text>
        <text x="455" y="45" fill="#fde68a" font-size="11">언약 갱신 & 축복과 저주</text>
        <text x="455" y="70" fill="#cbd5e1" font-size="10">• 그리심산과 에발산 선포</text>
        <text x="455" y="90" fill="#cbd5e1" font-size="10">• 신명기 28장 축복과 저주</text>
        <text x="455" y="110" fill="#cbd5e1" font-size="10">• '생명과 복을 택하라'</text>
      </g>

      <!-- 하단: 그리심산 축복 vs 에발산 저주 다이어그램 -->
      <g transform="translate(20, 270)">
        <rect width="640" height="115" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        
        <!-- 좌측: 그리심산 (축복) -->
        <g transform="translate(25, 15)">
          <polygon points="50,15 10,75 90,75" fill="#047857"/>
          <text x="20" y="92" fill="#6ee7b7" font-size="12" font-weight="bold">그리심산 (축복 선포)</text>
          <text x="105" y="35" fill="#e2e8f0" font-size="11">순종할 때 들어와도 복을 받고 나가도 복을 얻음</text>
          <text x="105" y="55" fill="#cbd5e1" font-size="10">세계 모든 민족 위에 뛰어난 제사장 나라</text>
        </g>

        <!-- 우측: 에발산 (저주) -->
        <g transform="translate(350, 15)">
          <polygon points="50,15 10,75 90,75" fill="#b91c1c"/>
          <text x="20" y="92" fill="#fca5a5" font-size="12" font-weight="bold">에발산 (저주 선포)</text>
          <text x="105" y="35" fill="#e2e8f0" font-size="11">불순종할 때 재앙과 패망, 열방에 흩어짐</text>
          <text x="105" y="55" fill="#cbd5e1" font-size="10">역사서(사사기~열왕기)의 신학적 잣대</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 6. 여호수아 가나안 정복 작전 & 12지파 분배 SVG
// ----------------------------------------------------------------------------
function renderJoshuaConquestSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 지중해 해안 -->
      <path d="M 100,0 L 140,150 L 100,400 L 0,400 L 0,0 Z" fill="#0284c7" opacity="0.25"/>
      <text x="25" y="50" fill="#38bdf8" font-size="13" font-weight="bold">지중해</text>

      <!-- 갈릴리 호수, 요단강, 사해 -->
      <ellipse cx="370" cy="65" rx="14" ry="18" fill="#38bdf8"/>
      <line x1="370" y1="83" x2="360" y2="200" stroke="#38bdf8" stroke-width="3"/>
      <ellipse cx="355" cy="265" rx="18" ry="60" fill="#38bdf8"/>
      <text x="380" y="270" fill="#7dd3fc" font-size="11">사해</text>

      <!-- 1. 중부 작전 (요단강 도하 → 길갈 → 여리고 → 아이) -->
      <path d="M 420,200 L 375,200 L 340,195 L 305,185" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="375" cy="200" r="5" fill="#3b82f6"/>
      <text x="360" y="218" fill="#93c5fd" font-size="10">길갈 진영</text>

      <circle cx="340" cy="195" r="6" fill="#ef4444"/>
      <text x="315" y="210" fill="#fca5a5" font-size="11" font-weight="bold">여리고성 함락</text>

      <circle cx="305" cy="185" r="5" fill="#f59e0b"/>
      <text x="270" y="180" fill="#fde68a" font-size="10">아이성</text>

      <!-- 2. 남부 작전 (기브온 → 아얄론 골짜기 태양 기적 → 막게다) -->
      <path d="M 305,185 L 285,210 L 260,250 L 290,290" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="285" cy="210" r="6" fill="#eab308"/>
      <text x="200" y="215" fill="#fef08a" font-size="11" font-weight="bold">기브온 (태양 머묾)</text>

      <circle cx="290" cy="290" r="5" fill="#f97316"/>
      <text x="240" y="295" fill="#fed7aa" font-size="10">헤브론 정복</text>

      <!-- 3. 북부 작전 (메롬 물가 → 하솔) -->
      <path d="M 375,200 L 360,110 L 340,65" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="340" cy="65" r="7" fill="#10b981"/>
      <text x="275" y="65" fill="#6ee7b7" font-size="11" font-weight="bold">메롬 물가 & 하솔</text>

      <!-- 12지파 영역 간략 텍스트 배치 -->
      <text x="310" y="30" fill="#a7f3d0" font-size="10">납달리 · 아셀</text>
      <text x="260" y="100" fill="#a7f3d0" font-size="10">스불론 · 잇사갈</text>
      <text x="240" y="140" fill="#fef08a" font-size="11" font-weight="bold">므낫세</text>
      <text x="240" y="170" fill="#fef08a" font-size="11" font-weight="bold">에브라임</text>
      <text x="280" y="235" fill="#bae6fd" font-size="10">베냐민 · 단</text>
      <text x="250" y="330" fill="#fca5a5" font-size="12" font-weight="bold">유다 지파 (갈렙 헤브론)</text>
      <text x="230" y="370" fill="#fca5a5" font-size="10">시므온</text>
      <text x="400" y="160" fill="#d8b4fe" font-size="10">요단 동편: 르우벤 · 갓 · 므낫세반</text>

      <!-- 범례 박스 -->
      <g transform="translate(430, 20)">
        <rect width="230" height="110" rx="8" fill="#1e293b" opacity="0.9" stroke="#475569"/>
        <text x="15" y="22" fill="#fbbf24" font-size="12" font-weight="bold">여호수아 가나안 정복 3대 전략</text>
        <line x1="15" y1="40" x2="40" y2="40" stroke="#ef4444" stroke-width="3"/>
        <text x="50" y="44" fill="#fca5a5" font-size="11">1. 중부 작전: 허리를 끊음</text>
        <line x1="15" y1="65" x2="40" y2="65" stroke="#f59e0b" stroke-width="3"/>
        <text x="50" y="69" fill="#fde68a" font-size="11">2. 남부 작전: 5왕 연합군 격파</text>
        <line x1="15" y1="90" x2="40" y2="90" stroke="#10b981" stroke-width="3"/>
        <text x="50" y="94" fill="#86efac" font-size="11">3. 북부 작전: 하솔 야빈 진멸</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 7. 사사기 7대 악순환 사이클 & 거점 SVG
// ----------------------------------------------------------------------------
function renderJudgesCycleSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">🔄 사사기: 영적 암흑기의 5단계 악순환 사이클 & 주요 사사들</text>

      <!-- 좌측: 원형 순환 사이클 (지름 280) -->
      <g transform="translate(160, 215)">
        <!-- 원형 궤도 -->
        <circle cx="0" cy="0" r="110" fill="none" stroke="#475569" stroke-width="6" stroke-dasharray="6,4"/>

        <!-- 1. 범죄/배교 (12시) -->
        <g transform="translate(0, -110)">
          <circle cx="0" cy="0" r="28" fill="#dc2626"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1. 범죄</text>
          <text x="0" y="12" text-anchor="middle" fill="#fecaca" font-size="8">바알 우상숭배</text>
        </g>

        <!-- 2. 징계/침략 (3시) -->
        <g transform="translate(105, -35)">
          <circle cx="0" cy="0" r="28" fill="#ea580c"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2. 징계</text>
          <text x="0" y="12" text-anchor="middle" fill="#fed7aa" font-size="8">이방 민족 압제</text>
        </g>

        <!-- 3. 부르짖음 (5시) -->
        <g transform="translate(65, 90)">
          <circle cx="0" cy="0" r="28" fill="#ca8a04"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3. 부르짖음</text>
          <text x="0" y="12" text-anchor="middle" fill="#fef08a" font-size="8">고통 속 간구</text>
        </g>

        <!-- 4. 구원/사사 파견 (7시) -->
        <g transform="translate(-65, 90)">
          <circle cx="0" cy="0" r="28" fill="#16a34a"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4. 구원</text>
          <text x="0" y="12" text-anchor="middle" fill="#bbf7d0" font-size="8">사사를 세우심</text>
        </g>

        <!-- 5. 평화/안식 (9시) -->
        <g transform="translate(-105, -35)">
          <circle cx="0" cy="0" r="28" fill="#2563eb"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">5. 평화</text>
          <text x="0" y="12" text-anchor="middle" fill="#bfdbfe" font-size="8">40년의 안식</text>
        </g>

        <!-- 중앙 탄식 구절 -->
        <text x="0" y="-8" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">"사람이 각기</text>
        <text x="0" y="10" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">자기 소견에</text>
        <text x="0" y="28" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">옳은 대로 행하였더라"</text>
      </g>

      <!-- 우측: 주요 사사들과 활동 지역 카드 -->
      <g transform="translate(340, 55)">
        <rect width="320" height="325" rx="8" fill="#1e293b" stroke="#334155"/>
        <text x="20" y="28" fill="#38bdf8" font-size="13" font-weight="bold">⚔️ 주요 사사들의 구원 활약상</text>

        <rect x="15" y="45" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="63" fill="#fde047" font-size="11" font-weight="bold">옷니엘 (첫 사사)</text>
        <text x="140" y="63" fill="#cbd5e1" font-size="10">메소포타미아 구산 리사다임 격퇴</text>
        <text x="25" y="78" fill="#94a3b8" font-size="9">갈렙의 아우 그나스의 아들 (40년 평온)</text>

        <rect x="15" y="95" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="113" fill="#6ee7b7" font-size="11" font-weight="bold">에훗 (왼손잡이)</text>
        <text x="140" y="113" fill="#cbd5e1" font-size="10">모압 왕 에글론 처단 (80년 평온)</text>
        <text x="25" y="128" fill="#94a3b8" font-size="9">베냐민 지파 용사</text>

        <rect x="15" y="145" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="163" fill="#f472b6" font-size="11" font-weight="bold">드보라 & 바락</text>
        <text x="140" y="163" fill="#cbd5e1" font-size="10">가나안 군대장관 시스라 격파</text>
        <text x="25" y="178" fill="#94a3b8" font-size="9">다볼산 승리와 여선지자의 노래</text>

        <rect x="15" y="195" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="213" fill="#38bdf8" font-size="11" font-weight="bold">기드온 (300 용사)</text>
        <text x="140" y="213" fill="#cbd5e1" font-size="10">미디안 13만 5천 군대 대파</text>
        <text x="25" y="228" fill="#94a3b8" font-size="9">항아리와 횃불과 나팔 소리</text>

        <rect x="15" y="245" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="263" fill="#c084fc" font-size="11" font-weight="bold">삼손 (나실인 괴력)</text>
        <text x="140" y="263" fill="#cbd5e1" font-size="10">블레셋 신전 기둥을 무너뜨림</text>
        <text x="25" y="278" fill="#94a3b8" font-size="9">죽을 때 죽인 자가 살았을 때보다 많음</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 8. 룻기 고엘 구속사 계보 SVG
// ----------------------------------------------------------------------------
function renderRuthSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      
      <!-- 상단 헤더 -->
      <text x="25" y="32" fill="#fbbf24" font-size="14" font-weight="bold">🌾 룻기: 헤세드(인애)의 사랑과 기업 무를 자(Goel) 구속사 계보</text>

      <!-- 좌측 모압~베들레헴 여정 요약 (260x320) -->
      <g transform="translate(25, 50)">
        <rect width="250" height="330" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="28" fill="#fde68a" font-size="12" font-weight="bold">모압에서 베들레헴으로</text>
        
        <rect x="15" y="45" width="220" height="60" rx="4" fill="#0f172a"/>
        <text x="25" y="65" fill="#fca5a5" font-size="11" font-weight="bold">모압에서의 비극</text>
        <text x="25" y="82" fill="#94a3b8" font-size="10">엘리멜렉, 말론, 기룐의 사망</text>
        <text x="25" y="96" fill="#94a3b8" font-size="9">과부가 된 나오미와 두 며느리</text>

        <rect x="15" y="115" width="220" height="65" rx="4" fill="#0f172a"/>
        <text x="25" y="135" fill="#6ee7b7" font-size="11" font-weight="bold">룻의 신앙 고백 (룻 1:16)</text>
        <text x="25" y="152" fill="#cbd5e1" font-size="10">"어머니의 백성이 나의 백성,</text>
        <text x="25" y="168" fill="#cbd5e1" font-size="10">어머니의 하나님이 나의 하나님!"</text>

        <rect x="15" y="190" width="220" height="65" rx="4" fill="#0f172a"/>
        <text x="25" y="210" fill="#93c5fd" font-size="11" font-weight="bold">보아스와의 은혜로운 만남</text>
        <text x="25" y="227" fill="#cbd5e1" font-size="10">베들레헴 보리 수확 밭 이삭 줍기</text>
        <text x="25" y="243" fill="#cbd5e1" font-size="10">유력한 친족 보아스의 배려와 보호</text>

        <rect x="15" y="265" width="220" height="50" rx="4" fill="#064e3b"/>
        <text x="25" y="285" fill="#a7f3d0" font-size="11" font-weight="bold">성문에서의 고엘 성사</text>
        <text x="25" y="302" fill="#6ee7b7" font-size="10">신을 벗어 기업 무름을 확정함</text>
      </g>

      <!-- 우측 고엘 구속사 계보 트리 (360x330) -->
      <g transform="translate(295, 50)">
        <rect width="360" height="330" rx="8" fill="#1e1b4b" stroke="#a855f7"/>
        <text x="20" y="28" fill="#e9d5ff" font-size="13" font-weight="bold">👑 다윗 왕과 예수 그리스도로 이어지는 족보</text>

        <!-- 스텝 노드들 -->
        <g transform="translate(30, 50)">
          <!-- 1. 살몬 & 라합 -->
          <rect x="0" y="0" width="300" height="40" rx="6" fill="#1e293b" stroke="#3b82f6"/>
          <text x="15" y="25" fill="#93c5fd" font-size="11" font-weight="bold">살몬(Salmon) + 라합(여리고의 믿음의 기생)</text>

          <line x1="150" y1="40" x2="150" y2="60" stroke="#f59e0b" stroke-width="2"/>

          <!-- 2. 보아스 & 룻 -->
          <rect x="0" y="60" width="300" height="45" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
          <text x="15" y="83" fill="#86efac" font-size="12" font-weight="bold">보아스(Boaz) + 룻(모압 이방 여인)</text>
          <text x="15" y="98" fill="#bbf7d0" font-size="9">기업 무를 자(고엘)의 언약 성취</text>

          <line x1="150" y1="105" x2="150" y2="125" stroke="#f59e0b" stroke-width="2"/>

          <!-- 3. 오벳 -->
          <rect x="30" y="125" width="240" height="35" rx="6" fill="#1e293b" stroke="#eab308"/>
          <text x="80" y="147" fill="#fef08a" font-size="11" font-weight="bold">오벳 (Obed) - 나오미의 품에 안김</text>

          <line x1="150" y1="160" x2="150" y2="175" stroke="#f59e0b" stroke-width="2"/>

          <!-- 4. 이새 -->
          <rect x="50" y="175" width="200" height="30" rx="6" fill="#1e293b" stroke="#f59e0b"/>
          <text x="100" y="195" fill="#fed7aa" font-size="11">이새 (Jesse)</text>

          <line x1="150" y1="205" x2="150" y2="220" stroke="#f59e0b" stroke-width="2"/>

          <!-- 5. 다윗 왕 -->
          <rect x="20" y="220" width="260" height="35" rx="6" fill="#78350f" stroke="#fbbf24" stroke-width="2"/>
          <text x="65" y="242" fill="#fde68a" font-size="12" font-weight="bold">👑 다윗 왕 (King David)</text>

          <!-- 6. 최종 성취 예수 그리스도 -->
          <rect x="0" y="265" width="300" height="30" rx="6" fill="#311042" stroke="#ec4899"/>
          <text x="40" y="285" fill="#f472b6" font-size="11" font-weight="bold">✝️ 우리를 구속하신 예수 그리스도 (마 1:5)</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 9. 사무엘상하 다윗의 도피로 & 통일왕국 SVG
// ----------------------------------------------------------------------------
function renderDavidSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 지중해 해안선 -->
      <path d="M 80,0 L 110,180 L 80,400 L 0,400 L 0,0 Z" fill="#0369a1" opacity="0.25"/>
      <text x="20" y="50" fill="#38bdf8" font-size="13" font-weight="bold">지중해</text>

      <!-- 요단강과 사해 -->
      <ellipse cx="280" cy="80" rx="10" ry="12" fill="#38bdf8"/>
      <line x1="280" y1="92" x2="275" y2="180" stroke="#38bdf8" stroke-width="2.5"/>
      <ellipse cx="270" cy="250" rx="16" ry="60" fill="#38bdf8"/>
      <text x="295" y="255" fill="#7dd3fc" font-size="11">사해 (염해)</text>

      <!-- 다윗의 도피 경로 선 -->
      <path d="M 215,165 L 210,150 L 225,175 L 145,210 L 185,225 L 265,260 L 220,290 L 140,320" 
            fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

      <!-- 1. 기브아 (사울 왕궁) -->
      <circle cx="215" cy="165" r="6" fill="#ef4444"/>
      <text x="140" y="160" fill="#fca5a5" font-size="11" font-weight="bold">기브아 (사울 왕궁)</text>

      <!-- 2. 라마 나욧 -->
      <circle cx="210" cy="150" r="5" fill="#a855f7"/>
      <text x="145" y="145" fill="#d8b4fe" font-size="10">라마 (사무엘 피신)</text>

      <!-- 3. 놉 (제사장 진설병) -->
      <circle cx="225" cy="175" r="5" fill="#3b82f6"/>
      <text x="235" y="175" fill="#93c5fd" font-size="10">놉 (골리앗 칼 얻음)</text>

      <!-- 4. 가드 (블레셋 미친 체함) -->
      <circle cx="145" cy="210" r="6" fill="#eab308"/>
      <text x="80" y="210" fill="#fef08a" font-size="10">가드 (아기스 왕 앞)</text>

      <!-- 5. 아둘람 굴 -->
      <circle cx="185" cy="225" r="7" fill="#10b981"/>
      <text x="110" y="235" fill="#86efac" font-size="11" font-weight="bold">아둘람 굴 (400명 환난자 규합)</text>

      <!-- 6. 엔게디 요새 -->
      <circle cx="265" cy="260" r="7" fill="#ec4899"/>
      <text x="280" y="260" fill="#f472b6" font-size="11" font-weight="bold">엔게디 요새 (사울 옷자락)</text>

      <!-- 7. 헤브론 (7년 반 통치) -->
      <circle cx="205" cy="265" r="8" fill="#f59e0b"/>
      <text x="150" y="270" fill="#fde68a" font-size="12" font-weight="bold">헤브론</text>

      <!-- 8. 시온 산성 예루살렘 (통일왕국 수도) -->
      <circle cx="220" cy="190" r="8" fill="#e11d48"/>
      <text x="235" y="195" fill="#fb7185" font-size="13" font-weight="bold">예루살렘 (다윗성 수도)</text>

      <!-- 우측 다윗 언약 카드 -->
      <g transform="translate(390, 20)">
        <rect width="270" height="360" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="15" y="28" fill="#fbbf24" font-size="13" font-weight="bold">👑 다윗 언약 (사무엘하 7장)</text>
        
        <text x="15" y="55" fill="#e2e8f0" font-size="11">"네 집과 네 나라가 내 앞에서</text>
        <text x="15" y="72" fill="#e2e8f0" font-size="11">영원히 보전되고 네 왕위가</text>
        <text x="15" y="89" fill="#fde047" font-size="12" font-weight="bold">영원히 견고하리라!" (삼하 7:16)</text>

        <line x1="15" y1="105" x2="255" y2="105" stroke="#475569"/>

        <text x="15" y="130" fill="#38bdf8" font-size="12" font-weight="bold">다윗의 10년 연단이 준 선물:</text>
        <text x="15" y="152" fill="#cbd5e1" font-size="10">• 기름부음 받은 자를 해치지 않음</text>
        <text x="15" y="170" fill="#cbd5e1" font-size="10">• 고난 중에 탄생한 73편의 시편들</text>
        <text x="15" y="188" fill="#cbd5e1" font-size="10">• 환난당한 400명의 충성된 용사화</text>

        <line x1="15" y1="210" x2="255" y2="210" stroke="#475569"/>

        <text x="15" y="235" fill="#f87171" font-size="12" font-weight="bold">다윗의 밧세바 범죄와 징계:</text>
        <text x="15" y="257" fill="#cbd5e1" font-size="10">• 나단 선지자의 비유 책망</text>
        <text x="15" y="275" fill="#cbd5e1" font-size="10">• 시편 51편 눈물의 참회 기도</text>
        <text x="15" y="293" fill="#cbd5e1" font-size="10">• 압살롬의 반역과 가문의 비극</text>

        <rect x="15" y="315" width="240" height="32" rx="4" fill="#0f172a"/>
        <text x="25" y="335" fill="#a7f3d0" font-size="10">하나님의 마음에 합한 자: 철저한 회개</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 10. 분열왕국 북이스라엘 vs 남유다 SVG
// ----------------------------------------------------------------------------
function renderDividedKingdomSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-blue-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 지중해 해안선 -->
      <path d="M 120,0 L 150,150 L 110,400 L 0,400 L 0,0 Z" fill="#0369a1" opacity="0.3"/>
      <text x="30" y="60" fill="#38bdf8" font-size="14" font-weight="bold">지중해</text>

      <!-- 갈릴리, 요단강, 사해 -->
      <ellipse cx="370" cy="70" rx="15" ry="20" fill="#0ea5e9" opacity="0.7"/>
      <text x="395" y="75" fill="#7dd3fc" font-size="11">갈릴리</text>

      <path d="M 370,90 Q 365,160 360,200" stroke="#0ea5e9" stroke-width="3" fill="none"/>
      <ellipse cx="360" cy="275" rx="20" ry="65" fill="#0ea5e9" opacity="0.7"/>
      <text x="390" y="285" fill="#7dd3fc" font-size="12">사해</text>

      <!-- 북이스라엘 영역 (상단 에메랄드/그린 톤) -->
      <path d="M 180,30 L 450,30 L 430,190 L 170,190 Z" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="200" y="80" fill="#34d399" font-size="16" font-weight="bold">북이스라엘 (10지파)</text>
      <text x="200" y="100" fill="#a7f3d0" font-size="11">수도: 사마리아 | 왕조: 여로보암 등 19대 (선한 왕 0명)</text>
      <text x="200" y="118" fill="#fda4af" font-size="10">B.C. 722 앗수르 살만에셀에 멸망</text>

      <!-- 북이스라엘 거점 -->
      <circle cx="380" cy="35" r="5" fill="#f43f5e"/>
      <text x="390" y="40" fill="#fda4af" font-size="10">단 (금송아지)</text>

      <circle cx="210" cy="105" r="6" fill="#eab308"/>
      <text x="135" y="100" fill="#fef08a" font-size="11" font-weight="bold">갈멜산 (엘리야 바알 대결)</text>

      <circle cx="280" cy="140" r="7" fill="#10b981"/>
      <text x="295" y="145" fill="#6ee7b7" font-size="12" font-weight="bold">사마리아 (수도)</text>

      <circle cx="310" cy="180" r="5" fill="#f43f5e"/>
      <text x="320" y="185" fill="#fda4af" font-size="10">벧엘 (금송아지)</text>

      <!-- 남유다 영역 (하단 골드/오렌지 톤) -->
      <path d="M 160,195 L 430,195 L 410,380 L 130,380 Z" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="180" y="240" fill="#fbbf24" font-size="16" font-weight="bold">남유다 (유다·베냐민 2지파)</text>
      <text x="180" y="260" fill="#fde68a" font-size="11">수도: 예루살렘 (솔로몬 성전) | 다윗 왕조 20대 왕</text>
      <text x="180" y="278" fill="#cbd5e1" font-size="10">B.C. 586 바벨론 느부갓네살에 멸망 (70년 포로)</text>

      <!-- 남유다 거점 -->
      <circle cx="310" cy="215" r="8" fill="#f59e0b"/>
      <text x="215" y="220" fill="#fbbf24" font-size="13" font-weight="bold">예루살렘 (성전)</text>

      <circle cx="280" cy="285" r="5" fill="#eab308"/>
      <text x="230" y="290" fill="#fde047" font-size="11">헤브론</text>

      <circle cx="230" cy="340" r="5" fill="#eab308"/>
      <text x="175" y="345" fill="#fde047" font-size="11">브엘세바</text>

      <!-- 우측 선지자 활동 범례 -->
      <g transform="translate(460, 25)">
        <rect width="205" height="350" rx="8" fill="#1e293b" stroke="#475569"/>
        <text x="15" y="26" fill="#fbbf24" font-size="12" font-weight="bold">열왕 시대 주요 선지자</text>
        
        <text x="15" y="55" fill="#34d399" font-size="11" font-weight="bold">북이스라엘 선지자:</text>
        <text x="15" y="75" fill="#cbd5e1" font-size="10">• 엘리야 (갈멜산 바알 850명 꺾음)</text>
        <text x="15" y="93" fill="#cbd5e1" font-size="10">• 엘리사 (갑절의 영감과 이적)</text>
        <text x="15" y="111" fill="#cbd5e1" font-size="10">• 아모스 (정의를 하수같이)</text>
        <text x="15" y="129" fill="#cbd5e1" font-size="10">• 호세아 (포기 없는 사랑)</text>

        <line x1="15" y1="145" x2="190" y2="145" stroke="#475569"/>

        <text x="15" y="170" fill="#fbbf24" font-size="11" font-weight="bold">남유다 선지자:</text>
        <text x="15" y="190" fill="#cbd5e1" font-size="10">• 이사야 (고난의 종 메시야)</text>
        <text x="15" y="208" fill="#cbd5e1" font-size="10">• 미가 (베들레헴 탄생 예언)</text>
        <text x="15" y="226" fill="#cbd5e1" font-size="10">• 예레미야 (눈물의 호소, 새 언약)</text>
        <text x="15" y="244" fill="#cbd5e1" font-size="10">• 하박국 (의인은 믿음으로 살리라)</text>
        <text x="15" y="262" fill="#cbd5e1" font-size="10">• 스바냐 (여호와의 날 경고)</text>

        <rect x="15" y="290" width="175" height="45" rx="4" fill="#0f172a"/>
        <text x="22" y="308" fill="#fca5a5" font-size="9">역대기 관점: 다윗 왕조와 성전,</text>
        <text x="22" y="324" fill="#fde68a" font-size="9">예배 회복을 통한 언약 계승</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 11. 바벨론 포로 & 3차 귀환 & 느헤미야 52일 성벽 SVG
// ----------------------------------------------------------------------------
function renderExileAndWallSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 상단: 바벨론 포로와 3차 귀환 타임라인 -->
      <g transform="translate(15, 15)">
        <rect width="650" height="155" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="20" y="28" fill="#fbbf24" font-size="13" font-weight="bold">🏛️ 바벨론 70년 포로 유수와 고레스 칙령 3차 귀환 역사</text>

        <!-- 1차 귀환 -->
        <rect x="20" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#3b82f6"/>
        <text x="30" y="68" fill="#93c5fd" font-size="12" font-weight="bold">1차 귀환 (B.C. 537)</text>
        <text x="30" y="88" fill="#e2e8f0" font-size="11">• 지도자: 스룹바벨 & 예수아</text>
        <text x="30" y="106" fill="#cbd5e1" font-size="10">• 인원: 약 5만 명 귀환</text>
        <text x="30" y="124" fill="#fde047" font-size="10">• 과업: 스룹바벨 성전 재건 완공</text>

        <!-- 2차 귀환 -->
        <rect x="228" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#10b981"/>
        <text x="238" y="68" fill="#6ee7b7" font-size="12" font-weight="bold">2차 귀환 (B.C. 458)</text>
        <text x="238" y="88" fill="#e2e8f0" font-size="11">• 지도자: 학사 에스라</text>
        <text x="238" y="106" fill="#cbd5e1" font-size="10">• 인원: 약 1,754명</text>
        <text x="238" y="124" fill="#86efac" font-size="10">• 과업: 율법 교육 & 영적 부흥 개혁</text>

        <!-- 3차 귀환 -->
        <rect x="435" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#ec4899"/>
        <text x="445" y="68" fill="#f472b6" font-size="12" font-weight="bold">3차 귀환 (B.C. 444)</text>
        <text x="445" y="88" fill="#e2e8f0" font-size="11">• 지도자: 총독 느헤미야</text>
        <text x="445" y="106" fill="#cbd5e1" font-size="10">• 과업: 52일 만에 성벽 재건</text>
        <text x="445" y="124" fill="#fbcfe8" font-size="10">• 수문 앞 광장 에스라 사경회</text>
      </g>

      <!-- 하단: 느헤미야 예루살렘 성벽 & 10개 성문 배치도 -->
      <g transform="translate(15, 185)">
        <rect width="650" height="200" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="20" y="25" fill="#a5b4fc" font-size="13" font-weight="bold">🛡️ 느헤미야의 52일 예루살렘 성벽 & 10개 성문 배치도 (느 3장)</text>

        <!-- 성벽 다각형 -->
        <polygon points="120,45 220,45 270,90 280,140 230,180 150,180 100,130 90,80" 
                 fill="#312e81" stroke="#fbbf24" stroke-width="3"/>
        <text x="165" y="115" fill="#fef08a" font-size="12" font-weight="bold">예루살렘 성안</text>
        <text x="160" y="132" fill="#cbd5e1" font-size="10">성전 & 다윗성</text>

        <!-- 성문들 핀 & 라벨 -->
        <circle cx="170" cy="45" r="4" fill="#ef4444"/>
        <text x="155" y="40" fill="#fca5a5" font-size="9" font-weight="bold">양문 (Sheep Gate)</text>

        <circle cx="120" cy="45" r="4" fill="#38bdf8"/>
        <text x="75" y="40" fill="#93c5fd" font-size="9">어문 (Fish)</text>

        <circle cx="90" cy="80" r="4" fill="#cbd5e1"/>
        <text x="45" y="82" fill="#cbd5e1" font-size="9">옛문 (Old)</text>

        <circle cx="100" cy="130" r="4" fill="#cbd5e1"/>
        <text x="35" y="132" fill="#cbd5e1" font-size="9">골짜기문 (Valley)</text>

        <circle cx="150" cy="180" r="4" fill="#a855f7"/>
        <text x="135" y="195" fill="#d8b4fe" font-size="9">분문 (Dung)</text>

        <circle cx="230" cy="180" r="4" fill="#10b981"/>
        <text x="235" y="195" fill="#86efac" font-size="9">샘문 (Fountain)</text>

        <!-- 핵심: 수문 (Water Gate) -->
        <circle cx="280" cy="140" r="6" fill="#fbbf24"/>
        <text x="290" y="145" fill="#fef08a" font-size="10" font-weight="bold">★ 수문 (Water Gate - 에스라 말씀 사경회)</text>

        <circle cx="270" cy="90" r="4" fill="#cbd5e1"/>
        <text x="280" y="92" fill="#cbd5e1" font-size="9">마문 (Horse)</text>

        <circle cx="220" cy="45" r="4" fill="#cbd5e1"/>
        <text x="230" y="40" fill="#cbd5e1" font-size="9">동문 (East Gate)</text>

        <!-- 설명 박스 -->
        <g transform="translate(320, 45)">
          <rect width="310" height="135" rx="6" fill="#0f172a" stroke="#475569"/>
          <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">수문 앞 광장의 에스라 성경강좌 (느 8장):</text>
          <text x="15" y="42" fill="#e2e8f0" font-size="10">• 남녀노소 알아들을 만한 자가 새벽부터 정오까지 경청</text>
          <text x="15" y="60" fill="#e2e8f0" font-size="10">• 레위인들이 하나님의 율법책을 낭독하고 뜻을 해석함</text>
          <text x="15" y="78" fill="#e2e8f0" font-size="10">• 온 백성이 말씀을 듣고 다 울며 회개한 성경통독 모델</text>
          <text x="15" y="98" fill="#6ee7b7" font-size="10">• "여호와를 기뻐하는 것이 너희의 힘이니라!"</text>
          <text x="15" y="118" fill="#fbcfe8" font-size="10">• 초막절을 지키며 대대적인 신앙 갱신 완성</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 12. 시가서 5대 기둥 (욥기, 시편, 잠언, 전도서, 아가) SVG
// ----------------------------------------------------------------------------
function renderWisdomPoetrySvg(book) {
  const currentName = book ? book.name : "시가서";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <text x="25" y="32" fill="#fbbf24" font-size="14" font-weight="bold">🏛️ 시가서(지혜서)의 5대 기둥: 하나님을 경외하는 삶의 정점</text>
      <text x="25" y="52" fill="#94a3b8" font-size="11">현재 도서: [${currentName}] - 고난, 찬양, 지혜, 인생의 헛됨, 그리고 거룩한 사랑의 노래</text>

      <g transform="translate(15, 70)">
        <!-- 1. 욥기 -->
        <rect x="0" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === '욥기' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === '욥기' ? '3' : '1'}"/>
        <rect x="0" y="0" width="122" height="32" rx="6" fill="#b91c1c"/>
        <text x="61" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">욥기 (Job)</text>
        <text x="10" y="52" fill="#fca5a5" font-size="11" font-weight="bold">고난과 경외</text>
        <text x="10" y="75" fill="#cbd5e1" font-size="10">• 까닭 없는 고난</text>
        <text x="10" y="93" fill="#cbd5e1" font-size="10">• 친구들의 정죄</text>
        <text x="10" y="111" fill="#cbd5e1" font-size="10">• 폭풍 속 창조 지혜</text>
        <text x="10" y="135" fill="#cbd5e1" font-size="10">• "단련하신 후에</text>
        <text x="10" y="152" fill="#cbd5e1" font-size="10">순금 같이 나오리라"</text>
        <rect x="8" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="61" y="262" text-anchor="middle" fill="#fbbf24" font-size="10">주권자 신앙</text>

        <!-- 2. 시편 -->
        <rect x="132" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === '시편' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === '시편' ? '3' : '1'}"/>
        <rect x="132" y="0" width="122" height="32" rx="6" fill="#0284c7"/>
        <text x="193" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">시편 (Psalms)</text>
        <text x="142" y="52" fill="#7dd3fc" font-size="11" font-weight="bold">찬양과 기도</text>
        <text x="142" y="75" fill="#cbd5e1" font-size="10">• 150편 5권 구조</text>
        <text x="142" y="93" fill="#cbd5e1" font-size="10">• 모세오경 대응</text>
        <text x="142" y="111" fill="#cbd5e1" font-size="10">• 탄식과 참회와 감사</text>
        <text x="142" y="135" fill="#cbd5e1" font-size="10">• 복 있는 사람</text>
        <text x="142" y="152" fill="#cbd5e1" font-size="10">• 할렐루야 대합창</text>
        <rect x="140" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="193" y="262" text-anchor="middle" fill="#38bdf8" font-size="10">예배와 교제</text>

        <!-- 3. 잠언 -->
        <rect x="264" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === '잠언' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === '잠언' ? '3' : '1'}"/>
        <rect x="264" y="0" width="122" height="32" rx="6" fill="#059669"/>
        <text x="325" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">잠언 (Proverbs)</text>
        <text x="274" y="52" fill="#6ee7b7" font-size="11" font-weight="bold">지혜와 생활</text>
        <text x="274" y="75" fill="#cbd5e1" font-size="10">• 여호와 경외가</text>
        <text x="274" y="93" fill="#cbd5e1" font-size="10">지식의 근본 (1:7)</text>
        <text x="274" y="111" fill="#cbd5e1" font-size="10">• 말과 혀의 권세</text>
        <text x="274" y="135" fill="#cbd5e1" font-size="10">• 정직한 재물과 노동</text>
        <text x="274" y="152" fill="#cbd5e1" font-size="10">• 현숙한 여인 (31장)</text>
        <rect x="272" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="325" y="262" text-anchor="middle" fill="#34d399" font-size="10">거룩한 일상 윤리</text>

        <!-- 4. 전도서 -->
        <rect x="396" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === '전도서' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === '전도서' ? '3' : '1'}"/>
        <rect x="396" y="0" width="122" height="32" rx="6" fill="#d97706"/>
        <text x="457" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">전도서 (Eccles.)</text>
        <text x="406" y="52" fill="#fde68a" font-size="11" font-weight="bold">영원과 본분</text>
        <text x="406" y="75" fill="#cbd5e1" font-size="10">• 해 아래 모든 헛됨</text>
        <text x="406" y="93" fill="#cbd5e1" font-size="10">• 천하만사의 때(3장)</text>
        <text x="406" y="111" fill="#cbd5e1" font-size="10">• 창조주를 기억하라</text>
        <text x="406" y="135" fill="#cbd5e1" font-size="10">• 일의 결국: 하나님</text>
        <text x="406" y="152" fill="#cbd5e1" font-size="10">경외와 명령 준수</text>
        <rect x="404" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="457" y="262" text-anchor="middle" fill="#fde047" font-size="10">참된 인생관</text>

        <!-- 5. 아가서 -->
        <rect x="528" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === '아가' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === '아가' ? '3' : '1'}"/>
        <rect x="528" y="0" width="122" height="32" rx="6" fill="#db2777"/>
        <text x="589" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">아가 (Song of S.)</text>
        <text x="538" y="52" fill="#f472b6" font-size="11" font-weight="bold">순결한 사랑</text>
        <text x="538" y="75" fill="#cbd5e1" font-size="10">• 솔로몬과 술람미</text>
        <text x="538" y="93" fill="#cbd5e1" font-size="10">• 거룩한 부부 사랑</text>
        <text x="538" y="111" fill="#cbd5e1" font-size="10">• "사랑은 죽음 같이</text>
        <text x="538" y="135" fill="#cbd5e1" font-size="10">강하고 질투는 스올</text>
        <text x="538" y="152" fill="#cbd5e1" font-size="10">같이 잔인하며"</text>
        <rect x="536" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="589" y="262" text-anchor="middle" fill="#f472b6" font-size="10">신랑 예수와 교회</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 13. 대예언서 (이사야, 예레미야, 에스겔, 다니엘) SVG
// ----------------------------------------------------------------------------
function renderMajorProphetsSvg(book) {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">📜 대예언서: 열방의 심판과 메시야 왕국의 찬란한 성취</text>

      <!-- 좌측: 다니엘 4대 제국 신상 다이어그램 (280x330) -->
      <g transform="translate(25, 45)">
        <rect width="270" height="335" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="25" fill="#fde68a" font-size="12" font-weight="bold">다니엘 2장 세계 4대 제국 거대 신상 환상</text>

        <!-- 신상 머리 (순금: 바벨론) -->
        <rect x="85" y="40" width="100" height="40" rx="6" fill="#eab308" stroke="#fef08a"/>
        <text x="135" y="60" text-anchor="middle" fill="#78350f" font-size="11" font-weight="bold">순금 머리 (바벨론)</text>
        <text x="135" y="74" text-anchor="middle" fill="#78350f" font-size="9">느부갓네살 왕 (B.C. 605~539)</text>

        <!-- 가슴과 팔 (은: 메대·페르시아) -->
        <rect x="70" y="85" width="130" height="45" rx="6" fill="#94a3b8" stroke="#cbd5e1"/>
        <text x="135" y="105" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">은 가슴과 팔 (페르시아)</text>
        <text x="135" y="120" text-anchor="middle" fill="#1e293b" font-size="9">고레스 대왕 (B.C. 539~331)</text>

        <!-- 배와 넓적다리 (놋: 헬라) -->
        <rect x="80" y="135" width="110" height="45" rx="6" fill="#b45309" stroke="#f59e0b"/>
        <text x="135" y="155" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">놋 배·넓적다리 (헬라)</text>
        <text x="135" y="170" text-anchor="middle" fill="#fef3c7" font-size="9">알렉산더 대왕 (B.C. 331~63)</text>

        <!-- 종아리와 발 (철과 진흙: 로마) -->
        <rect x="90" y="185" width="90" height="55" rx="6" fill="#334155" stroke="#64748b"/>
        <text x="135" y="208" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">철 종아리·발 (로마)</text>
        <text x="135" y="224" text-anchor="middle" fill="#cbd5e1" font-size="9">철과 진흙의 분열 제국</text>

        <!-- 뜨인 돌 (하나님의 영원한 나라) -->
        <circle cx="135" cy="285" r="28" fill="#10b981" stroke="#34d399" stroke-width="2"/>
        <text x="135" y="282" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">손대지 않은</text>
        <text x="135" y="296" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">뜨인 돌 (메시야)</text>
        <text x="135" y="325" text-anchor="middle" fill="#6ee7b7" font-size="10">우상을 치고 온 땅에 가득함</text>
      </g>

      <!-- 우측: 이사야, 예레미야, 에스겔 핵심 비전 (350x335) -->
      <g transform="translate(310, 45)">
        <rect width="345" height="335" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="15" y="25" fill="#c7d2fe" font-size="13" font-weight="bold">📖 대예언자 3인의 영원한 계시</text>

        <!-- 이사야 -->
        <rect x="15" y="40" width="315" height="75" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="25" y="60" fill="#38bdf8" font-size="12" font-weight="bold">이사야 (Isaiah) : 고난 받는 종 메시야</text>
        <text x="25" y="78" fill="#cbd5e1" font-size="10">• "그가 찔림은 우리의 허물 때문이요 그가 상함은 죄악 때문이라"</text>
        <text x="25" y="94" fill="#a7f3d0" font-size="10">• 임마누엘(7장), 평강의 왕(9장), 새 하늘과 새 땅 창조(65장)</text>

        <!-- 예레미야 -->
        <rect x="15" y="125" width="315" height="85" rx="6" fill="#1e293b" stroke="#f43f5e"/>
        <text x="25" y="145" fill="#f43f5e" font-size="12" font-weight="bold">예레미야 (Jeremiah) : 눈물의 호소 & 새 언약</text>
        <text x="25" y="163" fill="#cbd5e1" font-size="10">• 70년 바벨론 포로 후 고국 귀환 확정 예언</text>
        <text x="25" y="181" fill="#fde68a" font-size="10">• 새 언약(렘 31장): 마음에 나의 법을 기록하리라</text>
        <text x="25" y="199" fill="#cbd5e1" font-size="9">• 애가 3장: "아침마다 새로우니 주의 성실하심이 크시도소이다"</text>

        <!-- 에스겔 -->
        <rect x="15" y="220" width="315" height="100" rx="6" fill="#1e293b" stroke="#10b981"/>
        <text x="25" y="240" fill="#34d399" font-size="12" font-weight="bold">에스겔 (Ezekiel) : 부활의 군대 & 성전 생명수</text>
        <text x="25" y="258" fill="#cbd5e1" font-size="10">• 골짜기 마른 뼈에 생기가 들어가 극히 큰 군대가 됨 (37장)</text>
        <text x="25" y="276" fill="#93c5fd" font-size="10">• 회복된 새 성전 문지방에서 솟아 사해를 살리는 생명수 강 (47장)</text>
        <text x="25" y="294" fill="#fef08a" font-size="10">• 성읍의 영원한 이름: "여호와 삼마(거기 계시는 하나님)"</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 14. 소예언서 12권 종합 타임라인 SVG
// ----------------------------------------------------------------------------
function renderMinorProphetsSvg(book) {
  const curName = book ? book.name : "소선지서";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">📜 12 소예언서: 시대별 사역지와 구속사 메시지 지도</text>

      <g transform="translate(20, 50)">
        <!-- 1. 북이스라엘을 향한 선지자 -->
        <rect x="0" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#34d399"/>
        <text x="15" y="24" fill="#34d399" font-size="12" font-weight="bold">북이스라엘 선지자</text>
        <text x="15" y="48" fill="#fef08a" font-size="11" font-weight="bold">• 호세아 (Hosea)</text>
        <text x="20" y="65" fill="#cbd5e1" font-size="9">음란한 고멜 사랑, 하나님 아는 지식</text>
        <text x="15" y="90" fill="#fef08a" font-size="11" font-weight="bold">• 아모스 (Amos)</text>
        <text x="20" y="107" fill="#cbd5e1" font-size="9">드고아 목자, "공의를 물 같이</text>
        <text x="20" y="122" fill="#cbd5e1" font-size="9">정의를 마르지 않는 강 같이"</text>

        <!-- 2. 이방 열방을 향한 선지자 -->
        <rect x="220" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#ef4444"/>
        <text x="235" y="24" fill="#f87171" font-size="12" font-weight="bold">이방 열방 선지자</text>
        <text x="235" y="48" fill="#fca5a5" font-size="11" font-weight="bold">• 요나 (앗수르 니느웨)</text>
        <text x="240" y="65" fill="#cbd5e1" font-size="9">물고기 뱃속 회개, 니느웨 구원</text>
        <text x="235" y="90" fill="#fca5a5" font-size="11" font-weight="bold">• 나훔 (니느웨 최종 심판)</text>
        <text x="240" y="107" fill="#cbd5e1" font-size="9">회개 잃은 잔혹한 제국의 멸망</text>
        <text x="235" y="125" fill="#fca5a5" font-size="11" font-weight="bold">• 오바댜 (에돔 심판)</text>
        <text x="240" y="140" fill="#cbd5e1" font-size="9">바위틈 교만 형제 배신 심판</text>

        <!-- 3. 포로 귀환 후 선지자 -->
        <rect x="440" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="455" y="24" fill="#fbbf24" font-size="12" font-weight="bold">포로 귀환 후 선지자</text>
        <text x="455" y="48" fill="#fde68a" font-size="11" font-weight="bold">• 학개 (Haggai)</text>
        <text x="460" y="65" fill="#cbd5e1" font-size="9">성전 건축 재개 독려</text>
        <text x="455" y="90" fill="#fde68a" font-size="11" font-weight="bold">• 스가랴 (Zechariah)</text>
        <text x="460" y="107" fill="#cbd5e1" font-size="9">8환상, "오직 나의 영으로"</text>
        <text x="455" y="125" fill="#fde68a" font-size="11" font-weight="bold">• 말라기 (Malachi)</text>
        <text x="460" y="140" fill="#cbd5e1" font-size="9">형식 제사 책망, 엘리야 예비</text>
      </g>

      <!-- 하단: 남유다 선지자 4인 배너 (640x160) -->
      <g transform="translate(20, 220)">
        <rect width="640" height="155" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="20" y="25" fill="#c7d2fe" font-size="13" font-weight="bold">👑 남유다를 깨운 선지자 4인방</text>

        <g transform="translate(15, 40)">
          <rect x="0" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#a855f7"/>
          <text x="12" y="22" fill="#d8b4fe" font-size="11" font-weight="bold">요엘 (Joel)</text>
          <text x="12" y="42" fill="#cbd5e1" font-size="9">• 메뚜기 대재앙</text>
          <text x="12" y="58" fill="#cbd5e1" font-size="9">• "마음을 찢으라"</text>
          <text x="12" y="74" fill="#a7f3d0" font-size="9">• 만민 성령 강림</text>

          <rect x="155" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#3b82f6"/>
          <text x="167" y="22" fill="#93c5fd" font-size="11" font-weight="bold">미가 (Micah)</text>
          <text x="167" y="42" fill="#cbd5e1" font-size="9">• 베들레헴 에브라다</text>
          <text x="167" y="58" fill="#cbd5e1" font-size="9">• 메시야 탄생 예언</text>
          <text x="167" y="74" fill="#cbd5e1" font-size="9">• 공의와 인자 행함</text>

          <rect x="310" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#eab308"/>
          <text x="322" y="22" fill="#fde047" font-size="11" font-weight="bold">하박국 (Habakkuk)</text>
          <text x="322" y="42" fill="#cbd5e1" font-size="9">• 갈대아 침략 질문</text>
          <text x="322" y="58" fill="#fde68a" font-size="9">• "의인은 믿음으로"</text>
          <text x="322" y="74" fill="#cbd5e1" font-size="9">• 무화과나무 노래</text>

          <rect x="465" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#ef4444"/>
          <text x="477" y="22" fill="#fca5a5" font-size="11" font-weight="bold">스바냐 (Zephaniah)</text>
          <text x="477" y="42" fill="#cbd5e1" font-size="9">• 여호와의 날 심판</text>
          <text x="477" y="58" fill="#cbd5e1" font-size="9">• 남은 자의 구원</text>
          <text x="477" y="74" fill="#cbd5e1" font-size="9">• 너로 기쁨을 이기지</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 15. 사복음서 예수님의 생애와 사역 지도 SVG
// ----------------------------------------------------------------------------
function renderGospelsJesusSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 지중해 해안선 -->
      <path d="M 120,0 L 145,160 L 115,400 L 0,400 L 0,0 Z" fill="#0369a1" opacity="0.3"/>
      <text x="35" y="60" fill="#38bdf8" font-size="14" font-weight="bold">지중해</text>

      <!-- 갈릴리 바다 & 요단강 & 사해 -->
      <ellipse cx="370" cy="70" rx="16" ry="22" fill="#0284c7"/>
      <text x="395" y="75" fill="#7dd3fc" font-size="11">갈릴리 바다</text>

      <line x1="370" y1="92" x2="360" y2="210" stroke="#0ea5e9" stroke-width="3"/>
      <ellipse cx="360" cy="280" rx="18" ry="60" fill="#0284c7"/>
      <text x="385" y="290" fill="#7dd3fc" font-size="12">사해</text>

      <!-- 1. 갈릴리 사역 거점들 (북부) -->
      <g transform="translate(0, 0)">
        <circle cx="365" cy="55" r="7" fill="#ef4444"/>
        <text x="320" y="48" fill="#fca5a5" font-size="11" font-weight="bold">가버나움 (사역 본부)</text>

        <circle cx="345" cy="65" r="5" fill="#f59e0b"/>
        <text x="270" y="65" fill="#fde68a" font-size="10">팔복산 (산상수훈)</text>

        <circle cx="310" cy="85" r="5" fill="#10b981"/>
        <text x="245" y="85" fill="#86efac" font-size="10">가나 (첫 물→포도주)</text>

        <circle cx="290" cy="110" r="6" fill="#38bdf8"/>
        <text x="210" y="115" fill="#93c5fd" font-size="11" font-weight="bold">나사렛 (자라나심)</text>
      </g>

      <!-- 2. 사마리아 (중부) -->
      <circle cx="320" cy="170" r="6" fill="#a855f7"/>
      <text x="220" y="175" fill="#d8b4fe" font-size="11" font-weight="bold">수가성 야곱의 우물 (생수)</text>

      <!-- 3. 유대 및 예루살렘 (남부) -->
      <circle cx="300" cy="245" r="8" fill="#f59e0b"/>
      <text x="180" y="240" fill="#fbbf24" font-size="13" font-weight="bold">예루살렘 (성전·십자가·부활)</text>

      <circle cx="340" cy="235" r="5" fill="#eab308"/>
      <text x="350" y="235" fill="#fde047" font-size="10">여리고 (삭개오 구원)</text>

      <circle cx="325" cy="255" r="5" fill="#ec4899"/>
      <text x="335" y="260" fill="#f472b6" font-size="10">베다니 (나사로 부활)</text>

      <circle cx="295" cy="280" r="7" fill="#ef4444"/>
      <text x="200" y="285" fill="#fca5a5" font-size="11" font-weight="bold">베들레헴 (메시야 탄생)</text>

      <!-- 우측 사복음서 비교 박스 -->
      <g transform="translate(455, 20)">
        <rect width="210" height="360" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="26" fill="#fbbf24" font-size="13" font-weight="bold">사복음서 4색 구속사</text>

        <rect x="10" y="42" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="60" fill="#fde047" font-size="11" font-weight="bold">마태복음 (사자 복음)</text>
        <text x="18" y="76" fill="#cbd5e1" font-size="9">• 유대인의 왕으로 오신 메시야</text>
        <text x="18" y="92" fill="#cbd5e1" font-size="9">• 5대 산상강화와 천국 복음</text>

        <rect x="10" y="117" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="135" fill="#f87171" font-size="11" font-weight="bold">마가복음 (송아지 복음)</text>
        <text x="18" y="151" fill="#cbd5e1" font-size="9">• 고난 받는 종, 즉각적 행동</text>
        <text x="18" y="167" fill="#cbd5e1" font-size="9">• 목숨을 대속물로 주심</text>

        <rect x="10" y="192" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="210" fill="#6ee7b7" font-size="11" font-weight="bold">누가복음 (인간 복음)</text>
        <text x="18" y="226" fill="#cbd5e1" font-size="9">• 완전한 인간 & 잃은 자의 구주</text>
        <text x="18" y="242" fill="#cbd5e1" font-size="9">• 소외된 자와 이방인을 향한 긍휼</text>

        <rect x="10" y="267" width="190" height="75" rx="4" fill="#0f172a"/>
        <text x="18" y="285" fill="#93c5fd" font-size="11" font-weight="bold">요한복음 (독수리 복음)</text>
        <text x="18" y="301" fill="#cbd5e1" font-size="9">• 태초의 말씀, 하나님의 아들</text>
        <text x="18" y="317" fill="#cbd5e1" font-size="9">• 7대 표적 & '에고 에이미'</text>
        <text x="18" y="333" fill="#cbd5e1" font-size="9">• 믿고 영생을 얻게 함</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 16. 사도 바울 전도여행 & 사도행전 SVG
// ----------------------------------------------------------------------------
function renderPaulJourneysSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-indigo-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <text x="250" y="260" fill="#0284c7" font-size="18" font-weight="bold" opacity="0.35">지 중 해 (Mediterranean Sea)</text>

      <!-- 항로 곡선들 -->
      <path d="M 580,310 L 530,240 L 460,180 L 410,140 L 330,120 L 310,180 L 380,200 L 580,310" 
            fill="none" stroke="#818cf8" stroke-width="3" stroke-dasharray="5,4"/>
      <path d="M 580,310 L 480,320 L 250,310 L 160,250 L 110,130" 
            fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,4"/>

      <!-- 주요 선교 거점 도시들 -->
      <!-- 안디옥 -->
      <circle cx="580" cy="240" r="7" fill="#10b981"/>
      <text x="500" y="235" fill="#6ee7b7" font-size="12" font-weight="bold">수리아 안디옥 (파송교회)</text>

      <!-- 예루살렘 -->
      <circle cx="580" cy="310" r="8" fill="#f59e0b"/>
      <text x="565" y="335" fill="#fde68a" font-size="12" font-weight="bold">예루살렘</text>

      <!-- 갈라디아 -->
      <circle cx="480" cy="180" r="6" fill="#6366f1"/>
      <text x="485" y="175" fill="#c7d2fe" font-size="11">갈라디아 (1차)</text>

      <!-- 에베소 -->
      <circle cx="400" cy="190" r="8" fill="#ec4899"/>
      <text x="410" y="195" fill="#f472b6" font-size="13" font-weight="bold">에베소 (두란노 서원 3년)</text>

      <!-- 빌립보 & 데살로니가 -->
      <circle cx="360" cy="90" r="7" fill="#8b5cf6"/>
      <text x="310" y="85" fill="#c4b5fd" font-size="12" font-weight="bold">빌립보 (유럽 첫 성)</text>

      <circle cx="320" cy="100" r="6" fill="#8b5cf6"/>
      <text x="250" y="105" fill="#c4b5fd" font-size="11">데살로니가</text>

      <!-- 고린도 -->
      <circle cx="310" cy="180" r="7" fill="#38bdf8"/>
      <text x="240" y="185" fill="#7dd3fc" font-size="12" font-weight="bold">고린도 (1년 6개월)</text>

      <!-- 멜리데 섬 -->
      <circle cx="210" cy="300" r="6" fill="#f43f5e"/>
      <text x="200" y="325" fill="#fda4af" font-size="11">멜리데 (난파 구조)</text>

      <!-- 로마 -->
      <circle cx="110" cy="130" r="9" fill="#ef4444"/>
      <text x="60" y="120" fill="#f87171" font-size="14" font-weight="bold">로마 (제국의 심장, 복음 전파)</text>

      <!-- 좌측 하단 범례 -->
      <g transform="translate(30, 290)">
        <rect width="180" height="75" rx="6" fill="#1e293b" opacity="0.9" stroke="#475569"/>
        <line x1="15" y1="20" x2="45" y2="20" stroke="#818cf8" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="55" y="24" fill="#c7d2fe" font-size="11">1~3차 전도여행 경로</text>
        <line x1="15" y1="42" x2="45" y2="42" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,3"/>
        <text x="55" y="46" fill="#fda4af" font-size="11">로마 호송 항해로</text>
        <text x="15" y="65" fill="#a7f3d0" font-size="10">행 1:8 땅 끝까지 내 증인 되리라</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 17. 서신서 교회 네트워크 & 구원의 여정 SVG
// ----------------------------------------------------------------------------
function renderEpistlesNetworkSvg(book) {
  const curName = book ? book.name : "서신서";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">✉️ 신약 서신서: 로마 제국 수신 교회 네트워크 & 구원의 황금 사슬</text>
      <text x="25" y="50" fill="#94a3b8" font-size="11">선택된 서신: [${curName}] - 십자가 복음의 교리와 성도의 거룩한 삶의 실천</text>

      <!-- 상단: 구원의 황금 사슬 (Ordo Salutis - 롬 8:30) -->
      <g transform="translate(20, 70)">
        <rect width="640" height="85" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="20" y="24" fill="#fde68a" font-size="12" font-weight="bold">구원의 서정 (The Golden Chain of Salvation - 롬 8:29-30)</text>

        <!-- 5단계 플로우 -->
        <g transform="translate(15, 38)">
          <rect x="0" y="0" width="110" height="35" rx="4" fill="#312e81"/>
          <text x="55" y="22" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="bold">1. 미리 아심·예정</text>

          <text x="120" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="135" y="0" width="105" height="35" rx="4" fill="#065f46"/>
          <text x="187" y="22" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold">2. 부르심 (소명)</text>

          <text x="250" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="265" y="0" width="105" height="35" rx="4" fill="#831843"/>
          <text x="317" y="22" text-anchor="middle" fill="#fda4af" font-size="11" font-weight="bold">3. 의롭다 하심 (칭의)</text>

          <text x="380" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="395" y="0" width="105" height="35" rx="4" fill="#78350f"/>
          <text x="447" y="22" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="bold">4. 거룩함 (성화)</text>

          <text x="510" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="525" y="0" width="85" height="35" rx="4" fill="#701a75"/>
          <text x="567" y="22" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">5. 영화 (영광)</text>
        </g>
      </g>

      <!-- 하단: 바울서신 분류 & 에베소서 전신갑주 요약 (640x200) -->
      <g transform="translate(20, 175)">
        <!-- 좌측 4대 서신 분류 -->
        <rect x="0" y="0" width="310" height="205" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="15" y="25" fill="#a5b4fc" font-size="12" font-weight="bold">바울서신 13권 분류 체계</text>

        <text x="15" y="52" fill="#fde047" font-size="11" font-weight="bold">1. 교리 서신:</text>
        <text x="90" y="52" fill="#cbd5e1" font-size="10">로마서, 갈라디아서, 고린도전후서</text>

        <text x="15" y="82" fill="#6ee7b7" font-size="11" font-weight="bold">2. 옥중 서신:</text>
        <text x="90" y="82" fill="#cbd5e1" font-size="10">에베소서, 빌립보서, 골로새서, 빌레몬서</text>

        <text x="15" y="112" fill="#f472b6" font-size="11" font-weight="bold">3. 종말 서신:</text>
        <text x="90" y="112" fill="#cbd5e1" font-size="10">데살로니가전서, 데살로니가후서</text>

        <text x="15" y="142" fill="#93c5fd" font-size="11" font-weight="bold">4. 목회 서신:</text>
        <text x="90" y="142" fill="#cbd5e1" font-size="10">디모데전서, 디모데후서, 디도서</text>

        <rect x="15" y="165" width="280" height="28" rx="4" fill="#0f172a"/>
        <text x="25" y="183" fill="#cbd5e1" font-size="10">공동서신 8권: 히브리, 야고보, 베드로전후, 요한123, 유다</text>

        <!-- 우측: 하나님의 전신갑주 (엡 6장) -->
        <rect x="330" y="0" width="310" height="205" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="345" y="25" fill="#fbbf24" font-size="12" font-weight="bold">🛡️ 하나님의 전신갑주 무장 (엡 6:13-17)</text>

        <text x="345" y="55" fill="#fca5a5" font-size="11">• 구원의 투구</text>
        <text x="450" y="55" fill="#cbd5e1" font-size="10">(머리·생각 지킴)</text>

        <text x="345" y="80" fill="#fde68a" font-size="11">• 의의 호심경</text>
        <text x="450" y="80" fill="#cbd5e1" font-size="10">(가슴·마음 보호)</text>

        <text x="345" y="105" fill="#86efac" font-size="11">• 진리의 허리띠</text>
        <text x="450" y="105" fill="#cbd5e1" font-size="10">(말씀의 중심)</text>

        <text x="345" y="130" fill="#93c5fd" font-size="11">• 평안의 복음의 신</text>
        <text x="470" y="130" fill="#cbd5e1" font-size="10">(선교적 발걸음)</text>

        <text x="345" y="155" fill="#d8b4fe" font-size="11">• 믿음의 방패</text>
        <text x="450" y="155" fill="#cbd5e1" font-size="10">(악한 자의 불화살 소멸)</text>

        <text x="345" y="180" fill="#f472b6" font-size="11" font-weight="bold">• 성령의 검</text>
        <text x="430" y="180" fill="#fbcfe8" font-size="11" font-weight="bold">곧 하나님의 말씀! (공격 무기)</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 18. 요한계시록 7교회 & 새 예루살렘 SVG
// ----------------------------------------------------------------------------
function renderSevenChurchesSvg() {
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <!-- 상단 에게해 & 소아시아 7교회 순환 지도 (360x360) -->
      <g transform="translate(15, 20)">
        <rect width="360" height="360" rx="8" fill="#1e293b" stroke="#38bdf8"/>
        <text x="15" y="25" fill="#38bdf8" font-size="13" font-weight="bold">🗺️ 소아시아 일곱 교회 우편 순환 경로</text>

        <!-- 에게해 바다 -->
        <rect x="10" y="40" width="130" height="305" rx="4" fill="#0369a1" opacity="0.3"/>
        <text x="30" y="180" fill="#7dd3fc" font-size="12" font-weight="bold">에게해 (Aegean Sea)</text>

        <!-- 밧모 섬 (Patmos) -->
        <ellipse cx="65" cy="270" rx="14" ry="10" fill="#f43f5e"/>
        <text x="40" y="298" fill="#fda4af" font-size="11" font-weight="bold">밧모 섬</text>
        <text x="25" y="312" fill="#cbd5e1" font-size="9">(사도 요한 유배지)</text>

        <!-- 7교회 순환 타원 경로선 -->
        <path d="M 190,260 L 195,190 L 210,100 L 270,110 L 285,170 L 290,220 L 310,270 Z" 
              fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3"/>

        <!-- 1. 에베소 -->
        <circle cx="190" cy="260" r="7" fill="#ef4444"/>
        <text x="135" y="255" fill="#fca5a5" font-size="11" font-weight="bold">1. 에베소</text>
        <text x="120" y="270" fill="#94a3b8" font-size="9">(첫사랑 회복)</text>

        <!-- 2. 서머나 -->
        <circle cx="195" cy="190" r="7" fill="#10b981"/>
        <text x="140" y="185" fill="#86efac" font-size="11" font-weight="bold">2. 서머나</text>
        <text x="130" y="200" fill="#94a3b8" font-size="9">(죽도록 충성)</text>

        <!-- 3. 버가모 -->
        <circle cx="210" cy="100" r="6" fill="#eab308"/>
        <text x="160" y="95" fill="#fde047" font-size="11" font-weight="bold">3. 버가모</text>

        <!-- 4. 두아디라 -->
        <circle cx="270" cy="110" r="6" fill="#ec4899"/>
        <text x="280" y="105" fill="#f472b6" font-size="11" font-weight="bold">4. 두아디라</text>

        <!-- 5. 사데 -->
        <circle cx="285" cy="170" r="6" fill="#64748b"/>
        <text x="295" y="170" fill="#cbd5e1" font-size="11" font-weight="bold">5. 사데 (살았으나 죽음)</text>

        <!-- 6. 빌라델비아 -->
        <circle cx="290" cy="220" r="7" fill="#10b981"/>
        <text x="200" y="225" fill="#86efac" font-size="11" font-weight="bold">6. 빌라델비아</text>
        <text x="210" y="238" fill="#94a3b8" font-size="9">(칭찬만 받은 교회)</text>

        <!-- 7. 라오디게아 -->
        <circle cx="310" cy="270" r="6" fill="#f97316"/>
        <text x="245" y="285" fill="#fed7aa" font-size="11" font-weight="bold">7. 라오디게아 (차지도 덥지도 않음)</text>
      </g>

      <!-- 우측: 요한계시록 7심판 & 새 예루살렘 성 다이어그램 (275x360) -->
      <g transform="translate(390, 20)">
        <rect width="275" height="360" rx="8" fill="#1e1b4b" stroke="#a855f7"/>
        <text x="15" y="25" fill="#e9d5ff" font-size="13" font-weight="bold">👑 새 하늘과 새 땅: 새 예루살렘 성</text>

        <rect x="15" y="42" width="245" height="55" rx="4" fill="#0f172a"/>
        <text x="25" y="60" fill="#fde68a" font-size="11" font-weight="bold">7인 → 7나팔 → 7대접 심판</text>
        <text x="25" y="78" fill="#cbd5e1" font-size="9">세상 제국의 종말과 악한 세력의 완전한 심판</text>

        <!-- 정육면체 새 예루살렘 성 입체 그래픽 -->
        <g transform="translate(65, 115)">
          <polygon points="70,10 130,40 130,110 70,80" fill="#d97706" opacity="0.8"/>
          <polygon points="70,10 10,40 10,110 70,80" fill="#b45309" opacity="0.9"/>
          <polygon points="70,10 130,40 70,60 10,40" fill="#f59e0b"/>
          <text x="70" y="65" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">새 예루살렘</text>
        </g>

        <!-- 성곽 설명 -->
        <g transform="translate(15, 235)">
          <rect width="245" height="105" rx="6" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="22" fill="#fbbf24" font-size="11" font-weight="bold">새 예루살렘 성의 거룩한 영광:</text>
          <text x="12" y="40" fill="#cbd5e1" font-size="10">• 12 진주문 (이스라엘 12지파 이름)</text>
          <text x="12" y="58" fill="#cbd5e1" font-size="10">• 12 보석 기초석 (어린양 12사도 이름)</text>
          <text x="12" y="76" fill="#6ee7b7" font-size="10">• 보좌에서 흐르는 생명수 강 & 달마다 맺는 생명나무</text>
          <text x="12" y="94" fill="#f472b6" font-size="10">• "아멘 주 예수여 오시옵소서 (마라나타!)"</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 19. 범용 성경 구조 인포그래픽 (어떤 책이든 완벽 렌더링, 준비중 없음)
// ----------------------------------------------------------------------------
function renderUniversalBookInfographic(book) {
  const b = book || {
    name: "성경",
    engName: "Bible",
    category: "성경",
    author: "성령의 감동",
    date: "구속사의 때",
    keyVerse: "하나님의 말씀은 살아 있고 활력이 있어 (히 4:12)",
    theme: "하나님의 구원 언약과 예수 그리스도",
    structure: []
  };

  const steps = (b.structure && b.structure.length) ? b.structure.slice(0, 4) : [
    { part: "제1부", content: "도입과 배경 및 중심 사건" },
    { part: "제2부", content: "언약의 전개와 신앙의 교훈" },
    { part: "제3부", content: "영적 갈등과 하나님의 개입" },
    { part: "제4부", content: "구속사의 완성 및 미래 소망" }
  ];

  const stepsHtml = steps.map((s, i) => `
    <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
      <div class="text-xs font-bold text-amber-400 mb-1">${s.part}</div>
      <div class="text-xs text-slate-300 leading-snug line-clamp-2">${s.content}</div>
    </div>
  `).join("");

  return `
    <div class="bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4">
      <!-- 헤더 카드 -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div class="flex items-center gap-3">
          <span class="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg text-sm font-bold">
            ${b.category}
          </span>
          <div>
            <h3 class="text-lg font-black text-white">${b.name} (${b.engName})</h3>
            <p class="text-xs text-slate-400">저자: ${b.author || '미상'} | 기록 연대: ${b.date || '역사적 기록'}</p>
          </div>
        </div>
        <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
          ${b.chapters || ''}장 전체 구조 인포그래픽
        </span>
      </div>

      <!-- 핵심 테마 카드 -->
      <div class="bg-gradient-to-r from-slate-800 to-slate-800/50 p-4 rounded-xl border border-amber-900/30">
        <div class="text-xs font-bold text-amber-400 mb-1">🎯 구속사적 핵심 주제 (Theme)</div>
        <p class="text-sm font-semibold text-slate-100">${b.theme}</p>
      </div>

      <!-- 4단계 구조 로드맵 -->
      <div>
        <div class="text-xs font-bold text-slate-400 mb-2">📌 책의 핵심 전개 구조 (Structure)</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          ${stepsHtml}
        </div>
      </div>

      <!-- 핵심 요절 배너 -->
      <div class="p-3.5 bg-amber-950/30 border border-amber-600/30 rounded-xl text-amber-200 text-xs md:text-sm italic leading-relaxed">
        "${b.keyVerse}"
      </div>
    </div>
  `;
}
