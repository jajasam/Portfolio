const downArrow = document.querySelector(".down-arrow");

downArrow.addEventListener("click", () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
})