//varibles declaration
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

//guess loop
while (isSunk == false) {
    guess = prompt("Ready! Steady! Shoot! (key in 0~6)");
    if (guess < 0 || guess > 6) {
        alert("Please key in an available digit");
    } else {
        guesses = guesses + 1;
    }
}