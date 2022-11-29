const loader = document.querySelector('.loader')
const body = document.querySelector('body')

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none'
        body.style.visibility = 'visible';
    }, 1000);
})