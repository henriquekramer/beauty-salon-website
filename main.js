/* Abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/*Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links){
  link.addEventListener('click', () => nav.classList.remove('show'))
}

/* Mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight  /*estou pegando a altura do header */

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})