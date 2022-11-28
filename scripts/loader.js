const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.visibiliy = 'hidden';
        loader.style.display = 'none'
    }, 1000);
})