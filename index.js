const navToggle = document.querySelector(".nav-toggle");
const navToggle2 = document.querySelector(".nav-toggle i");
const navMenu = document.querySelector(".nav-menu");
const clickNav = document.querySelector (".home")
const clickNav2 = document.querySelector (".about")
const clickNav3 = document.querySelector (".projects")
const clickNav4 = document.querySelector (".contact")

// function remove pre-loader
function removeLoader (){
  var preload = document.querySelector (".pre");
  preload.style.visibility = 'hidden';
  preload.style.opacity = '0';

};
// remove pre-loader after 1500ms
window.onload = setTimeout(removeLoader, 1500); 



// function for toggle icon menu 
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

// al dar click al menu, se despliega el contenido
navToggle.addEventListener("click", hamburguerMenu);

// al dar click en cualquier elemento de la lista el menu se remueve
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
const scrollProjects = document.getElementById("projects");
const scrollContact = document.getElementById("contact");

const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  const sAbout = scrollAbout.offsetTop;
  const sProjects = scrollProjects.offsetTop;
  const sContact = scrollContact.offsetTop;

  // If scroll value is more than 0 - add class
  if (scroll >= 0 && scroll <= sAbout) {
    removeLineNav();
    home.classList.add("nav-menu-link_active");
  } else if (scroll > sAbout && scroll <= sProjects) {
    removeLineNav();
    about.classList.add("nav-menu-link_active");
  } else if (scroll > sProjects && scroll <= sContact) {
    removeLineNav();
    projects.classList.add("nav-menu-link_active");
  } else if (scroll > sContact) {
    removeLineNav();
    contact.classList.add("nav-menu-link_active");
  }

}
window.addEventListener('scroll', onScroll)









