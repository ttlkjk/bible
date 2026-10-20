// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/chronicles)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "2": [["photo","art-ruins","../../pansuh/img/art/chronicles/ruins.jpg",[1216,188,330,423],{"tilt":-1.2,"caption":"Tissot — Nehemiah Sees the Ruins"}]],
    "9": [["photo","art-manasseh","../../pansuh/img/art/chronicles/manasseh.jpg",[1186,38,360,342],{"tilt":1.2,"caption":"Goríbar — King Manasseh"}]],
    "11": [["photo","art-moller","../../pansuh/img/art/chronicles/moller.jpg",[986,188,560,220],{"tilt":-1.2,"caption":"Möller — Rebuilding the Temple"}]]
  },
  credits: [
    {
      "name": "Tissot — Nehemiah Sees the Ruins",
      "credit": "James Tissot (design) and Michel Simonidy, Nehemiah Sees the Ruins of Jerusalem (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:345.3_402_N%C3%A9h%C3%A9mie_voit_les_ruines_de_J%C3%A9rusalem_(Nehemiah_2_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Goríbar — King Manasseh",
      "credit": "Javier Goríbar (attributed), King Manasseh, Convent of Santo Domingo, Quito (photo: Ranoutofusername)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Manas%C3%A9s_por_Javier_Gor%C3%ADbar_(atribuido)._Convento_de_Santo_Domingo,_Quito.jpg"
    },
    {
      "name": "Möller — Rebuilding the Temple",
      "credit": "Anton Möller, The Rebuilding of the Temple (2 Chronicles 24)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anton_M%C3%B6ller_Odbudowa_Swi%C4%85tyni.jpg"
    }
  ]
};
