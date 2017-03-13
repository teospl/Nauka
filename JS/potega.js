function pow(number, toPow) {
  var wynik = 1;

  for (var i = 0; i < toPow; ++i) {
    wynik = wynik * number;
  }

  return wynik;
}

var result = pow(2, 3);
console.log(result);
