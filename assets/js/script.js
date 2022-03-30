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