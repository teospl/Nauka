function stworzCiastko(nazwa, wartosc, waznosc){
	var wygasa = "";
	
	if(waznosc){
		var data = new Date();
		data.setTime(data.getTime() + (1000 * 60 * 60 * 24 * waznosc));
		wygasa = "; expires=" + data.toGMTString();
	}

	document.cookie = nazwa + "=" + wartosc + wygasa;
    console.log(document.cookie);
}

function pobierzCiastko(nazwa){
	var ciastka = document.cookie;
	if(ciastka != ""){
		ciastka = ciastka.split("; ");
		for(var i in ciastka){
			var cnazwa = ciastka[i].split("=")[0];
			if(cnazwa == nazwa){
				var wartosc = ciastka[i].split("=")[1];
				return unescape(wartosc);
			}
		}
	}
}

function sprawdzCiastko(nazwa){
	var wartosc = pobierzCiastko(nazwa);
	var imie = document.getElementById("imie");
	if(wartosc){
		imie.innerHTML = wartosc;
	}else{
		wartosc = prompt("Podaj swoje imie:");
		waznosc = prompt("Ważność ciasteczka w dniach:");
		if(wartosc || !isNaN(waznosc)){
			stworzCiastko(nazwa, wartosc, waznosc);
			imie.innerHTML = wartosc;
		}else{
			alert("nie tworze ciastka");
		}
	}
}

function usunCiastko(nazwa){
	stworzCiastko(nazwa, "", -1);
}

window.onload = function(){
	var nazwaCiastka = "niezapominajka";

	sprawdzCiastko(nazwaCiastka);
	
	var usun = document.getElementById("usun");
	usun.onclick = function(){
		usunCiastko(nazwaCiastka);
		alert("usunięto ciasteczko!");
	}
}