import Visit from "./Visit.js";
import ModalVisitDentist from "../Modal/ModalVisitDentist.js";


export default class VisitDentist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    if (responseObject) {
      this.lastVisitDate = responseObject.lastVisitDate;
    } else {
      this.lastVisitDate = "";
    }
    this.data.doctor = "Стоматолог";
  }

  get lastVisitDate(){
    return this.data.lastVisitDate
  }

  set lastVisitDate(value) {
    if (!this._elLastVisitDate) {
      this._elLastVisitDate = document.createElement('p');
    }
    this._elLastVisitDate.innerText = `Дата останнього відвідування: ${value};`;
    this.data.lastVisitDate = value;
  }
  
  edit(){
    let modal = new ModalVisitDentist(this, true);
    modal.render()
  }

  render(){
    this.renderVisitBase();
    let visit = this;
    this._visitAdd.append(this._elLastVisitDate); 
    this._visitAdd.append(this._visitAddCheckbox);
    this._visitAddCheckbox.append(this._visitCheckboxDescription);
    this._visitAddCheckbox.append(this._visitCheckbox);
    this._visitAdd.append(this._buttonEdit);
  }
}  

