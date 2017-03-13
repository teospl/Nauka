var partialResults = [true, true, false, true];

function reduce(items, base, action) {
  var result = base;
  for (var i = 0; i < items.length; ++i) {
    result = action(result, items[i]);
  }
  return result;
}

function areBothTrue(b1, b2) {
  return b1 && b2;
}

function canSendForm() {
  return reduce(partialResults, true, areBothTrue);
}

console.log(canSendForm());
