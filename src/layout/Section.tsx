import type { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  className?: string;
  yPadding?: string;
  id?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const newClassName = `${props.className ? ` ${props.className} ` : " "}${
    props.yPadding || "py-16"
  }`;
  return (
    <div
      className={`mx-auto max-w-screen-lg px-3${newClassName}`}
      id={props.id}
    >
      {(props.title || props.description) && (
        <div className="mb-6 text-center">
          {props.title && (
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100 sm:text-2xl md:text-3xl">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 px-10 text-base text-slate-700 dark:text-slate-200 sm:text-xl md:px-20">
              {props.description}
            </div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };
