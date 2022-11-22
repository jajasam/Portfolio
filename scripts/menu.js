const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
const menuModal = document.querySelector(".menu-modal");
const body = document.querySelector("body");
const navLinksMobile = document.querySelectorAll(".menu-modal .nav-links li");

hamburgerMenu.addEventListener("click", () => {
    menuModal.classList.toggle("open");
    body.style.overflow = "hidden";
})

hamburgerMenuClose.addEventListener("click", () => {
    menuModal.classList.toggle("open");
    body.style.overflow = "scroll";
})

navLinksMobile.forEach(link => link.addEventListener("click", () => {
    menuModal.classList.toggle("open");
    body.style.overflow = "scroll";
}))