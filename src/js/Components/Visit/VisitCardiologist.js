import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
  constructor(fullName, doctor, pressure, bodyIndex, diseases, age) {
    super(fullName, doctor);
    this.pressure = pressure;
    this.bodyIndex = bodyIndex;
    this.diseases = diseases;
    this.age = age;
  }

  get pressure() {
    return this._pressure;
  }

  set pressure(value) {
    if (!this._elPressure) {
      this._elPressure = document.createElement("p");
    }
    this._elPressure.innerText = `Тиск: ${value};`;
    this._pressure = value;
  }

  get bodyIndex() {
    return this._bodyIndex;
  }

  set bodyIndex(value) {
    if (!this._elBodyIndex) {
      this._elBodyIndex = document.createElement("p");
    }
    this._elBodyIndex.innerText = `Індекс маси тіла: ${value};`;
    this._bodyIndex = value;
  }

  get diseases() {
    return this._diseases;
  }

  set diseases(value) {
    if (!this._elDiseases) {
      this._elDiseases = document.createElement("p");
    }
    this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${value};`;
    this._diseases = value;
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
    this.visitAddDiv.append(
      this._elPressure,
      this._elBodyIndex,
      this._elDiseases,
      this._elAge
    );
    this.visitAddDiv.className = "visit_addinfo";
    this.buttonDiv2.innerHTML = "Приховати";
    this.visitAddDiv.append(this.buttonDiv2);
    this.buttonDiv3.innerHTML = "Редагувати";
    this.visitAddDiv.append(this.buttonDiv3);
  }
}
