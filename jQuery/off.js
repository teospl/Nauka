function action1() {
  console.log('action 1');
}

function action2() {
  console.log('action 2');
}

$('button').on('click', action1);
$('button').on('click', action2);

$('button').off('click', action2);
