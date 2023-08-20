import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useState } from "react";

import { onClickScroll } from "@/utils/helpers";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const links = [
  // { label: "About", href: "/" },
  // { label: "Contact", href: "mailto:info@eras.fyi" },
  { label: "How it works", to: "how-it-works" },
  { label: "Blog", to: "blog" },
];

const Hero = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const destinationURL = `https://app.eras.fyi/?q=${encodeURIComponent(
      message.trim(),
    )}`;

    // Redirect to the new site
    window.location.href = destinationURL;
  };

  return (
    <Background className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <Section className="w-full" yPadding="pt-8 sm:py-6" id="hero">
        <NavbarTwoColumns logo={<Logo hero xl />}>
          {links.map((link, index) => (
            <li
              className={index !== links.length - 1 ? "mr-5" : ""}
              key={link.label}
            >
              <div
                className="cursor-pointer text-slate-600 transition hover:text-slate-800 dark:text-slate-300 hover:dark:text-slate-50"
                onClick={onClickScroll}
                property={link.to}
              >
                {link.label}
              </div>
            </li>
          ))}
        </NavbarTwoColumns>
      </Section>
      <Section className="w-full grow" yPadding="py-4">
        <HeroOneButton
          title={
            <>
              {"Your AI-powered\n"}
              <span className="text-yellow-600 drop-shadow dark:text-yellow-400">
                Personal Finance Guidance
              </span>
            </>
          }
          description={
            <>
              <ol className="mx-auto w-fit list-inside list-image-checkmark space-y-3 text-left text-lg">
                <li> Make a quick, personalised action plan</li>
                <li> Get weekly guidance to ensure you follow through</li>
                <li> Celebrate when you&apos;ve achieved your goals!</li>
              </ol>
            </>
          }
          input={
            <form onSubmit={handleSubmit}>
              <label htmlFor="chat" className="sr-only">
                Your message
              </label>
              <div className="relative rounded-lg ">
                <textarea
                  id="chat"
                  rows={2}
                  className="block w-full rounded-lg border  border-slate-300 bg-white p-5 pr-10 text-lg font-medium tracking-wide text-slate-800 shadow-xl transition placeholder:text-base placeholder:font-medium placeholder:tracking-normal placeholder:text-slate-500 focus:border-blue-500 focus:shadow-md focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 placeholder:sm:text-lg"
                  placeholder="Describe the situation you’re in. More details are better."
                  spellCheck="false"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="absolute bottom-1.5 right-1.5 cursor-pointer rounded-full p-2  shadow-md hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-slate-600 md:bottom-3 md:right-3 md:p-2"
                >
                  <svg
                    className="h-5 w-5 rotate-90 fill-blue-600 dark:fill-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 20"
                  >
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          }
        />
      </Section>
      <Section className="mx-auto w-full grow" yPadding="py-6">
        <div className="px-2 text-center text-lg dark:text-slate-300 sm:text-xl">
          Join our community of users looking to improve their financial habits!
        </div>
      </Section>
      <Section yPadding="py-4">
        <div className="mx-auto w-full">
          <div
            className="group flex cursor-pointer flex-col items-center"
            onClick={onClickScroll}
            property="how-it-works"
          >
            <div className="text-xl font-normal text-slate-700 group-hover:animate-pulse-short dark:text-slate-200 md:text-2xl">
              Why use <b>eras</b>?
            </div>
            <img
              className="mx-auto mt-1 w-6 group-hover:motion-safe:animate-bounce-slow sm:w-12"
              src={`${router.basePath}/assets/images/arrow-down.svg`}
              alt="Arrow down image"
            />
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
