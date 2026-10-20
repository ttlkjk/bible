// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ecclesiastes)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "14": [["move","art-youth",null]]
  },
  beats: {
    "4": [["photo","art-collier","img/art/ecclesiastes/collier.jpg",[1156,38,390,323],{"tilt":-1.2,"caption":"Collier — Vanitas Still Life"}]],
    "8": [["photo","art-oxbow","img/art/ecclesiastes/oxbow.jpg",[886,38,660,448],{"tilt":1.2,"caption":"Cole — The Oxbow on the Connecticut"}]],
    "12": [["photo","art-youth","img/art/ecclesiastes/youth.jpg",[926,358,620,424],{"tilt":-1.2,"caption":"Cole — The Voyage of Life: Youth"}]]
  },
  credits: [
    {
      "name": "Collier — Vanitas Still Life",
      "credit": "Evert Collier, Vanitas Still Life (Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Vanitas_Still_Life_MET_DP146494.jpg"
    },
    {
      "name": "Cole — The Oxbow on the Connecticut",
      "credit": "Thomas Cole, The Oxbow (Metropolitan Museum of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Oxbow_(The_Connecticut_River_near_Northampton_1836).jpg"
    },
    {
      "name": "Cole — The Voyage of Life: Youth",
      "credit": "Thomas Cole, The Voyage of Life: Youth (National Gallery of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Thomas_Cole,_The_Voyage_of_Life_-_Youth,_1842,_NGA_52451.jpg"
    }
  ]
};
