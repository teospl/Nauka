function guesNumberGame(){
	var from = prompt('podaj minimum');
	var to = prompt('podaj max');
	var lives = prompt('ile chcesz mieć szans? / jesli wpiszesz zero, to masz nieskonczona ilosc.');
	var stillInTheGame = true;
	var i = 0;
	
	var generatedNum = Math.round((Math.random() * to) + from);
	if(lives > 0){
		for(i = 0; i < lives; ++i){
			if(parseInt(prompt('Podaj swój strzał.')) == generatedNum) {
				alert('Brawo! wygrales. Liczba ' + generatedNum + ' zostala odgadnieta w ' + i + ' probach!');
				return;
			} 
			
		}
	console.log('przegrana! wylosowana liczba to: ' + generatedNum + ' . Miales ' + lives + ' prob na odgadniecie.');
	
	} else if (lives<=0){
		while (stillInTheGame) {
			i++;
			if(parseInt(prompt('Podaj swój strzał.')) == generatedNum) {
			alert('Brawo! wygrales. Liczba ' + generatedNum + ' zostala odgadnieta w ' + i + ' probach!');
			stillInTheGame = false;
			} 
		}
	}
}

guesNumberGame();