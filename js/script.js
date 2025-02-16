const mobileMenu = document.querySelector('.menu__list')
const openMobileMenuButton = document.querySelector('.menu__btn')
const closeMobileMenuButton = document.querySelector('.menu__close-btn')
const backgroundMobileMenu = document.querySelector('.menu--close')

openMobileMenuButton.addEventListener('click', toggleMenu)

closeMobileMenuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
  mobileMenu.classList.toggle('menu__list-open')
  backgroundMobileMenu.classList.toggle('menu--open')
}