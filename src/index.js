const M = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
let arr = [];
let result = [];
let str;
let strEl = '';
for (let i = 0; i < expr.length; i+=10) {
	arr.push(expr.slice(i, i+10));
}

arr.forEach(el => {
  if (el === '**********') {
  	str = ' ';
    result.push(str);
  }
  for (let i = 0; i < el.length; i+=2) {
    str = el.slice(i, i+2);
    if (str === '10') {
	strEl += '.';
    } else if (str === '11') {
	strEl += '-';
    }
    }
    result.push(strEl);
  strEl = '';
});

result.forEach(el => {
	for (let key in M) {
  		if (key === el) {
  strEl += M[key];
    }
    }
});
return strEl;
}

module.exports = {
    decode
}