import { projects } from './data/projects.js'

const skillsContainer = document.querySelector(".skills_container");
const projectsContainer = document.querySelector(".projects_container");
const langBtn = document.querySelector(".lang-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
const menuModal = document.querySelector(".menu-modal");
const body = document.querySelector("body");
const navLinksMobile = document.querySelectorAll(".menu-modal .nav-links li");
const downArrow = document.querySelector(".down-arrow");
const cursor = document.querySelector(".cursor");


let language = 'en';
const projectsInCurrentLang = projects[0][language];

const skills = ["HTML","CSS", "JavaScript", "React", "Tailwind", "VSCode", "Git", "GitHub", "Bitbucket", "Jira", "Figma", "Accessibility", "Responsive Design"];

function displaySkills () {
    let markup = "";

    for (let i = 0; i < skills.length; i++) {
        markup += `
            <div class="skill">
                <img src="./logos/skills/${skills[i]}.png" alt="${skills[i]}">
                <h4>${skills[i]}</h4>
            </div>`
    }
    skillsContainer.innerHTML = markup;
};

function displayProjects () {
    let markup = projectsContainer.innerHTML;

    for (let i = 0; i < projectsInCurrentLang.length; i++) {
        const {title, description, linkToDemo, linkToCode, preview, comingSoon} = projectsInCurrentLang[i];

        markup +=  `
        <div class="project ${comingSoon ? "coming-soon" : ""}  hide-from-top">
            <img src="${preview}" class="project-preview" />
            ${
                comingSoon ?
                "<span class='ribbon'>Coming Soon</span>" : ""
            }
            <div class="project-infos">
                <h4>${title}</h4>
                <p>${description}</p>
                <div class="project_btns">
                ${
                    !comingSoon ?
                        `<a target="_blank" href="${linkToDemo}" class="btn demo_btn">Demo</a>
                        <a target="_blank" href="${linkToCode}" class="btn code_btn">Code</a>` : ""
                }
                </div>
            </div> 
        </div>`
    }

    projectsContainer.innerHTML = markup;
};
 
displaySkills();
displayProjects();

function setLanguage() {
    langBtn.textContent = language === "en" ? "FR" : "EN";
}

langBtn.addEventListener("click", setLanguage)
hamburgerMenu.addEventListener("click", () => {
    menuModal.style.display = "block";
    body.style.overflow = "hidden";
})

hamburgerMenuClose.addEventListener("click", () => {
    menuModal.style.display = "none";
    body.style.overflow = "scroll";
})

navLinksMobile.forEach(link => link.addEventListener("click", () => {
    menuModal.style.display = "none";
    body.style.overflow = "scroll";
}))

//scroll to about section
downArrow.addEventListener("click", () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
})

//custom cursor
window.addEventListener("mousemove", (e) => {
    if (e.view.screen.availWidth < 768) return;
    cursor.style.display = "block";
    cursor.style.top = `${ e.clientY - 20 }px`;
    cursor.style.left = `${ e.clientX - 20 }px`;
})

//scrolling effects on section heading
const headingsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting) {
            entry.target.classList.remove("hide-from-right");
            entry.target.classList.add("show-from-left");
        } else {
            //if scrolled back up reset effect
    }
}),{
    threshold: '0.1'
}});

document.querySelectorAll('.hide-from-right').forEach((i) => {
    if (i) {
        headingsObserver.observe(i);
    }
});


//scrolling effects on section content
const sectionContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting) {
        if(entry.target.classList.contains("hide-from-top")) {
            entry.target.classList.remove("hide-from-top");
            entry.target.classList.add("show-from-bottom");
        } else {
            //if scrolled back up reset effect
        }
    }
}),{
    threshold: '0.4'
}});

document.querySelectorAll('.hide-from-top').forEach((i) => {
    if (i) {
        sectionContentObserver.observe(i);
    }
});