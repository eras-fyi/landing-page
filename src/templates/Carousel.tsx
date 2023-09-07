import type { ReactNode } from "react";
import React, { useState } from "react";

import { Background } from "@/background/Background";
import { Section } from "@/layout/Section";

export type Slide = {
  src: ReactNode;
  label: string;
  description: string;
};

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides: Slide[] = [
    {
      src: (
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/t1F7EEGPQwo?si=7WeIJApoDNTirVV1&start=841"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ),
      label: "",
      description: "",
    },
    {
      src: (
        <img
          src={"/assets/images/retina-atomic-habits-dots.png"}
          className="mx-auto aspect-video w-full object-contain"
          alt="Atomic Habits book cover"
        />
      ),
      label: "",
      description: "",
    },
  ];

  const handlePrev = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <Background className="bg-slate-50 dark:bg-gray-800">
      <Section id="why-us" title="We use the latest in productivity science">
        <div id="carousel" className="relative">
          <div className="absolute inset-x-0 -bottom-12 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 indent-[999px] ${
                  activeSlide === index ? "opacity-100" : "opacity-50"
                } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>

          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative float-left mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                  activeSlide === index ? "" : "hidden"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                {slide.src}
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">{slide.label}</h5>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute inset-y-0 left-[0px] z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={handlePrev}
          >
            <span className="inline-block h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </button>
          <button
            className="absolute inset-y-0 right-[0px] z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={handleNext}
          >
            <span className="inline-block h-6 w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </Section>
    </Background>
  );
};

export { Carousel };
