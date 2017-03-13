function getWeatherConditions(cb) {
  // connecting to the internet;
  setTimeout(function () {
    //
    cb('30 degrees');
  }, 1000);
}

getWeatherConditions(function (result) {
  console.log(result);
});


