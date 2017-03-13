function showFeat(pole){
	var pole = document.getElementById(pole);
	var html = pole.innerHTML;
    
	for(var i in navigator.plugins){
		html += "<div>" + navigator.plugins[i].name + " <span>(" + navigator.plugins[i].filename + ")</span> " + navigator.plugins[i].description + "</div>";
	}
	pole.innerHTML = html;
}

function showInfo(pole){
	var pole = document.getElementById(pole);
	var html = pole.innerHTML;
    
    console.log("pole: "+ pole);
    console.log("html: "+ html);
	
	html += "<div>Nazwa kodowa: <span>" + navigator.appCodeName + "</span></div>";
	html += "<div>Nazwa: <span>" + navigator.appName + "</span></div>";
	html += "<div>Wersja: <span>" + navigator.appVersion + "</span></div>";
	html += "<div>Ciasteczka: <span>" + navigator.cookieEnabled + "</span></div>";
	html += "<div>Platforma: <span>" + navigator.platform + "</span></div>";
	html += "<div>Nagłówek User-agent: <span>" + navigator.userAgent + "</span></div>";
	html += "<div>Język użytkownika: <span>" + navigator.language + "</span></div>";
	
	pole.innerHTML = html;
}

function path(x){
	var str = "";
	for(i=0; i<x; i++){
		str += "../";
	}
	return str;
}

function breadcrumbs(pole){
	var pole = document.getElementById(pole);
	var html = pole.innerHTML;
	var url = window.location.toString();
	url = url.split("/");
	var first = true;
	
	html += "<div>";
	for(var i=3; i<url.length-1; i++){
		if(first){ first = false; }else{ html += " ::"; }
		if(i==url.length-2){ 
			html+= "<span> " + unescape(url[i]) + "</span>"; 
		}else{
			html+= "<span> " + "<a href='" + path(url.length-i-2) + "'>" + unescape(url[i]) + "</a></span>";
		}
	}
	html += "</div>";
	
	pole.innerHTML = html;
}

window.onload = function(){
	showFeat("plugins");
	showInfo("binfo");
	breadcrumbs("bread");

	var prev = document.getElementById("prev");
	prev.onclick = function(){
		history.go(-1);
	}
	
	var reload = document.getElementById("reload");
	reload.onclick = function(){
		location.reload();
	}
	
	var next = document.getElementById("next");
	next.onclick = function(){
        console.log(history.go(1))
		history.go(2);
	}
	
	var newwin = document.getElementById("newwin");
	newwin.onclick = function(){
		var imie = document.getElementById("name").value;
		
		if(imie.length != 0){
			win = window.open('', 'win', 'toolbar=no, status=no, width=500, height=100');
			var text = imie + " damn u're good!";
			win.document.write(text);
		}else{
			alert("Brak imienia = brak okienka");
		}
	}
	
	var closewin = document.getElementById("closewin");
	closewin.onclick = function(){
		win.close();
	}
	
	var closman = document.getElementById("closmain");
	closman.onclick = function(){
		window.close();
	}
}