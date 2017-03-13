var art1El = document.querySelector('#art-1');
var art2El = document.querySelector('#art-2');
var art3El = document.querySelector('#art-3');

var link1El = document.querySelector('#link-1');
var link2El = document.querySelector('#link-2');
var link3El = document.querySelector('#link-3');

art2El.classList.add('hidden');
art3El.classList.add('hidden');

function onLink1Click(event) {
  console.log(event.target);
  // hide.
  art2El.classList.add('hidden');
  art3El.classList.add('hidden');
  // show.
  art1El.classList.remove('hidden');
}

function onLink2Click() {
  // hide.
  art1El.classList.add('hidden');
  art3El.classList.add('hidden');
  // show.
  art2El.classList.remove('hidden');
}

function onLink3Click() {
  // hide.
  art1El.classList.add('hidden');
  art2El.classList.add('hidden');
  // show.
  art3El.classList.remove('hidden');
}

link2El.addEventListener('click', onLink2Click);
link3El.addEventListener('click', onLink3Click);
link1El.addEventListener('click', onLink1Click);
