var zdjecia = new Array("1", "2", "3", "4");
var zaladowane = new Array();
var zaladowano = 0;
var zmiana = 100/zdjecia.length;


const SEC = 1000;
const ZMIANA = 5*SEC;
const CZAS = 2*SEC;
const MINI = "zdjecia/mini/";
const MAXI = "zdjecia/";
var interval = 0;

function laduj(){
	for(var i =0; i<=zdjecia.length; i++){
		zaladowane[i] = new Image();
		zaladowane[i].src = MINI + zdjecia[i] + ".jpg";
		zaladowane[i].onload = zmienPasek;
	}
}

function zmienPasek(){
	zaladowano++;
	document.getElementById("pasek").style.width = zaladowano * zmiana + "%";
	if(zaladowano == zdjecia.length){
		document.getElementById("info").innerHTML = "";
		//console.log("wywoluje gotowe");
		gotowe();
	}
}

function losuj(){
	var tab = new Array();
	for(var i=0; i<3; i++){
		tab[i] = Math.floor(Math.random()*zdjecia.length);
		var j = i;
		while(tab[j-1] >= 0){
			if(tab[j-1] == tab[i]){
				tab[i] = Math.floor(Math.random()*zdjecia.length);
				j=i;
			}else{
				j--;
			}
		}
	}
	//console.log(tab);
	return tab;
}

function uaktualnij(){
	console.log("uaktualnij");
	var img = document.getElementsByTagName("img");
	var nowe = losuj();
	for(var i=0; i<img.length; i++){
		img[i].src = MINI + zdjecia[nowe[i]] + ".jpg";
		img[i].alt = zdjecia[nowe[i]];

		//console.log("src img = " + img[i]);
	}
}

function popup(name){
	var info = document.getElementById("info");
	info.innerHTML = "Wyświetlanie zdjęcia...";
	var param = "status=0, location=0, menubar=0, resizable=no, toolbar=0, scrollbars=no, width=640, height=480";
	var timer = setTimeout(function(){window.open(MAXI + name + ".jpg", "zdjecia", param); info.innerHTML = "";} , CZAS);
}

function startInterval(){
	interval = setInterval("uaktualnij()", ZMIANA);
}

function stopInterval(){
	clearInterval(interval);
}

function gotowe(){
	uaktualnij();
	startInterval();
	
	var link = document.getElementsByTagName("img");
	for(var i=0; i<link.length; i++){
		link[i].onclick = function(){
			popup(this.alt);
		}
	}
	
	var but = document.getElementById("but");
	var stop = "Zatrzymaj prezentację";
	var start = "Rozpocznij prezentację";
	but.onclick = function(){
		if(but.value == stop){
			stopInterval();
			but.value = start;
		}else if(but.value == start){
			startInterval();
			but.value = stop;
		}
	}
}

window.onload = laduj;