function first() {
	 console.log('Wysolowano pierwsza f()');
}

function second() {
	 console.log('Wysolowano druga f()');
}

function lottery(){
	var draw = Math.random();
	if (draw < 0.5){
		first();
	} else {
		second();
	}
}

lottery();
lottery();
lottery();
lottery();
lottery();
lottery();