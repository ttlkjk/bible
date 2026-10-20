// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/judges)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "12": [["move","art-shechem",null]],
    "24": [["move","art-baal",null]]
  },
  beats: {
    "1": [["photo","art-deborah","img/art/judges/deborah.jpg",[1256,328,290,453],{"tilt":-1.2,"caption":"티소 〈종려나무 아래 드보라〉"}]],
    "7": [["photo","art-jordan","img/art/judges/jordan.jpg",[976,38,570,342],{"tilt":1.2,"caption":"뢰플러 〈요단 강가〉"}]],
    "9": [["photo","art-shechem","img/art/judges/shechem.jpg",[846,318,700,460],{"tilt":-1.2,"caption":"로버츠 〈세겜 나블루스〉"}]],
    "22": [["photo","art-baal","img/art/judges/baal.jpg",[1186,38,360,540],{"tilt":1.2,"caption":"번개를 든 바알 석비"}]],
    "26": [["photo","art-othniel","img/art/judges/othniel.jpg",[1256,38,290,537],{"tilt":-1.2,"caption":"티소 〈옷니엘〉"}]],
    "32": [["photo","art-jephthah","img/art/judges/jephthah.jpg",[1136,38,410,537],{"tilt":1.2,"caption":"티소 〈입다와 그의 딸〉"}]],
    "42": [["photo","art-idols","img/art/judges/idols.jpg",[906,38,640,433],{"tilt":-1.2,"caption":"티소 〈우상을 가져오다〉"}]],
    "54": [["photo","art-levite","img/art/judges/levite.jpg",[926,38,620,472],{"tilt":1.2,"caption":"티소 〈노인과 레위 사람〉"}]]
  },
  credits: [
    {
      "name": "티소 〈종려나무 아래 드보라〉",
      "credit": "James Tissot, Deborah beneath the Palm Tree (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:D%C3%A9bora_sous_son_palmier_(Judges_4_4)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "뢰플러 〈요단 강가〉",
      "credit": "August Löffler (attributed), Am Jordan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:August_L%C3%B6ffler_-_Am_Jordan_(um_1849).jpg"
    },
    {
      "name": "로버츠 〈세겜 나블루스〉",
      "credit": "David Roberts, Nablus, Ancient Shechem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Nablus_Ancient_Shechem_-_1927.139_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "번개를 든 바알 석비",
      "credit": "Stele of Baal with Thunderbolt, Ugarit, Louvre (photo: Rama)",
      "license": "CC BY-SA 2.0 fr",
      "page": "https://commons.wikimedia.org/wiki/File:Baal_thunderbolt_from_Ugarit_(Louvre_AO15775).jpg"
    },
    {
      "name": "티소 〈옷니엘〉",
      "credit": "James Tissot, Othniel (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Othoniel_(Judges_3_9)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "티소 〈입다와 그의 딸〉",
      "credit": "James Tissot, Jephthah Sees His Daughter from Afar (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jepth%C3%A9_voit_de_loin_sa_fille_(Judges_11_34)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "티소 〈우상을 가져오다〉",
      "credit": "James Tissot, The Idols Are Brought Out (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:219.3_402_On_apporte_les_idoles_(Judges_18_18)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "티소 〈노인과 레위 사람〉",
      "credit": "James Tissot, The Old Man Invites the Levite (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Le_vieillard_invite_le_L%C3%A9vite_(Judges_19_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    }
  ]
};
