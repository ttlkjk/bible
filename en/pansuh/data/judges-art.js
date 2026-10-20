// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/judges)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "24": [["move","art-baal",null]],
    "39": [["move","art-shechem",[1036,328,510,335]]],
    "55": [["move","art-levite",[1076,188,470,358]]]
  },
  beats: {
    "1": [["photo","art-deborah","../../pansuh/img/art/judges/deborah.jpg",[1256,328,290,453],{"tilt":-1.2,"caption":"Tissot — Deborah under the Palm Tree"}]],
    "17": [["photo","art-jordan","../../pansuh/img/art/judges/jordan.jpg",[956,188,590,354],{"tilt":1.2,"caption":"Löffler — By the Jordan"}]],
    "22": [["photo","art-baal","../../pansuh/img/art/judges/baal.jpg",[1186,38,360,540],{"tilt":-1.2,"caption":"Baal Stele with Thunderbolt"}]],
    "26": [["photo","art-othniel","../../pansuh/img/art/judges/othniel.jpg",[1256,38,290,537],{"tilt":1.2,"caption":"Tissot — Othniel"}]],
    "32": [["photo","art-jephthah","../../pansuh/img/art/judges/jephthah.jpg",[1206,38,340,445],{"tilt":-1.2,"caption":"Tissot — Jephthah and His Daughter"}]],
    "36": [["photo","art-shechem","../../pansuh/img/art/judges/shechem.jpg",[856,327,690,454],{"tilt":1.2,"caption":"Roberts — Nablus, Ancient Shechem"}]],
    "42": [["photo","art-idols","../../pansuh/img/art/judges/idols.jpg",[1106,478,440,298],{"tilt":-1.2,"caption":"Tissot — The Idols Are Brought Out"}]],
    "54": [["photo","art-levite","../../pansuh/img/art/judges/levite.jpg",[846,186,700,533],{"tilt":1.2,"caption":"Tissot — The Old Man and the Levite"}]]
  },
  credits: [
    {
      "name": "Tissot — Deborah under the Palm Tree",
      "credit": "James Tissot, Deborah beneath the Palm Tree (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:D%C3%A9bora_sous_son_palmier_(Judges_4_4)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Löffler — By the Jordan",
      "credit": "August Löffler (attributed), Am Jordan",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:August_L%C3%B6ffler_-_Am_Jordan_(um_1849).jpg"
    },
    {
      "name": "Baal Stele with Thunderbolt",
      "credit": "Stele of Baal with Thunderbolt, Ugarit, Louvre (photo: Rama)",
      "license": "CC BY-SA 2.0 fr",
      "page": "https://commons.wikimedia.org/wiki/File:Baal_thunderbolt_from_Ugarit_(Louvre_AO15775).jpg"
    },
    {
      "name": "Tissot — Othniel",
      "credit": "James Tissot, Othniel (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Othoniel_(Judges_3_9)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Tissot — Jephthah and His Daughter",
      "credit": "James Tissot, Jephthah Sees His Daughter from Afar (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Jepth%C3%A9_voit_de_loin_sa_fille_(Judges_11_34)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Roberts — Nablus, Ancient Shechem",
      "credit": "David Roberts, Nablus, Ancient Shechem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Nablus_Ancient_Shechem_-_1927.139_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "Tissot — The Idols Are Brought Out",
      "credit": "James Tissot, The Idols Are Brought Out (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:219.3_402_On_apporte_les_idoles_(Judges_18_18)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Tissot — The Old Man and the Levite",
      "credit": "James Tissot, The Old Man Invites the Levite (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Le_vieillard_invite_le_L%C3%A9vite_(Judges_19_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_James_Tissot_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    }
  ]
};
