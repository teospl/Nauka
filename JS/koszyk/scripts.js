var produkty = new Array( 
	new Produkt("Maslo", 5.00), 
	new Produkt("Gazeta", 2.49), 
	new Produkt("Bulka", 0.30), 
	new Produkt("Durex", 9.98) 
);
var koszyk = new Array;

function Produkt(nazwa, cena){
	this.nazwa = nazwa;
	this.cena = cena;
	this.ilosc = 0;
}

Produkt.prototype.listaProd = function(){
	var html = "";
	html += "<div class='produkt'>"
	html += "<div class='ll'>" + this.nazwa + " </div>";
	html += "<div class='ll'>" + this.cena.toFixed(2) + "/szt.</div>";
	html += "<div class='rr'><input type='text' id='ilosc"+this.nazwa+"' /><a href='#' id='"+this.nazwa+"'>do koszyka</a></div>";
	html += "</div>";
	return html;
}

Produkt.prototype.listaKosz = function (){
	var html = "";
	html += "<div class='pozycja'>";
	html += "<div><a href='#' id='"+this.nazwa+"'>" + this.nazwa + "</a></div>";
	html += "<div>" + this.ilosc + " x " + this.cena.toFixed(2) + "</div>";
	html += "<div class='rr'>" + (this.cena*this.ilosc).toFixed(2) + "</div>";
	html += "</div>";
	return html;
}

function isInt(dana){
	return dana == Math.round(dana);
}

function dodajProdukt(nazwa){
	var jest = false;
	var ilosc = document.getElementById("ilosc"+nazwa).value;
	if(ilosc < 0 || !isInt(ilosc)){
		alert("Podaj poprawną ilosc produktow!");
	}else{
		for(var i in koszyk){
			if(koszyk[i].nazwa == nazwa){
				koszyk[i].ilosc = ilosc;
				jest = true;
			}
		}
	
		if(jest == false){
			for(var i in produkty){
				if(produkty[i].nazwa == nazwa){
					var prod = produkty[i];
					prod.ilosc = ilosc;
					koszyk.push(prod);
				}
			}
		}
        alert("Produkt " + nazwa + " ilość " + ilosc + " dodano." )
		drukujKoszyk();
	}
}

function usunProdukt(nazwa){
	for(var i in koszyk){
		if(koszyk[i].nazwa == nazwa){
			var pomoc = koszyk[0];
			koszyk[0] = koszyk[i];
			koszyk[i] = pomoc;
			koszyk.shift();
		}
	}
	drukujKoszyk();
}

function drukujProdukty(){
	var html = "";
	for(var i=0; i<produkty.length; i++){
		html += produkty[i].listaProd();
	}
	var lista = document.getElementById("produkty");
	lista.innerHTML = html;
	
	var link = lista.getElementsByTagName("a");
	for(var i in link){
		link[i].onclick = function(){ dodajProdukt(this.id); }
	}
}

function drukujKoszyk(){
	var html = "";
	var suma = 0;
	
	if(koszyk.length == 0){
		html += "<div>Twoj koszyk jest pusty</div>";
	}else{
		for(var i in koszyk){
			html += koszyk[i].listaKosz();
			suma += koszyk[i].cena*koszyk[i].ilosc;
		}
		html += "<div id='suma'>SUMA ZAMÓWIENIA: " + suma.toFixed(2) + " pln</div>";
		html += "<div id='submit'><input type='submit' value='Zamawiam' /></div>";
	}
	var lista = document.getElementById("koszyk");
	lista.innerHTML = html;
	
	var link = lista.getElementsByTagName("a");
	for(var i in link){
		link[i].onclick = function(){ 
			alert("Produkt usunięty z koszyka!");
			usunProdukt(this.id)
		}
	}
	
}

window.onload = function(){
	drukujProdukty();
}