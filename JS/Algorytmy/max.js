//function max(a, b) {
//    if (a < b) {
//        return b;
//    } else {
//        return a;
//    }
//}

var inputArray = [53, 52, 4, 3, 6, 2, 72, 9, 2];
var inputArray3 = [-56, -4, -3, -6, -2, -7, -9, -2];

function parzyste(inputArray) {
    var Arr = [];    
        for(var i = 0; i < inputArray.length; ++i){
            if(inputArray[i]%2 == 0){
                Arr.push(inputArray[i]);
            }
        }
    return Arr;
}

function nieparzyste(inputArray) {
    var Arr = [];    
        for(var i = 0; i < inputArray.length; ++i){
            if(inputArray[i]%2 != 0){
                Arr.push(inputArray[i]);
            }
        }
    return Arr;
}

function arrayMax(inputArray, jakie) {  
    var fixedArray = [];
    if(jakie == null){
        fixedArray = inputArray;
    } else {
        fixedArray = jakie(inputArray);
    }
    var wynik = fixedArray[0];
        for(var i = 0; i < fixedArray.length; ++i){
            if(fixedArray[i] > wynik){
          //      console.log(inputArray[i], 'jest większe niz', inputArray[i+1]);            
                wynik = fixedArray[i];
          //      console.log('Przejscie', i, 'przepisano',wynik);
            }
        }
    console.log(wynik);
}

arrayMax(inputArray);
arrayMax(inputArray, parzyste);
arrayMax(inputArray, nieparzyste);
arrayMax(inputArray3, parzyste);
arrayMax(inputArray3, nieparzyste);

//function arrayMax(inputArray) {
//    
//    var wynik = inputArray[0];
//    var parzysta = 0;
//    
//    for(var i = 0; i < inputArray.length; ++i){
//        if(inputArray[i]%2 == 0){
//            parzysta = inputArray[i];
////            wynik = inputArray[i];
//             
//        if(parzysta > wynik){
//      //      console.log(inputArray[i], 'jest większe niz', inputArray[i+1]);            
//            wynik = parzysta;
//      //      console.log('Przejscie', i, 'przepisano',wynik);
//        }
//        }
//    }
//    console.log(wynik);
//}

//arrayMax(inputArray);