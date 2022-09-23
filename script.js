const skillsContainer = document.querySelector(".skills_container");
const projectsContainer = document.querySelector(".projects_container");

const skills = ["HTML","CSS", "JavaScript", "React", "Bootstrap", "VSC", "Git", "Figma"];
const projects = [
    {
        title: "E-commerce",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque magni temporibus.",
        linkToDemo: "https://aesthetic-centaur-7df753.netlify.app/",
        linkToCode: "https://github.com/jajasam/Ecommerce-app",
    },
    {
        title: "To do list",
        description: "This project from Frontend mentor was a practice to replicate pixel perfect a given design. This todo list is responsive and offers two modes, lgiht and dark, and is highly convenient for managing tasks.",
        linkToDemo: "https://jajasam.github.io/To-do-app/",
        linkToCode: "https://github.com/jajasam/To-do-app",
    },
    {
        title: "Battleship",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque magni temporibus.",
        linkToDemo: "",
        linkToCode: "",
    },
    {
        title: "This portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque magni temporibus.",
        linkToDemo: "janasamson.com",
        linkToCode: "",
    }
]

function displaySkills () {
    let markup = "";
    
    for (let i = 0; i < skills.length; i++) {
        markup += `
            <div class="skill">
                <img src="./logos/${skills[i]}.png" alt="${skills[i]}">
                <h4>${skills[i]}</h4>
            </div>`
    }
    console.log(skillsContainer)
    skillsContainer.innerHTML = markup;
};

function displayProjects () {
    let markup = "";

    for (let i = 0; i < projects.length; i++) {
        const {title, description, linkToDemo, linkToCode} = projects[i];

        markup +=  `
        <div class="project">
            <div></div>
            <div class="project-infos">
                <h4>${title}</h4>
                <p>${description}</p>
                <div class="btns">
                    <a target="_blank" href="${linkToDemo}" class="btn demo_btn">Demo</a>
                    <a target="_blank" href="${linkToCode}" class="btn code_btn">Code</a>
                </div>
            </div> 
        </div>`
    }

    projectsContainer.innerHTML = markup;
};
 
displaySkills();
displayProjects();