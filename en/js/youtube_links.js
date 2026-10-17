// ============================================================================
// 에스라하우스TV (@ezrahousetv) 유튜브 강좌 및 재생목록 연동 데이터
// 노우호 목사님의 성경강좌 및 권별 대표 영상 매핑
// ============================================================================

const EZRA_YOUTUBE_BASE = "https://www.youtube.com/@ezrahousetv";

// 성경 권별 대표 에스라하우스TV 유튜브 영상 & 재생목록 정보
// iframe 임베드용 ID 및 공식 검색 쿼리
const EZRA_YOUTUBE_DATA = {
  channelUrl: "https://www.youtube.com/@ezrahousetv",
  featuredSeries: [
    {
      title: "Ezra Bible Course: Overview and Principles",
      desc: "The great principles of the Ezra Bible read-through that runs through all 66 books, and the thread from the Old Testament to the New",
      youtubeSearch: "에스라하우스 성경강좌 원리 노우호",
      embedId: "videoseries?list=PL_sample_general" 
    },
    {
      title: "Old Testament Panorama (Genesis to Malachi)",
      desc: "An Old Testament read-through that reads God's heart, from the Pentateuch through History to the Prophets",
      youtubeSearch: "에스라하우스 구약강좌 노우호",
      embedId: "videoseries?list=PL_sample_ot"
    },
    {
      title: "The 400-Year Intertestamental Period",
      desc: "The great Ezra House lectures that shed light on the 400 years of silence from Malachi to Matthew",
      youtubeSearch: "에스라하우스 신구약중간사 노우호",
      embedId: "videoseries?list=PL_sample_intertestamental"
    },
    {
      title: "New Testament Panorama (the Four Gospels to Revelation)",
      desc: "The gospel of Jesus Christ, the missionary footsteps of the apostle Paul, and the hope of Revelation",
      youtubeSearch: "에스라하우스 신약강좌 노우호",
      embedId: "videoseries?list=PL_sample_nt"
    }
  ],
  // 권별 추천 검색어 및 바로가기 URL 생성 헬퍼
  getBookYoutubeUrl: function(bookName) {
    const query = encodeURIComponent(`에스라하우스 ${bookName} 노우호 목사`);
    return `https://www.youtube.com/results?search_query=${query}`;
  },
  getChannelSearchUrl: function(keyword) {
    const query = encodeURIComponent(keyword);
    return `https://www.youtube.com/@ezrahousetv/search?query=${query}`;
  }
};
