// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/kings1)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "4": [["move","art-abisag",null]],
    "46": [["move","art-fouquet",[1186,38,360,429]]]
  },
  beats: {
    "1": [["photo","art-abisag","../../pansuh/img/art/kings1/abisag.jpg",[1216,38,330,536],{"tilt":-1.2,"caption":"Tissot — David and Abishag"}]],
    "11": [["photo","art-glory","../../pansuh/img/art/kings1/glory.jpg",[1206,348,340,430],{"tilt":1.2,"caption":"Tissot — Solomon in His Glory"}]],
    "30": [["photo","art-francken","../../pansuh/img/art/kings1/francken.jpg",[1066,38,480,340],{"tilt":-1.2,"caption":"Francken — Solomon's Idolatry"}]],
    "41": [["photo","art-fragonard","../../pansuh/img/art/kings1/fragonard.jpg",[1086,38,460,373],{"tilt":1.2,"caption":"Fragonard — Jeroboam's Sacrifice"}]],
    "45": [["photo","art-fouquet","../../pansuh/img/art/kings1/fouquet.jpg",[1096,38,450,536],{"tilt":-1.2,"caption":"Fouquet — Building the Temple in Jerusalem"}]],
    "53": [["photo","art-sebaste","../../pansuh/img/art/kings1/sebaste.jpg",[1006,348,540,360],{"tilt":1.2,"caption":"Roberts — Samaria from Afar"}]],
    "57": [["photo","art-savoldo","../../pansuh/img/art/kings1/savoldo.jpg",[1136,38,410,510],{"tilt":-1.2,"caption":"Savoldo — Elijah and the Raven"}]],
    "68": [["photo","art-iru131","../../pansuh/img/art/kings1/iru131.jpg",[1226,38,320,460],{"tilt":1.2,"caption":"Pamplona Bible — Ramoth-gilead"}]]
  },
  credits: [
    {
      "name": "Tissot — David and Abishag",
      "credit": "James Tissot (design) and Louis de Parys, David and Abishag (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:David_et_Abisag_(1_Kings_1_3)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Louis_de_Parys_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Tissot — Solomon in His Glory",
      "credit": "James Tissot (design) and Georges Bertin Scott, Solomon in His Glory (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Salomon_dans_sa_gloire_(1_Chronicles_29_23)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Georges_Bertin_Scott_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Francken — Solomon's Idolatry",
      "credit": "Frans Francken the Younger, The Idolatry of Solomon",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frans_Francken_the_Younger_-_The_Idolatry_of_Solomon_-_71.PB.42_-_J._Paul_Getty_Museum.jpg"
    },
    {
      "name": "Fragonard — Jeroboam's Sacrifice",
      "credit": "Jean-Honoré Fragonard, Jeroboam Sacrificing to the Idols",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Honor%C3%A9_Fragonard_-_Jeroboam_Offering_Sacrifice_for_the_Idol_-_WGA08049.jpg"
    },
    {
      "name": "Fouquet — Building the Temple in Jerusalem",
      "credit": "Jean Fouquet, The Building of the Temple of Jerusalem (Antiquités judaïques)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Construction_du_Temple_de_J%C3%A9rusalem.jpg"
    },
    {
      "name": "Roberts — Samaria from Afar",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "Savoldo — Elijah and the Raven",
      "credit": "Giovanni Girolamo Savoldo, Elijah Fed by the Raven",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Giovanni_Girolamo_Savoldo,_Elijah_Fed_by_the_Raven,_c._1510,_NGA_46134.jpg"
    },
    {
      "name": "Pamplona Bible — Ramoth-gilead",
      "credit": "Pamplona Bible (c. 1200), fol. 131v (Ahab and Jehoshaphat at Ramoth-gilead; a prophet before Ahab)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Iru%C3%B1eko_Biblia_-_Augsburg_-_Pid_6993141_131v.jpg"
    }
  ]
};
