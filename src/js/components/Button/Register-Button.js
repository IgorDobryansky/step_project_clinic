import Button from "./Button";

export default class RegisterButton extends Button {
  constructor(innerText, classList) {
    super(...arguments);
    this._button.href =
      "https://ajax.test-danit.com/front-pages/cards-register.html";
    this._button.target = "_blank";
  }
}
