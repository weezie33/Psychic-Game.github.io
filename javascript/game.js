
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    var directions = 0;

    var computerChoice = 0;
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 9;
    var choicesSoFar = [];


    document.onkeyup = function(event) {
      var userGuess = event.key;
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
      var computerOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    };

    if (computerOption.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
    wins++;
    guessesRemaining = 9;
    guessChoice = [];
    }

    if (userGuess != computerGuess) {
    guessesRemaining --;
    guessChoice.push(userGuess);
    }

    if (guessesRemaining === 0) {

    guessesRemaining = 9;
    losses ++;
    guessChoice = [];


    }

    var html = 
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesRemaining + "</p>" +
    "<p>Your Guesses so far: " + guessChoice.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;


  };




















// if (options.indexOf(userGuess) > -1) {

// 				if (userGuess === computerGuess) {
// 					wins++;
// 					numGuesses = 9;
// 					guessChoices = [];
// 				}

// 				if (userGuess != computerGuess) {
// 					numGuesses --;
// 					guessChoices.push(userGuess);
// 				}

// 				if (numGuesses === 0) {

// 				numGuesses = 9;
// 				losses ++;
// 				guessChoices = [];

				
// 			}





//     // Create variables that hold references to the places in the HTML where we want to display things.
//     var directions = document.getElementById("directions");
//     var userChoice = document.getElementById("userchoice");
//     var computerChoice = document.getElementById("computerchoice");
//     var wins = document.getElementById("wins");
//     var losses = document.getElementById("losses");
//     var guessesSoFar = document.getElementById("guessesremaining");
//     var guessesSoFar = document.getElementById("guessesthusfar");

		
// 		 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// 		 var wins = 0;
// 		 var losses = 0;
// 		 var numGuesses = 9;
// 		 var guessChoices = [];

// 		 document.onkeyup = function(event) {

// 		 	var userGuess = event.key;

// 		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// 		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

// 			if (options.indexOf(userGuess) > -1) {

// 				if (userGuess === computerGuess) {
// 					wins++;
// 					numGuesses = 9;
// 					guessChoices = [];
// 				}

// 				if (userGuess != computerGuess) {
// 					numGuesses --;
// 					guessChoices.push(userGuess);
// 				}

// 				if (numGuesses === 0) {

// 				numGuesses = 9;
// 				losses ++;
// 				guessChoices = [];

				
// 			}

// 			var html = 
// 			"<h1> The Psychic Game </h1>" +
// 			"<p>Guess what letter I'm thinking of!</p>" +
// 			"<p>Wins: " + wins + "</p>" +
// 			"<p>Losses: " + losses + "</p>" +
// 			"<p>Guesses Left: " + numGuesses + "</p>" +
// 			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

// 			document.querySelector("#game").innerHTML = html;

			
// 			}
// 		};

// 	</script>

// </body>
// </html>