import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const registerScrollAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero-title",
      start: "top 80%",
    },
  });

  gsap.from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".hero-subtitle",
      start: "top 85%",
    },
  });
};
