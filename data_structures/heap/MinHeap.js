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
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  insert(value) {
    if(value != null) {
      this.heap.push(value);
      const index = this.heap.length - 1;
      this.siftUp(index);
      return true; 
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 
      && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN 
      ) {
      swap (this.heap, parent, index );
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() == 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size 
      && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
      ) {
      element = left;
    } else if (
      right < size
      && this.compareFn(this.heap[element], this.heap[right] === Compare.BIGGER_THAN)
      ) {
      element = right;
    }
    if(index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element); 
    }
  }
  heapify(array) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }

  getAsArray() {
    return this.heap;
  }


}

const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
console.log(heap);
heap.insert(1);
console.log(heap);
console.log(heap.findMinimum());
heap.clear();
const heap1 = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}
console.log(heap);
console.log(heap.extract());
console.log(heap);

