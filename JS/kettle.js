function Kettle() {
  this.isOn = false;

  this.turnOn = function () {
    this.isOn = true;
  };

  this.turnOff = function () {
    this.isOn = false;
  };
}

var kettle1 = new Kettle();
var kettle2 = new Kettle();
kettle1.turnOn();
kettle2.turnOff();
console.log(kettle1.isOn);
console.log(kettle2.isOn);
