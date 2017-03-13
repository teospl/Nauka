var end = false;

function stoper() {
  var seconds = 0;
  end = false;
  var start = setInterval(count, 1000);
  function count() {
    if (end) {
      clearInterval(start);
    } else {
      ++seconds;
      console.clear();
      console.log(seconds);
      console.log('jesli chcesz zatrzymac wpisz stop()');    
    }
  }
}

function stop(){
  end = true;
}