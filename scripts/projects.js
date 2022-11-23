import { projects } from '../data/projectsData.js'

const projectsContainer = document.querySelector(".projects_container");

function displayProjects (lang = 'en') {
    const projectsInCurrentLang = projects[0][lang];
    let markup = projectsContainer.innerHTML;

    for (let i = 0; i < projectsInCurrentLang.length; i++) {
        const {title, tags, description, linkToDemo, linkToCode, preview, comingSoon} = projectsInCurrentLang[i];

        markup +=  `
        <li class="project ${comingSoon ? "coming-soon" : ""}" data-animate="animate-y">
            <img src="${preview}" alt="${title}" class="project-preview" width="325px" height="90%" />
            ${
                comingSoon ?
                "<span class='ribbon' id='coming-soon'>Coming soon</span>" : ""
            }
            <div class="project-infos">
                <h3>${title}</h3>
                <ul class="tags">
                    ${
                        tags.map(tag => `<li class="tag">${tag}</li>`).join('')
                    }
                </ul>
                <p>${description}</p>
                <div class="project_btns">
                ${
                    !comingSoon ?
                        `<a target="_blank" href="${linkToDemo}" class="btn demo_btn">Demo</a>
                        <a target="_blank" href="${linkToCode}" class="btn code_btn">Code</a>` : ""
                }
                </div>
            </div> 
        </li>`
    }

    projectsContainer.innerHTML = markup;
};

displayProjects();