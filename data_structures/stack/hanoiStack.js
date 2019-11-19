//例如把一根柱子上的3个盘移动到另一根柱子上。

//构建汉诺塔结构
function hanoiStack(plates) {
const source = new Stack();
const dest = new Stack();
const helper = new Stack();

for (let i = plates; i > 0; i--) {
source.push(i);
}

return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}

function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves = []) {
if (plates <= 0) {
return moves;
}
if (plates === 1) {
dest.push(source.pop());
const move = {};
move[sourceName] = source.toString();
move[helperName] = helper.toString();
move[destName] = dest.toString();
moves.push(move);
} else {
towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
dest.push(source.pop());
const move = {};
move[sourceName] = source.toString();
move[helperName] = helper.toString();
move[destName] = dest.toString();
moves.push(move);
towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
}
return moves;
}

function hanoi(plates, source, helper, dest, moves = []) {
if (plates <= 0) {
return moves;
}
if (plates === 1) {
moves.push([source, dest]);
} else {
hanoi(plates - 1, source, dest, helper, moves);
moves.push([source, dest]);
hanoi(plates - 1, helper, source, dest, moves);
}
return moves;
}

console.log(hanoiStack(3));

/*

[ { source: '3,2', helper: '', dest: '1' },
{ source: '3', dest: '1', helper: '2' },
{ dest: '', source: '3', helper: '2,1' },
{ source: '', helper: '2,1', dest: '3' },
{ helper: '2', dest: '3', source: '1' },
{ helper: '', source: '1', dest: '3,2' },
{ source: '', helper: '', dest: '3,2,1' } ]

*/

console.log(hanoi(3, 'source', 'helper', 'dest'));

/*

[ [ 'source', 'dest' ],
[ 'source', 'helper' ],
[ 'dest', 'helper' ],
[ 'source', 'dest' ],
[ 'helper', 'source' ],
[ 'helper', 'dest' ],
[ 'source', 'dest' ] ]

*/

hanoiStack
