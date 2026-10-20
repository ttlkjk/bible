// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/kings2-17)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "19": [["move","art-ishtar",[1146,478,400,300]]],
    "29": [["move","art-heiss",[1156,458,390,323]]]
  },
  beats: {
    "12": [["photo","art-army","img/art/kings2-17/army.jpg",[1096,38,450,332],{"tilt":-1.2,"caption":"Lachish Relief · The Assyrian Army"}]],
    "15": [["photo","art-sickbed","img/art/kings2-17/sickbed.jpg",[1076,188,470,351],{"tilt":1.2,"caption":"Hezekiah Sick in Bed, Woodcut"}]],
    "18": [["photo","art-ishtar","img/art/kings2-17/ishtar.jpg",[976,352,570,428],{"tilt":-1.2,"caption":"Ishtar Gate"}]],
    "27": [["photo","art-lunette","img/art/kings2-17/lunette.jpg",[1086,518,460,264],{"tilt":1.2,"caption":"Michelangelo — The House of Hezekiah"}]],
    "28": [["photo","art-heiss","img/art/kings2-17/heiss.jpg",[896,243,650,538],{"tilt":-1.2,"caption":"Heiss — Josiah Destroys the Idols"}]],
    "36": [["photo","art-jerusalem","img/art/kings2-17/jerusalem.jpg",[1076,348,470,314],{"tilt":1.2,"caption":"Roberts — Jerusalem from the Mount of Olives"}]]
  },
  credits: [
    {
      "name": "Lachish Relief · The Assyrian Army",
      "credit": "Assyrian soldiers, Lachish relief, British Museum (photo: Mike Peel)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Lachish_Relief,_British_Museum_1.jpg"
    },
    {
      "name": "Hezekiah Sick in Bed, Woodcut",
      "credit": "King Hezekiah on his sickbed, hand-coloured woodcut (Wellcome Collection)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:King_Hezekiah_on_his_sickbed_Wellcome_L0072164.jpg"
    },
    {
      "name": "Ishtar Gate",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum, Berlin (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "Michelangelo — The House of Hezekiah",
      "credit": "Michelangelo, lunette Hezekiah - Manasseh - Amon, Sistine Chapel",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_-_Sistine_Chapel_ceiling_-_Lunette_%22Hezekiah_-_Manasseh_-_Amon%22.jpg"
    },
    {
      "name": "Heiss — Josiah Destroys the Idols",
      "credit": "Johann Heiss, Josiah Destroys the Pagan Idols (photo: David Monniaux)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Johann_Heiss_Josiah_Destroys_the_Pagan_Idols_IMG_6364.jpg"
    },
    {
      "name": "Roberts — Jerusalem from the Mount of Olives",
      "credit": "David Roberts, Jerusalem from the Mount of Olives (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_Mount_of_Olives_-_1927.124_-_Cleveland_Museum_of_Art.jpg"
    }
  ]
};
