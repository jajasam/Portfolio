const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuModal = document.querySelector(".menu-modal");
const body = document.querySelector("body");
const navLinksMobile = document.querySelectorAll(".menu-modal li");

hamburgerMenu.addEventListener("click", () => {
    menuModal.classList.toggle("active");
    hamburgerMenu.classList.toggle("close")

    body.style.overflow = menuModal.classList.contains('active') ? 'hidden' : 'scroll';
})

navLinksMobile.forEach(link => link.addEventListener("click", () => {
    menuModal.classList.toggle("active");
    body.style.overflow = "scroll";
}))