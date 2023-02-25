import "./Modal.scss";

import { createElement } from "../../helpers/createElement.js";

export default class Modal {
  constructor(classList) {
    this._modal = createElement("form", classList);
  }

  render() {
    return this._modal;
  }
}
