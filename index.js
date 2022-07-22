const navToggle = document.querySelector(".nav-toggle");
const navToggle2 = document.querySelector(".nav-toggle i");
const navMenu = document.querySelector(".nav-menu");
const clickNav = document.querySelector (".home")
const clickNav2 = document.querySelector (".about")
const clickNav3 = document.querySelector (".projects")
const clickNav4 = document.querySelector (".contact")


window.onload = setTimeout(removeLoader, 1500); 




function removeLoader (){
  var preload = document.querySelector (".pre");
  preload.style.visibility = 'hidden' ;
  preload.style.opacity = '0';

};

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

function removeLineNav () {
  contact.classList.remove("nav-menu-link_active");
  about.classList.remove("nav-menu-link_active");
  projects.classList.remove("nav-menu-link_active");
  home.classList.remove("nav-menu-link_active");
};

const removeActiveBar = () => {
  home.classList.remove("nav-menu-link_active");
  about.classList.remove("nav-menu-link_active");
  projects.classList.remove("nav-menu-link_active");
  contact.classList.remove("nav-menu-link_active");
}


navToggle.addEventListener("click", hamburguerMenu);
clickNav.addEventListener("click", removeMenu);
clickNav2.addEventListener("click", removeMenu);
clickNav3.addEventListener("click", removeMenu);
clickNav4.addEventListener("click", removeMenu);



let home = document.querySelector("li .home");
let about = document.querySelector("li .about");
let projects = document.querySelector("li .projects");
let contact = document.querySelector("li .contact");






home.addEventListener("click", () =>{
  removeLineNav();
  home.classList.add("nav-menu-link_active");
});

about.addEventListener("click", () =>{
  removeLineNav();
  about.classList.add("nav-menu-link_active");

});
projects.addEventListener("click", () =>{
  removeLineNav();
  projects.classList.add("nav-menu-link_active");

});
contact.addEventListener("click", () =>{
  removeLineNav();
  contact.classList.add("nav-menu-link_active");

});



const scrollHome = document.getElementById("home");
const scrollAbout = document.getElementById("about");
const scrollContact = document.getElementById("contact");


console.log (scrollAbout.clientHeight)
console.log (scrollHome.clientHeight)
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 50) {
    removeActiveBar();
    home.classList.add("nav-menu-link_active");

  }
  if (scroll > 230) {
    removeActiveBar();
    about.classList.add("nav-menu-link_active");
  }
  if (scroll > scrollAbout.clientHeight ) {
    removeActiveBar();
    projects.classList.add("nav-menu-link_active");
  }
  if (scroll > scrollContact.clientHeight ) {
    removeActiveBar();
    contact.classList.add("nav-menu-link_active");
  }

}
// Use the function
window.addEventListener('scroll', onScroll)









