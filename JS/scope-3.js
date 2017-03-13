var a = 5;

function test() {
  console.log(a);

  if (a > 0) {
    var b = 10;
  }

  console.log(b); // ?
}

test();
