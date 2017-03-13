var data = {
    name: 'Piotr',
    id: 21,
    details: {
        job: 'developer',
        city: 'Katowice'
    }
};
 
Object.keys(data).forEach(function (key) {
    //console.log(data[key]);
});

/*var tablica=[];
tablica['elementTablicy']='jakaś wartość';
console.log(tablica['elementTablicy']==tablica[0]?
  'elementy mają taką samą wartość'
:
  'elementy mają różną wartość'
);
console.log(tablica);
console.log(tablica['elementTablicy']);

var obiekt={};
obiekt.właściwość='jakaś wartość';
console.log(obiekt['właściwość']==obiekt.właściwość?
  'elementy mają taką samą wartość'
:
  'elementy mają różną wartość'
);
console.log(obiekt['właściwość']);
console.log(obiekt.właściwość);
console.log(tablica.elementTablicy);

var associativeArray = {"one" : "First", "two" : "Second", "three" : "Third"};
console.log(associativeArray);

var obj1 = {}; var obj2 = {}; var table= {}; table[obj1] = "A"; table[obj2] = "B"; console.log(table[obj1]); //displays B
*/

var associative = {"0":10000000, "speed":"40", "owner":"", "brand":"brand1"};
var notass = [40,, "brand1"];
console.log(associative);

var max =-1;
var name="";
for(var element in associative){
	if(max<associative[element].length){
		max = associative[element].length;
		name = associative[element];
	}
}
if(max == -1){
	console.log("tablica jest pusta");
} else {
	console.log(name);
}