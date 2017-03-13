function switchMenu() {
    var menu = document.getElementById("navigation");
    
   if(menu.className != ""){
       menu.className = "";
   } else {
       menu.className = "active"
   } 
}

function inputChange(element){
    var inputVal = element.value;
    if(!parseInt(inputVal)){
        element.className = "invalid";
    } else{
        element.className = "";
    }
}

function obliczSilnie(){
    var inputElement = document.getElementById("test1");
    var val = parseInt(inputElement.value);
    var efekt = silnia(val);
    var wynikowy = document.getElementById("wynik");
    
        var efekt = silnia(val);
        function silnia(a) {
        var wartosc = 1;
            var krok = 1;
            do {
                wartosc *= krok;
                krok++;    
            } while (krok <= a);
            return wartosc;
        }
        wynikowy.innerHTML = efekt;
    } 
