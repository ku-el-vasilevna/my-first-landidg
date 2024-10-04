const mobileMenu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.onclick = handleClick;
const navLinks = mobileMenu.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.onclick = handleClick;
});

function handleClick(event) {
  mobileMenu.classList.toggle("open");
  menuBtn.classList.toggle("open");
}
