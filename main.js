const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".nav-container");
const navContent = document.querySelectorAll(".nav-list-content");
const subnavAll = document.querySelectorAll(".subnavAll");

mobileNav.addEventListener("click", function () {
  navListsVisibility(primaryNav, mobileNav);
});

window.addEventListener("scroll", () => {
  const attr = primaryNav.hasAttribute("data-visible");
  let offset = pageYOffset;
  if (attr && offset > 50) {
    primaryNav.removeAttribute("data-visible");
    mobileNav.setAttribute("aria-expanded", false);
  }
});

navContent.forEach((content) => {
  const currSubnav = content.querySelector(".subnavAll");
  const btn = content.querySelector("button");
  content.addEventListener("mouseover", () => {
    currSubnav.toggleAttribute("data-hovered", true);
    btn.setAttribute("aria-hovered", true);
    content.addEventListener("mouseleave", () => {
      currSubnav.removeAttribute("data-hovered");
      btn.setAttribute("aria-hovered", false);
    });
    subnavAll.forEach((el) => {
      if (el !== currSubnav) {
        el.removeAttribute("data-hovered");
      }
    });
  });
});

navContent.forEach((content, index) => {
  const btn = content.querySelector("button");
  const subnav = content.querySelector(".subnavAll");
  const topPosition = 100 + index * 45;
  btn.addEventListener("click", () => {
    navListsVisibility(subnav, btn);
    subnavPosition(subnav);
    navContent.forEach((el) => {
      const elBtn = el.querySelector("button");
      const elSubnav = el.querySelector(".subnavAll");
      if (el !== content) {
        elBtn.removeAttribute("aria-expanded");
        elSubnav.removeAttribute("data-visible");
        subnavPosition(elSubnav);
      }
    });
  });

  function subnavPosition(subnav) {
    if (subnav.hasAttribute("data-visible")) {
      subnav.style.top = `${topPosition}px`;
    } else {
      subnav.style.top = "70px";
    }
  }
});

function navListsVisibility(nav, btn) {
  nav.hasAttribute("data-visible")
    ? btn.setAttribute("aria-expanded", false)
    : btn.setAttribute("aria-expanded", true);
  nav.toggleAttribute("data-visible");
}
