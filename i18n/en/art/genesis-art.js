// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/genesis)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "99": [["move","art-molnar",null]],
    "130": [["move","art-ribera",[1136,348,410,310]]]
  },
  beats: {
    "97": [["photo","art-molnar","img/art/genesis/molnar.jpg",[926,188,620,539],{"tilt":-1.2,"caption":"Molnár — Abraham Sets Out"}]],
    "119": [["photo","art-hagar","img/art/genesis/hagar.jpg",[1066,38,480,354],{"tilt":1.2,"caption":"Corot — Hagar in the Wilderness"}]],
    "126": [["photo","art-pottage","img/art/genesis/pottage.jpg",[976,38,570,469],{"tilt":-1.2,"caption":"Ter Brugghen — Esau and the Pottage"}]],
    "129": [["photo","art-ribera","img/art/genesis/ribera.jpg",[1026,265,520,393],{"tilt":1.2,"caption":"Ribera — Jacob's Dream"}]],
    "135": [["photo","art-lemoyne","img/art/genesis/lemoyne.jpg",[1116,38,430,540],{"tilt":-1.2,"caption":"Lemoyne — Jacob and Rachel"}]],
    "148": [["photo","art-sold","img/art/genesis/sold.jpg",[1106,38,440,315],{"tilt":1.2,"caption":"Bottalla — Joseph Sold"}]],
    "149": [["photo","art-velazquez","img/art/genesis/velazquez.jpg",[1096,38,450,344],{"tilt":-1.2,"caption":"Velázquez — Joseph's Coat"}]],
    "157": [["photo","art-guignet","img/art/genesis/guignet.jpg",[1056,38,490,372],{"tilt":1.2,"caption":"Guignet — Joseph and Pharaoh"}]],
    "163": [["photo","art-cornelius","img/art/genesis/cornelius.jpg",[996,38,550,446],{"tilt":-1.2,"caption":"Cornelius — Joseph and His Brothers"}]],
    "170": [["photo","art-blessing","img/art/genesis/blessing.jpg",[1166,38,380,322],{"tilt":1.2,"caption":"Rembrandt — Jacob's Blessing"}]]
  },
  credits: [
    {
      "name": "Molnár — Abraham Sets Out",
      "credit": "József Molnár, The Departure of Abraham",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Moln%C3%A1r_%C3%81brah%C3%A1m_kik%C3%B6lt%C3%B6z%C3%A9se_1850.jpg"
    },
    {
      "name": "Corot — Hagar in the Wilderness",
      "credit": "Jean-Baptiste Camille Corot, Hagar in the Wilderness",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Hagar_in_the_Wilderness_MET_DT2013.jpg"
    },
    {
      "name": "Ter Brugghen — Esau and the Pottage",
      "credit": "Hendrick ter Brugghen, Esau Selling His Birthright",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Hendrick_ter_Brugghen_(1588_-_1.11.1629)_-_Esau_Sells_his_Birthright_-_1982_-_Gem%C3%A4ldegalerie.jpg"
    },
    {
      "name": "Ribera — Jacob's Dream",
      "credit": "Jusepe de Ribera, Jacob's Dream",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:El_sue%C3%B1o_de_Jacob,_by_Jos%C3%A9_de_Ribera,_from_Prado_in_Google_Earth.jpg"
    },
    {
      "name": "Lemoyne — Jacob and Rachel",
      "credit": "François Lemoyne, Jacob and Rachel at the Well",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Collection_Motais_de_Narbonne_-_Jacob_et_Rachel_au_puits_(1720)_-_Fran%C3%A7ois_Lemoyne_(71).jpg"
    },
    {
      "name": "Bottalla — Joseph Sold",
      "credit": "Raffaellino Bottalla, Joseph Sold by His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Raffaellino_Bottalla_-_Joseph_sold_by_his_brothers_-_Google_Art_Project.jpg"
    },
    {
      "name": "Velázquez — Joseph's Coat",
      "credit": "Diego Velázquez, Joseph's Bloody Coat Brought to Jacob",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_065.jpg"
    },
    {
      "name": "Guignet — Joseph and Pharaoh",
      "credit": "Adrien Guignet, Joseph and Pharaoh",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Adrien_Guignet_Joseph_et_Pharaon.jpg"
    },
    {
      "name": "Cornelius — Joseph and His Brothers",
      "credit": "Peter von Cornelius, Joseph Reveals Himself to His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_von_Cornelius_-_Joseph_gibt_sich_seinen_Br%C3%BCdern_zu_erkennen_-_Google_Art_Project.jpg"
    },
    {
      "name": "Rembrandt — Jacob's Blessing",
      "credit": "Rembrandt, Jacob Blessing the Sons of Joseph",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_van_Rijn_-_Jacob_blessing_Ephraim_and_Manasseh_(Gem%C3%A4ldegalerie_Alte_Meister_Kassel).jpg"
    }
  ]
};
