var numbers1 = [5, 10, 15, 20, 25];
var numbers2 = [1, 2, 3, 4, 5];
var numbers3 = [];

console.log('Przed:');
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

$.merge(numbers3, numbers1);
$.merge(numbers3, numbers2);

// numbers3 = $.merge($.merge([], numbers1), numbers2);

console.log('Po:');
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
