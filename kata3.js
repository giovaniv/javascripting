function strMonth(num) {
	switch(num) {
		case '01': return 'January'; break;
		case '02': return 'February'; break;
		case '03': return 'March'; break;
		case '04': return 'April'; break;
		case '05': return 'May'; break;
		case '06': return 'June'; break;
		case '07': return 'July'; break;
		case '08': return 'August'; break;
		case '09': return 'September'; break;
		case '10': return 'October'; break;
		case '11': return 'November'; break;
		case '12': return 'December'; break;
		default: return 'Month doesnt exist'; break;
	}
}

function strDay(numero) {

	var num = Number(numero);

	var str_add = "";

	if (num === 1 || num === 21 || num === 31) {
		str_add = 'st';
	}
	else if (num === 2 || num == 22) {
		str_add = 'nd';
	}
	else if (num === 3 || num === 23) {
		str_add = 'rd';
	}
	else {
		str_add = 'th';
	}

	return num + str_add;
}


var talkingCalendar = function(date) {
  
	var str = date.split("/");
	var year = str[0];
	var month = strMonth(str[1]);
	var day = strDay(str[2]);

	return month + ' ' + day + ', ' + year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));