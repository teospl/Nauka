var ARTICLES = [
    {id: 1, title: "Str główna", text: "Treść strony głównej", author: "Ania"},
    {id: 2, title: "Str 1", text: "Treść strony pierwszej", author: "Basia"},
    {id: 3, title: "Str 2", text: "Treść strony drugiej", author: "Zosia"}
];
var articleInnerHtml = '<header><p>title</p></header><section><p>text</p></section><footer><p>author</p></footer>';

function hideAllArticles() {
    $('article').addClass('hidden');
}

function showArticle(id) {
    $('#' + id).removeClass('hidden');
}

function onLinkClick(event) {  
    hideAllArticles();
    showArticle($(event.target).attr('showart'));
}

function createMenu(){
    for(var i = 0; i< ARTICLES.length; ++i){
        var where = ARTICLES[i].id;
        $('.top-nav').append($('<button>', {id: 'link-'+where, class: 'link', showart: 'art-'+where}));
        $('#link-'+where).text(ARTICLES[i].title);
    }
}

function createArticles(){
    for(var i = 0; i< ARTICLES.length; ++i){
        var articleNumber = ARTICLES[i];
        $('.articles').append($('<article>', {id: 'art-'+articleNumber.id, class: 'article'}));
        var articleContent = articleInnerHtml.replace('title', articleNumber.title).replace('text', articleNumber.text).replace('author', 'Autor:'+articleNumber.author);
        $('#art-'+articleNumber.id).html(articleContent);

    }
}

createMenu();
createArticles()
hideAllArticles();

var atrib = $($('.article')[0]).attr('id');
showArticle(atrib);
$('.link').on('click', onLinkClick);