function minCoinChangeGreedy (coins, amount) {
  const change = [];
  let total = 0;
  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
}




console.log(minCoinChangeGreedy([1, 5, 10], 15)); // [5, 10]
console.log(minCoinChangeGreedy([1, 3, 4], 6)); //not the best

