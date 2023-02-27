import ModalLogin from "./ModalLogin.js";

export default class Login {
  constructor() {
    this._loginButton = document.createElement("a");
    this._loginButton.href = "#!";
    this._loginButton.innerText = "Увійти";
    this._logoutButton = document.createElement("a");
    this._logoutButton.href = "#!";
    this._logoutButton.innerText = "Вийти";

    this._loginButton.addEventListener("click", this.getLogin);
  }

  static loginStatus = localStorage.getItem("clinic-token") ? true : false;

  getLogin() {
    new ModalLogin().render();
  }

  render() {
    return !Login.loginStatus ? this._loginButton : null;
  }
}