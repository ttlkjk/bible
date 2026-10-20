// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/psalms)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-moses",[1236,38,310,402]]]
  },
  beats: {
    "4": [["photo","art-moses","img/art/psalms/moses.jpg",[1136,38,410,531],{"tilt":-1.2,"caption":"Champaigne — Moses with the Ten Commandments"}]],
    "15": [["photo","art-starry","img/art/psalms/starry.jpg",[1096,38,450,349],{"tilt":1.2,"caption":"Van Gogh — Starry Night over the Rhône"}]],
    "21": [["photo","art-granberg","img/art/psalms/granberg.jpg",[1156,38,390,534],{"tilt":-1.2,"caption":"Granberg — Nathan Rebukes David"}]]
  },
  credits: [
    {
      "name": "Champaigne — Moses with the Ten Commandments",
      "credit": "Philippe de Champaigne, Moses Presenting the Tablets of the Law",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Philippe_de_Champaigne_-_Moses_Presenting_the_Tablets_of_the_Law_-_c._1648.jpg"
    },
    {
      "name": "Van Gogh — Starry Night over the Rhône",
      "credit": "Vincent van Gogh, Starry Night Over the Rhône",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg"
    },
    {
      "name": "Granberg — Nathan Rebukes David",
      "credit": "Emanuel Granberg, Nathan Confronts David",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Emanuel_Granberg_Nathan_confronts_David.jpg"
    }
  ]
};
