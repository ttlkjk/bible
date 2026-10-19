// ============================================================================
// 에스라 성경강좌 PPT 슬라이드 스튜디오 & 오디오 플레이어 (Lecture Media Studio)
// 로컬 H:\HDX\Church 연동, 슬라이드 뷰어/편집기, A-B 구간반복 MP3 플레이어
// ============================================================================

(function (window) {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. 기본 에스라 성경강좌 PPT 슬라이드 덱 데이터셋
  // (노우호 목사님의 30시간 집중강의 및 샤론강단 강의 교재 기반)
  // --------------------------------------------------------------------------
  const DEFAULT_SLIDE_DECKS = {
    "창세기": [
      {
        id: "gen-1",
        badge: "제 2강 창세기(1) - 창조",
        title: "하나님의 천지창조와 에덴의 언약",
        subtitle: "창세기 1장 ~ 3장 | 창조의 섭리와 인간의 타락",
        scriptureRef: "창세기 1:1, 2:16-17, 3:15",
        bulletPoints: [
          "1. 태초에 하나님이 천지를 창조하시니라 (무에서 유로의 창조)",
          "2. 6일간의 질서 정연한 창조와 7일째 안식 (복 주시고 거룩하게 하심)",
          "3. 에덴동산의 생명나무와 선악을 알게 하는 나무의 참된 의미",
          "4. 사탄의 간교한 유혹과 불순종: 인류 비극의 기원",
          "5. 원시복음(창 3:15): 여자의 후손을 통한 하나님의 구속 약속"
        ],
        ezraNote: "성경의 첫 단추인 창세기 1~3장을 바르게 이해하지 못하면 성경 66권 전체가 오해됩니다. 하나님은 인간에게 억압이 아닌 인격적 자유의지를 부여하셨습니다."
      },
      {
        id: "gen-2",
        badge: "제 2강 창세기(2) - 홍수와 바벨탑",
        title: "노아의 홍수 심판과 인류의 흩어짐",
        subtitle: "창세기 6장 ~ 11장 | 인류 문명의 배역과 심판",
        scriptureRef: "창세기 6:5-8, 9:11-13, 11:4-9",
        bulletPoints: [
          "1. 인간의 죄악이 세상에 관영함과 하나님의 한탄과 근심",
          "2. 당대의 의인 노아와 방주 건조 (120년간의 회개 유예)",
          "3. 전 지구적 대격변: 깊음의 샘들이 터지고 하늘의 창들이 열림",
          "4. 무지개 언약: 물로 다시는 모든 생물을 멸하지 아니하리라",
          "5. 시날 평지의 바벨탑 반역과 언어의 혼잡"
        ],
        ezraNote: "홍수 심판은 전 세계 지층과 화석이 증거하는 역사적 사실입니다. 하나님을 떠난 인본주의 문명 바벨탑의 말로는 혼잡과 흩어짐뿐입니다."
      },
      {
        id: "gen-3",
        badge: "제 2강 창세기(3) - 족장사",
        title: "아브라함·이삭·야곱·요셉의 4대 족장사",
        subtitle: "창세기 12장 ~ 50장 | 한 사람을 부르시어 민족을 이루심",
        scriptureRef: "창세기 12:1-3, 15:5-6, 50:20",
        bulletPoints: [
          "1. 갈대아 우르에서 아브라함을 부르심 (너는 복이 될지라)",
          "2. 횃불 언약(창 15장): 400년간의 애굽 체류 예언과 가나안 땅 약속",
          "3. 이삭의 순종과 모리아 산의 여호와 이레",
          "4. 벧엘과 얍복강에서 이스라엘로 변화된 야곱의 연단",
          "5. 요셉을 통한 애굽 이주: 70명이 200만 민족으로 성장하기 위한 인큐베이터"
        ],
        ezraNote: "하나님께서 아브라함을 부르신 것은 그 한 사람만 구원하시려는 것이 아니라, 그를 제사장 나라의 조상 삼아 천하 만민에게 복을 주시기 위함입니다."
      }
    ],
    "출애굽기": [
      {
        id: "exo-1",
        badge: "제 3강 출애굽기의 파노라마",
        title: "애굽의 압제와 열 가지 재앙, 유월절의 밤",
        subtitle: "출애굽기 1장 ~ 14장 | 바로의 손에서 이스라엘을 건지심",
        scriptureRef: "출애굽기 3:7-10, 12:12-14, 14:13-14",
        bulletPoints: [
          "1. 430년 만에 들으신 부르짖음과 호렙산 불꽃 가운데 모세를 부르심",
          "2. 애굽 10대 우상을 파하시는 하나님의 10대 재앙",
          "3. 어린양의 피로 죽음의 사자가 넘어간 유월절 구원의 모형",
          "4. 홍해 바다가 갈라진 기적과 애굽 군대의 수장",
          "5. 너희는 가만히 있어 여호와께서 오늘 너희를 위하여 행하시는 구원을 보라"
        ],
        ezraNote: "출애굽은 단순한 노예 해방이 아닙니다. 하나님 여호와가 누구이신지 온 세상과 애굽, 그리고 이스라엘 백성에게 밝히 알리신 구원의 대사건입니다."
      },
      {
        id: "exo-2",
        badge: "제 3강 시내산 언약과 성막",
        title: "시내산 피의 언약과 지상에 세워진 성막",
        subtitle: "출애굽기 19장 ~ 40장 | 거룩한 제사장 나라의 헌법",
        scriptureRef: "출애굽기 19:5-6, 20:1-17, 40:34-38",
        bulletPoints: [
          "1. 시내산 언약(출 19:5-6): 너희가 내 말을 잘 듣고 내 언약을 지키면",
          "2. 십계명과 언약서: 하나님 사랑과 이웃 사랑의 윤리",
          "3. 금송아지 우상 숭배의 배역과 모세의 중보기도",
          "4. 성막의 식양: 번제단, 물두멍, 성소, 지성소의 법궤",
          "5. 여호와의 영광이 성막에 충만하여 구름 기둥과 불 기둥으로 인도하심"
        ],
        ezraNote: "성막은 거룩하신 하나님께서 죄 많은 백성 가운데 거하시기 위해 친히 보여주신 사랑의 처소이며, 훗날 육신이 되어 우리 가운데 거하신 예수 그리스도의 그림자입니다."
      }
    ],
    "레위기": [
      {
        id: "lev-1",
        badge: "제 4강 레위기 - 내가 거룩하니 너희도 거룩하라",
        title: "5대 제사와 거룩한 제사장 백성의 성결법전",
        subtitle: "레위기 1장 ~ 27장 | 하나님과의 화목과 일상의 성결",
        scriptureRef: "레위기 11:45, 19:2, 26:3-13",
        bulletPoints: [
          "1. 5대 제사: 번제(헌신), 소제(감사), 화목제(친교), 속죄제(죄사함), 속건제(배상)",
          "2. 대속죄일(레 16장): 아사셀 염소와 온 회중의 속죄",
          "3. 정결한 음식과 위생 규례: 생명을 존중하고 건강을 지키는 율례",
          "4. 이웃을 네 자신과 같이 사랑하라 (레 19:18)",
          "5. 축복과 저주(레 26장): 하나님의 규례와 계명을 준수할 때 임하는 평강"
        ],
        ezraNote: "레위기는 결코 지루한 제사법 책이 아닙니다. 하나님께서 피조물인 인간을 거룩하게 구별하시고 영육 간에 가장 건강하고 행복하게 살도록 주신 복된 법입니다."
      }
    ],
    "민수기": [
      {
        id: "num-1",
        badge: "제 5강 민수기 - 광야 40년의 연단",
        title: "가데스 바네아의 불신앙과 40년 광야 유랑",
        subtitle: "민수기 1장 ~ 36장 | 백성을 계수하며 가나안을 준비함",
        scriptureRef: "민수기 14:6-9, 21:8-9, 24:17",
        bulletPoints: [
          "1. 시내산 출발 전 제1차 인구조사 (군대로 조직된 백성)",
          "2. 12정탐꾼의 보고: 10명의 불신앙적 악평 vs 여호수아와 갈렙의 믿음",
          "3. 하루를 일 년으로 환산하여 40년간 광야에서 소멸된 불순종의 세대",
          "4. 놋뱀 사건(민 21장): 십자가에 달리실 그리스도의 모형",
          "5. 발람의 거짓 축복과 바알브올의 음행 유혹을 물리침"
        ],
        ezraNote: "믿음이란 눈앞의 거인(아낙 자손)을 보는 것이 아니라, 그들보다 천만 배 크신 전능하신 여호와 하나님을 바라보는 것입니다."
      }
    ],
    "신명기": [
      {
        id: "deu-1",
        badge: "제 6강 신명기 - 모압 평지의 고별설교",
        title: "쉐마 이스라엘과 광야 40년을 기억하라",
        subtitle: "신명기 1장 ~ 34장 | 마음과 뜻과 힘을 다하여 여호와를 사랑하라",
        scriptureRef: "신명기 6:4-9, 8:2-3, 28:1-2, 30:19-20",
        bulletPoints: [
          "1. 광야 40년 회고: 사람이 떡으로만 사는 것이 아니요 여호와의 입에서 나오는 말씀으로 삼",
          "2. 쉐마(신 6:4-9): 네 자녀에게 부지런히 가르치며 손목에 매고 미간에 붙이라",
          "3. 그리심 산의 축복과 에발 산의 저주: 순종의 복과 불순종의 저주",
          "4. 장차 세우실 왕의 규례(신 17장): 율법서를 평생 곁에 두고 읽어야 함",
          "5. 모세의 축복과 느보산에서의 최후 (눈이 흐리지 아니하였더라)"
        ],
        ezraNote: "신명기는 구약의 복음서이자 모세의 애절한 유언입니다. 신앙은 지식이 아니라 다음 세대에 삶으로 전수되어야 함을 가르칩니다."
      }
    ],
    "여호수아": [
      {
        id: "jos-1",
        badge: "제 7강 여호수아 - 가나안 정복과 기업 분배",
        title: "요단강 도하와 가나안 정복 3대 작전",
        subtitle: "여호수아 1장 ~ 12장 | 오직 강하고 담대하라",
        scriptureRef: "여호수아 1:7-9, 3:14-17, 6:20",
        bulletPoints: [
          "1. 모세의 죽음 후 여호수아의 소명 (네 발바닥으로 밟는 곳을 다 너희에게 주었노니)",
          "2. 라합의 붉은 줄 신앙고백과 언약궤를 멘 제사장들의 요단강 도하",
          "3. 길갈의 할례와 여리고 성의 함락 (하나님의 군대 장관)",
          "4. 아간의 범죄와 아이 성의 패배 및 회개와 승리",
          "5. 기본 동맹 구조와 태양이 기브온 위에 머무는 이적"
        ],
        ezraNote: "가나안 정복 전쟁은 단순한 영토 침략이 아니라, 400년간 죄악이 관영한 가나안 족속을 향한 하나님의 거룩한 공의의 심판이었습니다."
      },
      {
        id: "jos-2",
        badge: "제 7강 여호수아 - 12지파 땅 분배와 고별설교",
        title: "12지파 기업 분배와 실로 성막, 6대 도피성",
        subtitle: "여호수아 13장 ~ 24장 | 나와 내 집은 여호와를 섬기겠노라",
        scriptureRef: "여호수아 14:12, 20:1-3, 24:14-15",
        bulletPoints: [
          "1. 85세 갈렙의 담대한 믿음: 이 산지를 지금 내게 주소서",
          "2. 제비뽑기를 통한 12지파 공평한 땅 분배와 실로 성막 안착",
          "3. 부지중에 살인한 자를 보호하는 요단 동서 6대 도피성(Cities of Refuge)",
          "4. 레위인 48개 성읍 분산: 이스라엘 전역에 말씀을 가르치는 제사장 파송",
          "5. 세겜 언약 갱신: 오직 나와 내 집은 여호와만을 섬기겠노라"
        ],
        ezraNote: "여호수아는 눈앞의 승리에 도취되지 않고 마지막 순간까지 백성들에게 오직 하나님만 경외하라고 간곡히 당부했습니다. 신앙의 승리는 계승에 있습니다."
      }
    ],
    "사사기": [
      {
        id: "jdg-1",
        badge: "제 8강 사사기 - 350년 종교 암흑기",
        title: "사사기 7대 영적 악순환 사이클과 사사들의 활동",
        subtitle: "사사기 1장 ~ 21장 | 그때에 왕이 없으므로 자기 소견에 옳은 대로 행하였더라",
        scriptureRef: "사사기 2:10-12, 21:25",
        bulletPoints: [
          "1. 다음 세대에 신앙 전수 단절: 여호와를 알지 못하는 다른 세대가 일어남",
          "2. 7대 악순환: 범죄 ➔ 이방의 압제 ➔ 부르짖음 ➔ 사사를 통한 구원 ➔ 평화 ➔ 망각과 재범죄",
          "3. 여성 사사 드보라와 바락의 승리 (기손강의 범람)",
          "4. 기드온의 300용사: 미디안 대군을 횃불과 항아리로 격파함",
          "5. 삼손의 나실인 소명과 타락, 그리고 마지막 최후의 회개"
        ],
        ezraNote: "사사기의 비극은 정치적 혼란이 아니라 신명기 6장의 쉐마(가정 신앙교육)가 무너진 영적 비극입니다. 참된 왕이신 하나님을 버린 인생의 비참함을 고발합니다."
      }
    ],
    "룻기": [
      {
        id: "rut-1",
        badge: "제 8강 룻기 - 칠흑 같은 어둠 속 샛별",
        title: "모압 여인 룻의 신앙과 기업 무를 자(고엘) 보아스",
        subtitle: "룻기 1장 ~ 4장 | 어머니의 하나님이 나의 하나님이 되시리니",
        scriptureRef: "룻기 1:16-17, 2:12, 4:14-17",
        bulletPoints: [
          "1. 흉년으로 모압에 이주한 엘리멜렉 가문의 몰락 (나오미의 고통)",
          "2. 이방 여인 룻의 위대한 결단: 어머니의 백성이 나의 백성이 되고",
          "3. 베들레헴 보아스의 밭에서 이삭을 줍는 룻의 성실함",
          "4. 친족 구속의 법(고엘 제도): 기업 무를 자 보아스의 은혜로운 책임",
          "5. 오벳을 낳고 다윗 왕과 예수 그리스도의 계보를 잇는 거룩한 은혜"
        ],
        ezraNote: "사사기의 캄캄한 어둠 속에서 룻기는 하나님의 은혜가 이방 여인에게까지 흘러들어가 다윗 왕과 온 인류의 구주이신 예수 그리스도를 잉태하게 하는 거룩한 보석입니다."
      }
    ],
    "사무엘상": [
      {
        id: "1sa-1",
        badge: "제 9강 사무엘상 - 왕정의 시작",
        title: "한나의 기도, 마지막 사사 사무엘과 사울·다윗",
        subtitle: "사무엘상 1장 ~ 31장 | 순종이 제사보다 낫고",
        scriptureRef: "사무엘상 2:30, 15:22, 16:7",
        bulletPoints: [
          "1. 눈물의 어머니 한나의 서원기도와 어린 사무엘의 순종",
          "2. 엘리 제사장 가문의 몰락과 이가봇(하나님의 영광이 떠남)",
          "3. 미스바 대각성 부흥운동과 에벤에셀의 하나님",
          "4. 백성들의 왕 요구와 사울의 즉위, 그러나 아말렉 불순종으로 버림받음",
          "5. 중심을 보시는 하나님의 다윗 기름부음과 골리앗 타도, 10년간의 광야 망명"
        ],
        ezraNote: "사무엘상은 겉모양을 보는 사람의 눈과 중심을 보시는 하나님의 눈을 대비시킵니다. '순종이 제사보다 낫고 듣는 것이 숫양의 기름보다 낫습니다.'"
      }
    ],
    "사무엘하": [
      {
        id: "2sa-1",
        badge: "제 9강 사무엘하 - 다윗 언약",
        title: "다윗 왕국의 번영과 영원한 다윗 언약, 뼈아픈 회개",
        subtitle: "사무엘하 1장 ~ 24장 | 네 집과 네 나라가 내 앞에서 영원히 보전되고",
        scriptureRef: "사무엘하 7:12-16, 12:13, 24:24",
        bulletPoints: [
          "1. 헤브론에서의 통일 이스라엘 왕 즉위와 예루살렘 시온산성 수도 정복",
          "2. 하나님의 궤를 다윗 성으로 모셔오며 춤춘 다윗의 기쁨",
          "3. 다윗 언약(삼하 7장): 네 몸에서 날 네 씨가 내 이름을 위하여 집을 건축할 것이요",
          "4. 밧세바 간음과 우리아 살해, 나단 선지자의 책망과 침상이 젖도록 통회한 회개",
          "5. 압살롬의 반역과 도피, 아라우나 타작마당의 제사와 화목"
        ],
        ezraNote: "다윗이 위대한 것은 죄를 짓지 않아서가 아니라, 나단 선지자의 책망 앞에 핑계 대지 않고 즉시 무릎 꿇어 뼈를 깎는 회개를 드렸기 때문입니다."
      }
    ],
    "열왕기상": [
      {
        id: "1ki-1",
        badge: "제 10강 열왕기상 - 영화와 분열",
        title: "솔로몬 성전의 영광과 타락, 왕국 분열과 엘리야",
        subtitle: "열왕기상 1장 ~ 22장 | 여호와께서 솔로몬에게 진노하시니라",
        scriptureRef: "열왕기상 3:9, 8:27-30, 11:4-6, 18:38-39",
        bulletPoints: [
          "1. 일천번제와 듣는 마음(지혜)을 구한 솔로몬의 전성기",
          "2. 7년간의 거룩한 예루살렘 성전 건축과 여호와의 영광의 구름",
          "3. 이방 첩 1,000명과의 정략결혼 및 우상숭배로 인한 하나님의 진노",
          "4. 솔로몬 사후 르호보암(남유다)과 여로보암(북이스라엘)의 왕국 분열",
          "5. 아합과 이세벨의 바알 숭배를 심판한 선지자 엘리야와 갈멜산 불의 응답"
        ],
        ezraNote: "솔로몬의 비극은 은혜로 시작하여 정욕과 타협으로 끝난 것입니다. 여로보암의 벧엘·단 금송아지는 북이스라엘 멸망의 올무가 되었습니다."
      }
    ],
    "시편": [
      {
        id: "psa-1",
        badge: "제 11강 시편 - 영혼의 찬양과 기도",
        title: "150편의 눈물과 감사, 메시아를 향한 찬송",
        subtitle: "시편 1편 ~ 150편 | 복 있는 사람은 오직 여호와의 율법을 즐거워하여",
        scriptureRef: "시편 1:1-2, 23:1-3, 51:10, 119:105",
        bulletPoints: [
          "1. 시편의 서론(시 1편): 의인의 길과 악인의 길, 복 있는 사람의 삶",
          "2. 다윗의 목자시(시 23편): 여호와는 나의 목자시니 내게 부족함이 없으리로다",
          "3. 참회의 눈물(시 51편): 하나님이여 내 속에 정한 마음을 창조하시고",
          "4. 말씀 예찬(시 119편): 주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
          "5. 메시아 예언 시편: 시 2편(기름부음 받은 왕), 22편(십자가 수난), 110편(영원한 멜기세덱 제사장)"
        ],
        ezraNote: "시편은 온갖 희로애락과 파란만장한 고난을 통과하며 하나님 앞에 토해낸 성도들의 심장 소리입니다. 성경에서 가장 많이 인용되는 기도의 책입니다."
      }
    ],
    "이사야": [
      {
        id: "isa-1",
        badge: "제 12강 이사야 - 구약의 복음서",
        title: "거룩하신 하나님, 고난받는 종과 새 하늘과 새 땅",
        subtitle: "이사야 1장 ~ 66장 | 그가 찔림은 우리의 허물 때문이요",
        scriptureRef: "이사야 6:8, 7:14, 9:6, 53:5-6, 65:17",
        bulletPoints: [
          "1. 성전 환상과 소명(사 6장): 내가 누구를 보내며 누가 우리를 위해 갈꼬 내가 여기 있나이다",
          "2. 임마누엘 예언(사 7:14, 9:6): 처녀가 잉태하여 아들을 낳을 것이요 평강의 왕이라",
          "3. 열방을 향한 준엄한 심판과 남은 자(Remnant)의 거룩한 그루터기",
          "4. 수난의 종(사 53장): 우리는 다 양 같아서 그릇 행하였거늘 여호와께서는 우리의 죄악을 그에게 담당시키셨도다",
          "5. 종말론적 구원과 새 하늘과 새 땅의 찬란한 비전(사 65-66장)"
        ],
        ezraNote: "이사야 66장은 성경 66권의 축소판입니다. 전반부 39장은 심판의 경고(구약 39권), 후반부 27장은 위로와 메시아 복음(신약 27권)을 정확히 예표합니다."
      }
    ],
    "마태복음": [
      {
        id: "mat-1",
        badge: "제 13강 마태복음 - 왕으로 오신 예수 그리스도",
        title: "다윗의 자손 메시아, 산상수훈과 천국 복음",
        subtitle: "마태복음 1장 ~ 28장 | 하늘과 땅의 모든 권세를 내게 주셨으니",
        scriptureRef: "마태복음 1:1, 5:3-10, 16:16, 28:18-20",
        bulletPoints: [
          "1. 아브라함과 다윗의 자손 예수 그리스도의 계보 (구약 예언의 성취)",
          "2. 산상수훈(5~7장): 천국 백성의 헌법, 8복과 세상의 소금과 빛",
          "3. 천국 비유(13장): 겨자씨, 누룩, 밭에 감추인 보화, 좋은 진주",
          "4. 베드로의 신앙고백(16:16): 주는 그리스도시요 살아계신 하나님의 아들이시니이다",
          "5. 십자가 대속과 부활, 지상 대명령: 모든 민족을 제자로 삼아 가르쳐 지키게 하라"
        ],
        ezraNote: "마태복음은 400년 침묵기를 깨고 구약의 모든 언약을 성취하러 오신 '만왕의 왕 예수 그리스도'의 복음서입니다. 구약 성경 인용이 가장 풍부합니다."
      }
    ],
    "사도행전": [
      {
        id: "act-1",
        badge: "제 15강 사도행전 - 성령의 행전과 초대교회",
        title: "오순절 성령 강림과 예루살렘 교회의 부흥",
        subtitle: "사도행전 1장 ~ 12장 | 오직 성령이 너희에게 임하시면",
        scriptureRef: "사도행전 1:8, 2:42-47, 7:55-60",
        bulletPoints: [
          "1. 승천 전 주님의 마지막 명령: 예루살렘과 온 유대와 사마리아와 땅 끝까지 내 증인이 되리라",
          "2. 마가 다락방 120문도의 합심기도와 오순절 성령의 급하고 강한 바람 같은 임재",
          "3. 베드로의 설교로 3,000명이 회개하고 세례를 받음 (사도들의 가르침, 떡을 뗌, 기도)",
          "4. 스데반 집사의 담대한 순교와 흩어진 성도들을 통한 사마리아 및 안디옥 복음 전파",
          "5. 박해자 사울의 다메섹 도상 회심과 이방인의 사도로의 부르심"
        ],
        ezraNote: "사도행전은 십자가에서 죽으시고 부활하신 예수 그리스도께서 하늘 보좌에서 성령을 통하여 친히 교회를 이끌어가신 살아있는 역사입니다."
      },
      {
        id: "act-2",
        badge: "제 15강 사도행전 - 사도 바울의 전도여행과 로마 입성",
        title: "소아시아와 마게도냐 전도, 죄수의 몸으로 로마에 서다",
        subtitle: "사도행전 13장 ~ 28장 | 거침없이 하나님 나라를 전파하니라",
        scriptureRef: "사도행전 13:2-3, 16:9-10, 28:30-31",
        bulletPoints: [
          "1. 안디옥 교회의 금식기도와 바울·바나바의 제1차 소아시아 갈라디아 전도여행 파송",
          "2. 마게도냐 환상(행 16장)과 유럽 복음화의 시작: 빌립보, 데살로니가, 아테네, 고린도",
          "3. 에베소 두란노 서원에서의 3년간 집중 말씀 사역 (주의 말씀이 흥왕하여 세력을 얻음)",
          "4. 예루살렘 체포, 유라굴로 광풍의 구조, 멜리데 섬을 거쳐 마침내 제국의 심장 로마 입성",
          "5. 셋집에서 온 유대인과 이방인에게 담대하게 거침없이 하나님 나라와 주 예수를 가르침"
        ],
        ezraNote: "사도행전 28장은 마침표 없이 끝납니다. 오늘날 우리 성도들이 성령과 말씀의 능력으로 사도행전 29장을 계속 써 내려가야 합니다."
      }
    ],
    "요한계시록": [
      {
        id: "rev-1",
        badge: "제 16강 요한계시록(1) - 일곱 교회와 어린양의 보좌",
        title: "밧모 섬의 계시와 소아시아 일곱 교회에 보낸 편지",
        subtitle: "요한계시록 1장 ~ 11장 | 볼지어다 내가 문 밖에 서서 두드리노니",
        scriptureRef: "요한계시록 1:1-3, 3:20, 5:9-10, 11:15",
        bulletPoints: [
          "1. 이 예언의 말씀을 읽는 자와 듣는 자와 기록된 것을 지키는 자가 복이 있도다",
          "2. 촛대 사이에 계신 인자 같은 이(영광의 그리스도)의 위엄과 음성",
          "3. 소아시아 일곱 교회(에베소~라오디게아)를 향한 칭찬과 책망, 이기는 자를 향한 상급",
          "4. 천상 보좌 환상과 일찍이 죽임을 당하신 어린양만이 일곱 인을 떼시기에 합당하심",
          "5. 일곱 인과 일곱 나팔 재앙: 세상 나라가 우리 주와 그의 그리스도의 나라가 됨"
        ],
        ezraNote: "요한계시록은 공포의 책이 아니라 로마 제국의 극심한 박해 속에 있던 성도들에게 영원한 승리와 소망을 선포한 위로와 격려의 복음서입니다."
      },
      {
        id: "rev-2",
        badge: "제 16강 요한계시록(2) - 최후 승리와 새 하늘과 새 땅",
        title: "음녀 바벨론의 심판, 어린양의 혼인잔치와 새 예루살렘",
        subtitle: "요한계시록 12장 ~ 22장 | 아멘 주 예수여 오시옵소서",
        scriptureRef: "요한계시록 19:7-9, 21:1-4, 22:20",
        bulletPoints: [
          "1. 해를 옷 입은 여자와 붉은 용의 영적 전쟁, 어린양의 피와 증언하는 말로 승리함",
          "2. 큰 성 바벨론(세상 음녀 문명)의 완전한 멸망과 천상의 할렐루야 찬양",
          "3. 백마 탄 만왕의 왕 예수 그리스도의 강림과 짐승·거짓 선지자의 최후 심판",
          "4. 사망과 슬픔과 눈물이 다시 없는 새 하늘과 새 땅, 거룩한 성 새 예루살렘",
          "5. 성경 66권의 찬란한 대단원: 내가 진실로 속히 오리라 하시거늘 아멘 주 예수여 오시옵소서!"
        ],
        ezraNote: "창세기에서 잃어버렸던 에덴동산의 생명나무가 요한계시록 22장에서 온전히 회복됩니다. 성경은 하나님의 사랑이 기필코 승리함을 선포합니다."
      }
    ],
    "성경강좌원리": [
      {
        id: "principle-1",
        badge: "제 1강 성경강좌의 기본 원리와 구약 상관관계",
        title: "성경 66권을 관통하는 에스라 성경강좌 3대 원리",
        subtitle: "창세기부터 계시록까지 거룩한 하나님의 구속사 맥 짚기",
        scriptureRef: "에스라 7:10, 느헤미야 8:8, 디모데후서 3:16-17",
        bulletPoints: [
          "1. 역사적 배경(Fact): 언제, 어디서, 누구에게, 왜 기록되었는지를 시대적 정황 속에서 파악",
          "2. 문맥과 전체 구조(Context): 단편적 구절 중심 큐티를 지양하고 책 전체의 흐름과 구속사의 맥을 통독",
          "3. 하나님의 심정(Heart): 성경 곳곳에 배어 있는 하나님의 아픈 가슴과 애타는 사랑을 깨달음",
          "4. 학사 에스라의 결단: 말씀을 연구하고 준행하며 백성에게 가르치기로 뜻을 정함",
          "5. 신구약의 유기적 통일성: 구약은 그림자요 신약은 실체이며 그리스도를 향해 수렴함"
        ],
        ezraNote: "성경은 하나님께서 사람에게 보내신 사랑의 편지입니다. 편지를 읽을 때는 한두 줄만 떼어 읽지 않고 처음부터 끝까지 보낸 이의 마음을 헤아리며 읽어야 합니다."
      },
      {
        id: "principle-2",
        badge: "제 1강 구약 39권 역사서와 예언서의 상관관계 도표",
        title: "역사서 17권의 뼈대 위에 예언서 17권의 짝을 맞추어 읽음",
        subtitle: "연대기적 순서로 읽어야 성경의 참뜻이 명쾌하게 열립니다",
        scriptureRef: "누가복음 24:27, 24:44-45",
        bulletPoints: [
          "1. 구약의 뼈대: 모세오경(5권) ➔ 역사서(12권) 총 17권의 역사적 뼈대",
          "2. 분열왕국 초기 선지자: 요나, 아모스, 호세아 (북이스라엘 여로보암 2세의 번영과 타락 경고)",
          "3. 분열왕국 중·말기 선지자: 요엘, 이사야, 미가, 하박국, 스바냐, 예레미야 (남유다 심판 경고)",
          "4. 바벨론 포로기 선지자: 에스겔, 다니엘 (그발 강가와 바벨론 왕궁에서의 회복 비전)",
          "5. 포로귀환 시대 선지자: 학개, 스가랴, 말라기 (성전 재건과 메시아 도래 대망)"
        ],
        ezraNote: "역사서를 모른 채 예언서만 읽으면 난해하기 짝이 없지만, 역사서의 구체적 사건 현장에 예언서를 매치시키면 선지자들의 절규가 생생하게 들려옵니다."
      }
    ],
    "신구약중간사": [
      {
        id: "inter-1",
        badge: "신구약 중간사 (말라기 ~ 마태복음 400년)",
        title: "침묵기의 세계 제국 변천사와 하스몬 마카비 혁명",
        subtitle: "페르시아 ➔ 헬라 알렉산더 ➔ 프톨레마이오스 & 셀레우코스 ➔ 마카비 독립",
        scriptureRef: "다니엘 8:21-22, 11:31-32, 갈라디아서 4:4",
        bulletPoints: [
          "1. 페르시아의 종말과 알렉산더 대왕의 동방원정: 헬라어 통용과 헬레니즘 문화 확산",
          "2. 알렉산더 사후 4대 장군 분할: 이집트 프톨레마이오스 vs 시리아 셀레우코스 왕조의 쟁패",
          "3. 안티오쿠스 4세 에피파네스의 예루살렘 성전 제우스 제단 모독과 율법서 소각 만행",
          "4. 마타디아와 유다 마카비의 거룩한 신앙 혁명: 성전을 정결하게 회복한 수전절(하누카)의 유래",
          "5. 하스몬 왕조 100년간의 독립과 점진적 부패, 그리고 로마 폼페이우스 장군의 예루살렘 입성"
        ],
        ezraNote: "구약과 신약 사이 400년은 하나님이 쉬신 침묵기가 아니라, 온 인류 구원을 위해 독생자를 보내실 역사적 무대를 치밀하게 준비하신 은혜의 시간이었습니다."
      },
      {
        id: "inter-2",
        badge: "신구약 중간사 - 신약성경의 지리·종교·정치 배경",
        title: "로마 제국의 지배, 헤롯 가문, 사두개파와 바리새파의 등장",
        subtitle: "때가 차매 하나님이 그 아들을 보내사 여자에게서 나게 하시고",
        scriptureRef: "갈라디아서 4:4-5, 누가복음 2:1-2",
        bulletPoints: [
          "1. 팍스 로마나(Pax Romana): 로마의 평화, 군용 도로망(Via)과 해상 교통로 완비",
          "2. 이두매(에돔) 출신 에돔인 헤롯 대왕의 유대 통치와 예루살렘 성전 46년간의 중축",
          "3. 유대교 분파 형성: 바리새파(율법 구별), 사두개파(귀족 제사장 현실주의), 에세네파(쿰란 동굴 금욕)",
          "4. 헬라어 70인역(LXX) 구약 번역: 전 지중해 세계에 성경 말씀이 널리 전파됨",
          "5. 영적 갈망의 극치: 로마의 압제 속에서 다윗의 자손 참된 메시아를 애타게 기다린 세월"
        ],
        ezraNote: "정치적으로는 로마가 길을 닦고, 문화적으로는 헬라어가 말을 통하게 하였으며, 종교적으로는 율법의 한계를 절감하게 하신 후 바로 그 최적의 타이밍에 예수님이 오셨습니다."
      }
    ],
    "로마역사": [
      {
        id: "rome-1",
        badge: "로마 제국 역사와 신약성경 특강",
        title: "카이사르부터 네로까지 로마 제정의 황제들과 초대교회",
        subtitle: "로마 황제 숭배의 칼날 앞에서도 흔들리지 않은 기독교 신앙",
        scriptureRef: "누가복음 2:1, 3:1, 사도행전 18:2, 25:11-12",
        bulletPoints: [
          "1. 율리우스 카이사르 암살과 옥타비아누스(아우구스투스) 즉위: 호적령으로 베들레헴 탄생 성취",
          "2. 디베료(티베리우스) 황제 치하: 예수 그리스도의 십자가 수난과 빌라도 총독의 재판",
          "3. 글라우디오(클라우디우스)의 로마 유대인 추방령: 아굴라와 브리스길라가 고린도에서 바울과 동역",
          "4. 네로 황제의 로마 대화재 방화와 기독교인 학살: 베드로와 바울의 장렬한 순교",
          "5. 도미티아누스 황제의 극심한 박해와 밧모 섬의 사도 요한을 통한 요한계시록 기록"
        ],
        ezraNote: "로마 제국의 황제들은 자신을 신(God)이라 칭하며 숭배를 강요했으나, 그리스도인들은 '가이사가 주가 아니라 오직 예수만이 주님이시다'라며 목숨을 바쳤습니다."
      }
    ],
    "성경과역사": [
      {
        id: "hist-1",
        badge: "특강 - 성경과 역사 그리고 미래",
        title: "하나님의 이야기(His-Story) 구속사의 완성과 미래",
        subtitle: "창조에서 종말까지, 인류 역사의 주인은 만군의 여호와이십니다",
        scriptureRef: "이사야 46:9-10, 다니엘 2:44, 베드로후서 3:11-13",
        bulletPoints: [
          "1. 역사(History)의 참된 정의: 창조주 하나님의 섭리와 구속 경륜이 펼쳐지는 거룩한 무대",
          "2. 인류 문명의 거짓 신화(바벨탑, 로마 제국, 현대 세속주의)의 필연적 붕괴와 심판",
          "3. 역사의 굽이마다 남겨두신 거룩한 그루터기(남은 자)를 통한 구원사의 계승",
          "4. 이스라엘의 회복과 이방인 충만한 수의 구원, 그리고 복음의 온 세계 증거",
          "5. 주님의 재림과 새 하늘과 새 땅: 거룩한 행실과 경건함으로 그날을 바라보고 사모하라"
        ],
        ezraNote: "역사를 모르는 성도는 미래를 분별할 수 없습니다. 성경을 통해 역사의 주관자이신 하나님의 뜻을 분별하고 오늘 우리의 삶의 자리를 굳건히 지켜야 합니다."
      }
    ],
    "구약종합": [
      {
        id: "ot-all-1",
        badge: "30시간 성경강좌 - 구약 39권 종합 교재",
        title: "구약 39권의 파노라마와 언약의 신실하심",
        subtitle: "모세오경 5권 ➔ 역사서 12권 ➔ 시가서 5권 ➔ 예언서 17권",
        scriptureRef: "누가복음 24:44, 히브리서 1:1-2",
        bulletPoints: [
          "1. 율법서(5권): 우주와 인간의 기원, 제사장 나라의 언약 헌법과 성막",
          "2. 역사서(12권): 가나안 정복, 사사시대, 다윗의 통일왕국, 분열과 포로, 그리고 성전 재건",
          "3. 시가서(5권): 파란만장한 역사 속에서 하나님을 향해 토해낸 눈물과 찬양, 삶의 지혜",
          "4. 대선지서 & 소선지서(17권): 멸망해가는 조국을 바라보며 회개를 외친 선지자들의 눈물",
          "5. 구약의 총결론: 율법을 지킬 수 없는 연약한 인간을 위해 친히 새 언약과 메시아를 보내시겠다는 약속"
        ],
        ezraNote: "구약 39권은 옛날이야기가 아닙니다. 오늘날 우리의 죄악된 자화상을 비추는 거울이며, 하나님의 한없는 사랑을 증언하는 구원의 전반부입니다."
      }
    ],
    "신약종합": [
      {
        id: "nt-all-1",
        badge: "30시간 성경강좌 - 신약 27권 종합 교재",
        title: "신약 27권의 파노라마와 성취된 복음",
        subtitle: "사복음서 4권 ➔ 사도행전 1권 ➔ 바울서신 13권 ➔ 공동서신 8권 ➔ 요한계시록 1권",
        scriptureRef: "요한복음 20:31, 로마서 1:16, 요한계시록 22:20",
        bulletPoints: [
          "1. 사복음서: 왕(마태), 종(마가), 인자(누가), 하나님의 아들(요한)로 오신 예수 그리스도의 생애",
          "2. 사도행전: 성령의 권능으로 예루살렘에서 땅끝 로마까지 확장된 교회의 폭발적 부흥",
          "3. 바울서신 13권: 이신칭의, 교회의 신비, 성도의 거룩한 삶과 목회적 지침",
          "4. 공동서신 8권: 고난과 이단 미혹을 이겨내는 산 믿음, 소망, 사랑의 권면",
          "5. 요한계시록: 만왕의 왕으로 다시 오실 어린양의 최종 승리와 영원한 새 예루살렘의 완성"
        ],
        ezraNote: "신약은 예수 그리스도를 통해 구약의 모든 언약이 피로 성취되었음을 선언합니다. 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력입니다."
      }
    ],
    "쉐마특강": [
      {
        id: "shema-1",
        badge: "쉐마교육 신앙전수 특별강좌",
        title: "들으라 이스라엘아! 다음 세대를 살리는 가정 신앙전수",
        subtitle: "신명기 6장 4절~9절 | 네 자녀에게 부지런히 가르치며",
        scriptureRef: "신명기 6:4-9, 사사기 2:10, 디모데후서 1:5",
        bulletPoints: [
          "1. 여호와는 오직 유일한 여호와이시니 너는 마음과 뜻과 힘을 다하여 사랑하라",
          "2. 사사기의 비극: 쉐마 교육의 부재로 인해 '여호와를 알지 못하는 다른 세대'가 일어남",
          "3. 가정 제단의 회복: 부모가 먼저 말씀으로 무장하고 삶의 모범으로 자녀를 양육함",
          "4. 앉았을 때에든지 길을 갈 때에든지 누웠을 때에든지 일어날 때에든지 강론할 것",
          "5. 손목에 매어 기호를 삼고 미간에 붙여 표를 삼으며 집 문설주와 바깥문에 기록할지니라"
        ],
        ezraNote: "신앙 교육의 일차적 책임은 주일학교가 아니라 부모와 가정에 있습니다. 가정이 살아나고 쉐마가 회복될 때 교회와 민족의 미래가 밝아집니다."
      }
    ],
    "식생활특강": [
      {
        id: "diet-1",
        badge: "레위기 11장 - 거룩한 백성의 식생활과 건강",
        title: "성경적 건강 원리와 거룩한 식생활 율례",
        subtitle: "레위기 11장 44절~45절 | 내가 거룩하니 너희도 몸을 구별하여 거룩하게 하라",
        scriptureRef: "레위기 11:1-47, 고린도전서 6:19-20, 10:31",
        bulletPoints: [
          "1. 음식 규례의 참뜻: 단순한 율법주의가 아닌 성도들의 생명과 건강을 지키시는 하나님의 사랑",
          "2. 정결한 육축: 굽이 갈라져 쪽발이 되고 되새김질하는 것 (초식 동물의 위생성)",
          "3. 정결한 어류: 지느러미와 비늘이 있는 것 (바닥의 오염물질을 먹지 않는 어종)",
          "4. 금지된 생물들: 썩은 고기를 먹는 조류, 독성과 중금속을 축적하는 연체·갑각류 경계",
          "5. 너희 몸은 성령의 전: 먹든지 마시든지 무엇을 하든지 다 하나님의 영광을 위하여 하라"
        ],
        ezraNote: "하나님은 우리의 영혼뿐 아니라 육체의 건강도 깊이 아끼십니다. 절제와 거룩한 식생활은 하나님이 주신 귀한 몸을 아름답게 보존하는 영적 예배입니다."
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 성경 66권 전권 10~15장 고밀도 종합 PPT 슬라이드 덱 동적 생성 엔진
  // --------------------------------------------------------------------------
  function generateComprehensiveBookSlides(bookName) {
    const bData = (typeof getBookByName === "function")
      ? getBookByName(bookName)
      : (window.BIBLE_BOOKS_DATA ? window.BIBLE_BOOKS_DATA.find(b => b.name === bookName) : null);

    if (!bData) return null;

    const slides = [];
    const testKr = bData.testament === 'OT' ? '구약성경' : '신약성경';

    // SLIDE 1: 책의 개요 및 중심 주제
    slides.push({
      id: `${bData.name}-slide-1`,
      badge: `에스라 성경강좌 [${bData.name}] 제 1강: 개요 및 주제`,
      title: `${bData.name} (${bData.engName}) - ${bData.theme}`,
      subtitle: `${testKr} 제 ${bData.id}권 | 총 ${bData.chapters}장 | 분류: ${bData.category} | 연대기 순서 제 ${bData.chronologicalOrder}위`,
      scriptureRef: `핵심 요절: ${bData.keyVerse}`,
      bulletPoints: [
        `1. [구속사적 위치]: ${testKr} ${bData.category}의 핵심 책으로, 성경 66권 구속사의 거룩한 축을 담당함`,
        `2. [책의 중심 주제]: ${bData.theme}`,
        `3. [기록 목적 및 역사적 의의]: ${bData.summary}`,
        `4. [기록자 및 연대]: B.C./A.D. ${bData.date}경 성령의 감동으로 ${bData.author}에 의해 기록됨`,
        `5. [핵심 요절 선포]: "${bData.keyVerse}"`
      ],
      ezraNote: bData.ezraPerspective
    });

    // SLIDE 2: 저자와 시대적·역사적 배경 심층 연구
    slides.push({
      id: `${bData.name}-slide-2`,
      badge: `에스라 성경강좌 [${bData.name}] 제 2강: 시대적 배경과 저자의 소명`,
      title: `${bData.name}의 역사적 배경과 기록자 [${bData.author}]의 영적 상황`,
      subtitle: `사건이 전개된 당시의 국제 정세, 영적 위기 및 하나님의 구속 경륜`,
      scriptureRef: `${bData.name} 1장 / 기록 연대: ${bData.date}`,
      bulletPoints: [
        `1. [당시의 시대적 정황]: 당시 이스라엘 백성들의 영적 상태와 주변 강대국들의 정치·군사적 위협`,
        `2. [기록자 ${bData.author}의 심정]: 위기 속에서 백성을 깨우치고 하나님의 공의와 사랑을 전파하도록 부름받음`,
        `3. [기록의 긴급성]: 형식적 종교의식과 도덕적 타락을 경고하고, 참된 신앙의 본질을 회복하게 함`,
        `4. [원 독자(First Readers)들의 상황]: 고난과 환난 중에 하나님의 신실하신 언약을 상기하도록 격려함`,
        `5. [역사적 교훈(Fact)]: 허구가 아닌 구체적 역사 현장 속에서 친히 일하신 하나님의 주권적 섭리`
      ],
      ezraNote: `성경은 실제 역사(Fact) 속에서 인간의 연약함과 실패, 그리고 그 실패에도 불구하고 언약을 이루어 가시는 하나님의 열심을 증언합니다.`
    });

    // SLIDE 3: 전체 장별 구조 파노라마와 거룩한 맥
    if (bData.structure && bData.structure.length > 0) {
      const structSummaryBullets = bData.structure.map((s, idx) => 
        `${idx + 1}. [${s.part}]: ${s.content}`
      );
      slides.push({
        id: `${bData.name}-slide-3`,
        badge: `에스라 성경강좌 [${bData.name}] 제 3강: 전체 구조 조망`,
        title: `${bData.name} 전체 ${bData.chapters}장 구조 파노라마와 단락별 맥`,
        subtitle: `단편적 구절 중심을 넘어 책 전체의 뼈대와 흐름을 한눈에 통찰`,
        scriptureRef: `${bData.name} 1장 ~ ${bData.chapters}장`,
        bulletPoints: structSummaryBullets,
        ezraNote: "성경을 구절 단위로 쪼개어 읽으면 숲을 보지 못하고 나무만 보게 됩니다. 전체 장별 구조의 흐름 속에서 읽을 때 저자의 기록 목적과 하나님의 온전한 뜻이 밝히 드러납니다."
      });

      // SLIDES 4 ~ (4 + structure.length - 1): 장별 구조 각 Part별 단독 정밀 강해 슬라이드
      bData.structure.forEach((partItem, pIdx) => {
        slides.push({
          id: `${bData.name}-slide-struct-${pIdx + 1}`,
          badge: `[${bData.name} 장별 정밀 강해] ${partItem.part.split(':')[0] || '단락 ' + (pIdx + 1)}`,
          title: `${bData.name} ${partItem.part}`,
          subtitle: `본문 핵심 사건의 전개와 구속사적 영적 메시지 분석`,
          scriptureRef: `${bData.name} ${partItem.part}`,
          bulletPoints: [
            `1. [단락 개요]: ${partItem.content}`,
            `2. [핵심 역사적 사건]: 본문에서 일어난 중대한 신앙적 결단과 위기 극복의 과정`,
            `3. [인간의 모습]: 불순종과 타협, 혹은 고난 속에서도 믿음으로 순종한 인물들의 삶`,
            `4. [하나님의 성품]: 죄를 미워하시되 백성을 긍휼히 여기시는 거룩하신 언약의 하나님`,
            `5. [영적 교훈]: 오늘날 우리의 삶과 가정, 교회 공동체에 던지는 준엄한 경고와 위로`
          ],
          ezraNote: `본 단락을 묵상할 때 본문 속 인물들의 실수와 회개를 거울삼아, 오늘 우리의 삶에서 버려야 할 우상과 회복해야 할 순종을 정직하게 직면해야 합니다.`
        });
      });
    }

    // SLIDES: DEFAULT_SLIDE_DECKS에 사전 정의된 특강/핵심 슬라이드가 있으면 함께 합성
    if (DEFAULT_SLIDE_DECKS[bData.name] && DEFAULT_SLIDE_DECKS[bData.name].length > 0) {
      DEFAULT_SLIDE_DECKS[bData.name].forEach((curatedSlide) => {
        slides.push(Object.assign({}, curatedSlide, {
          id: `${bData.name}-curated-${curatedSlide.id || Math.random()}`
        }));
      });
    }

    // SLIDE: 샤론강단 대하설교 핵심 녹취록 분석 (LECTURE_INDEX_DATA 연동)
    const sermons = (window.LECTURE_INDEX_DATA && window.LECTURE_INDEX_DATA[bData.name])
      ? window.LECTURE_INDEX_DATA[bData.name]
      : [];

    if (sermons.length > 0) {
      const s1 = sermons[0];
      slides.push({
        id: `${bData.name}-slide-sermon-1`,
        badge: `샤론강단 대하설교 분석 [${bData.name} 제${s1.no}편]`,
        title: `노우호 목사 대하설교: ${s1.title}`,
        subtitle: `본문: ${s1.scripture}`,
        scriptureRef: s1.scripture,
        bulletPoints: [
          `1. [강단 선포 배경]: ${s1.summary}`,
          ...(s1.keyPoints || []).map((kp, kIdx) => `${kIdx + 2}. [핵심 요점]: ${kp}`),
          `5. [샤론강단 결론]: "${s1.message}"`
        ],
        ezraNote: s1.message || bData.ezraPerspective
      });

      if (sermons.length > 1) {
        const s2 = sermons[1];
        slides.push({
          id: `${bData.name}-slide-sermon-2`,
          badge: `샤론강단 대하설교 분석 [${bData.name} 제${s2.no}편]`,
          title: `노우호 목사 대하설교: ${s2.title}`,
          subtitle: `본문: ${s2.scripture}`,
          scriptureRef: s2.scripture,
          bulletPoints: [
            `1. [강단 선포 배경]: ${s2.summary}`,
            ...(s2.keyPoints || []).map((kp, kIdx) => `${kIdx + 2}. [핵심 요점]: ${kp}`),
            `5. [샤론강단 결론]: "${s2.message}"`
          ],
          ezraNote: s2.message || bData.ezraPerspective
        });
      }
    } else {
      slides.push({
        id: `${bData.name}-slide-depth-1`,
        badge: `에스라 성경강좌 [${bData.name}] 본문 핵심 심층 강해`,
        title: `${bData.name}에 흐르는 하나님의 거룩한 공의와 사랑`,
        subtitle: `말씀 속에 새겨진 하나님의 언약적 신실하심과 심판의 경고`,
        scriptureRef: bData.keyVerse,
        bulletPoints: [
          `1. [공의의 하나님]: 거룩하신 하나님은 죄를 결코 묵과하지 않으시며 반드시 심판하심`,
          `2. [사랑의 하나님]: 심판 중에도 회개하는 자를 위해 남은 자를 예비하시고 회복을 약속하심`,
          `3. [제사장 나라의 사명]: 온 세상 열방을 하나님께로 인도할 거룩한 백성으로서의 정체성`,
          `4. [신구약의 맥락]: ${bData.name}의 사건과 계시가 성경 66권 전체 구원사에 미치는 영향`,
          `5. [말씀 앞의 통회]: 학사 에스라처럼 말씀을 펼치고 옷을 찢으며 회개하는 영적 각성`
        ],
        ezraNote: bData.ezraPerspective
      });
    }

    // SLIDE: 구속사적 연결 및 예수 그리스도의 예표
    slides.push({
      id: `${bData.name}-slide-christ`,
      badge: `에스라 성경강좌 [${bData.name}] 구속사 세미나`,
      title: `${bData.name}에 나타난 예수 그리스도와 복음의 성취`,
      subtitle: `너희가 성경에서 영생을 얻는 줄 생각하고 성경을 연구하거니와 이 성경이 곧 내게 대하여 증언하는 것이니라 (요 5:39)`,
      scriptureRef: `요한복음 5:39, 누가복음 24:27, 24:44`,
      bulletPoints: [
        `1. [그리스도의 모형]: ${bData.name}에 나타난 그리스도의 직분 (참 선지자, 제사장, 영원한 왕)`,
        `2. [피의 언약]: 구약의 모든 언약과 사건들은 십자가에서 피 흘리실 예수 그리스도의 그림자`,
        `3. [율법의 완성]: 인간의 힘으로 이룰 수 없는 율법의 요구를 그리스도께서 친히 대속으로 완성하심`,
        `4. [교회의 정체성]: 그리스도의 신부 된 성도들이 세상 가운데 거룩한 제사장으로 살아가야 함`,
        `5. [영원한 하나님 나라]: 부활하신 그리스도께서 다시 오시어 세우실 영원한 새 하늘과 새 땅`
      ],
      ezraNote: `성경의 모든 맥은 십자가에서 죽으시고 부활하신 예수 그리스도를 향하고 있습니다. ${bData.name}을 읽을 때도 그리스도의 은혜와 구속의 빛 아래서 조명해야 합니다.`
    });

    // SLIDE: 노우호 목사님의 에스라 성경통독 핵심 맥
    slides.push({
      id: `${bData.name}-slide-ezra-heart`,
      badge: `노우호 목사의 에스라 강단 [${bData.name}] 핵심 맥`,
      title: `하나님의 아픈 가슴과 애타는 심정을 깨닫는 성경통독`,
      subtitle: `글자(문자)에 갇히지 않고 성경을 기록하신 아버지 하나님의 심장 소리를 들음`,
      scriptureRef: bData.keyVerse,
      bulletPoints: [
        `1. [아버지 하나님의 가슴]: ${bData.ezraPerspective}`,
        `2. [통독의 거룩한 습관]: 성경을 부분적으로 쪼개어 읽지 않고, 기록자의 호흡으로 일독 통독함`,
        `3. [이 시대의 영적 위기]: 인본주의적 큐티와 세속화된 번영신학을 배격하고 성경 원형으로 귀환`,
        `4. [학사 에스라의 개혁]: 말씀을 연구하고 준행하며 가르치는 말씀 사경회의 불길을 지핌`,
        `5. [착하고 좋은 마음]: 말씀을 듣고 지키어 인내로 백 배의 결실을 맺는 성도의 기본 자세`
      ],
      ezraNote: bData.ezraPerspective
    });

    // SLIDE: 성도들의 삶의 결단 & 실천적 적용
    slides.push({
      id: `${bData.name}-slide-application`,
      badge: `에스라 성경강좌 [${bData.name}] 삶의 결단과 축복`,
      title: `${bData.name}을 마치는 성도들의 실천적 신앙 결단`,
      subtitle: `너희는 도를 행하는 자가 되고 듣기만 하여 자신을 속이는 자가 되지 말라 (약 1:22)`,
      scriptureRef: `야고보서 1:22, 여호수아 24:14-15`,
      bulletPoints: [
        `1. [개인 경건의 개혁]: 매일 하나님의 말씀을 온전히 상고하며 세속 가치관을 분토처럼 배설함`,
        `2. [가정 쉐마의 회복]: 부모가 먼저 말씀으로 무장하고 자녀들에게 신앙의 유산을 온전히 전수함`,
        `3. [교회와 이웃 섬김]: 교회 안에서만 머무는 신앙이 아닌 세상 속에서 빛과 소금의 착한 행실 실천`,
        `4. [공의와 사랑의 균형]: 하나님의 공의로운 법을 지키며 이웃에게 그리스도의 긍휼을 베풂`,
        `5. [다시 오실 주님 대망]: 마라나타! 주 예수여 속히 오시옵소서 기도하며 거룩한 신부로 단장함`
      ],
      ezraNote: `말씀을 배우고도 삶이 변하지 않는다면 아무 소용이 없습니다. ${bData.name}의 말씀을 가슴에 품고 오늘 내 삶의 현장에서 순종의 한 걸음을 내딛으십시오.`
    });

    return slides;
  }

  // --------------------------------------------------------------------------
  // 2. 슬라이드 스튜디오 매니저 (SlideStudioManager)
  // --------------------------------------------------------------------------
  class SlideStudioManager {
    constructor() {
      this.storageKey = "ezra_lecture_slides_v4";
      this.decks = this.loadDecks();
      this.activeBook = "창세기";
      this.currentSlideIndex = 0;
      this.containerId = null;
      this.isEditing = false;
      this.slideTheme = localStorage.getItem("ezra_slide_theme") || "dark";
      this.slideFontSize = parseInt(localStorage.getItem("ezra_slide_font_size")) || 18;
    }

    toggleSlideTheme() {
      this.slideTheme = this.slideTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ezra_slide_theme", this.slideTheme);
      this.render();
      if (window.showToast) {
        window.showToast(`슬라이드 배경: ${this.slideTheme === "dark" ? "어두운 배경 (고대비)" : "밝은 배경 (클리어 화이트)"}`);
      }
    }

    adjustFontSize(delta) {
      this.slideFontSize = Math.min(28, Math.max(14, this.slideFontSize + delta));
      localStorage.setItem("ezra_slide_font_size", this.slideFontSize);
      this.render();
      if (window.showToast) {
        window.showToast(`슬라이드 본문 글자 크기: ${this.slideFontSize}px`);
      }
    }

    loadDecks() {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          return Object.assign({}, DEFAULT_SLIDE_DECKS, parsed);
        }
      } catch (e) {
        console.warn("Failed to load local slide decks:", e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_SLIDE_DECKS));
    }

    saveDecks() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.decks));
      } catch (e) {
        console.error("Failed to save slide decks:", e);
      }
    }

    getSlides(bookName) {
      const name = bookName || this.activeBook;
      
      // 1. 사용자 맞춤 수정 슬라이드가 있고 5장 이상이면 반환
      if (this.decks && this.decks[name] && this.decks[name].length >= 5) {
        return this.decks[name];
      }

      // 2. 집중특강 8종 덱 체크 (성경강좌원리, 신구약중간사, 로마역사, 구약종합, 신약종합, 쉐마특강, 식생활특강, 성경과역사)
      const specialKeys = ["성경강좌원리", "식생활특강", "신구약중간사", "로마역사", "구약종합", "신약종합", "쉐마특강", "성경과역사"];
      if (specialKeys.includes(name) && DEFAULT_SLIDE_DECKS[name] && DEFAULT_SLIDE_DECKS[name].length > 0) {
        return DEFAULT_SLIDE_DECKS[name];
      }

      // 3. 성경 66권 전권에 대한 10~15장 고밀도 종합 에스라 슬라이드 덱 동적 합성
      const comprehensive = generateComprehensiveBookSlides(name);
      if (comprehensive && comprehensive.length > 0) {
        return comprehensive;
      }

      // 4. 폴백
      if (DEFAULT_SLIDE_DECKS[name] && DEFAULT_SLIDE_DECKS[name].length > 0) {
        return DEFAULT_SLIDE_DECKS[name];
      }

      return [
        {
          id: `${name}-default-1`,
          badge: `에스라 성경강좌 [${name}]`,
          title: `${name} 에스라 성경강좌 교재 슬라이드`,
          subtitle: `노우호 목사님의 성경강좌 및 대하설교 핵심 교재`,
          scriptureRef: `${name} 전편`,
          bulletPoints: [
            `1. [${name}]의 역사적 배경과 기록 목적`,
            `2. 하나님의 심정과 에스라 성경통독 관점`,
            `3. 성경 66권 구속사 속에서의 위치와 사명`,
            `4. 현대 성도들을 향한 권면과 실천적 결단`
          ],
          ezraNote: `본 슬라이드는 [수정] 버튼을 통해 직접 제목, 핵심 요점, 강해 노트를 수정하거나 추가할 수 있습니다.`
        }
      ];
    }

    getCurrentSlide() {
      const slides = this.getSlides(this.activeBook);
      if (this.currentSlideIndex >= slides.length) {
        this.currentSlideIndex = 0;
      }
      return slides[this.currentSlideIndex];
    }

    setBook(bookName) {
      this.activeBook = bookName;
      this.currentSlideIndex = 0;
      this.isEditing = false;
      this.render();
      if (typeof window.onSlideBookChanged === "function") {
        window.onSlideBookChanged(bookName);
      }
    }

    nextSlide() {
      const slides = this.getSlides(this.activeBook);
      if (this.currentSlideIndex < slides.length - 1) {
        this.currentSlideIndex++;
        this.render();
      }
    }

    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.render();
      }
    }

    goToSlide(index) {
      const slides = this.getSlides(this.activeBook);
      if (index >= 0 && index < slides.length) {
        this.currentSlideIndex = index;
        this.render();
      }
    }

    toggleEditMode() {
      this.isEditing = !this.isEditing;
      this.render();
    }

    saveCurrentEdit(formData) {
      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(this.getSlides(this.activeBook)));
      }
      const slides = this.decks[this.activeBook];
      const cur = slides[this.currentSlideIndex] || {};

      cur.badge = formData.badge || cur.badge;
      cur.title = formData.title || cur.title;
      cur.subtitle = formData.subtitle || cur.subtitle;
      cur.scriptureRef = formData.scriptureRef || cur.scriptureRef;
      cur.bulletPoints = formData.bulletPointsText
        ? formData.bulletPointsText.split("\n").map(s => s.trim()).filter(Boolean)
        : cur.bulletPoints;
      cur.ezraNote = formData.ezraNote || cur.ezraNote;

      slides[this.currentSlideIndex] = cur;
      this.saveDecks();
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("✅ 슬라이드가 성공적으로 저장되었습니다!");
    }

    addNewSlide() {
      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(this.getSlides(this.activeBook)));
      }
      const slides = this.decks[this.activeBook];
      const newSlide = {
        id: `${this.activeBook}-${Date.now()}`,
        badge: `에스라 성경강좌 [${this.activeBook}]`,
        title: `새 슬라이드 제목 (클릭하여 편집)`,
        subtitle: `강의 부제목 및 성경 범위 입력`,
        scriptureRef: `${this.activeBook} 본문`,
        bulletPoints: [
          "1. 첫 번째 핵심 요점을 입력하세요.",
          "2. 두 번째 핵심 요점을 입력하세요.",
          "3. 세 번째 핵심 요점을 입력하세요."
        ],
        ezraNote: `에스라하우스 성경강좌 핵심 노트 및 묵상 내용`
      };
      slides.push(newSlide);
      this.saveDecks();
      this.currentSlideIndex = slides.length - 1;
      this.isEditing = true;
      this.render();
      if (window.showToast) window.showToast("➕ 새 슬라이드가 추가되었습니다. 편집을 진행하세요.");
    }

    deleteCurrentSlide() {
      const slides = this.getSlides(this.activeBook);
      if (slides.length <= 1) {
        alert("최소 1장의 슬라이드는 유지되어야 합니다.");
        return;
      }
      if (!confirm("현재 슬라이드를 정말 삭제하시겠습니까?")) return;

      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(slides));
      }
      this.decks[this.activeBook].splice(this.currentSlideIndex, 1);
      if (this.currentSlideIndex >= this.decks[this.activeBook].length) {
        this.currentSlideIndex = Math.max(0, this.decks[this.activeBook].length - 1);
      }
      this.saveDecks();
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("🗑️ 슬라이드가 삭제되었습니다.");
    }

    resetDefaultSlides() {
      if (!confirm(`[${this.activeBook}]의 슬라이드를 초기 표준 데이터로 초기화하시겠습니까?`)) return;
      if (DEFAULT_SLIDE_DECKS[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(DEFAULT_SLIDE_DECKS[this.activeBook]));
      } else {
        delete this.decks[this.activeBook];
      }
      this.saveDecks();
      this.currentSlideIndex = 0;
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("🔄 표준 슬라이드 덱으로 복원되었습니다.");
    }

    exportSlideHtml() {
      const slides = this.getSlides(this.activeBook);
      let slidesHtml = slides.map((s, idx) => `
        <div class="slide-card">
          <div class="slide-num">SLIDE ${idx + 1} / ${slides.length}</div>
          <div class="badge">${s.badge || ""}</div>
          <h1 class="title">${s.title || ""}</h1>
          <div class="subtitle">${s.subtitle || ""}</div>
          <div class="scripture">📖 ${s.scriptureRef || ""}</div>
          <ul class="bullets">
            ${(s.bulletPoints || []).map(bp => `<li>${bp}</li>`).join("")}
          </ul>
          <div class="note">
            <strong>💡 에스라 강해 노트:</strong>
            <p>${s.ezraNote || ""}</p>
          </div>
        </div>
      `).join("");

      const fullHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>에스라 성경강좌 PPT 교재 - ${this.activeBook}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
    .slide-card { max-width: 960px; margin: 0 auto 30px auto; background: #1e293b; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; page-break-after: always; }
    .slide-num { font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .badge { display: inline-block; padding: 4px 12px; background: rgba(41, 128, 185, 0.2); color: #5DADE2; border-radius: 9999px; font-size: 13px; font-weight: bold; margin-bottom: 12px; }
    .title { font-size: 28px; font-weight: 900; margin: 0 0 8px 0; color: #ffffff; }
    .subtitle { font-size: 16px; color: #cbd5e1; margin-bottom: 8px; }
    .scripture { font-size: 14px; font-weight: 600; color: #38bdf8; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #334155; }
    .bullets { list-style: none; padding: 0; margin: 0 0 24px 0; }
    .bullets li { font-size: 16px; line-height: 1.8; margin-bottom: 10px; padding-left: 20px; position: relative; color: #e2e8f0; }
    .bullets li::before { content: "•"; color: #2980B9; font-size: 24px; position: absolute; left: 0; top: -3px; }
    .note { background: rgba(41, 128, 185, 0.1); border-left: 4px solid #2980B9; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #AED6F1; }
    @media print { body { background: white; color: black; } .slide-card { background: white; border: 1px solid #ccc; color: black; box-shadow: none; } .title { color: black; } .subtitle, .bullets li { color: #333; } }
  </style>
</head>
<body>
  ${slidesHtml}
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `에스라_성경강좌_PPT_${this.activeBook}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast("📄 슬라이드 HTML 문서가 다운로드되었습니다!");
    }

    exportDecksBackup() {
      // 모든 슬라이드 덱(기본 + 사용자 커스텀)을 포함한 전체 백업 생성
      const allDecks = Object.assign({}, DEFAULT_SLIDE_DECKS, this.decks);
      const backupData = {
        app: "EzraBibleStudio",
        version: "1.0",
        exportedAt: new Date().toISOString(),
        decks: allDecks
      };
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `에스라_성경강좌_슬라이드_전체백업_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast("💾 슬라이드 강의안 전체 백업 파일이 저장되었습니다!");
    }

    importDecksBackup(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && (parsed.decks || typeof parsed === "object")) {
            const newDecks = parsed.decks || parsed;
            this.decks = Object.assign({}, this.decks, newDecks);
            this.saveDecks();
            this.render();
            if (window.showToast) window.showToast("📥 슬라이드 백업본이 성공적으로 복원되었습니다!");
          } else {
            alert("올바른 에스라 슬라이드 백업 JSON 파일이 아닙니다.");
          }
        } catch (err) {
          alert("파일을 읽는 중 오류가 발생했습니다: " + err.message);
        }
      };
      reader.readAsText(file);
    }

    render(containerId) {
      if (containerId) this.containerId = containerId;
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const slides = this.getSlides(this.activeBook);
      const cur = this.getCurrentSlide();
      const total = slides.length;
      const idx = this.currentSlideIndex;

      if (this.isEditing) {
        // 편집 폼 렌더링
        root.innerHTML = `
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-amber-500/50 p-6 shadow-xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">슬라이드 편집기 (${idx + 1} / ${total}번 슬라이드)</h4>
              </div>
              <div class="flex gap-2">
                <button id="btn-cancel-slide-edit" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300">취소</button>
                <button id="btn-save-slide-edit" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow">저장 완료</button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">상단 배지 (강좌 회차)</label>
                <input id="edit-slide-badge" type="text" value="${cur.badge || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">성경 본문 구절 (Scripture)</label>
                <input id="edit-slide-scripture" type="text" value="${cur.scriptureRef || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">슬라이드 메인 제목</label>
              <input id="edit-slide-title" type="text" value="${cur.title || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-black" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">슬라이드 부제목</label>
              <input id="edit-slide-subtitle" type="text" value="${cur.subtitle || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">강의 핵심 요점 목록 (줄바꿈으로 구분)</label>
              <textarea id="edit-slide-bullets" rows="5" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">${(cur.bulletPoints || []).join("\n")}</textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">💡 에스라 강해 노트 &amp; 묵상 메시지</label>
              <textarea id="edit-slide-note" rows="3" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">${cur.ezraNote || ''}</textarea>
            </div>
          </div>
        `;

        // 편집 이벤트 바인딩
        const btnCancel = root.querySelector("#btn-cancel-slide-edit");
        const btnSave = root.querySelector("#btn-save-slide-edit");
        if (btnCancel) btnCancel.onclick = () => this.toggleEditMode();
        if (btnSave) {
          btnSave.onclick = () => {
            const formData = {
              badge: root.querySelector("#edit-slide-badge").value,
              scriptureRef: root.querySelector("#edit-slide-scripture").value,
              title: root.querySelector("#edit-slide-title").value,
              subtitle: root.querySelector("#edit-slide-subtitle").value,
              bulletPointsText: root.querySelector("#edit-slide-bullets").value,
              ezraNote: root.querySelector("#edit-slide-note").value
            };
            this.saveCurrentEdit(formData);
          };
        }
        return;
      }

      // 프레젠테이션 뷰어 모드 렌더링 (초고대비 폰트 및 가독성 최적화)
      const isDark = this.slideTheme !== "light";
      const fontSize = this.slideFontSize;

      const bulletsList = (cur.bulletPoints || []).map(b => `
        <li class="flex items-start gap-3.5 leading-relaxed">
          <span class="w-3 h-3 rounded-full ${isDark ? 'bg-amber-400 shadow-[0_0_10px_rgba(93,173,226,0.8)]' : 'bg-amber-500 shadow-sm'} mt-2 shrink-0"></span>
          <span class="${isDark ? 'text-white' : 'text-slate-950'} font-bold tracking-wide" style="font-size: ${fontSize}px; line-height: 1.65;">${b}</span>
        </li>
      `).join("");

      const canvasBgClass = isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-2 border-slate-700/80 shadow-2xl"
        : "bg-white text-slate-950 border-2 border-slate-300 shadow-xl";

      const titleClass = isDark
        ? "text-white drop-shadow-md"
        : "text-slate-950";

      const subtitleClass = isDark
        ? "text-amber-200 font-bold"
        : "text-slate-600 font-bold";

      const scriptureClass = isDark
        ? "text-sky-300 font-bold drop-shadow"
        : "text-indigo-800 font-bold";

      const bulletsBoxClass = isDark
        ? "bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl"
        : "bg-slate-50 border-2 border-slate-200 shadow-inner";

      const noteBoxClass = isDark
        ? "bg-amber-950/60 border-2 border-amber-500/50 text-amber-100"
        : "bg-amber-50 border-2 border-amber-400/80 text-slate-900";

      const noteTitleClass = isDark
        ? "text-amber-300"
        : "text-amber-800";

      root.innerHTML = `
        <div class="space-y-4">
          <!-- 상단 툴바: 슬라이드 네비게이션 & 편집 버튼 & 글자크기/배경 조절 -->
          <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                ${this.activeBook} PPT 강의 슬라이드
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">
                ${idx + 1} / ${total}
              </span>
            </div>

            <!-- 네비게이션 및 보기 설정 버튼 그룹 -->
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- 글자 크기 조절 (가- / 가+) -->
              <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
                <button id="btn-slide-font-dec" class="px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition" title="본문 글자 축소">
                  가-
                </button>
                <span class="px-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">${fontSize}px</span>
                <button id="btn-slide-font-inc" class="px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition" title="본문 글자 확대">
                  가+
                </button>
              </div>

              <!-- 배경 테마 전환 버튼 (어두운 배경 / 밝은 배경) -->
              <button id="btn-slide-theme" class="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="슬라이드 배경 전환">
                ${isDark ? '☀️ 밝은 배경' : '🌙 어두운 배경'}
              </button>

              <div class="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"></div>

              <!-- 이전 / 다음 버튼 -->
              <button id="btn-slide-prev" ${idx === 0 ? "disabled" : ""} class="px-3 py-1 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition">
                ◀ 이전
              </button>
              <button id="btn-slide-next" ${idx === total - 1 ? "disabled" : ""} class="px-3 py-1 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition">
                다음 ▶
              </button>
              
              <div class="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"></div>

              <!-- 편집/추가/내보내기 메뉴 -->
              <button id="btn-slide-edit" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="현재 슬라이드 내용 수정">
                ✏️ 수정
              </button>
              <button id="btn-slide-add" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="새 슬라이드 추가">
                ➕ 추가
              </button>
              <button id="btn-slide-del" class="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-100 dark:hover:bg-red-950/40 transition" title="현재 슬라이드 삭제">
                🗑️
              </button>
              <button id="btn-slide-export" class="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition" title="HTML 문서로 저장/인쇄">
                📄 내보내기
              </button>
              <button id="btn-slide-backup-export" class="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="전체 슬라이드 JSON 백업 파일 저장">
                💾 백업
              </button>
              <label class="cursor-pointer px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="JSON 백업 파일 복원">
                📥 복원
                <input id="btn-slide-backup-import" type="file" accept=".json" class="hidden" />
              </label>
              <button id="btn-slide-reset" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition" title="초기 기본값으로 복원">
                🔄
              </button>
            </div>
          </div>

          <!-- 메인 슬라이드 디스플레이 프레임 (프레젠테이션 디자인) -->
          <div id="slide-presentation-canvas" class="relative rounded-2xl ${canvasBgClass} p-6 sm:p-10 overflow-hidden min-h-[380px] flex flex-col justify-between transition-colors duration-200">
            
            <!-- 슬라이드 배경 장식 워터마크 -->
            <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-9xl font-black font-serif select-none">
              EZRA
            </div>

            <!-- 슬라이드 상단 정보 -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 tracking-wider shadow">
                  ${cur.badge || "에스라 성경강좌"}
                </span>
                <span class="text-xs sm:text-sm font-serif ${scriptureClass}">
                  📖 ${cur.scriptureRef || ""}
                </span>
              </div>

              <!-- 슬라이드 제목 & 부제목 -->
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug mb-2 ${titleClass}">
                ${cur.title}
              </h2>
              <p class="text-xs sm:text-sm mb-6 ${subtitleClass}">
                ${cur.subtitle}
              </p>

              <!-- 핵심 요점 불릿 리스트 (초고대비 & 큰 글씨 지원) -->
              <ul class="space-y-3.5 p-5 sm:p-7 rounded-2xl ${bulletsBoxClass}">
                ${bulletsList}
              </ul>
            </div>

            <!-- 슬라이드 하단 에스라 강해 노트 박스 -->
            <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-start gap-3 p-4 rounded-xl ${noteBoxClass}">
              <span class="text-amber-400 text-lg shrink-0">💡</span>
              <div class="text-xs sm:text-sm leading-relaxed font-medium">
                <strong class="block mb-0.5 font-bold ${noteTitleClass}">에스라 강해 포인트:</strong>
                ${cur.ezraNote || ""}
              </div>
            </div>

          </div>

          <!-- 하단 슬라이드 전체 번호 페이지 칩 네비게이터 -->
          <div class="flex flex-wrap items-center justify-center gap-1.5 py-3 px-3 bg-slate-100/70 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span class="text-xs font-black text-amber-600 dark:text-amber-400 mr-2 shrink-0">
              슬라이드 전체 ${total}장 목록:
            </span>
            <div class="flex flex-wrap items-center gap-1">
              ${slides.map((s, i) => `
                <button onclick="window.ezraSlideStudio.goToSlide(${i})" 
                        class="px-2.5 py-1 text-xs font-bold rounded-lg transition shrink-0 ${
                          i === idx 
                            ? "bg-amber-500 text-slate-950 shadow-md scale-105 font-black ring-2 ring-amber-400" 
                            : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white"
                        }" title="제 ${i + 1}장: ${s.title}">
                  ${i + 1}
                </button>
              `).join("")}
            </div>
          </div>

        </div>
      `;

      // 버튼 이벤트 리스너 연결
      const btnPrev = root.querySelector("#btn-slide-prev");
      const btnNext = root.querySelector("#btn-slide-next");
      const btnFontDec = root.querySelector("#btn-slide-font-dec");
      const btnFontInc = root.querySelector("#btn-slide-font-inc");
      const btnTheme = root.querySelector("#btn-slide-theme");
      const btnEdit = root.querySelector("#btn-slide-edit");
      const btnAdd = root.querySelector("#btn-slide-add");
      const btnDel = root.querySelector("#btn-slide-del");
      const btnExport = root.querySelector("#btn-slide-export");
      const btnBackupExport = root.querySelector("#btn-slide-backup-export");
      const btnBackupImport = root.querySelector("#btn-slide-backup-import");
      const btnReset = root.querySelector("#btn-slide-reset");

      if (btnPrev) btnPrev.onclick = () => this.prevSlide();
      if (btnNext) btnNext.onclick = () => this.nextSlide();
      if (btnFontDec) btnFontDec.onclick = () => this.adjustFontSize(-2);
      if (btnFontInc) btnFontInc.onclick = () => this.adjustFontSize(2);
      if (btnTheme) btnTheme.onclick = () => this.toggleSlideTheme();
      if (btnEdit) btnEdit.onclick = () => this.toggleEditMode();
      if (btnAdd) btnAdd.onclick = () => this.addNewSlide();
      if (btnDel) btnDel.onclick = () => this.deleteCurrentSlide();
      if (btnExport) btnExport.onclick = () => this.exportSlideHtml();
      if (btnBackupExport) btnBackupExport.onclick = () => this.exportDecksBackup();
      if (btnBackupImport) btnBackupImport.onchange = (e) => this.importDecksBackup(e.target.files[0]);
      if (btnReset) btnReset.onclick = () => this.resetDefaultSlides();
    }
  }

  // --------------------------------------------------------------------------
  // 3. 오디오 플레이어 스튜디오 (AudioPlayerStudio)
  // HTML5 Audio API 기반, 로컬 파일 로드, 배속, A-B 구간반복
  // --------------------------------------------------------------------------
  class AudioPlayerStudio {
    constructor() {
      this.audio = new Audio();
      this.containerId = null;
      this.playlist = [];
      this.currentTrackIndex = 0;
      this.isPlaying = false;
      this.playbackRate = 1.0;
      this.playerMode = "local"; // 기본을 로컬 고음질 MP3 모드로 설정 (YouTube 오류 153 방지)
      
      // A-B Loop Repeat 상태
      this.loopA = null; // 초 단위
      this.loopB = null; // 초 단위
      this.isLoopActive = false;

      // 성경 권 필터
      this.activeBook = null;
      this.hasCachedFiles = false;

      this.initDefaultPlaylist();
      this.bindAudioEvents();
      this.loadCachedTracks(); // 브라우저 IndexedDB에 저장된 음원 자동 복원
    }

    initDefaultPlaylist() {
      // 집중성경강좌 14개 전 강의 및 대표 성경 본문 낭독 목록
      // localPath: d:\도시케어\대하설교\audio\ 폴더에 파일 복사 시 폴더 선택 없이 즉시 재생
      this.playlist = [
        {
          id: "01",
          title: "집중강좌 01강: 구약성경의 상호관계",
          book: "구약개론",
          fileName: "집중강좌_01 구약성경의 상호관계.mp3",
          localPath: "audio/집중강좌_01 구약성경의 상호관계.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_01 구약성경의 상호관계.mp3",
          ytQuery: "에스라하우스 EBL 구약의상관관계 노우호",
          url: "",
          hasLocalFile: false,
          duration: "35:00"
        },
        {
          id: "02",
          title: "집중강좌 02강: 창세기-레위기 (창조·타락·성막)",
          book: "창세기",
          fileName: "집중강좌_02 창세기-레위기.mp3",
          localPath: "audio/집중강좌_02 창세기-레위기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_02 창세기-레위기.mp3",
          ytQuery: "에스라하우스 EBL 창세기 레위기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "45:20"
        },
        {
          id: "03",
          title: "집중강좌 03강: 민수기-신명기 (광야 40년과 쉐마)",
          book: "신명기",
          fileName: "집중강좌_03 민수기-신명기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_03 민수기-신명기.mp3",
          ytQuery: "에스라하우스 EBL 민수기 신명기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "40:15"
        },
        {
          id: "04",
          title: "집중강좌 04강: 여호수아-사무엘상 (가나안정복과 왕정)",
          book: "여호수아",
          fileName: "집중강좌_04 여호수아-삼상.mp3",
          localPath: "audio/집중강좌_04 여호수아-삼상.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_04 여호수아-삼상.mp3",
          ytQuery: "에스라하우스 EBL 여호수아 사사기 사무엘상 노우호",
          url: "",
          hasLocalFile: false,
          duration: "38:40"
        },
        {
          id: "05",
          title: "집중강좌 05강: 사무엘하-호세아 (다윗과 분열왕국)",
          book: "열왕기상",
          fileName: "집중강좌_05 삼하-호세아.mp3",
          localPath: "audio/집중강좌_05 삼하-호세아.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_05 삼하-호세아.mp3",
          ytQuery: "에스라하우스 EBL 사무엘하 열왕기 호세아 노우호",
          url: "",
          hasLocalFile: false,
          duration: "42:10"
        },
        {
          id: "06",
          title: "집중강좌 06강: 요엘-예레미야애가 (남유다 선지자들의 외침)",
          book: "이사야",
          fileName: "집중강좌_06 요엘-예레미아애가.mp3",
          localPath: "audio/집중강좌_06 요엘-예레미아애가.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_06 요엘-예레미아애가.mp3",
          ytQuery: "에스라하우스 EBL 요엘 이사야 예레미야 노우호",
          url: "",
          hasLocalFile: false,
          duration: "44:50"
        },
        {
          id: "07",
          title: "집중강좌 07강: 다니엘-에스겔 (바벨론 포로기와 회복의 환상)",
          book: "다니엘",
          fileName: "집중강좌_07 다니엘-에스겔.mp3",
          localPath: "audio/집중강좌_07 다니엘-에스겔.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_07 다니엘-에스겔.mp3",
          ytQuery: "에스라하우스 EBL 다니엘 에스겔 노우호",
          url: "",
          hasLocalFile: false,
          duration: "39:30"
        },
        {
          id: "08",
          title: "집중강좌 08강: 시가서-에스더 (욥기·시편·잠언과 포로귀환)",
          book: "시편",
          fileName: "집중강좌_08 시가서-에스더.mp3",
          localPath: "audio/집중강좌_08 시가서-에스더.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_08 시가서-에스더.mp3",
          ytQuery: "에스라하우스 EBL 시가서 욥기 시편 에스더 노우호",
          url: "",
          hasLocalFile: false,
          duration: "41:15"
        },
        {
          id: "09",
          title: "집중강좌 09강: 에스라-말라기 (성전재건과 구약의 결론)",
          book: "에스라",
          fileName: "집중강좌_09 에스라-말라기.mp3",
          localPath: "audio/집중강좌_09 에스라-말라기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_09 에스라-말라기.mp3",
          ytQuery: "에스라하우스 EBL 에스라 느헤미야 말라기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "36:45"
        },
        {
          id: "10",
          title: "집중강좌 10강: 신구약 중간사-복음서 (400년 역사와 예수 그리스도)",
          book: "신구약중간사",
          fileName: "집중강좌_10 신구약중간사-복음서.mp3",
          localPath: "audio/집중강좌_10 신구약중간사-복음서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_10 신구약중간사-복음서.mp3",
          ytQuery: "에스라하우스 EBL 신구약중간사 복음서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "46:10"
        },
        {
          id: "11",
          title: "집중강좌 11강: 사도행전-서신서 (1) (성령강림과 바울의 1~2차 전도여행)",
          book: "사도행전",
          fileName: "집중강좌_11 사도행전-서신서.mp3",
          localPath: "audio/집중강좌_11 사도행전-서신서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_11 사도행전-서신서.mp3",
          ytQuery: "에스라하우스 EBL 사도행전 서신서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "43:20"
        },
        {
          id: "12",
          title: "집중강좌 12강: 사도행전-서신서 (2) (바울 3차 전도여행과 로마서 강해)",
          book: "로마서",
          fileName: "집중강좌_12 사도행전-서신서.mp3",
          localPath: "audio/집중강좌_12 사도행전-서신서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_12 사도행전-서신서.mp3",
          ytQuery: "에스라하우스 EBL 로마서 고린도서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "40:50"
        },
        {
          id: "13",
          title: "집중강좌 13강: 옥중서신-유다서 (에베소·빌립보·골로새와 공동서신)",
          book: "에베소서",
          fileName: "집중강좌_13 옥중서신-유다서.mp3",
          localPath: "audio/집중강좌_13 옥중서신-유다서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_13 옥중서신-유다서.mp3",
          ytQuery: "에스라하우스 EBL 옥중서신 히브리서 공동서신 노우호",
          url: "",
          hasLocalFile: false,
          duration: "41:30"
        },
        {
          id: "14",
          title: "집중강좌 14강: 요한계시록 (어린양의 승리와 새 하늘 새 땅)",
          book: "요한계시록",
          fileName: "집중강좌_14 요한계시록.mp3",
          localPath: "audio/집중강좌_14 요한계시록.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_14 요한계시록.mp3",
          ytQuery: "에스라하우스 EBL 요한계시록 노우호",
          url: "",
          hasLocalFile: false,
          duration: "48:00"
        },
        // --- 개역개정 대표 본문 낭독 (Web Speech Synthesis / 오디오) ---
        {
          id: "scr-gen-01",
          title: "개역개정 본문 낭독: 창세기 01장 (태초에 하나님이 천지를 창조하시니라)",
          book: "창세기",
          fileName: "창세기01.mp3",
          localPath: "audio/창세기01.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\구약\\01 창세기\\창세기01.mp3",
          isScripture: true,
          text: "태초에 하나님이 천지를 창조하시니라. 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라. 하나님이 이르시되 빛이 있으라 하시니 빛이 있었고 빛이 하나님이 보시기에 좋았더라. 하나님이 빛과 어둠을 나누사 하나님이 빛을 낮이라 부르시고 어둠을 밤이라 부르시니라. 저녁이 되고 아침이 되니 이는 첫째 날이니라.",
          url: "",
          duration: "03:40"
        },
        {
          id: "scr-psa-23",
          title: "개역개정 본문 낭독: 시편 023편 (여호와는 나의 목자시니)",
          book: "시편",
          fileName: "시편023.mp3",
          localPath: "audio/시편023.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\구약\\19 시편\\시편023.mp3",
          isScripture: true,
          text: "여호와는 나의 목자시니 내게 부족함이 없으리로다. 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다. 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다. 내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라. 주의 지팡이와 막대기가 나를 안위하시나이다.",
          url: "",
          duration: "02:15"
        },
        {
          id: "scr-rom-08",
          title: "개역개정 본문 낭독: 로마서 08장 (결코 정죄함이 없나니)",
          book: "로마서",
          fileName: "로마서08.mp3",
          localPath: "audio/로마서08.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\신약\\06 로마서\\로마서08.mp3",
          isScripture: true,
          text: "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니 이는 그리스도 예수 안에 있는 생명의 성령의 법이 죄와 사망의 법에서 너를 해방하였음이라. 율법이 육신으로 말미암아 연약하여 할 수 없는 그것을 하나님은 하시나니 곧 죄로 말미암아 자기 아들을 죄 있는 육신의 모양으로 보내어 육신에 죄를 정하사 육신을 따르지 않고 그 영을 따라 행하는 우리에게 율법의 요구가 이루어지게 하려 하심이니라.",
          url: "",
          duration: "04:10"
        }
      ];
    }

    // IndexedDB 캐싱 (H: 드라이브 분리 후에도 영구 로컬 재생 지원)
    async openDB() {
      return new Promise((resolve) => {
        if (!('indexedDB' in window)) return resolve(null);
        const req = indexedDB.open("EzraAudioArchiveDB", 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains("audioTracks")) {
            db.createObjectStore("audioTracks", { keyPath: "id" });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      });
    }

    async saveTracksToDB(tracksWithFiles) {
      try {
        const db = await this.openDB();
        if (!db) return;
        const tx = db.transaction("audioTracks", "readwrite");
        const store = tx.objectStore("audioTracks");
        for (const item of tracksWithFiles) {
          store.put({ id: item.id, fileName: item.file.name, fileBlob: item.file });
        }
      } catch (err) {
        console.warn("IndexedDB save error:", err);
      }
    }

    async loadCachedTracks() {
      try {
        const db = await this.openDB();
        if (!db) return;
        const tx = db.transaction("audioTracks", "readonly");
        const store = tx.objectStore("audioTracks");
        const req = store.getAll();
        req.onsuccess = () => {
          const items = req.result;
          if (items && items.length > 0) {
            let restoredCount = 0;
            items.forEach(item => {
              const track = this.playlist.find(p => p.id === item.id);
              if (track && item.fileBlob) {
                track.url = URL.createObjectURL(item.fileBlob);
                track.hasLocalFile = true;
                restoredCount++;
              }
            });
            if (restoredCount > 0) {
              this.hasCachedFiles = true;
              this.render();
            }
          }
        };
      } catch (err) {
        console.warn("IndexedDB restore error:", err);
      }
    }

    bindAudioEvents() {
      this.audio.addEventListener("timeupdate", () => {
        this.onTimeUpdate();
      });

      this.audio.addEventListener("play", () => {
        this.isPlaying = true;
        this.updatePlayStateUI();
      });

      this.audio.addEventListener("pause", () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      });

      this.audio.addEventListener("ended", () => {
        this.onTrackEnded();
      });

      this.audio.addEventListener("loadedmetadata", () => {
        this.updateDurationUI();
      });
    }

    onTimeUpdate() {
      const cur = this.audio.currentTime;
      const dur = this.audio.duration || 0;

      // A-B 반복 루프 처리
      if (this.isLoopActive && this.loopA !== null && this.loopB !== null) {
        if (cur >= this.loopB) {
          this.audio.currentTime = this.loopA;
          return;
        }
      }

      // 프로그레스 바 & 시간 텍스트 갱신
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const progress = root.querySelector("#audio-seek-bar");
      const curText = root.querySelector("#audio-current-time");
      if (progress && dur > 0) {
        progress.value = (cur / dur) * 100;
      }
      if (curText) {
        curText.textContent = this.formatTime(cur);
      }
    }

    onTrackEnded() {
      if (this.currentTrackIndex < this.playlist.length - 1) {
        this.playTrack(this.currentTrackIndex + 1);
      } else {
        this.isPlaying = false;
        this.updatePlayStateUI();
      }
    }

    playTrack(index) {
      if (index < 0 || index >= this.playlist.length) return;
      this.currentTrackIndex = index;
      const track = this.playlist[index];

      // 이전 Web Speech 중단
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      // 1. 이미 로컬 MP3 URL이 연결되어 있으면 즉시 재생
      if (track.url) {
        this.playerMode = "local";
        this.audio.src = track.url;
        this.audio.playbackRate = this.playbackRate;
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.updatePlayStateUI();
          if (window.showToast) window.showToast(`🎧 [고음질 로컬 MP3] ${track.title} 재생 시작`);
        }).catch(e => {
          console.warn("Local play error:", e);
        });
        this.render();
        return;
      }

      // 2. 성경 본문 낭독 트랙인 경우: 브라우저 음성 합성(TTS)으로 즉시 낭독
      if (track.isScripture && track.text) {
        this.playerMode = "tts";
        this.playSpeech(track);
        this.render();
        return;
      }

      // 3. localPath 상대경로 자동 시도 (d:\도시케어\대하설교\audio\ 폴더에 파일 복사 시 즉시 재생)
      if (track.localPath) {
        this.playerMode = "local";
        const testAudio = new Audio();
        testAudio.src = track.localPath;
        testAudio.oncanplaythrough = () => {
          track.url = track.localPath;
          track.hasLocalFile = true;
          this.audio.src = track.localPath;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayStateUI();
            if (window.showToast) window.showToast(`🎧 [audio/ 폴더] ${track.title} 즉시 재생!`);
          }).catch(e => console.warn(e));
          this.render();
        };
        testAudio.onerror = () => {
          // audio/ 폴더에 파일 없음 → 폴더 선택기 안내
          this.render();
          if (window.showToast) {
            window.showToast(`📁 audio 폴더에 파일을 복사하거나 [📁 폴더 자동 연결]을 눌러주세요!`);
          }
        };
        testAudio.load();
        this.render();
        return;
      }

      // 4. 로컬 파일이 아직 로드되지 않은 경우: 폴더 선택기 열기
      this.playerMode = "local";
      this.render();
      if (window.showToast) {
        window.showToast(`📁 H:\\HDX\\Church\\집중성경강좌 폴더를 선택하시면 14개 강의가 즉시 재생됩니다!`);
      }
      this.openFolderPicker();
    }

    playSpeech(track) {
      if (!('speechSynthesis' in window)) {
        if (window.showToast) window.showToast("이 브라우저에서는 음성 합성을 지원하지 않습니다.");
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(track.text);
      utterance.lang = "ko-KR";
      utterance.rate = this.playbackRate || 1.0;
      utterance.onstart = () => {
        this.isPlaying = true;
        this.updatePlayStateUI();
        if (window.showToast) window.showToast(`📖 [성경 낭독] ${track.title} 음성 재생 중`);
      };
      utterance.onend = () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      };
      utterance.onerror = () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      };
      window.speechSynthesis.speak(utterance);
      this.isPlaying = true;
    }

    setPlayerMode(mode) {
      this.playerMode = mode;
      const track = this.playlist[this.currentTrackIndex];
      if (mode === "online") {
        if (this.audio) this.audio.pause();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      } else if (mode === "local") {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (track && track.url) {
          this.audio.src = track.url;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().catch(e => console.warn(e));
        }
      } else if (mode === "tts") {
        if (this.audio) this.audio.pause();
        if (track && track.isScripture) {
          this.playSpeech(track);
        } else {
          const summaryText = `${track.title}. ${track.book} 에스라 성경 집중강좌 음성 안내입니다. 노우호 목사님의 성경 강해와 함께 성경 66권의 하나님의 마음을 통독합니다.`;
          this.playSpeech({ title: track.title, text: summaryText });
        }
      }
      this.render();
    }

    togglePlay() {
      if (this.currentTrackIndex === -1 && this.playlist.length > 0) {
        this.playTrack(0);
        return;
      }
      const track = this.playlist[this.currentTrackIndex];
      if (this.playerMode === "local") {
        if (this.audio.paused) {
          if (track && track.url) {
            this.audio.play().catch(e => console.warn(e));
          } else {
            this.openFolderPicker();
          }
        } else {
          this.audio.pause();
        }
      } else if (this.playerMode === "tts") {
        if (window.speechSynthesis.speaking) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            this.isPlaying = true;
          } else {
            window.speechSynthesis.pause();
            this.isPlaying = false;
          }
          this.updatePlayStateUI();
        } else if (track) {
          this.playTrack(this.currentTrackIndex);
        }
      }
    }

    seek(seconds) {
      this.audio.currentTime = Math.max(0, Math.min(this.audio.duration || 0, this.audio.currentTime + seconds));
    }

    seekToPercent(percent) {
      if (this.audio.duration) {
        this.audio.currentTime = (percent / 100) * this.audio.duration;
      }
    }

    setSpeed(speed) {
      this.playbackRate = speed;
      this.audio.playbackRate = speed;
      if (this.playerMode === "tts" && window.speechSynthesis.speaking) {
        const track = this.playlist[this.currentTrackIndex];
        if (track) this.playSpeech(track);
      }
      this.render();
      if (window.showToast) window.showToast(`재생 배속: ${speed}x`);
    }

    // A-B 구간반복 제어
    setPointA() {
      this.loopA = this.audio.currentTime;
      if (this.loopB !== null && this.loopB <= this.loopA) {
        this.loopB = null;
        this.isLoopActive = false;
      }
      this.render();
      if (window.showToast) window.showToast(`📍 A 지점 설정: ${this.formatTime(this.loopA)}`);
    }

    setPointB() {
      if (this.loopA === null) {
        if (window.showToast) window.showToast("A 지점을 먼저 설정해 주세요.");
        return;
      }
      if (this.audio.currentTime <= this.loopA) {
        if (window.showToast) window.showToast("B 지점은 A 지점보다 뒤여야 합니다.");
        return;
      }
      this.loopB = this.audio.currentTime;
      this.isLoopActive = true;
      this.audio.currentTime = this.loopA;
      this.render();
      if (window.showToast) window.showToast(`🔁 A-B 구간반복 시작 (${this.formatTime(this.loopA)} ~ ${this.formatTime(this.loopB)})`);
    }

    clearLoop() {
      this.loopA = null;
      this.loopB = null;
      this.isLoopActive = false;
      this.render();
      if (window.showToast) window.showToast("구간반복이 해제되었습니다.");
    }

    // 네이티브 폴더 피커 또는 input 클릭으로 1초 만에 전체 폴더 연결
    async openFolderPicker() {
      if ('showDirectoryPicker' in window) {
        try {
          const dirHandle = await window.showDirectoryPicker();
          const files = [];
          for await (const entry of dirHandle.values()) {
            if (entry.kind === 'file' && entry.name.match(/\.(mp3|wav|m4a|aac|ogg)$/i)) {
              const file = await entry.getFile();
              files.push(file);
            }
          }
          if (files.length > 0) {
            this.loadLocalFiles(files);
            return;
          }
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn("Directory picker error:", err);
          }
        }
      }
      const folderInput = document.getElementById("audio-folder-input");
      if (folderInput) folderInput.click();
    }

    // 로컬 MP3 파일 및 폴더 로더 + IndexedDB 영구 저장
    loadLocalFiles(fileList) {
      if (!fileList || fileList.length === 0) return;

      let addedCount = 0;
      const tracksToSave = [];

      Array.from(fileList).forEach(file => {
        if (!file.name.match(/\.(mp3|wav|m4a|aac|ogg)$/i)) return;

        const objectUrl = URL.createObjectURL(file);
        
        // 집중강좌 트랙 번호 정밀 매칭 (01~14)
        const fileNumMatch = file.name.match(/(?:집중강좌[_\s]*|강좌[_\s]*|0*)(\d+)/i) || file.name.match(/(\d+)/);
        const fileNum = fileNumMatch ? parseInt(fileNumMatch[1], 10) : null;

        let matched = null;
        if (fileNum !== null) {
          matched = this.playlist.find(p => p.id === String(fileNum).padStart(2, '0'));
        }
        if (!matched) {
          matched = this.playlist.find(p => p.fileName === file.name || file.name.includes(p.fileName) || (p.book && file.name.includes(p.book)));
        }

        if (matched) {
          matched.url = objectUrl;
          matched.hasLocalFile = true;
          tracksToSave.push({ id: matched.id, file: file });
        } else {
          const newId = `local-${Date.now()}-${Math.random()}`;
          this.playlist.push({
            id: newId,
            title: file.name.replace(/\.[^/.]+$/, ""),
            book: "로컬 음원",
            fileName: file.name,
            path: file.webkitRelativePath || file.name,
            url: objectUrl,
            hasLocalFile: true,
            duration: "--:--"
          });
          tracksToSave.push({ id: newId, file: file });
        }
        addedCount++;
      });

      if (addedCount > 0) {
        this.playerMode = "local";
        this.hasCachedFiles = true;
        this.saveTracksToDB(tracksToSave);
        
        const playIdx = this.currentTrackIndex >= 0 ? this.currentTrackIndex : 0;
        const curTrack = this.playlist[playIdx];
        if (curTrack && curTrack.url) {
          this.audio.src = curTrack.url;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayStateUI();
          }).catch(e => console.warn(e));
        }
        if (window.showToast) window.showToast(`🎵 ${addedCount}개의 로컬 고음질 MP3가 성공적으로 연결되었습니다!`);
      }
      this.render();
    }

    setBookFilter(bookName) {
      this.activeBook = bookName;
      if (bookName) {
        const foundIdx = this.playlist.findIndex(p => p.book === bookName || (p.title && p.title.includes(bookName)));
        if (foundIdx !== -1) {
          this.currentTrackIndex = foundIdx;
        }
      }
    }

    formatTime(sec) {
      if (!sec || isNaN(sec)) return "00:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    updatePlayStateUI() {
      const root = document.getElementById(this.containerId);
      if (!root) return;
      const btnPlay = root.querySelector("#audio-btn-play");
      if (btnPlay) {
        btnPlay.innerHTML = this.isPlaying 
          ? `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
          : `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      }
    }

    updateDurationUI() {
      const root = document.getElementById(this.containerId);
      if (!root) return;
      const durText = root.querySelector("#audio-duration-time");
      if (durText && this.audio.duration) {
        durText.textContent = this.formatTime(this.audio.duration);
      }
    }

    render(containerId) {
      if (containerId) this.containerId = containerId;
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const curTrack = this.playlist[this.currentTrackIndex] || this.playlist[0] || {
        title: "집중강좌 01강: 구약성경의 상호관계",
        fileName: "집중강좌_01 구약성경의 상호관계.mp3",
        book: "에스라 성경강좌"
      };

      const hasA = this.loopA !== null;
      const hasB = this.loopB !== null;
      const isOnline = this.playerMode === "online";
      const isLocal = this.playerMode === "local";
      const isTts = this.playerMode === "tts";

      // 필터링된 플레이리스트
      let displayPlaylist = this.playlist;
      if (this.activeBook) {
        const matchedList = this.playlist.filter(p => p.book === this.activeBook || (p.title && p.title.includes(this.activeBook)));
        if (matchedList.length > 0) {
          displayPlaylist = matchedList;
        }
      }

      root.innerHTML = `
        <div id="ezra-audio-card" class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-4 transition-all">
          
          <!-- 상단: 현재 트랙 정보 & 모드 선택 -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full ${this.isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">${curTrack.book}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  curTrack.url ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' :
                  isTts ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20' :
                  'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                }">
                  ${curTrack.url ? '🎧 로컬 MP3 재생 준비완료' : isTts ? '📖 본문 음성 낭독' : '⚡ 1초 폴더 연결 필요'}
                </span>
              </div>
              <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mt-1 truncate max-w-lg">
                ${curTrack.title}
              </h4>
              <p class="text-xs text-slate-400 truncate max-w-lg font-mono">${curTrack.fileName}</p>
            </div>

            <!-- 모드 전환 및 폴더 연결 버튼 -->
            <div class="flex flex-wrap items-center gap-2 shrink-0">
              <div class="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
                <button onclick="window.ezraAudioStudio.setPlayerMode('local')" 
                        class="px-2.5 py-1 rounded-lg transition ${isLocal ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  🎧 로컬 고음질 MP3
                </button>
                <button onclick="window.ezraAudioStudio.setPlayerMode('online')" 
                        class="px-2.5 py-1 rounded-lg transition ${isOnline ? 'bg-red-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  ▶ 유튜브 공식 강좌
                </button>
                <button onclick="window.ezraAudioStudio.setPlayerMode('tts')" 
                        class="px-2.5 py-1 rounded-lg transition ${isTts ? 'bg-amber-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  📖 성경 낭독
                </button>
              </div>

              <!-- H:\HDX\Church 원클릭 폴더 연결 -->
              <button onclick="window.ezraAudioStudio.openFolderPicker()" 
                      class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5"
                      title="H:\HDX\Church\집중성경강좌 폴더를 한 번에 자동 매칭">
                📁 폴더 자동 연결
              </button>
              <input id="audio-folder-input" type="file" webkitdirectory class="hidden" />
              <input id="audio-file-input" type="file" multiple accept="audio/*,.mp3,.wav" class="hidden" />
            </div>
          </div>

          <!-- 로컬 MP3 연결 안내 배너 (미연결 시 표시) -->
          ${isLocal && !curTrack.url ? `
            <div class="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-3 shadow-sm">
              <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0 shadow">📁</span>
                <div class="flex-1 min-w-0">
                  <h5 class="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                    MP3 파일을 <code class="text-emerald-700 dark:text-emerald-300">audio/</code> 폴더에 복사하면 즉시 재생됩니다!
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    아래 경로로 파일을 복사하시면 앱 실행 시 자동으로 인식하여 클릭 한 번에 바로 재생됩니다.
                  </p>
                  <div class="mt-2 p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 select-all">
                    <div>📂 <strong>d:\\도시케어\\대하설교\\audio\\</strong></div>
                    <div class="text-slate-500 pl-5">└ 집중강좌_01 구약성경의 상호관계.mp3</div>
                    <div class="text-slate-500 pl-5">└ 집중강좌_02 창세기-레위기.mp3</div>
                    <div class="text-slate-400 pl-5">└ ... (14개 전체)</div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs text-slate-500 dark:text-slate-400">또는 H: 드라이브 연결:</span>
                <button onclick="window.ezraAudioStudio.openFolderPicker()" class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5">
                  📁 H: 드라이브 폴더 선택
                </button>
              </div>
            </div>
          ` : ''}

          <!-- 온라인 스트리밍 플레이어 뷰 (오류 153 방지: 안정적인 유튜브 공식 연동 카드) -->
          ${isOnline ? `
            <div class="rounded-2xl p-5 bg-gradient-to-br from-red-600/10 via-slate-900/5 to-slate-900/10 dark:from-red-950/30 dark:via-slate-900 dark:to-slate-900 border border-red-500/20 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base shadow">▶</span>
                  <div>
                    <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">
                      에스라하우스TV 공식 유튜브 강의
                    </h5>
                    <p class="text-xs text-slate-500">노우호 목사님의 ${curTrack.title} 공식 강의</p>
                  </div>
                </div>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-bold border border-red-500/20 w-fit">
                  공식 채널 연동
                </span>
              </div>
              <div class="p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p>💡 브라우저 로컬 보안 정책(file:///) 환경에서는 유튜브 내부 iframe 임베드가 차단(오류 153)될 수 있습니다.</p>
                <p class="text-slate-500 dark:text-slate-500">아래 버튼을 누르시면 유튜브 공식 플레이어에서 즉시 고화질/고음질로 끊김 없이 청취하실 수 있습니다.</p>
              </div>
              <div class="flex flex-wrap items-center gap-2.5 pt-1">
                <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(curTrack.ytQuery || curTrack.title)}" target="_blank" rel="noopener" 
                   class="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2">
                  <span>▶ 유튜브에서 이 강의 바로 시청하기</span>
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>
                </a>
                <a href="https://www.youtube.com/@ezrahousetv" target="_blank" rel="noopener" 
                   class="px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition">
                  에스라하우스TV 채널 홈
                </a>
              </div>
            </div>
          ` : ''}

          <!-- 성경 본문 낭독 (TTS) 뷰 -->
          ${isTts ? `
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                  <span>📖 한국어 음성 낭독</span>
                  <span class="text-[11px] font-normal text-slate-500">(Web Speech API 고음질 낭독)</span>
                </h5>
                <button onclick="window.ezraAudioStudio.togglePlay()" class="px-3 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow">
                  ${this.isPlaying ? '일시정지 ❚❚' : '다시듣기 ▶'}
                </button>
              </div>
              <p class="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-serif p-3 bg-white dark:bg-slate-800/80 rounded-lg border border-amber-500/10 select-text">
                ${curTrack.text || `${curTrack.title} 강의 해설을 브라우저 음성으로 낭독합니다.`}
              </p>
            </div>
          ` : ''}

          <!-- 로컬 MP3 HTML5 오디오 컨트롤러 (탐색 바 & 재생 & A-B 구간반복) -->
          ${isLocal ? `
            <div class="space-y-3">
              <!-- 탐색 바 & 시간 -->
              <div class="space-y-1.5">
                <input id="audio-seek-bar" type="range" min="0" max="100" value="0" step="0.1"
                       class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                <div class="flex justify-between text-xs font-mono text-slate-500">
                  <span id="audio-current-time">${this.formatTime(this.audio.currentTime)}</span>
                  <span id="audio-duration-time">${this.formatTime(this.audio.duration)}</span>
                </div>
              </div>

              <!-- 하단: 메인 컨트롤 버튼 그룹 -->
              <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                
                <!-- 재생 & 건너뛰기 -->
                <div class="flex items-center gap-2">
                  <button id="audio-btn-skip-back" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition" title="10초 뒤로">
                    -10s
                  </button>
                  <button id="audio-btn-play" class="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md transition">
                    ${this.isPlaying 
                      ? `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
                      : `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`}
                  </button>
                  <button id="audio-btn-skip-fwd" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition" title="10초 앞으로">
                    +10s
                  </button>
                </div>

                <!-- A-B 구간반복 컨트롤러 -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button id="audio-btn-set-a" class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    hasA ? 'bg-amber-500 text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }">
                    [A 설정${hasA ? `: ${this.formatTime(this.loopA)}` : ''}]
                  </button>
                  <button id="audio-btn-set-b" class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    hasB ? 'bg-amber-500 text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }">
                    [B 설정${hasB ? `: ${this.formatTime(this.loopB)}` : ''}]
                  </button>
                  ${hasA || hasB ? `
                    <button id="audio-btn-clear-loop" class="px-2 py-1 rounded-lg text-xs text-red-500 font-bold hover:bg-red-100 dark:hover:bg-red-950/50">
                      해제 ✕
                    </button>
                  ` : ''}
                </div>

                <!-- 재생 배속 조절 -->
                <div class="flex items-center gap-1">
                  ${[0.8, 1.0, 1.2, 1.5, 2.0].map(s => `
                    <button onclick="window.ezraAudioStudio.setSpeed(${s})" class="px-2 py-1 rounded-md text-xs font-bold transition ${
                      this.playbackRate === s 
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow' 
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }">${s}x</button>
                  `).join("")}
                </div>

              </div>
            </div>
          ` : ''}

          <!-- 하단: 플레이리스트 목록 (14개 전 강의 + 성경 낭독) -->
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center justify-between mb-2">
              <h5 class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span>에스라 집중강좌 & 성경 음원 전체 목록 (${displayPlaylist.length}개)</span>
                ${this.activeBook ? `
                  <button onclick="window.ezraAudioStudio.setBookFilter(null); window.ezraAudioStudio.render();" class="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline">
                    (전체보기)
                  </button>
                ` : ''}
              </h5>
              <span class="text-[11px] text-slate-400">클릭하면 즉시 실행됩니다</span>
            </div>

            <div class="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              ${displayPlaylist.map((t, idx) => {
                const globalIdx = this.playlist.indexOf(t);
                const isSelected = this.currentTrackIndex === globalIdx;
                return `
                  <div onclick="window.ezraAudioStudio.playTrack(${globalIdx})" 
                       class="p-2.5 rounded-xl text-xs flex items-center justify-between cursor-pointer transition ${
                          isSelected 
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                            : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100'
                        }">
                    <div class="flex items-center gap-2.5 truncate">
                      <span class="w-6 text-center font-mono font-bold text-slate-400 dark:text-slate-500 shrink-0">
                        ${isSelected && this.isPlaying ? '▶' : (idx + 1)}
                      </span>
                      <div class="truncate">
                        <span class="truncate font-semibold block">${t.title}</span>
                        <span class="text-[10px] text-slate-400 font-mono truncate block">${t.fileName || t.book}</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0 ml-2">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.url ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' :
                        t.isScripture ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' :
                        'bg-slate-500/20 text-slate-600 dark:text-slate-400'
                      }">
                        ${t.url ? '🎧 고음질 MP3' : t.isScripture ? '📖 본문 낭독' : '⚡ 1초 폴더 연결'}
                      </span>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- 드래그 & 드롭 또는 파일 추가 영역 -->
          <div id="audio-drop-zone" class="p-2.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition cursor-pointer" onclick="window.ezraAudioStudio.openFolderPicker()">
            💡 MP3 파일을 <strong>d:\도시케어\대하설교\audio\</strong> 폴더에 복사하면 즉시 자동 재생됩니다. 또는 이곳에 MP3 파일을 끌어다 놓으세요.
          </div>

        </div>
      `;

      // 이벤트 리스너 바인딩
      const fileInput = root.querySelector("#audio-file-input");
      const folderInput = root.querySelector("#audio-folder-input");
      const btnPlay = root.querySelector("#audio-btn-play");
      const btnSkipBack = root.querySelector("#audio-btn-skip-back");
      const btnSkipFwd = root.querySelector("#audio-btn-skip-fwd");
      const seekBar = root.querySelector("#audio-seek-bar");
      const btnSetA = root.querySelector("#audio-btn-set-a");
      const btnSetB = root.querySelector("#audio-btn-set-b");
      const btnClearLoop = root.querySelector("#audio-btn-clear-loop");
      const dropZone = root.querySelector("#audio-drop-zone");

      if (fileInput) fileInput.onchange = (e) => this.loadLocalFiles(e.target.files);
      if (folderInput) folderInput.onchange = (e) => this.loadLocalFiles(e.target.files);
      if (btnPlay) btnPlay.onclick = () => this.togglePlay();
      if (btnSkipBack) btnSkipBack.onclick = () => this.seek(-10);
      if (btnSkipFwd) btnSkipFwd.onclick = () => this.seek(10);
      if (seekBar) seekBar.oninput = (e) => this.seekToPercent(parseFloat(e.target.value));
      if (btnSetA) btnSetA.onclick = () => this.setPointA();
      if (btnSetB) btnSetB.onclick = () => this.setPointB();
      if (btnClearLoop) btnClearLoop.onclick = () => this.clearLoop();

      // 드래그 앤 드롭 지원
      if (dropZone) {
        dropZone.ondragover = (e) => {
          e.preventDefault();
          dropZone.classList.add("border-emerald-500", "bg-emerald-500/10");
        };
        dropZone.ondragleave = (e) => {
          e.preventDefault();
          dropZone.classList.remove("border-emerald-500", "bg-emerald-500/10");
        };
        dropZone.ondrop = (e) => {
          e.preventDefault();
          dropZone.classList.remove("border-emerald-500", "bg-emerald-500/10");
          if (e.dataTransfer && e.dataTransfer.files) {
            this.loadLocalFiles(e.dataTransfer.files);
          }
        };
      }
    }
  }

  // --------------------------------------------------------------------------
  // 로컬 파일 메타데이터 정의 (H:\HDX\Church 연동)
  // --------------------------------------------------------------------------
  window.LOCAL_PPT_FILES = [
    // --- ppt강의자료 (25개 원본 PPTX/PDF 파일) ---
    { name: "1강._강좌원리와_구약상관관계.pptx", book: "성경강좌원리", desc: "에스라 성경강좌 기본 원리와 구약 39권 역사서·예언서 상관관계 도표", path: "H:\\HDX\\Church\\ppt강의자료\\1강._강좌원리와_구약상관관계.pptx" },
    { name: "제_2강_창세기(1)_-_창조_1_PPT.pptx", book: "창세기", desc: "창세기 1~3장 하나님의 천지창조와 에덴동산, 안식의 의미", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(1)_-_창조_1_PPT.pptx" },
    { name: "제_2강_창세기(2)-_창조_2__PPT.pptx", book: "창세기", desc: "창세기 1~2장 6일간의 질서 정연한 창조와 인간의 존엄성", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(2)-_창조_2__PPT.pptx" },
    { name: "제_2강_창세기(3)-_타락PPT.pptx", book: "창세기", desc: "창세기 3장 뱀의 유혹과 선악과, 인간의 타락과 원복음(창 3:15)", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(3)-_타락PPT.pptx" },
    { name: "제_2강_창세기(4)-_심판PPT_1.pptx", book: "창세기", desc: "창세기 6~8장 노아의 방주 건조와 전 지구적 대홍수 심판", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(4)-_심판PPT_1.pptx" },
    { name: "제_2강_창세기(5)-심판PPT2.pptx", book: "창세기", desc: "홍수 심판의 지질학적 증거와 무지개 언약, 새 출발", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(5)-심판PPT2.pptx" },
    { name: "제_2강_창세기(6)-_분산_PPT.pptx", book: "창세기", desc: "창세기 11장 바벨탑 반역과 언어의 혼잡, 인류의 온 땅 분산", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(6)-_분산_PPT.pptx" },
    { name: "제3강._출애굽기의_파노라마_&_레위기.pptx", book: "출애굽기", desc: "애굽 10대 재앙, 유월절의 밤, 시내산 언약과 성막 식양 파노라마", path: "H:\\HDX\\Church\\ppt강의자료\\제3강._출애굽기의_파노라마_&_레위기.pptx" },
    { name: "3강._레위기-거룩한백성의_식생활(1).pptx", book: "식생활특강", desc: "레위기 11장 정결한 짐승과 부정한 짐승 규례, 거룩한 백성의 식생활", path: "H:\\HDX\\Church\\ppt강의자료\\3강._레위기-거룩한백성의_식생활(1).pptx" },
    { name: "3강._레위기-거룩한백성의_식생활(2).pptx", book: "식생활특강", desc: "거룩함과 건강, 현대인의 식생활과 성경적 건강 원리 강해", path: "H:\\HDX\\Church\\ppt강의자료\\3강._레위기-거룩한백성의_식생활(2).pptx" },
    { name: "제4강__민수기,_신명기.pptx", book: "민수기", desc: "가데스 바네아 불신앙과 광야 40년 연단, 모압 평지의 쉐마 신명기", path: "H:\\HDX\\Church\\ppt강의자료\\제4강__민수기,_신명기.pptx" },
    { name: "제4강_여호수아,_사사기,_룻기.pptx", book: "여호수아", desc: "가나안 정복전쟁과 땅 분배, 사사기 350년 암흑기, 룻기의 헤세드 은혜", path: "H:\\HDX\\Church\\ppt강의자료\\제4강_여호수아,_사사기,_룻기.pptx" },
    { name: "5강.사무엘상하,열왕기상하.pptx", book: "사무엘상", desc: "사울과 다윗의 왕정, 다윗 언약, 솔로몬 성전과 남북 왕국 분열", path: "H:\\HDX\\Church\\ppt강의자료\\5강.사무엘상하,열왕기상하.pptx" },
    { name: "5강[2].요나,아모스,호세아.pptx", book: "호세아", desc: "북이스라엘 여로보암 2세 시대 활동한 요나, 아모스, 호세아 선지자", path: "H:\\HDX\\Church\\ppt강의자료\\5강[2].요나,아모스,호세아.pptx" },
    { name: "6강.요엘-애가.pptx", book: "이사야", desc: "남유다 선지자 요엘, 이사야, 미가, 하박국, 스바냐, 예레미야, 예레미야애가", path: "H:\\HDX\\Church\\ppt강의자료\\6강.요엘-애가.pptx" },
    { name: "7강.중간사-시가서.pptx", book: "시편", desc: "욥기, 시편, 잠언, 전도서, 아가 시가서 5권과 중간사 배경", path: "H:\\HDX\\Church\\ppt강의자료\\7강.중간사-시가서.pptx" },
    { name: "8강.역대기-말라기.pptx", book: "에스라", desc: "바벨론 포로기(에스겔, 다니엘)와 포로귀환(역대상하, 에스라, 느헤미야, 에스더, 학개, 스가랴, 말라기)", path: "H:\\HDX\\Church\\ppt강의자료\\8강.역대기-말라기.pptx" },
    { name: "9강.중간사-요한복음.pptx", book: "마태복음", desc: "신구약 중간사 400년 역사와 사복음서(마태, 마가, 누가, 요한) 예수 그리스도의 생애", path: "H:\\HDX\\Church\\ppt강의자료\\9강.중간사-요한복음.pptx" },
    { name: "10강(1).사도행전-갈라디아서.pptx", book: "사도행전", desc: "오순절 성령 강림, 바울의 1~3차 전도여행과 갈라디아서 복음의 자유", path: "H:\\HDX\\Church\\ppt강의자료\\10강(1).사도행전-갈라디아서.pptx" },
    { name: "10강(2).고린도서-유다서.pptx", book: "로마서", desc: "바울서신(고린도전후서, 로마서, 옥중서신, 목회서신) 및 공동서신 전체", path: "H:\\HDX\\Church\\ppt강의자료\\10강(2).고린도서-유다서.pptx" },
    { name: "11강.요한계시록(1).pptx", book: "요한계시록", desc: "요한계시록 1~11장: 일곱 교회 편지, 보좌 앞 어린양, 일곱 인과 일곱 나팔", path: "H:\\HDX\\Church\\ppt강의자료\\11강.요한계시록(1).pptx" },
    { name: "11강.요한계시록(2).pptx", book: "요한계시록", desc: "요한계시록 12~22장: 일곱 대접, 큰 성 바벨론 멸망, 천년왕국과 새 하늘과 새 땅", path: "H:\\HDX\\Church\\ppt강의자료\\11강.요한계시록(2).pptx" },
    { name: "특강_-__성경과_역사_그리고_미래.pptx", book: "성경과역사", desc: "인류 역사와 하나님의 구속사 파노라마, 마지막 때와 교회의 사명", path: "H:\\HDX\\Church\\특강_-__성경과_역사_그리고_미래.pptx" },
    { name: "신구약중간사_[1].pdf", book: "신구약중간사", desc: "말라기~마태복음 사이 400년 페르시아·헬라·하스몬·로마 시대 교재 (1부)", path: "H:\\HDX\\Church\\ppt강의자료\\신구약중간사_[1].pdf" },
    { name: "신구약중간사_[2].pdf", book: "신구약중간사", desc: "신구약 중간사 연대표와 지리, 묵시문학 및 헤롯 왕조 역사 교재 (2부)", path: "H:\\HDX\\Church\\ppt강의자료\\신구약중간사_[2].pdf" },

    // --- HDX Church 상위 및 집중강의 PPT 파일 (12개 추가) ---
    { name: "01강 율법서 up.pptx", book: "창세기", desc: "창세기부터 신명기까지 모세오경 핵심 슬라이드 종합", path: "H:\\HDX\\Church\\01강 율법서 up.pptx" },
    { name: "02강 역사서와 예언서 1.pptx", book: "여호수아", desc: "여호수아부터 분열왕국 초기까지 역사와 선지자들의 상관관계", path: "H:\\HDX\\Church\\02강 역사서와 예언서 1.pptx" },
    { name: "03강 역사서와 예언서 2.pptx", book: "이사야", desc: "분열왕국 말기, 앗수르·바벨론 멸망, 포로기 및 포로귀환 시대 강해", path: "H:\\HDX\\Church\\03강 역사서와 예언서 2.pptx" },
    { name: "04강 사복음서와 사도들의 행적_수정본.pptx", book: "마태복음", desc: "사복음서 예수님의 공생애와 초기 사도행전 선교 역사", path: "H:\\HDX\\Church\\04강 사복음서와 사도들의 행적_수정본.pptx" },
    { name: "05강 사도들의 행적2.pptx", book: "사도행전", desc: "바울의 3차 전도여행과 로마 압송, 서신서 및 요한계시록 종합", path: "H:\\HDX\\Church\\05강 사도들의 행적2.pptx" },
    { name: "30시간 강의\\구약.pptx", book: "구약종합", desc: "에스라 성경강좌 30시간 구약 종합 집중강의 핵심 프레젠테이션 교재", path: "H:\\HDX\\Church\\30시간 강의\\구약.pptx" },
    { name: "30시간 강의\\신약.pptx", book: "신약종합", desc: "에스라 성경강좌 30시간 신약 종합 집중강의 핵심 프레젠테이션 교재", path: "H:\\HDX\\Church\\30시간 강의\\신약.pptx" },
    { name: "신구약중간사 (2014.04).pptx", book: "신구약중간사", desc: "말라기부터 마태복음 사이 400년 헬라·마카비·로마 시대 역사 특강", path: "H:\\HDX\\Church\\신구약중간사 (2014.04).pptx" },
    { name: "로마역사 (2014.12).pptx", book: "로마역사", desc: "율리우스 카이사르, 아우구스투스부터 네로까지 로마 제국사와 신약성경 배경", path: "H:\\HDX\\Church\\로마역사 (2014.12).pptx" },
    { name: "구약-요약.pptx", book: "구약종합", desc: "구약 39권 연대기별 핵심 맥과 하나님의 심정 요약본", path: "H:\\HDX\\Church\\구약-요약.pptx" },
    { name: "김병희 성경강좌 자료 오경(창-신).pptx", book: "신명기", desc: "창세기~신명기 모세오경 심층 연구 및 율법서 구조 분석 교재", path: "H:\\HDX\\Church\\김병희 성경강좌 자료 오경(창-신).pptx" },
    { name: "쉐마교육 신앙전수 특강.pptx", book: "쉐마특강", desc: "신명기 6장 쉐마와 자녀 신앙전수, 가정제단 회복 특별 강의안", path: "H:\\HDX\\Church\\쉐마교육 신앙전수 특강.pptx" }
  ];

  window.LOCAL_AUDIO_FILES = [
    { id: "01", title: "집중강좌 01강: 구약성경의 상호관계", fileName: "집중강좌_01 구약성경의 상호관계.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_01 구약성경의 상호관계.mp3", book: "구약개론" },
    { id: "02", title: "집중강좌 02강: 창세기-레위기", fileName: "집중강좌_02 창세기-레위기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_02 창세기-레위기.mp3", book: "창세기" },
    { id: "03", title: "집중강좌 03강: 민수기-신명기", fileName: "집중강좌_03 민수기-신명기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_03 민수기-신명기.mp3", book: "신명기" },
    { id: "04", title: "집중강좌 04강: 여호수아-삼상", fileName: "집중강좌_04 여호수아-삼상.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_04 여호수아-삼상.mp3", book: "여호수아" },
    { id: "05", title: "집중강좌 05강: 삼하-호세아", fileName: "집중강좌_05 삼하-호세아.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_05 삼하-호세아.mp3", book: "열왕기상" },
    { id: "06", title: "집중강좌 06강: 요엘-예레미아애가", fileName: "집중강좌_06 요엘-예레미아애가.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_06 요엘-예레미아애가.mp3", book: "이사야" },
    { id: "07", title: "집중강좌 07강: 다니엘-에스겔", fileName: "집중강좌_07 다니엘-에스겔.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_07 다니엘-에스겔.mp3", book: "다니엘" },
    { id: "08", title: "집중강좌 08강: 시가서-에스더", fileName: "집중강좌_08 시가서-에스더.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_08 시가서-에스더.mp3", book: "시편" },
    { id: "09", title: "집중강좌 09강: 에스라-말라기", fileName: "집중강좌_09 에스라-말라기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_09 에스라-말라기.mp3", book: "에스라" },
    { id: "10", title: "집중강좌 10강: 신구약중간사-복음서", fileName: "집중강좌_10 신구약중간사-복음서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_10 신구약중간사-복음서.mp3", book: "신구약중간사" },
    { id: "11", title: "집중강좌 11강: 사도행전-서신서", fileName: "집중강좌_11 사도행전-서신서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_11 사도행전-서신서.mp3", book: "사도행전" },
    { id: "12", title: "집중강좌 12강: 사도행전-서신서", fileName: "집중강좌_12 사도행전-서신서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_12 사도행전-서신서.mp3", book: "로마서" },
    { id: "13", title: "집중강좌 13강: 옥중서신-유다서", fileName: "집중강좌_13 옥중서신-유다서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_13 옥중서신-유다서.mp3", book: "에베소서" },
    { id: "14", title: "집중강좌 14강: 요한계시록", fileName: "집중강좌_14 요한계시록.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_14 요한계시록.mp3", book: "요한계시록" }
  ];

  // --------------------------------------------------------------------------
  // 전역 인스턴스 초기화 및 헬퍼 바인딩
  // --------------------------------------------------------------------------
  window.ezraSlideStudio = new SlideStudioManager();
  window.ezraAudioStudio = new AudioPlayerStudio();

  // 특정 컨테이너에 슬라이드 뷰어/편집기 렌더링
  window.renderSlideStudioComponent = function (containerId, bookName) {
    if (bookName) window.ezraSlideStudio.activeBook = bookName;
    window.ezraSlideStudio.render(containerId);
  };

  // 특정 컨테이너에 오디오 플레이어 렌더링
  window.renderAudioStudioComponent = function (containerId, bookName) {
    if (bookName) window.ezraAudioStudio.setBookFilter(bookName);
    window.ezraAudioStudio.render(containerId);
  };

})(window);
