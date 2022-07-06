const navToggle = document.querySelector(".nav-toggle");
const navToggle2 = document.querySelector(".nav-toggle i");
const navMenu = document.querySelector(".nav-menu");


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle2.setAttribute("class", "fa-solid fa-x");
  } else {
    navToggle2.setAttribute("class", "fas fa-bars");
  }
});

const navegador = document.querySelector("li .home")
const navegador2 = document.querySelector("li .portfolio")
navegador2.addEventListener("click", () =>{
  navegador.classList.remove("nav-menu-link_active");
  navegador2.classList.add("nav-menu-link_active")
} )

let nombre = document.getElementById('nombre');
window.addEventListener("scroll", function(){
  let value = window.scrollY;
  nombre.style.marginRight = value * 1.25 + 'px';
})





// const texts = ['Hello, World']
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';
// function type () {
//   if (count === texts.length) {
//     count = 0;
//   }
//   currentText = texts[count];
//   letter = currentText.slice(0, ++index);

//   document.querySelector(".intro_second").textContent = letter;
//   if (letter.length === currentText.length) {
//     count++;
//     index = 0;
//   }
//   setTimeout(type, 150);
// }

// type();










