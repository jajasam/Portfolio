const skillsContainer = document.querySelector(".skills_container");
const projectsContainer = document.querySelector(".projects_container");
let language;

const skills = ["HTML","CSS", "JavaScript", "React", "Bootstrap", "VSC", "Git", "Figma"];
const projects = [
    {
        title: "E-commerce",
        description: "Ecommerce app for audio systems built with React.",
        linkToDemo: "https://aesthetic-centaur-7df753.netlify.app/",
        linkToCode: "https://github.com/jajasam/Ecommerce-app",
        preview: "./projects-preview/Ecomm.png"
    },
    {
        title: "To do list",
        description: "This project from Frontend mentor was a practice to replicate pixel perfect a given design. This todo list is responsive, offers two modes (light and dark) and contains a drag and drop functionnality to reorder the todos.",
        linkToDemo: "https://jajasam.github.io/To-do-app/",
        linkToCode: "https://github.com/jajasam/To-do-app",
        preview: "./projects-preview/Todo.png"
    },
    {
        title: "Weather App",
        description: "API",
        linkToDemo: "",
        linkToCode: "",
        preview: ""
    },
    {
        title: "This portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque magni temporibus.",
        linkToDemo: "janasamson.com",
        linkToCode: "",
        preview: ""
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
        const {title, description, linkToDemo, linkToCode, preview} = projects[i];

        markup +=  `
        <div class="project">
            <img src="${preview}" class="project-preview" />
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