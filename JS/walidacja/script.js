function isValid(pole, regex){
	if(regex.test(pole.value)){
		style(pole, true);
		return true;
	}else{
		style(pole, false);
		return false;
	}
}

function isNotEmpty(pole){
	if(pole.value == ""){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isNumber(pole){
	if(isNotEmpty(pole)){
		if(isNaN(pole.value)){
			style(pole, false);
			return false;
		}else{
			style(pole, true);
			return true;
		}
	}
}

function isChecked(pole){
	if(pole.checked == false){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isSelected(pole){
	var radio = document.getElementsByName(pole);
	console.log(radio);
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked == true){
			document.getElementById("i" + pole).innerHTML = "";
			return true;
		}
	}
	document.getElementById("i" + pole).innerHTML = "Musisz wybrać ocenę!";
	return false;
}

function style(pole, status){
	if(status){
		document.getElementById("i"+pole.id).innerHTML = "";
		pole.className = "ok";
	}else{
		document.getElementById("i"+pole.id).innerHTML = "Uzupełnij to pole!";
		pole.className = "blad";
	}
}

function onSubmit(form){
	if(
		//isNotEmpty(form.pers) &&
		//isNumber(form.nrklienta) &&
		isValid(form.pers, persReg) &&
        isValid(form.nrklienta, nrklientaReg) &&
        isValid(form.email, emailReg) &&
		isNotEmpty(form.usluga) &&
		isSelected("ocena") &&
		isNotEmpty(form.komentarz) &&
		isChecked(form.zgoda)
	){
			return true;
	}else{
		console.log('Uzupełnij brakujace pola!');
		return false;
	}
}



function Init(){
	var pers = document.getElementById("pers");
	persReg = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+ [A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+$/;
    
	pers.onblur = function(){
		//isNotEmpty(this);
		isValid(this, persReg);
	}
	
	var nrklienta = document.getElementById("nrklienta");
    	//si:1111-11:10ab
	nrklientaReg = /^si:\d{4}-\d{2}:\d{1,2}[ab]+$/;
	nrklienta.onblur = function(){
		isNumber(this);
	}
	
	var email = document.getElementById("email");
    emailReg = /^\w+@\w+[.]\w+/;
	email.onblur = function(){
		isNotEmpty(this);
	}
	
	var usluga = document.getElementById("usluga");
	usluga.onblur = function(){
		isNotEmpty(this);
	}
	
	var komentarz = document.getElementById("komentarz");
	komentarz.onblur = function(){
		isNotEmpty(this);
	}
	
	var zgoda = document.getElementById("zgoda");
	zgoda.click = function(){
		isChecked(this);
	}
	
	document.forms["formularz"].onsubmit = function(){
		return onSubmit(this);
	}
}

window.onload = Init;