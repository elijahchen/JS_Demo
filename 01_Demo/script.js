var userNameFirst = prompt("What is your First Name?");
var userNameLast = prompt("What is your Last Name?");
var userAge = prompt("How old are you?");
var fullName = userNameFirst + " " + userNameLast;
var days = userAge * 365.25;

console.log("Your full name is, " + fullName);
console.log("Your are " + userAge + " old.");
console.log(userAge + " years is roughly " + days + " days.");