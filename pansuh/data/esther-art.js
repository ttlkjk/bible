// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/esther)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "1": [["move","art-castagno",[956,38,590,407]]],
    "19": [["move","art-toilet",[1106,448,440,316]]],
    "52": [["move","art-mordecai",[1006,38,540,336]]]
  },
  beats: {
    "0": [["photo","art-castagno","img/art/esther/castagno.jpg",[786,38,760,524],{"tilt":-1.2,"caption":"카스타뇨 〈에스더 왕후〉"}]],
    "5": [["photo","art-persepolis","img/art/esther/persepolis.jpg",[1106,488,440,291],{"tilt":1.2,"caption":"만국의 문 전경"}]],
    "10": [["photo","art-normand","img/art/esther/normand.jpg",[1036,488,510,287],{"tilt":-1.2,"caption":"노먼드 〈폐위된 와스디〉"}]],
    "13": [["photo","art-lippi","img/art/esther/lippi.jpg",[896,38,650,233],{"tilt":1.2,"caption":"리피 〈선택받은 에스더〉"}]],
    "17": [["photo","art-toilet","img/art/esther/toilet.jpg",[946,351,600,431],{"tilt":-1.2,"caption":"데 헬더 〈에스더의 단장〉"}]],
    "22": [["photo","art-leroy","img/art/esther/leroy.jpg",[806,38,740,480],{"tilt":1.2,"caption":"르루아 〈하만과 모르드개〉"}]],
    "28": [["photo","art-moeyaert","img/art/esther/moeyaert.jpg",[1046,38,500,323],{"tilt":-1.2,"caption":"무예르트 〈사무엘과 사울〉"}]],
    "39": [["photo","art-rembrandt","img/art/esther/rembrandt.jpg",[1056,38,490,373],{"tilt":1.2,"caption":"렘브란트 〈에스더의 잔치〉"}]],
    "44": [["photo","art-triumph","img/art/esther/triumph.jpg",[846,468,700,314],{"tilt":-1.2,"caption":"드 트루아 〈모르드개의 개선〉"}]],
    "48": [["photo","art-steen","img/art/esther/steen.jpg",[836,38,710,535],{"tilt":1.2,"caption":"스테인 〈왕과 에스더와 하만〉"}]],
    "51": [["photo","art-mordecai","img/art/esther/mordecai.jpg",[816,38,730,454],{"tilt":-1.2,"caption":"데 헬더 〈에스더와 모르드개〉"}]],
    "57": [["photo","art-purim","img/art/esther/purim.jpg",[906,38,640,413],{"tilt":1.2,"caption":"데 헬더 〈부림절 편지〉"}]]
  },
  credits: [
    {
      "name": "카스타뇨 〈에스더 왕후〉",
      "credit": "Andrea del Castagno, Queen Esther, from the Cycle of Famous Men and Women (photo: Sailko)",
      "license": "CC BY 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Andrea_del_castagno,_Ciclo_degli_uomini_e_donne_illustri,_1448-51,_03_regina_esther.jpg"
    },
    {
      "name": "만국의 문 전경",
      "credit": "Persepolis, Gate of All Nations (photo: Carole Raddato)",
      "license": "CC BY-SA 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Gate_of_All_Nations_also_known_as_the_Gate_of_Xerxes,_Persepolis,_Iran_(47779515191).jpg"
    },
    {
      "name": "노먼드 〈폐위된 와스디〉",
      "credit": "Ernest Normand, Queen Vashti Deposed",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Normand,_Ernest_-_Queen_Vashti_deposed_-_1890.jpg"
    },
    {
      "name": "리피 〈선택받은 에스더〉",
      "credit": "Filippino Lippi, Esther Chosen by Ahasuerus",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Filippino_Lippi_-_Esther_choisie_par_Assu%C3%A9rus_-_Google_Art_Project.jpg"
    },
    {
      "name": "데 헬더 〈에스더의 단장〉",
      "credit": "Aert de Gelder, Esther's Toilet",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Aert_de_Gelder_003.jpg"
    },
    {
      "name": "르루아 〈하만과 모르드개〉",
      "credit": "Paul Leroy, Haman and Mordecai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Paul_Alexander_Leroy_-_Haman_and_Mordecai,_1884.jpg"
    },
    {
      "name": "무예르트 〈사무엘과 사울〉",
      "credit": "Claes Moeyaert, Samuel and Saul",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Claes_Moeyaert_-_Samuel_and_Saul.jpg"
    },
    {
      "name": "렘브란트 〈에스더의 잔치〉",
      "credit": "Rembrandt, Ahasuerus and Haman at the Feast of Esther",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz_van_Rijn_-_Ahasuerus,_Haman_and_Esther_-_Google_Art_Project.jpg"
    },
    {
      "name": "드 트루아 〈모르드개의 개선〉",
      "credit": "Jean-François de Troy, The Triumph of Mordecai (The Metropolitan Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:The_Triumph_of_Mordecai_MET_DP-14284-001.jpg"
    },
    {
      "name": "스테인 〈왕과 에스더와 하만〉",
      "credit": "Jan Steen, Esther, Ahasuerus, and Haman",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:%27Esther,_Ahasuerus,_and_Haman%27,_oil_on_canvas_painting_by_Jan_Steen,_c._1668.JPG"
    },
    {
      "name": "데 헬더 〈에스더와 모르드개〉",
      "credit": "Aert de Gelder, Esther and Mordecai",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Aert_de_Gelder_004.jpg"
    },
    {
      "name": "데 헬더 〈부림절 편지〉",
      "credit": "Aert de Gelder, Esther and Mordecai (Gemäldegalerie Alte Meister, Dresden; photo: Dguendel)",
      "license": "CC BY 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Dresden,_Gem%C3%A4ldegalerie_Alte_Meister,_Arent_de_Gelder,_Esther_und_Mardochai.jpg"
    }
  ]
};
