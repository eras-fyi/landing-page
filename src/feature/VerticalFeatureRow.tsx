import className from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FormEventHandler } from "react";

import { Button } from "../button/Button";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonPrimary?: boolean;
  buttonOnClick?: FormEventHandler<HTMLAnchorElement>;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={`${verticalFeatureClass}`}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
          {props.title}
        </h3>
        <div className="mt-6 text-xl leading-9 dark:text-slate-200">
          {props.description}
        </div>
        {props.buttonText && props.buttonLink && (
          <div className="whitespace-no-wrap mx-auto my-6">
            <Link href={props.buttonLink} onClick={props.buttonOnClick}>
              <Button primary={props.buttonPrimary}>{props.buttonText}</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
