// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/daniel)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "0": [["photo","art-exile","img/art/daniel/exile.jpg",[856,38,690,449],{"tilt":-1.2,"caption":"벤데만 〈슬퍼하는 포로들〉"}]],
    "6": [["photo","art-michelangelo","img/art/daniel/michelangelo.jpg",[1126,38,420,532],{"tilt":1.2,"caption":"미켈란젤로 〈다니엘〉"}]],
    "10": [["photo","art-hauslab","img/art/daniel/hauslab.jpg",[1146,38,400,533],{"tilt":-1.2,"caption":"하우슬라프 〈다니엘의 해몽〉"}]],
    "13": [["photo","art-statue","img/art/daniel/statue.jpg",[686,188,340,468],{"tilt":1.2,"caption":"베아투스 〈신상과 돌〉"}]],
    "18": [["photo","art-bellows","img/art/daniel/bellows.jpg",[716,188,310,409],{"tilt":-1.2,"caption":"파트나 화파 〈대장장이〉"}]],
    "26": [["photo","art-icon","img/art/daniel/icon.jpg",[1126,38,420,540],{"tilt":1.2,"caption":"사드락·메삭·아벳느고 이콘"}]],
    "27": [["photo","art-giordano","img/art/daniel/giordano.jpg",[1116,38,430,539],{"tilt":-1.2,"caption":"조르다노 〈풀무불의 세 사람〉"}]],
    "32": [["photo","art-roundel","img/art/daniel/roundel.jpg",[1026,38,520,521],{"tilt":1.2,"caption":"풀 먹는 느부갓네살 유리화"}]],
    "37": [["photo","art-rembrandt","img/art/daniel/rembrandt.jpg",[546,38,480,382],{"tilt":-1.2,"caption":"렘브란트 〈벨사살의 연회〉"}]],
    "43": [["photo","art-ishtar","img/art/daniel/ishtar.jpg",[1076,358,470,353],{"tilt":1.2,"caption":"이슈타르 문"}]],
    "45": [["photo","art-riviere","img/art/daniel/riviere.jpg",[796,38,750,483],{"tilt":-1.2,"caption":"리비에르 〈사자 굴의 다니엘〉"}]],
    "58": [["photo","art-gottlieb","img/art/daniel/gottlieb.jpg",[1136,38,410,530],{"tilt":1.2,"caption":"고틀리프 〈욤 키푸르의 기도〉"}]]
  },
  credits: [
    {
      "name": "벤데만 〈슬퍼하는 포로들〉",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (c. 1832, Wallraf-Richartz-Museum, Cologne)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "미켈란젤로 〈다니엘〉",
      "credit": "Michelangelo, The Prophet Daniel (Sistine Chapel ceiling, Vatican)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Michelangelo_Buonarroti_026.jpg"
    },
    {
      "name": "하우슬라프 〈다니엘의 해몽〉",
      "credit": "Franz von Hauslab the Younger, Daniel Interprets Nebuchadnezzar's Dream (Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Daniel_interprets_Nebuchadnezzar%27s_Dream_MET_DP804327.jpg"
    },
    {
      "name": "베아투스 〈신상과 돌〉",
      "credit": "Valcavado Beatus (10th century), The Statue and the Stone, f. 42v",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Valcavado_Beatus_f._042v_-_Dream_of_Nebuchadnezzar.jpg"
    },
    {
      "name": "파트나 화파 〈대장장이〉",
      "credit": "Company School (Patna, India), A Blacksmith in Front of His Fire with the Bellows (early 19th century)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:A_blacksmith_in_front_of_his_fire_with_one_hand_on_a_chain_attached_to_the_bellows.jpg"
    },
    {
      "name": "사드락·메삭·아벳느고 이콘",
      "credit": "Shadrach, Meshach and Abednego in the Furnace, icon (16th century)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Shadrach,_Meshach,_and_Abednego_icon.jpg"
    },
    {
      "name": "조르다노 〈풀무불의 세 사람〉",
      "credit": "Luca Giordano, Shadrach, Meshach and Abednego in the Furnace",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Shadrach,_Meshach,_and_Abednego_in_the_Furnace).jpeg"
    },
    {
      "name": "풀 먹는 느부갓네살 유리화",
      "credit": "Nebuchadnezzar Eats Grass among the Cattle, stained-glass roundel (Rijksmuseum, Amsterdam)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Nebukadnezar_eet_gras_onder_de_koeien,_BK-2016-99-2.jpg"
    },
    {
      "name": "렘브란트 〈벨사살의 연회〉",
      "credit": "Rembrandt, Belshazzar's Feast (c. 1636-38, National Gallery, London)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt-Belsazar.jpg"
    },
    {
      "name": "이슈타르 문",
      "credit": "Ishtar Gate of Babylon, Pergamon Museum, Berlin (photo: Kurt Kaiser)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Ishtar_Gate_in_the_Pergamon_Museum_-.jpg"
    },
    {
      "name": "리비에르 〈사자 굴의 다니엘〉",
      "credit": "Briton Rivière, Daniel's Answer to the King (1890, Manchester Art Gallery)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Briton_Riviere_-_Daniel%27s_Answer_to_the_King_(Manchester_Art_Gallery).jpg"
    },
    {
      "name": "고틀리프 〈욤 키푸르의 기도〉",
      "credit": "Maurycy Gottlieb, Jews Praying in the Synagogue on Yom Kippur (1878, Tel Aviv Museum of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Maurycy_Gottlieb_-_Jews_Praying_in_the_Synagogue_on_Yom_Kippur.jpg"
    }
  ]
};
