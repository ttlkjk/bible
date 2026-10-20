// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/jeremiah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-sinai",[956,38,590,410]]],
    "30": [["move","art-ishtar",[986,38,560,420]]]
  },
  beats: {
    "5": [["photo","art-sinai","img/art/jeremiah/sinai.jpg",[786,38,760,528],{"tilt":-1.2,"caption":"로버츠 〈시내산 앞 평원〉"}]],
    "8": [["photo","art-vernet","img/art/jeremiah/vernet.jpg",[1146,38,400,533],{"tilt":1.2,"caption":"베르네 〈폐허 위의 예레미야〉"}]],
    "21": [["photo","art-kaufmann","img/art/jeremiah/kaufmann.jpg",[1006,348,540,431],{"tilt":-1.2,"caption":"카우프만 〈금요일 저녁〉"}]],
    "22": [["photo","art-potter","img/art/jeremiah/potter.jpg",[926,38,620,460],{"tilt":1.2,"caption":"데비스 〈물레 돌리는 토기장이〉"}]],
    "27": [["photo","art-ishtar","img/art/jeremiah/ishtar.jpg",[826,38,720,540],{"tilt":-1.2,"caption":"이슈타르 문"}]],
    "33": [["photo","art-plough","img/art/jeremiah/plough.jpg",[846,38,700,358],{"tilt":1.2,"caption":"보뇌르 〈니베르네의 쟁기질〉"}]],
    "39": [["photo","art-anathoth","img/art/jeremiah/anathoth.jpg",[906,38,640,537],{"tilt":-1.2,"caption":"힐 〈아나돗〉"}]],
    "49": [["photo","art-manetti","img/art/jeremiah/manetti.jpg",[1036,38,510,360],{"tilt":1.2,"caption":"마네티 〈예레미야와 바룩〉"}]],
    "54": [["photo","art-burning","img/art/jeremiah/burning.jpg",[976,348,570,332],{"tilt":-1.2,"caption":"코르테 〈불타는 예루살렘〉"}]],
    "55": [["photo","art-rembrandt","img/art/jeremiah/rembrandt.jpg",[1176,38,370,470],{"tilt":1.2,"caption":"렘브란트 〈애통하는 예레미야〉"}]],
    "61": [["photo","art-philae","img/art/jeremiah/philae.jpg",[906,38,640,463],{"tilt":-1.2,"caption":"로버츠 〈누비아의 필레 섬〉"}]]
  },
  credits: [
    {
      "name": "로버츠 〈시내산 앞 평원〉",
      "credit": "David Roberts, The Plain of El Raheh, Mount Sinai (Yale Center for British Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_The_Plain_of_El_Raheh,_Mount_Sinai_-_B1975.3.1074_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "베르네 〈폐허 위의 예레미야〉",
      "credit": "Horace Vernet, Jeremiah on the Ruins of Jerusalem (1844, Amsterdam Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:SA_160-Jeremia_op_de_puinhopen_van_Jeruzalem.jpg"
    },
    {
      "name": "카우프만 〈금요일 저녁〉",
      "credit": "Isidor Kaufmann, Friday Evening (The Jewish Museum, New York)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Isidor_Kaufmann_-_Friday_Evening_-_Google_Art_Project.jpg"
    },
    {
      "name": "데비스 〈물레 돌리는 토기장이〉",
      "credit": "Arthur William Devis, Potter Engaged in Throwing a Pot on a Wheel (British Library)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Arthur_William_Devis_(1762-1822)_-_Potter_Engaged_in_Throwing_a_Pot_on_a_Wheel_-_F980_-_British_Library.jpg"
    },
    {
      "name": "이슈타르 문",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum, Berlin (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "보뇌르 〈니베르네의 쟁기질〉",
      "credit": "Rosa Bonheur, Ploughing in the Nivernais (1849, Musée d'Orsay)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg"
    },
    {
      "name": "힐 〈아나돗〉",
      "credit": "Caroline Emily Gray Hill, Anathoth, View towards the Dead Sea and the Moab Mountains (Victoria Gallery & Museum, Liverpool)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Caroline_Emily_Gray_Hill_(1843-1924)_-_Anathoth,_View_towards_the_Dead_Sea_and_the_Moab_Mountains_-_FA.1383_-_Victoria_Gallery_%5E_Museum.jpg"
    },
    {
      "name": "마네티 〈예레미야와 바룩〉",
      "credit": "Rutilio Manetti, The Prophets Jeremiah and Baruch",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rutilio_Manetti_-_The_prophets_Jeremiah_and_Baruch.jpg"
    },
    {
      "name": "코르테 〈불타는 예루살렘〉",
      "credit": "Circle of Juan de la Corte, The Burning of Jerusalem by Nebuchadnezzar's Army",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Circle_of_Juan_de_la_Corte_-_The_Burning_of_Jerusalem_by_Nebuchadnezzar%E2%80%99s_Army_-_Google_Art_Project.jpg"
    },
    {
      "name": "렘브란트 〈애통하는 예레미야〉",
      "credit": "Rembrandt, Jeremiah Lamenting the Destruction of Jerusalem (1630, Rijksmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_-_Jeremia_treurend_over_de_verwoesting_van_Jeruzalem_-_Google_Art_Project.jpg"
    },
    {
      "name": "로버츠 〈누비아의 필레 섬〉",
      "credit": "David Roberts, The Island of Philae, Nubia",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_Temple_Island_Philae.jpg"
    }
  ]
};
