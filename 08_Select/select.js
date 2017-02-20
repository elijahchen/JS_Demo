//METHODS
//The document comes with a bunch of methods for selecting elements.
//document.getElementsById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if(isBlue) {
		body.style.background = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000);