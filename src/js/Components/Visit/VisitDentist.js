import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.lastVisit = responseObject.lastVisitDate;
  }

  get lastVisit(){
    return this._lastVisit
  }

  set lastVisit(value) {
    if (!this._elLastVisit) {
      this._elLastVisit = document.createElement('p');
    }
    this._elLastVisit.innerText = `Дата останнього відвідування: ${value};`;
    this._lastVisit = value;
  }

  render(){
    this.renderVisitBase();
    this.visitAdd.append(this._elLastVisit); 
    this.visitAdd.append(this.buttonHide);
    this.visitAdd.append(this.buttonEdit); 
  }
}

