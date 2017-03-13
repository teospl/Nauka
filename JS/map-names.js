var names = [
  'Maciej',
  'Arek',
  'Gosia',
  'Damian',
  'Ewa'
];

function map(items, action) {
  var result = [];
  for (var i = 0; i < items.length; ++i) {
    var itemResult = action(items[i]);
    result.push(itemResult);
  }
  return result;
}

function toInitials(name) {
  return name[0] + '.';
}

var initials = map(names, toInitials); // ['M.', 'A.', ..]
console.log(initials);
