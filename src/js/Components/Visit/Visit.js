export default class Visit {
  constructor(fullName, doctor) {
    this.fullName = fullName;
    this.doctor = doctor;
  }

  renderVisit() {
    this.renderVisitBase();
  }

  renderVisitBase() {
    this._visitCard = document.getElementById("visits");
    this.visitDiv = document.createElement("div");
    this.button = document.createElement("div");
    this.buttonDiv = document.createElement("button");
    this.buttonDiv2 = document.createElement("button");
    this.buttonDiv3 = document.createElement("button");
    this.logoDone = document.createElement("div");
    this.id = Math.floor(Math.random() * 10000);
    this.buttonDiv.setAttribute("data-buttonid", `${this.id}`);
    this.buttonDiv.id = `btn` + `${this.id}`;
    this.visitAddDiv = document.createElement("div");
    this.visitAddH2 = document.createElement("h2");
    this.visitAddH2.innerText = "Додаткова інформація:";
    this.visitAddDiv.id = `${this.id}`;
    this.visitDiv.className = "visitDiv";
    this.button.className = "button_wrapper";
    this.buttonDiv.className = "button";
    this.buttonDiv3.className = "button3";
    this.logoDone.className = "logo_done";
    this.button.append(this.buttonDiv, this.logoDone);
    this.visitAddDiv.append(this.visitAddH2);
    this.visitDiv.append(
      this._elFullName,
      this._elDoctor,
      this.button,
      this.visitAddDiv
    );
    this._visitCard.append(this.visitDiv);

    this.buttonDiv.innerHTML = "Показати більше";

    let btn = document.querySelector(".button");
    let visitId = this.visitAddDiv;
    let btnDiv = this.buttonDiv;
    let visit = this;
    visitId.style.display = "none";

    this.buttonDiv.addEventListener("click", visit.showInfo);

    this.buttonDiv2.addEventListener("click", visit.hideInfo);

    this.buttonDiv3.addEventListener("click", visit.hideInfo);
  }

  showInfo() {
    if (this.visitAddDiv.style.display === "none") {
      this.visitAddDiv.style.display = "block";
      this.buttonDiv.style.display = "none";
    }
  }

  hideInfo() {
    if (this.visitAddDiv.style.display === "block") {
      this.visitAddDiv.style.display = "none";
      this.buttonDiv.style.display = "block";
    }
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    if (!this._elFullName) {
      this._elFullName = document.createElement("h1");
    }
    this._elFullName.innerText = `ПІБ: ${value};`;
    this._fullName = value;
  }

  get doctor() {
    return this._doctor;
  }

  set doctor(value) {
    if (!this._elDoctor) {
      this._elDoctor = document.createElement("p");
    }
    this._elDoctor.innerText = `Лікар: ${value};`;
    this._doctor = value;
  }
}
