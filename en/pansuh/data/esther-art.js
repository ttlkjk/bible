// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/esther)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "1": [["move","art-castagno",[1046,38,500,345]]],
    "5": [["move","art-banquet",[1096,38,450,363]]],
    "12": [["move","art-normand",null]],
    "20": [["move","art-toilet",null]]
  },
  beats: {
    "0": [["photo","art-castagno","../../pansuh/img/art/esther/castagno.jpg",[786,38,760,524],{"tilt":-1.2,"caption":"Castagno — Queen Esther"}]],
    "4": [["photo","art-banquet","../../pansuh/img/art/esther/banquet.jpg",[886,38,660,533],{"tilt":1.2,"caption":"De Gelder — The Banquet of Ahasuerus"}]],
    "10": [["photo","art-normand","../../pansuh/img/art/esther/normand.jpg",[956,38,590,332],{"tilt":-1.2,"caption":"Normand — Vashti Deposed"}]],
    "13": [["photo","art-lippi","../../pansuh/img/art/esther/lippi.jpg",[936,38,610,219],{"tilt":1.2,"caption":"Lippi — Esther Chosen"}]],
    "17": [["photo","art-toilet","../../pansuh/img/art/esther/toilet.jpg",[946,348,600,431],{"tilt":-1.2,"caption":"De Gelder — Esther Adorned"}]],
    "22": [["photo","art-leroy","../../pansuh/img/art/esther/leroy.jpg",[976,358,570,370],{"tilt":1.2,"caption":"Leroy — Haman and Mordecai"}]],
    "28": [["photo","art-moeyaert","../../pansuh/img/art/esther/moeyaert.jpg",[1056,38,490,316],{"tilt":-1.2,"caption":"Moeyaert — Samuel and Saul"}]],
    "39": [["photo","art-rembrandt","../../pansuh/img/art/esther/rembrandt.jpg",[1086,38,460,350],{"tilt":1.2,"caption":"Rembrandt — Esther's Feast"}]],
    "44": [["photo","art-triumph","../../pansuh/img/art/esther/triumph.jpg",[996,38,550,247],{"tilt":-1.2,"caption":"De Troy — The Triumph of Mordecai"}]],
    "48": [["photo","art-steen","../../pansuh/img/art/esther/steen.jpg",[976,38,570,429],{"tilt":1.2,"caption":"Steen — The King, Esther and Haman"}]],
    "54": [["photo","art-persepolis","../../pansuh/img/art/esther/persepolis.jpg",[1076,468,470,311],{"tilt":-1.2,"caption":"Gate of All Nations, Full View"}]],
    "57": [["photo","art-purim","../../pansuh/img/art/esther/purim.jpg",[986,38,560,362],{"tilt":1.2,"caption":"De Gelder — The Purim Letter"}]]
  },
  credits: [
    {
      "name": "Castagno — Queen Esther",
      "credit": "Andrea del Castagno, Queen Esther, from the Cycle of Famous Men and Women (photo: Sailko)",
      "license": "CC BY 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Andrea_del_castagno,_Ciclo_degli_uomini_e_donne_illustri,_1448-51,_03_regina_esther.jpg"
    },
    {
      "name": "De Gelder — The Banquet of Ahasuerus",
      "credit": "Aert de Gelder, The Banquet of Ahasuerus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gelder,_Aert_de_-_The_Banquet_of_Ahasuerus_-_Google_Art_Project.jpg"
    },
    {
      "name": "Normand — Vashti Deposed",
      "credit": "Ernest Normand, Queen Vashti Deposed",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Normand,_Ernest_-_Queen_Vashti_deposed_-_1890.jpg"
    },
    {
      "name": "Lippi — Esther Chosen",
      "credit": "Filippino Lippi, Esther Chosen by Ahasuerus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Filippino_Lippi_-_Esther_choisie_par_Assu%C3%A9rus_-_Google_Art_Project.jpg"
    },
    {
      "name": "De Gelder — Esther Adorned",
      "credit": "Aert de Gelder, Esther's Toilet",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Aert_de_Gelder_003.jpg"
    },
    {
      "name": "Leroy — Haman and Mordecai",
      "credit": "Paul Leroy, Haman and Mordecai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Paul_Alexander_Leroy_-_Haman_and_Mordecai,_1884.jpg"
    },
    {
      "name": "Moeyaert — Samuel and Saul",
      "credit": "Claes Moeyaert, Samuel and Saul",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claes_Moeyaert_-_Samuel_and_Saul.jpg"
    },
    {
      "name": "Rembrandt — Esther's Feast",
      "credit": "Rembrandt, Ahasuerus and Haman at the Feast of Esther",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz_van_Rijn_-_Ahasuerus,_Haman_and_Esther_-_Google_Art_Project.jpg"
    },
    {
      "name": "De Troy — The Triumph of Mordecai",
      "credit": "Jean-François de Troy, The Triumph of Mordecai (The Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Triumph_of_Mordecai_MET_DP-14284-001.jpg"
    },
    {
      "name": "Steen — The King, Esther and Haman",
      "credit": "Jan Steen, Esther, Ahasuerus, and Haman",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:%27Esther,_Ahasuerus,_and_Haman%27,_oil_on_canvas_painting_by_Jan_Steen,_c._1668.JPG"
    },
    {
      "name": "Gate of All Nations, Full View",
      "credit": "Persepolis, Gate of All Nations (photo: Carole Raddato)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Gate_of_All_Nations_also_known_as_the_Gate_of_Xerxes,_Persepolis,_Iran_(47779515191).jpg"
    },
    {
      "name": "De Gelder — The Purim Letter",
      "credit": "Aert de Gelder, Esther and Mordecai (Gemäldegalerie Alte Meister, Dresden; photo: Dguendel)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dresden,_Gem%C3%A4ldegalerie_Alte_Meister,_Arent_de_Gelder,_Esther_und_Mardochai.jpg"
    }
  ]
};
