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
    display = "flex",
    width,
    backgroundColor,
    margin,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    ...nativeProps
  } = props;

  return createElement(
    as,
    {
      ...nativeProps,
      ref,
      className: clsx([
        BaseStyle,
        // StyleSprinkles(
        //   extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        // ),
        className,
      ]),
      style: {
        display,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.["gray"]?.[800],
        backgroundColor,
        width,
        margin,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        ...style,
      },
    },
    children,
  );
};

export default Flex;
