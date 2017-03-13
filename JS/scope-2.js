var a = 15;

function test() {
  var b = 20;
  console.log(b);
  console.log(a);

  var test2 = function () {
    var c = 30;
    console.log(b, a, c);

    function test3() {
      
    }
  };

  console.log(c); // nie!

}

console.log(a);
