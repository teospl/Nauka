var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify('jquery-3.0.0.js'); 
fs.writeFileSync('jquery.min.js', result.code);
console.log('ok');
