// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/song)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "10": [["move","art-marko",[1096,38,450,343]]]
  },
  beats: {
    "0": [["photo","art-lovesong","img/art/song/lovesong.jpg",[1036,38,510,378],{"tilt":-1.2,"caption":"번존스 〈사랑의 노래〉"}]],
    "4": [["photo","art-rubens","img/art/song/rubens.jpg",[1136,38,410,529],{"tilt":1.2,"caption":"루벤스 〈인동 정자의 부부〉"}]],
    "9": [["photo","art-marko","img/art/song/marko.jpg",[846,38,700,533],{"tilt":-1.2,"caption":"마르코 〈티볼리의 포도 수확〉"}]]
  },
  credits: [
    {
      "name": "번존스 〈사랑의 노래〉",
      "credit": "Edward Burne-Jones, The Love Song (Le Chant d'Amour) (Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Love_Song_MET_DP323394.jpg"
    },
    {
      "name": "루벤스 〈인동 정자의 부부〉",
      "credit": "Peter Paul Rubens, The Honeysuckle Bower: Rubens and Isabella Brant (Alte Pinakothek, Munich)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_(1574-1640)_Rubens_en_Isabella_Brant_in_een_prieel_van_kamperfoelie_-_Alte_Pinakothek.jpg"
    },
    {
      "name": "마르코 〈티볼리의 포도 수확〉",
      "credit": "Károly Markó the Elder, Landscape at Tivoli with a Scene from the Grape Harvest (Hungarian National Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Mark%C3%B3,_K%C3%A1roly_-_Landscape_at_Tivoli,_with_a_Scene_from_the_Grape_Harvest_-_Google_Art_Project.jpg"
    }
  ]
};
