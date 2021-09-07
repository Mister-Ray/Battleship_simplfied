//varibles declaration
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
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
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit !!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You've sunk my battleship!")
            }
        } else {
            alert("You've missed!!")
        }
    }
}
var stats = "You've guessed " + guess + "times and sunk the battleship." + "That means your accuracy is" + (3/guesses);
alert(stats);