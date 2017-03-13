var name = 'SDA';

function test() {
  console.log('test');
}

console.log(name);
console.log(window.name);
test();
window.test();

function test2() {
  var result = 15;
  console.log(result);  // tak
}

console.log(result); // nie
