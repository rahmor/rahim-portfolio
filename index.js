'use strict';
/* global $ */

// function main() {
//   $('#myTopNav').on('click', event => {
//     event.preventDefault();

//     if ($(event.currentTarget).hasClass('topnav')) {
//       $(event.currentTarget).toggleClass('responsive');
//     }
//   });
// }
// $(main);

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
