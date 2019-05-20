'use strict';

function dropDown() {
  var navigation = document.getElementById('myTopnav');

  if (navigation.className === 'topnav') {
    navigation.className += ' responsive';
  } else {
    navigation.className = 'topnav';
  }
}
