import Link from "next/link";
import { type FormEvent, useState } from "react";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const links = [
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Our Mission", href: "/" },
];

const Hero = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const destinationURL = `https://app.eras.fyi/?q=${encodeURIComponent(
      message.trim(),
    )}`;

    // Redirect to the new site
    window.location.href = destinationURL;
  };

  return (
    <Background color="bg-gray-100 dark:bg-gray-900">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {links.map((link, index) => (
            <li
              className={index !== links.length - 1 ? "mr-5" : ""}
              key={link.label}
            >
              <Link
                className="text-slate-600 hover:text-slate-800 dark:text-slate-200 hover:dark:text-slate-50"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {"Your AI "}
              <span className="text-yellow-400">Personal Finance Plan</span>
            </>
          }
          description="No more finance stress - 
        quick, personalised financial plans are here."
          input={
            <form onSubmit={handleSubmit}>
              <label htmlFor="chat" className="sr-only">
                Your message
              </label>
              <div className="relative flex w-full flex-row items-center rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea
                  id="chat"
                  rows={1}
                  className="block w-full rounded-lg border border-gray-300 bg-white p-5 pr-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Describe the situation you’re in. More details are better."
                  spellCheck="false"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="absolute bottom-1.5 right-1.5 cursor-pointer rounded-full p-2  text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 md:bottom-3 md:right-3 md:p-2"
                >
                  <svg
                    className="h-5 w-5 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
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
    </Background>
  );
};

export { Hero };
