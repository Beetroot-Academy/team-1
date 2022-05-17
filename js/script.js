const btn = document.querySelector('.burger')
const menu = document.querySelector('.nav__list')

btn.addEventListener('click', () => {
  menu.classList.toggle('nav__list--active')
})