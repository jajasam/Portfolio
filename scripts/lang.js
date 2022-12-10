import { frContent } from '../lang/fr.js';
import { enContent } from '../lang/en.js';

const langBtnsContainer = document.querySelectorAll('.lang-btns')

langBtnsContainer.forEach(container => container.innerHTML = 
    `<p 
        class="lang-btn" 
        data-lang="fr">
        FR
    </p>
    <p 
        class="lang-btn"
        data-lang="en">
        EN
    </p>`
)

const langBtns = document.querySelectorAll(".lang-btn")

langBtns.forEach(btn => btn.addEventListener('click', () => {
    window.location.reload()
    if (btn.dataset.lang === 'fr') {
        window.localStorage.setItem('lang', 'fr');
        translate('fr')
    } else {
        window.localStorage.setItem('lang', 'en');
        translate('en')
    }

    langBtns.forEach(btn => btn.classList.remove("current"))
    btn.classList.add("current")
}))

window.addEventListener('load', () => {
    const lang = window.localStorage.getItem('lang')
    translate(lang);
})

function translate(lang) {
    for (const [key, value] of Object.entries(lang === 'en' ? enContent : frContent)) {
        document.querySelectorAll(`#${key}`).forEach(elem => elem.textContent = `${value}`)
    }

    const resume = document.getElementById("resume-link"); 
    if (lang === 'en') {
        resume.href = './resume/Jana-Samson-Resume.pdf'
    } else [
        resume.href = './resume/Jana-Samson-CV.pdf'
    ]

    //update lang btns
    langBtns.forEach(btn => btn.classList.remove("current"))
    document.querySelectorAll(`[data-lang="${lang || 'en'}"]`)?.forEach(btn => btn.classList.add("current"))
}