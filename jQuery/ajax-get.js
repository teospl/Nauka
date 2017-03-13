console.log('ajax get');

function onDataReceived(data) {
  console.log(data.articles.length);
}

$.get('test.json', onDataReceived);
