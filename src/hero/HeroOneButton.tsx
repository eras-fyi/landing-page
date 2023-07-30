import type { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  input: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero tracking-wide text-slate-800 dark:text-slate-100">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl dark:text-slate-300">
      {props.description}
    </div>

    {props.input}
  </header>
);

export { HeroOneButton };
