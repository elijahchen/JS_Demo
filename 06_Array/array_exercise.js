console.log("CONNECTED")
var arr = ["A", "B", "C", "D"];

//Print reverse
//Write a function that takes an array as an argument and prints out the elements in the array in reverse order.
function reverse(){
	for(var i = arr.length()-1; i > 0; i--){
		console.log(arr[i]);
	}	
}

//isUniform()
//Write a function is Uniform() which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(){
	var comparedValue = arr[0];
	var yes;
	  for(var i = 1; i < arr.length()-1; i++){
	  	if(arr[i] == comparedValue){
	  		comparedValue = arr[i];
	  	} else {
	  		return yes = false;
	  	}
	  }
	  return yes = true;
}

//sumArray()
//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray(numbers){
	var sum = 0;
	arr.forEach(function(index){
		index+=sum;
	});
	return sum;
}

//max()
//Write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(numbers){
	var high;
	for(var i = 0; i < arr.length(); i++){
		if(arr[i] > high){
			high = arr[i];
		}
	}
	return high;
}


