//Wyrażenia sprawdzające czy podany ciąg znaków to:
//1. imie żeńskie (imiona polskie);
//2. kod pocztowy;
//3. adres składający się z kilku wyrazów (np. 'ul. Kazimierza Wielkiego 5' lub 'ul. Czerwono-Czarna 22');
//4. adres e-mail ^\w+[\w\.]*+@\w+[\w\.]*\.\w{2,4}$


var regex = new RegExp(/^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+a$/);
var regex2 = /^\d{2}-\d{3}$/;
var regex3 = /^ul\.( [A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+)([ |-][A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]+)* \d+(\/\d+)?$/;
var regex4 = /^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,4}$/;

var str = "Kaska";
var str2 = "91-360";
var str3 = "ul. Kazimierza Wielkiego 5";
var str4 = "test@gmail.com";

console.log(regex.test(str) + " imie zenskie");
console.log(regex2.test(str2) + " kod pocztowy");
console.log(regex3.test(str3) + " adres");
console.log(regex4.test(str4) + "email")

alert(regex.test(str) + " imie zenskie");
alert(regex2.test(str2) + " kod pocztowy");
alert(regex3.test(str3) + " adres");
alert(regex4.test(str4) + " email");