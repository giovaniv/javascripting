// function to create the square code of a message
function createSquare(msg) {

  var res = [];
  var total = msg.length;
  var rows = Math.round(Math.sqrt(total));
  var cols = total / rows;
  var cont = 0;
  var limit = 0;
  var start = 0;
  var txt = '';

  do {
    limit = start + cols;
    for (var i=start; i < limit; i++) {
      if (msg[i] !== undefined) {
        txt += msg[i];
      }
    }
    res.push(txt);
    start = i;
    cont++;
    txt = '';
  }
  while (cont < rows);

  return res;

}

// function to create the output of a square code
function createOutput(msg) {

  var rows = msg.length;
  var words = msg[0].length;
  var txt = '';
  var res = '';

  for (i=0; i < words; i++) {
    for (j=0; j < rows; j++) {
      if (msg[j][i] !== undefined) {
        txt += msg[j][i];
      }
    }
    res += txt + ' ';
    txt = '';
  }

  return res;

}

function secretMsg(msg) {

  var txt = msg;
  var sqrt_array = [];
  var output = [];

  // we replace the string to support only numbers and
  // characters without space and special characters
  txt = txt.replace(/[^a-zA-Z0-9]/g,'');

  // we transform the message in a square code message
  sqrt_array = createSquare(txt);

  // we create the output encoded message
  output = createOutput(sqrt_array);

  return output;

}

var prompt = require("prompt-sync")();
var msg = prompt("Enter the message: ");
result = secretMsg(msg);
console.log(result);