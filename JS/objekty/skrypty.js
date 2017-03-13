function Czlowiek(imie, wzrost, dataur){
	this.imie = imie;
	this.wzrost = wzrost;
	this.dataur = dataur;
}

Czlowiek.prototype.gatunek = "Homo sapiens";

Czlowiek.prototype.przedstawSie = function(){
	var html = "";
	html += "<p>Imię: " + this.imie;
	html += "<br/>Wzrost: " + this.wzrost;
	html += "<br/>Data urodzenia: " + this.dataur.formatujDate();
	html += "<br/>Gatunek: " + this.gatunek+"</p>";
	return html;
}

Czlowiek.prototype.zmienWzrost = function(wzrost){
	this.wzrost = wzrost;
}

Date.prototype.formatujDate = function(){
	var mies = "";
	switch(this.getMonth()){
		case 0:	mies="styczeń"; break;
		case 1: mies="luty"; break;
		case 2: mies="marzec"; break;
		case 3: mies="kwiecien"; break;
		case 4: mies="maj"; break;
		case 5: mies="czerwiec"; break;
		case 6: mies="lipiec"; break;
		case 7: mies="sierpień"; break;
		case 8: mies="wrzesień"; break;
		case 9: mies="październik"; break;
		case 10: mies="listopad"; break;
		case 11: mies="grudzień"; break;
	}
	return this.getDate()+" "+mies+" "+this.getFullYear();
}

var emil = new Czlowiek("Emil", 178, new Date(1997, 10, 21));
var kamil = new Czlowiek("Kamil", 156, new Date(1948, 11, 23));
document.write(emil.przedstawSie());
document.write(kamil.przedstawSie());
emil.zmienWzrost(187);
document.write(emil.przedstawSie());