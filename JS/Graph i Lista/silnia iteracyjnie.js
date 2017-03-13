function silnia(n){
    var wynik = 1;
    for(var i = 1; i <= n; ++i){
        wynik = wynik * i;   
    }
    console.log(wynik);
}
silnia(5);