function* idMaker() {
    var index = 0;
    var chars = ['a','b','c','d','e'];
    while(true) {
        var str = "";
        for(var i = 0; i < 5; i++) {
            var rand = Math.floor(Math.random()*100);
            rand %= chars.length;

            str += chars[rand];

        }
        yield str;
        index++;
    }
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
















//let mistypedVaraible = 17;
//
//
//var obj = {
//    x: 0,
//    set ['setX'](v) { this.x = v; }
//};
//
//obj.setX = "baz";      // run the setter
//console.log(obj.x); // "baz"
//
//
//function* gen(){
//    yield* ["a", "b", "c"]
//}
//
//var generator = gen();
//
//var foo = generator.next() // { value:"a", done:false }
//var bar = generator.next()
//console.log(bar);


