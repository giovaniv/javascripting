function isVowel(letra) {
  var ch;
  ch = letra.toLowerCase();
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    return true;
  } else {
    return false;
  }
}

function tiltLetters(fullString,how) {
  var str = '';
  for (var i=0; i < fullString.length; i++) {
    if ((isVowel(fullString[i])) && (how === 'vowel')) {
      str += fullString[i].toUpperCase();
    }
    else if ((!isVowel(fullString[i])) && (how === 'consonant')) {
      str += fullString[i].toUpperCase();
    }
    else {
      str += fullString[i].toLowerCase();
    }
  }
  return str;
}

function capitalize(w) {
  var letter = '';
  if (w.length === 1) {
    return w.toUpperCase();
  } else {
    letter = w[0].toUpperCase();
    for (var i=1; i<w.length; i++) {
      letter += w[i];
    }
    return letter;
  }
}

function addChar(input,newStyle) {
  var str;
  switch (newStyle) {
    case "snake": str = addSep(input,"_"); break;
    case "kebab": str = addSep(input,"-"); break;
    case "title": str = addSep(input," "); break;
    case "vowel": str = addSep(input," "); break;
    case "consonant": str = addSep(input," "); break;
    default: str = addSep(input,""); break;
  }
  return str;
}

function addSep(input,sep) {
  var arr = [];
  var str;
  arr = input.split(' ');
  for (var i=0; i<arr.length; i++) {
    if (i==0) {
      str = arr[i];
    } else {
      str += sep + arr[i];
    }
  }
  return str;
}

function upperOrLower(input, style) {
  var str;
  switch (style) {
    case "upper":
      str = input.toUpperCase();
      break;
    case "lower":
      str = input.toLowerCase();
      break;
    default:
      str = input;
      break;
  }
  return str;
}

// main function that do the style check with exceptions like
// camel and pascal that is almost identical and snake/kebab/title
// that only the separator changes
function changeIt(input,style) {

  var arr = [];
  var word = '';
  var result = '';
  var ini = 0;

  arr = input.split(' ');

  //if the style is camel, we didnt uppercase the first char
  //if the style is pascal, we do it
  if (style === 'camel') {
    result = arr[0];
    ini = 1;
  }

  // addChar function guarantee that we check for
  // snake/kebab/title style
  for (var i=ini; i<arr.length; i++) {
    word = capitalize(arr[i]);
    result += word;
  }

  return result;

}

function makeCase(input,style) {

  var repeat;
  var str;
  var result = input;

  if (style.indexOf('upper') === 0) {
    repeat = true;
    str = 'upper';
    if (style.indexOf('lower') === 0) {
      str = 'lower';
    }
  }

  if (Array.isArray(style)) {

    for (var i = 0; i < style.length; i++) {

      // camel, pascal, snake, kebab and title style check
      result = changeIt(input, style[i]);

      // add '-', '_' or space when need
      if (style[i] !== 'pascal' && style[i] !== 'camel') {
        result = addChar(input,style[i]);
      }

      // vowel or consonant style check
      if (style[i] === 'vowel' || style[i] === 'consonant') {
        result = tiltLetters(result,style[i]);
      }

      // upper or lower style check
      if (style[i] === 'upper' || style[i] === 'lower') {
        result = upperOrLower(result,style[i]);
      }

    }

    if(repeat) {
      result = upperOrLower(result,str);
    }

  } else {


    // camel, pascal, snake, kebab and title style check
    result = changeIt(input, style);

    // add '-', '_' or space when need
    if (style !== 'pascal' && style !== 'camel') {
      result = addChar(input,style);
    }

    // vowel or consonant style check
    if (style === 'vowel' || style === 'consonant') {
      result = tiltLetters(result,style);
    }

    // upper or lower style check
    if (style === 'upper' || style === 'lower') {
      result = upperOrLower(result,style);
    }

  }

  return result;

};
console.log(makeCase("this is a string","camel"));
console.log(makeCase("this is a string","pascal"));
console.log(makeCase("this is a string","snake"));
console.log(makeCase("this is a string","kebab"));
console.log(makeCase("this is a string","title"));
console.log(makeCase("this is a string","vowel"));
console.log(makeCase("this is a string","consonant"));
console.log(makeCase("this is a string",["upper","snake"]));

