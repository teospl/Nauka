function onButtonClick(event) {
  console.log('click', event.data);
}

$($('button')[0]).on('click', null, 'art-1', onButtonClick);
$($('button')[1]).on('click', null, 'art-2', onButtonClick);
$($('button')[2]).on('click', null, 'art-3', onButtonClick);
