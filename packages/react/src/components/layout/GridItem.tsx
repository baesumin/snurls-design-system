import { ReactElement, Ref, createElement } from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridItemProps } from "./types";
import { vars } from "@snurls/themes";

interface Props extends GridItemProps {
  ref?: Ref<HTMLElement>;
}

const GridItem = (props: Props): ReactElement => {
  const {
    ref,
    as = "div",
    color,
    background,
    children,
    area,
    colEnd,
    colStart,
    colSpan,
    rowEnd,
    rowStart,
    rowSpan,
  } = props;

  const style = {
    gridArea: area,
    ...(colStart !== undefined && colEnd !== undefined
      ? {
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
        }
      : colSpan !== undefined
        ? {
            gridColumn: `span ${colSpan}`,
          }
        : {}),

    ...(rowStart !== undefined && rowEnd !== undefined
      ? {
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
        }
      : rowSpan !== undefined
        ? {
            gridRow: `span ${rowSpan}`,
          }
        : {}),

    color: color && vars.colors.$scale?.["gray"]?.[800],
    background,
    ...props.style,
  };

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
      style,
    },
    children,
  );
};

export default GridItem;
