var str = "Twinkle twinkle little star.";

function singSong(){
	console.log(str)
	nextPart();
}

function nextPart(){
	var str2 = "How I wonder who you are?";
	console.log(str2)
}

setInterval(function){
	console.log("I am an anonymouse function!");
	singSong();
}, 2000);