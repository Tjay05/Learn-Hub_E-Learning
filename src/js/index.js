"use strict";
// import Typed from "typed.js";

//SCROLL_REVEAL  USING  LIBRARY
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 800,
  delay: 400,
});
const revealTop = {
  distance: "50%",
  origin: "top",
};
transiton: "ease-in-out";
const revealRight = {
  distance: "50%",
  origin: "right",
  intervaL: 600,
};
const revealImgRight = {
  delay: 600,
  distance: "150%",
  origin: "right",
  easing: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
};
const revealBottom = {
  delay: 200,
  origin: "bottom",
  interval: 200,
};

ScrollReveal().reveal(".header__animation", revealTop);
ScrollReveal().reveal(".header__img", revealImgRight);
ScrollReveal().reveal(".courses__details", revealBottom);

const typed = new Typed(".typed", {
  strings: ["Skills", "Career", "Value"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  cursorChar: "",
  loop: true,
});
