function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  };
  return fibonacci(n);
}
console.log(fibonacciMemoization(2));
console.log(fibonacciMemoization(3));
console.log(fibonacciMemoization(4));
