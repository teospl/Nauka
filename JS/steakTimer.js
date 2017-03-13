function startSteakTimer(steakWeight) {
    console.log('Rozpoczynam smazenie');
    var fryTime = 2000 * steakWeight;
    var steakTurnTimeoutId;
  
    setTimeout(function () {
        console.log('Zdejmij stek z patelni');
        clearInterval(steakTurnTimeoutId);
    }, fryTime);
  
    steakTurnTimeoutId = setInterval(function () {
        console.log('Przewroc stek');
    }, 1000);
}
startSteakTimer(2);
