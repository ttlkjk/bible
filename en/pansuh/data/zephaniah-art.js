// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/zephaniah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "4": [["photo","art-baal","../../pansuh/img/art/zephaniah/baal.jpg",[1246,38,300,442],{"tilt":-1.2,"caption":"Bronze Baal from Megiddo"}]],
    "12": [["photo","art-cole","../../pansuh/img/art/zephaniah/cole.jpg",[1046,468,500,311],{"tilt":1.2,"caption":"Cole — The Course of Empire: Desolation"}]]
  },
  credits: [
    {
      "name": "Bronze Baal from Megiddo",
      "credit": "Bronze figure of Baal from Megiddo, Oriental Institute Museum, Chicago (photo: Daderot)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Baal,_God_of_Fertility_and_Storms,_Megiddo,_Strata_IX-VII,_Late_Bronze_Age,_1550-1200_BC,_bronze_-_Oriental_Institute_Museum,_University_of_Chicago_-_DSC07738.JPG"
    },
    {
      "name": "Cole — The Course of Empire: Desolation",
      "credit": "Thomas Cole, The Course of Empire: Desolation (1836)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"
    }
  ]
};
