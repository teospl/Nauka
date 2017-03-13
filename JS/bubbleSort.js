var toSort = [4, 6, 1, 6, 0, 3, 9, 3, 7, 2, 8];

function bubbleSort(numbers) {
  var swapped = true,
    tmp;
  numbers = numbers.concat([]);
  while (swapped) {
    swapped = false;
    console.log('Obecnie:', numbers);
    for (var i = 0; i < numbers.length - 1; ++i) {
      if (numbers[i] > numbers[i + 1]) {
        tmp = numbers[i];
        console.log('Zamieniam:', numbers[i], numbers[i + 1]);
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = tmp;
        swapped = true;
      }
    }
  }
  return numbers;
}

console.log('Wynik:', bubbleSort(toSort));
