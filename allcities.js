function allcities() {
    var text = "";
    for (var i = 0; i < ll; i++) {
          text += locations.sort()[i] + ", ";
    document.getElementById("op").innerHTML = `<br>${text}`;
    }
    console.log("User requested to show the total city list.")
    }