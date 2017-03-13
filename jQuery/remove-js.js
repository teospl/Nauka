console.log('remove');

function onClick() {
  alert('Click!');
}

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener('click', onClick);
}

var removedButton = document.querySelectorAll('button')[0];
removedButton.remove();

document.querySelector('nav').appendChild(removedButton);
