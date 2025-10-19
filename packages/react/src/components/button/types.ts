export type ButtonProps = {
  color?: string;
  backgroundColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: number;
  size?: "56" | "48" | "40";
  variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
