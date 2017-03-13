$(function () {

  var $inputFirstName,
    $inputLastName,
    $inputEmail,
    $buttonSend,
    $form;

  function validateLiteral(literal) {
    return /^[A-z]+$/.test(literal);
  }

  function validateEmail(email) {
    var emailParts = email.split('@');
    return emailParts.length == 2 &&
      /[\w.]+/.test(emailParts[0]) &&
      /[\w.]+/.test(emailParts[1]);
  }

  function validateForm() {
    return validateLiteral($inputFirstName.val()) &&
      validateLiteral($inputLastName.val()) &&
      validateEmail($inputEmail.val());
  }

  function onFormSend() {
    if (validateForm()) {
      $form.removeClass('has-error');
      $form.addClass('has-success');
    } else {
      $form.addClass('has-error');
      $form.removeClass('has-success');
    }
  }

  function main() {
    $inputFirstName = $('#input-first-name');
    $inputLastName = $('#input-last-name');
    $inputEmail = $('#input-email');
    $buttonSend = $('#button-register');
    $form = $('#form');
    $buttonSend.on('click', onFormSend);
  }

  main();

});
