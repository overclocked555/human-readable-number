function digits(number) {
    switch(number) {
        case 1:
            return 'one ';
        case 2:
            return 'two ';
        case 3:
            return 'three ';
        case 4:
            return 'four ';
        case 5:
            return 'five ';
        case 6:
            return 'six ';
        case 7:
            return 'seven ';
        case 8:
            return 'eight ';
        case 9:
            return 'nine ';
    }
}

function dozens(number) {
    switch(number) {
        case 2:
            return 'twenty ';
        case 3:
            return 'thirty ';
        case 4:
            return 'forty ';
        case 5:
            return 'fifty ';
        case 6:
            return 'sixty ';
        case 7:
            return 'seventy ';
        case 8:
            return 'eighty ';
        case 9:
            return 'ninety ';
    }
}
function teen(number) {
    switch(number) {
        case 0:
            return 'ten ';
        case 1:
            return 'eleven ';
        case 2:
            return 'twelve ';
        case 3:
            return 'thirteen ';
        case 4:
            return 'fourteen ';
        case 5:
            return 'fifteen ';
        case 6:
            return 'sixteen ';
        case 7:
            return 'seventeen ';
        case 8:
            return 'eighteen ';
        case 9:
            return 'nineteen ';
    }
}

module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  str = '';
  if (number >= 100) {
    str += digits(Math.floor(number / 100));
    str += 'hundred ';
  }
  if (number % 100 >= 20) str += dozens(Math.floor(number % 100 / 10));
  if (19 >= number % 100 && number % 100 >= 10) str += teen(number % 10);  
  if (number % 10 !== 0 && (number % 100 < 10 || number % 100 > 20)) str += digits(number % 10);
  str = str.slice(0, -1);
  return str;
}
