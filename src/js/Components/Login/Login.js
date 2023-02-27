import ModalLogin from "../Modal/ModalLogin.js";

export default class Login {
  constructor() {
    this._loginButton = document.createElement("button");
    this._loginButton.className = "button-enter";
    this._loginButton.innerText = "Увійти";
    this._loginButton.addEventListener("click", (event) => {
      this.getLogin();
    });

    this._logoutButton = document.createElement("button");
    this._logoutButton.innerText = "Вийти";
    this._logoutButton.addEventListener("click", (event) => {
      localStorage.removeItem("clinic-token");
      Login.loginStatus = false;
      new Login().render();
    });

    this._createVisit = document.createElement("button");
    this._createVisit.innerText = "Створити візит";
    this._createVisit.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }

  static loginStatus;

  static isLogged() {
    new Login().render();
  }

  render() {
    const loginButtons = document.getElementById("login-status");
    loginButtons.innerHTML = "";

    if (localStorage.getItem("clinic-token")) {
      Login.loginStatus = true;
      loginButtons.append(this._createVisit, this._logoutButton);
    } else {
      Login.loginStatus = false;
      loginButtons.append(this._loginButton);
    }
  }

  getLogin() {
    new ModalLogin().render();
  }
}