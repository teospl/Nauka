var stack = [];
console.log(stack, "przed")
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack, "po");
var zdjemij = stack.pop();
console.log(zdjemij, "pop");
console.log(stack, "po pop");

var queue = [];
console.log(queue, "przed")
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);

console.log(queue, "po");
var zmiana = queue.shift();
console.log(zmiana, "shift");
console.log(queue, "po shift");

var queue2 = [];
queue2.add = queue2.push;
queue2.remove = queue2.shift;

queue2.add(1);
var i = queue2.remove();
console.log(i, "remove = shift");