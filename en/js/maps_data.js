// ============================================================================
// 성경 지도 & 인포그래픽 시각화 데이터 (SVG 지도 및 다이어그램)
// 창세기부터 요한계시록까지 66권 전체 인포그래픽 지원
// ============================================================================

const BIBLE_MAPS_DATA = {
  // 모세오경
  "genesis": {
    title: "Routes of the Patriarchs in Genesis (Mesopotamia ~ Canaan ~ Egypt)",
    desc: "Abraham's journey from Ur of the Chaldeans through Haran into the land of Canaan (Shechem, Bethel, Hebron, Beersheba), Jacob's round trip to Paddan Aram, and the route by which the family settled in Goshen in Egypt through Joseph.",
    svgType: "patriarchs"
  },
  "exodus": {
    title: "The Exodus Route & Diagram of the Tabernacle (Tabernacle) at Sinai",
    desc: "Departure from Rameses → crossing the Red Sea → Marah and Elim → water from the rock at Rephidim → the covenant at Mount Sinai, and the plan of the tabernacle (altar of burnt offering, bronze basin, lampstand, table of showbread, altar of incense, ark of the covenant).",
    svgType: "exodus_route"
  },
  "sinai": {
    title: "Infographic: The Five Offerings and Seven Feasts of the Sinai Tabernacle in Leviticus",
    desc: "The five offerings (burnt, grain, peace, sin, and guilt offerings) for drawing near to the holy God, and the seven feasts (from Passover to the Feast of Tabernacles), a panorama of redemptive history.",
    svgType: "tabernacle_sacrifices"
  },
  "wilderness": {
    title: "Israel's 40-Year Wilderness Journey & the Camp Layout of the Twelve Tribes Around the Tabernacle",
    desc: "The orderly layout of the twelve tribes, three tribes camped on each side of the tabernacle (east, west, south, north), and the route of 38 years of wandering in the wilderness after the unbelief of the twelve spies at Kadesh Barnea.",
    svgType: "wilderness_route"
  },
  "moab": {
    title: "The Covenant on the Plains of Moab in Deuteronomy and Shema (Shema) Israel",
    desc: "The view from Mount Nebo just before entering Canaan, Moses' three farewell sermons, Mount Gerizim (blessing) and Mount Ebal (curse), and Shema education, the heart of passing on the faith at home.",
    svgType: "moab_covenant"
  },

  // 역사서
  "canaan_conquest": {
    title: "Joshua's Three Campaigns to Conquer Canaan & Map of the Twelve Tribes' Inheritance",
    desc: "Crossing the Jordan → camp at Gilgal → central campaign at Jericho and Ai → defeating the southern alliance at Gibeon where the sun stood still → subduing the northern alliance at the waters of Merom, and the division of the land among the twelve tribes.",
    svgType: "conquest_route"
  },
  "judges": {
    title: "The Seven-Step Spiritual Vicious Cycle in Judges & the Bases of the Major Judges",
    desc: "The repeating cycle of sin → discipline by foreigners → the people's cry → deliverance through a judge → peace, and the bases of Gideon (300 men), Deborah, Samson, and Jephthah.",
    svgType: "judges_cycle"
  },
  "bethlehem": {
    title: "Ruth's Journey from Moab to Bethlehem & the Kinsman-Redeemer (Goel) Genealogy of David and Christ",
    desc: "Ruth's devotion as she returned from Moab, where the family had fled from famine, to the field of Boaz in Bethlehem, and the redemptive history that leads through the kinsman-redeemer to King David and Jesus Christ.",
    svgType: "bethlehem_ruth"
  },
  "david_flight": {
    title: "Map of David's 10-Year Flight in Exile in 1 Samuel",
    desc: "David's journey of refining as he fled Saul's persecution: leaving Saul's palace at Gibeah for Nob, Gath, the cave of Adullam, Moab, the stronghold of En Gedi, the wilderness of Ziph, and Ziklag.",
    svgType: "david_flight"
  },
  "david_kingdom": {
    title: "David's United Kingdom and the Davidic Covenant in 2 Samuel (2 Sam 7)",
    desc: "After reigning seven and a half years in Hebron, David conquers the stronghold of Zion in Jerusalem, brings up the ark, and receives God's Davidic covenant promising an everlasting kingdom.",
    svgType: "david_kingdom"
  },
  "divided_kingdom": {
    title: "Map of the Divided Kingdom (Northern Israel vs Southern Judah) & the Spiritual Showdown on Mount Carmel",
    desc: "The division after Solomon's death: Northern Israel (10 tribes, capital Samaria, golden calf altars at Dan and Bethel, Elijah's Mount Carmel) vs Southern Judah (2 tribes, capital Jerusalem, David's temple).",
    svgType: "divided_map"
  },
  "exile_return": {
    title: "The 70-Year Babylonian Exile and the Three Returns",
    desc: "The three returns that began with the decree of Cyrus from the land of exile in Babylon: 1st, Zerubbabel rebuilds the temple; 2nd, Ezra revives the law; 3rd, Nehemiah completes the wall.",
    svgType: "exile_return"
  },
  "jerusalem_wall": {
    title: "Plan of Nehemiah's 52-Day Rebuilding of the Jerusalem Wall & Its 10 Gates",
    desc: "The wall of Jerusalem with the Sheep Gate, Fish Gate, Old Gate, Valley Gate, Dung Gate, Fountain Gate, Water Gate (the site of the Ezra Bible course conference), Horse Gate, East Gate, and Muster Gate.",
    svgType: "jerusalem_wall"
  },
  "persia_susa": {
    title: "Esther: The Drama of Deliverance in the Persian Palace at Susa & Purim",
    desc: "The victory of 'if I perish, I perish' faith, which through prayer crushed Haman's plot to wipe out the Jews in the palace at Susa of the vast Persian Empire and saved the nation.",
    svgType: "persia_susa"
  },

  // 시가서
  "land_of_uz": {
    title: "Job: Suffering in the Land of Uz and the Wisdom of God's Creation",
    desc: "Job's extreme suffering in the land of Uz in the east, and beyond the three friends' arguments of cause and effect, God's sovereign restoration as He came in the storm with the wisdom of creation.",
    svgType: "land_of_uz"
  },
  "jerusalem_temple": {
    title: "The Five-Book Structure of Psalms & the Layout of David's Temple Choirs",
    desc: "The five books of Psalms, matching the Pentateuch, and the Levite choirs who turned every joy and sorrow of the soul into praise, with the Songs of Ascents to the temple.",
    svgType: "jerusalem_temple"
  },
  "palestine_daily": {
    title: "The Seven Pillars of Wisdom in Proverbs & the Holy Ethics of Everyday Life",
    desc: "An infographic of a practical constitution for living: the true wisdom of fearing the LORD lights up every area of life, including speech, wealth, family, friends, diligence, and ruling.",
    svgType: "palestine_daily"
  },
  "solomon_palace": {
    title: "Ecclesiastes: Vanity Under the Sun vs the True Duty of Remembering the Creator",
    desc: "Confessing the emptiness of worldly pleasure, riches, and glory, and the ultimate duty of man: remembering the Creator in the days of youth and preparing for judgment.",
    svgType: "solomon_palace"
  },
  "shunem_garden": {
    title: "Song of Songs: The Garden of Love of Solomon and the Shulammite & the Bride of Christ",
    desc: "The holy love of husband and wife, stronger than death, and a type of the agape love that Jesus Christ the Bridegroom pours out on His bride, the church.",
    svgType: "shunem_garden"
  },

  // 대예언서
  "assyria_jerusalem": {
    title: "Panorama of Redemptive History in the 66 Chapters of Isaiah & the Suffering Servant Messiah",
    desc: "A miniature Bible: warnings of judgment in chapters 1~39 and comfort and restoration in chapters 40~66, the prophecy of the atoning cross in Isaiah 53, and the hope of the new heavens and new earth.",
    svgType: "assyria_jerusalem"
  },
  "jeremiah_path": {
    title: "Jeremiah's Tears, the Sentence of 70 Years of Exile & the New Covenant (Jer 31)",
    desc: "The life of the prophet who pleaded with tears over the fall of Jerusalem, the 70-year term of exile in Babylon, and the fulfillment of the 'new covenant' that God Himself will write on the heart.",
    svgType: "jeremiah_path"
  },
  "ruined_jerusalem": {
    title: "Lamentations: A Lament for Burned Zion & the Faithfulness of the Lord",
    desc: "A tearful prayer on the site of the ruined temple, looking to the Lord's mercies and faithfulness that are new every morning (Lam 3:22-23) and waiting quietly for salvation.",
    svgType: "ruined_jerusalem"
  },
  "ezekiel_exile": {
    title: "Ezekiel: The Vision by the River Chebar and the River of Living Water from the New Temple",
    desc: "The vision of the chariot of the four living creatures seen by the river Chebar in exile, the resurrected army in the valley of dry bones (ch. 37), and the river of living water flowing from the temple threshold to heal the Dead Sea (ch. 47).",
    svgType: "ezekiel_exile"
  },
  "four_empires": {
    title: "Daniel: The Vision of the Statue of Four World Empires & God's Eternal Kingdom",
    desc: "The rise and fall of the empires of gold (Babylon) → silver (Persia) → bronze (Greece) → iron (Rome), and the Messiah's kingdom, the 'stone cut out' that smashes the idol and fills the whole earth.",
    svgType: "four_empires"
  },

  // 소예언서
  "northern_israel": {
    title: "Hosea: God's Heartbroken Love (Hesed) for a Rebellious People",
    desc: "Through Hosea's love, who sought his unfaithful wife Gomer to the end and bought her back with a price, God shows the knowledge of God and the grace of a salvation He will not give up.",
    svgType: "minor_prophets"
  },
  "judah_plague": {
    title: "Joel: The Locust Plague and the Promise of the Spirit Poured Out on All People",
    desc: "The warning of the day of the LORD, 'rend your heart, and not your garments,' and the prophecy of the Spirit poured out on all people (Acts 2), fulfilled in the birth of the church at Pentecost.",
    svgType: "minor_prophets"
  },
  "zechariah_visions": {
    title: "Zechariah: Eight Night Visions and the Humble King Riding on a Donkey",
    desc: "Not by might, nor by power, but by my Spirit (Zech 4:6); an apocalyptic panorama of the first coming of the Branch (Branch) Messiah and His return on the Mount of Olives.",
    svgType: "minor_prophets"
  },
  "malachi_temple": {
    title: "Malachi: Six Disputes, the Healing Rays & Elijah, Who Will Prepare the Way of the Lord",
    desc: "The conclusion of the Old Testament: rebuking empty sacrifices and cooled love, and announcing the full tithe, the healing rays of the sun of righteousness, and the coming of John the Baptist (Elijah).",
    svgType: "minor_prophets"
  },

  // 사복음서 & 신약
  "gospel_galilee": {
    title: "Matthew: Jesus Christ, King of the Jews & Map of the Galilean Ministry",
    desc: "The Galilean ministry centered in Capernaum, the Sermon on the Mount on the Mount of Beatitudes (chapters 5-7), the five great discourses on the kingdom, and the Great Commission to make disciples of all nations.",
    svgType: "gospels"
  },
  "gospel_passion": {
    title: "Mark: The Suffering and the Way of the Cross of Jesus, Who Came as a Serving Servant",
    desc: "The ministry of the Servant who obeyed immediately (euthys) and gave His life as a ransom, and His atoning death on the cross and resurrection during Passion Week in Jerusalem.",
    svgType: "gospels"
  },
  "luke_journey": {
    title: "Luke: The Journey to Jerusalem of Jesus, Savior of All Humanity",
    desc: "Compassion for the outcast and the Gentiles, the parable of the prodigal son about seeking and saving the lost, the good Samaritan, the salvation of Zacchaeus, and walking together on the road to Emmaus.",
    svgType: "gospels"
  },
  "john_seven_signs": {
    title: "John: The Seven Signs & Seven 'I Am' Sayings of Jesus Christ, the Son of God",
    desc: "The seven signs, from turning water into wine to raising Lazarus, and the revelation of life: 'I am the bread of life, the light of the world, the resurrection and the life.'",
    svgType: "gospels"
  },
  "paul_journeys": {
    title: "The Apostle Paul's 1st~3rd Missionary Journeys and the Voyage to Rome as a Prisoner",
    desc: "Sent from Syrian Antioch → Galatia in Asia Minor → Macedonia (Philippi, Thessalonica) and Achaia (Corinth) → 3 years of ministry in Ephesus → taken to Rome and the evangelization of the empire.",
    svgType: "paul_map"
  },
  "seven_churches_patmos": {
    title: "Revelation: Circuit Map of the Seven Churches of Asia Minor & the City of the New Jerusalem",
    desc: "The vision seen on the island of Patmos in the Aegean Sea: the churches of Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea, the marriage supper of the Lamb, and the city of the New Jerusalem.",
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
  if (type === "land_of_uz" || type === "jerusalem_temple" || type === "palestine_daily" || type === "solomon_palace" || type === "shunem_garden" || (book && book.category === "Poetry & Wisdom")) {
    return renderWisdomPoetrySvg(book);
  }

  // 13. 대예언서 (이사야, 예레미야, 에스겔, 다니엘)
  if (type === "assyria_jerusalem" || type === "jeremiah_path" || type === "ruined_jerusalem" || type === "ezekiel_exile" || type === "four_empires" || (book && book.category === "Major Prophets")) {
    return renderMajorProphetsSvg(book);
  }

  // 14. 소예언서 12권
  if (type === "minor_prophets" || type === "northern_israel" || type === "judah_plague" || type === "zechariah_visions" || type === "malachi_temple" || (book && book.category === "Minor Prophets")) {
    return renderMinorProphetsSvg(book);
  }

  // 15. 사복음서 예수님의 생애와 사역
  if (type === "gospels" || type === "gospel_galilee" || type === "gospel_passion" || type === "luke_journey" || type === "john_seven_signs" || (book && book.category === "Gospels")) {
    return renderGospelsJesusSvg();
  }

  // 16. 사도 바울의 전도여행 & 사도행전
  if (type === "paul_map" || type === "paul_journeys" || type === "acts") {
    return renderPaulJourneysSvg();
  }

  // 17. 서신서 (로마서, 갈라디아서 등 바울서신 및 공동서신)
  if (type.includes("churches") || type.includes("colony") || type.includes("city") || (book && (book.category.includes("Epistles") || book.category.includes("Paul")))) {
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
      <text x="35" y="60" fill="#38bdf8" font-size="13" font-weight="bold">Mediterranean (Great Sea)</text>

      <path d="M 70,330 Q 110,340 130,400 L 90,400 Q 70,350 40,340 Z" fill="#0284c7" opacity="0.3"/>
      <text x="50" y="380" fill="#7dd3fc" font-size="10">Red Sea</text>

      <path d="M 580,330 Q 610,300 680,340 L 680,400 L 560,400 Z" fill="#0284c7" opacity="0.25"/>
      <text x="590" y="375" fill="#7dd3fc" font-size="11">Persian Gulf</text>

      <!-- 비옥한 초승달 지대 밴드 -->
      <path d="M 610,290 C 530,220 450,130 350,90 C 270,60 210,130 180,240 C 160,280 110,300 50,300" 
            fill="none" stroke="#10b981" stroke-width="26" opacity="0.12" stroke-linecap="round"/>
      <text x="330" y="55" fill="#34d399" font-size="13" font-weight="bold" opacity="0.7">Fertile Crescent</text>

      <!-- 유프라테스 & 티그리스 강 -->
      <path d="M 330,90 Q 420,130 520,220 T 600,300" fill="none" stroke="#0ea5e9" stroke-width="3" opacity="0.7"/>
      <path d="M 360,70 Q 450,110 550,190 T 620,290" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.5"/>
      <text x="470" y="160" fill="#7dd3fc" font-size="10">Euphrates</text>
      <text x="510" y="135" fill="#7dd3fc" font-size="10">Tigris</text>

      <!-- 요단강, 갈릴리, 사해 -->
      <ellipse cx="185" cy="195" rx="5" ry="7" fill="#38bdf8"/>
      <line x1="185" y1="202" x2="185" y2="235" stroke="#38bdf8" stroke-width="2"/>
      <ellipse cx="185" cy="245" rx="6" ry="14" fill="#38bdf8"/>
      <text x="195" y="240" fill="#bae6fd" font-size="10">Dead Sea</text>

      <!-- 아브라함 이동 경로 (황금색 점선) -->
      <path d="M 580,280 L 480,200 L 350,95 L 250,130 L 195,190 L 180,220 L 175,255 L 75,295" 
            fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4" filter="url(#glowP)"/>

      <!-- 주요 거점 핀 -->
      <!-- 갈대아 우르 -->
      <circle cx="580" cy="280" r="7" fill="#ef4444"/>
      <text x="545" y="270" fill="#fca5a5" font-size="12" font-weight="bold">1. Ur of Chaldeans</text>
      <text x="545" y="300" fill="#cbd5e1" font-size="10">Called out (Gen 11:31)</text>

      <!-- 바벨론 -->
      <circle cx="480" cy="200" r="5" fill="#94a3b8"/>
      <text x="490" y="195" fill="#cbd5e1" font-size="11">Babylon</text>

      <!-- 하란 -->
      <circle cx="350" cy="95" r="7" fill="#eab308"/>
      <text x="350" y="85" fill="#fef08a" font-size="12" font-weight="bold">2. Haran</text>
      <text x="355" y="115" fill="#cbd5e1" font-size="10">Terah dies / called at 75</text>

      <!-- 다메섹 -->
      <circle cx="230" cy="150" r="4" fill="#64748b"/>
      <text x="238" y="148" fill="#94a3b8" font-size="10">Damascus</text>

      <!-- 가나안 땅 (세겜, 벧엘, 헤브론, 브엘세바) -->
      <rect x="135" y="175" width="85" height="110" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" stroke-dasharray="3,3"/>
      
      <circle cx="182" cy="205" r="5" fill="#10b981"/>
      <text x="110" y="208" fill="#86efac" font-size="11" font-weight="bold">3. Shechem (1st altar)</text>

      <circle cx="180" cy="225" r="5" fill="#10b981"/>
      <text x="115" y="228" fill="#86efac" font-size="11">Bethel (ladder)</text>

      <circle cx="175" cy="250" r="6" fill="#f59e0b"/>
      <text x="100" y="253" fill="#fde68a" font-size="11" font-weight="bold">4. Hebron (Machpelah)</text>

      <circle cx="170" cy="275" r="5" fill="#10b981"/>
      <text x="110" y="278" fill="#86efac" font-size="11">Beersheba (oath well)</text>

      <!-- 애굽 고센 땅 -->
      <circle cx="75" cy="295" r="7" fill="#3b82f6"/>
      <text x="35" y="320" fill="#93c5fd" font-size="12" font-weight="bold">5. Goshen, Egypt</text>
      <text x="35" y="335" fill="#bfdbfe" font-size="10">Joseph rules; 70 move in</text>

      <!-- 범례 박스 -->
      <g transform="translate(420, 20)">
        <rect width="240" height="90" rx="8" fill="#1e293b" opacity="0.9" stroke="#334155"/>
        <text x="15" y="22" fill="#fbbf24" font-size="12" font-weight="bold">4 Key Figures of Genesis</text>
        <circle cx="20" cy="38" r="4" fill="#f59e0b"/>
        <text x="32" y="42" fill="#e2e8f0" font-size="11">Abraham: faith's father & torch covenant</text>
        <circle cx="20" cy="56" r="4" fill="#10b981"/>
        <text x="32" y="60" fill="#e2e8f0" font-size="11">Isaac: Moriah obedience & 100x blessing</text>
        <circle cx="20" cy="74" r="4" fill="#38bdf8"/>
        <text x="32" y="78" fill="#e2e8f0" font-size="11">Jacob·Joseph: Jabbok & saved in Egypt</text>
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
        <text x="15" y="28" fill="#38bdf8" font-size="13" font-weight="bold">🗺️ Exodus & Red Sea Crossing</text>
        
        <!-- 바다 -->
        <path d="M 10,40 L 150,40 Q 120,90 90,130 L 10,130 Z" fill="#0369a1" opacity="0.3"/>
        <text x="30" y="70" fill="#7dd3fc" font-size="11">Mediterranean</text>
        
        <path d="M 60,220 Q 90,260 110,370 L 80,370 Q 70,280 40,240 Z" fill="#0369a1" opacity="0.4"/>
        <path d="M 190,250 Q 200,310 210,370 L 180,370 Q 180,310 170,260 Z" fill="#0369a1" opacity="0.4"/>
        <text x="65" y="320" fill="#7dd3fc" font-size="9">Red Sea (Suez)</text>
        <text x="185" y="320" fill="#7dd3fc" font-size="9">Gulf of Aqaba</text>

        <!-- 이동 경로 -->
        <path d="M 40,110 Q 75,135 95,130 T 110,180 T 140,250 T 155,340" 
              fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- 핀들 -->
        <circle cx="40" cy="110" r="5" fill="#ef4444"/>
        <text x="48" y="108" fill="#fca5a5" font-size="10" font-weight="bold">1. Leave Rameses</text>

        <circle cx="95" cy="130" r="6" fill="#38bdf8"/>
        <text x="105" y="132" fill="#7dd3fc" font-size="10" font-weight="bold">2. Red Sea miracle</text>

        <circle cx="110" cy="180" r="4" fill="#eab308"/>
        <text x="118" y="182" fill="#fde047" font-size="10">3. Marah & Elim</text>

        <circle cx="140" cy="250" r="5" fill="#a855f7"/>
        <text x="148" y="252" fill="#d8b4fe" font-size="10">4. Rock at Rephidim</text>

        <polygon points="155,325 145,345 165,345" fill="#f97316"/>
        <circle cx="155" cy="345" r="5" fill="#ef4444"/>
        <text x="105" y="365" fill="#fb923c" font-size="11" font-weight="bold">5. Sinai (Law·Tabernacle)</text>
      </g>

      <!-- 우측: 시내산 성막(Tabernacle) 입체 배치도 -->
      <g transform="translate(305, 10)">
        <rect width="365" height="380" rx="8" fill="#0b1329" stroke="#d97706" stroke-width="1.5"/>
        <text x="20" y="28" fill="#fbbf24" font-size="14" font-weight="bold">⛺ Floor Plan of the Sinai Tabernacle</text>
        <text x="20" y="46" fill="#94a3b8" font-size="10">The holy tabernacle: in by the east gate, on to God (Exod 25~40)</text>

        <!-- 성막 뜰 외벽 울타리 -->
        <rect x="25" y="60" width="315" height="300" rx="4" fill="#1e293b" opacity="0.6" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6,3"/>
        
        <!-- 동쪽 출입문 -->
        <rect x="335" y="180" width="10" height="60" fill="#3b82f6"/>
        <text x="290" y="215" fill="#60a5fa" font-size="11" font-weight="bold">Gate (east)</text>

        <!-- 뜰 기물: 번제단 & 물두멍 -->
        <g transform="translate(240, 185)">
          <rect x="-20" y="-20" width="40" height="40" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
          <text x="-16" y="5" fill="#fef3c7" font-size="10" font-weight="bold">Altar</text>
          <text x="-25" y="32" fill="#d97706" font-size="9">Sacrifice·blood atonement</text>
        </g>

        <g transform="translate(180, 185)">
          <circle cx="0" cy="0" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          <text x="-12" y="4" fill="#e0f2fe" font-size="10" font-weight="bold">Basin</text>
          <text x="-16" y="26" fill="#38bdf8" font-size="9">Washing·purity</text>
        </g>

        <!-- 성막 본관 (성소 + 지성소) -->
        <rect x="35" y="125" width="115" height="120" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        
        <!-- 지성소 (Holy of Holies) -->
        <rect x="35" y="125" width="45" height="120" fill="#311042" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="40" y="142" fill="#f472b6" font-size="9" font-weight="bold">Holiest</text>

        <!-- 언약궤 & 속죄소 -->
        <rect x="45" y="172" width="22" height="16" fill="#f59e0b" stroke="#fef08a"/>
        <text x="42" y="202" fill="#fde047" font-size="8" font-weight="bold">Ark</text>
        <text x="38" y="215" fill="#fbcfe8" font-size="7">Shekinah</text>

        <!-- 휘장 -->
        <line x1="80" y1="125" x2="80" y2="245" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>

        <!-- 성소 (Holy Place) 기물들 -->
        <text x="85" y="142" fill="#c084fc" font-size="9" font-weight="bold">Holy Place</text>

        <!-- 떡상 (북쪽) -->
        <rect x="95" y="140" width="22" height="12" fill="#eab308"/>
        <text x="96" y="162" fill="#fef08a" font-size="8">Bread (Word)</text>

        <!-- 분향단 (서쪽 휘장 앞) -->
        <rect x="85" y="180" width="12" height="12" fill="#f59e0b"/>
        <text x="80" y="202" fill="#fed7aa" font-size="7">Incense (prayer)</text>

        <!-- 금촛대 (남쪽) -->
        <circle cx="106" cy="225" r="7" fill="#fbbf24"/>
        <text x="90" y="242" fill="#fde68a" font-size="8">Lamp (Spirit)</text>

        <!-- 하단 설명 -->
        <rect x="25" y="325" width="315" height="30" rx="4" fill="#1e293b" opacity="0.8"/>
        <text x="35" y="344" fill="#a7f3d0" font-size="10">Order: Altar (repent)→Basin (clean)→Holy Place (fellowship)→Holiest (presence)</text>
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
      <text x="30" y="40" fill="#fbbf24" font-size="15" font-weight="bold">⚖️ Leviticus: Be holy, for I am holy (Lev 11:45)</text>

      <!-- 상단: 5대 제사 (Five Sacrifices) -->
      <text x="25" y="80" fill="#38bdf8" font-size="13" font-weight="bold">1. The 5 Offerings for Drawing Near to God (Lev 1~7)</text>
      
      <g transform="translate(20, 95)">
        <!-- 번제 -->
        <rect x="0" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
        <text x="12" y="22" fill="#f87171" font-size="12" font-weight="bold">Burnt (Olah)</text>
        <text x="12" y="42" fill="#e2e8f0" font-size="10">Full dedication</text>
        <text x="12" y="60" fill="#94a3b8" font-size="9">All burned up</text>
        <text x="12" y="74" fill="#94a3b8" font-size="9">Sweet aroma</text>

        <!-- 소제 -->
        <rect x="130" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
        <text x="142" y="22" fill="#fde047" font-size="12" font-weight="bold">Grain (Minchah)</text>
        <text x="142" y="42" fill="#e2e8f0" font-size="10">Thanks & loyalty</text>
        <text x="142" y="60" fill="#94a3b8" font-size="9">Fine flour·oil</text>
        <text x="142" y="74" fill="#94a3b8" font-size="9">Bloodless grain gift</text>

        <!-- 화목제 -->
        <rect x="260" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="272" y="22" fill="#6ee7b7" font-size="12" font-weight="bold">Peace (Shelamim)</text>
        <text x="272" y="42" fill="#e2e8f0" font-size="10">Fellowship·peace</text>
        <text x="272" y="60" fill="#94a3b8" font-size="9">With God·neighbor</text>
        <text x="272" y="74" fill="#94a3b8" font-size="9">Shared meal</text>

        <!-- 속죄제 -->
        <rect x="390" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="402" y="22" fill="#93c5fd" font-size="12" font-weight="bold">Sin (Chattat)</text>
        <text x="402" y="42" fill="#e2e8f0" font-size="10">Sin·unknowing sin</text>
        <text x="402" y="60" fill="#94a3b8" font-size="9">Blood at the veil</text>
        <text x="402" y="74" fill="#94a3b8" font-size="9">Cleanses sanctuary</text>

        <!-- 속건제 -->
        <rect x="520" y="0" width="120" height="85" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="532" y="22" fill="#d8b4fe" font-size="12" font-weight="bold">Guilt (Asham)</text>
        <text x="532" y="42" fill="#e2e8f0" font-size="10">Restitution</text>
        <text x="532" y="60" fill="#94a3b8" font-size="9">Holy things·neighbor</text>
        <text x="532" y="74" fill="#94a3b8" font-size="9">Repay + one-fifth</text>
      </g>

      <!-- 하단: 구속사의 파노라마 7대 절기 (Seven Feasts) -->
      <text x="25" y="215" fill="#fbbf24" font-size="13" font-weight="bold">2. Calendar of Redemption: the LORD's 7 Feasts (Lev 23)</text>

      <g transform="translate(20, 230)">
        <!-- 봄 절기 4개 -->
        <rect x="0" y="0" width="310" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="15" y="25" fill="#38bdf8" font-size="12" font-weight="bold">🌱 Spring feasts: Christ's first coming</text>
        
        <text x="15" y="52" fill="#fca5a5" font-size="11" font-weight="bold">1. Passover (1/14)</text>
        <text x="145" y="52" fill="#cbd5e1" font-size="10">→ Lamb's atoning death</text>

        <text x="15" y="78" fill="#fef08a" font-size="11" font-weight="bold">2. Unleavened (1/15~21)</text>
        <text x="145" y="78" fill="#cbd5e1" font-size="10">→ No leaven & tomb rest</text>

        <text x="15" y="104" fill="#86efac" font-size="11" font-weight="bold">3. Firstfruits (Sun.)</text>
        <text x="145" y="104" fill="#cbd5e1" font-size="10">→ Christ, firstfruits, risen</text>

        <text x="15" y="130" fill="#93c5fd" font-size="11" font-weight="bold">4. Weeks/Pentecost (50th)</text>
        <text x="145" y="130" fill="#cbd5e1" font-size="10">→ Spirit comes, church born</text>

        <!-- 가을 절기 3개 -->
        <rect x="330" y="0" width="310" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="345" y="25" fill="#fbbf24" font-size="12" font-weight="bold">🍂 Fall feasts: hope of Christ's return</text>

        <text x="345" y="55" fill="#fde047" font-size="11" font-weight="bold">5. Trumpets (7/1)</text>
        <text x="475" y="55" fill="#cbd5e1" font-size="10">→ Last trumpet & return</text>

        <text x="345" y="85" fill="#f87171" font-size="11" font-weight="bold">6. Atonement (7/10)</text>
        <text x="475" y="85" fill="#cbd5e1" font-size="10">→ National repentance</text>

        <text x="345" y="115" fill="#a7f3d0" font-size="11" font-weight="bold">7. Booths (7/15~22)</text>
        <text x="475" y="115" fill="#cbd5e1" font-size="10">→ New heaven & earth feast</text>
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
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">⛺ Numbers: Twelve Tribes' Camp Around the Tabernacle & 40 Years</text>

      <!-- 중앙: 성막 중심 12지파 진영 (좌측 380x340) -->
      <g transform="translate(25, 45)">
        <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#475569"/>

        <!-- 중앙 성막 -->
        <rect x="140" y="130" width="80" height="80" rx="6" fill="#312e81" stroke="#f59e0b" stroke-width="2"/>
        <text x="155" y="165" fill="#fde68a" font-size="11" font-weight="bold">Tabernacle</text>
        <text x="148" y="185" fill="#93c5fd" font-size="9">God's presence</text>

        <!-- 레위 지파 (내측) -->
        <rect x="150" y="95" width="60" height="25" rx="3" fill="#334155"/>
        <text x="158" y="112" fill="#cbd5e1" font-size="10">Moses·Aaron</text>

        <rect x="150" y="220" width="60" height="25" rx="3" fill="#334155"/>
        <text x="168" y="237" fill="#cbd5e1" font-size="10">Kohath</text>

        <rect x="65" y="155" width="65" height="25" rx="3" fill="#334155"/>
        <text x="75" y="172" fill="#cbd5e1" font-size="10">Gershon</text>

        <rect x="230" y="155" width="65" height="25" rx="3" fill="#334155"/>
        <text x="242" y="172" fill="#cbd5e1" font-size="10">Merari</text>

        <!-- 동쪽 (선봉): 유다, 잇사갈, 스불론 (우측) -->
        <g transform="translate(230, 70)">
          <rect width="120" height="70" rx="4" fill="#065f46" stroke="#10b981"/>
          <text x="10" y="20" fill="#6ee7b7" font-size="11" font-weight="bold">East (vanguard)</text>
          <text x="10" y="38" fill="#fef08a" font-size="11" font-weight="bold">🦁 Judah (74,600)</text>
          <text x="10" y="52" fill="#a7f3d0" font-size="10">Issachar · Zebulun</text>
        </g>

        <!-- 남쪽: 르우벤, 시므온, 갓 (하단) -->
        <g transform="translate(90, 260)">
          <rect width="180" height="65" rx="4" fill="#1e3a8a" stroke="#3b82f6"/>
          <text x="10" y="18" fill="#93c5fd" font-size="10" font-weight="bold">South, 2nd camp: Reuben</text>
          <text x="10" y="34" fill="#e2e8f0" font-size="9">Simeon · Gad (total 151,450)</text>
        </g>

        <!-- 서쪽: 에브라임, 므낫세, 베냐민 (좌측) -->
        <g transform="translate(10, 70)">
          <rect width="120" height="70" rx="4" fill="#831843" stroke="#f43f5e"/>
          <text x="10" y="20" fill="#fda4af" font-size="10" font-weight="bold">West, 3rd camp</text>
          <text x="10" y="36" fill="#e2e8f0" font-size="10">Ephraim</text>
          <text x="10" y="52" fill="#fbcfe8" font-size="9">Manasseh · Benjamin</text>
        </g>

        <!-- 북쪽: 단, 아셀, 납달리 (상단) -->
        <g transform="translate(90, 15)">
          <rect width="180" height="65" rx="4" fill="#713f12" stroke="#eab308"/>
          <text x="10" y="18" fill="#fef08a" font-size="10" font-weight="bold">North, rear guard: Dan</text>
          <text x="10" y="34" fill="#e2e8f0" font-size="9">Asher · Naphtali (total 157,600)</text>
        </g>
      </g>

      <!-- 우측: 40년 광야 여정 요약 카드 (우측 255x340) -->
      <g transform="translate(400, 45)">
        <rect width="255" height="340" rx="8" fill="#1e293b" stroke="#d97706"/>
        <text x="15" y="28" fill="#fbbf24" font-size="13" font-weight="bold">🏜️ Key Lessons of 40 Years</text>
        
        <circle cx="20" cy="55" r="4" fill="#ef4444"/>
        <text x="32" y="58" fill="#fca5a5" font-size="11" font-weight="bold">Taberah & Kibroth Hattaavah</text>
        <text x="32" y="74" fill="#94a3b8" font-size="10">Plague for grumbling and greed</text>

        <circle cx="20" cy="100" r="4" fill="#f59e0b"/>
        <text x="32" y="103" fill="#fde68a" font-size="11" font-weight="bold">Kadesh Barnea unbelief (Num 14)</text>
        <text x="32" y="119" fill="#94a3b8" font-size="10">10 spies' unbelief → 38 years</text>
        <text x="32" y="133" fill="#6ee7b7" font-size="10">Joshua & Caleb proclaim faith</text>

        <circle cx="20" cy="160" r="4" fill="#38bdf8"/>
        <text x="32" y="163" fill="#7dd3fc" font-size="11" font-weight="bold">Bronze serpent (Num 21)</text>
        <text x="32" y="179" fill="#94a3b8" font-size="10">Anyone bitten who looked at</text>
        <text x="32" y="193" fill="#cbd5e1" font-size="10">the serpent on a pole lived (cross)</text>

        <circle cx="20" cy="220" r="4" fill="#10b981"/>
        <text x="32" y="223" fill="#86efac" font-size="11" font-weight="bold">Balaam's plot, Phinehas' zeal</text>
        <text x="32" y="239" fill="#94a3b8" font-size="10">Baal Peor sin, covenant renewed</text>

        <circle cx="20" cy="270" r="4" fill="#a855f7"/>
        <text x="32" y="273" fill="#d8b4fe" font-size="11" font-weight="bold">2nd census on plains of Moab</text>
        <text x="32" y="289" fill="#cbd5e1" font-size="10">New generation, 601,730, ready</text>

        <rect x="15" y="305" width="225" height="24" rx="4" fill="#0f172a"/>
        <text x="25" y="322" fill="#fbbf24" font-size="10">Aaron's blessing: "give you peace"</text>
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
        <text x="25" y="32" fill="#fbbf24" font-size="15" font-weight="bold">📜 Shema Israel (Shema Yisrael - Deut 6:4-5)</text>
        <text x="25" y="56" fill="#fef08a" font-size="13">"Hear, O Israel: The LORD our God is one LORD:</text>
        <text x="25" y="70" fill="#a7f3d0" font-size="11">And thou shalt love the LORD thy God with all thine heart, soul, and might"</text>
      </g>

      <!-- 중앙 3개 영역: 모세 3대 설교 구조 -->
      <g transform="translate(20, 105)">
        <rect x="0" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#38bdf8"/>
        <text x="15" y="25" fill="#38bdf8" font-size="12" font-weight="bold">Sermon 1 (ch. 1~4)</text>
        <text x="15" y="45" fill="#fde68a" font-size="11">Looking back on 40 years</text>
        <text x="15" y="70" fill="#cbd5e1" font-size="10">• Kadesh Barnea disobedience</text>
        <text x="15" y="90" fill="#cbd5e1" font-size="10">• God's faithful protection</text>
        <text x="15" y="110" fill="#cbd5e1" font-size="10">• Urged to keep the law</text>

        <rect x="220" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#10b981"/>
        <text x="235" y="25" fill="#34d399" font-size="12" font-weight="bold">Sermon 2 (ch. 5~26)</text>
        <text x="235" y="45" fill="#fde68a" font-size="11">Detailed exposition of law</text>
        <text x="235" y="70" fill="#cbd5e1" font-size="10">• Ten Commandments again</text>
        <text x="235" y="90" fill="#cbd5e1" font-size="10">• Shema & teaching children</text>
        <text x="235" y="110" fill="#cbd5e1" font-size="10">• Tithes, feasts, civil laws</text>

        <rect x="440" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="455" y="25" fill="#fbbf24" font-size="12" font-weight="bold">Sermon 3 (ch. 27~30)</text>
        <text x="455" y="45" fill="#fde68a" font-size="11">Covenant renewed & blessing/curse</text>
        <text x="455" y="70" fill="#cbd5e1" font-size="10">• Gerizim and Ebal proclaimed</text>
        <text x="455" y="90" fill="#cbd5e1" font-size="10">• Deut 28 blessing and curse</text>
        <text x="455" y="110" fill="#cbd5e1" font-size="10">• 'Choose life and blessing'</text>
      </g>

      <!-- 하단: 그리심산 축복 vs 에발산 저주 다이어그램 -->
      <g transform="translate(20, 270)">
        <rect width="640" height="115" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        
        <!-- 좌측: 그리심산 (축복) -->
        <g transform="translate(25, 15)">
          <polygon points="50,15 10,75 90,75" fill="#047857"/>
          <text x="20" y="92" fill="#6ee7b7" font-size="12" font-weight="bold">Gerizim (blessing)</text>
          <text x="105" y="35" fill="#e2e8f0" font-size="11">Obey: blessed coming in, blessed going out</text>
          <text x="105" y="55" fill="#cbd5e1" font-size="10">A priestly nation above all nations</text>
        </g>

        <!-- 우측: 에발산 (저주) -->
        <g transform="translate(350, 15)">
          <polygon points="50,15 10,75 90,75" fill="#b91c1c"/>
          <text x="20" y="92" fill="#fca5a5" font-size="12" font-weight="bold">Ebal (curse)</text>
          <text x="105" y="35" fill="#e2e8f0" font-size="11">Disobey: disaster, defeat, scattering</text>
          <text x="105" y="55" fill="#cbd5e1" font-size="10">Theological yardstick for Judg~Kgs</text>
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
      <text x="25" y="50" fill="#38bdf8" font-size="13" font-weight="bold">Mediterranean</text>

      <!-- 갈릴리 호수, 요단강, 사해 -->
      <ellipse cx="370" cy="65" rx="14" ry="18" fill="#38bdf8"/>
      <line x1="370" y1="83" x2="360" y2="200" stroke="#38bdf8" stroke-width="3"/>
      <ellipse cx="355" cy="265" rx="18" ry="60" fill="#38bdf8"/>
      <text x="380" y="270" fill="#7dd3fc" font-size="11">Dead Sea</text>

      <!-- 1. 중부 작전 (요단강 도하 → 길갈 → 여리고 → 아이) -->
      <path d="M 420,200 L 375,200 L 340,195 L 305,185" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="375" cy="200" r="5" fill="#3b82f6"/>
      <text x="360" y="218" fill="#93c5fd" font-size="10">Gilgal camp</text>

      <circle cx="340" cy="195" r="6" fill="#ef4444"/>
      <text x="315" y="210" fill="#fca5a5" font-size="11" font-weight="bold">Jericho falls</text>

      <circle cx="305" cy="185" r="5" fill="#f59e0b"/>
      <text x="270" y="180" fill="#fde68a" font-size="10">Ai</text>

      <!-- 2. 남부 작전 (기브온 → 아얄론 골짜기 태양 기적 → 막게다) -->
      <path d="M 305,185 L 285,210 L 260,250 L 290,290" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="285" cy="210" r="6" fill="#eab308"/>
      <text x="200" y="215" fill="#fef08a" font-size="11" font-weight="bold">Gibeon (sun stood)</text>

      <circle cx="290" cy="290" r="5" fill="#f97316"/>
      <text x="240" y="295" fill="#fed7aa" font-size="10">Hebron taken</text>

      <!-- 3. 북부 작전 (메롬 물가 → 하솔) -->
      <path d="M 375,200 L 360,110 L 340,65" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="340" cy="65" r="7" fill="#10b981"/>
      <text x="275" y="65" fill="#6ee7b7" font-size="11" font-weight="bold">Merom & Hazor</text>

      <!-- 12지파 영역 간략 텍스트 배치 -->
      <text x="310" y="30" fill="#a7f3d0" font-size="10">Naphtali · Asher</text>
      <text x="260" y="100" fill="#a7f3d0" font-size="10">Zebulun · Issachar</text>
      <text x="240" y="140" fill="#fef08a" font-size="11" font-weight="bold">Manasseh</text>
      <text x="240" y="170" fill="#fef08a" font-size="11" font-weight="bold">Ephraim</text>
      <text x="280" y="235" fill="#bae6fd" font-size="10">Benjamin · Dan</text>
      <text x="250" y="330" fill="#fca5a5" font-size="12" font-weight="bold">Judah (Caleb, Hebron)</text>
      <text x="230" y="370" fill="#fca5a5" font-size="10">Simeon</text>
      <text x="400" y="160" fill="#d8b4fe" font-size="10">East: Reuben · Gad · ½ Manasseh</text>

      <!-- 범례 박스 -->
      <g transform="translate(430, 20)">
        <rect width="230" height="110" rx="8" fill="#1e293b" opacity="0.9" stroke="#475569"/>
        <text x="15" y="22" fill="#fbbf24" font-size="12" font-weight="bold">Joshua's 3 Campaigns</text>
        <line x1="15" y1="40" x2="40" y2="40" stroke="#ef4444" stroke-width="3"/>
        <text x="50" y="44" fill="#fca5a5" font-size="11">1. Center: cut in two</text>
        <line x1="15" y1="65" x2="40" y2="65" stroke="#f59e0b" stroke-width="3"/>
        <text x="50" y="69" fill="#fde68a" font-size="11">2. South: 5 kings beaten</text>
        <line x1="15" y1="90" x2="40" y2="90" stroke="#10b981" stroke-width="3"/>
        <text x="50" y="94" fill="#86efac" font-size="11">3. North: Hazor, Jabin</text>
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
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">🔄 Judges: 5-Step Vicious Cycle of the Dark Age & the Major Judges</text>

      <!-- 좌측: 원형 순환 사이클 (지름 280) -->
      <g transform="translate(160, 215)">
        <!-- 원형 궤도 -->
        <circle cx="0" cy="0" r="110" fill="none" stroke="#475569" stroke-width="6" stroke-dasharray="6,4"/>

        <!-- 1. 범죄/배교 (12시) -->
        <g transform="translate(0, -110)">
          <circle cx="0" cy="0" r="28" fill="#dc2626"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1. Sin</text>
          <text x="0" y="12" text-anchor="middle" fill="#fecaca" font-size="8">Baal worship</text>
        </g>

        <!-- 2. 징계/침략 (3시) -->
        <g transform="translate(105, -35)">
          <circle cx="0" cy="0" r="28" fill="#ea580c"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2. Discipline</text>
          <text x="0" y="12" text-anchor="middle" fill="#fed7aa" font-size="8">Foreign oppression</text>
        </g>

        <!-- 3. 부르짖음 (5시) -->
        <g transform="translate(65, 90)">
          <circle cx="0" cy="0" r="28" fill="#ca8a04"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3. Cry out</text>
          <text x="0" y="12" text-anchor="middle" fill="#fef08a" font-size="8">Pleading in pain</text>
        </g>

        <!-- 4. 구원/사사 파견 (7시) -->
        <g transform="translate(-65, 90)">
          <circle cx="0" cy="0" r="28" fill="#16a34a"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4. Rescue</text>
          <text x="0" y="12" text-anchor="middle" fill="#bbf7d0" font-size="8">God raises a judge</text>
        </g>

        <!-- 5. 평화/안식 (9시) -->
        <g transform="translate(-105, -35)">
          <circle cx="0" cy="0" r="28" fill="#2563eb"/>
          <text x="0" y="-3" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">5. Peace</text>
          <text x="0" y="12" text-anchor="middle" fill="#bfdbfe" font-size="8">40 years of rest</text>
        </g>

        <!-- 중앙 탄식 구절 -->
        <text x="0" y="-8" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">"Everyone did</text>
        <text x="0" y="10" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">what was right</text>
        <text x="0" y="28" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">in his own eyes"</text>
      </g>

      <!-- 우측: 주요 사사들과 활동 지역 카드 -->
      <g transform="translate(340, 55)">
        <rect width="320" height="325" rx="8" fill="#1e293b" stroke="#334155"/>
        <text x="20" y="28" fill="#38bdf8" font-size="13" font-weight="bold">⚔️ Deliverances of the Major Judges</text>

        <rect x="15" y="45" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="63" fill="#fde047" font-size="11" font-weight="bold">Othniel (1st)</text>
        <text x="140" y="63" fill="#cbd5e1" font-size="10">Beat Cushan-rishathaim</text>
        <text x="25" y="78" fill="#94a3b8" font-size="9">Son of Kenaz, Caleb's brother (40 yrs rest)</text>

        <rect x="15" y="95" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="113" fill="#6ee7b7" font-size="11" font-weight="bold">Ehud (left-handed)</text>
        <text x="140" y="113" fill="#cbd5e1" font-size="10">Killed Eglon of Moab (80 yrs)</text>
        <text x="25" y="128" fill="#94a3b8" font-size="9">Warrior of Benjamin</text>

        <rect x="15" y="145" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="163" fill="#f472b6" font-size="11" font-weight="bold">Deborah & Barak</text>
        <text x="140" y="163" fill="#cbd5e1" font-size="10">Beat Sisera of Canaan</text>
        <text x="25" y="178" fill="#94a3b8" font-size="9">Victory at Tabor & song of the prophetess</text>

        <rect x="15" y="195" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="213" fill="#38bdf8" font-size="11" font-weight="bold">Gideon (300 men)</text>
        <text x="140" y="213" fill="#cbd5e1" font-size="10">Routed 135,000 Midianites</text>
        <text x="25" y="228" fill="#94a3b8" font-size="9">Jars, torches, and trumpets</text>

        <rect x="15" y="245" width="290" height="42" rx="4" fill="#0f172a"/>
        <text x="25" y="263" fill="#c084fc" font-size="11" font-weight="bold">Samson (Nazirite)</text>
        <text x="140" y="263" fill="#cbd5e1" font-size="10">Toppled Philistine temple</text>
        <text x="25" y="278" fill="#94a3b8" font-size="9">Killed more in death than in life</text>
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
      <text x="25" y="32" fill="#fbbf24" font-size="14" font-weight="bold">🌾 Ruth: Hesed Love & the Kinsman-Redeemer (Goel) Line</text>

      <!-- 좌측 모압~베들레헴 여정 요약 (260x320) -->
      <g transform="translate(25, 50)">
        <rect width="250" height="330" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="28" fill="#fde68a" font-size="12" font-weight="bold">From Moab to Bethlehem</text>
        
        <rect x="15" y="45" width="220" height="60" rx="4" fill="#0f172a"/>
        <text x="25" y="65" fill="#fca5a5" font-size="11" font-weight="bold">Tragedy in Moab</text>
        <text x="25" y="82" fill="#94a3b8" font-size="10">Elimelech, Mahlon, Chilion die</text>
        <text x="25" y="96" fill="#94a3b8" font-size="9">Widowed Naomi, two daughters-in-law</text>

        <rect x="15" y="115" width="220" height="65" rx="4" fill="#0f172a"/>
        <text x="25" y="135" fill="#6ee7b7" font-size="11" font-weight="bold">Ruth's confession (Ruth 1:16)</text>
        <text x="25" y="152" fill="#cbd5e1" font-size="10">"Your people shall be my people,</text>
        <text x="25" y="168" fill="#cbd5e1" font-size="10">and your God my God!"</text>

        <rect x="15" y="190" width="220" height="65" rx="4" fill="#0f172a"/>
        <text x="25" y="210" fill="#93c5fd" font-size="11" font-weight="bold">Gracious meeting with Boaz</text>
        <text x="25" y="227" fill="#cbd5e1" font-size="10">Gleaning in Bethlehem barley</text>
        <text x="25" y="243" fill="#cbd5e1" font-size="10">Boaz, a mighty kinsman, protects</text>

        <rect x="15" y="265" width="220" height="50" rx="4" fill="#064e3b"/>
        <text x="25" y="285" fill="#a7f3d0" font-size="11" font-weight="bold">Goel settled at the gate</text>
        <text x="25" y="302" fill="#6ee7b7" font-size="10">Sandal off: redemption sealed</text>
      </g>

      <!-- 우측 고엘 구속사 계보 트리 (360x330) -->
      <g transform="translate(295, 50)">
        <rect width="360" height="330" rx="8" fill="#1e1b4b" stroke="#a855f7"/>
        <text x="20" y="28" fill="#e9d5ff" font-size="13" font-weight="bold">👑 The Line to King David and Jesus Christ</text>

        <!-- 스텝 노드들 -->
        <g transform="translate(30, 50)">
          <!-- 1. 살몬 & 라합 -->
          <rect x="0" y="0" width="300" height="40" rx="6" fill="#1e293b" stroke="#3b82f6"/>
          <text x="15" y="25" fill="#93c5fd" font-size="11" font-weight="bold">Salmon + Rahab (Jericho's woman of faith)</text>

          <line x1="150" y1="40" x2="150" y2="60" stroke="#f59e0b" stroke-width="2"/>

          <!-- 2. 보아스 & 룻 -->
          <rect x="0" y="60" width="300" height="45" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
          <text x="15" y="83" fill="#86efac" font-size="12" font-weight="bold">Boaz + Ruth (Moabite foreigner)</text>
          <text x="15" y="98" fill="#bbf7d0" font-size="9">The kinsman-redeemer (Goel) covenant fulfilled</text>

          <line x1="150" y1="105" x2="150" y2="125" stroke="#f59e0b" stroke-width="2"/>

          <!-- 3. 오벳 -->
          <rect x="30" y="125" width="240" height="35" rx="6" fill="#1e293b" stroke="#eab308"/>
          <text x="80" y="147" fill="#fef08a" font-size="11" font-weight="bold">Obed - in Naomi's arms</text>

          <line x1="150" y1="160" x2="150" y2="175" stroke="#f59e0b" stroke-width="2"/>

          <!-- 4. 이새 -->
          <rect x="50" y="175" width="200" height="30" rx="6" fill="#1e293b" stroke="#f59e0b"/>
          <text x="100" y="195" fill="#fed7aa" font-size="11">Jesse</text>

          <line x1="150" y1="205" x2="150" y2="220" stroke="#f59e0b" stroke-width="2"/>

          <!-- 5. 다윗 왕 -->
          <rect x="20" y="220" width="260" height="35" rx="6" fill="#78350f" stroke="#fbbf24" stroke-width="2"/>
          <text x="65" y="242" fill="#fde68a" font-size="12" font-weight="bold">👑 King David</text>

          <!-- 6. 최종 성취 예수 그리스도 -->
          <rect x="0" y="265" width="300" height="30" rx="6" fill="#311042" stroke="#ec4899"/>
          <text x="40" y="285" fill="#f472b6" font-size="11" font-weight="bold">✝️ Jesus Christ, our Redeemer (Matt 1:5)</text>
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
      <text x="20" y="50" fill="#38bdf8" font-size="13" font-weight="bold">Mediterranean</text>

      <!-- 요단강과 사해 -->
      <ellipse cx="280" cy="80" rx="10" ry="12" fill="#38bdf8"/>
      <line x1="280" y1="92" x2="275" y2="180" stroke="#38bdf8" stroke-width="2.5"/>
      <ellipse cx="270" cy="250" rx="16" ry="60" fill="#38bdf8"/>
      <text x="295" y="255" fill="#7dd3fc" font-size="11">Dead Sea (Salt Sea)</text>

      <!-- 다윗의 도피 경로 선 -->
      <path d="M 215,165 L 210,150 L 225,175 L 145,210 L 185,225 L 265,260 L 220,290 L 140,320" 
            fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>

      <!-- 1. 기브아 (사울 왕궁) -->
      <circle cx="215" cy="165" r="6" fill="#ef4444"/>
      <text x="140" y="160" fill="#fca5a5" font-size="11" font-weight="bold">Gibeah (Saul's palace)</text>

      <!-- 2. 라마 나욧 -->
      <circle cx="210" cy="150" r="5" fill="#a855f7"/>
      <text x="145" y="145" fill="#d8b4fe" font-size="10">Ramah (to Samuel)</text>

      <!-- 3. 놉 (제사장 진설병) -->
      <circle cx="225" cy="175" r="5" fill="#3b82f6"/>
      <text x="235" y="175" fill="#93c5fd" font-size="10">Nob (Goliath's sword)</text>

      <!-- 4. 가드 (블레셋 미친 체함) -->
      <circle cx="145" cy="210" r="6" fill="#eab308"/>
      <text x="80" y="210" fill="#fef08a" font-size="10">Gath (before Achish)</text>

      <!-- 5. 아둘람 굴 -->
      <circle cx="185" cy="225" r="7" fill="#10b981"/>
      <text x="110" y="235" fill="#86efac" font-size="11" font-weight="bold">Cave of Adullam (400 in distress)</text>

      <!-- 6. 엔게디 요새 -->
      <circle cx="265" cy="260" r="7" fill="#ec4899"/>
      <text x="280" y="260" fill="#f472b6" font-size="11" font-weight="bold">En Gedi (Saul's robe)</text>

      <!-- 7. 헤브론 (7년 반 통치) -->
      <circle cx="205" cy="265" r="8" fill="#f59e0b"/>
      <text x="150" y="270" fill="#fde68a" font-size="12" font-weight="bold">Hebron</text>

      <!-- 8. 시온 산성 예루살렘 (통일왕국 수도) -->
      <circle cx="220" cy="190" r="8" fill="#e11d48"/>
      <text x="235" y="195" fill="#fb7185" font-size="13" font-weight="bold">Jerusalem (capital)</text>

      <!-- 우측 다윗 언약 카드 -->
      <g transform="translate(390, 20)">
        <rect width="270" height="360" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="15" y="28" fill="#fbbf24" font-size="13" font-weight="bold">👑 Davidic Covenant (2 Samuel 7)</text>
        
        <text x="15" y="55" fill="#e2e8f0" font-size="11">"Your house and your kingdom shall be</text>
        <text x="15" y="72" fill="#e2e8f0" font-size="11">made sure forever before you; your throne</text>
        <text x="15" y="89" fill="#fde047" font-size="12" font-weight="bold">shall be established forever!" (2 Sam 7:16)</text>

        <line x1="15" y1="105" x2="255" y2="105" stroke="#475569"/>

        <text x="15" y="130" fill="#38bdf8" font-size="12" font-weight="bold">Gifts of David's 10-year trial:</text>
        <text x="15" y="152" fill="#cbd5e1" font-size="10">• Never harm the anointed one</text>
        <text x="15" y="170" fill="#cbd5e1" font-size="10">• 73 psalms born in suffering</text>
        <text x="15" y="188" fill="#cbd5e1" font-size="10">• 400 in distress → loyal men</text>

        <line x1="15" y1="210" x2="255" y2="210" stroke="#475569"/>

        <text x="15" y="235" fill="#f87171" font-size="12" font-weight="bold">David's sin with Bathsheba:</text>
        <text x="15" y="257" fill="#cbd5e1" font-size="10">• Nathan's parable rebuke</text>
        <text x="15" y="275" fill="#cbd5e1" font-size="10">• Ps 51, tearful repentance</text>
        <text x="15" y="293" fill="#cbd5e1" font-size="10">• Absalom's revolt, family tragedy</text>

        <rect x="15" y="315" width="240" height="32" rx="4" fill="#0f172a"/>
        <text x="25" y="335" fill="#a7f3d0" font-size="10">After God's heart: total repentance</text>
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
      <text x="30" y="60" fill="#38bdf8" font-size="14" font-weight="bold">Mediterranean</text>

      <!-- 갈릴리, 요단강, 사해 -->
      <ellipse cx="370" cy="70" rx="15" ry="20" fill="#0ea5e9" opacity="0.7"/>
      <text x="395" y="75" fill="#7dd3fc" font-size="11">Galilee</text>

      <path d="M 370,90 Q 365,160 360,200" stroke="#0ea5e9" stroke-width="3" fill="none"/>
      <ellipse cx="360" cy="275" rx="20" ry="65" fill="#0ea5e9" opacity="0.7"/>
      <text x="390" y="285" fill="#7dd3fc" font-size="12">Dead Sea</text>

      <!-- 북이스라엘 영역 (상단 에메랄드/그린 톤) -->
      <path d="M 180,30 L 450,30 L 430,190 L 170,190 Z" fill="#10b981" opacity="0.15" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="200" y="80" fill="#34d399" font-size="16" font-weight="bold">Northern Israel (10 tribes)</text>
      <text x="200" y="100" fill="#a7f3d0" font-size="11">Capital: Samaria | Jeroboam + 18 kings (good kings: 0)</text>
      <text x="200" y="118" fill="#fda4af" font-size="10">Fell to Shalmaneser of Assyria, B.C. 722</text>

      <!-- 북이스라엘 거점 -->
      <circle cx="380" cy="35" r="5" fill="#f43f5e"/>
      <text x="390" y="40" fill="#fda4af" font-size="10">Dan (calf)</text>

      <circle cx="210" cy="105" r="6" fill="#eab308"/>
      <text x="135" y="100" fill="#fef08a" font-size="11" font-weight="bold">Carmel (Elijah vs Baal)</text>

      <circle cx="280" cy="140" r="7" fill="#10b981"/>
      <text x="295" y="145" fill="#6ee7b7" font-size="12" font-weight="bold">Samaria (capital)</text>

      <circle cx="310" cy="180" r="5" fill="#f43f5e"/>
      <text x="320" y="185" fill="#fda4af" font-size="10">Bethel (calf)</text>

      <!-- 남유다 영역 (하단 골드/오렌지 톤) -->
      <path d="M 160,195 L 430,195 L 410,380 L 130,380 Z" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="180" y="240" fill="#fbbf24" font-size="16" font-weight="bold">Southern Judah (2 tribes)</text>
      <text x="180" y="260" fill="#fde68a" font-size="11">Capital: Jerusalem (Solomon's temple) | 20 Davidic kings</text>
      <text x="180" y="278" fill="#cbd5e1" font-size="10">Fell to Nebuchadnezzar, B.C. 586 (70 yrs Exile)</text>

      <!-- 남유다 거점 -->
      <circle cx="310" cy="215" r="8" fill="#f59e0b"/>
      <text x="215" y="220" fill="#fbbf24" font-size="13" font-weight="bold">Jerusalem (temple)</text>

      <circle cx="280" cy="285" r="5" fill="#eab308"/>
      <text x="230" y="290" fill="#fde047" font-size="11">Hebron</text>

      <circle cx="230" cy="340" r="5" fill="#eab308"/>
      <text x="175" y="345" fill="#fde047" font-size="11">Beersheba</text>

      <!-- 우측 선지자 활동 범례 -->
      <g transform="translate(460, 25)">
        <rect width="205" height="350" rx="8" fill="#1e293b" stroke="#475569"/>
        <text x="15" y="26" fill="#fbbf24" font-size="12" font-weight="bold">Prophets of the Kings</text>
        
        <text x="15" y="55" fill="#34d399" font-size="11" font-weight="bold">Prophets of the north:</text>
        <text x="15" y="75" fill="#cbd5e1" font-size="10">• Elijah (beat 850 at Carmel)</text>
        <text x="15" y="93" fill="#cbd5e1" font-size="10">• Elisha (double portion)</text>
        <text x="15" y="111" fill="#cbd5e1" font-size="10">• Amos (justice like waters)</text>
        <text x="15" y="129" fill="#cbd5e1" font-size="10">• Hosea (love never gives up)</text>

        <line x1="15" y1="145" x2="190" y2="145" stroke="#475569"/>

        <text x="15" y="170" fill="#fbbf24" font-size="11" font-weight="bold">Prophets of the south:</text>
        <text x="15" y="190" fill="#cbd5e1" font-size="10">• Isaiah (suffering servant)</text>
        <text x="15" y="208" fill="#cbd5e1" font-size="10">• Micah (born in Bethlehem)</text>
        <text x="15" y="226" fill="#cbd5e1" font-size="10">• Jeremiah (tears, new covenant)</text>
        <text x="15" y="244" fill="#cbd5e1" font-size="10">• Habakkuk (just live by faith)</text>
        <text x="15" y="262" fill="#cbd5e1" font-size="10">• Zephaniah (day of the LORD)</text>

        <rect x="15" y="290" width="175" height="45" rx="4" fill="#0f172a"/>
        <text x="22" y="308" fill="#fca5a5" font-size="9">Chronicles: David's line & temple,</text>
        <text x="22" y="324" fill="#fde68a" font-size="9">covenant kept by restored worship</text>
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
        <text x="20" y="28" fill="#fbbf24" font-size="13" font-weight="bold">🏛️ The 70-Year Babylonian Exile and the Three Returns Under Cyrus' Decree</text>

        <!-- 1차 귀환 -->
        <rect x="20" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#3b82f6"/>
        <text x="30" y="68" fill="#93c5fd" font-size="12" font-weight="bold">1st Return (B.C. 537)</text>
        <text x="30" y="88" fill="#e2e8f0" font-size="11">• Leaders: Zerubbabel & Jeshua</text>
        <text x="30" y="106" fill="#cbd5e1" font-size="10">• About 50,000 return</text>
        <text x="30" y="124" fill="#fde047" font-size="10">• Task: temple rebuilt</text>

        <!-- 2차 귀환 -->
        <rect x="228" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#10b981"/>
        <text x="238" y="68" fill="#6ee7b7" font-size="12" font-weight="bold">2nd Return (B.C. 458)</text>
        <text x="238" y="88" fill="#e2e8f0" font-size="11">• Leader: Ezra the scribe</text>
        <text x="238" y="106" fill="#cbd5e1" font-size="10">• About 1,754 people</text>
        <text x="238" y="124" fill="#86efac" font-size="10">• Task: law & revival</text>

        <!-- 3차 귀환 -->
        <rect x="435" y="45" width="195" height="95" rx="6" fill="#0f172a" stroke="#ec4899"/>
        <text x="445" y="68" fill="#f472b6" font-size="12" font-weight="bold">3rd Return (B.C. 444)</text>
        <text x="445" y="88" fill="#e2e8f0" font-size="11">• Leader: Gov. Nehemiah</text>
        <text x="445" y="106" fill="#cbd5e1" font-size="10">• Task: wall in 52 days</text>
        <text x="445" y="124" fill="#fbcfe8" font-size="10">• Ezra's Water Gate meeting</text>
      </g>

      <!-- 하단: 느헤미야 예루살렘 성벽 & 10개 성문 배치도 -->
      <g transform="translate(15, 185)">
        <rect width="650" height="200" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="20" y="25" fill="#a5b4fc" font-size="13" font-weight="bold">🛡️ Nehemiah's 52-Day Jerusalem Wall & Its 10 Gates (Neh 3)</text>

        <!-- 성벽 다각형 -->
        <polygon points="120,45 220,45 270,90 280,140 230,180 150,180 100,130 90,80" 
                 fill="#312e81" stroke="#fbbf24" stroke-width="3"/>
        <text x="165" y="115" fill="#fef08a" font-size="12" font-weight="bold">Inside Jerusalem</text>
        <text x="160" y="132" fill="#cbd5e1" font-size="10">Temple & City of David</text>

        <!-- 성문들 핀 & 라벨 -->
        <circle cx="170" cy="45" r="4" fill="#ef4444"/>
        <text x="155" y="40" fill="#fca5a5" font-size="9" font-weight="bold">Sheep Gate</text>

        <circle cx="120" cy="45" r="4" fill="#38bdf8"/>
        <text x="75" y="40" fill="#93c5fd" font-size="9">Fish Gate</text>

        <circle cx="90" cy="80" r="4" fill="#cbd5e1"/>
        <text x="45" y="82" fill="#cbd5e1" font-size="9">Old Gate</text>

        <circle cx="100" cy="130" r="4" fill="#cbd5e1"/>
        <text x="35" y="132" fill="#cbd5e1" font-size="9">Valley Gate</text>

        <circle cx="150" cy="180" r="4" fill="#a855f7"/>
        <text x="135" y="195" fill="#d8b4fe" font-size="9">Dung Gate</text>

        <circle cx="230" cy="180" r="4" fill="#10b981"/>
        <text x="235" y="195" fill="#86efac" font-size="9">Fountain Gate</text>

        <!-- 핵심: 수문 (Water Gate) -->
        <circle cx="280" cy="140" r="6" fill="#fbbf24"/>
        <text x="290" y="145" fill="#fef08a" font-size="10" font-weight="bold">★ Water Gate (Ezra's Bible conference)</text>

        <circle cx="270" cy="90" r="4" fill="#cbd5e1"/>
        <text x="280" y="92" fill="#cbd5e1" font-size="9">Horse Gate</text>

        <circle cx="220" cy="45" r="4" fill="#cbd5e1"/>
        <text x="230" y="40" fill="#cbd5e1" font-size="9">East Gate</text>

        <!-- 설명 박스 -->
        <g transform="translate(320, 45)">
          <rect width="310" height="135" rx="6" fill="#0f172a" stroke="#475569"/>
          <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">Ezra's Bible course at the Water Gate (Neh 8):</text>
          <text x="15" y="42" fill="#e2e8f0" font-size="10">• All who could understand listened from dawn to noon</text>
          <text x="15" y="60" fill="#e2e8f0" font-size="10">• Levites read God's law and explained the meaning</text>
          <text x="15" y="78" fill="#e2e8f0" font-size="10">• All wept and repented: a model of Bible reading</text>
          <text x="15" y="98" fill="#6ee7b7" font-size="10">• "The joy of the LORD is your strength!"</text>
          <text x="15" y="118" fill="#fbcfe8" font-size="10">• Kept the Feast of Booths: renewal of faith</text>
        </g>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 12. 시가서 5대 기둥 (욥기, 시편, 잠언, 전도서, 아가) SVG
// ----------------------------------------------------------------------------
function renderWisdomPoetrySvg(book) {
  const currentName = book ? book.name : "Poetry & Wisdom";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>

      <text x="25" y="32" fill="#fbbf24" font-size="14" font-weight="bold">🏛️ Five Pillars of Poetry (Wisdom): the Height of a Life That Fears God</text>
      <text x="25" y="52" fill="#94a3b8" font-size="11">Current book: [${currentName}] - suffering, praise, wisdom, life's vanity, and a song of holy love</text>

      <g transform="translate(15, 70)">
        <!-- 1. 욥기 -->
        <rect x="0" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === 'Job' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === 'Job' ? '3' : '1'}"/>
        <rect x="0" y="0" width="122" height="32" rx="6" fill="#b91c1c"/>
        <text x="61" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Job</text>
        <text x="10" y="52" fill="#fca5a5" font-size="11" font-weight="bold">Suffering & awe</text>
        <text x="10" y="75" fill="#cbd5e1" font-size="10">• Suffering w/o cause</text>
        <text x="10" y="93" fill="#cbd5e1" font-size="10">• Friends condemn</text>
        <text x="10" y="111" fill="#cbd5e1" font-size="10">• Wisdom in storm</text>
        <text x="10" y="135" fill="#cbd5e1" font-size="10">• "After He tries me,</text>
        <text x="10" y="152" fill="#cbd5e1" font-size="10">I'll come out as gold"</text>
        <rect x="8" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="61" y="262" text-anchor="middle" fill="#fbbf24" font-size="10">Sovereign faith</text>

        <!-- 2. 시편 -->
        <rect x="132" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === 'Psalms' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === 'Psalms' ? '3' : '1'}"/>
        <rect x="132" y="0" width="122" height="32" rx="6" fill="#0284c7"/>
        <text x="193" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Psalms</text>
        <text x="142" y="52" fill="#7dd3fc" font-size="11" font-weight="bold">Praise & prayer</text>
        <text x="142" y="75" fill="#cbd5e1" font-size="10">• 150 in 5 books</text>
        <text x="142" y="93" fill="#cbd5e1" font-size="10">• Like Pentateuch</text>
        <text x="142" y="111" fill="#cbd5e1" font-size="10">• Lament·repent·thanks</text>
        <text x="142" y="135" fill="#cbd5e1" font-size="10">• The blessed man</text>
        <text x="142" y="152" fill="#cbd5e1" font-size="10">• Hallelujah chorus</text>
        <rect x="140" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="193" y="262" text-anchor="middle" fill="#38bdf8" font-size="10">Worship & fellowship</text>

        <!-- 3. 잠언 -->
        <rect x="264" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === 'Proverbs' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === 'Proverbs' ? '3' : '1'}"/>
        <rect x="264" y="0" width="122" height="32" rx="6" fill="#059669"/>
        <text x="325" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Proverbs</text>
        <text x="274" y="52" fill="#6ee7b7" font-size="11" font-weight="bold">Wisdom & life</text>
        <text x="274" y="75" fill="#cbd5e1" font-size="10">• Fear of the LORD:</text>
        <text x="274" y="93" fill="#cbd5e1" font-size="10">knowledge's root (1:7)</text>
        <text x="274" y="111" fill="#cbd5e1" font-size="10">• Power of the tongue</text>
        <text x="274" y="135" fill="#cbd5e1" font-size="10">• Honest gain & work</text>
        <text x="274" y="152" fill="#cbd5e1" font-size="10">• Noble wife (ch. 31)</text>
        <rect x="272" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="325" y="262" text-anchor="middle" fill="#34d399" font-size="10">Holy daily ethics</text>

        <!-- 4. 전도서 -->
        <rect x="396" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === 'Ecclesiastes' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === 'Ecclesiastes' ? '3' : '1'}"/>
        <rect x="396" y="0" width="122" height="32" rx="6" fill="#d97706"/>
        <text x="457" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Ecclesiastes</text>
        <text x="406" y="52" fill="#fde68a" font-size="11" font-weight="bold">Eternity & duty</text>
        <text x="406" y="75" fill="#cbd5e1" font-size="10">• All vanity under sun</text>
        <text x="406" y="93" fill="#cbd5e1" font-size="10">• A time for all (ch. 3)</text>
        <text x="406" y="111" fill="#cbd5e1" font-size="10">• Remember Creator</text>
        <text x="406" y="135" fill="#cbd5e1" font-size="10">• The end: fear God,</text>
        <text x="406" y="152" fill="#cbd5e1" font-size="10">keep His commands</text>
        <rect x="404" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="457" y="262" text-anchor="middle" fill="#fde047" font-size="10">True view of life</text>

        <!-- 5. 아가서 -->
        <rect x="528" y="0" width="122" height="290" rx="6" fill="#1e293b" stroke="${currentName === 'Song of Songs' ? '#f59e0b' : '#475569'}" stroke-width="${currentName === 'Song of Songs' ? '3' : '1'}"/>
        <rect x="528" y="0" width="122" height="32" rx="6" fill="#db2777"/>
        <text x="589" y="21" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Song of Songs</text>
        <text x="538" y="52" fill="#f472b6" font-size="11" font-weight="bold">Pure love</text>
        <text x="538" y="75" fill="#cbd5e1" font-size="10">• Solomon/Shulammite</text>
        <text x="538" y="93" fill="#cbd5e1" font-size="10">• Holy married love</text>
        <text x="538" y="111" fill="#cbd5e1" font-size="10">• "Love is strong</text>
        <text x="538" y="135" fill="#cbd5e1" font-size="10">as death; jealousy is</text>
        <text x="538" y="152" fill="#cbd5e1" font-size="10">cruel as Sheol"</text>
        <rect x="536" y="240" width="106" height="36" rx="4" fill="#0f172a"/>
        <text x="589" y="262" text-anchor="middle" fill="#f472b6" font-size="10">Groom Jesus & church</text>
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
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">📜 Major Prophets: Judgment of the Nations and the Glorious Messianic Kingdom</text>

      <!-- 좌측: 다니엘 4대 제국 신상 다이어그램 (280x330) -->
      <g transform="translate(25, 45)">
        <rect width="270" height="335" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="25" fill="#fde68a" font-size="12" font-weight="bold">Daniel 2: Statue of 4 World Empires</text>

        <!-- 신상 머리 (순금: 바벨론) -->
        <rect x="85" y="40" width="100" height="40" rx="6" fill="#eab308" stroke="#fef08a"/>
        <text x="135" y="60" text-anchor="middle" fill="#78350f" font-size="11" font-weight="bold">Gold head (Babylon)</text>
        <text x="135" y="74" text-anchor="middle" fill="#78350f" font-size="9">Nebuchadnezzar (B.C. 605~539)</text>

        <!-- 가슴과 팔 (은: 메대·페르시아) -->
        <rect x="70" y="85" width="130" height="45" rx="6" fill="#94a3b8" stroke="#cbd5e1"/>
        <text x="135" y="105" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Silver chest (Persia)</text>
        <text x="135" y="120" text-anchor="middle" fill="#1e293b" font-size="9">Cyrus (B.C. 539~331)</text>

        <!-- 배와 넓적다리 (놋: 헬라) -->
        <rect x="80" y="135" width="110" height="45" rx="6" fill="#b45309" stroke="#f59e0b"/>
        <text x="135" y="155" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Bronze belly (Greece)</text>
        <text x="135" y="170" text-anchor="middle" fill="#fef3c7" font-size="9">Alexander (B.C. 331~63)</text>

        <!-- 종아리와 발 (철과 진흙: 로마) -->
        <rect x="90" y="185" width="90" height="55" rx="6" fill="#334155" stroke="#64748b"/>
        <text x="135" y="208" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Iron legs (Rome)</text>
        <text x="135" y="224" text-anchor="middle" fill="#cbd5e1" font-size="9">Divided: iron & clay</text>

        <!-- 뜨인 돌 (하나님의 영원한 나라) -->
        <circle cx="135" cy="285" r="28" fill="#10b981" stroke="#34d399" stroke-width="2"/>
        <text x="135" y="282" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Cut without hands:</text>
        <text x="135" y="296" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">the stone (Messiah)</text>
        <text x="135" y="325" text-anchor="middle" fill="#6ee7b7" font-size="10">Smashes idol, fills earth</text>
      </g>

      <!-- 우측: 이사야, 예레미야, 에스겔 핵심 비전 (350x335) -->
      <g transform="translate(310, 45)">
        <rect width="345" height="335" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="15" y="25" fill="#c7d2fe" font-size="13" font-weight="bold">📖 Eternal Revelation of the 3 Major Prophets</text>

        <!-- 이사야 -->
        <rect x="15" y="40" width="315" height="75" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="25" y="60" fill="#38bdf8" font-size="12" font-weight="bold">Isaiah: the suffering servant Messiah</text>
        <text x="25" y="78" fill="#cbd5e1" font-size="10">• "Wounded for our transgressions, bruised for our iniquities"</text>
        <text x="25" y="94" fill="#a7f3d0" font-size="10">• Immanuel (7), Prince of Peace (9), new heavens & earth (65)</text>

        <!-- 예레미야 -->
        <rect x="15" y="125" width="315" height="85" rx="6" fill="#1e293b" stroke="#f43f5e"/>
        <text x="25" y="145" fill="#f43f5e" font-size="12" font-weight="bold">Jeremiah: tears & the new covenant</text>
        <text x="25" y="163" fill="#cbd5e1" font-size="10">• Return home promised after 70 years in Babylon</text>
        <text x="25" y="181" fill="#fde68a" font-size="10">• New covenant (Jer 31): I will write my law on their hearts</text>
        <text x="25" y="199" fill="#cbd5e1" font-size="9">• Lam 3: "They are new every morning: great is thy faithfulness"</text>

        <!-- 에스겔 -->
        <rect x="15" y="220" width="315" height="100" rx="6" fill="#1e293b" stroke="#10b981"/>
        <text x="25" y="240" fill="#34d399" font-size="12" font-weight="bold">Ezekiel: risen army & living water</text>
        <text x="25" y="258" fill="#cbd5e1" font-size="10">• Breath enters dry bones: an exceedingly great army (ch. 37)</text>
        <text x="25" y="276" fill="#93c5fd" font-size="10">• Living water from new temple threshold heals Dead Sea (ch. 47)</text>
        <text x="25" y="294" fill="#fef08a" font-size="10">• City's eternal name: "The LORD is there" (Jehovah Shammah)</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 14. 소예언서 12권 종합 타임라인 SVG
// ----------------------------------------------------------------------------
function renderMinorProphetsSvg(book) {
  const curName = book ? book.name : "Minor Prophets";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">📜 The 12 Minor Prophets: Fields of Ministry and Redemptive Message by Era</text>

      <g transform="translate(20, 50)">
        <!-- 1. 북이스라엘을 향한 선지자 -->
        <rect x="0" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#34d399"/>
        <text x="15" y="24" fill="#34d399" font-size="12" font-weight="bold">Prophets of the north</text>
        <text x="15" y="48" fill="#fef08a" font-size="11" font-weight="bold">• Hosea</text>
        <text x="20" y="65" fill="#cbd5e1" font-size="9">Loving harlot Gomer; knowing God</text>
        <text x="15" y="90" fill="#fef08a" font-size="11" font-weight="bold">• Amos</text>
        <text x="20" y="107" fill="#cbd5e1" font-size="9">Shepherd of Tekoa: "justice like waters,</text>
        <text x="20" y="122" fill="#cbd5e1" font-size="9">righteousness like a mighty stream"</text>

        <!-- 2. 이방 열방을 향한 선지자 -->
        <rect x="220" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#ef4444"/>
        <text x="235" y="24" fill="#f87171" font-size="12" font-weight="bold">Prophets to the nations</text>
        <text x="235" y="48" fill="#fca5a5" font-size="11" font-weight="bold">• Jonah (Nineveh, Assyria)</text>
        <text x="240" y="65" fill="#cbd5e1" font-size="9">Repents in the fish; Nineveh saved</text>
        <text x="235" y="90" fill="#fca5a5" font-size="11" font-weight="bold">• Nahum (Nineveh's end)</text>
        <text x="240" y="107" fill="#cbd5e1" font-size="9">Fall of a cruel, unrepentant empire</text>
        <text x="235" y="125" fill="#fca5a5" font-size="11" font-weight="bold">• Obadiah (Edom judged)</text>
        <text x="240" y="140" fill="#cbd5e1" font-size="9">Proud in the rocks, betrayed a brother</text>

        <!-- 3. 포로 귀환 후 선지자 -->
        <rect x="440" y="0" width="200" height="150" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="455" y="24" fill="#fbbf24" font-size="12" font-weight="bold">Prophets after the Return</text>
        <text x="455" y="48" fill="#fde68a" font-size="11" font-weight="bold">• Haggai</text>
        <text x="460" y="65" fill="#cbd5e1" font-size="9">Urged to resume temple work</text>
        <text x="455" y="90" fill="#fde68a" font-size="11" font-weight="bold">• Zechariah</text>
        <text x="460" y="107" fill="#cbd5e1" font-size="9">8 visions; "by my Spirit"</text>
        <text x="455" y="125" fill="#fde68a" font-size="11" font-weight="bold">• Malachi</text>
        <text x="460" y="140" fill="#cbd5e1" font-size="9">Rebukes empty rites; Elijah to come</text>
      </g>

      <!-- 하단: 남유다 선지자 4인 배너 (640x160) -->
      <g transform="translate(20, 220)">
        <rect width="640" height="155" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="20" y="25" fill="#c7d2fe" font-size="13" font-weight="bold">👑 Four Prophets Who Woke Up Judah</text>

        <g transform="translate(15, 40)">
          <rect x="0" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#a855f7"/>
          <text x="12" y="22" fill="#d8b4fe" font-size="11" font-weight="bold">Joel</text>
          <text x="12" y="42" fill="#cbd5e1" font-size="9">• Great locust plague</text>
          <text x="12" y="58" fill="#cbd5e1" font-size="9">• "Rend your heart"</text>
          <text x="12" y="74" fill="#a7f3d0" font-size="9">• Spirit on all people</text>

          <rect x="155" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#3b82f6"/>
          <text x="167" y="22" fill="#93c5fd" font-size="11" font-weight="bold">Micah</text>
          <text x="167" y="42" fill="#cbd5e1" font-size="9">• Bethlehem Ephrathah</text>
          <text x="167" y="58" fill="#cbd5e1" font-size="9">• Messiah's birth foretold</text>
          <text x="167" y="74" fill="#cbd5e1" font-size="9">• Do justly, love mercy</text>

          <rect x="310" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#eab308"/>
          <text x="322" y="22" fill="#fde047" font-size="11" font-weight="bold">Habakkuk</text>
          <text x="322" y="42" fill="#cbd5e1" font-size="9">• Why the Chaldeans?</text>
          <text x="322" y="58" fill="#fde68a" font-size="9">• "The just by faith"</text>
          <text x="322" y="74" fill="#cbd5e1" font-size="9">• Fig tree song</text>

          <rect x="465" y="0" width="145" height="100" rx="6" fill="#1e293b" stroke="#ef4444"/>
          <text x="477" y="22" fill="#fca5a5" font-size="11" font-weight="bold">Zephaniah</text>
          <text x="477" y="42" fill="#cbd5e1" font-size="9">• Day of the LORD</text>
          <text x="477" y="58" fill="#cbd5e1" font-size="9">• Remnant saved</text>
          <text x="477" y="74" fill="#cbd5e1" font-size="9">• He will rejoice over you</text>
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
      <text x="35" y="60" fill="#38bdf8" font-size="14" font-weight="bold">Mediterranean</text>

      <!-- 갈릴리 바다 & 요단강 & 사해 -->
      <ellipse cx="370" cy="70" rx="16" ry="22" fill="#0284c7"/>
      <text x="395" y="75" fill="#7dd3fc" font-size="11">Sea of Galilee</text>

      <line x1="370" y1="92" x2="360" y2="210" stroke="#0ea5e9" stroke-width="3"/>
      <ellipse cx="360" cy="280" rx="18" ry="60" fill="#0284c7"/>
      <text x="385" y="290" fill="#7dd3fc" font-size="12">Dead Sea</text>

      <!-- 1. 갈릴리 사역 거점들 (북부) -->
      <g transform="translate(0, 0)">
        <circle cx="365" cy="55" r="7" fill="#ef4444"/>
        <text x="320" y="48" fill="#fca5a5" font-size="11" font-weight="bold">Capernaum (base)</text>

        <circle cx="345" cy="65" r="5" fill="#f59e0b"/>
        <text x="270" y="65" fill="#fde68a" font-size="10">Mt. of Beatitudes</text>

        <circle cx="310" cy="85" r="5" fill="#10b981"/>
        <text x="245" y="85" fill="#86efac" font-size="10">Cana (water→wine)</text>

        <circle cx="290" cy="110" r="6" fill="#38bdf8"/>
        <text x="210" y="115" fill="#93c5fd" font-size="11" font-weight="bold">Nazareth (grew up)</text>
      </g>

      <!-- 2. 사마리아 (중부) -->
      <circle cx="320" cy="170" r="6" fill="#a855f7"/>
      <text x="220" y="175" fill="#d8b4fe" font-size="11" font-weight="bold">Sychar, Jacob's well (living water)</text>

      <!-- 3. 유대 및 예루살렘 (남부) -->
      <circle cx="300" cy="245" r="8" fill="#f59e0b"/>
      <text x="180" y="240" fill="#fbbf24" font-size="13" font-weight="bold">Jerusalem (temple·cross·rising)</text>

      <circle cx="340" cy="235" r="5" fill="#eab308"/>
      <text x="350" y="235" fill="#fde047" font-size="10">Jericho (Zacchaeus)</text>

      <circle cx="325" cy="255" r="5" fill="#ec4899"/>
      <text x="335" y="260" fill="#f472b6" font-size="10">Bethany (Lazarus)</text>

      <circle cx="295" cy="280" r="7" fill="#ef4444"/>
      <text x="200" y="285" fill="#fca5a5" font-size="11" font-weight="bold">Bethlehem (Messiah born)</text>

      <!-- 우측 사복음서 비교 박스 -->
      <g transform="translate(455, 20)">
        <rect width="210" height="360" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="15" y="26" fill="#fbbf24" font-size="13" font-weight="bold">4 Gospels, 4 Colors</text>

        <rect x="10" y="42" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="60" fill="#fde047" font-size="11" font-weight="bold">Matthew (lion)</text>
        <text x="18" y="76" fill="#cbd5e1" font-size="9">• Messiah, King of the Jews</text>
        <text x="18" y="92" fill="#cbd5e1" font-size="9">• 5 discourses, kingdom gospel</text>

        <rect x="10" y="117" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="135" fill="#f87171" font-size="11" font-weight="bold">Mark (ox)</text>
        <text x="18" y="151" fill="#cbd5e1" font-size="9">• Suffering servant, acts at once</text>
        <text x="18" y="167" fill="#cbd5e1" font-size="9">• Gave His life as a ransom</text>

        <rect x="10" y="192" width="190" height="65" rx="4" fill="#0f172a"/>
        <text x="18" y="210" fill="#6ee7b7" font-size="11" font-weight="bold">Luke (man)</text>
        <text x="18" y="226" fill="#cbd5e1" font-size="9">• Perfect man & Savior of lost</text>
        <text x="18" y="242" fill="#cbd5e1" font-size="9">• Compassion for outcasts, Gentiles</text>

        <rect x="10" y="267" width="190" height="75" rx="4" fill="#0f172a"/>
        <text x="18" y="285" fill="#93c5fd" font-size="11" font-weight="bold">John (eagle)</text>
        <text x="18" y="301" fill="#cbd5e1" font-size="9">• The Word, the Son of God</text>
        <text x="18" y="317" fill="#cbd5e1" font-size="9">• 7 signs & 'ego eimi'</text>
        <text x="18" y="333" fill="#cbd5e1" font-size="9">• Believe and have life</text>
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

      <text x="250" y="260" fill="#0284c7" font-size="18" font-weight="bold" opacity="0.35">Mediterranean Sea</text>

      <!-- 항로 곡선들 -->
      <path d="M 580,310 L 530,240 L 460,180 L 410,140 L 330,120 L 310,180 L 380,200 L 580,310" 
            fill="none" stroke="#818cf8" stroke-width="3" stroke-dasharray="5,4"/>
      <path d="M 580,310 L 480,320 L 250,310 L 160,250 L 110,130" 
            fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,4"/>

      <!-- 주요 선교 거점 도시들 -->
      <!-- 안디옥 -->
      <circle cx="580" cy="240" r="7" fill="#10b981"/>
      <text x="500" y="235" fill="#6ee7b7" font-size="12" font-weight="bold">Syrian Antioch (sending church)</text>

      <!-- 예루살렘 -->
      <circle cx="580" cy="310" r="8" fill="#f59e0b"/>
      <text x="565" y="335" fill="#fde68a" font-size="12" font-weight="bold">Jerusalem</text>

      <!-- 갈라디아 -->
      <circle cx="480" cy="180" r="6" fill="#6366f1"/>
      <text x="485" y="175" fill="#c7d2fe" font-size="11">Galatia (1st)</text>

      <!-- 에베소 -->
      <circle cx="400" cy="190" r="8" fill="#ec4899"/>
      <text x="410" y="195" fill="#f472b6" font-size="13" font-weight="bold">Ephesus (Tyrannus, 3 yrs)</text>

      <!-- 빌립보 & 데살로니가 -->
      <circle cx="360" cy="90" r="7" fill="#8b5cf6"/>
      <text x="310" y="85" fill="#c4b5fd" font-size="12" font-weight="bold">Philippi (1st in Europe)</text>

      <circle cx="320" cy="100" r="6" fill="#8b5cf6"/>
      <text x="250" y="105" fill="#c4b5fd" font-size="11">Thessalonica</text>

      <!-- 고린도 -->
      <circle cx="310" cy="180" r="7" fill="#38bdf8"/>
      <text x="240" y="185" fill="#7dd3fc" font-size="12" font-weight="bold">Corinth (1½ years)</text>

      <!-- 멜리데 섬 -->
      <circle cx="210" cy="300" r="6" fill="#f43f5e"/>
      <text x="200" y="325" fill="#fda4af" font-size="11">Malta (shipwreck)</text>

      <!-- 로마 -->
      <circle cx="110" cy="130" r="9" fill="#ef4444"/>
      <text x="60" y="120" fill="#f87171" font-size="14" font-weight="bold">Rome (heart of empire, gospel)</text>

      <!-- 좌측 하단 범례 -->
      <g transform="translate(30, 290)">
        <rect width="180" height="75" rx="6" fill="#1e293b" opacity="0.9" stroke="#475569"/>
        <line x1="15" y1="20" x2="45" y2="20" stroke="#818cf8" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="55" y="24" fill="#c7d2fe" font-size="11">1st~3rd journeys</text>
        <line x1="15" y1="42" x2="45" y2="42" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,3"/>
        <text x="55" y="46" fill="#fda4af" font-size="11">Voyage to Rome</text>
        <text x="15" y="65" fill="#a7f3d0" font-size="10">Acts 1:8 My witnesses, to earth's end</text>
      </g>
    </svg>
  `;
}

// ----------------------------------------------------------------------------
// 17. 서신서 교회 네트워크 & 구원의 여정 SVG
// ----------------------------------------------------------------------------
function renderEpistlesNetworkSvg(book) {
  const curName = book ? book.name : "Epistles";
  return `
    <svg viewBox="0 0 680 400" class="w-full h-auto rounded-xl shadow-2xl border border-amber-900/40 bg-slate-900">
      <rect width="100%" height="100%" fill="#0f172a"/>
      <text x="25" y="30" fill="#fbbf24" font-size="14" font-weight="bold">✉️ NT Epistles: Church Network of the Roman Empire & the Golden Chain of Salvation</text>
      <text x="25" y="50" fill="#94a3b8" font-size="11">Selected epistle: [${curName}] - the doctrine of the gospel of the cross and the holy life of believers in practice</text>

      <!-- 상단: 구원의 황금 사슬 (Ordo Salutis - 롬 8:30) -->
      <g transform="translate(20, 70)">
        <rect width="640" height="85" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="20" y="24" fill="#fde68a" font-size="12" font-weight="bold">Order of Salvation (The Golden Chain of Salvation - Rom 8:29-30)</text>

        <!-- 5단계 플로우 -->
        <g transform="translate(15, 38)">
          <rect x="0" y="0" width="110" height="35" rx="4" fill="#312e81"/>
          <text x="55" y="22" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="bold">1. Foreknown</text>

          <text x="120" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="135" y="0" width="105" height="35" rx="4" fill="#065f46"/>
          <text x="187" y="22" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold">2. Called</text>

          <text x="250" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="265" y="0" width="105" height="35" rx="4" fill="#831843"/>
          <text x="317" y="22" text-anchor="middle" fill="#fda4af" font-size="11" font-weight="bold">3. Justified</text>

          <text x="380" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="395" y="0" width="105" height="35" rx="4" fill="#78350f"/>
          <text x="447" y="22" text-anchor="middle" fill="#fef08a" font-size="11" font-weight="bold">4. Sanctified</text>

          <text x="510" y="22" fill="#f59e0b" font-size="14">→</text>

          <rect x="525" y="0" width="85" height="35" rx="4" fill="#701a75"/>
          <text x="567" y="22" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">5. Glorified</text>
        </g>
      </g>

      <!-- 하단: 바울서신 분류 & 에베소서 전신갑주 요약 (640x200) -->
      <g transform="translate(20, 175)">
        <!-- 좌측 4대 서신 분류 -->
        <rect x="0" y="0" width="310" height="205" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
        <text x="15" y="25" fill="#a5b4fc" font-size="12" font-weight="bold">13 Pauline Epistles by Type</text>

        <text x="15" y="52" fill="#fde047" font-size="11" font-weight="bold">1. Doctrinal:</text>
        <text x="90" y="52" fill="#cbd5e1" font-size="10">Romans, Galatians, 1 & 2 Corinthians</text>

        <text x="15" y="82" fill="#6ee7b7" font-size="11" font-weight="bold">2. Prison:</text>
        <text x="90" y="82" fill="#cbd5e1" font-size="10">Ephesians, Philippians, Colossians, Philemon</text>

        <text x="15" y="112" fill="#f472b6" font-size="11" font-weight="bold">3. End times:</text>
        <text x="90" y="112" fill="#cbd5e1" font-size="10">1 Thessalonians, 2 Thessalonians</text>

        <text x="15" y="142" fill="#93c5fd" font-size="11" font-weight="bold">4. Pastoral:</text>
        <text x="90" y="142" fill="#cbd5e1" font-size="10">1 Timothy, 2 Timothy, Titus</text>

        <rect x="15" y="165" width="280" height="28" rx="4" fill="#0f172a"/>
        <text x="25" y="183" fill="#cbd5e1" font-size="10">8 General Epistles: Heb, Jas, 1-2 Pet, 1-2-3 John, Jude</text>

        <!-- 우측: 하나님의 전신갑주 (엡 6장) -->
        <rect x="330" y="0" width="310" height="205" rx="8" fill="#1e293b" stroke="#f59e0b"/>
        <text x="345" y="25" fill="#fbbf24" font-size="12" font-weight="bold">🛡️ The Whole Armor of God (Eph 6:13-17)</text>

        <text x="345" y="55" fill="#fca5a5" font-size="11">• Helmet of salvation</text>
        <text x="450" y="55" fill="#cbd5e1" font-size="10">(guards head·mind)</text>

        <text x="345" y="80" fill="#fde68a" font-size="11">• Breastplate</text>
        <text x="450" y="80" fill="#cbd5e1" font-size="10">(guards heart)</text>

        <text x="345" y="105" fill="#86efac" font-size="11">• Belt of truth</text>
        <text x="450" y="105" fill="#cbd5e1" font-size="10">(centered on Word)</text>

        <text x="345" y="130" fill="#93c5fd" font-size="11">• Gospel shoes</text>
        <text x="470" y="130" fill="#cbd5e1" font-size="10">(steps of mission)</text>

        <text x="345" y="155" fill="#d8b4fe" font-size="11">• Shield of faith</text>
        <text x="450" y="155" fill="#cbd5e1" font-size="10">(quench fiery darts)</text>

        <text x="345" y="180" fill="#f472b6" font-size="11" font-weight="bold">• Sword of Spirit</text>
        <text x="430" y="180" fill="#fbcfe8" font-size="11" font-weight="bold">= God's Word! (attack)</text>
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
        <text x="15" y="25" fill="#38bdf8" font-size="13" font-weight="bold">🗺️ Postal Circuit of the 7 Churches</text>

        <!-- 에게해 바다 -->
        <rect x="10" y="40" width="130" height="305" rx="4" fill="#0369a1" opacity="0.3"/>
        <text x="30" y="180" fill="#7dd3fc" font-size="12" font-weight="bold">Aegean Sea</text>

        <!-- 밧모 섬 (Patmos) -->
        <ellipse cx="65" cy="270" rx="14" ry="10" fill="#f43f5e"/>
        <text x="40" y="298" fill="#fda4af" font-size="11" font-weight="bold">Patmos</text>
        <text x="25" y="312" fill="#cbd5e1" font-size="9">(John's exile)</text>

        <!-- 7교회 순환 타원 경로선 -->
        <path d="M 190,260 L 195,190 L 210,100 L 270,110 L 285,170 L 290,220 L 310,270 Z" 
              fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3"/>

        <!-- 1. 에베소 -->
        <circle cx="190" cy="260" r="7" fill="#ef4444"/>
        <text x="135" y="255" fill="#fca5a5" font-size="11" font-weight="bold">1. Ephesus</text>
        <text x="120" y="270" fill="#94a3b8" font-size="9">(first love)</text>

        <!-- 2. 서머나 -->
        <circle cx="195" cy="190" r="7" fill="#10b981"/>
        <text x="140" y="185" fill="#86efac" font-size="11" font-weight="bold">2. Smyrna</text>
        <text x="130" y="200" fill="#94a3b8" font-size="9">(faithful to death)</text>

        <!-- 3. 버가모 -->
        <circle cx="210" cy="100" r="6" fill="#eab308"/>
        <text x="160" y="95" fill="#fde047" font-size="11" font-weight="bold">3. Pergamum</text>

        <!-- 4. 두아디라 -->
        <circle cx="270" cy="110" r="6" fill="#ec4899"/>
        <text x="280" y="105" fill="#f472b6" font-size="11" font-weight="bold">4. Thyatira</text>

        <!-- 5. 사데 -->
        <circle cx="285" cy="170" r="6" fill="#64748b"/>
        <text x="295" y="170" fill="#cbd5e1" font-size="11" font-weight="bold">5. Sardis (alive yet dead)</text>

        <!-- 6. 빌라델비아 -->
        <circle cx="290" cy="220" r="7" fill="#10b981"/>
        <text x="200" y="225" fill="#86efac" font-size="11" font-weight="bold">6. Philadelphia</text>
        <text x="210" y="238" fill="#94a3b8" font-size="9">(only praised)</text>

        <!-- 7. 라오디게아 -->
        <circle cx="310" cy="270" r="6" fill="#f97316"/>
        <text x="245" y="285" fill="#fed7aa" font-size="11" font-weight="bold">7. Laodicea (neither hot nor cold)</text>
      </g>

      <!-- 우측: 요한계시록 7심판 & 새 예루살렘 성 다이어그램 (275x360) -->
      <g transform="translate(390, 20)">
        <rect width="275" height="360" rx="8" fill="#1e1b4b" stroke="#a855f7"/>
        <text x="15" y="25" fill="#e9d5ff" font-size="13" font-weight="bold">👑 New Heaven & Earth: New Jerusalem</text>

        <rect x="15" y="42" width="245" height="55" rx="4" fill="#0f172a"/>
        <text x="25" y="60" fill="#fde68a" font-size="11" font-weight="bold">7 seals → 7 trumpets → 7 bowls</text>
        <text x="25" y="78" fill="#cbd5e1" font-size="9">End of world empires, full judgment of evil</text>

        <!-- 정육면체 새 예루살렘 성 입체 그래픽 -->
        <g transform="translate(65, 115)">
          <polygon points="70,10 130,40 130,110 70,80" fill="#d97706" opacity="0.8"/>
          <polygon points="70,10 10,40 10,110 70,80" fill="#b45309" opacity="0.9"/>
          <polygon points="70,10 130,40 70,60 10,40" fill="#f59e0b"/>
          <text x="70" y="65" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">New Jerusalem</text>
        </g>

        <!-- 성곽 설명 -->
        <g transform="translate(15, 235)">
          <rect width="245" height="105" rx="6" fill="#0f172a" stroke="#475569"/>
          <text x="12" y="22" fill="#fbbf24" font-size="11" font-weight="bold">Holy glory of the New Jerusalem:</text>
          <text x="12" y="40" fill="#cbd5e1" font-size="10">• 12 pearl gates (12 tribes' names)</text>
          <text x="12" y="58" fill="#cbd5e1" font-size="10">• 12 jewel foundations (12 apostles)</text>
          <text x="12" y="76" fill="#6ee7b7" font-size="10">• River of life from throne & monthly tree of life</text>
          <text x="12" y="94" fill="#f472b6" font-size="10">• "Amen. Come, Lord Jesus (Maranatha!)"</text>
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
    name: "Bible",
    engName: "Bible",
    category: "Bible",
    author: "Inspired by the Holy Spirit",
    date: "In the time of redemptive history",
    keyVerse: "For the word of God is living and active (Heb 4:12)",
    theme: "God's covenant of salvation and Jesus Christ",
    structure: []
  };

  const steps = (b.structure && b.structure.length) ? b.structure.slice(0, 4) : [
    { part: "Part 1", content: "Introduction, background, and central events" },
    { part: "Part 2", content: "The unfolding of the covenant and lessons of faith" },
    { part: "Part 3", content: "Spiritual conflict and God's intervention" },
    { part: "Part 4", content: "Completion of redemptive history and future hope" }
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
            <p class="text-xs text-slate-400">Author: ${b.author || 'Unknown'} | Date written: ${b.date || 'Historical record'}</p>
          </div>
        </div>
        <span class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
          ${b.chapters || ''} chapters · full structure infographic
        </span>
      </div>

      <!-- 핵심 테마 카드 -->
      <div class="bg-gradient-to-r from-slate-800 to-slate-800/50 p-4 rounded-xl border border-amber-900/30">
        <div class="text-xs font-bold text-amber-400 mb-1">🎯 Core Theme in Redemptive History (Theme)</div>
        <p class="text-sm font-semibold text-slate-100">${b.theme}</p>
      </div>

      <!-- 4단계 구조 로드맵 -->
      <div>
        <div class="text-xs font-bold text-slate-400 mb-2">📌 Core Structure of the Book (Structure)</div>
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
