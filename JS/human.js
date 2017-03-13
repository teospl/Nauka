function Human(name) {
  this.name = name;

  this.pobierzPlec = function () {
    if (this.name[this.name.length - 1] == 'a') {
      return 'kobieta';
    } else {
      return 'mezczyzna';
    }
  };

  this.przedstawSie = function () {
    console.log('Nazywam sie', this.name);
  };
}

var maciej = new Human('Maciej');
var gosia = new Human('Gosia');
