// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/jeremiah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-sinai",[1036,38,510,354]]],
    "23": [["move","art-potter",[1006,38,540,401]]],
    "30": [["move","art-ishtar",[986,38,560,420]]]
  },
  beats: {
    "5": [["photo","art-sinai","../../pansuh/img/art/jeremiah/sinai.jpg",[796,38,750,521],{"tilt":-1.2,"caption":"Roberts — The Plain before Mount Sinai"}]],
    "8": [["photo","art-vernet","../../pansuh/img/art/jeremiah/vernet.jpg",[1146,38,400,533],{"tilt":1.2,"caption":"Vernet — Jeremiah on the Ruins"}]],
    "21": [["photo","art-kaufmann","../../pansuh/img/art/jeremiah/kaufmann.jpg",[1056,348,490,391],{"tilt":-1.2,"caption":"Kaufmann — Friday Evening"}]],
    "22": [["photo","art-potter","../../pansuh/img/art/jeremiah/potter.jpg",[826,38,720,535],{"tilt":1.2,"caption":"Devis — The Potter at His Wheel"}]],
    "27": [["photo","art-ishtar","../../pansuh/img/art/jeremiah/ishtar.jpg",[826,38,720,540],{"tilt":-1.2,"caption":"Ishtar Gate"}]],
    "33": [["photo","art-plough","../../pansuh/img/art/jeremiah/plough.jpg",[896,38,650,333],{"tilt":1.2,"caption":"Bonheur — Ploughing in the Nivernais"}]],
    "39": [["photo","art-anathoth","../../pansuh/img/art/jeremiah/anathoth.jpg",[966,38,580,486],{"tilt":-1.2,"caption":"Hill — Anathoth"}]],
    "49": [["photo","art-manetti","../../pansuh/img/art/jeremiah/manetti.jpg",[1036,38,510,360],{"tilt":1.2,"caption":"Manetti — Jeremiah and Baruch"}]],
    "55": [["photo","art-rembrandt","../../pansuh/img/art/jeremiah/rembrandt.jpg",[1176,38,370,470],{"tilt":-1.2,"caption":"Rembrandt — Jeremiah Lamenting"}]],
    "61": [["photo","art-philae","../../pansuh/img/art/jeremiah/philae.jpg",[1126,38,420,304],{"tilt":1.2,"caption":"Roberts — The Island of Philae, Nubia"}]]
  },
  credits: [
    {
      "name": "Roberts — The Plain before Mount Sinai",
      "credit": "David Roberts, The Plain of El Raheh, Mount Sinai (Yale Center for British Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_The_Plain_of_El_Raheh,_Mount_Sinai_-_B1975.3.1074_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "Vernet — Jeremiah on the Ruins",
      "credit": "Horace Vernet, Jeremiah on the Ruins of Jerusalem (1844, Amsterdam Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:SA_160-Jeremia_op_de_puinhopen_van_Jeruzalem.jpg"
    },
    {
      "name": "Kaufmann — Friday Evening",
      "credit": "Isidor Kaufmann, Friday Evening (The Jewish Museum, New York)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Isidor_Kaufmann_-_Friday_Evening_-_Google_Art_Project.jpg"
    },
    {
      "name": "Devis — The Potter at His Wheel",
      "credit": "Arthur William Devis, Potter Engaged in Throwing a Pot on a Wheel (British Library)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Arthur_William_Devis_(1762-1822)_-_Potter_Engaged_in_Throwing_a_Pot_on_a_Wheel_-_F980_-_British_Library.jpg"
    },
    {
      "name": "Ishtar Gate",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum, Berlin (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "Bonheur — Ploughing in the Nivernais",
      "credit": "Rosa Bonheur, Ploughing in the Nivernais (1849, Musée d'Orsay)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg"
    },
    {
      "name": "Hill — Anathoth",
      "credit": "Caroline Emily Gray Hill, Anathoth, View towards the Dead Sea and the Moab Mountains (Victoria Gallery & Museum, Liverpool)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Caroline_Emily_Gray_Hill_(1843-1924)_-_Anathoth,_View_towards_the_Dead_Sea_and_the_Moab_Mountains_-_FA.1383_-_Victoria_Gallery_%5E_Museum.jpg"
    },
    {
      "name": "Manetti — Jeremiah and Baruch",
      "credit": "Rutilio Manetti, The Prophets Jeremiah and Baruch",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rutilio_Manetti_-_The_prophets_Jeremiah_and_Baruch.jpg"
    },
    {
      "name": "Rembrandt — Jeremiah Lamenting",
      "credit": "Rembrandt, Jeremiah Lamenting the Destruction of Jerusalem (1630, Rijksmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_-_Jeremia_treurend_over_de_verwoesting_van_Jeruzalem_-_Google_Art_Project.jpg"
    },
    {
      "name": "Roberts — The Island of Philae, Nubia",
      "credit": "David Roberts, The Island of Philae, Nubia",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_Temple_Island_Philae.jpg"
    }
  ]
};
