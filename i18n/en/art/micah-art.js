// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/micah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "19": [["move","art-epulone",null]],
    "39": [["move","art-sunrise",null]]
  },
  beats: {
    "2": [["photo","art-sebaste","img/art/micah/sebaste.jpg",[916,38,630,421],{"tilt":-1.2,"caption":"Roberts — Samaria from Afar"}]],
    "7": [["photo","art-jerusalem","img/art/micah/jerusalem.jpg",[1006,358,540,360],{"tilt":1.2,"caption":"Roberts — Jerusalem from the Mount of Olives"}]],
    "8": [["photo","art-micah","img/art/micah/micah.jpg",[1276,38,270,539],{"tilt":-1.2,"caption":"Fresco of Micah and Moses"}]],
    "17": [["photo","art-epulone","img/art/micah/epulone.jpg",[896,478,650,304],{"tilt":1.2,"caption":"Pitati — The Rich Man and Lazarus"}]],
    "21": [["photo","art-shearing","img/art/micah/shearing.jpg",[956,188,590,392],{"tilt":-1.2,"caption":"Tom Roberts — Shearing the Rams"}]],
    "26": [["photo","art-taxmen","img/art/micah/taxmen.jpg",[1166,38,380,476],{"tilt":1.2,"caption":"Reymerswaele — The Tax Collectors"}]],
    "30": [["photo","art-haimann","img/art/micah/haimann.jpg",[936,38,610,401],{"tilt":-1.2,"caption":"Haimann — Bethlehem"}]],
    "35": [["photo","art-angelus","img/art/micah/angelus.jpg",[906,38,640,532],{"tilt":1.2,"caption":"Millet — The Angelus"}]],
    "37": [["photo","art-sunrise","img/art/micah/sunrise.jpg",[786,38,760,483],{"tilt":-1.2,"caption":"Church — Sunrise over the Schoodic Peninsula"}]]
  },
  credits: [
    {
      "name": "Roberts — Samaria from Afar",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "Roberts — Jerusalem from the Mount of Olives",
      "credit": "David Roberts, Jerusalem from the Mount of Olives (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_Mount_of_Olives_-_1927.124_-_Cleveland_Museum_of_Art.jpg"
    },
    {
      "name": "Fresco of Micah and Moses",
      "credit": "The prophet Micah (Micheas), fresco in the Chapel of the Immaculate Conception, San Francesco, Padua (photo: Syrio)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Padova,_chiesa_di_San_Francesco_-_Affreschi_della_cappella_dell%27Immacolata_-_Micheas,_Moises.jpg"
    },
    {
      "name": "Pitati — The Rich Man and Lazarus",
      "credit": "Bonifacio de' Pitati, The Rich Man and Lazarus (Gallerie dell'Accademia, Venice)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Accademia_-_Il_ricco_Epulone_by_Bonifacio_De%27_Pitati_cat.291.jpg"
    },
    {
      "name": "Tom Roberts — Shearing the Rams",
      "credit": "Tom Roberts, Shearing the Rams (National Gallery of Victoria)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tom_Roberts_-_Shearing_the_rams_-_Google_Art_Project.jpg"
    },
    {
      "name": "Reymerswaele — The Tax Collectors",
      "credit": "After Marinus van Reymerswaele, Tax Collectors (National Museum in Warsaw)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Marinus_Claeszoon_van_Reymerswaele_-_Tax_collectors_-_M.Ob.592_MNW_-_National_Museum_in_Warsaw.jpg"
    },
    {
      "name": "Haimann — Bethlehem",
      "credit": "Giuseppe Haimann, Bethlehem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Giuseppe_Haimann_-_Bethlehem.jpg"
    },
    {
      "name": "Millet — The Angelus",
      "credit": "Jean-François Millet, The Angelus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg"
    },
    {
      "name": "Church — Sunrise over the Schoodic Peninsula",
      "credit": "Frederic Edwin Church, Schoodic Peninsula from Mount Desert at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Edwin_Church_-_Schoodic_Peninsula_from_Mount_Desert_at_Sunrise_-_Google_Art_Project.jpg"
    }
  ]
};
