console.log('arguments / $.makeArray()');

function add() {
  console.log(arguments);
  var argsFrom1 = $.makeArray(arguments).splice(1);
  console.log(argsFrom1);
}

add(5, 10, 1, 6, 2, 'sdfds', true);
