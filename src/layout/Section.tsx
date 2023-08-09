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
            <h2 className="text-3xl font-medium text-slate-800 dark:text-slate-100">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-2xl text-slate-700 dark:text-slate-200 md:px-20">
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
