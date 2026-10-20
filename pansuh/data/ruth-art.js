// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ruth)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "34": [["move","art-poussin",null]],
    "46": [["move","art-ferri",[1116,38,430,387]]]
  },
  beats: {
    "1": [["photo","art-bethlehem","img/art/ruth/bethlehem.jpg",[896,328,650,454],{"tilt":-1.2,"caption":"로버츠 〈베들레헴〉"}]],
    "8": [["photo","art-moab","img/art/ruth/moab.jpg",[1036,38,510,335],{"tilt":1.2,"caption":"리어 〈사해〉"}]],
    "11": [["photo","art-calderon","img/art/ruth/calderon.jpg",[1056,38,490,375],{"tilt":-1.2,"caption":"칼데론 〈룻과 나오미〉"}]],
    "14": [["photo","art-fountain","img/art/ruth/fountain.jpg",[936,38,610,423],{"tilt":1.2,"caption":"티소 〈우물가의 여인들〉"}]],
    "19": [["photo","art-schnorr","img/art/ruth/schnorr.jpg",[956,38,590,498],{"tilt":-1.2,"caption":"슈노어 〈보아스의 밭에 간 룻〉"}]],
    "26": [["photo","art-millet","img/art/ruth/millet.jpg",[916,38,630,332],{"tilt":1.2,"caption":"밀레 〈추수꾼들의 휴식〉"}]],
    "32": [["photo","art-poussin","img/art/ruth/poussin.jpg",[956,38,590,428],{"tilt":-1.2,"caption":"푸생 〈여름 · 룻과 보아스〉"}]],
    "37": [["photo","art-gleaning","img/art/ruth/gleaning.jpg",[786,38,760,498],{"tilt":1.2,"caption":"티소 〈이삭 줍는 룻〉"}]],
    "45": [["photo","art-ferri","img/art/ruth/ferri.jpg",[946,38,600,540],{"tilt":-1.2,"caption":"페리 〈룻의 결혼〉"}]]
  },
  credits: [
    {
      "name": "로버츠 〈베들레헴〉",
      "credit": "David Roberts, Bethlehem",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Bethlehem_-_1927.131_-_Cleveland_Museum_of_Art.tif"
    },
    {
      "name": "리어 〈사해〉",
      "credit": "Edward Lear, The Dead Sea",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Edward_Lear_-_The_Dead_Sea,_16_and_17_April_1858_-_Google_Art_Project.jpg"
    },
    {
      "name": "칼데론 〈룻과 나오미〉",
      "credit": "Philip Hermogenes Calderon, Ruth and Naomi",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Philip_Hermogenes_Calderon_-_Ruth_and_Naomi_-_B2010.27.8_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "티소 〈우물가의 여인들〉",
      "credit": "James Tissot, The Women at the Well (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Les_femmes_%C3%A0_la_fontaine_(Ruth_1_2)%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Auguste-Fran%C3%A7ois_Gorguet_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "슈노어 〈보아스의 밭에 간 룻〉",
      "credit": "Julius Schnorr von Carolsfeld, Ruth in Boaz's Field",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Julius_Schnorr_von_Carolsfeld-_Ruth_im_Feld_des_Boaz.jpg"
    },
    {
      "name": "밀레 〈추수꾼들의 휴식〉",
      "credit": "Jean-François Millet, Harvesters Resting (Ruth and Boaz)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:HarvestersRestingRuthBoazMillet.jpg"
    },
    {
      "name": "푸생 〈여름 · 룻과 보아스〉",
      "credit": "Nicolas Poussin, Summer (Ruth and Boaz)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Nicolas_Poussin_-_L%27%C3%89t%C3%A9_ou_Ruth_et_Booz.jpg"
    },
    {
      "name": "티소 〈이삭 줍는 룻〉",
      "credit": "James Tissot, Ruth Gleaning (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ruth_glanant_(Ruth_2_7)%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Auguste-Fran%C3%A7ois_Gorguet_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "페리 〈룻의 결혼〉",
      "credit": "Ciro Ferri, The Marriage of Ruth (photo: Sailko)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Ciro_ferri,_nozze_di_ruth_01.jpg"
    }
  ]
};
