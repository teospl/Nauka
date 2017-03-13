var nav = $('<nav><button>Test</button></nav>');
document.body.appendChild(nav[0]);

var id = 'login-button';
var className = 'alert';

var button = $('<button id="' + id +
  '" class="' + className + '"></button>');
document.body.appendChild(button[0]);

var button2 = $('<button>', {
  id: id,
  class: className,
  hidden: false
});

// document.body.appendChild(button2[0]);
// $('body').append(button2);
button2.appendTo($('body'));
