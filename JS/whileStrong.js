function strongWithWhile(inputNumber) {
	var counter = 0;
	var result = 1;
	do{
		result *= counter;
		counter++;
	} while(counter <= inputNumber);
	return result;
}
console.log('Silnia z 0:', strongWithWhile(0)); //1
console.log('Silnia z 1:', strongWithWhile(1)); //1
console.log('Silnia z 4:', strongWithWhile(4)); //24
console.log('Silnia z 5:', strongWithWhile(5)); //120