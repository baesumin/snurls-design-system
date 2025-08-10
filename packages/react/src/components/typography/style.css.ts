import { classes } from "@snurls/themes";
import { recipe } from "@vanilla-extract/recipes";
import { fonts } from "../../styles/global.css";

export const textStyle = recipe({
  base: {
    fontFamily: fonts.body, // 2. 여기에 전역 폰트를 적용합니다.
  },

  variants: {
    variant: {
      ...classes.typography.text,
    },
    defaultVariants: {
      variant: "body1",
    },
  },
});
