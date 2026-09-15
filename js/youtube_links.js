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
      title: "에스라 성경강좌 총론 및 원리",
      desc: "성경 66권을 관통하는 에스라 성경통독의 대원리와 구약-신약의 맥",
      youtubeSearch: "에스라하우스 성경강좌 원리 노우호",
      embedId: "videoseries?list=PL_sample_general" 
    },
    {
      title: "구약 성경 파노라마 (창세기~말라기)",
      desc: "모세오경부터 역사서, 예언서까지 하나님의 마음을 읽는 구약 통독",
      youtubeSearch: "에스라하우스 구약강좌 노우호",
      embedId: "videoseries?list=PL_sample_ot"
    },
    {
      title: "신구약 중간사 400년",
      desc: "말라기부터 마태복음까지 400년 침묵기를 밝히는 에스라하우스 명강의",
      youtubeSearch: "에스라하우스 신구약중간사 노우호",
      embedId: "videoseries?list=PL_sample_intertestamental"
    },
    {
      title: "신약 성경 파노라마 (사복음서~요한계시록)",
      desc: "예수 그리스도의 복음과 사도 바울의 선교 발자취, 요한계시록의 소망",
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
