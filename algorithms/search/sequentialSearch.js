const DOES_NOT_EXIST = -1;
function defaultEquals(a, b) {
  return a === b;
}

function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(array[i], value)) {
      return i;
    }
  }
  return DOES_NOT_EXIST;
}

const array = [456,789,123,1,32,4,243,321,42,90,10,999];
console.log(array);
console.log(sequentialSearch(array,999));
console.log(sequentialSearch(array,1000));

