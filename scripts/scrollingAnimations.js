//scrolling effects on section heading
const headingsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting) {
        entry.target.classList.add("show-from-left", entry.isIntersecting);
    }
}),{
    threshold: 0.3
}});

document.querySelectorAll('[data-animate="animate-x"]').forEach((i) => {
    if (i) {
        headingsObserver.observe(i);
    }
});


//scrolling effects on section content
const sectionContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting) {
        entry.target.classList.add("show-from-bottom");
    }
}),{
    threshold: 0.3
}});

document.querySelectorAll('[data-animate="animate-y"]').forEach((i) => {
    if (i) {
        sectionContentObserver.observe(i);
    }
});