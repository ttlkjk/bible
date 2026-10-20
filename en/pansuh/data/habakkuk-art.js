// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/habakkuk)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "17": [["move","art-martin",null]]
  },
  beats: {
    "0": [["photo","art-icon","../../pansuh/img/art/habakkuk/icon.jpg",[1096,508,450,271],{"tilt":-1.2,"caption":"Icon of Habakkuk and Jeremiah"}]],
    "7": [["photo","art-procession","../../pansuh/img/art/habakkuk/procession.jpg",[1066,38,480,320],{"tilt":1.2,"caption":"Babylon's Processional Way, Reconstructed"}]],
    "11": [["photo","art-pesher","../../pansuh/img/art/habakkuk/pesher.jpg",[1096,38,450,300],{"tilt":-1.2,"caption":"Habakkuk Commentary Scroll"}]],
    "15": [["photo","art-martin","../../pansuh/img/art/habakkuk/martin.jpg",[896,358,650,420],{"tilt":1.2,"caption":"Martin — The Fall of Babylon"}]],
    "19": [["photo","art-lagoudera","../../pansuh/img/art/habakkuk/lagoudera.jpg",[1206,38,340,528],{"tilt":-1.2,"caption":"Habakkuk, Wall Painting in Cyprus"}]]
  },
  credits: [
    {
      "name": "Icon of Habakkuk and Jeremiah",
      "credit": "Icon of the Prophets Habakkuk and Jeremiah, Russian, Hermitage Museum",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:0635Ha._Hermitage_Museum_(Hall_145)._Icon_of_the_Prophets_Jeremiah_and_Habakkuk.jpg"
    },
    {
      "name": "Babylon's Processional Way, Reconstructed",
      "credit": "Reconstructed Processional Way of Babylon, Pergamon Museum, Berlin (photo: Osama Shukir Muhammed Amin)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Reconstructed_Processional_Street_of_Babylon_showing_striding_and_roaring_lions._From_Babylon,_Iraq._Pergamon_Museum.jpg"
    },
    {
      "name": "Habakkuk Commentary Scroll",
      "credit": "Habakkuk Commentary scroll (1QpHab), Dead Sea Scrolls",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Pesher_Habakkuk_Scroll.JPG"
    },
    {
      "name": "Martin — The Fall of Babylon",
      "credit": "John Martin, The Fall of Babylon, coloured mezzotint (Wellcome Collection)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:The_fall_of_Babylon;_Cyrus_the_Great_defeating_the_Chaldean_Wellcome_V0034440.jpg"
    },
    {
      "name": "Habakkuk, Wall Painting in Cyprus",
      "credit": "The Prophet Habakkuk, wall painting, Church of Panagia tou Arakos, Lagoudera, Cyprus (Dumbarton Oaks)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Church_of_Panagia_tou_Arakos,_nave,_center_bay,_drum,_wall_paintings,_Lagoudera,_Cyprus_-_Prophet_Habakkuk,_detail_of_bust_-_MSBZ004_BF_S_1979_2002D_-_Dumbarton_Oaks.jpg"
    }
  ]
};
