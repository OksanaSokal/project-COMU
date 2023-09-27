const button = document.querySelector('.header__burger');
const menu = document.querySelector('.header__navigation');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
});
