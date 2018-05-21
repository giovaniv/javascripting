var calculateChange = function(total, cash) {

	var result = {
		twentyDollars: 0,
		TenDollars: 0,
		FiveDollars: 0,
		TwoDollar: 0,
		Dollar: 0,
		Quarter: 0,
		Dime: 0,
		Nickel: 0,
		Penny: 0
	}

	var dif;
	var chave;

	//valid denominations
	var den = [2000,1000,500,200,100,25,10,5,1];

	if (cash > total) {

		dif = cash - total;

		while ( dif !== 0) {

			for (i=0; i<den.length; i++) {

				if ( parseInt(dif / den[i]) != 0 ) {
					chave = Object.keys(result)[i];
					result[chave] += 1;
					dif -= den[i];
					break;
				}

			}

		}

		for (var i in result) {
			if ( result[i] === 0 ) {
				delete result[i];
			} 
		}

		return result;

	}

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
