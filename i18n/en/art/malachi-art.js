// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/malachi)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "15": [["move","art-lamb",[1036,188,510,305]]]
  },
  beats: {
    "4": [["photo","art-maleachi","img/art/malachi/maleachi.jpg",[1226,38,320,529],{"tilt":-1.2,"caption":"The Prophet Malachi"}]],
    "9": [["photo","art-debray","img/art/malachi/debray.jpg",[1086,38,460,409],{"tilt":1.2,"caption":"De Bray — David and the Levites"}]],
    "14": [["photo","art-lamb","img/art/malachi/lamb.jpg",[886,187,660,394],{"tilt":-1.2,"caption":"Zurbarán — The Lamb of God"}]],
    "28": [["photo","art-martin","img/art/malachi/martin.jpg",[1076,188,470,303],{"tilt":1.2,"caption":"Martin — The Great Day of His Wrath"}]],
    "34": [["photo","art-harvest","img/art/malachi/harvest.jpg",[1076,38,470,342],{"tilt":-1.2,"caption":"Bruegel — The Harvesters"}]],
    "39": [["photo","art-codex","img/art/malachi/codex.jpg",[1236,38,310,429],{"tilt":1.2,"caption":"Codex Amiatinus — Ezra"}]],
    "43": [["photo","art-angeli","img/art/malachi/angeli.jpg",[1086,188,460,301],{"tilt":-1.2,"caption":"Angeli — Elijah's Chariot of Fire"}]]
  },
  credits: [
    {
      "name": "The Prophet Malachi",
      "credit": "Unknown master (15th century), The Prophet Malachi",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Der_Prophet_Maleachi_D_15Jh.jpg"
    },
    {
      "name": "De Bray — David and the Levites",
      "credit": "Jan de Bray, David Playing the Harp with Priests and Levites (Herzog Anton Ulrich-Museum; photo: Dguendel)",
      "license": "CC BY 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Herzog_Anton_Ulrich-Museum,_Jan_de_Bray,_David_Harfe_spielend_mit_Priester_und_Leviten.jpg"
    },
    {
      "name": "Zurbarán — The Lamb of God",
      "credit": "Francisco de Zurbarán, Agnus Dei",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Agnus_Dei_Zurbar%C3%A1n.jpg"
    },
    {
      "name": "Martin — The Great Day of His Wrath",
      "credit": "John Martin, The Great Day of His Wrath",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "Bruegel — The Harvesters",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg"
    },
    {
      "name": "Codex Amiatinus — Ezra",
      "credit": "Ezra the Scribe, Codex Amiatinus, fol. 5r (Biblioteca Medicea Laurenziana, Florence; photo: Gennadii Saus i Segura)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Codex_Amiantinus._Firenze,_Biblioteca_Medicea_Laurenziana,_Amiat.1,_fol._5r.jpg"
    },
    {
      "name": "Angeli — Elijah's Chariot of Fire",
      "credit": "Giuseppe Angeli, Elijah Taken Up in a Chariot of Fire",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Giuseppe_Angeli,_Elijah_Taken_Up_in_a_Chariot_of_Fire,_c._1740-1755,_NGA_41685.jpg"
    }
  ]
};
