function returnMostUsedWord(str) {
	var arr = [];
	arr = str.split(' ');
	for (i=0; i<arr.length; i++) {
		if (arr.indexOf(arr[i])) {
			return arr[i];
		}
	}
}

console.log(returnMostUsedWord("If you know the enemy and know yourself you need not fear the result of a hundred battles"));