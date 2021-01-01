// google map //

function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// change nav-bar bg on scroll //

window.addEventListener("scroll", function () {
const windowPosition = window.scrollY > 0;
const windowSize = window.innerWidth;
const header = document.querySelector('header');
const burger = document.querySelector('.menu-btn__burger');
const burger1 = document.querySelector('.menu-btn__burger1');
const burger2 = document.querySelector('.menu-btn__burger2');

if(windowSize < 999) {
  header.classList.toggle("s-nav-scrolled", windowPosition);
  burger.classList.toggle("scrolled-burger", windowPosition);
  burger1.classList.toggle("scrolled-burger", windowPosition);
  burger2.classList.toggle("scrolled-burger", windowPosition);
  } else if (windowSize > 999) {
  header.classList.toggle("nav-scrolled", windowPosition);
  }
});

// hamburger animation //

const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelectorAll(".nav-items");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// nav-bar items //

navItems.forEach((navItems) => {
  menuBtn.addEventListener('click', () => {
      if(menuOpen == true) {
        navItems.classList.add('nav-open');
      } else {
        navItems.classList.remove('nav-open');
      }
    })
});
