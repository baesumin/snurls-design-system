import { ReactElement, Ref, createElement } from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridProps } from "./types";
import { vars } from "@snurls/themes";

interface Props extends GridProps {
  ref?: Ref<HTMLElement>;
}

const Grid = (props: Props): ReactElement => {
  const {
    ref,
    as = "div",
    color,
    background,
    children,
    autoColumns,
    autoFlow,
    autoRows,
    columnGap,
    column,
    gap,
    row,
    rowGap,
    templateColumns,
    templateRows,
    templateAreas,
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
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

export default Grid;
