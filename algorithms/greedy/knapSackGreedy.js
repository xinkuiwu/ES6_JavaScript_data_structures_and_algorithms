function knapSackGreedy(capacity, weights, values) {
  const n = values.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i];
      val += r*values[i];
      load += weights[i]; 
    }
  }
  return val;
}



const values = [3,4,5];
const weights = [2,3,4];
const capacity = 5;

console.log(knapSackGreedy(capacity, weights, values));

