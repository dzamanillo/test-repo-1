const SmoothScroll = require('smooth-scroll');

// Smooth scroll behaviro for the menu links
new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]',
  easing: 'easeInOutCubic',
  speed: 2000,
  topOnEmptyHash: true,
  updateURL: true,
});

// Listener for applying a class to the navbar on scroll
window.addEventListener('scroll', (event) => {
  const menu = document.getElementById('menu');
  const scrollPosY = window.pageYOffset | document.body.scrollTop;

  if (scrollPosY > 50) {
    menu.classList.add(`scrolling`);
  } else if (scrollPosY <= 100) {
    menu.classList.remove(`scrolling`);
  }
});

// Custom JS
AOS.init();

//Modal

//Get modal
var modal = document.getElementById('modal-contact');
//opens modal
var openModal = document.getElementById('btn-modal');
//close modal
var closeModal = document.getElementsByClassName('close')[0];

//open the modal
// openModal.onclick = function () {
//   modal.style.display = 'block';
// };

//icon close the modal
closeModal.onclick = function () {
  modal.style.display = 'none';
};

//outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// document ready javascript
// document.addEventListener('DOMContentLoaded', function () {
//   setTimeout(() => {
//     modal.style.display = 'block';
//   }, 1500);
// });
