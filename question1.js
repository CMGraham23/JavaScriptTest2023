/*
Q1: 

Write a function that takes in an array of numbers and uses a callback function to filter out even numbers. The function should implement the callback function as a separate function that takes a single argument (a number) and returns true if the number is even and false otherwise.

Input Format
arr: An array of numbers to be filtered.
isEven: A function that takes a single argument (a number) and returns true if the number is even and false otherwise.
Output Format
The function should return a new array containing only the odd numbers from the input array.


*/

function isEven(num) {
	return num % 2 === 0;
}



function filter(arr, callback) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (!callback(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

let output = filter([1, 2, 3, 4], isEven); // [1, 3]
console.log(output);

let output2 = filter([1, 2, 3, 4, 5, 6, 7, 8], isEven); // [1, 3]
console.log(output2);