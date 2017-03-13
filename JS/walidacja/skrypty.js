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
			document.getElementById("i"+pole.id).innerHTML = "To pole musi być liczbą!";
			return false;
		}else{
			style(pole, true);
			document.getElementById("i"+pole.id).innerHTML = "";
			return true;
		}
	}else{
		return false;
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
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked == true){
			document.getElementById("i" + pole).innerHTML = "";
			return true;
		}
	}
	document.getElementById("i" + pole).innerHTML = "Ta wartość musi być liczbą!";
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
		//isNotEmpty(form.email) &&
		isValid(form.pers, persReg) &&
        isValid(form.nrklienta, nrklientaReg) &&
        isNotEmpty(form.usluga) &&
		isSelected("ocena") &&
		isNotEmpty(form.komentarz) &&
		isChecked(form.zgoda)
	){
			return true;
	}else{
		return false;
	}
}

window.onload = Init;

function Init(){
	var pers = document.getElementById("pers");
	var persReg = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+ [A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+$/;
	pers.onblur = function(){
		//isNotEmpty(this);
		isValid(this, persReg);
	}
	
	var nrklienta = document.getElementById("nrklienta");
	//si:1111-11:10ab
	var nrklientaReg = /^si:\d{4}-\d{2}:\d{1,2}[ab]+$/;
	nrklienta.onblur = function(){
		//isNumber(this);
		isValid(this, nrklientaReg);
	}
	
	var email = document.getElementById("email");
	var emailReg = /^\w+@\w+[.]\w+/;
	email.onblur = function(){
		//isNotEmpty(this);
		isValid(this, emailReg);
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
	
	document.forms["opinia"].onsubmit = function(){
		return onSubmit(this);
	}
}