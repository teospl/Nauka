// o jeden
function* idMaker(){
    var index = 0;
    while(true){
        yield index++;
    }
}

var gen = idMaker();

console.log(gen.next().value);

/// o dwa
function* idMaker(){
    var index = 0;
    while(true){
        yield index+=2;
    }
}

var gen = idMaker();

console.log(gen.next().value);

//// o dwa az spelni warunek
function* idMaker(){
    var index = 0;
    while(index < 10){
        yield index+=2;
    }
}

var gen = idMaker();

console.log(gen.next().value);

//// generator losowy

function* idMaker(){
    var index = 0;
    while(true){
        yield index = Math.round(Math.random()*10, 1);
    }
}

var gen = idMaker();

console.log(gen.next().value);


////generator z zapisem wartosci

function* idMaker(){
    var index = 0;
    while(true){
        yield index = Math.round(Math.random()*100, 2);
    }
}

var gen = idMaker();

console.log(gen.next().value);
var wartosci = [];

for(var i =0; i<10; ++i){
    wartosci.push(gen.next().value);
}

//// generator stringa

function* idMaker(){
    var index = 1;
    var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l'];
    while(true){
        var str = "";
        for(var i =0; i < index; ++i){
            var rand = Math.floor(Math.random()*100);
            rand %= chars.length;
            str += chars[rand];
        }      
        yield str;
        index++;
    }
}

var gen = idMaker();

console.log(gen.next().value);


///// generator fibbonaci z internetu

function* Fibo(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = Fibo();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2