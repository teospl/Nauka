function isDateValid(day, month, year) {
  if (day < 1 || day > 31) {
    return false;
  }

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    // 30 dni
    if (day > 30) {
      return false;
    }
  } else if (month == 2) {
    // 28 dni
    if (day > 28) {
      return false;
    }
  }
  
  return true;
}

var isValid = isDateValid(-1, 1, 2016);
console.log(isValid);
