import "./Header.scss";
import { createElement } from "../../helpers/createElement.js";
import Logo from "./Logo/Logo.js";
import RegisterButton from "../Button/Register-Button.js";
import LogInButton from "../Button/LogIn-Button.js";

export default class Header {
  constructor() {
    this._headerLogo = new Logo().render();
    this._loginButtons = createElement("div", "login-buttons");
    this._registerButton = new RegisterButton("Реєстрація", [
      "button",
      "button-register",
    ]).render();
    this._logInButton = new LogInButton("Увійти", [
      "button",
      "button-login",
    ]).render();
    this._header = createElement("header", ["header"]);
  }

  render() {
    this._loginButtons.append(this._registerButton, this._logInButton);
    this._header.append(this._headerLogo, this._loginButtons);
    return this._header;
  }
}
