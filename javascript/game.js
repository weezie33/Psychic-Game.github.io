//References for this html/js come from GWARL201901FSF3-FT 12-CrystalExample Solved 12.html and my Psychic assignment. This source is from the GW Coding Bootcamp, as well as terminal references from w3school.com. Retrieved March 18, 2019.

//Alert the player the basic instructions of the game.
  alert("Welcome, pick a letter between 'a' and 'z' but choose wisely as you only have nine tries.");

//Variables
  var wins = 0;
  var losses = 0;
  var userGuess = 10;
  var previousGuesses = [""];
  var computerChoice = computerChoice;
  var letters = "abcdefghijklmnopqrstuvwxyz";

//The computer options are depicted by var letters and translated into an array and numeric strucure of 0 to 25, given that there are 26 letters in the English alphabet.
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);

//The computers picks a random number from the array and logs it to the console. 
  function computerGuess() {
    letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);
  }

//Once the player acknowledges the alert the next letter key pushed will run the function as an "event".
  document.onkeyup = function(event) {
    var usersGuess = event.key;

//If the user chooses the same letter as the computer the user scores a point (++ — Increment numbers), wins++; there are a total of nine guesses per round.
  if(usersGuess == computerChoice) {
    wins++;
    userGuess = 9;
    previousGuesses = [""];
  }

//If the user chooses a different letter than the one choosen by computer (!== — Not equal value or not equal type) 1 guess will be removed from the userGuess, e.g., 9 -1 = 8 (-- Decrement numbers).
  computerGuess();
    if(usersGuess !== computerChoice) {
      userGuess--;
  }

//When the userGuess reach zero one point (++) is added to the computer and the guesses are reset to 9.
  if(userGuess == 0) {
    losses++;
    previousGuesses = [""]
    userGuess = 9;
  }

// If a non alphabetical key is hit it will subtract one userGuess.
  if(previousGuesses.indexOf(usersGuess) >= 0) {

  } else {
//The push() method adds new items to the end of an array, and returns the new length.
  previousGuesses.push(usersGuess);

// The innerHTML property can be used to get or change any HTML element, including <html> and <body>.
  document.getElementById("wins").innerHTML = "Wins: " + wins;
    console.log(wins);
  
  document.getElementById("losses").innerHTML =  "Losses: " + losses;
    console.log(losses);
  
  document.getElementById("userGuess").innerHTML = "Guesses Remaining: " + userGuess;
    console.log(userGuess);
  
  document.getElementById("previousGuesses").innerHTML = "Your Guesses So Far: " + previousGuesses;
    console.log(previousGuesses);
    }
  }