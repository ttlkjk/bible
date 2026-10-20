// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezra-5)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "1": [["photo","art-zorobabel","img/art/ezra-5/zorobabel.jpg",[1196,38,350,493],{"tilt":-1.2,"caption":"스룹바벨 프레스코"}]],
    "5": [["photo","art-chipiez","img/art/ezra-5/chipiez.jpg",[866,38,680,444],{"tilt":1.2,"caption":"시피에 〈페르세폴리스 궁전〉"}]],
    "11": [["photo","art-diano","img/art/ezra-5/diano.jpg",[886,38,660,351],{"tilt":-1.2,"caption":"디아노 〈성전 봉헌〉"}]]
  },
  credits: [
    {
      "name": "스룹바벨 프레스코",
      "credit": "Zerubbabel, fresco, Chapel of the Immaculate, San Francesco, Padua (photo: Syrio)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Padova,_chiesa_di_San_Francesco_-_Affreschi_della_cappella_dell%27Immacolata_-_Zorobabel.jpg"
    },
    {
      "name": "시피에 〈페르세폴리스 궁전〉",
      "credit": "Charles Chipiez, Reconstruction of a Palace at Persepolis",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Persepolis_T_Chipiez.jpg"
    },
    {
      "name": "디아노 〈성전 봉헌〉",
      "credit": "Giacinto Diano, The Dedication of the Temple at Jerusalem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Dedication_of_the_Temple_at_Jerusalem_P5645.jpg"
    }
  ]
};
