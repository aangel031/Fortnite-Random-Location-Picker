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
"Dusty Depot",
"Salty Springs",
"Fatal Fields",
"Wailing Woods",
"Lonely Lodge",
"Retail Row",
"Moisty Mire"
//.sort() puts them in order.
];

console.log("Total cities listed in the array: " + locations.length) // 18

function lal() {
var text = "";
for (var i = 0; i < locations.length; i++) {
      text += locations.sort()[i] + ", ";
document.getElementById("op").innerHTML = text;
}
console.log("User requested to show the total city list.")
}

function main() {
    var randomise = Math.floor((Math.random() * locations.length) + 1);
console.log(randomise)
if (randomise == 1) randomise="Junk Junction";
if (randomise == 2) randomise="Haunted Hills";
if (randomise == 3) randomise="Anarchy Acres";
if (randomise == 4) randomise="Pleasant Park";
if (randomise == 5) randomise="Snobby Shores";
if (randomise == 6) randomise="Greasy Grove";
if (randomise == 7) randomise="Tilted Towers";
if (randomise == 8) randomise="Shifty Shafts";
if (randomise == 9) randomise="Flush Factory";
if (randomise == 10) randomise="Loot Lake";
if (randomise == 11) randomise="Tomato Town";
if (randomise == 12) randomise="Dusty Depot";
if (randomise == 13) randomise="Salty Springs";
if (randomise == 14) randomise="Fatal Fields";
if (randomise == 15) randomise="Wailing Woods";
if (randomise == 16) randomise="Lonely Lodge";
if (randomise == 17) randomise="Retail Row";
if (randomise == 18) randomise="Moisty Mire";
if (randomise <= 0 || randomise >= 19) randomise == "[UNDETECTED] - Report this to <a href = 'https://github.com/AlexHGaming/'>the GitHub repo and make an issue screenshotting your console.</a>"
document.getElementById("mout").innerHTML = `<code><center><h1>${randomise}</code>`
};
