import className from "classnames";
import type { MouseEvent } from "react";

type IButtonProps = {
  primary?: boolean;
  xl?: boolean;
  children: string;
  onClick?: (e: MouseEvent) => void;
  property?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    "inline-block rounded-md text-center shadow-xl hover:shadow transition mb-4 cursor-pointer":
      true,
    "text-lg font-semibold py-2 px-4": !props.xl,
    "font-extrabold text-xl py-4 px-6": props.xl,
    "text-white bg-yellow-600 hover:bg-yellow-700": props.primary,
    "text-slate-800 bg-yellow-400 hover:bg-yellow-500": !props.primary,
  });

  return (
    <div className={btnClass} onClick={props.onClick} property={props.property}>
      {props.children}
    </div>
  );
};

export { Button };
