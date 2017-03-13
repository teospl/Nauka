console.log('test1');

var intervalId = setInterval(function () {
  console.log('test2');
}, 1000);

setTimeout(function () {
  console.log('-- clearing the timeout');
  clearTimeout(intervalId);
}, 5000);

console.log(intervalId);

console.log('test3');

