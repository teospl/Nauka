// Czekaj dopójki liczba nie jest > 0.
// Jak jest > 0 to poinformuj (console.log)
// i zakończ działanie (nie informuj w kółko).

var liczba = -5;

function wait1() {
  if (liczba > 0) {
    console.log('Wait1: Liczba > 0');
    return;
  }
  setTimeout(wait1, 1000);
}

wait1();

function wait2() {
  setTimeout(function () {
    if (liczba > 0) {
      console.log('Wait2: Liczba > 0');
      return;
    }
    wait2();
  }, 1000)
}

wait2();
