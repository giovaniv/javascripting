function capitalize(w) {
	var letter = '';
	if (w.length === 1) {
		return w.toUpperCase();
	} else {
		letter = w[0].toUpperCase();
		for (i=1; i<w.length; i++) {
			letter += w[i];
		}
		return letter;
	}
}

var camelCase = function(input) {
  
	var arr = [];
	var word = '';
	var result = '';

	arr = input.split(' ');

	result = arr[0];

	for (var i=1; i<arr.length; i++) {
		word = capitalize(arr[i]);
		result += word;
	}

	return result;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));