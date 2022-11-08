"use strict";

//declarations
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btns");
const hamMenu = document.querySelector(".hamburger-menu");
const mobNav = document.querySelector("#mobile-nav-container");
const mobNavigation = document.querySelector("#mobile-nav");
const navBg = document.querySelector("#nav-bg");
const body = document.querySelector("body");
let currentSlide = 0;

//functions
const init = function () {
  // moving the slides out of screen
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
  });
};
const goTo = function (slide) {
  currentSlide = slide;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
};

// dot slides navigator
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const slide = +btn.dataset.slide;
    btns.forEach((btn) => {
      btn.classList.remove("bg-brightRed");
    });
    btn.classList.add("bg-brightRed");
    goTo(slide);
  });
});

const toggleNav = () => {
  hamMenu.classList.toggle("open");
  mobNav.classList.toggle("hide");
  navBg.classList.toggle("hidden");
};

//Hamburger menu
hamMenu.addEventListener("click", function () {
  toggleNav();
  if (this.classList.contains("open")) {
    console.log("yes");
  } else {
    console.log("er");
  }
});

body.addEventListener("touchstart", function (e) {
  if (e.target != mobNavigation && e.target != navBg) {
    console.log("true");
    console.log(e.target);
  } else {
    console.log("false");
    toggleNav();
  }
});
