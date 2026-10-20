// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/isaiah)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "25": [["move","art-seraph",[1146,478,400,300]]],
    "67": [["move","art-andes",[946,38,600,329]]]
  },
  beats: {
    "5": [["photo","art-deyck","img/art/isaiah/deyck.jpg",[1206,38,340,528],{"tilt":-1.2,"caption":"데이크 〈선지자 이사야〉"}]],
    "9": [["photo","art-schreyer","img/art/isaiah/schreyer.jpg",[956,358,590,373],{"tilt":1.2,"caption":"슈라이어 〈가축 떼와 목동〉"}]],
    "16": [["photo","art-rubens","img/art/isaiah/rubens.jpg",[1136,38,410,533],{"tilt":-1.2,"caption":"루벤스 〈성 이보〉"}]],
    "19": [["photo","art-bauernfeind","img/art/isaiah/bauernfeind.jpg",[946,38,600,391],{"tilt":1.2,"caption":"바우른파인트 〈일출의 예루살렘〉"}]],
    "24": [["photo","art-seraph","img/art/isaiah/seraph.jpg",[826,238,720,540],{"tilt":-1.2,"caption":"하기아 소피아 스랍"}]],
    "36": [["photo","art-nineveh","img/art/isaiah/nineveh.jpg",[976,38,570,335],{"tilt":1.2,"caption":"앗수르 궁전 복원도"}]],
    "39": [["photo","art-belshazzar","img/art/isaiah/belshazzar.jpg",[1016,38,530,355],{"tilt":-1.2,"caption":"마틴 〈벨사살의 연회〉"}]],
    "54": [["photo","art-heemskerck","img/art/isaiah/heemskerck.jpg",[1096,38,450,361],{"tilt":1.2,"caption":"헤임스케르크 〈이사야의 예언〉"}]],
    "57": [["photo","art-candle","img/art/isaiah/candle.jpg",[1136,38,410,528],{"tilt":-1.2,"caption":"다우 〈촛불 든 노파〉"}]],
    "64": [["photo","art-ciseri","img/art/isaiah/ciseri.jpg",[986,38,560,372],{"tilt":1.2,"caption":"치세리 〈보라 이 사람이로다〉"}]],
    "66": [["photo","art-andes","img/art/isaiah/andes.jpg",[786,38,760,416],{"tilt":-1.2,"caption":"처치 〈안데스의 심장〉"}]]
  },
  credits: [
    {
      "name": "데이크 〈선지자 이사야〉",
      "credit": "Barthélemy d'Eyck, The Prophet Isaiah, from the Aix Annunciation (photo: Artshooter)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:WLANL_-_Artshooter_-_De_profeet_Jesaja.jpg"
    },
    {
      "name": "슈라이어 〈가축 떼와 목동〉",
      "credit": "Adolf Schreyer, Herd with a Shepherd Boy Riding a Donkey",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Adolf_Schreyer_Herde_mit_eselreitendem_Hirtenknaben.jpg"
    },
    {
      "name": "루벤스 〈성 이보〉",
      "credit": "Peter Paul Rubens, Saint Ives of Tréguier, Defender of Widows and Orphans (Detroit Institute of Arts)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_Saint_Ives_of_Treguier,_Patron_of_Lawyers,_Defender_of_Widows_and_Orphans_-_64.459_-_Detroit_Institute_of_Arts.jpg"
    },
    {
      "name": "바우른파인트 〈일출의 예루살렘〉",
      "credit": "Gustav Bauernfeind, Jerusalem from the Mount of Olives at Sunrise",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gustav_bauernfeind_jerusalem_from_the_mount_of_olives_at_sunrise2024_CKS_22668_0027_000(093010).jpg"
    },
    {
      "name": "하기아 소피아 스랍",
      "credit": "Seraph mosaic, Hagia Sophia, Istanbul (photo: Ian Scott)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:Seraphim_in_Hagia_Sofia_(2).jpg"
    },
    {
      "name": "앗수르 궁전 복원도",
      "credit": "Assyrian palaces restored, from Austen Henry Layard, The Monuments of Nineveh (1853)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Artist%E2%80%99s_impression_of_Assyrian_palaces_from_The_Monuments_of_Nineveh_by_Sir_Austen_Henry_Layard,_1853.jpg"
    },
    {
      "name": "마틴 〈벨사살의 연회〉",
      "credit": "John Martin, Belshazzar's Feast",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Belshazzar%27s_Feast_-_Google_Art_Project.jpg"
    },
    {
      "name": "헤임스케르크 〈이사야의 예언〉",
      "credit": "Maarten van Heemskerck, The Prophet Isaiah Foretells the Return of the Jews from Exile (Frans Hals Museum)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Maarten_van_Heemskerck_-_Prophet_Isaiah_predicts_the_return_of_the_Jews_from_exile_1560-1565_FHM01_OS-I-173.jpg"
    },
    {
      "name": "다우 〈촛불 든 노파〉",
      "credit": "Gerrit Dou, Old Woman at a Window with a Candle (The Leiden Collection)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gerrit_Dou_-_Old_Woman_at_a_Window_with_a_Candle_-_GD-103_-_Leiden_Collection.jpg"
    },
    {
      "name": "치세리 〈보라 이 사람이로다〉",
      "credit": "Antonio Ciseri, Ecce Homo",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Antonio_Ciseri_-_Ecce_Homo.jpg"
    },
    {
      "name": "처치 〈안데스의 심장〉",
      "credit": "Frederic Edwin Church, The Heart of the Andes",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Church_Heart_of_the_Andes.jpg"
    }
  ]
};
