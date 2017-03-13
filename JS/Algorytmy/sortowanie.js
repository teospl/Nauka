var list = [5, 10, 2, 1];
// list is now: [1, 10, 2, 5]
console.log(list);
list.sort();
// list is now: [1, 10, 2, 5]
console.log(list);

function cmp(a, b) {
  return a - b;
}
var list = [5, 10, 2, 1];
list.sort(cmp);
// list is now: [1, 2, 5, 10]

function cmp1(a, b) {
	var tmp=0;
	if(a.length < b.length){
		tmp = 1;
	} else {
		tmp = -1;
	}
	return tmp;
}