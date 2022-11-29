import { skillsLogos } from "../logos/skills/skillsLogos.js"

const skillsContainer = document.querySelector(".skills_container");

const skills = ["HTML5","CSS3", "JavaScript", "React", "Tailwind", "VSCode", "Git", "GitHub", "Bitbucket", "Jira", "Figma", "Accessibility", "Responsive Design"];

function displaySkills () {
    let markup = "";

    for (let i = 0; i < skills.length; i++) {
        markup += `
            <li class="skill">
                <span class="skill-logo">
                    ${skillsLogos[`${skills[i]}`]}
                </span>
                <p>${skills[i]}</p>
            </li>`
    }
    skillsContainer.innerHTML = markup;
};

displaySkills();

const skillsElems = document.querySelectorAll('.skill')

skillsElems.forEach(skill => skill.addEventListener('click', () =>  {
    skillsElems.forEach(skill => skill.classList.remove('show'))
    skill.classList.add('show')
}))