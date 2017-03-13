var Person = Backbone.Model.extend({});

var person1 = new Person();

person1.set("name", "John");
person1.set("age", 33);

person1.get("name");
person1.get("age");

person1.unset("name");