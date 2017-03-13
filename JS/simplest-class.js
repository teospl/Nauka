function MyClass() {
  this.name = 'abc';
  this.sayHello = function () {
    console.log(this.name);
  }
}

var i1 = new MyClass();
var i2 = new MyClass();
