export const HOST_CDN = `https://english.yanadoocdn.com/upload/yanadoo/new/promotion/tabpackagefive/2023/`;
export const HOST_CDN_UPDATE = `https://english.yanadoocdn.com/upload/yanadoo/new/promotion/tabpackageAir/2024/`;

const tabPackageAirValues = {
  metaInfo: {
    title: "평생수강 + iPad Air6",
    description:
      "걱정 없이 평생 수강하고 iPad Air6 받아요! 영어회화 기초부터 원어민과의 대화까지 올 케어 공부에 최적화된 iPad Air6도 챙기세요.",
    site_name: "하루 10분 야나두",
    imgsrc: `https://english.yanadoocdn.com/upload/yanadoo/new/banner/img_tabpackagesix_og.png`,
  },
  keyvisualBanner: {
    backgroundColor: "#2371ff",
    maxWidth: 1024,
    pc: `https://english.yanadoocdn.com/upload/yanadoo/new/promotion/etc/img_ready-summer_pc.png`,
    mo: `https://english.yanadoocdn.com/upload/yanadoo/new/promotion/etc/img_ready-summer_m.png`,
  },
  ipadColorValue: [
    {
      pc: `${HOST_CDN_UPDATE}tabpackagesix_ipad_space.png`,
      mo: `${HOST_CDN_UPDATE}m_tabpackagesix_ipad_space.png`,
      alt: "아이패드 스페이스 그레이 컬러",
      color: "스페이스 그레이",
      colorEn: "gray",
    },
    {
      pc: `${HOST_CDN_UPDATE}tabpackagesix_ipad_blue.png`,
      mo: `${HOST_CDN_UPDATE}m_tabpackagesix_ipad_blue.png`,
      alt: "아이패드 블루 컬러",
      color: "블루",
      colorEn: "blue",
    },
    {
      pc: `${HOST_CDN_UPDATE}tabpackagesix_ipad_purple.png`,
      mo: `${HOST_CDN_UPDATE}m_tabpackagesix_ipad_purple.png`,
      alt: "아이패드 퍼플 컬러",
      color: "퍼플",
      colorEn: "purple",
    },
    {
      pc: `${HOST_CDN_UPDATE}tabpackagesix_ipad_star.png`,
      mo: `${HOST_CDN_UPDATE}m_tabpackagesix_ipad_star.png`,
      alt: "아이패드 스타라이트 컬러",
      color: "스타라이트",
      colorEn: "star",
    },
  ],
  infoBoxList: [
    { text: "M2칩 탑재로 엄청난 속도와 막강 퍼포먼스 구현" },
    { text: "40% 더 빠른 Neural Engine으로 강력한 AI" },
    { text: "반사 방지 코팅과 True Tone 기술로 눈이 편안한 화면" },
    { text: "P3의 넓은 색영역으로 이미지를 더욱 생생하게" },
    { text: "넉넉한 배터리로 최대 10시간까지 강의 시청 가능" },
    { text: "스테이지 매니저 기능으로 새로운 방식의 멀티태스킹까지" },
    { text: "가로 방향 스테레오 스피커로 2배 더 깊은 저음" },
  ],
};
export default tabPackageAirValues;
