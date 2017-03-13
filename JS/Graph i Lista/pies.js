
var Pies = function() {
    this.wiek = 0;
    this.rasa = null;
    this.waga = null;
    this.wzrost = null;
    this.imie = null;

    this.narodzSie = function(imie, rasa, waga, wzrost) {
        this.imie = imie;
        this.rasa = rasa;
        this.waga = waga;
        this.wzrost = wzrost;
        this.wiek++;
    }

    this.szczekaj = function() {
        if(this.waga >= 3) {
            this.waga -= 1;
            console.log("hau hau");
        }

    }

    this.jedz = function(karma) {
        this.waga += karma;
    }

    this.zaatakuj = function(pies) {
        if(this.wzrost > pies.wzrost && this.imie != pies.imie) {
            pies.waga -=  1;
        }


    }

    var piesek = new Pies()
    piesek.narodzSie("Azor","jamnik", 2, 10);


    var piesek2 = new Pies();
    piesek2.narodzSie("Fafik", "owczarek", 10, 30);

    piesek.zaatakuj(piesek2);

