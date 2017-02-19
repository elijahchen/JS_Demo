 //To call this function:
 //myForEach([1,2,3], alert);
 function myForEach(arr, func){
 	//Loop through array
 	for(var i = 0; i < arr.length; i++){
 		//Call func for each item in array
 		func(arr[i]);
 	}
 }

 //Anonymous functions demo, it will be called once and cease to exist
 // (function(){
 // 	console.log("I'M A FUNCTION!!");
 // })()

//Using an array prototype
//To call:
//var friends = [1,2,3,4,5];
//friends.myForEach(alert);
 Array.prototype.myForEach = function(func){
 	for(var i = 0; i < this.length; i++){
 		func(this[i]);
 	}
 }