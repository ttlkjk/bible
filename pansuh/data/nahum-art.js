// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/nahum)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "14": [["move","art-sebaste",[1066,458,480,320]]]
  },
  beats: {
    "7": [["photo","art-repent","img/art/nahum/repent.jpg",[906,38,640,540],{"tilt":-1.2,"caption":"마틴 〈니느웨의 회개〉"}]],
    "9": [["photo","art-ruisdael","img/art/nahum/ruisdael.jpg",[826,188,720,536],{"tilt":1.2,"caption":"라위스달 〈바다 위의 먹구름〉"}]],
    "13": [["photo","art-sebaste","img/art/nahum/sebaste.jpg",[856,317,690,461],{"tilt":-1.2,"caption":"로버츠 〈사마리아 원경〉"}]]
  },
  credits: [
    {
      "name": "마틴 〈니느웨의 회개〉",
      "credit": "John Martin, The Repentance of Nineveh (Yale University Art Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Repentance_of_Nineveh_-_1958.66_-_Yale_University_Art_Gallery.jpg"
    },
    {
      "name": "라위스달 〈바다 위의 먹구름〉",
      "credit": "Jacob van Ruisdael, Storm Clouds over the Sea (Nationalmuseum, Stockholm)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Storm_Clouds_over_the_Sea_(Jacob_Isaackszoon_van_Ruisdael)_-_Nationalmuseum_-_21087.tif"
    },
    {
      "name": "로버츠 〈사마리아 원경〉",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    }
  ]
};
