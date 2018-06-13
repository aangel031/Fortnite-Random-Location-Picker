// LIST OF LOCATIONS AND THEIR COORDINATES ON THE <MAP> TAG
let locations = [
  {"name": "Junk Junction","coords": {"X": 105, "Y": 60}, "type": "normal"},
  {"name": "Haunted Hills","coords": {"X": 85,"Y": 125}, "type": "normal"},
  {"name": "Anarchy Acres","coords": {"X": 298,"Y": 118}, "type": "normal"},
  {"name": "Pleasant Park","coords": {"X": 160,"Y": 170}, "type": "normal"},
  {"name": "Snobby Shores","coords": {"X": 50,"Y": 253}, "type": "normal"},
  {"name": "Greasy Grove","coords": {"X": 130,"Y": 350}, "type": "normal"},
  {"name": "Tilted Towers","coords": {"X": 205,"Y": 275}, "type": "normal"},
  {"name": "Shifty Shafts","coords": {"X": 205,"Y": 365}, "type": "normal"},
  {"name": "Flush Factory","coords": {"X": 205,"Y": 265}, "type": "normal"},
  {"name": "Loot Lake","coords": {"X": 245,"Y": 215}, "type": "normal"},
  {"name": "Tomato Town","coords": {"X": 373,"Y": 184}, "type": "normal"},
  {"name": "Dusty Divot","coords": {"X": 335,"Y": 270}, "type": "normal"},
  {"name": "Salty Springs","coords": {"X": 315 ,"Y": 355}, "type": "normal"},
  {"name": "Fatal Fields","coords": {"X": 335,"Y": 425}, "type": "normal"},
  {"name": "Wailing Woods","coords": {"X": 464,"Y": 150}, "type": "normal"},
  {"name": "Lonely Lodge","coords": {"X": 500,"Y": 237}, "type": "normal"},
  {"name": "Moisty Mire","coords": {"X": 470,"Y": 440}, "type": "normal"},
  {"name": "Lucky Landing","coords": {"X": 323,"Y": 525}, "type": "normal"},
  {"name": "Risky Reels","coords": {"X": 418,"Y": 100}, "type": "normal"},
  {"name": "Retail Row","coords": {"X": 417,"Y": 297}, "type": "normal"},
  // SPECIAL LOCATIONS
  {"name": "Northern Stadium","coords": {"X": 155,"Y": 85}, "type": "special"}
]

// Moves the location circle on the map
function setLocation(xCoord,yCoord, locName){
      let newTextY = Number($('.mapCircle .locationName').attr('dy')) + 40;

      // Unhide circle if hidden
      $(".mapCircle").css("opacity", "1")

      // Changes the text and circle size for animation
      $(".mapCircle .locationName").attr("dy", newTextY)
      $(".mapCircle .locationName").text(locName)
      $('.mapCircle circle').attr('r', 80);

      // Selects the last value on the X/Y axis and starts the animation from that point
      // *** This method prevents the cirlce from resetting and starting from 0
      $({cx: $('.mapCircle circle').attr('cx')})
        .animate(
          // subtract the offset
        {cx: xCoord - 10},
        {duration:800,step:function(now){$('.mapCircle circle').attr('cx', now);}});

      $({cy: $('.mapCircle circle').attr('cy')})
      .animate(
        {cy: yCoord - 10},
        {duration:800,step:function(now){$('.mapCircle circle').attr('cy', now);}});

      $({r: $('.mapCircle circle').attr('r')})
        .animate(
        {r: 40},
        {duration:800,step:function(now){$('.mapCircle circle').attr('r', now);}});


      // Text animation
      // Check if text is out of frame
      checkCoords(xCoord, yCoord, (newX, newY) => {
          $({dx: $('.mapCircle .locationName').attr('dx')})
            .animate(
            {dx: newX},
            {duration:800,step:function(now){$('.mapCircle .locationName').attr('dx', now);}});

          $({dy: $('.mapCircle .locationName').attr('dy')})
            .animate(
            {dy: newY + 80},
            {duration:800,step:function(now){$('.mapCircle .locationName').attr('dy', now);}});
      })
}

// Gets the random location
function getRandomLocation(){
  let locLength = locations.length;
  let randomNum = Math.floor((Math.random() * locLength) + 1) - 1;

  $('.mapCircle rect').css("display", "none");
  $('.mapCircle .locationName').css("display", "block");
  $('.mapCircle circle').css("display", "block");

  setLocation(locations[randomNum].coords["X"], locations[randomNum].coords["Y"], locations[randomNum].name)
}
