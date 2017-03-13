function wykonajPo10(coWykonaj) {
  var i = 0;
  setInterval(function () {
    ++i;
    console.log(i);
    if (i == 10) {
      coWykonaj();
    }
  }, 1000);
}

wykonajPo10(function () {
  console.log('-- po 10 iteracji');
});

function getWeather(f1) {
  setTimeout(function () {
    console.log('got weather');
    f1('sunny');
  }, Math.random() * 5000);
}

getWeather(function (weather) {
  console.log('Today it is', weather);
});
