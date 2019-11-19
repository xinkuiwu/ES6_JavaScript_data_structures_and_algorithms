// import dictionary
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } if (item === undefined) {
    return 'UNDEFINED';
  } if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key,value);
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  keyValues() {
    return Object.values(this.table);
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

    isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }


}

class Graph {
  constructor (isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  addEdge(a, b ) {
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.adjList(b);
    }
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
     return this.adjList;
  }
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s +=`${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }

}
//import Queue
class Queue{
constructor(){
this.count = 0;
this.lowestCount = 0;
this.items ={};
}


enqueue(element) {
this.items[this.count] = element;
this.count++;
}

dequeue() {
if (this.isEmpty()) {
return undefined;
}
const result = this.items[this.lowestCount];
delete this.items[this.lowestCount];
this.lowestCount++;
return result;
}

peek() {
if (this.isEmpty()){
return undefined;
}
return this.items[this.lowestCount];
}

isEmpty() {
return this.size() === 0;
}
size() {
return this.count - this.lowestCount;
}
clear(){
this.items = {};
this.count = 0;
this.lowestCount = 0;
}
toString(){
if (this.isEmpty()){
return '';
}
let objString = `${this.items[this.lowestCount]}`
for (let i= this.lowestCount + 1; i < this.count;i++){
objString = `${objString},${this.items[i]}`;
}
return objString;
}
}

// stack for shortest path - BFS
class Stack {
constructor() {
this.count = 0;
this.items = {};
}

push(element) {
this.items[this.count] = element;
this.count++;
}

pop() {
if (this.isEmpty()) {
return undefined;
}
this.count--;
const result = this.items[this.count];
delete this.items[this.count];
return result;
}

peek() {
if (this.isEmpty()) {
return undefined;
}
return this.items[this.count - 1];
}

isEmpty() {
return this.count === 0;
}

size() {
return this.count;
}

clear() {
/* while (!this.isEmpty()) {
this.pop();
} */
this.items = {};
this.count = 0;
}

toString() {
if (this.isEmpty()) {
return '';
}
let objString = `${this.items[0]}`;
for (let i = 1; i < this.count; i++) {
objString = `${objString},${this.items[i]}`;
}
return objString;
}
}


const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};


const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue;

  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }

  }

};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue;
  const distances =  {};
  const predecessors = {};
  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors
  };
};


const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');
console.log(graph.toString());
console.log('********* bfs with callback ***********');
const printVertex = (value) => {
  console.log('Visited vertex: ' + value)
}
breadthFirstSearch(graph, myVertices[0], printVertex);
console.log('********* shortest path - BFS ***********');
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

const fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i];
  const path = new Stack();
  for(let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += '-' + path.pop();
  }
  console.log(s);
}  

BFS
