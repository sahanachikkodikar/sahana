

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".place__card", {
  ...scrollRevealOption,
  interval: 500,
});
      // JavaScript to handle showing and hiding login/register forms
      document.getElementById('login-btn').addEventListener('click', function() {
        document.getElementById('login-overlay').style.display = 'flex';
      });

      document.getElementById('register-btn').addEventListener('click', function() {
        document.getElementById('register-overlay').style.display = 'flex';
      });

      document.getElementById('close-login-btn').addEventListener('click', function() {
        document.getElementById('login-overlay').style.display = 'none';
      });

      document.getElementById('close-register-btn').addEventListener('click', function() {
        document.getElementById('register-overlay').style.display = 'none';
      });
  
// main.js
/*
document.addEventListener("DOMContentLoaded", function() {
  const loginSection = document.querySelector('.login-form-section');
  const registerSection = document.querySelector('.register-form-section');

  // Add event listeners for toggling if needed
  // Example: document.querySelector('#login-link').addEventListener('click', () => {
  //     loginSection.style.display = 'block';
  //     registerSection.style.display = 'none';
  // });
  // Example: document.querySelector('#register-link').addEventListener('click', () => {
  //     loginSection.style.display = 'none';
  //     registerSection.style.display = 'block';
  // });
});/

document.addEventListener('DOMContentLoaded', function () {
  // JavaScript to handle form toggles and submissions if necessary
});
*/
