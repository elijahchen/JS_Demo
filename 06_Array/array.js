//Use push to add to the end of an array
var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red", "orange", "yellow", "green"]

// Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow", "green"];
colors.pop();
//["red", "orange", "yellow"]

//pop() returns the removed element
var col = colors.pop(); //orange



//Use unshift to add to the front of an array
var colors = ["red", "orange", "yellow", "green"];
colors.unshift("infrared");
//["infrared", "red", "orange", "yellow", "green"]

//Use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow", "green"];

//shift() also returns the removed element
var col = colors.shift(); //orange



//Use indexOf() to find an index of an item in an array
var friends = ["Tim", "David", "Susan", "Lorne"];
//returns the first index of which a given element can be found
friends.indexOf("David"); //1
firends.indexOf("Susan"); //2
//returns -1 if the element is not present
friends.indexOf("Hank"); //-1



//Use slice() to copy parts of an array
var fruits = ["banana", "orange", "lemon", "mango"];
//Use slice to copy the 2nd and 3rd fruits
//Specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);
//You can also use slice() to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
//Both arrays are [1, 2, 3]