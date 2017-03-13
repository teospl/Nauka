var tablica0 = [ ];//var tablica0 = new Array();
var tablica1 = [ 10 ];
var tablica2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];//var tablica2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var tablica = new Array(10);
console.log(tablica0.length);
console.log(tablica1.length);
console.log(tablica2.length);
console.log(tablica.length);
console.log(tablica2);
console.log(tablica);
for(var element in tablica2){
	console.log("element: %s", element);
}
for(var i =0; i<tablica2.length; ++i){
	var element = tablica2[i];
	console.log(element);
}
/*
var tablica3 = new Array();
tablica3[1] = 1;
tablica3[1000] = 2;
tablica3[1000000] = 3;
for (var v in tablica3)
    console.log(v);*/