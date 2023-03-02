import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.lastVisit = responseObject.lastVisitDate;
    //this.lastVisitDate.innerText = responseObject.lastVisitDate;
    //this._hidenFields.append(this.lastVisitDate);
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
    // this.visitAdd.append(this.buttonStatus); 
    //this._visitParentlement.append(this._visitDiv);
  }
}

// let dobryanskyi = new VisitDentist("Добрянский Ігор Батьковіч", "Стоматолог", "10.09.2022");
// dobryanskyi.render() 
