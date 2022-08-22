const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDestoktopMenu);

function toggleDestoktopMenu(){
    desktopMenu.classList.toggle('inactive');
}