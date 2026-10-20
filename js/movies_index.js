// 대하 MOVIE — 판서 강의를 명화와 해설로 옮긴 영화 목록 (유튜브 '일부 공개').
// 영화를 하나 올릴 때마다 강의 순서대로 한 줄을 더한다. 썸네일은 유튜브에 올린 것을 그대로 가져온다.
//   id: 판서 강의 id · title: 화면 제목 · subtitle: 한 줄 소개 · minutes: 길이(분)
//   youtube: 영상 ID (https://youtu.be/<ID>) · pansuh: 칠판 강의 페이지
window.MOVIES = [
  { id: "genesis", title: "창세기", subtitle: "네 사건과 네 사람", minutes: 37, youtube: "QJWlFiJbIiY", pansuh: "pansuh/genesis.html" },
  { id: "exodus", title: "출애굽기", subtitle: "이집트 탈출과 시내산 언약", minutes: 10, youtube: "mRfrwso4N-g", pansuh: "pansuh/exodus.html" },
  { id: "leviticus", title: "레위기", subtitle: "생명과 평강의 언약, 거룩한 백성의 법", minutes: 14, youtube: "3Yzi_jtZ-GA", pansuh: "pansuh/leviticus.html" },
  { id: "numbers", title: "민수기", subtitle: "광야 훈련기, 불평은 몇 번?", minutes: 14, youtube: "DWSoUZ7lZQA", pansuh: "pansuh/numbers.html" },
  { id: "deuteronomy", title: "신명기", subtitle: "모세의 고별 설교, 쉐마 이스라엘", minutes: 10, youtube: "0_grTZ-3RZY", pansuh: "pansuh/deuteronomy.html" },
  { id: "joshua", title: "여호수아", subtitle: "가나안 정복, 기생 라합, 나와 내 집은", minutes: 6, youtube: "1aDzUavtdHw", pansuh: "pansuh/joshua.html" },
  { id: "judges", title: "사사기", subtitle: "왕이 없으므로, 각각 소견에 옳은 대로", minutes: 12, youtube: "Zh5iDNu3wbI", pansuh: "pansuh/judges.html" },
  { id: "ruth", title: "룻기", subtitle: "비어 돌아온 나오미, 보리밭의 러브 스토리", minutes: 9, youtube: "fKiXPLqHt2I", pansuh: "pansuh/ruth.html" },
  { id: "samuel1", title: "사무엘상", subtitle: "나실인 사무엘, 무너지는 사울, 도망자 다윗", minutes: 16, youtube: "_UXZXKzLh58", pansuh: "pansuh/samuel1.html" },
  { id: "samuel2", title: "사무엘하", subtitle: "하나님께 묻는 다윗, 밧세바 사건, 그 후에 이 일이 있으니라", minutes: 13, youtube: "K4ce46FhhUo", pansuh: "pansuh/samuel2.html" },
  { id: "kings1", title: "열왕기상", subtitle: "듣는 마음의 솔로몬, 둘로 나뉜 나라, 엘리야와 아합", minutes: 17, youtube: "IkMDF2MEFi4", pansuh: "pansuh/kings1.html" },
  { id: "kings2-1", title: "열왕기하 1~14장", subtitle: "엘리사의 이적, 예후의 반란, 악녀 아달랴", minutes: 13, youtube: "tSlqtbJmq20", pansuh: "pansuh/kings2-1.html" },
  { id: "jonah", title: "요나", subtitle: "선지서 다시 보기, 다시스로 도망간 요나, 박넝쿨", minutes: 7, youtube: "Ngac_u89NoM", pansuh: "pansuh/jonah.html" },
  { id: "amos", title: "아모스", subtitle: "정의의 선지자, 상아 궁전의 사치, 공법을 물같이", minutes: 8, youtube: "ABCmcakaWJ4", pansuh: "pansuh/amos.html" },
  { id: "hosea", title: "호세아", subtitle: "음란한 아내 고멜, 힘써 여호와를 알자, 사랑의 줄", minutes: 13, youtube: "xeHixl1YNOc", pansuh: "pansuh/hosea.html" },
  { id: "joel", title: "요엘", subtitle: "엄마 같은 예언자, 옷 말고 마음을 찢어라, 성령을 부어 주리니", minutes: 8, youtube: "NiOMgPWWAdA", pansuh: "pansuh/joel.html" },
  { id: "kings2-15", title: "열왕기하 15~16장", subtitle: "반역 또 반역, 앗수르에 매달린 아하스, 베껴 온 제단", minutes: 5, youtube: "Cb3lN334wDc", pansuh: "pansuh/kings2-15.html" },
  { id: "micah", title: "미가", subtitle: "땅의 높은 곳을 밟으신다, 가죽을 벗기는 지도자, 베들레헴에서 나실 이", minutes: 9, youtube: "JF8tbxsiMz4", pansuh: "pansuh/micah.html" },
  { id: "isaiah", title: "이사야", subtitle: "희한한 사명, 내가 여기 있나이다, 내 백성을 위로하라", minutes: 16, youtube: "vieUMKtiFpc", pansuh: "pansuh/isaiah.html" },
];
