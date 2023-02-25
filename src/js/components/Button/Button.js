
import "./Button.scss";
import { createElement } from "../../helpers/createElement.js";

export default class Button {
  constructor(innerText, classList) {
    this._classList = classList;
    this._button = createElement("a", this._classList);
    this._innerText = innerText;
    this._button.innerText = this._innerText;
  }

  render() {
    return this._button;
  }
}
