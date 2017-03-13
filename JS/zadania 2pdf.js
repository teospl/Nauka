/////// numery domow

function alg(street, houseNumber){
	console.log(street);
	for(var i = 1; i<= houseNumber; ++i){
		if(i%2 != 0){
			console.log("################");
			for(var j = 1; j < 13; ++j){
				if(j < 7){
					console.log(i + " / A / " + j);
				} else {
					console.log(i + " / B / " + j);	
				}
			}
		}
	}
}

alg("Algorytmiczna", 8);


///////////// czy podany ciag jest palindromem
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


//// test peselu

function peselValidator(pesel){
	//console.log(pesel, pesel.length);
    if(pesel.length == 11){
        console.log("Twoj pesel jest prawidłowy.");
        if(pesel[0] < 2 ){
        console.log("Urodziłeś się: " + pesel[4] + pesel[5] + " / " + pesel[2] + pesel[3] + " / 20" + pesel[0] + pesel[1]);
        } else if (pesel[2] > 1) {
        	var monthVal = parseInt(pesel[2])-2;
        console.log("Urodziłeś się: " + pesel[4] + pesel[5] + " / " + monthVal + pesel[3] + " / 20" + pesel[0] + pesel[1]);
        } else {
        console.log("Urodziłeś się: " + pesel[4] + pesel[5] + " / " + pesel[2] + pesel[3] + " / 19" + pesel[0] + pesel[1]);	
        }
		if(pesel[9]%2 == 0){
			console.log("Jesteś kobietą");
		} else {
	    	console.log("Jesteś mężczyzną");
		}
    }
}
console.log(peselValidator("88041306908"));


////szyfr cezara

var a = "a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż";
a = a.split(' ').join('\',\'');


function cesarCode(inputText, shift){
	var textToCode = inputText.toLowerCase();
    var keyArray = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż'];
    var shiftedArray = [];
    var result = [];
        for(var i = 0; i < textToCode.length; ++i){
            shiftedArray.push(keyArray.indexOf(textToCode[i])+shift);
        }
        console.log(shiftedArray);
        for(var j =0; j < shiftedArray.length; ++j){
            result.push(keyArray[shiftedArray[j]]);
        }
    console.log(result);
}

function cesarDecode(inputText, shift){
	var textToDecode = inputText.toLowerCase();
    var keyArray = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż'];
    var shiftedArray = [];
    var result = [];
        for(var i = 0; i < textToDecode.length; ++i){
            shiftedArray.push(keyArray.indexOf(textToDecode[i])-shift);
        }
        console.log(shiftedArray);
        for(var j =0; j < shiftedArray.length; ++j){
            result.push(keyArray[shiftedArray[j]]);
        }
    console.log(result);
}

cesarCode("kasia", 2);
cesarDecode('łbtkb', 2);

////////////////////////////// obliczanie ONP

function countONP(inputText){
    var inputArray = inputText.split(" ");
    var tmpStack = [];
    
    console.log(inputArray);
    for(var i = 0; i < inputArray.length; ++i){
    	if(!isNaN(inputArray[i])){
    		tmpStack.push(inputArray[i])
    	} else if() {
    		
    	}
    }
    console.log(tmpStack);    
}

countONP("12 2 3 4 * 10 5 / + * +");













