var numbers = [1, 2, 3, 4, 5];
function map(items, action) {
  var result = [];
  for (var i = 0; i < items.length; ++i) {
    var itemResult = action(items[i]);
    result.push(itemResult);
  }
  return result;
}

function isEven(number) {
  return (number % 2) == 0;
}

var numbers2 = map(numbers, isEven);
console.log(numbers); // [1, 2, 3, 4, 5];
console.log(numbers2); // [2, 3, 4, 5, 6];
