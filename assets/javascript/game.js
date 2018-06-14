var wordList = ["love", "tennis", "mcenroe", "connors", "ballboy", "game", "doublefault", "usopen", "wimbledon", "paris", "london", "advantage", "frenchopen", "baseline", "gamepoint", "melbourne", "sampras", "federer", "nadal", "volley", "serve", "stroke", "chairump", "linejudge", "trophy"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessShow = "";
var userGuessArray = [];
var computerChoice = "";
var userGuess2 = "";
var guessRight = [];
var counter = 10;
var correctCharacters = [];
var getBlanks = "";
var finalWord=[];
var test=[];

function guessWord() {

    computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
     var blanks = "";

    console.log(computerChoice + "  +  " + computerChoice.length); //show the word and length

    for (var i = 0; i < computerChoice.length; i++) {
        blanks += "_ "
    };
     
     getBlanks = blanks;
   

    var html = "<p>Guess::" + blanks + "</P>";

    document.querySelector("#wordBlank").innerHTML = html;

    // console.log("Blanks", blanks);
}

document.onkeyup = function (event) {

    var userGuess = event.key;
    userGuess2 = userGuess.toLowerCase();
    // console.log(userGuess2 + "      output user guess");
    userGuessArray.push(userGuess);

    var html = "<p>Letters Already Guessed: " + userGuessArray.join(", ") + "</P>";

    document.querySelector("#userAlGuess").innerHTML = html;
    compare();
}


guessWord();



function compare() {
    console.log("USER GUESS 2 : ", userGuess2);
    console.log("Blanks", getBlanks);
    
    for (var i = 0; i < computerChoice.length; i++) {
        if (userGuess2 === computerChoice[i]) {

            console.log(userGuess2);
            console.log(computerChoice[i]);




            // console.log("CORRECT", userGuess2, computerChoice[i]);
            // correctCharacters[i] = userGuess2;
            // var blanks = computerChoice.map(e => '_ ');
            // document.getElementById('wordBlank').innerHTML = blanks;

        } 
        // else {
        



            // console.log("INCORRECT", userGuess2, computerChoice[i]);
            //  correctCharacters[i] = "";


        // }
    }


    console.log(getBlanks + " getBlank");

    // console.log(correctCharacters);



      for(var j = 0 ; j < correctCharacters.length ; j++){

        // console.log(correctCharacters[j].length + "   fffffff");

        console.log(correctCharacters[j] + "    show ");


          if(correctCharacters[j] !== "" ){

            finalWord = correctCharacters[j];


          }else if(finalWord[j] !== "" ){

            finalWord = finalWord[j];
    
          }else{
            finalWord[j] = "_ ";
          }

      }





    for(var k = 0; k <finalWord.length; k++){

        guessShow = finalWord[k] + guessShow;

    }



    var res = "<p>Guess: " + guessShow + "</p>";

    document.getElementById("wordBlank").innerHTML = res;






    // for (var i = 0; i < computerChoice.length; i++) {
    //     for (var z = 0; z < userGuess2.length; z++) {
    //         if (userGuess2[z] === computerChoice[i]) {
    //             correctCharacters.push(correctCharacters[z]);
    //             // console.log("correct " + correctCharacters);


    //             // var html = "<p>Guess::" + blanks + "</P>";

    //             // document.querySelector("#wordBlank").innerHTML = html;



    //         }
    //         else {
    //             guessRight.push(guessRight[z]);
    //             // console.log("incorrect " + guessRight);



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


