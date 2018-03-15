function allcities() {
    var text = "";
    var lastlocation = "Wailing Woods";
    for (var i = 0; i < ll; i++) {
          text += locations.sort()[i] + ", ";
    document.getElementById("op").innerHTML = `<br>${text} and ${lastlocation}.`;
    }
    console.log("User requested to show the total city list.")
    }
