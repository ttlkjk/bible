// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/nehemiah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "4": [["photo","art-tissot","img/art/nehemiah/tissot.jpg",[986,38,560,539],{"tilt":-1.2,"caption":"티소 〈아닥사스다 왕 앞에서〉"}]],
    "14": [["photo","art-ruins","img/art/nehemiah/ruins.jpg",[746,348,310,397],{"tilt":1.2,"caption":"티소 〈폐허를 보는 느헤미야〉"}]],
    "19": [["photo","art-roberts","img/art/nehemiah/roberts.jpg",[1056,38,490,326],{"tilt":-1.2,"caption":"로버츠 〈남쪽에서 본 예루살렘〉"}]],
    "23": [["photo","art-codex","img/art/nehemiah/codex.jpg",[1156,38,390,539],{"tilt":1.2,"caption":"아미아티누스 성경 〈에스라〉"}]],
    "31": [["photo","art-jaffa","img/art/nehemiah/jaffa.jpg",[966,348,580,430],{"tilt":-1.2,"caption":"바우른파인트 〈욥바 시장〉"}]],
    "33": [["photo","art-cole","img/art/nehemiah/cole.jpg",[1046,38,500,311],{"tilt":1.2,"caption":"콜 〈제국의 행로 · 황폐〉"}]]
  },
  credits: [
    {
      "name": "티소 〈아닥사스다 왕 앞에서〉",
      "credit": "After James Tissot (painted by Michel Simonidy), Nehemiah before the King (Esdras et son Roi; photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Esdras_et_son_Roi_(Nehemiah_2_2)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "티소 〈폐허를 보는 느헤미야〉",
      "credit": "After James Tissot (painted by Michel Simonidy), Nehemiah Sees the Ruins of Jerusalem (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:345.3_402_N%C3%A9h%C3%A9mie_voit_les_ruines_de_J%C3%A9rusalem_(Nehemiah_2_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "로버츠 〈남쪽에서 본 예루살렘〉",
      "credit": "David Roberts, Jerusalem from the South (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_South_-_1927.95_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "아미아티누스 성경 〈에스라〉",
      "credit": "Ezra the Scribe, Codex Amiatinus, fol. 5r (Biblioteca Medicea Laurenziana, Florence; photo: Gennadii Saus i Segura)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Codex_Amiantinus._Firenze,_Biblioteca_Medicea_Laurenziana,_Amiat.1,_fol._5r.jpg"
    },
    {
      "name": "바우른파인트 〈욥바 시장〉",
      "credit": "Gustav Bauernfeind, Market in Jaffa",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gustav_Bauernfeind_-_Market_in_Jaffa,_1887.jpg"
    },
    {
      "name": "콜 〈제국의 행로 · 황폐〉",
      "credit": "Thomas Cole, The Course of Empire: Desolation",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"
    }
  ]
};
