var ARTICLES = [
  {title: "Title 1", text: "Some text 1", author: "Maciej"},
  {title: "Title 2", text: "Some text 2", author: "Arek"},
  {title: "Title 3", text: "Some text 3", author: "John"}
];

function hideAllArticles() {
  $('.article').addClass('hidden');
}

function showArticle(id) {
  $('#' + id).removeClass('hidden');
}

function onButtonClick(event) {
  var artId = event.data;
  console.log('click', artId);
  hideAllArticles();
  showArticle(artId);
}

for (var i = 0; i < ARTICLES.length; ++i) {
  var artId = 'art' + i;

  var $article = $('<article>');
  $article.attr('id', artId);
  $article.addClass('article');
  $('.articles').append($article);

  var $title = $('<p>');
  $article.append($title);
  $title.text(ARTICLES[i].title);

  var $text = $('<p>');
  $article.append($text);
  $text.text(ARTICLES[i].text);

  var $author = $('<p>');
  $article.append($author);
  $author.text('Author: ' + ARTICLES[i].author);

  var $button = $('<button>');
  $button.appendTo($('.top-nav'));
  $button.text(ARTICLES[i].title);
  $button.on('click', null, artId, onButtonClick);

}

hideAllArticles();
showArticle($($('.article')[0]).attr('id'));
