function checkPeselNumber(p) {
    var weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1],
        myPeselArr = [],
        sum = 0, iter = 11,
        sex, year, month, day, subYear;

    if(p.toString().length == 10) {
        myPeselArr.push(0);
        iter = 10;
    }
    if(p.toString().length == 9) {
        myPeselArr.push(0).push(0);
        iter = 9;
    }
    // sprawdzenie dlugosci
    //if(p.toString().length != 11) return false;

    // przygotowanie tablicy
    for(var i = 0; i < iter; i++) {
        myPeselArr.push(parseInt(p.toString()[i]));
    }

    // sprawdzenie sumy kontrolnej
    for(var i = 0; i < 11; i++) {
        sum += weights[i] * myPeselArr[i];
    }
    if(sum % 10 != 0) return false;

    sex = (myPeselArr[9] % 2 == 0) ? "K" : "M";
    day = myPeselArr[4] * 10 + myPeselArr[5];
    if(myPeselArr[2] > 7) subYear = 1800;
    else if(myPeselArr[2] > 1) subYear = 2000;
    else if(myPeselArr[2] > 3) subYear = 2100;
    else if(myPeselArr[2] > 5) subYear = 2200;
    month = (myPeselArr[2] % 2) * 10 + myPeselArr[3];
    year = subYear + myPeselArr[0] * 10 + myPeselArr[1];

    console.log(day, month, year, sex);
}

checkPeselNumber(99880221816);