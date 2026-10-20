// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/zechariah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "5": [["move","art-flight",[1096,348,450,307]]]
  },
  beats: {
    "3": [["photo","art-haggai","img/art/zechariah/haggai.jpg",[966,38,580,366],{"tilt":-1.2,"caption":"Mosaic of Haggai, Florence"}]],
    "4": [["photo","art-flight","img/art/zechariah/flight.jpg",[906,340,640,437],{"tilt":1.2,"caption":"Tissot — The Flight of the Prisoners"}]],
    "16": [["photo","art-ishtar","img/art/zechariah/ishtar.jpg",[1096,188,450,338],{"tilt":-1.2,"caption":"Ishtar Gate"}]],
    "29": [["photo","art-michel","img/art/zechariah/michel.jpg",[1246,38,300,525],{"tilt":1.2,"caption":"Michelangelo — Zechariah"}]],
    "39": [["photo","art-torah","img/art/zechariah/torah.jpg",[1106,38,440,324],{"tilt":-1.2,"caption":"Torah Scroll"}]],
    "44": [["photo","art-jeremiah","img/art/zechariah/jeremiah.jpg",[1196,38,350,445],{"tilt":1.2,"caption":"Rembrandt — Jeremiah Lamenting"}]],
    "55": [["photo","art-church","img/art/zechariah/church.jpg",[1056,38,490,315],{"tilt":-1.2,"caption":"Church — Jerusalem from the Mount of Olives"}]],
    "60": [["photo","art-entry","img/art/zechariah/entry.jpg",[1096,38,450,412],{"tilt":1.2,"caption":"Giotto — Entry into Jerusalem"}]]
  },
  credits: [
    {
      "name": "Mosaic of Haggai, Florence",
      "credit": "Haggai, mosaic, Baptistery of Florence (photo: SuzzaneMcg)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:FlorenceBaptistery_Haggai.png"
    },
    {
      "name": "Tissot — The Flight of the Prisoners",
      "credit": "James Tissot, The Flight of the Prisoners",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Flight_of_the_Prisoners.jpg"
    },
    {
      "name": "Ishtar Gate",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "Michelangelo — Zechariah",
      "credit": "Michelangelo, The Prophet Zechariah (Sistine Chapel)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_Buonarroti_031.jpg"
    },
    {
      "name": "Torah Scroll",
      "credit": "Sefer Torah (Chester Beatty Library, CBL Heb 777)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Sefer_Torah_(CBL_Heb_777).jpg"
    },
    {
      "name": "Rembrandt — Jeremiah Lamenting",
      "credit": "Rembrandt, Jeremiah Lamenting the Destruction of Jerusalem (Rijksmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_-_Jeremia_treurend_over_de_verwoesting_van_Jeruzalem_-_Google_Art_Project.jpg"
    },
    {
      "name": "Church — Jerusalem from the Mount of Olives",
      "credit": "Frederic Edwin Church, Jerusalem from the Mount of Olives (Nelson-Atkins Museum of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Edwin_Church_-_Jerusalem_from_the_Mount_of_Olives_-_Google_Art_Project.jpg"
    },
    {
      "name": "Giotto — Entry into Jerusalem",
      "credit": "Giotto, Entry into Jerusalem (Scrovegni Chapel, Padua)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Hristov_ulazak_u_jerusalim.png"
    }
  ]
};
