// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/numbers)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "9": [["move","art-gerome",[1126,478,420,303]]],
    "24": [["move","art-manna",[1096,188,450,329]]],
    "32": [["move","art-pamplona",null]],
    "45": [["move","art-serpent",null]]
  },
  beats: {
    "0": [["photo","art-wilderness","../../pansuh/img/art/numbers/wilderness.jpg",[1006,358,540,376],{"tilt":-1.2,"caption":"Roberts — The Road to Mount Sinai"}]],
    "7": [["photo","art-tabernacle","../../pansuh/img/art/numbers/tabernacle.jpg",[936,38,610,449],{"tilt":1.2,"caption":"Holman Bible — The Tabernacle in the Wilderness"}]],
    "8": [["photo","art-gerome","../../pansuh/img/art/numbers/gerome.jpg",[806,248,740,533],{"tilt":-1.2,"caption":"Gérôme — Riders Crossing the Desert"}]],
    "23": [["photo","art-manna","../../pansuh/img/art/numbers/manna.jpg",[826,186,720,526],{"tilt":1.2,"caption":"Poussin — Manna in the Wilderness"}]],
    "28": [["photo","art-pamplona","../../pansuh/img/art/numbers/pamplona.jpg",[1176,38,370,532],{"tilt":-1.2,"caption":"Pamplona Bible — The Spies and the Grapes"}]],
    "35": [["photo","art-tintoretto","../../pansuh/img/art/numbers/tintoretto.jpg",[1016,38,530,353],{"tilt":1.2,"caption":"Tintoretto — Moses Strikes the Rock"}]],
    "43": [["photo","art-serpent","../../pansuh/img/art/numbers/serpent.jpg",[896,188,650,421],{"tilt":-1.2,"caption":"Van Dyck — Moses and the Bronze Serpent"}]],
    "48": [["photo","art-balaam","../../pansuh/img/art/numbers/balaam.jpg",[1156,38,390,540],{"tilt":1.2,"caption":"Rembrandt — Balaam and the Donkey"}]],
    "64": [["photo","art-hobbema","../../pansuh/img/art/numbers/hobbema.jpg",[1106,328,440,326],{"tilt":-1.2,"caption":"Hobbema — The Avenue at Middelharnis"}]]
  },
  credits: [
    {
      "name": "Roberts — The Road to Mount Sinai",
      "credit": "David Roberts, The Approach to Mount Sinai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_The_approach_to_Mount_Sinai.jpg"
    },
    {
      "name": "Holman Bible — The Tabernacle in the Wilderness",
      "credit": "Holman Bible (1890), The Tabernacle in the Wilderness",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Holman_The_Tabernacle_in_the_Wilderness.jpg"
    },
    {
      "name": "Gérôme — Riders Crossing the Desert",
      "credit": "Jean-Léon Gérôme, Riders Crossing the Desert",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Riders_Crossing_The_Desert_(1870)_HQ.jpg"
    },
    {
      "name": "Poussin — Manna in the Wilderness",
      "credit": "Nicolas Poussin, The Israelites Gathering Manna in the Desert",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:La_Manne_-_Nicolas_Poussin_-_Mus%C3%A9e_du_Louvre_Peintures_INV_7275.jpg"
    },
    {
      "name": "Pamplona Bible — The Spies and the Grapes",
      "credit": "Pamplona Bible (c. 1200), The Spies Carrying the Grapes of Canaan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Iru%C3%B1eko_Biblia_-_Augsburg_-_Pid_6993141_66v.jpg"
    },
    {
      "name": "Tintoretto — Moses Strikes the Rock",
      "credit": "Jacopo Tintoretto, Moses Striking the Rock",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:1563_Tintoretto_Moses_Striking_the_Rock_anagoria.JPG"
    },
    {
      "name": "Van Dyck — Moses and the Bronze Serpent",
      "credit": "Workshop of Anthony van Dyck, Moses and the Brazen Serpent",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anthony_van_Dyck_studio_-_Moses_and_the_Brazen_Serpent_1791N08712_5LFQV.jpg"
    },
    {
      "name": "Rembrandt — Balaam and the Donkey",
      "credit": "Rembrandt, Balaam and the Ass",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_-_L%27%C3%82nesse_du_proph%C3%A8te_Balaam_-_J_95_-_Mus%C3%A9e_Cognacq-Jay.jpg"
    },
    {
      "name": "Hobbema — The Avenue at Middelharnis",
      "credit": "Meindert Hobbema, The Avenue at Middelharnis",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Meindert_Hobbema_001.jpg"
    }
  ]
};
