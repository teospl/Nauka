if (process.argv.length > 3) {
  var result = +process.argv[2] + +process.argv[3];
  console.log(result);
} else {
  console.log('Blad - za malo argumentow');
}
