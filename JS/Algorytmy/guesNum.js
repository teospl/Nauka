var a = 0;
var b = 0;
var c = 'nie';
var hint = null;
var wynik = 0;


    
function losowanie(from, to){
    var zakres = [];
    
    for(var i = from; i <= to; ++i){
        zakres.push(i);
    }
    
    console.log(zakres);  
    
    var rand = Math.round(Math.random()*100);
    rand %= zakres.length;
    wynik = zakres[rand];
    console.log(wynik);
    check();
}
 
function appStart(){
    a = prompt('Od jakiej liczby mam zgadywać?');
    b = prompt('Do jakiej liczby mam zgadywać?');    
    losowanie(a, b);  
}


 function check(){
    c = confirm('czy Twoja liczba to: ' + wynik);
    if( c == true){
        confirm('dzieki za gre');
    } else {
        hint = confirm('czy Twoja liczba jest większa?');
        if (hint == true){
            a = wynik+1;
            losowanie(a, b);
        } else {
            b = wynik-1;
            losowanie(a, b);
        } 
    }
 }
    
appStart();


    