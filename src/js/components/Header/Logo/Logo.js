import headerLogoImage from "../../../../img/clinic_logo.png";
import { createElement } from "../../../helpers/createElement.js";

export default class Logo {
  constructor() {
    this._headerLogo = createElement("div", ["logo-wrapper"]);
    this._headerLogo.innerHTML = `<img src=${headerLogoImage} alt="Clinic logo" class="logo-image">`;
  }

  render() {
    return this._headerLogo;
  }
}
