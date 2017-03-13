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

function isNameFeminine(name) {
  return name[name.length - 1] == 'a';
}

function sumBooleans(b1, b2) {
  if (b2) {
    return b1 + 1;
  }
  return b1;
}

function countFeminineNames(names) {
  var tmp = map(names, isNameFeminine);
  var tmp2 = reduce(tmp, 0, sumBooleans);
  return tmp2;
}

console.log(countFeminineNames(names)); // 3
