// Check COORDINATES make sure text don't end up out of frame
function checkCoords(xCoord,yCoord, newCoord){
  let newX;
  let newY;

  if(xCoord < 160){
    // Check if it's not too far to the left
    newX = 160;
  } else if(xCoord > 380){
    // Check if it's not too far to the right
    newX = 380;
  } else {
    newX = xCoord;
  }

  if(yCoord < 100){
    console.log("Less than");
    console.log(yCoord);
    // Check if it's not too far to the top
    newY = 80;
  } else if(yCoord > 500){
    // Check if it's not too far to the bottom
    newY = 400;
  } else {
    console.log(yCoord);
    newY = yCoord;
  }

  newCoord(newX, newY);
}
// Move background when the user moves the mouse
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20; //THIS IS HOW FAST IT MOVES ( 1/10 IS FASTER THAN 1/100)

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.background').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

// moveBackground();

$(document).ready(function() {
  // Change the background pic (random)
  let currentPic = 1;

  function changeBackground(){
    let interval = 5000; // The interval is in miliseconds
    let numOfPic = 4; //Keep this up to date with the amount of images kept in the IMAGES/BACKGROUND FOLDER;
    let randomNum = Math.floor((Math.random() * numOfPic) + 1);
    let newImg = `URL(../IMAGES/BACKGROUND/pic${randomNum}.png)`;

    // console.log(randomNum);

    // Check to see if the current image it's not the same as the new one
    if(randomNum === currentPic){
      // If it is try again
      changeBackground();
    } else {
      // If not, change the image
      $(".background").css("background", newImg);

      setTimeout(function () {
        changeBackground();
      }, interval)
    }
  }

  changeBackground();
})
