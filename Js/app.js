"use strict";
const btn = document.querySelector(".bton");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) btn.style.display = "flex";
  else btn.style.display = "none";
}

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*Btn toogle screen mobile */
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});
