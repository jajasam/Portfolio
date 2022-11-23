import { frenchContent } from '../lang/frenchContent.js'
import { englishContent } from '../lang/englishContent.js'

const langBtns = document.querySelectorAll(".lang-btn")

langBtns.forEach(btn => btn.addEventListener('click', () => {
    if (btn.dataset.lang === 'fr') {
        window.localStorage.setItem('lang', 'fr');
        translateToFrench()
    } else {
        window.localStorage.setItem('lang', 'en');
        translateToEnglish()
    }

    langBtns.forEach(btn => btn.classList.remove("current"))
    btn.classList.add("current")
}))

window.addEventListener('load', () => {
    const lang = window.localStorage.getItem('lang')
    if (lang == 'fr') {
        translateToFrench();
    } else {
        translateToEnglish();
    }

    langBtns.forEach(btn => btn.classList.remove("current"))
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add("current")

    '[data-id="box1"]'
})

function translateToFrench () {
    document.title = "Portfolio de Jana Samson";

    for (const [key, value] of Object.entries(frenchContent)) {
        document.querySelectorAll(`#${key}`).forEach(elem => elem.textContent = `${value}`)
    }
}

function translateToEnglish () {
    document.title = "Jana Samson's Portfolio";

    for (const [key, value] of Object.entries(englishContent)) {
        document.querySelectorAll(`#${key}`).forEach(elem => elem.textContent = `${value}`)
    }
}