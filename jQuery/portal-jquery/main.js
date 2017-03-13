function hideAllArticles() {
  $('.article').addClass('hidden');
}

function showArticle(id) {
  $('#' + id).removeClass('hidden');
}

function onLinkClick(event) {
  hideAllArticles();
  showArticle($(event.target).attr('show-article'));
}

hideAllArticles();
showArticle('art-1');

$('.link').on('click', onLinkClick);
