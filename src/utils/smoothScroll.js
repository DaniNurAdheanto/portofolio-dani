import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const smoothScrollTo = (target, options = {}) => {
  if (!target) return;

  const defaultOptions = {
    duration: 1,
    ease: "power2.out",
  };

  const finalOptions = { ...defaultOptions, ...options };

  gsap.to(window, {
    scrollTo: target,
    ...finalOptions,
  });
};

