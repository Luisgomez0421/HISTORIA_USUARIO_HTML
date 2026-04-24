// Changes the welcome text when the user clicks the button
function changeText() {
  var paragraph = document.getElementById("welcome");
  paragraph.textContent = "Thank you for visiting my portfolio. Here you can see some of the projects I have worked on.";
}


// Shows or hides the extra information
function showHidden() {
  var content = document.getElementById("hidden-content");
  var button = event.target;

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "Hide information";
  } else {
    content.style.display = "none";
    button.textContent = "Show more";
  }
}


// Welcome message when the page loads
window.onload = function() {
  alert("Welcome to my portfolio.");
};


// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e){

  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var recipient = "Luisgomez@idetp.edu.co";
  var subject = "Message from the portfolio";

  var body =
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message;

  window.location.href =
    "mailto:" + recipient +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

});