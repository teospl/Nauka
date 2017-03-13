function isAdmin(name) {
  if (name == 'admin') {
    return true;
  } else {
    return false;
  }
}

function logIn(name) {
  if (isAdmin(name)) {
    document.title = 'Hello admin';
  } else {
    document.title = 'Hello user';
  }
}

logIn('admin');
logIn('Jarek');
