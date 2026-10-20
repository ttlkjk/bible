// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezra-1)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "3": [["move","art-returning",null]]
  },
  beats: {
    "1": [["photo","art-returning","img/art/ezra-1/returning.jpg",[1106,38,440,535],{"tilt":-1.2,"caption":"예루살렘으로 돌아오는 유대인"}]],
    "6": [["photo","art-esdra","img/art/ezra-1/esdra.jpg",[916,38,630,394],{"tilt":1.2,"caption":"에스라 모자이크"}]],
    "15": [["photo","art-roberts","img/art/ezra-1/roberts.jpg",[916,38,630,420],{"tilt":-1.2,"caption":"로버츠 〈감람산에서 본 예루살렘〉"}]]
  },
  credits: [
    {
      "name": "예루살렘으로 돌아오는 유대인",
      "credit": "Providence Lithograph Company, The Jews Return to Jerusalem in the Time of Cyrus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Jews_Return_to_Jerusalem_in_the_Time_of_Cyrus.jpg"
    },
    {
      "name": "에스라 모자이크",
      "credit": "Ezra, mosaic, Baptistery of Florence (photo: SuzzaneMcg)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:FlorenceBaptistery_Ezra.png"
    },
    {
      "name": "로버츠 〈감람산에서 본 예루살렘〉",
      "credit": "David Roberts, Jerusalem from the Mount of Olives (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_Mount_of_Olives_-_1927.118_-_Cleveland_Museum_of_Art.tif"
    }
  ]
};
