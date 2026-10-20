// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/exodus)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "32": [["move","art-sinai",[1096,38,450,312]]]
  },
  beats: {
    "12": [["photo","art-nile","../../pansuh/img/art/exodus/nile.jpg",[1076,478,470,300],{"tilt":-1.2,"caption":"Alma-Tadema — The Finding of Moses"}]],
    "23": [["photo","art-firstborn","../../pansuh/img/art/exodus/firstborn.jpg",[1096,348,450,277],{"tilt":1.2,"caption":"Alma-Tadema — Death of the Firstborn"}]],
    "31": [["photo","art-sinai","../../pansuh/img/art/exodus/sinai.jpg",[846,38,700,486],{"tilt":-1.2,"caption":"Roberts — The Plain before Mount Sinai"}]]
  },
  credits: [
    {
      "name": "Alma-Tadema — The Finding of Moses",
      "credit": "Lawrence Alma-Tadema, The Finding of Moses",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_finding_of_Moses,_by_Lawrence_Alma_Tadema.jpg"
    },
    {
      "name": "Alma-Tadema — Death of the Firstborn",
      "credit": "Lawrence Alma-Tadema, The Death of the Pharaoh's Firstborn Son",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:De_dood_van_de_eerstgeborene_van_de_farao,_SK-A-2664.jpg"
    },
    {
      "name": "Roberts — The Plain before Mount Sinai",
      "credit": "David Roberts, The Plain of El Raheh, Mount Sinai",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_The_Plain_of_El_Raheh,_Mount_Sinai_-_B1975.3.1074_-_Yale_Center_for_British_Art.jpg"
    }
  ]
};
