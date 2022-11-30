const loader = document.querySelector('.loader')
const body = document.querySelector('body')

window.addEventListener('load', () => {
    body.style.visibility = 'invisible';
    setTimeout(() => {
        loader.style.display = 'none'
        body.style.visibility = 'visible';
    }, 1000);
})