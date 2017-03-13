function Graf(liczbaWierzcholkow) {
    this.wierzcholki = 0;
    this.reprezentacja = [];
    this.matrix = [];
    
    this.zainicjujGraf = function (liczbaWierzcholkow){
        this.wierzcholki = liczbaWierzcholkow;
        for(var i = 1; i <= liczbaWierzcholkow; ++i){
            this.reprezentacja[i]=[];
        }
    }
    
    this.dodajKrawedz = function (w1,w2){
        if(w1 > 0 && w1 <= this.wierzcholki && w2 <= this.wierzcholki){
            
            for(var i = 0; i < this.reprezentacja[w1].length; ++i){
                if(this.reprezentacja[w1][i] == w2){
                    console.log('Połączenie '+w1+' i '+w2+' już istnieje');
                    return false;
                } 
            }
            for(var i = 0; i < this.reprezentacja[w2].length; ++i){         
                if (this.reprezentacja[w2][i] == w1){
                    console.log('Połączenie '+w1+' i '+w2+' już istnieje');
                    return false;
                }
            }
                 this.reprezentacja[w1].push(w2);
                 this.reprezentacja[w2].push(w1);               
            
        } else {
            console.log("Nie można dodać krawędzi ("+w1+","+w2+"), wierzchołek poza zakresem Grafu.")
        }
    }
    
    this.printList = function(){
        for(var i = 1; i<= this.wierzcholki; ++i){
            console.log(i+": "+this.reprezentacja[i]);
        }
    }
    
//    this.neighborhoodMatrix = function(w1,w2){
//        for(var i = 1; i<= this.wierzcholki; ++i){
//           for(var j = 1; i<= this.wierzcholki; ++i){
//               if(this.reprezentacja[])
//                this.matrix[i][j]= null;
//           }
//        }
//    }
    this.printHtml = function(){
        var grafDiv = document.getElementById('graf'); ///querySelector('div[id="graf"]');
        console.log(grafDiv);
        for(var i = 1; i<= this.wierzcholki; ++i){
            var wierzcholek = document.createElement('div');
            wierzcholek.className = "wierzcholek";     
            wierzcholek.innerHTML = '<span>'+i+'</span>';
            grafDiv.appendChild(wierzcholek);
            
                for(var j = 0; j < this.reprezentacja[i].length; ++j){
                        var polaczenie = document.createElement('div');
                        polaczenie.className = "powiazania";     
                        polaczenie.innerText = this.reprezentacja[i][j];
                        grafDiv.appendChild(polaczenie);
                }
        }   
    }   
}
var graf = new Graf();

document.addEventListener('DOMContentLoaded',function(){
    graf.zainicjujGraf(6);
graf.dodajKrawedz(1,2);

graf.dodajKrawedz(2,1);

graf.dodajKrawedz(1,3);
graf.dodajKrawedz(1,4);
graf.dodajKrawedz(2,3);
graf.dodajKrawedz(3,4);
graf.dodajKrawedz(3,5);
graf.dodajKrawedz(3,6);
graf.dodajKrawedz(4,5);
graf.dodajKrawedz(7,1);
//console.log(graf);
graf.printList();
graf.printHtml();
})
