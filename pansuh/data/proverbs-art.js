// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/proverbs)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "3": [["move","art-parabole",[1126,38,420,324]]],
    "11": [["move","art-cleveland",null]]
  },
  beats: {
    "1": [["photo","art-parabole","img/art/proverbs/parabole.jpg",[846,38,700,540],{"tilt":-1.2,"caption":"아른슈타인 성경 〈솔로몬의 잠언〉"}]],
    "7": [["photo","art-toulmouche","img/art/proverbs/toulmouche.jpg",[1146,38,400,530],{"tilt":1.2,"caption":"툴무슈 〈책 읽기 수업〉"}]],
    "8": [["photo","art-cleveland","img/art/proverbs/cleveland.jpg",[1196,38,350,526],{"tilt":-1.2,"caption":"중세 성경 〈솔로몬과 르호보암〉"}]]
  },
  credits: [
    {
      "name": "아른슈타인 성경 〈솔로몬의 잠언〉",
      "credit": "Solomon Writing the Proverbs, initial from the Arnstein Bible (British Library, Harley MS 2799)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Salom%C3%B3n_escribiendo_%E2%80%98Parabole_Salomonis%E2%80%99_-_Harley_MS_2799,_f._57v_(%27The_Arnstein_Bible%27)_-_detalle.jpg"
    },
    {
      "name": "툴무슈 〈책 읽기 수업〉",
      "credit": "Auguste Toulmouche, The Reading Lesson (Museum of Fine Arts, Boston)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Auguste_Toulmouche_-_Reading_Lesson_-_24.1_-_Museum_of_Fine_ArtsFXD.jpg"
    },
    {
      "name": "중세 성경 〈솔로몬과 르호보암〉",
      "credit": "Opening page of Proverbs with Solomon instructing Rehoboam, 13th-century Bible, Southern France (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Southern_France,_Toulouse(%3F),_13th_century_-_Fol._238r,_Proverbs,_historiated_initial_P,_Solomon_instructing_Rehoboam_-_2008.2.238.a_-_Cleveland_Museum_of_Art.tif"
    }
  ]
};
