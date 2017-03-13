var clickableEls = document.querySelectorAll('.clickable');

function onMouseOverButton() {
  console.log('mouse over');
}

function onMouseOutButton() {
  console.log('mouse out');
}

function onClickButton() {
  console.log('mouse click');
}

for (var i = 0; i < clickableEls.length; ++i) {
  clickableEls[i].addEventListener('click', onClickButton);
  clickableEls[i].addEventListener('mouseover', onMouseOverButton);
  clickableEls[i].addEventListener('mouseout', onMouseOutButton);
}
