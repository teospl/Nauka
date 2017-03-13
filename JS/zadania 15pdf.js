//////// absolute - istnieje wbudowana wersja w bibliotece Math.

function absolute(x){
	if (x < 0){
		return -x;
	} else {
		return x;
	}
}
////lepiej:
function absolute(x){
	if (x < 0){
		x = -x;
	} 
    return x;
}


console.log(absolute(-3));

///////// rozpoznanie dnia

function whatDayIs(day){
    switch (day){
        case 1:
            return 'poniedzialek';
            break;
        case 2:
            return 'wtorek';
            break;
        case 3:
            return 'sroda';
            break;
        case 4:
            return 'czwartek';
            break;
        case 5:
            return 'piatek';
            break;
        case 6:
            return 'sobota';
            break;
        case 7:
            return 'niedziela';
            break;
        default:
            return 'podałeś zły dzień'
            break;
    }
}
console.log(whatDayIs(13));

////lepiej:
function whatDayIs(day){
    var days = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];
    if(day < 1 || day > 7){
        return "podałeś zły dzień";
    }
    return days[day+1];
}
console.log(whatDayIs(13));

//////// NWD
function euklidesNWD(a,b) {
    while(a != b) {
        while(a>b) {
            a = a-b;
        }
        while(b>a) {
            b = b-a;
        }
    }
    return a;
}
console.log(euklidesNWD(31, 62))

