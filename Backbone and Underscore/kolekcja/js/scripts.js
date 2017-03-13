var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({

    model: Person
});

var person1 = new Person({
    id: 1,
    name: "John",
    age: 33,
    hobbies: ["sport","IT"]
});

var person2 = new Person({
    id: 2,
    name: "Thomas",
    age: 40,
    hobbies: ["golf","auta"]
});

var person3 = new Person({
    id: 3,
    name: "Alicja",
    age: 33,
    hobbies: ["plywanie"]
});

var people = new People([person1, person2, person3]);

people.get(2).toJSON();
people.at(1).toJSON();

