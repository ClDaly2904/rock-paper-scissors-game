/**
 * Function to receive stored variable player name from script.js and assign it to the player name span
 */
function assignPlayerName() {
  var receivedName = localStorage.getItem("storedName"); // receive stored variable
  document.getElementById("player-name").innerText = receivedName; // set stored variable to player username
}
window.onload = assignPlayerName();

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
// Based on freeCodeCamp Youtube tutorial
function convertToMessage(term) {
  if (term === "rockButton") return "Rock";
  if (term === "paperButton") return "Paper";
  return "Scissors";
}

function playerWins(playerChoiceDisplay, computerChoiceDisplay) {
  // Increase player score
  let oldScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++oldScore; // Based on LoveMaths increase score code
  // Display result message to congratulate player
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You played ${convertToMessage(playerChoiceDisplay)}, Computer played ${convertToMessage(computerChoiceDisplay)}.
  ${convertToMessage(playerChoiceDisplay)} beats  ${convertToMessage(computerChoiceDisplay)}!
  You win this draw!`;
  playWinSound();
  overallWinner();
};

function playerLoses(playerChoiceDisplay, computerChoiceDisplay) {
  // Increase computer score
  let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++oldComputerScore; // Based on LoveMaths increase score code
  // Display result message to commiserate player*/
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You played ${convertToMessage(playerChoiceDisplay)}, Computer played ${convertToMessage(computerChoiceDisplay)}.
  ${convertToMessage(computerChoiceDisplay)} beats  ${convertToMessage(playerChoiceDisplay)}!
  You lose this draw!`;
  playLoseSound();
  overallWinner();
}

function playerDraws(playerChoiceDisplay, computerChoiceDisplay) {
  // Display draw message to player */
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
// Based on freeCodeCamp YouTube tutorial
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
    document.getElementById("computer-choice").src="assets/images/paper-icon.png";
    document.getElementById("computer-choice").alt="Icon of a piece of paper";
  } else if (computerChoiceDisplay == "scissorsButton") {
    document.getElementById("computer-choice").src="assets/images/scissors-icon.png";
    document.getElementById("computer-choice").alt="Icon of a pair of scissors";
  } else {
    document.getElementById("computer-choice").src="assets/images/rock-icon.png";
    document.getElementById("computer-choice").alt-"Icon of a hand in a fist";
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
  playerChoiceDisplay.src="assets/images/rock-icon.png"
  playerChoiceDisplay.alt="Icon of a hand in a fist";
  })
  
paperButton.addEventListener("click", function () {
  gameplay("paperButton");
  playerChoiceDisplay.src="assets/images/paper-icon.png"
  playerChoiceDisplay.alt="Icon of a piece of paper";
  })
  
scissorsButton.addEventListener("click", function () {
  gameplay("scissorsButton");
  playerChoiceDisplay.src="assets/images/scissors-icon.png";
  playerChoiceDisplay.alt="Icon of a pair of scissors";
  })
}

/**
 * Function to compare player and computer score to overall victory conditions, if met trigger
 * MatchWinModal or MatchLoseModal functions
 */
function overallWinner() {
  let playerScore = parseInt(document.getElementById("player-score").innerText);
  let computerScore = parseInt(document.getElementById("computer-score").innerText);
  if (playerScore === 5) {
    let winModal = document.getElementById("win-modal");
    winModal.style.display = "block";
  } if (computerScore === 5) {
    let loseModal = document.getElementById("lose-modal");
    loseModal.style.display = "block";
  }
  let closeWinBtn = document.getElementById("win-close");
  let closeLoseBtn = document.getElementById("lose-close");
  closeWinBtn.addEventListener("click", closeResult);
  closeLoseBtn.addEventListener("click", closeResult);
}

clickedButton();

/**
 * Triggers closeResult function when user clicks outside modal
 */
window.addEventListener("click", function(event) {
  let winModal = document.getElementById("win-modal");
  let loseModal = document.getElementById("lose-modal");
  if (event.target == winModal) {
    closeResult();
  } else if (event.target == loseModal) {
    closeResult();
  }
})

/**
 * Function to close result popup, triggers setting of scores and result-message div
 */
function closeResult() {
  let winModal = document.getElementById("win-modal");
  let loseModal = document.getElementById("lose-modal");
  winModal.style.display = "none";
  loseModal.style.display = "none";
  resetScores();
}

/**
 * Resets player and computer scores to 0, resets result message div to original message
 */
function resetScores() {
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let resultMessageDisplay = document.getElementById("result-message");
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  resultMessageDisplay.innerText = "Choose from one of the buttons above to get started...";
}

let soundButton = document.getElementById("sound-button");
soundButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (soundButton.innerHTML === "Sound on") {
    soundButton.innerHTML = "Sound off";
    mutePage();// Function to mute
  } else if (soundButton.innerHTML === "Sound off") {
    soundButton.innerHTML = "Sound on";
    unmutePage();// Function to unmute
  }
}

//Code to mute and unmute all pages based on code found on stack overflow
// Mute a singular HTML5 element
function muteMe(elem) {
  elem.muted = true;
}

/**
 * Function that mutes all audio elements on page, calls on function to mute singular element
 */
function mutePage() {
  var elems = document.querySelectorAll("audio");

  [].forEach.call(elems, function(elem) { muteMe(elem); });
}

// Unmute a singular HTML5 element
function unmuteMe(elem) {
  elem.muted = false;
}

/**
 * Function that unmutes all audio elements on page, calls on function to unmute singular element
 */
function unmutePage() {
  var elems = document.querySelectorAll("audio");

  [].forEach.call(elems, function(elem) { unmuteMe(elem); });
}