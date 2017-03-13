function extend() {
  for (var i = 1; i < arguments.length; ++i) {
    for (var key in arguments[i]) {
      arguments[0][key] = arguments[i][key];
    }
  }
  return arguments[0];
}

var a = {
  name: 'Maciej',
  test: 15
};
var b = {
  lastName: 'Zasada'
};
var c = extend({}, a, b, {whatever: 15});
console.log(a);
console.log(b);
console.log(c);
