// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/job)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "33": [["move","art-bendemann",[1026,38,520,338]]]
  },
  beats: {
    "3": [["photo","art-theatre","img/art/job/theatre.jpg",[556,38,490,327],{"tilt":-1.2,"caption":"에피다우로스 극장"}]],
    "6": [["photo","art-bartolomeo","img/art/job/bartolomeo.jpg",[1216,38,330,527],{"tilt":1.2,"caption":"바르톨로메오 〈선지자 욥〉"}]],
    "12": [["photo","art-zahrtmann","img/art/job/zahrtmann.jpg",[926,348,620,384],{"tilt":-1.2,"caption":"자르트만 〈욥과 친구들〉"}]],
    "14": [["photo","art-giordano","img/art/job/giordano.jpg",[896,38,650,454],{"tilt":1.2,"caption":"조르다노 〈욥과 위로자들〉"}]],
    "18": [["photo","art-molnar","img/art/job/molnar.jpg",[976,38,570,495],{"tilt":-1.2,"caption":"몰나르 〈아브라함의 떠남〉"}]],
    "24": [["photo","art-decamps","img/art/job/decamps.jpg",[1166,38,380,531],{"tilt":1.2,"caption":"드캉 〈욥과 친구들〉"}]],
    "31": [["photo","art-bendemann","img/art/job/bendemann.jpg",[846,38,700,456],{"tilt":-1.2,"caption":"벤데만 〈유배지의 슬픔〉"}]],
    "38": [["photo","art-tanner","img/art/job/tanner.jpg",[886,38,660,540],{"tilt":1.2,"caption":"태너 〈욥과 세 친구〉"}]],
    "57": [["photo","art-reef","img/art/job/reef.jpg",[976,38,570,380],{"tilt":-1.2,"caption":"건강한 산호초"}]],
    "61": [["photo","art-restored","img/art/job/restored.jpg",[1066,38,480,456],{"tilt":1.2,"caption":"티소 〈회복된 욥〉"}]]
  },
  credits: [
    {
      "name": "에피다우로스 극장",
      "credit": "Theatre of Epidaurus (photo: Olecorre)",
      "license": "CC BY-SA 3.0",
      "page": "https://commons.wikimedia.org/wiki/File:Theatre_of_Epidaurus_OLC.jpg"
    },
    {
      "name": "바르톨로메오 〈선지자 욥〉",
      "credit": "Fra Bartolomeo, The Prophet Job",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Fra_bartolomeo,_giobbe.jpg"
    },
    {
      "name": "자르트만 〈욥과 친구들〉",
      "credit": "Kristian Zahrtmann, Job and His Friends (Statens Museum for Kunst), detail",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Kristian_Zahrtmann_-_Job_and_His_Friends_-_KMS1661_-_Statens_Museum_for_Kunst.jpg"
    },
    {
      "name": "조르다노 〈욥과 위로자들〉",
      "credit": "Luca Giordano, Job and His Comforters (Smithsonian American Art Museum), detail",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:SAAM-XX105_1.jpg"
    },
    {
      "name": "몰나르 〈아브라함의 떠남〉",
      "credit": "József Molnár, The Departure of Abraham",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Moln%C3%A1r_%C3%81brah%C3%A1m_kik%C3%B6lt%C3%B6z%C3%A9se_1850.jpg"
    },
    {
      "name": "드캉 〈욥과 친구들〉",
      "credit": "Alexandre-Gabriel Decamps, Job and His Friends (Minneapolis Institute of Art)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Alexandre-Gabriel_Decamps_-_Job_and_His_Friends_-_39.48_-_Minneapolis_Institute_of_Arts.jpg"
    },
    {
      "name": "벤데만 〈유배지의 슬픔〉",
      "credit": "Eduard Bendemann, Jews Mourning in Exile (Wallraf-Richartz-Museum, Cologne)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jews_Mourning_in_Exile_-_Eduard_Bendemann_-_Wallraf-Richartz-Museum_%26_Fondation_Corboud-6071_(without_frame).jpg"
    },
    {
      "name": "태너 〈욥과 세 친구〉",
      "credit": "Henry Ossawa Tanner, Job and His Three Friends",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Job_and_his_Three_Friends,_by_Henry_Ossawa_Tanner.jpg"
    },
    {
      "name": "건강한 산호초",
      "credit": "Healthy Reef (photo: Laszlo Ilyes)",
      "license": "CC BY 2.0",
      "page": "https://commons.wikimedia.org/wiki/File:Healthy_Reef_(2067197055).jpg"
    },
    {
      "name": "티소 〈회복된 욥〉",
      "credit": "After James Tissot (painted by Michel Simonidy), Job Restored to Prosperity (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:359.3_402_Job_r%C3%A9tabli_dans_sa_prosp%C3%A9rit%C3%A9_(Job_42_12)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Michel_Simonidy_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    }
  ]
};
