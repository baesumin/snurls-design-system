import { createElement, ReactElement, Ref } from "react";
import { TextProps } from "./types";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@snurls/themes";
import { textStyle } from "./style.css";

interface Props extends TextProps {
  ref?: Ref<HTMLElement>;
}

const Text = (props: Props): ReactElement => {
  const {
    as = "p",
    color,
    background,
    ref,
    className,
    style,
    children,
    variant,
  } = props;

  return createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          variant,
        }),
        className,
      ]),
      style: {
        color: color ?? vars.colors.$scale?.["gray"]?.[800],
        background,
        ...style,
      },
    },
    children,
  );
};

export default Text;
