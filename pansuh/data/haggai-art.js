// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/haggai)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "25": [["move","art-relief",[946,38,600,397]]]
  },
  beats: {
    "0": [["photo","art-ruins","img/art/haggai/ruins.jpg",[786,38,760,536],{"tilt":-1.2,"caption":"로베르 〈도리스식 신전 폐허〉"}]],
    "9": [["photo","art-haggai","img/art/haggai/haggai.jpg",[786,38,760,479],{"tilt":1.2,"caption":"피렌체 학개 모자이크"}]],
    "17": [["photo","art-debray","img/art/haggai/debray.jpg",[996,468,550,309],{"tilt":-1.2,"caption":"데 브라이 〈스바 여왕과 성전〉"}]],
    "21": [["photo","art-tachara","img/art/haggai/tachara.jpg",[906,38,640,480],{"tilt":1.2,"caption":"페르세폴리스 다리오 궁전"}]],
    "24": [["photo","art-relief","img/art/haggai/relief.jpg",[786,38,760,503],{"tilt":-1.2,"caption":"페르세폴리스 시종 부조"}]]
  },
  credits: [
    {
      "name": "로베르 〈도리스식 신전 폐허〉",
      "credit": "Hubert Robert, Ruins of a Doric Temple",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Hubert_Robert_-_Ruins_of_a_Doric_Temple.jpg"
    },
    {
      "name": "피렌체 학개 모자이크",
      "credit": "Haggai, mosaic, Baptistery of Florence (photo: SuzzaneMcg)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:FlorenceBaptistery_Haggai.png"
    },
    {
      "name": "데 브라이 〈스바 여왕과 성전〉",
      "credit": "Salomon de Bray, The Queen of Sheba before the Temple of Solomon in Jerusalem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Queen_of_Sheba_before_the_temple_of_Solomon_in_Jerusalem,_by_Salomon_de_Bray_(1597-1664).jpg"
    },
    {
      "name": "페르세폴리스 다리오 궁전",
      "credit": "Tachara, Palace of Darius, Persepolis (photo: Derafsh Kaviani)",
      "license": "CC BY-SA 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tachar_Persepolis_Iran.JPG"
    },
    {
      "name": "페르세폴리스 시종 부조",
      "credit": "Servants bearing food and drinks, Palace of Darius, Persepolis (photo: Carole Raddato)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:Relief_on_the_southern_stairway_of_the_Palace_of_Darius_depicting_a_line_of_servants_bearing_food_and_drinks,_Persepolis,_Iran_(46984471895).jpg"
    }
  ]
};
