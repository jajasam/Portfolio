const skillsContainer = document.querySelector(".skills_container");

const skills = ["HTML","CSS", "JavaScript", "React", "Tailwind", "VSCode", "Git", "GitHub", "Bitbucket", "Jira", "Figma", "Accessibility", "Responsive Design"];

function displaySkills () {
    let markup = "";

    for (let i = 0; i < skills.length; i++) {
        markup += `
            <li class="skill">
                <img src="./logos/skills/${skills[i]}.png" alt="${skills[i]}" width="auto" height="80px">
                <p>${skills[i]}</p>
            </li>`
    }
    skillsContainer.innerHTML = markup;
};

displaySkills();