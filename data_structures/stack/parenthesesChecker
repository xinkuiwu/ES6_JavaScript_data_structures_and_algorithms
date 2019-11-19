function parenthesesChecker(symbols){
const stack = new Stack();
const opens ='([{';
const closers = ')]}';
let symbol;
let balanced = true;
let index = 0;
let top;
while (index < symbols.length && balanced) {
symbol = symbols[index];
if (opens.indexOf(symbol) >= 0) {
stack.push(symbol);
} else if (stack.isEmpty()) {
balanced = false;
} else {
top = stack.pop();
if (!(opens.indexOf(top) === closers.indexOf(symbol))){
balanced = false ;
}
}
index++;
}
return balanced && stack.isEmpty();
}

console.log(parenthesesChecker('{}()([])'));//true
console.log(parenthesesChecker('{}()([}{}])'));//false

parenthesesChecker
