var multiplicationTable = function(maxValue) {

  var result = '';
  var str = '';
  var mult = 1;

  for (i = 1; i <= maxValue; i++) {
    result += '+----';
    if (i === maxValue) {
      result += '+';
    }
  }
  result += '\n';

  while ( mult <= maxValue ) {

    result += '| ';
    for (i = 1; i <= maxValue; i++) {
      if ( (i * mult) < 10 ) {
        str += ' ' + (i * mult) + ' | ';
      }
      else if ( (i * mult) === 100 ) {
        str += (i * mult) + '|';
      }
      else {
        str += (i * mult) + ' | ';
      }
    }
    result += str + ' \n';

    for (i = 1; i <= maxValue; i++) {
      result += '+----';
      if (i === maxValue) {
        result += '+';
      }
    }
    result += '\n';

    mult += 1;
    str = '';

  }

  return result;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
console.log(multiplicationTable(5));
console.log(multiplicationTable(6));
console.log(multiplicationTable(7));
console.log(multiplicationTable(8));
console.log(multiplicationTable(9));
console.log(multiplicationTable(10));