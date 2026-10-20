// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/nehemiah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "16": [["move","art-ruins",null]]
  },
  beats: {
    "4": [["photo","art-tissot","../../pansuh/img/art/nehemiah/tissot.jpg",[1126,38,420,404],{"tilt":-1.2,"caption":"Tissot — Before King Artaxerxes"}]],
    "14": [["photo","art-ruins","../../pansuh/img/art/nehemiah/ruins.jpg",[1126,188,420,538],{"tilt":1.2,"caption":"Tissot — Nehemiah Sees the Ruins"}]],
    "23": [["photo","art-codex","../../pansuh/img/art/nehemiah/codex.jpg",[1236,38,310,429],{"tilt":-1.2,"caption":"Codex Amiatinus — Ezra"}]],
    "31": [["photo","art-jaffa","../../pansuh/img/art/nehemiah/jaffa.jpg",[1106,348,440,326],{"tilt":1.2,"caption":"Bauernfeind — Market in Joppa"}]],
    "33": [["photo","art-cole","../../pansuh/img/art/nehemiah/cole.jpg",[1076,488,470,293],{"tilt":-1.2,"caption":"Cole — The Course of Empire: Desolation"}]]
  },
  credits: [
    {
      "name": "Tissot — Before King Artaxerxes",
      "credit": "After James Tissot (painted by Michel Simonidy), Nehemiah before the King (Esdras et son Roi; photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Esdras_et_son_Roi_(Nehemiah_2_2)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Tissot — Nehemiah Sees the Ruins",
      "credit": "After James Tissot (painted by Michel Simonidy), Nehemiah Sees the Ruins of Jerusalem (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:345.3_402_N%C3%A9h%C3%A9mie_voit_les_ruines_de_J%C3%A9rusalem_(Nehemiah_2_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Codex Amiatinus — Ezra",
      "credit": "Ezra the Scribe, Codex Amiatinus, fol. 5r (Biblioteca Medicea Laurenziana, Florence; photo: Gennadii Saus i Segura)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Codex_Amiantinus._Firenze,_Biblioteca_Medicea_Laurenziana,_Amiat.1,_fol._5r.jpg"
    },
    {
      "name": "Bauernfeind — Market in Joppa",
      "credit": "Gustav Bauernfeind, Market in Jaffa",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gustav_Bauernfeind_-_Market_in_Jaffa,_1887.jpg"
    },
    {
      "name": "Cole — The Course of Empire: Desolation",
      "credit": "Thomas Cole, The Course of Empire: Desolation",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"
    }
  ]
};
