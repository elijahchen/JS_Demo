function singSong(){
	console.log("Twinkle twinkle little star.")
	nextPart();
}

function nextPart(){
	console.log("How I wonder who you are?")
}

setInterval(function){
	console.log("I am an anonymouse function!");
	singSong();
}, 2000);