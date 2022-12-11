const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuModal = document.querySelector(".menu-modal");
const body = document.querySelector("body");
const navLinksMobile = document.querySelectorAll(".menu-modal li")
const settingsBtn = document.querySelectorAll(".menu-modal .settings *")

function closeMenu () {
    menuModal.classList.toggle("active");
    body.style.overflow = "scroll";
    hamburgerMenu.classList.toggle("close")
}

hamburgerMenu.addEventListener("click", () => {
    menuModal.classList.toggle("active");
    hamburgerMenu.classList.toggle("close")

    body.style.overflow = menuModal.classList.contains('active') ? 'hidden' : 'scroll';
    body.classList.toggle('overlay');
})

navLinksMobile.forEach(link => link.addEventListener("click", closeMenu))
settingsBtn.forEach(btn => btn.addEventListener("click", closeMenu))