import type { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : "py-16"
    }`}
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

export { Section };
