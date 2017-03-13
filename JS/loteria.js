function uruchomLosowo(f1, f2) {
  var rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

function myF1() {
  console.log('F1');
}

function myF2() {
  console.log('F2');
}

function myF3() {
  console.log('F3');
}

uruchomLosowo(myF1, myF3);
