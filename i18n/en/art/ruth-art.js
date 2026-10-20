// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ruth)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "3": [["move","art-bethlehem",[1066,328,480,336]]],
    "15": [["move","art-fountain",[1006,38,540,374]]],
    "38": [["move","art-gleaning",[1076,188,470,308]]]
  },
  beats: {
    "1": [["photo","art-bethlehem","img/art/ruth/bethlehem.jpg",[946,328,600,420],{"tilt":-1.2,"caption":"Roberts — Bethlehem"}]],
    "8": [["photo","art-moab","img/art/ruth/moab.jpg",[1116,498,430,283],{"tilt":1.2,"caption":"Lear — The Dead Sea"}]],
    "11": [["photo","art-calderon","img/art/ruth/calderon.jpg",[1086,38,460,352],{"tilt":-1.2,"caption":"Calderon — Ruth and Naomi"}]],
    "14": [["photo","art-fountain","img/art/ruth/fountain.jpg",[846,38,700,485],{"tilt":1.2,"caption":"Tissot — Women at the Well"}]],
    "19": [["photo","art-schnorr","img/art/ruth/schnorr.jpg",[1106,38,440,371],{"tilt":-1.2,"caption":"Schnorr — Ruth in Boaz's Field"}]],
    "23": [["photo","art-poussin","img/art/ruth/poussin.jpg",[1086,38,460,334],{"tilt":1.2,"caption":"Poussin — Summer: Ruth and Boaz"}]],
    "37": [["photo","art-gleaning","img/art/ruth/gleaning.jpg",[806,186,740,485],{"tilt":-1.2,"caption":"Tissot — Ruth Gleaning"}]]
  },
  credits: [
    {
      "name": "Roberts — Bethlehem",
      "credit": "David Roberts, Bethlehem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Bethlehem_-_1927.131_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "Lear — The Dead Sea",
      "credit": "Edward Lear, The Dead Sea",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Edward_Lear_-_The_Dead_Sea,_16_and_17_April_1858_-_Google_Art_Project.jpg"
    },
    {
      "name": "Calderon — Ruth and Naomi",
      "credit": "Philip Hermogenes Calderon, Ruth and Naomi",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Philip_Hermogenes_Calderon_-_Ruth_and_Naomi_-_B2010.27.8_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "Tissot — Women at the Well",
      "credit": "James Tissot, The Women at the Well (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Les_femmes_%C3%A0_la_fontaine_(Ruth_1_2)%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Auguste-Fran%C3%A7ois_Gorguet_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Schnorr — Ruth in Boaz's Field",
      "credit": "Julius Schnorr von Carolsfeld, Ruth in Boaz's Field",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Julius_Schnorr_von_Carolsfeld-_Ruth_im_Feld_des_Boaz.jpg"
    },
    {
      "name": "Poussin — Summer: Ruth and Boaz",
      "credit": "Nicolas Poussin, Summer (Ruth and Boaz)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Nicolas_Poussin_-_L%27%C3%89t%C3%A9_ou_Ruth_et_Booz.jpg"
    },
    {
      "name": "Tissot — Ruth Gleaning",
      "credit": "James Tissot, Ruth Gleaning (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ruth_glanant_(Ruth_2_7)%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Auguste-Fran%C3%A7ois_Gorguet_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    }
  ]
};
