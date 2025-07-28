import { Ref, createElement } from "react";
import { AsElementProps } from "../core/types";

export interface BoxProps extends AsElementProps {
  ref?: Ref<HTMLElement>;
}

const Box = (props: BoxProps) => {
  const { as = "div", children } = props;

  return createElement(
    as,
    {
      ...props,
      ref: props.ref,
      className: props.className,
    },
    children,
  );
};

export default Box;
