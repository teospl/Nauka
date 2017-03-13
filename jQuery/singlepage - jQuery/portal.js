var menuEls = document.querySelectorAll('a');
var buttEl = document.querySelector('button[name="polityka"]');
var buttonLogin = document.querySelector('button[name="zaloguj"]');
var partialResults = [];



function clicked(){
    alert('Polityka prywatności, ważna rzecz.');
}

function clearView(){
    var visibleEls = document.querySelectorAll('.visible');
        for(var i = 0; i < visibleEls.length; ++i){
            visibleEls[i].classList.remove('visible');
        }
}

function onMenuActivation(event){
    var activeItem = document.querySelector('.active');
    activeItem.classList.remove('active');
    var menuEl = event.target;
    menuEl.classList.add('active');
}

function onClick(event){
    clearView();
    var el = event.target.getAttribute('href');
    var articleEl = document.querySelector(el);  
    articleEl.classList.add('visible');
}

for(var i = 0; i < menuEls.length; ++i){
 menuEls[i].addEventListener('click', onClick);
 menuEls[i].addEventListener('mouseup', onMenuActivation);    
}
buttEl.addEventListener('click', clicked);




//////////////
///
///// login by reduce

 
function reduce(items, base, action) {
  var result = base;
  for (var i = 0; i < items.length; ++i) {
    result = action(result, items[i]);
  }
  return result;
}
 
function areBothTrue(b1, b2) {
  return b1 && b2;
}
 
function canSendForm() {
  return reduce(partialResults, true, areBothTrue);
}

function validate(){
var inputLogin = document.querySelector('input[name="login"]').value;
var inputPass = document.querySelector('input[name="pass"]').value;
    if(inputLogin != 'admin'){
        partialResults.push(false);
        alert('Podałeś błędny login!');
    } else {partialResults.push(true);}
    if (inputPass != 'admin') {
        partialResults.push(false);
        alert('Podałeś błędne hasło!');
    } else {partialResults.push(true);}

if(canSendForm()){
    clearView();
    articleEl = document.querySelector('article[id="panel"]');  
    console.log(articleEl);
    articleEl.classList.add('visible');
}
partialResults = [];
}
 

buttonLogin.addEventListener('click', validate);