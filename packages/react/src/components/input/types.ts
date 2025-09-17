export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "disabled" | "placeholder"
> & {
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (v: string) => void;
  placeholder?: string;
};
