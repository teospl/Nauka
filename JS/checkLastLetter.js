function checkLastLetter(inputName) {
	if(inputName[inputName.length-1] == 'a'){
		return true;
	}
	return false;
}
console.log(checkLastLetter('Mateusz'));
console.log(checkLastLetter('Anabela'));