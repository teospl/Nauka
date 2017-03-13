console.log('remove');

$('button').remove();
$('nav').children('button').remove();

$('button').on('click', function () {
  alert('Click!');
});

var removedButton = $($('button')[0]).detach();
removedButton.appendTo('nav');
