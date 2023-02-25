import Button from "./Button";
import ModalLogin from "../Modal/ModalLogIn.js";

export default class LogInButton extends Button {
  constructor(innerText, classList) {
    super(...arguments);
    this._button.href = "#!login";
    this._button.addEventListener("click", (event) => {
      const modalLogin = new ModalLogin("modal-login");
      document.body.append(modalLogin.render());
      
    });
  }
}
