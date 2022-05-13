const openMenu = document.querySelector('#open-menu-button');
const closeMenu = document.querySelector('#close-menu-button');
const navBar = document.querySelector('.navbar');

openMenu.addEventListener('click', () => {
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  navBar.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  navBar.style.display = 'none';
});