var Person = Backbone.Model.extend({});

var person1 = new Person({
    name: "John",
    age: 33,
    hobbies: ["sport","IT"]
});
var person2 = new Person({
    name: "Thomas",
    age: 40,
    hobbies: ["golf","auta"]
});
var person3 = new Person({
    name: "Alicja",
    age: 33,
    hobbies: ["plywanie"]
});

person1.keys();
person1.toJSON();
person1.values();
person1.pairs();
person1.invert();
person2.pick("name", "age");
person3.omit("hobbies");

