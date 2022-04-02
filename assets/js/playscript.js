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
 * Creating function to recognise when player clicks on controls,
 * triggers game function and passes relevant parameter
 */
  function clickedButton() {
  rockButton.addEventListener("click", function () {
    gameplay("r");
  })
  
  paperButton.addEventListener("click", function () {
    gameplay("p");
  })
  
  scissorsButton.addEventListener("click", function () {
    gameplay("s");
  })
}

clickedButton();