function czlowiek()  {
    this.imie = '';
    this.nazwisko = '';
    this.wiek = 0;    
    this.waga = 0;

    this.utyj = function(){
        this.waga++;
    };
    this.starzenie = function(){
        this.wiek++;
    };
}

function createMat() {
var mateusz = new czlowiek();
mateusz.imie = 'Mateusz';
mateusz.nazwisko = 'Ziemniewicz';
mateusz.wiek = 28;
mateusz.waga = 93;
console.log(mateusz);
    mateusz.utyj();
    mateusz.starzenie();
console.log(mateusz);
}

createMat();
