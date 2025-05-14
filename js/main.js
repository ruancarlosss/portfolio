const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {

    nav.classList.toggle('active');
});

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolling');

    } else {
        header.classList.remove('scrolling');
    }
});