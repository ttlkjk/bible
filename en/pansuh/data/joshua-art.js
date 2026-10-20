// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/joshua)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "15": [["move","art-map",[1026,38,520,397]]],
    "34": [["move","art-jordan",null]]
  },
  beats: {
    "3": [["photo","art-ark","../../pansuh/img/art/joshua/ark.jpg",[956,38,590,457],{"tilt":-1.2,"caption":"Tissot — The Ark Crosses the Jordan"}]],
    "5": [["photo","art-rahab","../../pansuh/img/art/joshua/rahab.jpg",[1156,38,390,528],{"tilt":1.2,"caption":"Tissot — Rahab and the Two Spies"}]],
    "14": [["photo","art-map","../../pansuh/img/art/joshua/map.jpg",[846,38,700,534],{"tilt":-1.2,"caption":"Map of Canaan"}]],
    "19": [["photo","art-shechem","../../pansuh/img/art/joshua/shechem.jpg",[1076,468,470,309],{"tilt":1.2,"caption":"Roberts — Nablus, Ancient Shechem"}]],
    "32": [["photo","art-jordan","../../pansuh/img/art/joshua/jordan.jpg",[786,188,760,456],{"tilt":-1.2,"caption":"Löffler — By the Jordan"}]]
  },
  credits: [
    {
      "name": "Tissot — The Ark Crosses the Jordan",
      "credit": "James Tissot, The Ark Passes Over the Jordan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg"
    },
    {
      "name": "Tissot — Rahab and the Two Spies",
      "credit": "James Tissot, The Harlot of Jericho and the Two Spies",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Harlot_of_Jericho_and_the_Two_Spies.jpg"
    },
    {
      "name": "Map of Canaan",
      "credit": "Claes Janszoon Visscher II, Terre de Canaan (map)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claes_Janszoon_Visscher_II,_Terre_de_Canaan_a_Present_la_Palestine_(FL199992234_2369120).jpg"
    },
    {
      "name": "Roberts — Nablus, Ancient Shechem",
      "credit": "David Roberts, Nablus, Ancient Shechem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Nablus_Ancient_Shechem_-_1927.139_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "Löffler — By the Jordan",
      "credit": "August Löffler (attributed), Am Jordan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:August_L%C3%B6ffler_-_Am_Jordan_(um_1849).jpg"
    }
  ]
};
