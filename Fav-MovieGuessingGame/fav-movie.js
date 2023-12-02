const favMovie = "3 idiots";

let guess = prompt("Guess My favorite movie");

while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong guess, Please try again! if you don't want to play you can quit by saying 'quit' ")
}
if (guess === favMovie) {
    console.log("Congrats!");
} else {
    console.log("You quit the game");
}