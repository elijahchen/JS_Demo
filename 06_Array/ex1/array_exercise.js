//Print reverse
//Write a function that takes an array as an argument and prints out the elements in the array in reverse order.
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}	
}

//isUniform()
//Write a function is Uniform() which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(arr){
	var comparedValue = arr[0];
	  for(var i = 1; i < arr.length; i++){
	  	if(arr[i] !== comparedValue){
	  		return false;
	  	}
	  }
	  return true;
}

//sumArray()
//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray(arr){
	var sum = 0;
	arr.forEach(function(index){
		sum+=index;
	});
	return sum;
}

//max()
//Write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(arr){
	var high = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > high){
			high = arr[i];
		}
	}
	return high;
}


