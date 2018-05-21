function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
}

var conditionalSum = function(values, condition) {
  
	var sum = 0;

	for (i=0; i<values.length; i++) {
		switch (condition) {
			case 'even':
				if (isEven(values[i])) {
					sum += values[i];
				}
				break;

			case 'odd':
				if (!isEven(values[i])) {
					sum += values[i];
				}
				break;

			default:
				break;
		}
	}

	return sum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));