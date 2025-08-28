import { globalFontFace, globalStyle } from "@vanilla-extract/css";

const suit = "SUIT";

globalFontFace(suit, {
  src: `url("../assets/fonts/SUIT-Bold.woff2") format('woff2')`,
  fontWeight: 700, // Bold
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(suit, {
  src: `url("../assets/fonts/SUIT-SemiBold.woff2") format('woff2')`,
  fontWeight: 600, // SemiBold
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(suit, {
  src: `url("../assets/fonts/SUIT-Medium.woff2") format('woff2')`,
  fontWeight: 500, // Medium
  fontStyle: "normal",
  fontDisplay: "swap",
});

// body 태그에 기본 폰트를 적용합니다.
globalStyle("body", {
  fontFamily: suit,
});

// 다른 컴포넌트에서 사용할 수 있도록 폰트 이름을 export 합니다.
export const fonts = {
  body: suit,
};
