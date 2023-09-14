import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
import * as selectors from "./selectors.js";
//===========>> Swiper in tool section <<============//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});

//==========>> droop Down menu hover <<=======================//
selectors.dropDownMenuLi.addEventListener("mouseover", () => {
  selectors.dropDownMenu.style.display = "flex";
});
selectors.dropDownMenuLi.addEventListener("mouseout", () => {
  selectors.dropDownMenu.style.display = "none";
});
// ==========================================================//

//========>> toggle btn <<==============//
selectors.togglebtn.addEventListener('click',() => {
  selectors.togglebtn.classList.toggle('active');
  selectors.monthlyBilled.classList.toggle('active');
  selectors.yearlyBilled.classList.toggle('active');
})

//==========>> Testimonials swiper <<==================//
var swiperTestimonial = new Swiper(".myTestimonialSwiper", {
  slidesPerView: 2,
  speed: 1000,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn"
  }
});

//==========>> Feature Box swiper <<===============//
var FeatureBoxSwiper = new Swiper(".FeatureboxSwiper", {
  slidesPerView: 1,
  speed:800,
  grid: {
    rows: 2
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".nextFeatureBtn",
    prevEl: ".prevFeatureBtn"
  }
});

//=============>> Feature slide Box swiper <<=============//
var FeatureSlideSwiper = new Swiper(".FeatureSlideSwiper", {
  slidesPerView: 3,
  spaceBetween: 26,
  loop: true,
  speed: 1000,
  autoplay:{
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nextSlideBtn",
    prevEl: ".prevSlideBtn",
  },
});