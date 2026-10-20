// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/jonah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "18": [["photo","art-brueghel","../../pansuh/img/art/jonah/brueghel.jpg",[1056,38,490,354],{"tilt":-1.2,"caption":"Brueghel — Jonah Cast Ashore"}]],
    "19": [["photo","art-layard","../../pansuh/img/art/jonah/layard.jpg",[1076,38,470,277],{"tilt":1.2,"caption":"Layard — Nineveh's Palaces Reconstructed"}]],
    "25": [["photo","art-persson","../../pansuh/img/art/jonah/persson.jpg",[886,38,660,415],{"tilt":-1.2,"caption":"Persson — Jonah under the Vine"}]],
    "27": [["photo","art-dughet","../../pansuh/img/art/jonah/dughet.jpg",[986,38,560,403],{"tilt":1.2,"caption":"Dughet — Jonah and the Great Fish"}]]
  },
  credits: [
    {
      "name": "Brueghel — Jonah Cast Ashore",
      "credit": "Jan Brueghel the Elder, Jonah Leaving the Mouth of the Whale (photo: Szilas)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jan_Brueghel_the_Elder_-_Jonas_entsteigt_dem_Rachen_des_Walfisches_-_mit_Rahmen.jpg"
    },
    {
      "name": "Layard — Nineveh's Palaces Reconstructed",
      "credit": "Artist's impression of Assyrian palaces, from Austen Henry Layard, The Monuments of Nineveh (1853)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Artist%E2%80%99s_impression_of_Assyrian_palaces_from_The_Monuments_of_Nineveh_by_Sir_Austen_Henry_Layard,_1853.jpg"
    },
    {
      "name": "Persson — Jonah under the Vine",
      "credit": "Per Persson, Jonah beneath the Gourd (1819), Nationalmuseum",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jonah_beneath_the_Gourd_(Per_Persson)_-_Nationalmuseum_-_25977.tif"
    },
    {
      "name": "Dughet — Jonah and the Great Fish",
      "credit": "Gaspard Dughet, Seascape with Jonah and the Whale",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Dughet_-_Seascape_with_Jonah_and_the_Whale_c._1653-4.jpg"
    }
  ]
};
