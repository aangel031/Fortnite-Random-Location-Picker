function colours() {


var a = document.getElementById("colour1").value;
    var b = document.getElementById("colour2").value;
    var c = document.getElementById("colour3").value;

    document.getElementById("mout").style = `font-size: 60px; color: ${a};`;
    document.getElementById("op").style = `font-size:20px; color: ${b};`;
document.getElementById("headercolour").style = `background-color:${c}`;
}