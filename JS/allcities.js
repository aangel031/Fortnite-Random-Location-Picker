    var locations = [
    "Junk Junction",
    "Haunted Hills",
    "Anarchy Acres",
    "Pleasant Park",
    "Snobby Shores",
    "Greasy Grove",
    "Tilted Towers",
    "Shifty Shafts",
    "Flush Factory",
    "Loot Lake",
    "Tomato Town",
    "Dusty Divot",
    "Salty Springs",
    "Fatal Fields",
    "Lonely Lodge",
    "Retail Row",
    "Moisty Mire",
    "Lucky Landing"
    //.sort() puts them in order.
    ];
var lastlocation = "Wailing Woods";
    var ll = locations.length;
    console.log("Total cities listed in the array: " + ll)

function allcities() {

    var outputcolour = "#FF0000"
    
    var text = "";
    for (var i = 0; i < ll; i++) {
          text += locations.sort()[i] + ", ";
    document.getElementById("op").innerHTML = `<br>${text} ${lastlocation}.<br><br><font color = '#FFFFFF'>${ll} cities alltogether.</font>`;
    }
    console.log("User requested to show the total city list.")
    }
