import type { ReactNode } from "react";

type IBackgroundProps = {
  children: ReactNode;
  className: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.className}>{props.children}</div>
);

export { Background };
