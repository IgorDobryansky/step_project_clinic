import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.bpLower = responseObject.bpLower,
    this.bpUpper = responseObject.bpUpper,
    this.bodyIndex = responseObject.bodyIndex,
    this.diseases = responseObject.diseases,      
    this.age = responseObject.age
  } 

  get bpLower(){
    return this._pressure
  }

  set bpLower(value) {
    if (!this._elBpLower) {
      this._elBpLower = document.createElement('p');
    }
    this._elBpLower.innerText = `Нижній артеріальний тиск: ${value};`;
    this._bpLower = value;
  }

  get bpUpper(){
    return this._pressure
  }

  set bpUpper(value) {
    if (!this._elBpUpper) {
      this._elBpUpper = document.createElement('p');
    }
    this._elBpUpper.innerText = `Верхній артеріальний тиск: ${value};`;
    this._bpUpper = value;
  }

  get bodyIndex(){
    return this._bodyIndex
  }

  set bodyIndex(value) {
    if (!this._elBodyIndex) {
      this._elBodyIndex = document.createElement('p');
    }
    this._elBodyIndex.innerText = `Індекс маси тіла: ${value};`;
    this._bodyIndex = value;
  }

  get diseases(){
    return this._diseases
  }

  set diseases(value) {
    if (!this._elDiseases) {
      this._elDiseases = document.createElement('p');
    }
    this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${value};`;
    this._diseases = value;
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
    this.visitAdd.append(this._elBpUpper, this._elBpLower, this._elBodyIndex, this._elDiseases, this._elAge);
    this.visitAdd.append(this.buttonHide);
    this.visitAdd.append(this.buttonEdit);
    this.visitAdd.append(this.buttonStatus); 
  }

}