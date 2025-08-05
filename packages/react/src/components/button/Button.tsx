import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  activeColorVariant,
  borderColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { vars } from "@snurls/themes";
import { useButton } from "../../hooks/button";

interface Props extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { buttonProps } = useButton(props);
  const {
    variant = "solid",
    size = "md",
    color = "primary",
    leftIcon,
    rightIcon,
    isLoading,
    children,
    style,
    ref,
  } = props;

  const enableColor =
    variant === "solid"
      ? vars.colors.$scale["primary"][400]
      : vars.colors.$scale["gray"][50];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale["primary"][300]
      : vars.colors.$scale["gray"][100];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale["primary"][500]
      : vars.colors.$scale["gray"][500];
  const borderColor =
    variant === "outline" ? vars.colors.$scale["gray"][400] : "";

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
          [borderColorVariant]: borderColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
