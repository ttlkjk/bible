// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezra-5)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "1": [["photo","art-zorobabel","img/art/ezra-5/zorobabel.jpg",[1206,38,340,479],{"tilt":-1.2,"caption":"Fresco of Zerubbabel"}]],
    "5": [["photo","art-chipiez","img/art/ezra-5/chipiez.jpg",[866,38,680,444],{"tilt":1.2,"caption":"Chipiez — A Palace at Persepolis"}]],
    "12": [["photo","art-bouts","img/art/ezra-5/bouts.jpg",[1206,38,340,430],{"tilt":-1.2,"caption":"Bouts — The Passover Meal"}]]
  },
  credits: [
    {
      "name": "Fresco of Zerubbabel",
      "credit": "Zerubbabel, fresco, Chapel of the Immaculate, San Francesco, Padua (photo: Syrio)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Padova,_chiesa_di_San_Francesco_-_Affreschi_della_cappella_dell%27Immacolata_-_Zorobabel.jpg"
    },
    {
      "name": "Chipiez — A Palace at Persepolis",
      "credit": "Charles Chipiez, Reconstruction of a Palace at Persepolis",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Persepolis_T_Chipiez.jpg"
    },
    {
      "name": "Bouts — The Passover Meal",
      "credit": "Dieric Bouts, The Feast of the Passover",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Dieric_Bouts_-_The_Feast_of_the_Passover_-_WGA03013.jpg"
    }
  ]
};
