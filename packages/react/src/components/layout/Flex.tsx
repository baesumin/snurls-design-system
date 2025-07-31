import { ReactElement, Ref, createElement } from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { FlexProps } from "./types";
import { vars } from "@snurls/themes";

interface Props extends FlexProps {
  ref?: Ref<HTMLElement>;
}

const Flex = (props: Props): ReactElement => {
  const {
    as = "div",
    color,
    background,
    ref,
    className,
    style,
    children,
    align,
    basis,
    direction,
    grow,
    justify,
    wrap,
    gap,
    shrink,
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
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

export default Flex;
