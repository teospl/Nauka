function cesarCipher (str, vector){
	var alphabet ='', cipher ='';
	
	for(var i = 97; i <= 122; ++i){
	//console.log(String.fromCharCode(i));
	alphabet += String.fromCharCode(i);
	}

	for(var i = 0; i < str.length; ++i){
		arg = alphabet.indexOf(str[i])+vector;
		if(arg>alphabet.length) arg -= alphabet.length;
		cipher += alphabet[arg];
	}
	return cipher;
}

cesarCipher('pawel', 5);