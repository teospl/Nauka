function hideAllArticles() {
  var $articleEls = $('.article');
    $articleEls.addClass('hidden');
  
}

function showArticle(id) {
  var $art = $('#' + id);
  $art.removeClass('hidden');
}

function onLinkClick(event) {
  var $clickedLinkEl = $(event.target);
  var $articleToShow = $clickedLinkEl.attr('show-article');
  hideAllArticles();
  showArticle(articleToShow);
}

hideAllArticles();
showArticle('art-1');

var $links = $('.link');
console.log(links);


  $links.on('click', onLinkClick);
