// function to create a plain clear board with the respective parameters:
// cols = number of cols in this board
// rows = number of rows in this board
// what = start value of every position in this board
function clearBoard(cols, rows, what) {

  var line = [];
  var result = [];
  var cont = 0;

  do {
    for (i=0; i < cols; i++) {
      line.push(what);
    }
    result.push(line);
    line = [];
    cont ++;
  }
  while ( cont < rows );

  return result;

}

// function to setup the position of the queen in the board
function setupQueenPosition(obj, dest) {

  var result = [];

  for (i=0; i < obj.length; i++) {
    for (j=0; j < obj[i].length; j++) {
      if ( i === dest[0] && j === dest[1] ) {
        obj[i][j] = 1;
      }
    }
  }

  result = obj;
  return result;

}

function between(vl, a, b) {

  var result = 0;

  if ( vl >= a && vl <= b ) {
    result = 1;
  }

  return result;

}

function checkAll(x, y, a, b, total) {

  var result = 0;

  if ( between(x,0,total) && between(y,0,total) && between(a,0,total) && between(b,0,total) ) {
    result = 1;
  }

  return result;

}

// Gets the diagonals based on any queen position in the board
function getDiagonals(res, obj, pos, typeCalc) {

  var result = res;
  var a;
  var b;
  var x;
  var y;
  var type = typeCalc;
  var total;

  a = pos[0];
  b = pos[1];
  x = 0;
  y = obj.length - 1;
  total = obj.length - 1;

  while ( x >= 0 && y <= total) {

    switch(type) {

      case 1:
        x = a - 1;
        y = b - 1;
        break;

      case 2:
        x = a - 1;
        y = b + 1;
        break;

      case 3:
        x = a + 1;
        y = b - 1;
        break;

      case 4:
        x = a + 1;
        y = b + 1;
        break;

    }

    if ( checkAll(x,y,a,b,total) === 1 ) {
      //console.log('[' + x + ',' + y + ']');
      result.push([x,y]);
    }
    a = x;
    b = y;
    if (a < 0 || b < 0) {
      break;
    }

  }

  return result;

}

// Checks if the position of the queens evaluate an diagonal attack
function checkDiagonal(obj, pos1, pos2) {

  var res = [];
  var a;
  var b;
  var x;
  var y;
  var result = false;

  res = getDiagonals(res, obj, pos1, 1);
  res = getDiagonals(res, obj, pos1, 2);
  res = getDiagonals(res, obj, pos1, 3);
  res = getDiagonals(res, obj, pos1, 4);

  for (var i=0; i < res.length; i++) {
    if (res[i][0] == pos2[0] && res[i][1] == pos2[1]) {
      result = true;
      break;
    }
  }

  return result;

}

// function to check if the positions of the queens evaluate an attack
function queenThreat(obj,pos1,pos2) {

  var result = false;

  // we check if queens are in the same row
  for (i=0; i < obj.length; i++) {
    for (j=0; j < obj[i].length; j++) {

      // for each position we first check if the queen is there
      if ( obj[i][j] === 1 ) {

        // if queens are in the same row
        if (pos1[0] === pos2[0] || pos1[1] === pos2[1]) {
          result = true;
          break;
        }

      }

    }
  }

  // we check for the diagonals to evaluate everything
  if (!result) {
    result = checkDiagonal(obj,pos1,pos2);
  }

  return '\nqueenThreat(board) === ' + result + ';\n';
}

// main function to generate the board, positions, evaluate the attack and display the result
function generateBoard(white,black) {

  var board = [];

  board = clearBoard(8,8,0);
  board = setupQueenPosition(board, white);
  board = setupQueenPosition(board, black);
  console.log('\ngeneratedBoard ===');
  console.log(board);
  console.log(queenThreat(board,white,black));

}

// main program call
var whiteQueen = [0, 5];
var blackQueen = [5, 0];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
