import { classes } from "@snurls/themes";
import { AsElementProps, StyleProps } from "../core/types";
import type { CSSProperties } from "react";

export type TextProps = AsElementProps &
  StyleProps & {
    variant?: keyof typeof classes.typography.text;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };
