// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/nahum)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "14": [["move","art-sebaste",[1066,458,480,320]]]
  },
  beats: {
    "7": [["photo","art-repent","img/art/nahum/repent.jpg",[1126,38,420,355],{"tilt":-1.2,"caption":"Martin — Nineveh Repents"}]],
    "9": [["photo","art-ruisdael","img/art/nahum/ruisdael.jpg",[956,188,590,440],{"tilt":1.2,"caption":"Ruisdael — Storm Clouds over the Sea"}]],
    "13": [["photo","art-sebaste","img/art/nahum/sebaste.jpg",[886,341,660,441],{"tilt":-1.2,"caption":"Roberts — Samaria from Afar"}]]
  },
  credits: [
    {
      "name": "Martin — Nineveh Repents",
      "credit": "John Martin, The Repentance of Nineveh (Yale University Art Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Repentance_of_Nineveh_-_1958.66_-_Yale_University_Art_Gallery.jpg"
    },
    {
      "name": "Ruisdael — Storm Clouds over the Sea",
      "credit": "Jacob van Ruisdael, Storm Clouds over the Sea (Nationalmuseum, Stockholm)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Storm_Clouds_over_the_Sea_(Jacob_Isaackszoon_van_Ruisdael)_-_Nationalmuseum_-_21087.tif"
    },
    {
      "name": "Roberts — Samaria from Afar",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    }
  ]
};
