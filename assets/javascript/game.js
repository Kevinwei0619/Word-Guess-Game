var wordList = ["love", "tennis", "mcenroe", "connors", "ballboy", "game", "doublefault", "usopen", "wimbledon", "paris", "london", "advantage", "frenchopen", "baseline", "gamepoint", "melbourne", "sampras", "federer", "nadal", "volley", "serve", "stroke", "chairump", "linejudge", "trophy"];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var userGuessArray = [];
var computerChoice = "";
var userGuess2 = "";
var triedCharacters = [];
var counter = 10;
var correctCharacters = [];

function guessWord() {

    computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    var blanks = "";

    console.log(computerChoice + "  +  " + computerChoice.length)

    for (var i = 0; i < computerChoice.length; i++) {
        blanks += "_ "
    };

    var html = "<p>Guess::" + blanks + "</P>";

    document.querySelector("#wordBlank").innerHTML = html;

    // console.log("Blanks", blanks);
}

document.onkeyup = function (event) {

    var userGuess = event.key;
    userGuess2 = userGuess;
    console.log(userGuess2);
    userGuessArray.push(userGuess);

    var html = "<p>Letters Already Guessed::" + userGuessArray.join(", ") + "</P>";

    document.querySelector("#user").innerHTML = html;
    compare();
}


guessWord();

for (var i = 0; i < computerChoice.length; i++) {
    console.log(computerChoice[i]);
}


function compare() {
    console.log("USER GUESS 2", userGuess2);
    for (var i = 0; i < computerChoice.length; i++) {
        if (userGuess2 === computerChoice[i]) {
            // console.log("CORRECT", userGuess2, computerChoice[i]);
            correctCharacters.push(userGuess2);
            console.log(correctCharacters);
            var blanks = computerChoice.map(e => '_ ');
            document.getElementById('wordBlank').innerHTML = blanks;
        } else {
            // console.log("INCORRECT", userGuess2, computerChoice[i]);
        }
    }
    // for (var i = 0; i < computerChoice.length; i++) {
    //     for (var z = 0; z < userGuess2.length; z++) {
    //         if (userGuess2[z] === computerChoice[i]) {
    //             correctCharacters.push(correctCharacters[z]);
    //             // console.log("correct " + correctCharacters);


    //             // var html = "<p>Guess::" + blanks + "</P>";

    //             // document.querySelector("#wordBlank").innerHTML = html;



    //         }
    //         else {
    //             triedCharacters.push(triedCharacters[z]);
    //             // console.log("incorrect " + triedCharacters);



    //             // var html = "<p>Guess::" + blanks + "</P>";

    //             // document.querySelector("#wordBlank").innerHTML = html;

    //         }

    //     };

    // }
}






   //-------After this point I was not successful
//    let textForm = document.querySelector('.textForm');
//    textForm.addEventListener('submit', function(event) {


    // event.preventDefault();
    // guesses = character.value;  


