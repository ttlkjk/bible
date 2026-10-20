// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/haggai)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "25": [["move","art-relief",[1076,38,470,311]]]
  },
  beats: {
    "0": [["photo","art-ruins","../../pansuh/img/art/haggai/ruins.jpg",[1016,38,530,374],{"tilt":-1.2,"caption":"Robert — Ruins of a Doric Temple"}]],
    "9": [["photo","art-haggai","../../pansuh/img/art/haggai/haggai.jpg",[936,38,610,385],{"tilt":1.2,"caption":"Mosaic of Haggai, Florence"}]],
    "17": [["photo","art-debray","../../pansuh/img/art/haggai/debray.jpg",[1076,468,470,264],{"tilt":-1.2,"caption":"De Bray — The Queen of Sheba at the Temple"}]],
    "21": [["photo","art-tachara","../../pansuh/img/art/haggai/tachara.jpg",[1066,38,480,360],{"tilt":1.2,"caption":"Palace of Darius, Persepolis"}]],
    "24": [["photo","art-relief","../../pansuh/img/art/haggai/relief.jpg",[816,38,730,483],{"tilt":-1.2,"caption":"Servants Relief, Persepolis"}]]
  },
  credits: [
    {
      "name": "Robert — Ruins of a Doric Temple",
      "credit": "Hubert Robert, Ruins of a Doric Temple",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Hubert_Robert_-_Ruins_of_a_Doric_Temple.jpg"
    },
    {
      "name": "Mosaic of Haggai, Florence",
      "credit": "Haggai, mosaic, Baptistery of Florence (photo: SuzzaneMcg)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:FlorenceBaptistery_Haggai.png"
    },
    {
      "name": "De Bray — The Queen of Sheba at the Temple",
      "credit": "Salomon de Bray, The Queen of Sheba before the Temple of Solomon in Jerusalem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Queen_of_Sheba_before_the_temple_of_Solomon_in_Jerusalem,_by_Salomon_de_Bray_(1597-1664).jpg"
    },
    {
      "name": "Palace of Darius, Persepolis",
      "credit": "Tachara, Palace of Darius, Persepolis (photo: Derafsh Kaviani)",
      "license": "CC BY-SA 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tachar_Persepolis_Iran.JPG"
    },
    {
      "name": "Servants Relief, Persepolis",
      "credit": "Servants bearing food and drinks, Palace of Darius, Persepolis (photo: Carole Raddato)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:Relief_on_the_southern_stairway_of_the_Palace_of_Darius_depicting_a_line_of_servants_bearing_food_and_drinks,_Persepolis,_Iran_(46984471895).jpg"
    }
  ]
};
