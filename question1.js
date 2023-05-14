

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