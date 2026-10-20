// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/hosea)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "6": [["move","art-sebaste",null]],
    "35": [["move","art-pigeons",[1026,38,520,377]]],
    "49": [["move","art-exodus",[986,38,560,405]]]
  },
  beats: {
    "0": [["photo","art-augsburg","img/art/hosea/augsburg.jpg",[726,38,280,492],{"tilt":-1.2,"caption":"아우크스부르크 호세아 창"}]],
    "4": [["photo","art-sebaste","img/art/hosea/sebaste.jpg",[786,38,760,507],{"tilt":1.2,"caption":"로버츠 〈사마리아 원경〉"}]],
    "7": [["photo","art-baal","img/art/hosea/baal.jpg",[1186,38,360,540],{"tilt":-1.2,"caption":"우가리트 바알 석비"}]],
    "11": [["photo","art-leighton","img/art/hosea/leighton.jpg",[1086,38,460,482],{"tilt":1.2,"caption":"레이턴 〈이세벨과 아합〉"}]],
    "18": [["photo","art-wedding","img/art/hosea/wedding.jpg",[1016,38,530,492],{"tilt":-1.2,"caption":"이스라엘스 〈유대인의 결혼식〉"}]],
    "31": [["photo","art-angelus","img/art/hosea/angelus.jpg",[986,38,560,466],{"tilt":1.2,"caption":"밀레 〈만종〉"}]],
    "34": [["photo","art-pigeons","img/art/hosea/pigeons.jpg",[896,38,650,471],{"tilt":-1.2,"caption":"라이트 〈비둘기들〉"}]],
    "40": [["photo","art-grapes","img/art/hosea/grapes.jpg",[856,38,690,539],{"tilt":1.2,"caption":"데 헤임 〈포도 정물〉"}]],
    "43": [["photo","art-bendemann","img/art/hosea/bendemann.jpg",[836,38,710,462],{"tilt":-1.2,"caption":"벤데만 〈슬퍼하는 포로들〉"}]],
    "47": [["photo","art-exodus","img/art/hosea/exodus.jpg",[806,38,740,535],{"tilt":1.2,"caption":"로버츠 〈이스라엘의 출애굽〉"}]],
    "52": [["photo","art-seaport","img/art/hosea/seaport.jpg",[986,38,560,410],{"tilt":-1.2,"caption":"로랭 〈일출의 항구〉"}]]
  },
  credits: [
    {
      "name": "아우크스부르크 호세아 창",
      "credit": "The Prophet Hosea, stained-glass window, Augsburg Cathedral (photo: Allie_Caulfield)",
      "license": "CC BY 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:2011-02-26_Augsburg_037_Dom_Unserer_Lieben_Frau,_Buntglasfenster,_Prophet_Hosea_(5482316285).jpg"
    },
    {
      "name": "로버츠 〈사마리아 원경〉",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "우가리트 바알 석비",
      "credit": "Stele of Baal with Thunderbolt, Ugarit, Louvre (photo: Rama)",
      "license": "CC BY-SA 2.0 fr",
      "page": "https://commons.wikimedia.org/wiki/File:Baal_thunderbolt_from_Ugarit_(Louvre_AO15775).jpg"
    },
    {
      "name": "레이턴 〈이세벨과 아합〉",
      "credit": "Frederic Leighton, Jezebel and Ahab (Elijah meets them in Naboth's vineyard)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Leighton_(1830-1896)_-_Jezebel_and_Ahab_-_SMG.289_-_Scarborough_Art_Gallery.jpg"
    },
    {
      "name": "이스라엘스 〈유대인의 결혼식〉",
      "credit": "Jozef Israëls, A Jewish Wedding (Rijksmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Joodse_bruiloft_Rijksmuseum_SK-A-2598.jpeg"
    },
    {
      "name": "밀레 〈만종〉",
      "credit": "Jean-François Millet, The Angelus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg"
    },
    {
      "name": "라이트 〈비둘기들〉",
      "credit": "Ferdinand von Wright, Pigeons (Nationalmuseum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pigeons_(Ferdinand_von_Wright)_-_Nationalmuseum_-_22008.tif"
    },
    {
      "name": "데 헤임 〈포도 정물〉",
      "credit": "Jan Davidsz. de Heem, Still Life with Grapes",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Davidsz_de_Heem_-_Still_Life_with_Grapes.jpg"
    },
    {
      "name": "벤데만 〈슬퍼하는 포로들〉",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (Wallraf-Richartz-Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "로버츠 〈이스라엘의 출애굽〉",
      "credit": "David Roberts, The Departure of the Israelites",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts-IsraelitesLeavingEgypt_1828.jpg"
    },
    {
      "name": "로랭 〈일출의 항구〉",
      "credit": "Claude Lorrain, A Seaport at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claude_Lorrain_-_A_Seaport_at_Sunrise_-_WGA05016.jpg"
    }
  ]
};
