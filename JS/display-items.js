var numbers = [3, 7, 2, 7, 10, 1, -235];

// Prog. imperatywne
function displayItems(numbers) {
  for (var i = 0; i < numbers.length; ++i) {
    console.log(numbers[i]);
  }
}

// displayItems(numbers);

// Prog. funkcyjne
function forEach(elements, action) {
  for (var i = 0; i < elements.length; ++i) {
    action(elements[i]);
  }
}

function isEven(number) {
  if((number % 2) == 0) {
    console.log('Liczba', number, 'jest parzysta');
  } else {
    console.log('Liczba', number, 'jest nieparzysta');
  }
}

forEach(numbers, isEven);


function printItem(item) {
  console.log(item);
}

forEach(numbers, printItem);
printItem('Some string');
