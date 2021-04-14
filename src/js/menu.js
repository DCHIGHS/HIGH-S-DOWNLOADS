const navbarmenu = document.querySelector('#navbar-menu')
let menuActive = false;

function showmenu() {
  menuActive = !menuActive;
  const menu = document.querySelector('.menu nav');
  const barra = document.querySelector('.barra');

  if (menuActive) {
    menu.style.left = '0';
    barra.style.borderBottom = '1px solid white'
    barra.style.width = '200%'
  } else {
    menu.style.left = '-100%';
    barra.style.borderBottom = 'none'
    barra.style.width = '0px'
  }
}