var a = {
  name: 'Maciej'
};

var b = {
  name: 'Maciej 2',
  lastName: 'Zasada'
};

// var c = {};
// c.name = a.name;
// c.name = b.name;
// c.lastName = b.lastName;

console.log('Przed:');
console.log(a);
console.log(b);
console.log(c);

c = $.extend({}, a, b);

console.log('Po:');
console.log(a);
console.log(b);
console.log(c);
