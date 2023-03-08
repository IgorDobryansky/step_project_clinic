import ModalLogin from "../Modal/ModalLogin.js";
import ModalChooseDoctor from "../Modal/ModalChooseDoctor.js";
import { renderAllVisits } from "../../helpers/visitRequests.js";

export default class Login {
  constructor() {
    this._loginButton = document.createElement("button");
    this._loginButton.className = "button enter-button";
    this._loginButton.innerText = "Увійти";
    this._loginButton.addEventListener("click", (event) => {
      this.getLogin();
    });

    this._logoutButton = document.createElement("button");
    this._logoutButton.innerText = "Вийти";
    this._logoutButton.className = "button logout-button";
    this._logoutButton.addEventListener("click", (event) => {
      localStorage.removeItem("clinic-token");
      Login.loginStatus = false;
      new Login().render();
      document.getElementById("visits").innerHTML = "";
    });

    this._createVisit = document.createElement("button");
    this._createVisit.className = "button create-button";
    this._createVisit.innerText = "Створити візит";
    this._createVisit.addEventListener("click", (event) => {
      event.preventDefault();
      new ModalChooseDoctor().render();
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
      loginButtons.append(this._createVisit, this._logoutButton);
      renderAllVisits();
      return true;
    } else {
      loginButtons.append(this._loginButton);
      return false;
    }
  }

  getLogin() {
    new ModalLogin().render();
  }
}
