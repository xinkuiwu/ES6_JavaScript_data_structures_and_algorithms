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

function selectionSort(array, compareFn = defaultCompare) {
  const {length} = array;
  let indexMin;
  for (let i = 0; i < length -1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}


function createNonSortedArray(size){
  var array = [];
  for (let i = size; i > 0; i--){
      array.push(i);
  }
  return array;
}

const array = createNonSortedArray(5);
console.log(array);
console.log(selectionSort(array))
