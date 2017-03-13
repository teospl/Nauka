////////// trojkat pascala konkretna pozycja

function pascalReq(a, b){
    var rzad = a;
    var pozycja = b;
    if(pozycja == 0 || pozycja == rzad){
        return 1;
    } else {
        return pascalReq(rzad-1, pozycja-1) + pascalReq(rzad-1, pozycja);
    }
}

///console.log(pascalReq(2, 1));

/////////////// pascal drukuj rzad

function pascalRow(a){
    var rzad = a;
    var wynik = [];
    for(var i = 0; i < rzad+1; ++i){   
        wynik.push(pascalReq(rzad, i));
    }
        console.log(a + ' rząd trójkąta pascala to:', wynik); 
    }
    
console.log(pascalRow(6));

////////////   iteracyjnie pozycja

