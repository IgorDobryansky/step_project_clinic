import { createElement } from "../../helpers/createElement.js";
import Modal from "./Modal.js";
import logInRequest from "../../helpers/login-request.js";

export default class ModalLogin extends Modal {
  constructor(classList) {
    super(...arguments);
    this._emailInput = createElement("input", "modal-email__imput");
    this._emailInput.placeholder = "Введіть емейл";
    this._emailInput.required = true;
    this._emailInput.type = "email";
    this._passwordInput = createElement("input", "modal-password__input");
    this._passwordInput.type = "password";
    this._passwordInput.required = true;
    this._passwordInput.placeholder = "Введіть пароль";
    this._errorMessage = createElement("span", "login-error");
    this._loginButton = createElement("button", ["button", "check-login"]);
    this._loginButton.innerText = "Логін";

    this._loginButton.addEventListener("click", (event) => {
      console.log(this._emailInput.value);
      console.log(this._passwordInput.value);
      this._loginButton.disabled = true;

      logInRequest(this._emailInput.value, this._passwordInput.value)
        .then((response) => {
          if (!response.ok) {
            this._loginButton.disabled = false;
            this._errorMessage.innerHTML = `Вибачте. Помилка авторизації. Перевірте введені дані або зареєструйтесь.`;
            throw new Error();
          }

          this._loginButton.disabled = false;
          this._modal.remove();
          return response.text();
        })
        .then((token) => {
          localStorage.setItem("clinic-token", `${token}`);
          console.log(localStorage.getItem("clinic-token"));
        });
    });

    this._registerLink = createElement("a", "register-link");
    this._registerLink.href =
      "https://ajax.test-danit.com/front-pages/cards-register.html";
    this._registerLink.target = "_blank";
    this._registerLink.innerText = "Зареєструйтесь";
    this._else = createElement("span", "else");
    this._else.innerText = "або";
  }

  render() {
    this._modal.append(
      this._emailInput,
      this._passwordInput,
      this._errorMessage,
      this._loginButton,
      this._else,
      this._registerLink
    );
    return this._modal;
  }
}
