function getInput(){
	var a = prompt('Zgdauj od liczby:');
	var b = prompt('Zgaduj do liczby:');
	var toGues = prompt('Podaj swoją liczbę z przedziału od ' + a + ' do ' + b + '.');
	//var maxAttempts = prompt('Maksymalna dopuszczalna iloć zgadywań:')
	guesNumber(toGues, a, b);
}
function guesNumber(number, from, to){
	var guessed = 1;
	var iterations = 0;
	while(number != guessed){
		guessed = Math.floor((Math.random() * to) + from);
	iterations++;
	}
	console.log('Twoja liczba to: ' + guessed + '. Zgadłem w '+ iterations + ' probach.');
}
getInput();


