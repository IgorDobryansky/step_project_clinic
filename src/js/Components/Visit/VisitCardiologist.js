import Visit from "./Visit.js";
import ModalVisitCardiologist from "../Modal/ModalVisitCardiologist.js";

export default class VisitCardiologist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    if (responseObject) {
      this.bp = this.bp;
      this.bpLower = responseObject.bpLower;
      this.bpUpper = responseObject.bpUpper;
      this.bodyIndex = responseObject.bodyIndex;
      this.diseases = responseObject.diseases;
      this.age = responseObject.age;
    } else {
      this.bp = "";
      this.bpLower = "";
      this.bpUpper = "";
      this.bodyIndex = "";
      this.diseases = "";
      this.age = "";
    }
    this.data.doctor = "Кардіолог";
  }

  get bpLower() {
    return this.data.bpLower;
  }

  set bpLower(value) {
    if (!this._elBpLower) {
      this._elBpLower = document.createElement("p");
    }
    this._elBpLower.innerText = `${value};`;
    this.data.bpLower = value;
  }

  get bpUpper() {
    return this.data.bpUpper;
  }

  set bpUpper(value) {
    if (!this._elBpUpper) {
      this._elBpUpper = document.createElement("p");
    }
    this._elBpUpper.innerText = `${value};`;
    this.data.bpUpper = value;
  }

  get bodyIndex() {
    return this.data.bodyIndex;
  }

  set bodyIndex(value) {
    if (!this._elBodyIndex) {
      this._elBodyIndex = document.createElement("p");
    }
    this._elBodyIndex.innerText = `Індекс маси тіла: ${value};`;
    this.data.bodyIndex = value;
  }

  get diseases() {
    return this.data.diseases;
  }

  set diseases(value) {
    if (!this._elDiseases) {
      this._elDiseases = document.createElement("p");
    }
    this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${value};`;
    this.data.diseases = value;
  }

  get age() {
    return this.data.age;
  }

  set age(value) {
    if (!this._elAge) {
      this._elAge = document.createElement("p");
    }
    this._elAge.innerText = `Вік: ${value};`;
    this.data.age = value;
  }

  edit() {
    let modal = new ModalVisitCardiologist(this, true);
    modal.render();
  }

  render() {
    this.renderVisitBase();
    let visit = this;

    this._elBp = document.createElement("div");
    this._elBp.innerHTML = `Артеріальний тиск: ${this.bpUpper} / ${this.bpLower}`;
    this._visitAdd.append(
      this._elBp,
      this._elBodyIndex,
      this._elDiseases,
      this._elAge,
      this._visitAddCheckbox
    );
    this._visitAdd.append(this._buttonEdit);
  }
}
