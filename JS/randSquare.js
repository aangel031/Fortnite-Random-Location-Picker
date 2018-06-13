let horizontal = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// No need to list all the numbers
let verticalAmount = 10;

function moveSquare(xAmount, yAmount) {
  let newX = xAmount * 54;
  let newY = yAmount * 54;

  $({
      x: $('.mapCircle rect').attr('x')
    })
    .animate({
      x: newX
    }, {
      duration: 800,
      step: function(now) {
        $('.mapCircle rect').attr('x', now);

        $({y: $('.mapCircle rect').attr('y')})
          .animate(
          {y: newY},
          {duration:800,step:function(now){$('.mapCircle rect').attr('y', now);}});
      }
    });
}

function generateRandomBlock() {
  // Get random number for the horizontal axis
  let randomNum1 = Math.floor((Math.random() * horizontal.length));
  // Get random dumber for the vertical axis
  let randomNum2 = Math.floor((Math.random() * 9) + 1);

  $('.mapCircle .locationName').css("display", "none");
  $('.mapCircle circle').css("display", "none");
  $('.mapCircle rect').css("display", "block");
  $('.mapCircle').css("opacity", "1");

  let xAxis = horizontal[randomNum1];
  let yAxis = randomNum2;
  let blockName = xAxis + yAxis;

  moveSquare(randomNum1, yAxis)
}
