// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/obadiah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "10": [["move","art-theatre",null]]
  },
  beats: {
    "1": [["photo","art-meeting","img/art/obadiah/meeting.jpg",[1076,38,470,337],{"tilt":-1.2,"caption":"Bottalla — Esau Meets Jacob"}]],
    "6": [["photo","art-valley","img/art/obadiah/valley.jpg",[1026,38,520,333],{"tilt":1.2,"caption":"Roberts — Petra, East End of the Valley"}]],
    "8": [["photo","art-theatre","img/art/obadiah/theatre.jpg",[1196,38,350,526],{"tilt":-1.2,"caption":"Roberts — The Theatre at Petra's Entrance"}]],
    "18": [["photo","art-prisoners","img/art/obadiah/prisoners.jpg",[1036,38,510,348],{"tilt":1.2,"caption":"Tissot — The Flight of the Prisoners"}]]
  },
  credits: [
    {
      "name": "Bottalla — Esau Meets Jacob",
      "credit": "Giovanni Maria Bottalla, Meeting between Esau and Jacob",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Raffaellino_Bottalla_-_Meeting_between_Esau_and_Jacob_-_Google_Art_Project.jpg"
    },
    {
      "name": "Roberts — Petra, East End of the Valley",
      "credit": "David Roberts, Petra, Eastern End of the Valley (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Petra,_Eastern_End_of_the_Valley_-_1927.127_-_Cleveland_Museum_of_Art.jpg"
    },
    {
      "name": "Roberts — The Theatre at Petra's Entrance",
      "credit": "David Roberts, Entrance to Petra, the Theatre (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Entrance_to_Petra,_the_Theatre_-_1927.117_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "Tissot — The Flight of the Prisoners",
      "credit": "James Tissot, The Flight of the Prisoners",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Flight_of_the_Prisoners.jpg"
    }
  ]
};
