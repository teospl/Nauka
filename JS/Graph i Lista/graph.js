function Graf() {
    this.wierzcholki = 0;
    this.reprezentacja = [];

    this.zainicjujGraf = function(lw) {
        this.wierzcholki = lw;
        for(var i = 0; i < lw; i++) {
            this.reprezentacja[i] = [];
        }
    }

    this.dodajKrawedz = function(w1,w2) {
        this.reprezentacja[w1].push(w2);
        this.reprezentacja[w2].push(w1);
    }

    this.rysujGraf = function() {
        var  grafDOM = document.getElementById('graph');
        for(var i = 0; i < this.wierzcholki; i++) {
            var wierzcholek = document.createElement("div");
            wierzcholek.className="wierzcholek";

            wierzcholek.innerHTML = "<span>"+i+"</span>";

            var lista = document.createElement("ul");

            for(var j = 0; j < this.reprezentacja[i].length; j++) {
                var el = document.createElement("li");
                el.innerText = this.reprezentacja[i][j];

                lista.appendChild(el);
            }

            wierzcholek.appendChild(lista);

            grafDOM.appendChild(wierzcholek);
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var graf = new Graf();
    graf.zainicjujGraf(5);

    graf.dodajKrawedz(0,1);
    graf.dodajKrawedz(2,3);

    graf.rysujGraf();
});

















































