// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/chronicles)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "12": [["move","art-moller",[986,188,560,220]]]
  },
  beats: {
    "2": [["photo","art-ruins","img/art/chronicles/ruins.jpg",[1126,38,420,538],{"tilt":-1.2,"caption":"티소 〈폐허를 보는 느헤미야〉"}]],
    "5": [["photo","art-beatus","img/art/chronicles/beatus.jpg",[986,348,560,434],{"tilt":1.2,"caption":"베아투스 〈그리스도의 족보〉"}]],
    "11": [["photo","art-moller","img/art/chronicles/moller.jpg",[836,187,710,279],{"tilt":-1.2,"caption":"묄러 〈성전 재건〉"}]]
  },
  credits: [
    {
      "name": "티소 〈폐허를 보는 느헤미야〉",
      "credit": "James Tissot (design) and Michel Simonidy, Nehemiah Sees the Ruins of Jerusalem (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:345.3_402_N%C3%A9h%C3%A9mie_voit_les_ruines_de_J%C3%A9rusalem_(Nehemiah_2_17)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "베아투스 〈그리스도의 족보〉",
      "credit": "Leaves from a Beatus Manuscript, Genealogy (Spain, c. 1180, Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Leaves_from_a_Beatus_Manuscript-_Bifolium_with_part_of_the_Genealogy_of_Christ_and_the_Adoration_of_the_Magi_MET_DT6702.jpg"
    },
    {
      "name": "묄러 〈성전 재건〉",
      "credit": "Anton Möller, The Rebuilding of the Temple (2 Chronicles 24)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Anton_M%C3%B6ller_Odbudowa_Swi%C4%85tyni.jpg"
    }
  ]
};
