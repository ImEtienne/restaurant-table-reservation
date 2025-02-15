"use strict";
/**
 * YEAR AUTO
 */
const year = document.getElementById('year');
const date = new Date();
year.innerHTML = date.getFullYear();

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

/*Btn toggle screen mobile */
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});


/**
 * scroll fixed header
 */
document.addEventListener('DOMContentLoaded', function () {
  const mainHead = document.querySelector('.entete');

  const hamburgerLines = document.querySelectorAll('.hamburger .line');

  const logo = document.querySelector('#logo a');

  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    if (window.scrollY > 0) {
      mainHead.classList.add('fixed-header');
      if (window.scrollY > 550) {
        changeNavLinksColor('#333');
        logo.style.color = "#333";
        changeHamburgerColor('#333');
      } else {
        changeNavLinksColor('#fff');
        logo.style.color = "#fff";
        changeHamburgerColor('#fff');
      }
    } else {
      mainHead.classList.remove('fixed-header');
    }
  }

  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  // Sélectionne tous les liens dans la barre de navigation
  const navLinks = document.querySelectorAll('.nav-bar .nav-links a');

  // Fonction pour changer la couleur des liens
  function changeNavLinksColor(newColor) {
    navLinks.forEach(link => {
      link.style.color = newColor;
    });
  }

  // Fonction pour changer la couleur de l'hamburger (background des lignes)
  function changeHamburgerColor(newColor) {
    hamburgerLines.forEach(line => {
      line.style.backgroundColor = newColor;
    });
  }
});