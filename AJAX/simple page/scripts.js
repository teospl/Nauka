function pobierzFraszki(){
	var req = createReq();
	if(req == null){
		alert("Obiekt nie mogl zostac stworzony!");
		return;
	}
	var url = "wiersze.php";
    document.getElementById("line").innerHTML = "<div class='pre'>Ladowanie fraszek...</div>";
	req.open("GET", url, true);
	req.onreadystatechange = function(){
         //   console.log(document.getElementById("line"));
		if(req.readyState==4 && req.status==200){
			drukujFraszki(req.responseText);
		}
	}
	req.send(null);
}

function drukujFraszki(csv){
	var wiersze = csv.split(";");
	var menu = document.getElementById("line");
	var html = "";
	
	for(var i in wiersze){
		html += "<button id='"+wiersze[i]+"' class='but'>"+wiersze[i].replace("-"," ")+"</button>";
	}
	menu.innerHTML = html;
	
	var but = document.getElementsByTagName("button");
	for(var i in but){
		but[i].onclick = pobierzWiersz;
	}
}

function pobierzWiersz(){
	var nazwa = this.id.replace("-", " ");
	var req = createReq();
	if(req == null){
		alert("Obiekt nie mogl zostac stworzony!");
		return;
	}
	var url = "wiersze/"+this.id+".html";
	req.open("GET", url, true);
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status==200){
			document.getElementById("name").innerHTML = nazwa;
			document.getElementById("cont").innerHTML = req.responseText;
		}
	}
	req.send(null);
}

window.onload = function(){
	pobierzFraszki();
}