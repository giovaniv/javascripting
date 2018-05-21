function numberGuess(num,tries) {

  var answer = prompt("Guess a number: ");
  answer = Number(answer);

  // case the answer is not a number
  if (!Number(answer)) {
    console.log('Not a number! Try again!');
    tries.push(answer);
    numberGuess(num,tries);
  }
  else {

    // if the answer was already guessed
    if ( tries.indexOf(answer) >= 0 ) {
      console.log('Already guessed!');
      tries.push(answer);
      numberGuess(num,tries);
    }

    // case the answer is lower than the number
    else if ( answer < num) {
      console.log('Too Low!');
      tries.push(answer);
      numberGuess(num,tries);
    }

    // case the answer is higher than the number
    else if ( answer > num) {
      console.log('Too High!');
      tries.push(answer);
      numberGuess(num,tries);
    }

    else {
      var total = tries.length + 1;
      console.log('You got it! You took ' + total + ' attempts!');
    }

  }

  return true;

}

var tries = [];
var prompt = require("prompt-sync")();
var randomNumber = Math.floor((Math.random()*100)+1);
numberGuess(randomNumber,tries);
