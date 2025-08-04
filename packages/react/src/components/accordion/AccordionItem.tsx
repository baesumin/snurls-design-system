import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { AccordionItemProps } from "./types";
import { clsx } from "clsx";
import { accordionItemStyle } from "./style.css";

interface Props extends AccordionItemProps {
  ref?: React.Ref<HTMLDivElement>;
}

const AccordionItem = (props: Props) => {
  const { itemName, children, ref, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      const element = child as ReactElement<any>;
      return cloneElement(element, { ...element.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};

export default AccordionItem;
