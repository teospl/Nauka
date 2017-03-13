function getFib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return getFib(n-1) + getFib(n-2);
}

//console.log(getFib(3));

function parzyste() {  
    var wynik = 0;
    var i = 0;
        while(getFib(i) < 4000000){
            var check = getFib(i);
            if(check % 2 == 0){
                wynik += check;
                console.log(check);
            }
            i++;
        }
    console.log(wynik);
}

 parzyste();