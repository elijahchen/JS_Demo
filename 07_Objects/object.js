//OBJECTS CAN HOLD ALL SORTS OF DATA
var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Romeo", "Juliet"];
	pet: {
		name: "Goldie",
		species: "Dog",
		age: 2
	}
};

//Bracket notation, similar to arrays:
console.log(person["name"]);
//Dot notation
console.log(person.name);

//**** RETRIEVING DATA ****
//You cannot use dot notation if the property starts with a number
someObject.1blah //Invalid
someObject["1blah"] //Valid

//You can lookup using a variable with bracket notation
var str = "name";
someObject.str //Doesn't look for "name"
someObject[str] //Does evaluate str and looks for "name"

//You cannot use dot notation for property names with spaces
someObject.fav color //Invalid
someObject["fav color"]; //Valid

//Accessing and modifying a parameter within an object
person.age += 1;


//**** CREATING OBJECTS ****
// Make an empty object and then add to it
var person = {
	person.name = "Travis";
	person.age= 21;
	person.city = "LA";
};
// All at once
var person1 = {
	name: "Travis",
	age: 21,
	city:"LA"
};
// Another way of initializing an object
ver person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

//========================================

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"}
	],
	color: "Blue",
	isEvil: true
};

someObject.friends[0].name;
