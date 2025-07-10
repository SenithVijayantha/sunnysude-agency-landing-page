import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

// split all elements with the class "split" into words and characters
let split = SplitText.create(".split", { type: "words, chars" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1,
  y: 100, // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05, // 0.05 seconds between each
});

// Hamburger menu toggle for 'X' animation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("is-open");
});
