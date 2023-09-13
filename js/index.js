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