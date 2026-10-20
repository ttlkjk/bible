// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/exodus)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "32": [["move","art-sinai",[1096,38,450,312]]]
  },
  beats: {
    "5": [["photo","art-poynter","img/art/exodus/poynter.jpg",[976,38,570,239],{"tilt":-1.2,"caption":"포인터 〈애굽의 이스라엘〉"}]],
    "12": [["photo","art-nile","img/art/exodus/nile.jpg",[1076,478,470,300],{"tilt":1.2,"caption":"알마타데마 〈모세의 발견〉"}]],
    "23": [["photo","art-firstborn","img/art/exodus/firstborn.jpg",[1026,348,520,320],{"tilt":-1.2,"caption":"알마타데마 〈장자의 죽음〉"}]],
    "29": [["photo","art-wilderness","img/art/exodus/wilderness.jpg",[1116,478,430,300],{"tilt":1.2,"caption":"로버츠 〈시내 산 가는 길〉"}]],
    "31": [["photo","art-sinai","img/art/exodus/sinai.jpg",[816,38,730,507],{"tilt":-1.2,"caption":"로버츠 〈시내 산 라하 평원〉"}]],
    "35": [["photo","art-rembrandt","img/art/exodus/rembrandt.jpg",[1206,348,340,424],{"tilt":1.2,"caption":"렘브란트 〈십계명을 든 모세〉"}]],
    "40": [["photo","art-poussin","img/art/exodus/poussin.jpg",[1076,38,470,331],{"tilt":-1.2,"caption":"푸생 〈금송아지 숭배〉"}]]
  },
  credits: [
    {
      "name": "포인터 〈애굽의 이스라엘〉",
      "credit": "Edward Poynter, Israel in Egypt",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:1867_Edward_Poynter_-_Israel_in_Egypt.jpg"
    },
    {
      "name": "알마타데마 〈모세의 발견〉",
      "credit": "Lawrence Alma-Tadema, The Finding of Moses",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_finding_of_Moses,_by_Lawrence_Alma_Tadema.jpg"
    },
    {
      "name": "알마타데마 〈장자의 죽음〉",
      "credit": "Lawrence Alma-Tadema, The Death of the Pharaoh's Firstborn Son",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:De_dood_van_de_eerstgeborene_van_de_farao,_SK-A-2664.jpg"
    },
    {
      "name": "로버츠 〈시내 산 가는 길〉",
      "credit": "David Roberts, The Approach to Mount Sinai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_The_approach_to_Mount_Sinai.jpg"
    },
    {
      "name": "로버츠 〈시내 산 라하 평원〉",
      "credit": "David Roberts, The Plain of El Raheh, Mount Sinai",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:David_Roberts_-_The_Plain_of_El_Raheh,_Mount_Sinai_-_B1975.3.1074_-_Yale_Center_for_British_Art.jpg"
    },
    {
      "name": "렘브란트 〈십계명을 든 모세〉",
      "credit": "Rembrandt, Moses with the Ten Commandments",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg"
    },
    {
      "name": "푸생 〈금송아지 숭배〉",
      "credit": "Nicolas Poussin, The Adoration of the Golden Calf",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:The_Adoration_of_the_Golden_Calf_%E2%80%93_Nicolas_Poussin.jpg"
    }
  ]
};
