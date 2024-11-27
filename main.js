import './style.css';
import { Fancybox } from "@fancyapps/ui";

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/bundle';

Fancybox.bind("[data-fancybox ='gallery']", { });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  breakpoints: {
    768 : {
      slidesPerView :2,
    },
    0 :{
      slidesPerView :1
    }
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Initialization for ES Users
import {
  Tab,
  Offcanvas,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Tab , Offcanvas, Ripple  });