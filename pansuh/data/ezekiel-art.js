// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezekiel)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "4": [["photo","art-jeremiah","img/art/ezekiel/jeremiah.jpg",[1176,38,370,470],{"tilt":-1.2,"caption":"렘브란트 〈애통하는 예레미야〉"}]],
    "10": [["photo","art-exile","img/art/ezekiel/exile.jpg",[866,38,680,443],{"tilt":1.2,"caption":"벤데만 〈슬퍼하는 포로들〉"}]],
    "21": [["photo","art-icon","img/art/ezekiel/icon.jpg",[716,38,330,529],{"tilt":-1.2,"caption":"에스겔 이콘"}]],
    "28": [["photo","art-watchman","img/art/ezekiel/watchman.jpg",[1286,38,260,535],{"tilt":1.2,"caption":"슈타인레 〈탑의 파수꾼〉"}]],
    "38": [["photo","art-burning","img/art/ezekiel/burning.jpg",[1086,498,460,268],{"tilt":-1.2,"caption":"코르테 〈불타는 예루살렘〉"}]],
    "42": [["photo","art-francken","img/art/ezekiel/francken.jpg",[966,38,580,411],{"tilt":1.2,"caption":"프랑컨 〈솔로몬의 우상숭배〉"}]],
    "47": [["photo","art-tetramorph","img/art/ezekiel/tetramorph.jpg",[1216,38,330,530],{"tilt":-1.2,"caption":"메테오라 네 생물 벽화"}]],
    "51": [["photo","art-fontana","img/art/ezekiel/fontana.jpg",[976,188,570,451],{"tilt":1.2,"caption":"폰타나 〈스바 여왕의 방문〉"}]],
    "55": [["photo","art-grapes","img/art/ezekiel/grapes.jpg",[956,38,590,440],{"tilt":-1.2,"caption":"페터 〈포도와 복숭아 정물〉"}]],
    "69": [["photo","art-collantes","img/art/ezekiel/collantes.jpg",[1056,348,490,420],{"tilt":1.2,"caption":"콜란테스 〈에스겔의 환상〉"}]]
  },
  credits: [
    {
      "name": "렘브란트 〈애통하는 예레미야〉",
      "credit": "Rembrandt, Jeremiah Lamenting the Destruction of Jerusalem (1630, Rijksmuseum, Amsterdam)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_-_Jeremia_treurend_over_de_verwoesting_van_Jeruzalem_-_Google_Art_Project.jpg"
    },
    {
      "name": "벤데만 〈슬퍼하는 포로들〉",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (c. 1832, Wallraf-Richartz-Museum, Cologne)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "에스겔 이콘",
      "credit": "The Prophet Ezekiel, icon (17th century, North Russia, private collection)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Icon_of_Ezekiel_(17th_c.,_North_Russia,_priv._coll.).jpg"
    },
    {
      "name": "슈타인레 〈탑의 파수꾼〉",
      "credit": "Eduard von Steinle, The Tower Watchman (Schack Collection, Munich)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Eduard_Jakob_von_Steinle_-_The_Tower_Watchman_-_WGA21783.jpg"
    },
    {
      "name": "코르테 〈불타는 예루살렘〉",
      "credit": "Circle of Juan de la Corte, The Burning of Jerusalem by Nebuchadnezzar's Army (17th century)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Circle_of_Juan_de_la_Corte_-_The_Burning_of_Jerusalem_by_Nebuchadnezzar%E2%80%99s_Army_-_Google_Art_Project.jpg"
    },
    {
      "name": "프랑컨 〈솔로몬의 우상숭배〉",
      "credit": "Frans Francken the Younger, The Idolatry of Solomon (J. Paul Getty Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frans_Francken_the_Younger_-_The_Idolatry_of_Solomon_-_71.PB.42_-_J._Paul_Getty_Museum.jpg"
    },
    {
      "name": "메테오라 네 생물 벽화",
      "credit": "Tetramorph (the four living creatures), fresco, Meteora, Greece",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tetramorph_meteora.jpg"
    },
    {
      "name": "폰타나 〈스바 여왕의 방문〉",
      "credit": "Lavinia Fontana, The Visit of the Queen of Sheba to Solomon (c. 1600, National Gallery of Ireland)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Visit_of_the_Queen_of_Sheba_to_Solomon_by_L._Fontana_(c._1600,_NGI).jpg"
    },
    {
      "name": "페터 〈포도와 복숭아 정물〉",
      "credit": "Franz Xaver Petter, Still Life with Grapes, Peaches and Walnuts",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Franz_Xaver_Petter_-_Still_Life_with_Grapes,_Peaches_and_Walnuts.jpg"
    },
    {
      "name": "콜란테스 〈에스겔의 환상〉",
      "credit": "Francisco Collantes, The Vision of Ezekiel (1630, Museo del Prado, Madrid)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Collantes,_Francisco_-_The_Vision_of_Ezekiel_-_1630.jpg"
    }
  ]
};
