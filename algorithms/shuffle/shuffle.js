function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const randomIndex = Math.floor((Math.random() * (i+1)));
    swap(array, i, randomIndex);
  }
  return array;
}

const array = [1,2,3,4,5,6,7,8,9];
console.log(array);
console.log(shuffle(array));

