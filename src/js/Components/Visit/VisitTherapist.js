import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor(fullName, doctor, age) {
    super(fullName, doctor);
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (!this._elAge) {
      this._elAge = document.createElement("p");
    }
    this._elAge.innerText = `Вік: ${value};`;
    this._age = value;
  }

  renderVisit() {
    this.renderVisitBase();
    this.visitAddDiv.append(this._elAge);
    this.visitAddDiv.className = "visit_addinfo";
    this.buttonDiv2.innerHTML = "Приховати";
    this.visitAddDiv.append(this.buttonDiv2);
    this.buttonDiv3.innerHTML = "Редагувати";
    this.visitAddDiv.append(this.buttonDiv3);
  }
}
