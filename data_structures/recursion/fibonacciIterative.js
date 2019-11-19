function fibonacciIterative(n) {
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
