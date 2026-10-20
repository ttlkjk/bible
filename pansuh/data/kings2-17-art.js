// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/kings2-17)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-lion",[1006,348,540,329]]]
  },
  beats: {
    "5": [["photo","art-lion","img/art/kings2-17/lion.jpg",[826,343,720,438],{"tilt":-1.2,"caption":"티소 〈먹이를 찾는 사자〉"}]],
    "12": [["photo","art-army","img/art/kings2-17/army.jpg",[1076,38,470,347],{"tilt":1.2,"caption":"라기스 부조 · 앗수르 군대"}]],
    "15": [["photo","art-sickbed","img/art/kings2-17/sickbed.jpg",[856,38,690,515],{"tilt":-1.2,"caption":"병든 히스기야 목판화"}]],
    "18": [["photo","art-ishtar","img/art/kings2-17/ishtar.jpg",[996,38,550,413],{"tilt":1.2,"caption":"이슈타르 문"}]],
    "27": [["photo","art-lunette","img/art/kings2-17/lunette.jpg",[1086,518,460,264],{"tilt":-1.2,"caption":"미켈란젤로 〈히스기야 가문〉"}]],
    "29": [["photo","art-torah","img/art/kings2-17/torah.jpg",[1126,468,420,309],{"tilt":1.2,"caption":"토라 두루마리"}]],
    "36": [["photo","art-jerusalem","img/art/kings2-17/jerusalem.jpg",[936,348,610,407],{"tilt":-1.2,"caption":"로버츠 〈예루살렘 전경〉"}]]
  },
  credits: [
    {
      "name": "티소 〈먹이를 찾는 사자〉",
      "credit": "James Tissot (design) and Michel Simonidy, The Lion Seeks Whom He May Devour (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:361.3_402_Le_lion_cherche_%C3%A0_d%C3%A9vorer_(Psalm_17_13)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "라기스 부조 · 앗수르 군대",
      "credit": "Assyrian soldiers, Lachish relief, British Museum (photo: Mike Peel)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lachish_Relief,_British_Museum_1.jpg"
    },
    {
      "name": "병든 히스기야 목판화",
      "credit": "King Hezekiah on his sickbed, hand-coloured woodcut (Wellcome Collection)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:King_Hezekiah_on_his_sickbed_Wellcome_L0072164.jpg"
    },
    {
      "name": "이슈타르 문",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum, Berlin (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "미켈란젤로 〈히스기야 가문〉",
      "credit": "Michelangelo, lunette Hezekiah - Manasseh - Amon, Sistine Chapel",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_-_Sistine_Chapel_ceiling_-_Lunette_%22Hezekiah_-_Manasseh_-_Amon%22.jpg"
    },
    {
      "name": "토라 두루마리",
      "credit": "Torah scroll, Chester Beatty Library, Dublin (CBL Heb 777)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Sefer_Torah_(CBL_Heb_777).jpg"
    },
    {
      "name": "로버츠 〈예루살렘 전경〉",
      "credit": "David Roberts, Jerusalem from the Mount of Olives (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_Mount_of_Olives_-_1927.124_-_Cleveland_Museum_of_Art.jpg"
    }
  ]
};
