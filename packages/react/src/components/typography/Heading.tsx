import { vars } from "@snurls/themes";
import { createElement, ReactElement, Ref } from "react";
import { textStyle } from "./style.css";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";

interface Props extends HeadingProps {
  ref?: Ref<HTMLElement>;
}

const Heading = (props: Props): ReactElement => {
  const {
    as = "h1",
    ref,
    fontSize,
    background,
    color = "gray",
    children,
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
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

export default Heading;
