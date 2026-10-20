// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/micah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "41": [["move","art-sunrise",null]]
  },
  beats: {
    "2": [["photo","art-sebaste","img/art/micah/sebaste.jpg",[896,38,650,434],{"tilt":-1.2,"caption":"로버츠 〈사마리아 원경〉"}]],
    "7": [["photo","art-jerusalem","img/art/micah/jerusalem.jpg",[846,188,700,467],{"tilt":1.2,"caption":"로버츠 〈감람산의 예루살렘〉"}]],
    "8": [["photo","art-micah","img/art/micah/micah.jpg",[1276,38,270,539],{"tilt":-1.2,"caption":"미가와 모세 프레스코"}]],
    "17": [["photo","art-epulone","img/art/micah/epulone.jpg",[866,38,680,318],{"tilt":1.2,"caption":"피타티 〈부자와 나사로〉"}]],
    "21": [["photo","art-shearing","img/art/micah/shearing.jpg",[806,38,740,492],{"tilt":-1.2,"caption":"톰 로버츠 〈양털 깎기〉"}]],
    "28": [["photo","art-plough","img/art/micah/plough.jpg",[936,358,610,312],{"tilt":1.2,"caption":"보뇌르 〈니베르네의 밭갈이〉"}]],
    "30": [["photo","art-haimann","img/art/micah/haimann.jpg",[816,38,730,479],{"tilt":-1.2,"caption":"하이만 〈베들레헴〉"}]],
    "35": [["photo","art-angelus","img/art/micah/angelus.jpg",[906,38,640,532],{"tilt":1.2,"caption":"밀레 〈만종〉"}]],
    "37": [["photo","art-sunrise","img/art/micah/sunrise.jpg",[786,38,760,483],{"tilt":-1.2,"caption":"처치 〈스쿠딕 반도의 일출〉"}]]
  },
  credits: [
    {
      "name": "로버츠 〈사마리아 원경〉",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "로버츠 〈감람산의 예루살렘〉",
      "credit": "David Roberts, Jerusalem from the Mount of Olives (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_Jerusalem_from_the_Mount_of_Olives_-_1927.124_-_Cleveland_Museum_of_Art.jpg"
    },
    {
      "name": "미가와 모세 프레스코",
      "credit": "The prophet Micah (Micheas), fresco in the Chapel of the Immaculate Conception, San Francesco, Padua (photo: Syrio)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Padova,_chiesa_di_San_Francesco_-_Affreschi_della_cappella_dell%27Immacolata_-_Micheas,_Moises.jpg"
    },
    {
      "name": "피타티 〈부자와 나사로〉",
      "credit": "Bonifacio de' Pitati, The Rich Man and Lazarus (Gallerie dell'Accademia, Venice)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Accademia_-_Il_ricco_Epulone_by_Bonifacio_De%27_Pitati_cat.291.jpg"
    },
    {
      "name": "톰 로버츠 〈양털 깎기〉",
      "credit": "Tom Roberts, Shearing the Rams (National Gallery of Victoria)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Tom_Roberts_-_Shearing_the_rams_-_Google_Art_Project.jpg"
    },
    {
      "name": "보뇌르 〈니베르네의 밭갈이〉",
      "credit": "Rosa Bonheur, Ploughing in the Nivernais",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg"
    },
    {
      "name": "하이만 〈베들레헴〉",
      "credit": "Giuseppe Haimann, Bethlehem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Giuseppe_Haimann_-_Bethlehem.jpg"
    },
    {
      "name": "밀레 〈만종〉",
      "credit": "Jean-François Millet, The Angelus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg"
    },
    {
      "name": "처치 〈스쿠딕 반도의 일출〉",
      "credit": "Frederic Edwin Church, Schoodic Peninsula from Mount Desert at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Edwin_Church_-_Schoodic_Peninsula_from_Mount_Desert_at_Sunrise_-_Google_Art_Project.jpg"
    }
  ]
};
