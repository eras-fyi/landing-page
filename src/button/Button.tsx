import className from "classnames";

type IButtonProps = {
  primary?: boolean;
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    "inline-block rounded-md text-center shadow-xl hover:shadow transition mb-4":
      true,
    "text-lg font-semibold py-2 px-4": !props.xl,
    "font-extrabold text-xl py-4 px-6": props.xl,
    "text-white bg-yellow-500 hover:bg-yellow-600": props.primary,
    "text-slate-100 bg-yellow-400 hover:bg-yellow-500": !props.primary,
  });

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
