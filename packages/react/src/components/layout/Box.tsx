import { ReactElement, Ref, createElement } from "react";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { BoxProps } from "./types";
import { vars } from "@snurls/themes";

interface Props extends BoxProps {
  ref?: Ref<HTMLElement>;
}

const Box = (props: Props): ReactElement => {
  const {
    as = "div",
    color,
    background,
    ref,
    className,
    style,
    children,
  } = props;

  return createElement(
    as,
    {
      ...props,
      ref: ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...style,
      },
    },
    children,
  );
};

export default Box;
