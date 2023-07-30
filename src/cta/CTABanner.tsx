import type { ReactNode } from "react";

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-blue-100 p-4 text-center dark:bg-slate-600 sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl ">
      <div className="font-medium text-slate-800 dark:text-slate-100">
        {props.title}
      </div>
      <div className="my-4 font-semibold text-blue-500 dark:text-blue-400">
        {props.subtitle}
      </div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
