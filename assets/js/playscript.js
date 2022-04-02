// Getting all the DOM elements needed for gameplay
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultMessageDisplay = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

/**
 * Function to calculate computer's choice using random number generator between 0 and 2,
 * assigns that number either rock, paper or scissors. Takes parameter from clickedButton function
 */
function generateComputerChoice() {
  let choices = ['rockButton', 'paperButton', 'scissorsButton'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

generateComputerChoice();

/**
 * Creating function to recognise when player clicks on controls,
 * triggers game function and passes relevant parameter
 */
function clickedButton() {
  rockButton.addEventListener("click", function () {
    gameplay("rockButton");
  })
  
paperButton.addEventListener("click", function () {
  gameplay("paperButton");
  })
  
scissorsButton.addEventListener("click", function () {
  gameplay("scissorsButton");
  })
}

clickedButton();