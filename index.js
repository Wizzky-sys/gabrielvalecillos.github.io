const navToggle = document.querySelector(".nav-toggle");
const navToggle2 = document.querySelector(".nav-toggle i");
const navMenu = document.querySelector(".nav-menu");
const btnSwitch = document.querySelector("#switch");
const logolight = document.querySelector(".logo-btn .logo")
const logodark = document.querySelector(".logo-btn .logodark")



// function remove pre-loader
const removeLoader = () => {
  var preload = document.querySelector (".pre");
  preload.style.visibility = 'hidden';
  preload.style.opacity = '0';

};

let ubicacionactual = window.pageYOffset;
window.onscroll = function () {
  let desplaza_actual = window.pageYOffset;
  if (ubicacionactual >= desplaza_actual) {
    document.querySelector(".header").style.top = '0';

  } else {
    document.querySelector(".header").style.top = '-100px';
  }
  ubicacionactual = desplaza_actual;
}

// remove pre-loader after 1500ms
window.onload = setTimeout(removeLoader, 1500); 

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('switch_active')
  if (btnSwitch.classList.contains('switch_active')) {
    logolight.style.display = 'none'
    logodark.style.display = 'flex'
  } else {
    logolight.style.display = 'flex'
    logodark.style.display = 'none'
  }
});

// function for toggle icon menu 
const hamburguerMenu = () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle2.setAttribute("class", "fa-solid fa-x");
  } else {
    navToggle2.setAttribute("class", "fas fa-bars");
  }
};



// cambia el icono de hamburguesa a una x
const removeMenu = () => {
  navMenu.classList.remove("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle2.setAttribute("class", "fa-solid fa-x");
  } else {
    navToggle2.setAttribute("class", "fas fa-bars");
  }
};



// remueve la linea blanca debajo de los nav
const removeLineNav = () => {
  document.querySelectorAll('.nav-menu-link_active').forEach(item => {
    item.classList.remove("nav-menu-link_active");
  });
};



const home = document.querySelector(".home");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");


// click al menu, se despliega el contenido
navToggle.addEventListener("click", hamburguerMenu);

//onclick en cualquier elemento del menu en version mobile, se remueve automaticamente 
document.querySelectorAll('.nav-menu-link').forEach(item => {
  item.addEventListener("click", () => {
    removeMenu();
  });
});

//remueve todas las lineas de demas nav y se la aplica al que se da click
document.querySelectorAll('.nav-menu-link').forEach(item => {
  item.addEventListener("click", () => {
    removeLineNav();
    item.classList.add("nav-menu-link_active");
  });
});

// setInterval(() => {
//   alert('olamundo')
// }, 11400);



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









