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
  /* trigger function to display different img in computer choice div */
}

function playerWins() {
  /* Increase player score */
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
    /* Display result message to congratulate player*/
    let resultMessageDisplay = document.getElementById("result-message");
    resultMessageDisplay.innerText = `Congratulations! You win this draw!`
};

function playerLoses() {
    /* Increase computer score */
    let oldComputerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldComputerScore;
    /* Display result message to commiserate player*/
    let resultMessageDisplay = document.getElementById("result-message");
    resultMessageDisplay.innerText = `Sorry! Computer wins this draw!`
}

function playerDraws() {
  /* Display draw message to player */
  let resultMessageDisplay = document.getElementById("result-message");
  resultMessageDisplay.innerText = `You both drew the same! It's a draw!`
}


/**
 * Function to use switch statement to compare player and computer choices,
 * works out the winner and triggers the relevant function
 */
function gameplay (playerChoiceDisplay) {
  let computerChoiceDisplay = generateComputerChoice();
  switch (playerChoiceDisplay + computerChoiceDisplay) {
    case "rockButtonscissorsButton":
    case "scissorsButtonpaperButton":
    case "paperButtonrockButton":
      playerWins();
      break;
    case "rockButtonpaperButton":
    case "scissorsButtonrockButton":
    case "paperButtonscissorsButton":
      playerLoses();
      break;
      case "rockButtonrockButton":
      case "scissorsButtonscissorsButton":
      case "paperButtonpaperButton":
      playerDraws();
  }
}

/**
 * Creating function to recognise when player clicks on controls
 * and makes their choice, triggers game function and passes relevant parameter
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
  /* trigger function to display different img for player choice display*/
}

clickedButton();