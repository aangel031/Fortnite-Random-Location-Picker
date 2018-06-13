var locations = [
    "Anarchy Acres",
    "Dusty Depot",
    "Fatal Fields",
    "Flush Factory",
    "Greasy Grove",
    "Haunted Hills",
    "Junk Junction",
    "Lonely Lodge",
    "Loot Lake",
    "Lucky Landing",
    "Moisty Mire",
    "Pleasant Park",
    "Risky Reels",
    "Retail Row",
    "Salty Springs",
    "Shifty Shafts",
    "Snobby Shores",
    "Tilted Towers",
    "Tomato Town"
    ];
var lastlocation = "Wailing Woods";

    var ll = locations.length;
    console.log("Total named locations listed: " + (ll + 1));

    var unnamedlocations = [
        "Factories near 'Flush Factory'",
        "Stadium near 'Junk Junction'",
        "Containers on the left of 'Lonely Lodge'",
        "Football / Soccer Pitch'"
        ];

        var last = "Prison near 'Moisty Mire'";

    var unl = unnamedlocations.length;
    console.log("Total unnamed locations listed: " + (unl + 1));

function allLocations() {
    
    var text = "";
    for (var i = 0; i < ll; i++) {
          text += locations.sort()[i] + ", ";
    document.getElementById("op").innerHTML = `<br>${text} ${lastlocation}.<br><br><font color = '#FFFFFF'>${(ll + 1)} cities alltogether.</font>`;
    }
    console.log("User requested to show the total named cities list.")
    }

    function unnamed() {
            
            var text = "";
            for (var i = 0; i < unl; i++) {
                  text += unnamedlocations.sort()[i] + ", ";
            document.getElementById("op").innerHTML = `<br>${text} ${last}.<br><br>${(unl + 1)} cities alltogether.</font>`;
            }
            console.log("User requested to show the total unnamed list.")
            }
    