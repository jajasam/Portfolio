const navElems = document.querySelectorAll('nav')

navElems.forEach(nav => nav.innerHTML = `<ul>
<li>
    <a href="#about" id="about-title">
        About
    </a>
</li>
<li>
    <a href="#skills" id="skills-title">
        Skills
    </a>
</li>
<li>
    <a href="#projects" id="projects-title">
        Projects
    </a>
</li>
</ul>`)