$(function () {

  function onButtonClick(event) {
    var numClicks = $.data(event.target, 'num-clicks');
    if (numClicks == undefined) {
      numClicks = 0;
    }
    $.data(event.target, 'num-clicks', ++numClicks);
    console.log('Click', numClicks);
  }

  $('button').on('click', onButtonClick);

});
