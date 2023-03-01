import Modal from "./Modal.js";
import Login from "../Login/Login.js";

export default class ModalLogin extends Modal {
  constructor() {
    super();
    this._loginEmailFieldset = document.createElement("fieldset");
    this._loginEmailFieldset.className = "login-fieldset email-fieldset";

    this._loginEmailLabel = document.createElement("label");
    this._loginEmailLabel.className = "label email-label";
    this._loginEmailLabel.innerText = "Емейл";

    this._emailInput = document.createElement("input");
    this._emailInput.type = "email";
    this._emailInput.className = "input email-input";
    this._emailInput.id = "email";
    this._emailInput.name = "email";
    this._emailInput.placeholder = "example@email.ua";
    this._emailInput.addEventListener("input", () => {
      this._errorMessage.innerHTML = "";
    });
    this._loginEmailFieldset.append(this._emailInput, this._loginEmailLabel);

    this._loginPasswordFieldset = document.createElement("fieldset");
    this._loginPasswordFieldset.className = "login-fieldset password-fieldset";

    this._loginPasswordLabel = document.createElement("label");
    this._loginPasswordLabel.className = "label password-label";
    this._loginPasswordLabel.for = "password";
    this._loginPasswordLabel.innerText = "Пароль";
    
    this._passwordInput = document.createElement("input");
    this._passwordInput.type = "password";
    this._passwordInput.className = "input password-input";
    this._passwordInput.id = "password";
    this._passwordInput.name = "password";
    this._passwordInput.placeholder = "example password";
    this._passwordInput.addEventListener("input", () => {
      this._errorMessage.innerHTML = "";
    });
    this._loginPasswordFieldset.append(
      this._passwordInput,
      this._loginPasswordLabel
    );

    this._errorMessage = document.createElement("span");
    this._errorMessage.className = "modal-error";

    this._enterButton = document.createElement("button");
    this._enterButton.className = "button-check-data";
    this._enterButton.innerText = "Увійдіть";
    this._enterButton.tabIndex = "0";
    this._enterButton.addEventListener("click", (event) => {
      this.loginRequest();
    });

    this._orText = document.createElement("span");
    this._orText.className = "or-text";
    this._orText.innerText = "або";

    this._registerLink = document.createElement("a");
    this._registerLink.className = "register-link";
    this._registerLink.target = "_blank";
    this._registerLink.tabIndex = "0";
    this._registerLink.href =
      "https://ajax.test-danit.com/front-pages/cards-register.html";
    this._registerLink.innerText = "Зареєструйтесь";

    this._modal.append(
      this._loginEmailFieldset,
      this._loginPasswordFieldset,
      this._errorMessage,
      this._enterButton,
      this._orText,
      this._registerLink
    );
  }

  async loginRequest() {
    const emailValue = this._emailInput.value;
    const passwordValue = this._passwordInput.value;
    this._enterButton.disabled = true;
    this._errorMessage.classList.remove("show");

    try {
      let request = await fetch(
        "https://ajax.test-danit.com/api/v2/cards/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
          }),
        }
      );

      let response = await request;

      if (response.ok) {
        let token = await request.text();
        this._modalWrapper.remove();
        localStorage.setItem("clinic-token", `${token}`);
        Login.loginStatus = true;
        new Login().render();
      } else {
        throw "Перевірте правильність емейлу чи паролю або зареєструйтесь.";
      }
    } catch (error) {
      this._enterButton.disabled = false;
      this._errorMessage.innerHTML = error;
      this._errorMessage.classList.add("show");
    }
  }

  
}
