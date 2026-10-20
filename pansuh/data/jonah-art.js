// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/jonah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "28": [["move","art-dughet",[996,38,550,396]]]
  },
  beats: {
    "7": [["photo","art-lagou","img/art/jonah/lagou.jpg",[1196,38,350,539],{"tilt":-1.2,"caption":"라구데라 〈선지자 요나〉"}]],
    "18": [["photo","art-brueghel","img/art/jonah/brueghel.jpg",[1006,38,540,390],{"tilt":1.2,"caption":"브뤼헐 〈뭍에 토해진 요나〉"}]],
    "19": [["photo","art-layard","img/art/jonah/layard.jpg",[896,38,650,382],{"tilt":-1.2,"caption":"레이어드 〈니느웨 궁전 복원〉"}]],
    "25": [["photo","art-persson","img/art/jonah/persson.jpg",[876,358,670,421],{"tilt":1.2,"caption":"페르손 〈박넝쿨 아래의 요나〉"}]],
    "27": [["photo","art-dughet","img/art/jonah/dughet.jpg",[816,38,730,526],{"tilt":-1.2,"caption":"뒤게 〈요나와 큰 물고기〉"}]]
  },
  credits: [
    {
      "name": "라구데라 〈선지자 요나〉",
      "credit": "The Prophet Jonah, wall painting, Church of Panagia tou Arakos, Lagoudera, Cyprus (photo: Byzantine Institute, Dumbarton Oaks)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Church_of_Panagia_tou_Arakos,_nave,_center_bay,_drum,_wall_paintings,_Lagoudera,_Cyprus_-_Prophet_Jonah_-_MSBZ004_BF_S_1979_2010D_-_Dumbarton_Oaks.jpg"
    },
    {
      "name": "브뤼헐 〈뭍에 토해진 요나〉",
      "credit": "Jan Brueghel the Elder, Jonah Leaving the Mouth of the Whale (photo: Szilas)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Brueghel_the_Elder_-_Jonas_entsteigt_dem_Rachen_des_Walfisches_-_mit_Rahmen.jpg"
    },
    {
      "name": "레이어드 〈니느웨 궁전 복원〉",
      "credit": "Artist's impression of Assyrian palaces, from Austen Henry Layard, The Monuments of Nineveh (1853)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Artist%E2%80%99s_impression_of_Assyrian_palaces_from_The_Monuments_of_Nineveh_by_Sir_Austen_Henry_Layard,_1853.jpg"
    },
    {
      "name": "페르손 〈박넝쿨 아래의 요나〉",
      "credit": "Per Persson, Jonah beneath the Gourd (1819), Nationalmuseum",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jonah_beneath_the_Gourd_(Per_Persson)_-_Nationalmuseum_-_25977.tif"
    },
    {
      "name": "뒤게 〈요나와 큰 물고기〉",
      "credit": "Gaspard Dughet, Seascape with Jonah and the Whale",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Dughet_-_Seascape_with_Jonah_and_the_Whale_c._1653-4.jpg"
    }
  ]
};
