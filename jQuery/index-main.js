$(function () {
  $('.container').on('click', function () {
    console.log('container');
  });

  $('.child').on('click', function (event) {
    console.log('child');
    event.stopPropagation();
  });
});
