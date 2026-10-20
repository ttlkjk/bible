// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/leviticus)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "40": [["move","art-furniture",[1036,188,510,376]]]
  },
  beats: {
    "20": [["photo","art-harvesters","../../pansuh/img/art/leviticus/harvesters.jpg",[1136,38,410,302],{"tilt":-1.2,"caption":"Bruegel — The Harvesters"}]],
    "25": [["photo","art-bonheur","../../pansuh/img/art/leviticus/bonheur.jpg",[1036,328,510,367],{"tilt":1.2,"caption":"Bonheur — Cattle and Sheep in the Alps"}]],
    "31": [["photo","art-wheat","../../pansuh/img/art/leviticus/wheat.jpg",[1106,328,440,348],{"tilt":-1.2,"caption":"Van Gogh — Wheatfield with a Reaper"}]],
    "37": [["photo","art-pigeons","../../pansuh/img/art/leviticus/pigeons.jpg",[1116,38,430,312],{"tilt":1.2,"caption":"Wright — Pigeons"}]],
    "39": [["photo","art-furniture","../../pansuh/img/art/leviticus/furniture.jpg",[856,187,690,509],{"tilt":-1.2,"caption":"Holman Bible — The High Priest and the Tabernacle"}]],
    "54": [["photo","art-gleaners","../../pansuh/img/art/leviticus/gleaners.jpg",[1066,38,480,359],{"tilt":1.2,"caption":"Millet — The Gleaners"}]],
    "67": [["photo","art-wilderness","../../pansuh/img/art/leviticus/wilderness.jpg",[1096,328,450,314],{"tilt":-1.2,"caption":"Roberts — The Road to Mount Sinai"}]]
  },
  credits: [
    {
      "name": "Bruegel — The Harvesters",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Harvesters.jpg"
    },
    {
      "name": "Bonheur — Cattle and Sheep in the Alps",
      "credit": "Rosa Bonheur, Cattle and Sheep in an Alpine Landscape",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:2012_CSK_06210_0042A_rosa_raymond_bonheur_cattle_and_sheep_in_an_alpine_landscape).jpg"
    },
    {
      "name": "Van Gogh — Wheatfield with a Reaper",
      "credit": "Vincent van Gogh, Wheatfield with a Reaper",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Wheatfield_with_a_reaper_-_Google_Art_Project.jpg"
    },
    {
      "name": "Wright — Pigeons",
      "credit": "Ferdinand von Wright, Pigeons",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pigeons_(Ferdinand_von_Wright)_-_Nationalmuseum_-_22008.tif"
    },
    {
      "name": "Holman Bible — The High Priest and the Tabernacle",
      "credit": "Holman Bible (1890), The High Priest and the Furniture of the Tabernacle",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Holman_Furniture_of_the_Tabernacle.jpg"
    },
    {
      "name": "Millet — The Gleaners",
      "credit": "Jean-François Millet, The Gleaners",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg"
    },
    {
      "name": "Roberts — The Road to Mount Sinai",
      "credit": "David Roberts, The Approach to Mount Sinai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_The_approach_to_Mount_Sinai.jpg"
    }
  ]
};
