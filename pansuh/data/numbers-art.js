// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/numbers)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "10": [["move","art-gerome",[1086,38,460,332]]],
    "32": [["move","art-pamplona",null]]
  },
  beats: {
    "0": [["photo","art-wilderness","img/art/numbers/wilderness.jpg",[866,38,680,474],{"tilt":-1.2,"caption":"로버츠 〈시내 산 가는 길〉"}]],
    "7": [["photo","art-tabernacle","img/art/numbers/tabernacle.jpg",[936,38,610,449],{"tilt":1.2,"caption":"홀먼 성경 〈광야의 성막〉"}]],
    "8": [["photo","art-gerome","img/art/numbers/gerome.jpg",[806,38,740,533],{"tilt":-1.2,"caption":"제롬 〈사막을 건너는 기수들〉"}]],
    "23": [["photo","art-manna","img/art/numbers/manna.jpg",[876,38,670,490],{"tilt":1.2,"caption":"푸생 〈광야의 만나〉"}]],
    "28": [["photo","art-pamplona","img/art/numbers/pamplona.jpg",[1176,38,370,532],{"tilt":-1.2,"caption":"팜플로나 성경 〈포도 정탐꾼〉"}]],
    "35": [["photo","art-tintoretto","img/art/numbers/tintoretto.jpg",[816,38,730,487],{"tilt":1.2,"caption":"틴토레토 〈반석을 치는 모세〉"}]],
    "43": [["photo","art-serpent","img/art/numbers/serpent.jpg",[936,38,610,395],{"tilt":-1.2,"caption":"반 다이크 〈놋 뱀과 모세〉"}]],
    "48": [["photo","art-balaam","img/art/numbers/balaam.jpg",[1156,38,390,540],{"tilt":1.2,"caption":"렘브란트 〈발람과 나귀〉"}]],
    "56": [["photo","art-hobbema","img/art/numbers/hobbema.jpg",[1036,358,510,377],{"tilt":-1.2,"caption":"호베마 〈미델하르니스 가로수길〉"}]],
    "62": [["photo","art-nebo","img/art/numbers/nebo.jpg",[886,328,660,441],{"tilt":1.2,"caption":"느보 산 전망"}]]
  },
  credits: [
    {
      "name": "로버츠 〈시내 산 가는 길〉",
      "credit": "David Roberts, The Approach to Mount Sinai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_The_approach_to_Mount_Sinai.jpg"
    },
    {
      "name": "홀먼 성경 〈광야의 성막〉",
      "credit": "Holman Bible (1890), The Tabernacle in the Wilderness",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Holman_The_Tabernacle_in_the_Wilderness.jpg"
    },
    {
      "name": "제롬 〈사막을 건너는 기수들〉",
      "credit": "Jean-Léon Gérôme, Riders Crossing the Desert",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Riders_Crossing_The_Desert_(1870)_HQ.jpg"
    },
    {
      "name": "푸생 〈광야의 만나〉",
      "credit": "Nicolas Poussin, The Israelites Gathering Manna in the Desert",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:La_Manne_-_Nicolas_Poussin_-_Mus%C3%A9e_du_Louvre_Peintures_INV_7275.jpg"
    },
    {
      "name": "팜플로나 성경 〈포도 정탐꾼〉",
      "credit": "Pamplona Bible (c. 1200), The Spies Carrying the Grapes of Canaan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Iru%C3%B1eko_Biblia_-_Augsburg_-_Pid_6993141_66v.jpg"
    },
    {
      "name": "틴토레토 〈반석을 치는 모세〉",
      "credit": "Jacopo Tintoretto, Moses Striking the Rock",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:1563_Tintoretto_Moses_Striking_the_Rock_anagoria.JPG"
    },
    {
      "name": "반 다이크 〈놋 뱀과 모세〉",
      "credit": "Workshop of Anthony van Dyck, Moses and the Brazen Serpent",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anthony_van_Dyck_studio_-_Moses_and_the_Brazen_Serpent_1791N08712_5LFQV.jpg"
    },
    {
      "name": "렘브란트 〈발람과 나귀〉",
      "credit": "Rembrandt, Balaam and the Ass",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_-_L%27%C3%82nesse_du_proph%C3%A8te_Balaam_-_J_95_-_Mus%C3%A9e_Cognacq-Jay.jpg"
    },
    {
      "name": "호베마 〈미델하르니스 가로수길〉",
      "credit": "Meindert Hobbema, The Avenue at Middelharnis",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Meindert_Hobbema_001.jpg"
    },
    {
      "name": "느보 산 전망",
      "credit": "Mustang Joe, The View from Mount Nebo, Jordan (photograph)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:The_view_from_Mt._Nebo,_Jordan_(53625248124).jpg"
    }
  ]
};
