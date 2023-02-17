const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".nav-container");
const navList = document.querySelector(".nav-list-btn");
const navListSec = document.querySelector(".nav-list-btn-second");
const navListThir = document.querySelector(".nav-list-btn-third");
const subnav = document.querySelector(".subnav");
const subnavBelow = document.querySelector(".subnav-below");
const subnavLast = document.querySelector(".subnav-last");

mobileNav.addEventListener("click", function(){
  primaryNav.hasAttribute("data-visible") 
  ?  mobileNav.setAttribute("aria-expanded", false)
  :  mobileNav.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
})

navList.addEventListener("click", function(){
  subnav.hasAttribute("data-visible")
  ? navList.setAttribute("aria-expanded", false)
  : navList.setAttribute("aria-expanded", true);
  subnav.toggleAttribute("data-visible");
})

navListSec.addEventListener("click", function(){
  subnavBelow.hasAttribute("data-visible")
  ? navListSec.setAttribute("aria-expanded", false)
  : navListSec.setAttribute("aria-expanded", true);
  subnavBelow.toggleAttribute("data-visible");
})

navListThir.addEventListener("click", function(){
  subnavLast.hasAttribute("data-visible")
  ? navListThir.setAttribute("aria-expanded", false)
  : navListThir.setAttribute("aria-expanded", true);
  subnavLast.toggleAttribute("data-visible");
})