const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = findMaxValue(array);
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  counts.forEach((element, i) => {
    while(element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
}



const array = [5,4,3,2,3,1];
console.log(array);
console.log(countingSort(array));

