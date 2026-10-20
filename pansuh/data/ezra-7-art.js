// 칠판에 붙이는 명화. 대하 MOVIE(판서강좌/movie/ezra-7)에서 가져왔고 movie/tools/board_art.js가 만든다 — 손으로 고치지 말 것.
// 판서 문장 번호(0부터) 기준. before: 그 문장 판서 앞에, beats: 뒤에 더할 판서 동작. credits: 칠판 아래 '명화 출처'.
window.BOARD_ART = {
  before: {

  },
  beats: {
    "4": [["photo","art-tomb","img/art/ezra-7/tomb.jpg",[1186,38,360,540],{"tilt":-1.2,"caption":"아닥사스다 1세 무덤"}]],
    "9": [["photo","art-codex","img/art/ezra-7/codex.jpg",[1156,38,390,539],{"tilt":1.2,"caption":"아미아티누스 성경 〈에스라〉"}]],
    "15": [["photo","art-coin","img/art/ezra-7/coin.jpg",[1006,38,540,540],{"tilt":-1.2,"caption":"바사 금화 다릭"}]],
    "21": [["photo","art-dou","img/art/ezra-7/dou.jpg",[1166,38,380,531],{"tilt":1.2,"caption":"다우 〈기도하는 노인〉"}]],
    "26": [["photo","art-constable","img/art/ezra-7/constable.jpg",[936,38,610,444],{"tilt":-1.2,"caption":"컨스터블 〈비구름과 바다〉"}]],
    "34": [["photo","art-ruisdael","img/art/ezra-7/ruisdael.jpg",[886,38,660,483],{"tilt":1.2,"caption":"라위스달 〈폐허가 된 성문〉"}]]
  },
  credits: [
    {
      "name": "아닥사스다 1세 무덤",
      "credit": "Tomb of Artaxerxes I, Naqsh-e Rustam (photo: Bernard Gagnon)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Tomb_of_Artaxerxes_I,_Naqsh-e_Rustam.jpg"
    },
    {
      "name": "아미아티누스 성경 〈에스라〉",
      "credit": "Ezra the Scribe, Codex Amiatinus, fol. 5r (Biblioteca Medicea Laurenziana, Florence; photo: Gennadii Saus i Segura)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Codex_Amiantinus._Firenze,_Biblioteca_Medicea_Laurenziana,_Amiat.1,_fol._5r.jpg"
    },
    {
      "name": "바사 금화 다릭",
      "credit": "Gold daric of a Persian king, 500-400 BC (FAU Erlangen; photo: ArchaiOptix)",
      "license": "CC BY-SA 4.0",
      "page": "https://commons.wikimedia.org/wiki/File:Persia_-_unidentified_king_-_500-400_BC_-_gold_dareikos_-_Persian_king_-_incusum_-_Erlangen_FAU_AS_H_197_-_01.jpg"
    },
    {
      "name": "다우 〈기도하는 노인〉",
      "credit": "Gerrit Dou, Old Man Praying (The Leiden Collection)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Gerrit_Dou_-_Old_Man_Praying_-_GD-107_-_Leiden_Collection.jpg"
    },
    {
      "name": "컨스터블 〈비구름과 바다〉",
      "credit": "John Constable, Seascape Study with Rain Cloud (Royal Academy of Arts)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Constable_-_Seascape_Study_with_Rain_Cloud.jpg"
    },
    {
      "name": "라위스달 〈폐허가 된 성문〉",
      "credit": "Jacob van Ruisdael, A Ruined Castle Gateway (National Gallery, London)",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:A_Ruined_Castle_Gateway.jpg"
    }
  ]
};
