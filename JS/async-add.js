function add(a, b, cb) {
  setTimeout(function (){
    cb(a + b);
  }, 1000)
}

function test(tekst) {
  console.log(tekst);
}

function test2(tekst) {
  console.log('Wynik:', tekst);
}

add(5, 10, test);
add(34, 45, test2);
