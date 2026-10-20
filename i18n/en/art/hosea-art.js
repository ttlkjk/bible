// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/hosea)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "13": [["move","art-leighton",null]],
    "23": [["move","art-wedding",[1136,188,410,381]]],
    "48": [["move","art-exodus",[1036,38,510,368]]]
  },
  beats: {
    "0": [["photo","art-augsburg","img/art/hosea/augsburg.jpg",[726,38,280,492],{"tilt":-1.2,"caption":"Hosea Window, Augsburg"}]],
    "7": [["photo","art-baal","img/art/hosea/baal.jpg",[1186,38,360,540],{"tilt":1.2,"caption":"Baal Stele from Ugarit"}]],
    "11": [["photo","art-leighton","img/art/hosea/leighton.jpg",[1146,358,400,419],{"tilt":-1.2,"caption":"Leighton — Jezebel and Ahab"}]],
    "21": [["photo","art-wedding","img/art/hosea/wedding.jpg",[966,186,580,538],{"tilt":1.2,"caption":"Israëls — A Jewish Wedding"}]],
    "26": [["photo","art-sebaste","img/art/hosea/sebaste.jpg",[1086,188,460,307],{"tilt":-1.2,"caption":"Roberts — Samaria from Afar"}]],
    "30": [["photo","art-bonheur","img/art/hosea/bonheur.jpg",[1136,358,410,295],{"tilt":1.2,"caption":"Bonheur — Cattle and Sheep in the Alps"}]],
    "34": [["photo","art-pigeons","img/art/hosea/pigeons.jpg",[1016,38,530,384],{"tilt":-1.2,"caption":"Wright — Pigeons"}]],
    "40": [["photo","art-grapes","img/art/hosea/grapes.jpg",[966,38,580,453],{"tilt":1.2,"caption":"De Heem — Still Life with Grapes"}]],
    "43": [["photo","art-bendemann","img/art/hosea/bendemann.jpg",[896,358,650,423],{"tilt":-1.2,"caption":"Bendemann — Jews Mourning in Exile"}]],
    "47": [["photo","art-exodus","img/art/hosea/exodus.jpg",[806,38,740,535],{"tilt":1.2,"caption":"Roberts — The Israelites Leave Egypt"}]],
    "52": [["photo","art-seaport","img/art/hosea/seaport.jpg",[906,38,640,468],{"tilt":-1.2,"caption":"Lorrain — Seaport at Sunrise"}]],
    "56": [["photo","art-angelus","img/art/hosea/angelus.jpg",[976,38,570,474],{"tilt":1.2,"caption":"Millet — The Angelus"}]]
  },
  credits: [
    {
      "name": "Hosea Window, Augsburg",
      "credit": "The Prophet Hosea, stained-glass window, Augsburg Cathedral (photo: Allie_Caulfield)",
      "license": "CC BY 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:2011-02-26_Augsburg_037_Dom_Unserer_Lieben_Frau,_Buntglasfenster,_Prophet_Hosea_(5482316285).jpg"
    },
    {
      "name": "Baal Stele from Ugarit",
      "credit": "Stele of Baal with Thunderbolt, Ugarit, Louvre (photo: Rama)",
      "license": "CC BY-SA 2.0 fr",
      "page": "https://commons.wikimedia.org/wiki/File:Baal_thunderbolt_from_Ugarit_(Louvre_AO15775).jpg"
    },
    {
      "name": "Leighton — Jezebel and Ahab",
      "credit": "Frederic Leighton, Jezebel and Ahab (Elijah meets them in Naboth's vineyard)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Leighton_(1830-1896)_-_Jezebel_and_Ahab_-_SMG.289_-_Scarborough_Art_Gallery.jpg"
    },
    {
      "name": "Israëls — A Jewish Wedding",
      "credit": "Jozef Israëls, A Jewish Wedding (Rijksmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Joodse_bruiloft_Rijksmuseum_SK-A-2598.jpeg"
    },
    {
      "name": "Roberts — Samaria from Afar",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "Bonheur — Cattle and Sheep in the Alps",
      "credit": "Rosa Bonheur, Cattle and Sheep in an Alpine Landscape",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:2012_CSK_06210_0042A_rosa_raymond_bonheur_cattle_and_sheep_in_an_alpine_landscape).jpg"
    },
    {
      "name": "Wright — Pigeons",
      "credit": "Ferdinand von Wright, Pigeons (Nationalmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pigeons_(Ferdinand_von_Wright)_-_Nationalmuseum_-_22008.tif"
    },
    {
      "name": "De Heem — Still Life with Grapes",
      "credit": "Jan Davidsz. de Heem, Still Life with Grapes",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Davidsz_de_Heem_-_Still_Life_with_Grapes.jpg"
    },
    {
      "name": "Bendemann — Jews Mourning in Exile",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (Wallraf-Richartz-Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "Roberts — The Israelites Leave Egypt",
      "credit": "David Roberts, The Departure of the Israelites",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts-IsraelitesLeavingEgypt_1828.jpg"
    },
    {
      "name": "Lorrain — Seaport at Sunrise",
      "credit": "Claude Lorrain, A Seaport at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claude_Lorrain_-_A_Seaport_at_Sunrise_-_WGA05016.jpg"
    },
    {
      "name": "Millet — The Angelus",
      "credit": "Jean-François Millet, The Angelus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg"
    }
  ]
};
