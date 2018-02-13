/* global window */
export default class User {
  constructor(user) {
    this.user = user;
    this.admin = isAdmin(user);
  }

  save() {
    window.sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  load() {
    this.user = JSON.parse(window.sessionStorage.getItem('user'));
    this.admin = isAdmin(this.user);
  }
}

function isAdmin() {
  return false;
}
