var divisibleBy2 = ['0', '2', '4', '6', '8'];

function primeFactors(inputNumber) {
    var tmp = inputNumber.toString();
    var lastChar = tmp[tmp.length-1];
 //   var beforelastChar = tmp[tmp.length-2];
//    console.log(lastChar);   
//    console.log(divisibleBy2.indexOf(lastChar));
    
    
    for(var i=2; i <= tmp; ++i){
        if(tmp%i == 0){
            tmp = tmp/2;
        }
    }
    
    
//    while(tmp >= 1){
//        tmp = tmp.toString();
//        lastChar = tmp[tmp.length-1];
//
//        if(divisibleBy2.indexOf(lastChar) != -1) {
//           console.log(tmp, "podzielna przez 2");
//            tmp = tmp / 2;
//            console.log(tmp);
//        } else if (lastChar == 5) {
//            console.log(tmp, "podzielna przez 5");
//            tmp = tmp / 5;
//            console.log(tmp);
//        } else {
//            console.log('nie spelniono warunkow');
//            console.log(tmp);
//            break;
//        }
//    }
}

primeFactors(13195);