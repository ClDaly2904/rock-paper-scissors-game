//Creating the rules popup
var rulesPopup = document.getElementById("rules-modal");
var rulesBtn = document.getElementById("rules");
var closeBtn = document.getElementsByClassName("close")[0];

/**
 * Create function to display modal on buton click
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