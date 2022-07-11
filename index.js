function burgerMenu() {
    const burger = document.querySelector('.menu__burger')
    const menu = document.querySelector('.menu__list')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        menu.classList.toggle('active')
        burger.classList.toggle('active-burger')
        body.classList.toggle('locked')
    })
  }
  burgerMenu()
