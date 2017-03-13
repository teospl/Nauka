//////////// Ćwiczenia na Rekurencję

//// Napisz pętlę "for" wyświetlającą kolejno liczby od 1 do 10. Następnie zmodyfikuj rozwiązanie tak, aby zamiast pętli "for" użyć mechanizm rekurencji.

function oneToTenI(){
	for(var i= 1; i < 11; ++i){
		console.log(i);
	}
}
oneToTenI();

var r = 1; 
function oneToTenR(){
	if(r < 11){
	console.log(r);
	++r;
	oneToTenR();
	}
}
oneToTenR();

///// Napisz pętlę "for" wyświetlającą kolejno liczby od 10 do 1. Następnie zmodyfikuj rozwiązanie tak, aby zamiast pętli "for" użyć mechanizm rekurencji.

function tenToOneI(){
	for(var i= 10; i > 0; --i){
		console.log(i);
	}
}
tenToOneI();

var r = 10; 
function tenToOneR(){
	if(r > 0){
	console.log(r);
	--r;
	tenToOneR();
	}
}
tenToOneR();

/////  Napisz funkcję, która przy użyciu pętli for wyświetli podany łańcuch znaków od tyłu (np. dla podanego łańcucha "pies" wyświetli "seip". Następnie zmodyfikuj rozwiązanie tak, aby zamiast pętli "for" użyć mechanizm rekurencji.

var string = 'pies';

function revertI(string){
	for(var i = string.length; i>=0; --i){
		console.log(string[i]);
	}
}
revertI('Pies');




///// proby rekurencyjnego odwracania stringa.....
///
var i = 1;

function revReq(string){
var length = string.length;
	if(length-i >= 0){
		console.log(string[string.length-i]);
		i++;
		revReq(string);
	}

}
revReq('pies');


//////// Napisz funkcjê, która wywietli kolejno i pojedynczo wszystkie liczby z tablicy liczb, która mo¿e posiadaæ zagnie¿d¿one tablice liczb.
///
///function printBackFrom(i) {
//   console.log(numbers[i]);
//   if (i != 0) {
//     printBackFrom(i - 1);
//   }
// }

// Np. Wasza tablica wygl¹da³aby tak:



// i chodzi o wywietlenie:
// 5
// 10
// 12
// 18
// 21
// 4
// 0
// 2
// 10
// -10
// 12

var numbersTab = [5, 10, [12, 18], [21, 4, 0, 2], [10, [-10, 12]]];
function print(numbers){
	for (var i = 0; i < numbers.length; ++i) {
		console.log(numbers[i]);
		print(numbers[i]);
	}
}
print(numbersTab);




var i = 0;
function printAll(numbers){
	var a = numbers.length;
	if(i<=a){
	console.log(numbers[i]);
	i++;
	printAll(numbers[i]);
}
}
printAll(numbersTab);