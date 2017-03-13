function add(a, b) {
	var shorterTab = [];
	var	longerTab = [];
	var wynik = [];
    console.log(a.length);
    
    if(a.length < b.length){
    	for(var j = 0; j < b.length; ++j){
			longerTab.push(b[j]);
		}
		for(var i = 0; i < a.length; ++i){
			shorterTab.push(a[i]);
		}	
    } else {
    	for(var j = 0; j < a.length; ++j){
			longerTab.push(a[j]);
		}
    	for(var i = 0; i < b.length; ++i){
			shorterTab.push(b[i]);
		}
    }

	console.log(shorterTab);
	console.log(longerTab);
	
	for(var a = longerTab.length; a >= 0; --a){
		wynik[i]=
	}
}
console.log(add("123456", "7891011"));