import { useState } from "react";
import * as styles from "./style.css";
import { InputProps } from "./types";

interface Props extends InputProps {
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = ({
  value: propValue = "",
  error = false,
  disabled = false,
  onChange,
  placeholder,
  isMultiLine = false,
  height,
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  // 상태에 따라 동적 스타일 선택
  let inputClass = styles.input;
  if (error) inputClass = `${inputClass} ${styles.inputError}`;
  else if (disabled) inputClass = `${inputClass} ${styles.inputDisabled}`;
  else if (focused) inputClass = `${inputClass} ${styles.inputFocus}`;

  // 공통 props
  const commonProps = {
    className: inputClass,
    value,
    onChange: handleChange,
    placeholder,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 20,
      paddingRight: isMultiLine ? 20 : 52,
      height,
      ...(isMultiLine && {
        resize: "none" as const,
        overflow: "hidden" as const,
      }),
    },
  };

  return (
    <div className={styles.wrapper}>
      {isMultiLine ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...commonProps}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type="text"
          {...commonProps}
        />
      )}
      {value && !disabled && !isMultiLine && (
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
