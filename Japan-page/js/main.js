const navElem = document.querySelector('.nav');

window.onscroll = () => {
    if (window.pageYOffset > 50) {
        navElem.classList.add('nav_active');
    } else {
        navElem.classList.remove('nav_active');
    }
}

const burgerElement = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');

burgerElement.addEventListener('click', () => {
    menu.classList.add('nav-list_active');
}) 

const closeElement = document.querySelector('.nav-list__close');

closeElement.addEventListener('click', () => {
    menu.classList.remove('nav-list_active');
})





