function runAction(arg1, arg2, arg3) {
  console.log('Rozpoczynam');
  var result = arg1(arg2, arg3);
  console.log('Wynik:', result);
}

var add = function (l1, l2) {
  return l1 + l2;
};

var multiply = function (l1, l2) {
  return l1 * l2;
};

runAction(add, 5, 7);
runAction(multiply, 5, 7);
