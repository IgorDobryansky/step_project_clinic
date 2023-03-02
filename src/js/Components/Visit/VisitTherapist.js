import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.age = responseObject.age;
    //this._hidenFields.append(this._age);
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
    // this.visitAdd.append(this.buttonStatus); 

    //this._visitParentlement.append(this._visitDiv);
  }
}

// let polyanskaya = new VisitTherapist ("Полянська Олена Михайлівна", "Терапевт", 23);
// polyanskaya.render()
