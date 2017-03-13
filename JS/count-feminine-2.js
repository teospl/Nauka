function map(items, action) {
  var result = [];
  for (var i = 0; i < items.length; ++i) {
    var itemResult = action(items[i]);
    result.push(itemResult);
  }
  return result;
}

function reduce(items, base, action) {
  var result = base;
  for (var i = 0; i < items.length; ++i) {
    result = action(result, items[i]);
  }
  return result;
}

var names = [
  'Maciej',
  'Ewa',
  'Aleksandra',
  'Piotr',
  'Grzegorz',
  'Tomasz',
  'Klaudia'
];

function oneIfFeminine(name) {
  if (name[name.length - 1] == 'a') {
    return 1;
  }
  return 0;
}

function count(b1, b2) {
  return b1 + b2;
}

function countFeminineNames(names) {
  var tmp = map(names, oneIfFeminine);
  var tmp2 = reduce(tmp, 0, count);
  return tmp2;
}

console.log(countFeminineNames(names)); // 3
