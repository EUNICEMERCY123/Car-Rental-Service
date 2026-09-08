// Finding element by ID
var title = document.getElementById("home");


// Finding elements by tag name
var headings = document.getElementsByTagName("h3");


// Finding elements by class name
var cars = document.getElementsByClassName("car");


// Finding elements by CSS selector
var buttons = document.querySelectorAll(".rent");


// Click event
document.getElementById("book").addEventListener("click", function() {

    document.getElementById("result").innerHTML =
        "Your car booking request has been received!";

});
