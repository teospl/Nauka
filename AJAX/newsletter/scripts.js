function doSubmit(pers, email, akcja){
	var req = createReq();
	if(req == null){
		alert("Obiekt nie mogl zostac stworzony!");
		return;
	}
	var url = "submit.php?akcja="+akcja;
	var dane = "pers="+pers+"&email="+email;
	req.open("POST", url, true);
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status==200){
			alert(req.responseText);
		}
	}
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send(dane);
}

window.onload = function(){
	document.getElementById("dodaj").onclick = function(){
		var pers = document.getElementById("pers").value;
		var email = document.getElementById("email").value;
		if(pers || email){
			doSubmit(pers, email, 1);
		}else{
			alert("Uzupelnij pola!");
		}
	}
	
	document.getElementById("usun").onclick = function(){
		var pers = document.getElementById("pers").value;
		var email = document.getElementById("email").value;
		if(pers || email){
			doSubmit(pers, email, 0);
		}else{
			alert("Uzupelnij pola!");
		}
	}
}