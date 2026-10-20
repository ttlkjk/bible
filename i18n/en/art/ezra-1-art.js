// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezra-1)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "6": [["photo","art-esdra","img/art/ezra-1/esdra.jpg",[986,38,560,350],{"tilt":-1.2,"caption":"Mosaic of Ezra"}]],
    "13": [["photo","art-building","img/art/ezra-1/building.jpg",[1226,38,320,380],{"tilt":1.2,"caption":"Fouquet — Building the Temple"}]]
  },
  credits: [
    {
      "name": "Mosaic of Ezra",
      "credit": "Ezra, mosaic, Baptistery of Florence (photo: SuzzaneMcg)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:FlorenceBaptistery_Ezra.png"
    },
    {
      "name": "Fouquet — Building the Temple",
      "credit": "Jean Fouquet, The Building of a Cathedral (Web Gallery of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean_Fouquet_-_The_Building_of_a_Cathedral_-_WGA8036.jpg"
    }
  ]
};
