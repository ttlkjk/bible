// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ecclesiastes)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "1": [["photo","art-cleveland","img/art/ecclesiastes/cleveland.jpg",[716,38,310,483],{"tilt":-1.2,"caption":"중세 성경 〈가르치는 솔로몬〉"}]],
    "5": [["photo","art-consummation","img/art/ecclesiastes/consummation.jpg",[866,38,680,461],{"tilt":1.2,"caption":"콜 〈제국의 행로 · 완성〉"}]],
    "8": [["photo","art-oxbow","img/art/ecclesiastes/oxbow.jpg",[786,38,760,516],{"tilt":-1.2,"caption":"콜 〈코네티컷강의 옥스보〉"}]],
    "12": [["photo","art-youth","img/art/ecclesiastes/youth.jpg",[1006,358,540,369],{"tilt":1.2,"caption":"콜 〈인생의 항로 · 청년〉"}]]
  },
  credits: [
    {
      "name": "중세 성경 〈가르치는 솔로몬〉",
      "credit": "Opening page of Ecclesiastes with Solomon teaching, 13th-century Bible, Southern France (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Southern_France,_Toulouse(%3F),_13th_century_-_Fol._247v,_Ecclesiastes,_historiated_initial_V,_Solomon_teaching_-_2008.2.247.b_-_Cleveland_Museum_of_Art.jpg"
    },
    {
      "name": "콜 〈제국의 행로 · 완성〉",
      "credit": "Thomas Cole, The Course of Empire: The Consummation of Empire (New-York Historical Society)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg"
    },
    {
      "name": "콜 〈코네티컷강의 옥스보〉",
      "credit": "Thomas Cole, The Oxbow (Metropolitan Museum of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Oxbow_(The_Connecticut_River_near_Northampton_1836).jpg"
    },
    {
      "name": "콜 〈인생의 항로 · 청년〉",
      "credit": "Thomas Cole, The Voyage of Life: Youth (National Gallery of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Thomas_Cole,_The_Voyage_of_Life_-_Youth,_1842,_NGA_52451.jpg"
    }
  ]
};
