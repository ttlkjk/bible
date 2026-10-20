// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezekiel)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "11": [["move","art-exile",[1056,188,490,319]]],
    "57": [["move","art-grapes",[1106,348,440,328]]]
  },
  beats: {
    "4": [["photo","art-jeremiah","../../pansuh/img/art/ezekiel/jeremiah.jpg",[1166,38,380,483],{"tilt":-1.2,"caption":"Rembrandt — Jeremiah Lamenting"}]],
    "10": [["photo","art-exile","../../pansuh/img/art/ezekiel/exile.jpg",[786,186,760,495],{"tilt":1.2,"caption":"Bendemann — Jews Mourning in Exile"}]],
    "28": [["photo","art-watchman","../../pansuh/img/art/ezekiel/watchman.jpg",[1286,38,260,535],{"tilt":-1.2,"caption":"Steinle — The Watchman on the Tower"}]],
    "42": [["photo","art-francken","../../pansuh/img/art/ezekiel/francken.jpg",[1096,38,450,319],{"tilt":1.2,"caption":"Francken — Solomon's Idolatry"}]],
    "47": [["photo","art-tetramorph","../../pansuh/img/art/ezekiel/tetramorph.jpg",[1256,38,290,466],{"tilt":-1.2,"caption":"The Four Living Creatures, Meteora Fresco"}]],
    "55": [["photo","art-grapes","../../pansuh/img/art/ezekiel/grapes.jpg",[956,340,590,440],{"tilt":1.2,"caption":"Petter — Still Life with Grapes and Peaches"}]],
    "70": [["photo","art-plan","../../pansuh/img/art/ezekiel/plan.jpg",[1246,188,300,448],{"tilt":-1.2,"caption":"Richard of Saint Victor — Plan of the Land Division"}]]
  },
  credits: [
    {
      "name": "Rembrandt — Jeremiah Lamenting",
      "credit": "Rembrandt, Jeremiah Lamenting the Destruction of Jerusalem (1630, Rijksmuseum, Amsterdam)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_-_Jeremia_treurend_over_de_verwoesting_van_Jeruzalem_-_Google_Art_Project.jpg"
    },
    {
      "name": "Bendemann — Jews Mourning in Exile",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (c. 1832, Wallraf-Richartz-Museum, Cologne)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "Steinle — The Watchman on the Tower",
      "credit": "Eduard von Steinle, The Tower Watchman (Schack Collection, Munich)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Eduard_Jakob_von_Steinle_-_The_Tower_Watchman_-_WGA21783.jpg"
    },
    {
      "name": "Francken — Solomon's Idolatry",
      "credit": "Frans Francken the Younger, The Idolatry of Solomon (J. Paul Getty Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frans_Francken_the_Younger_-_The_Idolatry_of_Solomon_-_71.PB.42_-_J._Paul_Getty_Museum.jpg"
    },
    {
      "name": "The Four Living Creatures, Meteora Fresco",
      "credit": "Tetramorph (the four living creatures), fresco, Meteora, Greece",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tetramorph_meteora.jpg"
    },
    {
      "name": "Petter — Still Life with Grapes and Peaches",
      "credit": "Franz Xaver Petter, Still Life with Grapes, Peaches and Walnuts",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Franz_Xaver_Petter_-_Still_Life_with_Grapes,_Peaches_and_Walnuts.jpg"
    },
    {
      "name": "Richard of Saint Victor — Plan of the Land Division",
      "credit": "Richard of Saint Victor, In visionem Ezechielis, plan of the land division (Ezekiel 48), medieval manuscript",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Richard_of_St_Victor_Temple_plan.jpg"
    }
  ]
};
