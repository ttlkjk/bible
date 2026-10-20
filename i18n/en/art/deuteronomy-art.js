// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/deuteronomy)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "7": [["move","art-tabernacle",null]],
    "20": [["move","art-champaigne",[1226,38,320,415]]],
    "39": [["move","art-redsea",null]]
  },
  beats: {
    "5": [["photo","art-tabernacle","img/art/deuteronomy/tabernacle.jpg",[1056,358,490,417],{"tilt":-1.2,"caption":"Tissot — Moses and Joshua"}]],
    "18": [["photo","art-champaigne","img/art/deuteronomy/champaigne.jpg",[1136,38,410,531],{"tilt":1.2,"caption":"Champaigne — Moses with the Ten Commandments"}]],
    "36": [["photo","art-manna","img/art/deuteronomy/manna.jpg",[1106,188,440,538],{"tilt":-1.2,"caption":"Tissot — Gathering the Manna"}]],
    "37": [["photo","art-redsea","img/art/deuteronomy/redsea.jpg",[786,358,760,340],{"tilt":1.2,"caption":"Jordaens — Crossing the Red Sea"}]],
    "45": [["photo","art-wedding","img/art/deuteronomy/wedding.jpg",[1186,358,360,334],{"tilt":-1.2,"caption":"Israëls — A Jewish Wedding"}]],
    "46": [["photo","art-sukkot","img/art/deuteronomy/sukkot.jpg",[1156,188,390,527],{"tilt":1.2,"caption":"Gans — Prayer at the Feast of Tabernacles"}]],
    "52": [["photo","art-cassatt","img/art/deuteronomy/cassatt.jpg",[986,38,560,385],{"tilt":-1.2,"caption":"Cassatt — Mother and Child"}]]
  },
  credits: [
    {
      "name": "Tissot — Moses and Joshua",
      "credit": "James Tissot, Moses and Joshua in the Tabernacle",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_Moses_and_Joshua_in_the_Tabernacle.jpg"
    },
    {
      "name": "Champaigne — Moses with the Ten Commandments",
      "credit": "Philippe de Champaigne, Moses Presenting the Tablets of the Law",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Philippe_de_Champaigne_-_Moses_Presenting_the_Tablets_of_the_Law_-_c._1648.jpg"
    },
    {
      "name": "Tissot — Gathering the Manna",
      "credit": "James Tissot, The Gathering of the Manna",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Gathering_of_the_Manna_(color).jpg"
    },
    {
      "name": "Jordaens — Crossing the Red Sea",
      "credit": "Hans Jordaens III (attributed), The Crossing of the Red Sea",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jordaens_Crossing_of_the_Red_Sea.jpg"
    },
    {
      "name": "Israëls — A Jewish Wedding",
      "credit": "Jozef Israëls, A Jewish Wedding",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Joodse_bruiloft_Rijksmuseum_SK-A-2598.jpeg"
    },
    {
      "name": "Gans — Prayer at the Feast of Tabernacles",
      "credit": "Paula Gans, Prayer at the Feast of Tabernacles",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Im_Gebet_beim_Laubh%C3%BCttenfest,_Paula_Gans_IMG_4724_4725_4726_edit.jpg"
    },
    {
      "name": "Cassatt — Mother and Child",
      "credit": "Mary Cassatt, Mother and Child (The Goodnight Hug)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Mary_Cassatt_-_Mother_and_Child_(The_Goodnight_Hug).jpg"
    }
  ]
};
