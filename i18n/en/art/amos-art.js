// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/amos)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "5": [["move","art-herbert",[1066,488,480,289]]],
    "18": [["move","art-bassano",[1086,348,460,302]]],
    "40": [["move","art-samaria",[1026,38,520,347]]]
  },
  beats: {
    "4": [["photo","art-herbert","img/art/amos/herbert.jpg",[836,352,710,427],{"tilt":-1.2,"caption":"Herbert — David the Shepherd"}]],
    "8": [["photo","art-wrath","img/art/amos/wrath.jpg",[966,358,580,374],{"tilt":1.2,"caption":"Martin — The Great Day of His Wrath"}]],
    "17": [["photo","art-bassano","img/art/amos/bassano.jpg",[886,341,660,433],{"tilt":-1.2,"caption":"Bassano — Lazarus and the Rich Man"}]],
    "26": [["photo","art-tissot","img/art/amos/tissot.jpg",[1156,38,390,532],{"tilt":1.2,"caption":"Tissot — Solomon Dedicates the Temple"}]],
    "32": [["photo","art-sodom","img/art/amos/sodom.jpg",[1076,478,470,300],{"tilt":-1.2,"caption":"Martin — The Destruction of Sodom and Gomorrah"}]],
    "35": [["photo","art-lear","img/art/amos/lear.jpg",[1076,38,470,309],{"tilt":1.2,"caption":"Lear — The Dead Sea"}]],
    "39": [["photo","art-samaria","img/art/amos/samaria.jpg",[786,38,760,507],{"tilt":-1.2,"caption":"Roberts — Samaria from Afar"}]]
  },
  credits: [
    {
      "name": "Herbert — David the Shepherd",
      "credit": "John Rogers Herbert, David, the Future King of Israel, While a Shepherd at Bethlehem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Rogers_Herbert_-_David,_the_Future_King_of_Israel,_While_a_Shepherd_at_Bethlehem.jpg"
    },
    {
      "name": "Martin — The Great Day of His Wrath",
      "credit": "John Martin, The Great Day of His Wrath (Tate)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "Bassano — Lazarus and the Rich Man",
      "credit": "Jacopo Bassano, Lazarus and the Rich Man (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Clevelandart_1939.68.jpg"
    },
    {
      "name": "Tissot — Solomon Dedicates the Temple",
      "credit": "Solomon Dedicates the Temple, after James Tissot, painted by Michel Simonidy (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:La_d%C3%A9dicace_par_Salomon_du_temple_(1_Kings_10_2)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Martin — The Destruction of Sodom and Gomorrah",
      "credit": "John Martin, The Destruction of Sodom and Gomorrah",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Sodom_and_Gomorrah.jpg"
    },
    {
      "name": "Lear — The Dead Sea",
      "credit": "Edward Lear, The Dead Sea, 16 and 17 April 1858",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Edward_Lear_-_The_Dead_Sea,_16_and_17_April_1858_-_Google_Art_Project.jpg"
    },
    {
      "name": "Roberts — Samaria from Afar",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    }
  ]
};
