(function () {
  var isAdmin = false;

  function showAdminConsole() {
    if (!isAdmin) {
      console.error('Not an admin');
      return;
    }
    console.log('showing admin console');
  }

  showAdminConsole();
}());
