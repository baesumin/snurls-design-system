import { Ref } from "react";
import { SpacingProps } from "./types";

interface Props extends SpacingProps {
  ref?: Ref<HTMLDivElement>;
}

const Spacing = ({
  ref,
  orientation = "vertical",
  size = 4,
  ...rest
}: Props) => {
  const spacingStyles =
    orientation === "vertical"
      ? { height: size, width: 1 }
      : { width: size, height: 1 };

  return (
    <div
      {...rest}
      ref={ref}
      style={{
        ...spacingStyles,
        ...rest.style,
      }}
    />
  );
};

export default Spacing;
