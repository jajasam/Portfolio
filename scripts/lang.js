const langBtns = document.querySelectorAll(".lang-btn")

langBtns.forEach(btn => btn.addEventListener('click', () => {
    if(btn.dataset.lang) {

    }
}))

//when window is refresh 

function translateToFrench () {
    document.title = "Portfolio de Jana Samson";
}

//display projects