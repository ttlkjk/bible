// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/joel)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "18": [["move","art-costa",null]],
    "23": [["move","art-orchard",[1146,358,400,328]]],
    "32": [["move","art-wrath",null]],
    "41": [["move","art-harvest",[1116,358,430,313]]]
  },
  beats: {
    "0": [["photo","art-joel","../../pansuh/img/art/joel/joel.jpg",[1146,38,400,539],{"tilt":-1.2,"caption":"Michelangelo — The Prophet Joel"}]],
    "4": [["photo","art-anker","../../pansuh/img/art/joel/anker.jpg",[976,38,570,399],{"tilt":1.2,"caption":"Anker — Grandfather's Story"}]],
    "16": [["photo","art-costa","../../pansuh/img/art/joel/costa.jpg",[786,188,760,304],{"tilt":-1.2,"caption":"Costa — Threshing in the Roman Countryside"}]],
    "20": [["photo","art-orchard","../../pansuh/img/art/joel/orchard.jpg",[1026,350,520,426],{"tilt":1.2,"caption":"Pissarro — The Orchard"}]],
    "26": [["photo","art-zurbaran","../../pansuh/img/art/joel/zurbaran.jpg",[1216,38,330,463],{"tilt":-1.2,"caption":"Zurbarán — Pentecost"}]],
    "30": [["photo","art-wrath","../../pansuh/img/art/joel/wrath.jpg",[896,358,650,419],{"tilt":1.2,"caption":"Martin — The Great Day of His Wrath"}]],
    "37": [["photo","art-wildens","../../pansuh/img/art/joel/wildens.jpg",[966,188,580,349],{"tilt":-1.2,"caption":"Wildens — Joseph Sold by His Brothers"}]],
    "38": [["photo","art-harvest","../../pansuh/img/art/joel/harvest.jpg",[966,353,580,422],{"tilt":1.2,"caption":"Bruegel — The Harvesters"}]]
  },
  credits: [
    {
      "name": "Michelangelo — The Prophet Joel",
      "credit": "Michelangelo, The Prophet Joel (Sistine Chapel ceiling)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_Buonarroti_029.jpg"
    },
    {
      "name": "Anker — Grandfather's Story",
      "credit": "Albert Anker, Grandfather Telling a Story (1884)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anker_Grossvater_erz%C3%A4hlt_eine_Geschichte_1884.jpg"
    },
    {
      "name": "Costa — Threshing in the Roman Countryside",
      "credit": "Nino Costa, Threshing in the Roman Countryside (1854)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Threshing_in_the_Roman_Countryside_(1854),_by_Nino_Costa.jpg"
    },
    {
      "name": "Pissarro — The Orchard",
      "credit": "Camille Pissarro, The Orchard (1872)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Camille_Pissarro,_Le_verger_(The_Orchard),_1872.jpg"
    },
    {
      "name": "Zurbarán — Pentecost",
      "credit": "Francisco de Zurbarán, Pentecost (photo: Jl FilpoC)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:La_Pentecost%C3%A9s,_Francisco_de_Zurbar%C3%A1n.jpg"
    },
    {
      "name": "Martin — The Great Day of His Wrath",
      "credit": "John Martin, The Great Day of His Wrath",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "Wildens — Joseph Sold by His Brothers",
      "credit": "Jan Wildens, Joseph Sold by His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Wildens_-_Joseph_sold_by_his_Brothers_-_Google_Art_Project.jpg"
    },
    {
      "name": "Bruegel — The Harvesters",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg"
    }
  ]
};
