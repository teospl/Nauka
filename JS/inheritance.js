function Animal () {
}

function Dog() {
  this.barkSound = 'bow wow';
  this.bark = function () {
    console.log(this.barkSound);
  }
}

function Wolf() {
  this.barkSound = 'awoooooooo';
}

Dog.prototype = new Animal();
Wolf.prototype = new Dog();

var someDog = new Dog();
var someWolf = new Wolf();
