import { useCallback, useState } from "react";
import { ToggleProps, UseToggleReturn } from "./types";

const useToggle = ({ isSelected = false }: ToggleProps): UseToggleReturn => {
  const [toggle, setToggle] = useState<boolean>(isSelected);

  const handleToggle = useCallback(() => {
    setToggle((prevState) => !prevState);
  }, []);

  return {
    isSelected: toggle,
    setSelected: setToggle,
    toggle: handleToggle,
  };
};

export default useToggle;
