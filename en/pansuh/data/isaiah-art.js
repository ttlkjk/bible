// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/isaiah)에서 가져왔고 movie/tools/board_art.js --en가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "25": [["move","art-seraph",[1146,478,400,300]]],
    "41": [["move","art-belshazzar",null]]
  },
  beats: {
    "5": [["photo","art-deyck","../../pansuh/img/art/isaiah/deyck.jpg",[1226,38,320,497],{"tilt":-1.2,"caption":"d'Eyck — The Prophet Isaiah"}]],
    "16": [["photo","art-rubens","../../pansuh/img/art/isaiah/rubens.jpg",[1166,38,380,494],{"tilt":1.2,"caption":"Rubens — Saint Ives"}]],
    "24": [["photo","art-seraph","../../pansuh/img/art/isaiah/seraph.jpg",[926,313,620,465],{"tilt":-1.2,"caption":"Seraph, Hagia Sophia"}]],
    "39": [["photo","art-belshazzar","../../pansuh/img/art/isaiah/belshazzar.jpg",[1056,448,490,328],{"tilt":1.2,"caption":"Martin — Belshazzar's Feast"}]],
    "47": [["photo","art-bauernfeind","../../pansuh/img/art/isaiah/bauernfeind.jpg",[856,38,690,450],{"tilt":-1.2,"caption":"Bauernfeind — Jerusalem at Sunrise"}]],
    "57": [["photo","art-candle","../../pansuh/img/art/isaiah/candle.jpg",[1136,38,410,528],{"tilt":1.2,"caption":"Dou — Old Woman with a Candle"}]],
    "64": [["photo","art-ciseri","../../pansuh/img/art/isaiah/ciseri.jpg",[1096,478,450,299],{"tilt":-1.2,"caption":"Ciseri — Ecce Homo"}]]
  },
  credits: [
    {
      "name": "d'Eyck — The Prophet Isaiah",
      "credit": "Barthélemy d'Eyck, The Prophet Isaiah, from the Aix Annunciation (photo: Artshooter)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:WLANL_-_Artshooter_-_De_profeet_Jesaja.jpg"
    },
    {
      "name": "Rubens — Saint Ives",
      "credit": "Peter Paul Rubens, Saint Ives of Tréguier, Defender of Widows and Orphans (Detroit Institute of Arts)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_Saint_Ives_of_Treguier,_Patron_of_Lawyers,_Defender_of_Widows_and_Orphans_-_64.459_-_Detroit_Institute_of_Arts.jpg"
    },
    {
      "name": "Seraph, Hagia Sophia",
      "credit": "Seraph mosaic, Hagia Sophia, Istanbul (photo: Ian Scott)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:Seraphim_in_Hagia_Sofia_(2).jpg"
    },
    {
      "name": "Martin — Belshazzar's Feast",
      "credit": "John Martin, Belshazzar's Feast",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Belshazzar%27s_Feast_-_Google_Art_Project.jpg"
    },
    {
      "name": "Bauernfeind — Jerusalem at Sunrise",
      "credit": "Gustav Bauernfeind, Jerusalem from the Mount of Olives at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gustav_bauernfeind_jerusalem_from_the_mount_of_olives_at_sunrise2024_CKS_22668_0027_000(093010).jpg"
    },
    {
      "name": "Dou — Old Woman with a Candle",
      "credit": "Gerrit Dou, Old Woman at a Window with a Candle (The Leiden Collection)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gerrit_Dou_-_Old_Woman_at_a_Window_with_a_Candle_-_GD-103_-_Leiden_Collection.jpg"
    },
    {
      "name": "Ciseri — Ecce Homo",
      "credit": "Antonio Ciseri, Ecce Homo",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Antonio_Ciseri_-_Ecce_Homo.jpg"
    }
  ]
};
