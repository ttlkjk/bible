// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/genesis)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "25": [["move","art-haeckel",[586,458,460,320]]],
    "51": [["move","art-expulsion",null]],
    "99": [["move","art-molnar",null]]
  },
  beats: {
    "24": [["photo","art-haeckel","img/art/genesis/haeckel.jpg",[432,351,620,431],{"tilt":-1.2,"caption":"헤켈 〈배아 그림〉"}]],
    "41": [["photo","art-cole","img/art/genesis/cole.jpg",[626,38,420,309],{"tilt":1.2,"caption":"콜 〈에덴 동산〉"}]],
    "49": [["photo","art-expulsion","img/art/genesis/expulsion.jpg",[966,358,580,419],{"tilt":-1.2,"caption":"콜 〈에덴 추방〉"}]],
    "56": [["photo","art-harvest","img/art/genesis/harvest.jpg",[1106,38,440,320],{"tilt":1.2,"caption":"브뤼헐 〈수확하는 사람들〉"}]],
    "79": [["photo","art-fish","img/art/genesis/fish.jpg",[586,38,460,307],{"tilt":-1.2,"caption":"나이티아 물고기 화석"}]],
    "82": [["photo","art-church","img/art/genesis/church.jpg",[976,38,570,378],{"tilt":1.2,"caption":"처치 〈열대의 우기〉"}]],
    "87": [["photo","art-bruegel","img/art/genesis/bruegel.jpg",[686,38,410,300],{"tilt":-1.2,"caption":"브뤼헐 〈바벨탑〉"}]],
    "97": [["photo","art-molnar","img/art/genesis/molnar.jpg",[926,38,620,539],{"tilt":1.2,"caption":"몰나르 〈아브라함의 떠남〉"}]],
    "111": [["photo","art-melchi","img/art/genesis/melchi.jpg",[966,38,580,463],{"tilt":-1.2,"caption":"루벤스 〈아브라함과 멜기세덱〉"}]],
    "114": [["photo","art-sodom","img/art/genesis/sodom.jpg",[1106,38,440,281],{"tilt":1.2,"caption":"마틴 〈소돔과 고모라〉"}]],
    "119": [["photo","art-hagar","img/art/genesis/hagar.jpg",[876,38,670,494],{"tilt":-1.2,"caption":"코로 〈광야의 하갈〉"}]],
    "126": [["photo","art-pottage","img/art/genesis/pottage.jpg",[916,38,630,519],{"tilt":1.2,"caption":"테르브뤼헌 〈에서와 팥죽〉"}]],
    "129": [["photo","art-ribera","img/art/genesis/ribera.jpg",[986,358,560,424],{"tilt":-1.2,"caption":"리베라 〈야곱의 꿈〉"}]],
    "135": [["photo","art-lemoyne","img/art/genesis/lemoyne.jpg",[1116,38,430,540],{"tilt":1.2,"caption":"르무안 〈야곱과 라헬〉"}]],
    "148": [["photo","art-sold","img/art/genesis/sold.jpg",[846,38,700,502],{"tilt":-1.2,"caption":"보탈라 〈팔려 가는 요셉〉"}]],
    "149": [["photo","art-velazquez","img/art/genesis/velazquez.jpg",[956,38,590,451],{"tilt":1.2,"caption":"벨라스케스 〈요셉의 옷〉"}]],
    "157": [["photo","art-guignet","img/art/genesis/guignet.jpg",[956,38,590,447],{"tilt":-1.2,"caption":"기녜 〈요셉과 바로〉"}]],
    "163": [["photo","art-cornelius","img/art/genesis/cornelius.jpg",[886,38,660,536],{"tilt":1.2,"caption":"코르넬리우스 〈요셉과 형들〉"}]],
    "170": [["photo","art-blessing","img/art/genesis/blessing.jpg",[986,38,560,475],{"tilt":-1.2,"caption":"렘브란트 〈야곱의 축복〉"}]]
  },
  credits: [
    {
      "name": "헤켈 〈배아 그림〉",
      "credit": "Ernst Haeckel, embryo plates from Anthropogenie",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Haeckel_Anthropogenie_1874.jpg"
    },
    {
      "name": "콜 〈에덴 동산〉",
      "credit": "Thomas Cole, The Garden of Eden",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Thomas_Cole_-_The_Garden_of_Eden_(1828).jpg"
    },
    {
      "name": "콜 〈에덴 추방〉",
      "credit": "Thomas Cole, Expulsion from the Garden of Eden",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Thomas_Cole_-_Expulsion_from_the_Garden_of_Eden_-_Google_Art_Project.jpg"
    },
    {
      "name": "브뤼헐 〈수확하는 사람들〉",
      "credit": "Pieter Bruegel the Elder, The Harvesters",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg"
    },
    {
      "name": "나이티아 물고기 화석",
      "credit": "Joe deSousa, Knightia fossil fish",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Knightia_Fossil_Fish_(20255016550).jpg"
    },
    {
      "name": "처치 〈열대의 우기〉",
      "credit": "Frederic Edwin Church, Rainy Season in the Tropics",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frederic_Edwin_Church_-_Rainy_Season_in_the_Tropics_-_Google_Art_Project.jpg"
    },
    {
      "name": "브뤼헐 〈바벨탑〉",
      "credit": "Pieter Bruegel the Elder, The Tower of Babel",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_(Vienna)_-_Google_Art_Project_-_edited.jpg"
    },
    {
      "name": "몰나르 〈아브라함의 떠남〉",
      "credit": "József Molnár, The Departure of Abraham",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Moln%C3%A1r_%C3%81brah%C3%A1m_kik%C3%B6lt%C3%B6z%C3%A9se_1850.jpg"
    },
    {
      "name": "루벤스 〈아브라함과 멜기세덱〉",
      "credit": "Peter Paul Rubens, The Meeting of Abraham and Melchizedek",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Sir_Peter_Paul_Rubens,_The_Meeting_of_Abraham_and_Melchizedek,_c._1626,_NGA_45640.jpg"
    },
    {
      "name": "마틴 〈소돔과 고모라〉",
      "credit": "John Martin, Sodom and Gomorrah",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Sodom_and_Gomorrah.jpg"
    },
    {
      "name": "코로 〈광야의 하갈〉",
      "credit": "Jean-Baptiste Camille Corot, Hagar in the Wilderness",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Hagar_in_the_Wilderness_MET_DT2013.jpg"
    },
    {
      "name": "테르브뤼헌 〈에서와 팥죽〉",
      "credit": "Hendrick ter Brugghen, Esau Selling His Birthright",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Hendrick_ter_Brugghen_(1588_-_1.11.1629)_-_Esau_Sells_his_Birthright_-_1982_-_Gem%C3%A4ldegalerie.jpg"
    },
    {
      "name": "리베라 〈야곱의 꿈〉",
      "credit": "Jusepe de Ribera, Jacob's Dream",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:El_sue%C3%B1o_de_Jacob,_by_Jos%C3%A9_de_Ribera,_from_Prado_in_Google_Earth.jpg"
    },
    {
      "name": "르무안 〈야곱과 라헬〉",
      "credit": "François Lemoyne, Jacob and Rachel at the Well",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Collection_Motais_de_Narbonne_-_Jacob_et_Rachel_au_puits_(1720)_-_Fran%C3%A7ois_Lemoyne_(71).jpg"
    },
    {
      "name": "보탈라 〈팔려 가는 요셉〉",
      "credit": "Raffaellino Bottalla, Joseph Sold by His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Raffaellino_Bottalla_-_Joseph_sold_by_his_brothers_-_Google_Art_Project.jpg"
    },
    {
      "name": "벨라스케스 〈요셉의 옷〉",
      "credit": "Diego Velázquez, Joseph's Bloody Coat Brought to Jacob",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_065.jpg"
    },
    {
      "name": "기녜 〈요셉과 바로〉",
      "credit": "Adrien Guignet, Joseph and Pharaoh",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Adrien_Guignet_Joseph_et_Pharaon.jpg"
    },
    {
      "name": "코르넬리우스 〈요셉과 형들〉",
      "credit": "Peter von Cornelius, Joseph Reveals Himself to His Brothers",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_von_Cornelius_-_Joseph_gibt_sich_seinen_Br%C3%BCdern_zu_erkennen_-_Google_Art_Project.jpg"
    },
    {
      "name": "렘브란트 〈야곱의 축복〉",
      "credit": "Rembrandt, Jacob Blessing the Sons of Joseph",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_van_Rijn_-_Jacob_blessing_Ephraim_and_Manasseh_(Gem%C3%A4ldegalerie_Alte_Meister_Kassel).jpg"
    }
  ]
};
