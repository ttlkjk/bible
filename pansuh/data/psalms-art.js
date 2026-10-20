// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/psalms)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "17": [["move","art-starry",[1096,38,450,349]]]
  },
  beats: {
    "4": [["photo","art-moses","img/art/psalms/moses.jpg",[1146,38,400,518],{"tilt":-1.2,"caption":"샹파뉴 〈십계명을 든 모세〉"}]],
    "9": [["photo","art-rubens","img/art/psalms/rubens.jpg",[576,38,450,302],{"tilt":1.2,"caption":"루벤스 〈하프 타는 다윗〉"}]],
    "12": [["photo","art-scroll","img/art/psalms/scroll.jpg",[786,498,760,253],{"tilt":-1.2,"caption":"사해 시편 두루마리"}]],
    "15": [["photo","art-starry","img/art/psalms/starry.jpg",[856,38,690,535],{"tilt":1.2,"caption":"고흐 〈론강의 별이 빛나는 밤〉"}]],
    "21": [["photo","art-granberg","img/art/psalms/granberg.jpg",[1156,38,390,534],{"tilt":-1.2,"caption":"그란베리 〈나단의 책망〉"}]]
  },
  credits: [
    {
      "name": "샹파뉴 〈십계명을 든 모세〉",
      "credit": "Philippe de Champaigne, Moses Presenting the Tablets of the Law",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Philippe_de_Champaigne_-_Moses_Presenting_the_Tablets_of_the_Law_-_c._1648.jpg"
    },
    {
      "name": "루벤스 〈하프 타는 다윗〉",
      "credit": "Peter Paul Rubens, King David Playing the Harp (Barnes Foundation)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_King_David_Playing_the_Harp_-_BF812_-_Barnes_Foundation.jpg"
    },
    {
      "name": "사해 시편 두루마리",
      "credit": "The Great Psalms Scroll (11Q5), Dead Sea Scrolls",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Psalms_Scroll_11Q5.jpg"
    },
    {
      "name": "고흐 〈론강의 별이 빛나는 밤〉",
      "credit": "Vincent van Gogh, Starry Night Over the Rhône",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg"
    },
    {
      "name": "그란베리 〈나단의 책망〉",
      "credit": "Emanuel Granberg, Nathan Confronts David",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Emanuel_Granberg_Nathan_confronts_David.jpg"
    }
  ]
};
