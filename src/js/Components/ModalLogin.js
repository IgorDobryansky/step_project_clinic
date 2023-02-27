import Modal from "./Modal.js";
// import loginRequest from "../helpers/loginRequest.js";

export default class ModalLogin extends Modal {
  constructor() {
    super();
    this._loginEmailFieldset = document.createElement("fieldset");
    this._loginEmailFieldset.className = "email-fieldset";
    this._loginEmailLegend = document.createElement("legend");
    this._loginEmailLegend.className = "email-legend";
    this._loginEmailLegend.innerText = "Емейл";
    this._emailInput = document.createElement("input");
    this._emailInput.type = "text";
    this._emailInput.className = "email-input";
    this._loginEmailFieldset.append(this._loginEmailLegend, this._emailInput);

    this._loginPasswordFieldset = document.createElement("fieldset");
    this._loginPasswordFieldset.className = "password-fieldset";
    this._loginPasswordLegend = document.createElement("legend");
    this._loginPasswordLegend.className = "password-legend";
    this._loginPasswordLegendText = document.createElement("span");
    this._loginPasswordLegendText.className = "password-legend_text";
    this._loginPasswordLegendText.innerText = "Пароль";
    this._loginPasswordLegend.append(this._loginPasswordLegendText);
    this._passwordInput = document.createElement("input");
    this._passwordInput.type = "password";
    this._passwordInput.className = "password-input";
    this._loginPasswordFieldset.append(
      this._loginPasswordLegend,
      this._passwordInput
    );

    this._enterButton = document.createElement("a");
    this._enterButton.className = "button check-data";
    this._enterButton.innerText = "Увійдіть";
    this._enterButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.loginRequest();
    });

    this._orText = document.createElement("span");
    this._orText.className = "or-text";
    this._orText.innerText = "або";

    this._registerLink = document.createElement("a");
    this._registerLink.className = "register-link";
    this._registerLink.target = "_blank";

    this._registerLink.href =
      "https://ajax.test-danit.com/front-pages/cards-register.html";
    this._registerLink.innerText = "Зареєструйтесь";

    this._modal.append(
      this._loginEmailFieldset,
      this._loginPasswordFieldset,
      this._enterButton,
      this._orText,
      this._registerLink
    );
  }

  async loginRequest() {
    const emailValue = this._emailInput.value;
    const passwordValue = this._passwordInput.value;

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
        console.log("token", token);
        localStorage.setItem("clinic-token", `${token}`);
        console.log("storage", localStorage.getItem("clinic-token"));
      } else {
        throw "Перевірте правильність емейлу чи паролю або зареєструйтесь";
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    document.body.append(this._modalWrapper);
  }
}
