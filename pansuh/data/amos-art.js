// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/amos)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "2": [["move","art-athens",[616,38,390,390]]],
    "5": [["move","art-herbert",[1066,488,480,289]]],
    "41": [["move","art-samaria",[1026,38,520,347]]]
  },
  beats: {
    "0": [["photo","art-athens","img/art/amos/athens.jpg",[482,38,530,530],{"tilt":-1.2,"caption":"아테네 대성당 〈아모스〉"}]],
    "4": [["photo","art-herbert","img/art/amos/herbert.jpg",[836,350,710,427],{"tilt":1.2,"caption":"허버트 〈목동 다윗〉"}]],
    "8": [["photo","art-wrath","img/art/amos/wrath.jpg",[786,38,760,490],{"tilt":-1.2,"caption":"마틴 〈진노의 큰 날〉"}]],
    "17": [["photo","art-bassano","img/art/amos/bassano.jpg",[996,38,550,361],{"tilt":1.2,"caption":"바사노 〈나사로와 부자〉"}]],
    "21": [["photo","art-bonifacio","img/art/amos/bonifacio.jpg",[886,38,660,309],{"tilt":-1.2,"caption":"피타티 〈부자와 나사로〉"}]],
    "26": [["photo","art-tissot","img/art/amos/tissot.jpg",[1156,38,390,532],{"tilt":1.2,"caption":"티소 〈솔로몬의 성전 봉헌〉"}]],
    "32": [["photo","art-sodom","img/art/amos/sodom.jpg",[1006,38,540,344],{"tilt":-1.2,"caption":"마틴 〈소돔과 고모라의 멸망〉"}]],
    "35": [["photo","art-lear","img/art/amos/lear.jpg",[956,358,590,388],{"tilt":1.2,"caption":"리어 〈사해〉"}]],
    "39": [["photo","art-samaria","img/art/amos/samaria.jpg",[786,38,760,507],{"tilt":-1.2,"caption":"로버츠 〈사마리아 원경〉"}]]
  },
  credits: [
    {
      "name": "아테네 대성당 〈아모스〉",
      "credit": "The Prophet Amos, mural, Metropolitan Cathedral of Athens (photo: George E. Koronaios)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Mural_depicting_the_Prophet_Amos_at_the_Cathedral_of_Athens_on_June_4,_2022.jpg"
    },
    {
      "name": "허버트 〈목동 다윗〉",
      "credit": "John Rogers Herbert, David, the Future King of Israel, While a Shepherd at Bethlehem",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Rogers_Herbert_-_David,_the_Future_King_of_Israel,_While_a_Shepherd_at_Bethlehem.jpg"
    },
    {
      "name": "마틴 〈진노의 큰 날〉",
      "credit": "John Martin, The Great Day of His Wrath (Tate)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg"
    },
    {
      "name": "바사노 〈나사로와 부자〉",
      "credit": "Jacopo Bassano, Lazarus and the Rich Man (Cleveland Museum of Art)",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Clevelandart_1939.68.jpg"
    },
    {
      "name": "피타티 〈부자와 나사로〉",
      "credit": "Bonifacio de' Pitati, The Rich Man and Lazarus (Il ricco Epulone), Gallerie dell'Accademia, Venice (photo: Didier Descouens)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Accademia_-_Il_ricco_Epulone_by_Bonifacio_De%27_Pitati_cat.291.jpg"
    },
    {
      "name": "티소 〈솔로몬의 성전 봉헌〉",
      "credit": "Solomon Dedicates the Temple, after James Tissot, painted by Michel Simonidy (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:La_d%C3%A9dicace_par_Salomon_du_temple_(1_Kings_10_2)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "마틴 〈소돔과 고모라의 멸망〉",
      "credit": "John Martin, The Destruction of Sodom and Gomorrah",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:John_Martin_-_Sodom_and_Gomorrah.jpg"
    },
    {
      "name": "리어 〈사해〉",
      "credit": "Edward Lear, The Dead Sea, 16 and 17 April 1858",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Edward_Lear_-_The_Dead_Sea,_16_and_17_April_1858_-_Google_Art_Project.jpg"
    },
    {
      "name": "로버츠 〈사마리아 원경〉",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    }
  ]
};
