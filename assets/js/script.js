//Creating the rules popup
var rulesPopup = document.getElementById("rules-modal");
var rulesBtn = document.getElementById("rules");
var closeBtn = document.getElementsByClassName("close")[0];

/**
 * Create function to display modal on button click
 */
rulesBtn.onclick = function() {
  rulesPopup.style.display = "block";
}

/**
 * Function to close modal on button click
 */
closeBtn.onclick = function() {
  rulesPopup.style.display = "none";
}

/**
 * Create function so modal closes when user clicks outside of popup area
 */
window.onclick = function(event) {
  if (event.target == rulesPopup) {
    rulesPopup.style.display = "none";
  }
}

// Player username
/**
 * Creating function to get and save player username
 */
function handleSubmit() {
  let playerName = (document.getElementById("playername-input").value);
  localStorage.setItem("storedName", playerName);
}

let submitPlayer = document.getElementById("submit-name");
submitPlayer.addEventListener("click", handleSubmit);

/*// Assigning player username to span in play.html
function assignPlayerName() {
  localStorage.getItem("storedName", playerName);
  let displayPlayer = document.getElementById("player-name").value;
  displayPlayer = playerName;
}
window.onload = assignPlayerName(); */

// Not allowing submit before username box filled

