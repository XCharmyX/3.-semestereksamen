// Get the notification
var notification = document.getElementById("mynotification");

// Get the button that opens the notification
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the notification
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the notification 
btn.onclick = function() {
  notification.style.display = "block";
}

// When the user clicks on <span> (x), close the notification
span.onclick = function() {
  notification.style.display = "none";
}

// When the user clicks anywhere outside of the notification, close it
window.onclick = function(event) {
  if (event.target == notification) {
    notification.style.display = "none";
  }
}
