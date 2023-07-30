import type { ReactElement, ReactNode } from "react";
import React, { cloneElement, isValidElement } from "react";

type IFooterIconListProps = {
  children: ReactElement;
};

const FooterIconList = (props: IFooterIconListProps) => {
  const linkList = props.children?.props?.children;

  if (!linkList) {
    return null;
  }

  const totalChildren = React.Children.count(props.children.props.children);

  return (
    <div className="flex flex-wrap">
      {React.Children.map<ReactNode, ReactNode>(
        props.children.props.children,
        (child, index) => {
          if (isValidElement(child)) {
            const clonedChild = child as React.ReactElement;
            return cloneElement(clonedChild, {
              className: `text-gray-500 hover:text-gray-700 ${
                index !== totalChildren - 1 ? "mr-3" : ""
              }`,
            });
          }
          return child;
        },
      )}
    </div>
  );
};
export { FooterIconList };
