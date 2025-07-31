import { Ref } from "react";
import { DividerProps } from "./types";
import { vars } from "@snurls/themes";

interface Props extends DividerProps {
  ref?: Ref<HTMLHRElement>;
}

const Divider = ({
  ref,
  color = "gray",
  variant = "solid",
  size = 1,
  orientation = "horizontal",
  ...rest
}: Props) => {
  const borderStyles =
    orientation === "horizontal"
      ? {
          width: "100%",
          borderBottomWidth: size,
          borderBottomStyle: variant,
          borderBottomColor: color
            ? vars.colors.$scale?.[color]?.[200]
            : undefined,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }
      : {
          height: "100%",
          borderLeftWidth: size,
          borderLeftStyle: variant,
          borderLeftColor: color
            ? vars.colors.$scale?.[color]?.[200]
            : undefined,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRightWidth: 0,
        };

  return (
    <hr
      {...rest}
      ref={ref}
      style={{
        ...borderStyles,
        ...rest.style,
      }}
    />
  );
};

export default Divider;
