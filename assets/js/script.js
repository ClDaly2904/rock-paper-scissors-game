//Creating the rules popup
var rulesPopup = document.getElementById("rules-modal");
var rulesBtn = document.getElementById("rules");
var closeBtn = document.getElementsByClassName("close")[0];

/**
 * Display modal on button click
 */
rulesBtn.onclick = function() {
  rulesPopup.style.display = "block";
}

/**
 * Close modal on button click
 */
closeBtn.onclick = function() {
  rulesPopup.style.display = "none";
}

/**
 * Modal closes when user clicks outside of popup area
 */
window.onclick = function(event) {
  if (event.target == rulesPopup) {
    rulesPopup.style.display = "none";
  }
}

// Creating click event to trigger storing player username variable
let submitPlayerBtn = document.getElementById("submit-name");
submitPlayerBtn.addEventListener("click", handleSubmitUsername);

/**
 * Creating function to get and save player username
 */
function handleSubmitUsername(event) {
  event.preventDefault();
  var playerName = (document.getElementById("playername-input").value); // creates variable from user input
  localStorage.setItem("storedName", playerName); // sends variable to local storage
}

// Not allowing submit before username box filled */
