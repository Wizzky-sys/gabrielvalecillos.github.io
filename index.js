const navToggle = document.querySelector(".nav-toggle");
const navToggle2 = document.querySelector(".nav-toggle i");
const navMenu = document.querySelector(".nav-menu");
const clickNav = document.querySelector (".home")
const clickNav2 = document.querySelector (".portfolio")
const clickNav3 = document.querySelector (".technology")
const clickNav4 = document.querySelector (".contact")



// function location () {
//   if (location.href === true) {
//     alert("llegaste a mi cv")
//   }
// };
// location();
function hamburguerMenu () {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle2.setAttribute("class", "fa-solid fa-x");

  } else {
    navToggle2.setAttribute("class", "fas fa-bars");

  }
};

function removeMenu () {
  navMenu.classList.remove("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle2.setAttribute("class", "fa-solid fa-x");
  } else {
    navToggle2.setAttribute("class", "fas fa-bars");
  }
};


navToggle.addEventListener("click", hamburguerMenu);
clickNav.addEventListener("click", removeMenu);
clickNav2.addEventListener("click", removeMenu);
clickNav3.addEventListener("click", removeMenu);
clickNav4.addEventListener("click", removeMenu);



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


let width = home.offsetWidth;
let width2 = cv.offsetWidth;

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > width) {
    portfolio.classList.add("nav-menu-link_active");
    home.classList.remove("nav-menu-link_active");
    technology.classList.remove("nav-menu-link_active");
    contact.classList.remove("nav-menu-link_active");

  } else if (document.documentElement.scrollTop < width) {
    home.classList.add("nav-menu-link_active");

    portfolio.classList.remove("nav-menu-link_active");
    technology.classList.remove("nav-menu-link_active");
    contact.classList.remove("nav-menu-link_active");
    
  }
  if (document.documentElement.scrollTop > width2) {
    technology.classList.add("nav-menu-link_active");

    portfolio.classList.remove("nav-menu-link_active");
    home.classList.remove("nav-menu-link_active");
    contact.classList.remove("nav-menu-link_active");
  } 
};


