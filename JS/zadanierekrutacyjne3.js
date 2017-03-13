 function getTimeByNumbers(from, to) {
 	var parsedFrom = from.split(':').join('');
 	var parsedTo = to.split(':').join('');
 	for(var i = parsedFrom; i <= parsedTo; ++i){
        if(i.toString().substring(2,4) < 59 && i.toString().substring(4,6) < 59){
            if(checkSet(i)){
                console.log(i.toString().substring(0,2) + ':' + i.toString().substring(2,4) + ':' + i.toString().substring(4,6));
            }
        }
 	}
 }
function checkSet(set) {
    var tmp = set.toString().split('');
	var verify = new Set(tmp);
	if(verify.size < 3){
		return true;
	}
	return false;
}
getTimeByNumbers("21:59:34", "23:00:00");