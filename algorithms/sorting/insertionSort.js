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

function insertionSort(array, compareFn = defaultCompare) {
  const {length} = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[j];
    while(j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array [j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}




const array = [3, 5, 1, 4, 2];
console.log(array);
console.log(insertionSort(array));

