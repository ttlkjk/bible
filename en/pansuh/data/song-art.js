// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/song)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-rubens",null]],
    "10": [["move","art-marko",[1086,38,460,350]]]
  },
  beats: {
    "0": [["photo","art-lovesong","../../pansuh/img/art/song/lovesong.jpg",[1066,38,480,356],{"tilt":-1.2,"caption":"Burne-Jones — The Love Song"}]],
    "4": [["photo","art-rubens","../../pansuh/img/art/song/rubens.jpg",[1136,38,410,529],{"tilt":1.2,"caption":"Rubens — The Honeysuckle Bower"}]],
    "9": [["photo","art-marko","../../pansuh/img/art/song/marko.jpg",[846,38,700,533],{"tilt":-1.2,"caption":"Markó — Grape Harvest at Tivoli"}]]
  },
  credits: [
    {
      "name": "Burne-Jones — The Love Song",
      "credit": "Edward Burne-Jones, The Love Song (Le Chant d'Amour) (Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Love_Song_MET_DP323394.jpg"
    },
    {
      "name": "Rubens — The Honeysuckle Bower",
      "credit": "Peter Paul Rubens, The Honeysuckle Bower: Rubens and Isabella Brant (Alte Pinakothek, Munich)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_(1574-1640)_Rubens_en_Isabella_Brant_in_een_prieel_van_kamperfoelie_-_Alte_Pinakothek.jpg"
    },
    {
      "name": "Markó — Grape Harvest at Tivoli",
      "credit": "Károly Markó the Elder, Landscape at Tivoli with a Scene from the Grape Harvest (Hungarian National Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Mark%C3%B3,_K%C3%A1roly_-_Landscape_at_Tivoli,_with_a_Scene_from_the_Grape_Harvest_-_Google_Art_Project.jpg"
    }
  ]
};
