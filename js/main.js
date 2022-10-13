const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
// Initially, the menu is not shown
let showMenu = false;

//Add a event listener yo our menuBtn and make function() toggleMenu

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

 // ! exclamation  => not operator  
 if(!showMenu) {  // Saying if not show menu , showMenu is false
  //Target the classList in our scss
  hamburger.classList.add('open'); // we're going to say that is now open
  nav.classList.add('open');
  menuNav.classList.add('open');

 showMenu = true; // now we know the menu is open
 } else { // So if the menu is open  we want to do opposite
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  menuNav.classList.remove('open');
  
 showMenu = false  ;
 }
}
