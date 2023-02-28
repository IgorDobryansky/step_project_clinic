import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor(fullName, doctor, lastVisit) {
    super(fullName, doctor);
    this.lastVisit = lastVisit;
  }

  get lastVisit() {
    return this._lastVisit;
  }

  set lastVisit(value) {
    if (!this._elLastVisit) {
      this._elLastVisit = document.createElement("p");
    }
    this._elLastVisit.innerText = `Дата останнього відвідування: ${value};`;
    this._lastVisit = value;
  }

  renderVisit() {
    this.renderVisitBase();
    this.visitAddDiv.append(this._elLastVisit);
    this.visitAddDiv.className = "visit_addinfo";
    this.buttonDiv2.innerHTML = "Приховати";
    this.visitAddDiv.append(this.buttonDiv2);
    this.buttonDiv3.innerHTML = "Редагувати";
    this.visitAddDiv.append(this.buttonDiv3);
  }
}
