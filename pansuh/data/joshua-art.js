// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/joshua)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "16": [["move","art-map",[1006,38,540,412]]]
  },
  beats: {
    "3": [["photo","art-ark","img/art/joshua/ark.jpg",[866,38,680,526],{"tilt":-1.2,"caption":"티소 〈요단을 건너는 언약궤〉"}]],
    "5": [["photo","art-rahab","img/art/joshua/rahab.jpg",[1156,38,390,528],{"tilt":1.2,"caption":"티소 〈라합과 두 정탐꾼〉"}]],
    "14": [["photo","art-map","img/art/joshua/map.jpg",[846,38,700,534],{"tilt":-1.2,"caption":"가나안 지도"}]],
    "19": [["photo","art-shechem","img/art/joshua/shechem.jpg",[1076,468,470,309],{"tilt":1.2,"caption":"로버츠 〈세겜 나블루스〉"}]],
    "36": [["photo","art-martin","img/art/joshua/martin.jpg",[656,38,520,392],{"tilt":-1.2,"caption":"마틴 〈태양을 멈춘 여호수아〉"}]]
  },
  credits: [
    {
      "name": "티소 〈요단을 건너는 언약궤〉",
      "credit": "James Tissot, The Ark Passes Over the Jordan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg"
    },
    {
      "name": "티소 〈라합과 두 정탐꾼〉",
      "credit": "James Tissot, The Harlot of Jericho and the Two Spies",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Harlot_of_Jericho_and_the_Two_Spies.jpg"
    },
    {
      "name": "가나안 지도",
      "credit": "Claes Janszoon Visscher II, Terre de Canaan (map)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claes_Janszoon_Visscher_II,_Terre_de_Canaan_a_Present_la_Palestine_(FL199992234_2369120).jpg"
    },
    {
      "name": "로버츠 〈세겜 나블루스〉",
      "credit": "David Roberts, Nablus, Ancient Shechem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Nablus_Ancient_Shechem_-_1927.139_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "마틴 〈태양을 멈춘 여호수아〉",
      "credit": "John Martin, Joshua Commanding the Sun to Stand Still upon Gibeon",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Joshua_Commanding_the_Sun_to_Stand_Still_-_Google_Art_Project.jpg"
    }
  ]
};
