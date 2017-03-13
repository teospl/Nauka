var numbers = [5, 10, 2, 3, 20];

function reduce(items, base, action) {
  var result = base;
  for (var i = 0; i < items.length; ++i) {
    result = action(result, items[i]);
  }
  return result;
}

function add(a, b) {
  return a + b;
}

var sum = reduce(numbers, 0, add); // 40
console.log(sum);
