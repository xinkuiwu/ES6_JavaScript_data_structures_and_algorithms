function factorialIterative(number) {
  if (number < 0 ) {
    return undefined;
  }
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n ;
  }
  return total;
}

console.log(factorialIterative(5)); //120
