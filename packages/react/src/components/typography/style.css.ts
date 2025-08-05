import { classes } from "@snurls/themes";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  variants: {
    variant: {
      ...classes.typography.text,
    },
    defaultVariants: {
      variant: "body1",
    },
  },
});
