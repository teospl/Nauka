/// Alphabet preparation
//var a = "a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż";
//a = a.split(' ').join('\',\'');

function cesarCode(inputText, operation, shift){
    var textToCode = inputText.toLowerCase();
    var keyArray = ['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż'];
    var shiftedArray = [];
    var result = [];
        if(operation == 'code') {
            for(var c = 0; c < textToCode.length; ++c) {
                arg = keyArray.indexOf(textToCode[c])+shift;
                if(arg >= keyArray.length) {arg -= keyArray.length;}
                shiftedArray.push(arg);
            }
        } else if (operation == 'decode') {
            for(var d = 0; d < textToCode.length; ++d){
                arg = keyArray.indexOf(textToCode[d])-shift;
               // console.log(arg, keyArray.length);
                if(arg < 0) {arg += keyArray.length;}
                shiftedArray.push(arg);
            }
        }
        //console.log(shiftedArray);
        for(var i =0; i < shiftedArray.length; ++i){
            result.push(keyArray[shiftedArray[i]]);
        }
    return result;
}

console.log(cesarCode('pawełż', 'code', 2));
console.log(cesarCode('sbzfną', 'decode', 2));