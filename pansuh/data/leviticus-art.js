// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/leviticus)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "22": [["move","art-harvesters",[1056,38,490,361]]]
  },
  beats: {
    "3": [["photo","art-sinai","img/art/leviticus/sinai.jpg",[1106,358,440,305],{"tilt":-1.2,"caption":"로버츠 〈시내 산 라하 평원〉"}]],
    "20": [["photo","art-harvesters","img/art/leviticus/harvesters.jpg",[906,38,640,472],{"tilt":1.2,"caption":"브뤼헐 〈수확하는 사람들〉"}]],
    "25": [["photo","art-bonheur","img/art/leviticus/bonheur.jpg",[916,328,630,454],{"tilt":-1.2,"caption":"보뇌르 〈알프스의 소와 양〉"}]],
    "31": [["photo","art-wheat","img/art/leviticus/wheat.jpg",[1026,328,520,411],{"tilt":1.2,"caption":"고흐 〈밀밭과 추수꾼〉"}]],
    "37": [["photo","art-pigeons","img/art/leviticus/pigeons.jpg",[916,38,630,457],{"tilt":-1.2,"caption":"라이트 〈비둘기들〉"}]],
    "39": [["photo","art-furniture","img/art/leviticus/furniture.jpg",[816,38,730,538],{"tilt":1.2,"caption":"홀먼 성경 〈대제사장과 성막〉"}]],
    "51": [["photo","art-scapegoat","img/art/leviticus/scapegoat.jpg",[1016,348,530,325],{"tilt":-1.2,"caption":"헌트 〈속죄 염소〉"}]],
    "54": [["photo","art-gleaners","img/art/leviticus/gleaners.jpg",[826,38,720,539],{"tilt":1.2,"caption":"밀레 〈이삭 줍는 사람들〉"}]],
    "67": [["photo","art-wilderness","img/art/leviticus/wilderness.jpg",[1116,328,430,300],{"tilt":-1.2,"caption":"로버츠 〈시내 산 가는 길〉"}]]
  },
  credits: [
    {
      "name": "로버츠 〈시내 산 라하 평원〉",
      "credit": "David Roberts, The Plain of El Raheh, Mount Sinai",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_The_Plain_of_El_Raheh,_Mount_Sinai_-_B1975.3.1074_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "브뤼헐 〈수확하는 사람들〉",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Harvesters.jpg"
    },
    {
      "name": "보뇌르 〈알프스의 소와 양〉",
      "credit": "Rosa Bonheur, Cattle and Sheep in an Alpine Landscape",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:2012_CSK_06210_0042A_rosa_raymond_bonheur_cattle_and_sheep_in_an_alpine_landscape).jpg"
    },
    {
      "name": "고흐 〈밀밭과 추수꾼〉",
      "credit": "Vincent van Gogh, Wheatfield with a Reaper",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Wheatfield_with_a_reaper_-_Google_Art_Project.jpg"
    },
    {
      "name": "라이트 〈비둘기들〉",
      "credit": "Ferdinand von Wright, Pigeons",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pigeons_(Ferdinand_von_Wright)_-_Nationalmuseum_-_22008.tif"
    },
    {
      "name": "홀먼 성경 〈대제사장과 성막〉",
      "credit": "Holman Bible (1890), The High Priest and the Furniture of the Tabernacle",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Holman_Furniture_of_the_Tabernacle.jpg"
    },
    {
      "name": "헌트 〈속죄 염소〉",
      "credit": "William Holman Hunt, The Scapegoat",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:William_Holman_Hunt_-_The_Scapegoat.jpg"
    },
    {
      "name": "밀레 〈이삭 줍는 사람들〉",
      "credit": "Jean-François Millet, The Gleaners",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg"
    },
    {
      "name": "로버츠 〈시내 산 가는 길〉",
      "credit": "David Roberts, The Approach to Mount Sinai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_The_approach_to_Mount_Sinai.jpg"
    }
  ]
};
