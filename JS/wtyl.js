var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function printBackFrom(i) {
  console.log(numbers[i]);
  if (i != 0) {
    printBackFrom(i - 1);
  }
}

printBackFrom(6);

// 6  <----- OK
// 5
// 4
// 3
// 2
// 1
// 0
