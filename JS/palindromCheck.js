function isPalindrom(text){
	text = text.split(" ").join("");
	var check = text.length/2;
	for(var i = 0; i < text.length/2; ++i){
		if(text[i] == text[text.length-i-1]){
			console.log(text[i] + " == " + text[text.length-i-1]);
			check--;
		}
	}
	if(check < 1){
		return true;
	}
	return false;
}

isPalindrom("kobyla ma maly bok");