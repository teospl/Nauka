var seconds = 0;

var stoper = setInterval(function() {
	 console.clear();
	 ++seconds;
	 console.log(seconds);
	 console.log('Wpisz stop(); aby zatrzymać odliczanie.');
}, 1000);

function stop(){
	clearInterval(stoper);
}

stoper();