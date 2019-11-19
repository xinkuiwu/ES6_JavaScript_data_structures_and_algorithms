function baseConverter(decNumber, base) {
const remStack = new Stack();
const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = decNumber;
let rem;
let baseString = '';

if (!(base >= 2 && base <= 36)) {
return '';
}

while (number > 0) {
rem = Math.floor(number % base);
remStack.push(rem);
number = Math.floor(number / base);
}

while (!remStack.isEmpty()) {
baseString += digits[remStack.pop()];
}

return baseString;
}

console.log(baseConverter(1023, 2));
console.log(baseConverter(1023, 4));
console.log(baseConverter(1023, 16));
console.log(baseConverter(1023, 25));

baseConverter
