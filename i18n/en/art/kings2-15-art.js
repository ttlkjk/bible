// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/kings2-15)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "27": [["move","art-temple4",null]]
  },
  beats: {
    "11": [["photo","art-tiglath","img/art/kings2-15/tiglath.jpg",[1226,38,320,482],{"tilt":-1.2,"caption":"Relief of Tiglath-pileser III"}]],
    "19": [["photo","art-seddon","img/art/kings2-15/seddon.jpg",[1126,468,420,310],{"tilt":1.2,"caption":"Seddon — The Valley of Jehoshaphat"}]],
    "22": [["photo","art-isaiah","img/art/kings2-15/isaiah.jpg",[1296,38,250,530],{"tilt":-1.2,"caption":"Tissot — Isaiah"}]],
    "25": [["photo","art-temple4","img/art/kings2-15/temple4.jpg",[856,38,690,535],{"tilt":1.2,"caption":"Model of Solomon's Temple, Front"}]]
  },
  credits: [
    {
      "name": "Relief of Tiglath-pileser III",
      "credit": "Tiglath-pileser III in his chariot, relief from Nimrud, British Museum (photo: Osama Shukir Muhammed Amin)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tiglath-pileser_III,_an_alabaster_bas-relief_from_the_king%27s_central_palace_at_Nimrud,_Mesopotamia..JPG"
    },
    {
      "name": "Seddon — The Valley of Jehoshaphat",
      "credit": "Thomas Seddon, Jerusalem and the Valley of Jehoshaphat from the Hill of Evil Counsel",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Thomas_Seddon_-_Jerusalem_and_the_Valley_of_Jehoshaphat_from_the_Hill_of_Evil_Counsel_-_Google_Art_Project.jpg"
    },
    {
      "name": "Tissot — Isaiah",
      "credit": "James Tissot (design) and Charles Hoffbauer, Isaiah (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Isa%C3%AFe_(Isaiah_7_13)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Charles_Hoffbauer_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "Model of Solomon's Temple, Front",
      "credit": "Model of Solomon's Temple (photo: SalemOptix)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Model_of_Solomon%27s_Temple_-_04.jpg"
    }
  ]
};
