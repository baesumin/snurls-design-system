import { recipe } from "@vanilla-extract/recipes";
import { createVar, keyframes } from "@vanilla-extract/css";
import { classes, vars } from "@snurls/themes";

export const enableColorVariant = createVar(); // 500
export const hoverColorVariant = createVar(); // 600 outline 50 ghost 50
export const activeColorVariant = createVar(); // 700 outline 100 ghost 100
export const borderColorVariant = createVar(); // 700 outline 100 ghost 100

export const buttonStyle = recipe({
  base: {
    position: "relative",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
    borderRadius: vars.box.radii.lg,
    gap: 4,
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
    // @ts-ignore
    "&[disabled]": {
      background: vars.colors.$scale.gray[300],
      color: vars.colors.$scale.gray[500],
      cursor: "not-allowed",
    },
    '&[data-loading="true"]': {
      "& span": {
        opacity: 0,
      },
      textOverflow: "clip",
    },
    "&:focus-visible": {
      outline: "none",

      boxShadow: vars.box.shadows.outline,
    },
  },
  variants: {
    size: {
      "56": {
        height: "3.5rem",
        padding: "16px 24px",
      },
      "48": {
        height: "3rem",
        padding: "12px 20px",
      },
      "40": {
        height: "2.5rem",
        padding: "12px 10px",
      },
    },
    variant: {
      solid: {
        ...classes.typography.text.headline2,
        backgroundColor: enableColorVariant,
        color: vars.colors.$scale.gray[50],

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      outline: {
        ...classes.typography.text.headline2,
        border: `1px solid ${borderColorVariant}`,
        color: vars.colors.$scale.gray[800],

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      ghost: {
        color: vars.colors.$scale.info[200],
        background: vars.colors.$static.light.color.white,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: vars.colors.$scale.gray[200],
        },
        "&[disabled]": {
          background: vars.colors.$static.light.color.white,
          color: vars.colors.$scale.gray[400],
          cursor: "not-allowed",
        },
      },
    },
  },
});

export const spanStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    size: {
      "56": {
        // ...classes.typography.text.headline2,
      },
      "48": {
        // ...classes.typography.text.headline2,
      },
      "40": {
        // ...classes.typography.text.headline2,
      },
    },
  },
});

const spinKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinnerStyle = recipe({
  base: {
    position: "absolute",
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: "inline-block",
    borderTop: "2px solid currentcolor",
    borderRight: "2px solid currentcolor",
    borderBottom: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderRadius: "50%",
  },
  variants: {
    size: {
      "56": {
        width: vars.typography.fontSize[12],
        height: vars.typography.fontSize[12],
        left: `calc(50% - ${vars.typography.fontSize[12]}/2)`,
      },
      "48": {
        width: vars.typography.fontSize[12],
        height: vars.typography.fontSize[12],
        left: `calc(50% - ${vars.typography.fontSize[12]}/2)`,
      },
      "40": {
        width: vars.typography.fontSize[12],
        height: vars.typography.fontSize[12],
        left: `calc(50% - ${vars.typography.fontSize[12]}/2)`,
      },
    },
  },
});
