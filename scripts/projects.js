import { projects } from '../data/projectsData.js'

const projectsContainer = document.querySelector(".projects_container");

function displayProjects () {
    let markup = projectsContainer.innerHTML;

    for (let i = 0; i < projects.length; i++) {
        const {title, tags, description, linkToDemo, linkToCode, preview, comingSoon} = projects[i];

        markup +=  `
        <li class="project ${comingSoon ? "coming-soon" : ""}" data-animate="animate-y">
            <img src="${preview}" alt="${title}" class="project-preview" width="360px" height="240px" />
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
                <div class="project_btns">
                ${
                    !comingSoon && linkToCode ?
                        `<a target="_blank" href="${linkToDemo}" class="btn demo_btn">Demo</a>
                        <a target="_blank" href="${linkToCode}" class="btn code_btn">Code</a>` : ""
                }
                ${
                    !comingSoon && !linkToCode ?
                        `<a target="_blank" href="${linkToDemo}" class="btn demo_btn">Demo</a>` : ""
                }
                </div>
            </div> 
        </li>`
    }

    projectsContainer.innerHTML = markup;
};

displayProjects();