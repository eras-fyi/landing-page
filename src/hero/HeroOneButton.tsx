import type { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  input: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex h-full w-full flex-col text-center">
    <h1 className="whitespace-pre-line text-3xl font-bold leading-relaxed tracking-wide text-slate-800 dark:text-slate-100 sm:text-4xl md:text-5xl md:leading-hero">
      {props.title}
    </h1>
    <div className="my-4 grow-0 text-2xl dark:text-slate-300">
      {props.description}
    </div>
    <div className="my-2">{props.input}</div>
  </header>
);

export { HeroOneButton };
