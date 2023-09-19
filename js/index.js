import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
import * as selectors from "./selectors.js";

//===========>> Swiper in tool section <<============//
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 25,
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
selectors.dropDownMenu.addEventListener("mouseleave", () => {
  selectors.dropDownMenu.style.display = "none";
});
// ==========================================================//

//========>> toggle btn <<==============//
selectors.togglebtn.addEventListener("click", () => {
  selectors.togglebtn.classList.toggle("active");
  selectors.monthlyBilled.classList.toggle("active");
  selectors.yearlyBilled.classList.toggle("active");
});

//==========>> Testimonials swiper <<==================//
const swiperTestimonial = new Swiper(".myTestimonialSwiper", {
  slidesPerView: 2,
  speed: 1000,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
});

const swiperTestimonialTablet = new Swiper(".myTestimonialSwiperTablet", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
});

//==========>> Feature Box swiper <<===============//
const FeatureBoxSwiper = new Swiper(".FeatureboxSwiper", {
  slidesPerView: 1,
  speed: 800,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".nextFeatureBtn",
    prevEl: ".prevFeatureBtn",
  },
});

//=============>> Feature slide Box swiper <<=============//
const FeatureSlideSwiper = new Swiper(".FeatureSlideSwiper", {
  slidesPerView: 3,
  spaceBetween: 26,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nextSlideBtn",
    prevEl: ".prevSlideBtn",
  },
});

//=============>> Feature slide Box swiper mobile <<=============//
const FeatureSlideSwiperMobile = new Swiper(".FeatureSlideSwiperMobile", {
  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nextSlideBtn",
    prevEl: ".prevSlideBtn",
  },
});

//==========>> Vertical Swiper <<===================//
const verticalSwiper = new Swiper(".VerticalSwiper", {
  direction: "vertical",
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//==========>> accordion <<===========//
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// ==============>> menu bar <<================//
selectors.bars.addEventListener("click",()=>{
  selectors.bars.classList.toggle("active");
  selectors.nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  selectors.bars.classList.remove("active");
  selectors.nav_menu.classList.remove("active");
}))

//=============>> footer accordion <<=================//
const footerAcardion = document.getElementsByClassName("footerAcardion");
for (let i = 0; i < footerAcardion.length; i++) {
  footerAcardion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let footerPanel = this.nextElementSibling;
    if (footerPanel.style.maxHeight) {
      footerPanel.style.maxHeight = null;
    } else {
      footerPanel.style.maxHeight = footerPanel.scrollHeight + 'px';
    }
  });
}
