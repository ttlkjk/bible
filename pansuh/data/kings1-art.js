// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/kings1)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {
    "4": [["move","art-abisag",null]],
    "32": [["move","art-francken",[1036,38,510,362]]]
  },
  beats: {
    "1": [["photo","art-abisag","img/art/kings1/abisag.jpg",[1216,38,330,536],{"tilt":-1.2,"caption":"티소 〈다윗과 아비삭〉"}]],
    "6": [["photo","art-glory","img/art/kings1/glory.jpg",[1126,38,420,532],{"tilt":1.2,"caption":"티소 〈영광 중의 솔로몬〉"}]],
    "15": [["photo","art-poussin","img/art/kings1/poussin.jpg",[936,348,610,409],{"tilt":-1.2,"caption":"푸생 〈솔로몬의 재판〉"}]],
    "29": [["photo","art-poynter","img/art/kings1/poynter.jpg",[926,38,620,415],{"tilt":1.2,"caption":"포인터 〈스바 여왕의 방문〉"}]],
    "30": [["photo","art-francken","img/art/kings1/francken.jpg",[826,38,720,511],{"tilt":-1.2,"caption":"프랑컨 〈솔로몬의 우상숭배〉"}]],
    "41": [["photo","art-fragonard","img/art/kings1/fragonard.jpg",[946,38,600,486],{"tilt":1.2,"caption":"프라고나르 〈여로보암의 제사〉"}]],
    "45": [["photo","art-fouquet","img/art/kings1/fouquet.jpg",[1096,38,450,536],{"tilt":-1.2,"caption":"푸케 〈예루살렘 성전 건축〉"}]],
    "53": [["photo","art-sebaste","img/art/kings1/sebaste.jpg",[956,38,590,394],{"tilt":1.2,"caption":"로버츠 〈멀리서 본 사마리아〉"}]],
    "57": [["photo","art-savoldo","img/art/kings1/savoldo.jpg",[1116,38,430,535],{"tilt":-1.2,"caption":"사볼도 〈까마귀와 엘리야〉"}]],
    "68": [["photo","art-iru131","img/art/kings1/iru131.jpg",[1176,38,370,532],{"tilt":1.2,"caption":"팜플로나 성경 〈라못 길르앗〉"}]]
  },
  credits: [
    {
      "name": "티소 〈다윗과 아비삭〉",
      "credit": "James Tissot (design) and Louis de Parys, David and Abishag (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:David_et_Abisag_(1_Kings_1_3)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Louis_de_Parys_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "티소 〈영광 중의 솔로몬〉",
      "credit": "James Tissot (design) and Georges Bertin Scott, Solomon in His Glory (photo: Phillip Medhurst)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Salomon_dans_sa_gloire_(1_Chronicles_29_23)_%E2%80%A2_invenit_James_Tissot_%E2%80%A2_pinxit_Georges_Bertin_Scott_%E2%80%A2_excudit_Maurice_de_Brunoff_apud_Philip_de_Vere_%E2%80%A2_praesentat_Phillip_Medhurst.jpg"
    },
    {
      "name": "푸생 〈솔로몬의 재판〉",
      "credit": "Nicolas Poussin, The Judgement of Solomon",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Le_Jugement_de_Salomon_-_1649_-_Nicolas_Poussin_-_Louvre_-_INV_7277_;_MR_2316_(2).jpg"
    },
    {
      "name": "포인터 〈스바 여왕의 방문〉",
      "credit": "Edward John Poynter, The Visit of the Queen of Sheba to King Solomon",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Sir_Edward_John_Poynter_-_The_visit_of_the_Queen_of_Sheba_to_King_Solomon_-_Google_Art_ProjectFXD.jpg"
    },
    {
      "name": "프랑컨 〈솔로몬의 우상숭배〉",
      "credit": "Frans Francken the Younger, The Idolatry of Solomon",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Frans_Francken_the_Younger_-_The_Idolatry_of_Solomon_-_71.PB.42_-_J._Paul_Getty_Museum.jpg"
    },
    {
      "name": "프라고나르 〈여로보암의 제사〉",
      "credit": "Jean-Honoré Fragonard, Jeroboam Sacrificing to the Idols",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Jean-Honor%C3%A9_Fragonard_-_Jeroboam_Offering_Sacrifice_for_the_Idol_-_WGA08049.jpg"
    },
    {
      "name": "푸케 〈예루살렘 성전 건축〉",
      "credit": "Jean Fouquet, The Building of the Temple of Jerusalem (Antiquités judaïques)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Construction_du_Temple_de_J%C3%A9rusalem.jpg"
    },
    {
      "name": "로버츠 〈멀리서 본 사마리아〉",
      "credit": "David Roberts, Distant View of Sebaste, Ancient Samaria",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:David_roberts_ra_distant_view_of_sebaste_ancient_samaria112734).jpg"
    },
    {
      "name": "사볼도 〈까마귀와 엘리야〉",
      "credit": "Giovanni Girolamo Savoldo, Elijah Fed by the Raven",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Giovanni_Girolamo_Savoldo,_Elijah_Fed_by_the_Raven,_c._1510,_NGA_46134.jpg"
    },
    {
      "name": "팜플로나 성경 〈라못 길르앗〉",
      "credit": "Pamplona Bible (c. 1200), fol. 131v (Ahab and Jehoshaphat at Ramoth-gilead; a prophet before Ahab)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Iru%C3%B1eko_Biblia_-_Augsburg_-_Pid_6993141_131v.jpg"
    }
  ]
};
