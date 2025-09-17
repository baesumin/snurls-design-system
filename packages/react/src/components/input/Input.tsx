import { useState } from "react";
import * as styles from "./style.css";
import { InputProps } from "./types";

interface Props extends InputProps {
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  value: propValue = "",
  error = false,
  disabled = false,
  onChange,
  placeholder,
  ref,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(propValue);

  // 엑스 아이콘 클릭 → 값 삭제
  const handleClear = () => {
    setValue("");
    onChange?.("");
  };

  // 입력값 변경
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  // 상태에 따라 동적 스타일 선택
  let inputClass = styles.input;
  if (error) inputClass = `${inputClass} ${styles.inputError}`;
  else if (disabled) inputClass = `${inputClass} ${styles.inputDisabled}`;
  else if (focused) inputClass = `${inputClass} ${styles.inputFocus}`;

  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        className={inputClass}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {value && !disabled && (
        <button
          className={styles.clearBtn}
          onClick={handleClear}
          tabIndex={-1}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Input;
