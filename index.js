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

let home = document.querySelector("li .home");

let portfolio = document.querySelector("li .portfolio");

let technology = document.querySelector("li .technology");

let contact = document.querySelector("li .contact");

home.addEventListener("click", () =>{
  contact.classList.remove("nav-menu-link_active");
  portfolio.classList.remove("nav-menu-link_active");
  technology.classList.remove("nav-menu-link_active");
  home.classList.add("nav-menu-link_active")
});

portfolio.addEventListener("click", () =>{
  home.classList.remove("nav-menu-link_active");
  contact.classList.remove("nav-menu-link_active");
  technology.classList.remove("nav-menu-link_active");
  portfolio.classList.add("nav-menu-link_active")
});
technology.addEventListener("click", () =>{
  home.classList.remove("nav-menu-link_active");
  portfolio.classList.remove("nav-menu-link_active");
  contact.classList.remove("nav-menu-link_active");
  technology.classList.add("nav-menu-link_active")
});
contact.addEventListener("click", () =>{
  home.classList.remove("nav-menu-link_active");
  portfolio.classList.remove("nav-menu-link_active");
  technology.classList.remove("nav-menu-link_active");
  contact.classList.add("nav-menu-link_active")
});





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










