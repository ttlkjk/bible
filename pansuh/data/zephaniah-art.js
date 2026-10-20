// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/zephaniah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "2": [["photo","art-martin","img/art/zephaniah/martin.jpg",[616,478,440,284],{"tilt":-1.2,"caption":"마틴 〈진노의 큰 날〉"}]],
    "4": [["photo","art-baal","img/art/zephaniah/baal.jpg",[1186,38,360,530],{"tilt":1.2,"caption":"므깃도 바알 청동상"}]],
    "12": [["photo","art-cole","img/art/zephaniah/cole.jpg",[976,38,570,355],{"tilt":-1.2,"caption":"콜 〈제국의 행로 · 황폐〉"}]],
    "15": [["photo","art-sunrise","img/art/zephaniah/sunrise.jpg",[1046,38,500,326],{"tilt":1.2,"caption":"바우른파인트 〈일출의 예루살렘〉"}]]
  },
  credits: [
    {
      "name": "마틴 〈진노의 큰 날〉",
      "credit": "John Martin, The Great Day of His Wrath (Tate)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "므깃도 바알 청동상",
      "credit": "Bronze figure of Baal from Megiddo, Oriental Institute Museum, Chicago (photo: Daderot)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Baal,_God_of_Fertility_and_Storms,_Megiddo,_Strata_IX-VII,_Late_Bronze_Age,_1550-1200_BC,_bronze_-_Oriental_Institute_Museum,_University_of_Chicago_-_DSC07738.JPG"
    },
    {
      "name": "콜 〈제국의 행로 · 황폐〉",
      "credit": "Thomas Cole, The Course of Empire: Desolation (1836)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"
    },
    {
      "name": "바우른파인트 〈일출의 예루살렘〉",
      "credit": "Gustav Bauernfeind, Jerusalem from the Mount of Olives at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gustav_bauernfeind_jerusalem_from_the_mount_of_olives_at_sunrise2024_CKS_22668_0027_000(093010).jpg"
    }
  ]
};
