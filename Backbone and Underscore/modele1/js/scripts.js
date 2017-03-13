var Person = Backbone.Model.extend({

   initialize: function () {
       console.log("Zostalem utworzony");
   },

   defaults: {
     name: "John",
       age: 33
   }

});

var john = new Person();