// Getting all the DOM elements needed for gameplay
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
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

/**
 * Convert player and computer choice input for better user readablilty
 */
function convertToMessage(term) {
  if (term === "rockButton") return "Rock";
  if (term === "paperButton") return "Paper";
  return "Scissors";
}

function playerWins(playerChoiceDisplay, computerChoiceDisplay) {
  /* Increase player score */
  let oldScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++oldScore;
  /* Display result message to congratulate player*/
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You played ${convertToMessage(playerChoiceDisplay)}, Computer played ${convertToMessage(computerChoiceDisplay)}.
  ${convertToMessage(playerChoiceDisplay)} beats  ${convertToMessage(computerChoiceDisplay)}!
  You win this draw!`;
  playWinSound();
};

function playerLoses(playerChoiceDisplay, computerChoiceDisplay) {
  /* Increase computer score */
  let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++oldComputerScore;
  /* Display result message to commiserate player*/
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You played ${convertToMessage(playerChoiceDisplay)}, Computer played ${convertToMessage(computerChoiceDisplay)}.
  ${convertToMessage(computerChoiceDisplay)} beats  ${convertToMessage(playerChoiceDisplay)}!
  You lose this draw!`;
  playLoseSound();
}

function playerDraws(playerChoiceDisplay, computerChoiceDisplay) {
  /* Display draw message to player */
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You played ${convertToMessage(playerChoiceDisplay)}, Computer played ${convertToMessage(computerChoiceDisplay)}.
  It's a draw!`
  playDrawSound();
}

// Plays win sound if player wins
function playWinSound(){
  let winSound = document.getElementById("win-sound");
  winSound.play();
}

// Plays lose sound if player loses
function playLoseSound(){
  let loseSound = document.getElementById("lose-sound");
  loseSound.play();
}

// Plays draw sound if player draws
function playDrawSound(){
  let drawSound = document.getElementById("draw-sound");
  drawSound.play();
}

/**
 * Function to use switch statement to compare player and computer choices,
 * works out the winner and triggers the relevant function
 */
function gameplay (playerChoiceDisplay) {
  let computerChoiceDisplay = generateComputerChoice();
  updateComputerChoice(computerChoiceDisplay);
   switch (playerChoiceDisplay + computerChoiceDisplay) {
    case "rockButtonscissorsButton":
    case "scissorsButtonpaperButton":
    case "paperButtonrockButton":
      playerWins(playerChoiceDisplay, computerChoiceDisplay);
      break;
    case "rockButtonpaperButton":
    case "scissorsButtonrockButton":
    case "paperButtonscissorsButton":
      playerLoses(playerChoiceDisplay, computerChoiceDisplay);
      break;
      case "rockButtonrockButton":
      case "scissorsButtonscissorsButton":
      case "paperButtonpaperButton":
      playerDraws(playerChoiceDisplay, computerChoiceDisplay);
  }
}

// Updates computer choice display icon to reflect randomly generated computer choice
function updateComputerChoice(computerChoiceDisplay) {
  if (computerChoiceDisplay == "paperButton") {
    document.getElementById("computer-choice").src="/assets/images/paper-icon.png";
  } else if (computerChoiceDisplay == "scissorsButton") {
    document.getElementById("computer-choice").src="/assets/images/scissors-icon.png";
  } else {
    document.getElementById("computer-choice").src="/assets/images/rock-icon.png";
  }
}

/**
 * Creating function to recognise when player clicks on controls
 * and makes their choice, triggers game function and passes relevant parameter
 */
function clickedButton() {
  rockButton.addEventListener("click", function () {
  gameplay("rockButton");
  // updates player choice display img to relevant icon
  playerChoiceDisplay.src="/assets/images/rock-icon.png"
  })
  
paperButton.addEventListener("click", function () {
  gameplay("paperButton");
  playerChoiceDisplay.src="/assets/images/paper-icon.png"
  })
  
scissorsButton.addEventListener("click", function () {
  gameplay("scissorsButton");
  playerChoiceDisplay.src="/assets/images/scissors-icon.png";
  })
}

clickedButton();