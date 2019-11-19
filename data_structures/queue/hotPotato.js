function hotPotato(elementList, num){
const queue = new Queue;
const elimitatedList = [];
for (let i = 0; i < elementList.length; i++){
queue.enqueue(elementList[i]);
}
while (queue.size() > 1 ){
for (let i = 0; i < num; i++){
queue.enqueue(queue.dequeue());
}
elimitatedList.push(queue.dequeue());
}
return {
elimitatedList: elimitatedList,
winner: queue.dequeue()
};
}
const names = ['a','b','c','d','e'];
const result = hotPotato(names, 7);
result.elimitatedList.forEach(name => {
console.log(`${name} lost the game.`)
});
console.log(`The winner is ${result.winner}`)

/*

c lost the game.
b lost the game.
e lost the game.
d lost the game.
The winner is a

*/

hotPotato
