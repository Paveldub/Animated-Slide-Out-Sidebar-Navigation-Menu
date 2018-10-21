let slide = document.querySelector('.slide');
let menu = document.querySelector('#menu');
let content = document.querySelector('#content');

slide.addEventListener('click', () => {
    menu.style.width = '250px';
    content.style.marginLeft = '250px';
});

menu.addEventListener('click', () => {
    menu.style.width = '0';
    content.style.marginLeft = '0';
});



