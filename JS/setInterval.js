function logIn1Second() {
  setTimeout(function () {
    console.log('test');
    logIn1Second();
  }, 1000);
}

logIn1Second();
