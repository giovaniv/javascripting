function saida(par) {
	var str = "";
	var par1 = par[0];
	var par2 = par[1];
	while (par2 > 0) {
		str += par1; 
		par2 -= 1;
	}
	return str;
}

var repeatNumbers = function(data) {

	var str = "";

	for (i=0; i<data.length; i++) {

		if (i === data.length - 1) {
			str += saida(data[i]);
		}
		else {
			str += saida(data[i]) + ", ";
		}

	}

	return str;

}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));