import type { MouseEvent } from "react";

export const debounce = (func: Function, wait: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, wait);
  };
};

const scrollToElementFromEvent = (target: HTMLElement) => {
  const elementId = target.getAttribute("property") || "";
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
    if (element === document.getElementById("hero")) {
      document.addEventListener(
        "scrollend",
        () => {
          document.getElementById("chat")?.focus();
        },
        { once: true },
      );
    }
  }
};

export const onClickScroll = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  e.preventDefault();
  e.stopPropagation();

  const debouncedScroll = debounce(scrollToElementFromEvent, 100);
  debouncedScroll(target);
};
