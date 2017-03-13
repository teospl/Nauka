var fs = require('fs');

var ARTICLES = [
  {title: "Title 1", text: "Some text 1", author: "Maciej"},
  {title: "Title 2", text: "Some text 2", author: "Arek"},
  {title: "Title 3", text: "Some text 3", author: "John"}
];

var myJSON = {
  articles: ARTICLES
};

var jsonString = JSON.stringify(myJSON, null, 2);

fs.writeFileSync('test.json', jsonString);

console.log('Skonczylem');
