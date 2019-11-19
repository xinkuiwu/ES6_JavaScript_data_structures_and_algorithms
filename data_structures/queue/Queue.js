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

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue);
console.log(queue.size());
console.log(queue.toString());
queue.dequeue();
console.log(queue);
console.log(queue.peek());
queue.clear();
console.log(queue);

Queue
