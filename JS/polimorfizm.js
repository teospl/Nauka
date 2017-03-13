function Shape() {
  this.draw = function () {
  };
}

function Rectangle() {
  this.draw = function () {
    console.log('rysuje kwadrat');
  };
}
Rectangle.prototype = new Shape();

function Circle() {
  this.draw = function () {
    console.log('rysuje kolko');
  };
}
Circle.prototype = new Shape();

var shapes = [
  new Rectangle(),
  new Circle(),
  new Rectangle(),
  new Circle(),
  new Circle(),
  new Rectangle()
];

function drawShapes(shapes) {
  for (var i = 0; i < shapes.length; ++i) {
    shapes[i].draw();
  }
}

drawShapes(shapes);
