import "@/assets/scss/style.scss";

export const metadata = {
  title: "포트폴리오 사이트 만들기 🥺 Next-Site",
  description:
    "한가지 사이트를 다양한 프레임워크를 통해 만들어 보는 포트폴리오 사이트입니다.",
  keywords: [
    "포트폴리오",
    "portfolio",
    "리액트",
    "react.js",
    "뷰",
    "vue.js",
    "넥스트",
    "next.js",
    "웹스토리보이",
    "webstoryboy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="assets/img/arrow.svg" />
      <body>{children}</body>
    </html>
  );
}
