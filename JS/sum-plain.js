var numbers = [2, 5, 1, 7, 8, 9];

function sumNumbers(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; ++i) {
    result += numbers[i];
  }
  return result;
}

console.log(sumNumbers(numbers));
