import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.age = responseObject.age;
  }

  get age(){
    return this._age
  }

  set age(value) {
    if (!this._elAge) {
      this._elAge = document.createElement('p');
    }
    this._elAge.innerText = `Вік: ${value};`;
    this._age = value;
  }

  render(){
    this.renderVisitBase();
    this.visitAdd.append(this._elAge); 
    this.visitAdd.append(this.buttonHide);
    this.visitAdd.append(this.buttonEdit);
  }
}
