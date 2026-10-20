// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/joel)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "18": [["move","art-costa",null]]
  },
  beats: {
    "0": [["photo","art-joel","img/art/joel/joel.jpg",[1146,38,400,539],{"tilt":-1.2,"caption":"미켈란젤로 〈선지자 요엘〉"}]],
    "4": [["photo","art-anker","img/art/joel/anker.jpg",[786,38,760,532],{"tilt":1.2,"caption":"앙커 〈할아버지 이야기〉"}]],
    "11": [["photo","art-melendez","img/art/joel/melendez.jpg",[906,38,640,366],{"tilt":-1.2,"caption":"멜렌데스 〈메뚜기 떼를 막다〉"}]],
    "14": [["photo","art-gottlieb","img/art/joel/gottlieb.jpg",[1136,38,410,530],{"tilt":1.2,"caption":"고틀리프 〈속죄일의 회당〉"}]],
    "16": [["photo","art-costa","img/art/joel/costa.jpg",[786,38,760,304],{"tilt":-1.2,"caption":"코스타 〈로마 들판의 타작〉"}]],
    "20": [["photo","art-orchard","img/art/joel/orchard.jpg",[896,38,650,532],{"tilt":1.2,"caption":"피사로 〈과수원〉"}]],
    "26": [["photo","art-zurbaran","img/art/joel/zurbaran.jpg",[1166,38,380,533],{"tilt":-1.2,"caption":"수르바란 〈성령 강림〉"}]],
    "30": [["photo","art-wrath","img/art/joel/wrath.jpg",[926,38,620,400],{"tilt":1.2,"caption":"마틴 〈진노의 큰 날〉"}]],
    "37": [["photo","art-wildens","img/art/joel/wildens.jpg",[806,38,740,445],{"tilt":-1.2,"caption":"빌던스 〈형제에게 팔린 요셉〉"}]],
    "38": [["photo","art-harvest","img/art/joel/harvest.jpg",[836,38,710,517],{"tilt":1.2,"caption":"브뤼헐 〈추수하는 사람들〉"}]]
  },
  credits: [
    {
      "name": "미켈란젤로 〈선지자 요엘〉",
      "credit": "Michelangelo, The Prophet Joel (Sistine Chapel ceiling)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_Buonarroti_029.jpg"
    },
    {
      "name": "앙커 〈할아버지 이야기〉",
      "credit": "Albert Anker, Grandfather Telling a Story (1884)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anker_Grossvater_erz%C3%A4hlt_eine_Geschichte_1884.jpg"
    },
    {
      "name": "멜렌데스 〈메뚜기 떼를 막다〉",
      "credit": "Miguel Jacinto Meléndez, Saint Augustine Appearing to Prevent a Plague of Locusts",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Miguel_jacinto_melendez-san_agustin.jpg"
    },
    {
      "name": "고틀리프 〈속죄일의 회당〉",
      "credit": "Maurycy Gottlieb, Jews Praying in the Synagogue on Yom Kippur",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Maurycy_Gottlieb_-_Jews_Praying_in_the_Synagogue_on_Yom_Kippur.jpg"
    },
    {
      "name": "코스타 〈로마 들판의 타작〉",
      "credit": "Nino Costa, Threshing in the Roman Countryside (1854)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Threshing_in_the_Roman_Countryside_(1854),_by_Nino_Costa.jpg"
    },
    {
      "name": "피사로 〈과수원〉",
      "credit": "Camille Pissarro, The Orchard (1872)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Camille_Pissarro,_Le_verger_(The_Orchard),_1872.jpg"
    },
    {
      "name": "수르바란 〈성령 강림〉",
      "credit": "Francisco de Zurbarán, Pentecost (photo: Jl FilpoC)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:La_Pentecost%C3%A9s,_Francisco_de_Zurbar%C3%A1n.jpg"
    },
    {
      "name": "마틴 〈진노의 큰 날〉",
      "credit": "John Martin, The Great Day of His Wrath",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "빌던스 〈형제에게 팔린 요셉〉",
      "credit": "Jan Wildens, Joseph Sold by His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Wildens_-_Joseph_sold_by_his_Brothers_-_Google_Art_Project.jpg"
    },
    {
      "name": "브뤼헐 〈추수하는 사람들〉",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg"
    }
  ]
};
