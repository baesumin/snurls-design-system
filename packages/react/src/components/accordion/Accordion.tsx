import { useState } from "react";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { clsx } from "clsx";
import { accordionStyle } from "./style.css";

interface Props extends AccordionProps {
  ref?: React.Ref<HTMLDivElement>;
}

const Accordion = (props: Props) => {
  const { defaultActiveItems = [], children, ref, className, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        activeItems,
        setActiveItem: handleSetActiveItem,
      }}
    >
      <div {...rest} ref={ref} className={clsx([accordionStyle, className])}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
