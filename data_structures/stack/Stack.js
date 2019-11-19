// @ts-check

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
const stack = new Stack(); // new StackArray();

// using WeakMap to store Stack items we ensure true privacy
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs true

stack.push(6);
stack.push(8);

console.log('stack after push 5 and 8 => ', stack.toString());

console.log('stack.peek() => ', stack.peek()); // outputs 8

stack.push(11);

console.log('stack.size() after push 11 => ', stack.size()); // outputs 3
console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();

console.log('stack.size() after push 15 and pop twice => ', stack.size());
