// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/proverbs)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "11": [["move","art-cleveland",null]]
  },
  beats: {
    "7": [["photo","art-toulmouche","../../pansuh/img/art/proverbs/toulmouche.jpg",[1146,38,400,530],{"tilt":-1.2,"caption":"Toulmouche — The Reading Lesson"}]],
    "8": [["photo","art-cleveland","../../pansuh/img/art/proverbs/cleveland.jpg",[1196,38,350,526],{"tilt":1.2,"caption":"Medieval Bible — Solomon and Rehoboam"}]]
  },
  credits: [
    {
      "name": "Toulmouche — The Reading Lesson",
      "credit": "Auguste Toulmouche, The Reading Lesson (Museum of Fine Arts, Boston)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Auguste_Toulmouche_-_Reading_Lesson_-_24.1_-_Museum_of_Fine_ArtsFXD.jpg"
    },
    {
      "name": "Medieval Bible — Solomon and Rehoboam",
      "credit": "Opening page of Proverbs with Solomon instructing Rehoboam, 13th-century Bible, Southern France (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Southern_France,_Toulouse(%3F),_13th_century_-_Fol._238r,_Proverbs,_historiated_initial_P,_Solomon_instructing_Rehoboam_-_2008.2.238.a_-_Cleveland_Museum_of_Art.tif"
    }
  ]
};
