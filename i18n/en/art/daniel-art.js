// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/daniel)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "5": [["move","art-prisoners",[1086,468,460,314]]],
    "46": [["move","art-riviere",[1056,38,490,315]]]
  },
  beats: {
    "0": [["photo","art-exile","img/art/daniel/exile.jpg",[1096,38,450,293],{"tilt":-1.2,"caption":"Bendemann — Jews Mourning in Exile"}]],
    "4": [["photo","art-prisoners","img/art/daniel/prisoners.jpg",[906,345,640,437],{"tilt":1.2,"caption":"Tissot — The Flight of the Prisoners"}]],
    "10": [["photo","art-hauslab","img/art/daniel/hauslab.jpg",[1146,188,400,533],{"tilt":-1.2,"caption":"Hauslab — Daniel Interprets the Dream"}]],
    "27": [["photo","art-giordano","img/art/daniel/giordano.jpg",[1116,38,430,539],{"tilt":1.2,"caption":"Giordano — Three Men in the Furnace"}]],
    "32": [["photo","art-roundel","img/art/daniel/roundel.jpg",[1086,38,460,461],{"tilt":-1.2,"caption":"Nebuchadnezzar Eating Grass, Stained Glass"}]],
    "45": [["photo","art-riviere","img/art/daniel/riviere.jpg",[786,38,760,489],{"tilt":1.2,"caption":"Rivière — Daniel in the Lions' Den"}]],
    "58": [["photo","art-gottlieb","img/art/daniel/gottlieb.jpg",[1186,38,360,466],{"tilt":-1.2,"caption":"Gottlieb — Prayer on Yom Kippur"}]]
  },
  credits: [
    {
      "name": "Bendemann — Jews Mourning in Exile",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (c. 1832, Wallraf-Richartz-Museum, Cologne)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "Tissot — The Flight of the Prisoners",
      "credit": "James Tissot, The Flight of the Prisoners (Jewish Museum, New York)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tissot_The_Flight_of_the_Prisoners.jpg"
    },
    {
      "name": "Hauslab — Daniel Interprets the Dream",
      "credit": "Franz von Hauslab the Younger, Daniel Interprets Nebuchadnezzar's Dream (Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Daniel_interprets_Nebuchadnezzar%27s_Dream_MET_DP804327.jpg"
    },
    {
      "name": "Giordano — Three Men in the Furnace",
      "credit": "Luca Giordano, Shadrach, Meshach and Abednego in the Furnace",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Shadrach,_Meshach,_and_Abednego_in_the_Furnace).jpeg"
    },
    {
      "name": "Nebuchadnezzar Eating Grass, Stained Glass",
      "credit": "Nebuchadnezzar Eats Grass among the Cattle, stained-glass roundel (Rijksmuseum, Amsterdam)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Nebukadnezar_eet_gras_onder_de_koeien,_BK-2016-99-2.jpg"
    },
    {
      "name": "Rivière — Daniel in the Lions' Den",
      "credit": "Briton Rivière, Daniel's Answer to the King (1890, Manchester Art Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Briton_Riviere_-_Daniel%27s_Answer_to_the_King_(Manchester_Art_Gallery).jpg"
    },
    {
      "name": "Gottlieb — Prayer on Yom Kippur",
      "credit": "Maurycy Gottlieb, Jews Praying in the Synagogue on Yom Kippur (1878, Tel Aviv Museum of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Maurycy_Gottlieb_-_Jews_Praying_in_the_Synagogue_on_Yom_Kippur.jpg"
    }
  ]
};
