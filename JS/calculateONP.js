function calculateONP(inputString){
    var inputArray = inputString.split(" ");
    var tmpStack = [];
     
    for(var i = 0; i < inputArray.length; ++i){
        if(!isNaN(inputArray[i])){
            tmpStack.push(inputArray[i]);
            console.log('Wykryto liczbę: ' + inputArray[i] + ' | Stos: ' + tmpStack);
        } else {
             var a = parseInt(tmpStack.pop());
             var b = parseInt(tmpStack.pop());

             switch (inputArray[i]){
                case '+':
                    tmpStack.push(b + a);
                    break;
                case '-':
                    tmpStack.push(b - a);
                    break;
                case '*':
                    tmpStack.push(b * a);
                    break;
                case '/':
                    tmpStack.push(b / a);
                    break;
                default:
                    break;
             }
    console.log('Wykryto znak: ' + inputArray[i] + ' | Stos: ' + tmpStack);  
        }
    }
    console.log('Wynik:', tmpStack);
}
 
calculateONP("12 2 3 4 * 10 5 / + * +");