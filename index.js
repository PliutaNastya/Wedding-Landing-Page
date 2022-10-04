const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__list')
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', () => {
    burger.addEventListener('click', () => {
        menu.classList.toggle('active')
        burger.classList.toggle('active-burger')
        body.classList.add('locked')
    })
});

let links = document.querySelectorAll(".menu__link");

for (let link of links) {
	link.onclick = () => {
		body.classList.remove("locked")
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
	}
}
