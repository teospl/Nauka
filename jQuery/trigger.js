function answer(event) {
  console.log('Hello Maciej!', event);
}

$('.hello').on('hello-from-maciej', answer);

$('.hello').trigger('hello-from-maciej', {data: 15}); // ?
