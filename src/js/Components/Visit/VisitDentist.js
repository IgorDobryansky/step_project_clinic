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
    this._visitAdd.append(this._visitAddButtons);
    this._visitAddButtons.append(this._buttonHide);
    this._visitAddButtons.append(this._buttonEdit);

    
    // this.visitCheckbox.addEventListener('click', function() {
    //   console.log(visit);
    //   visit.checkStatus();
    // })
 
  }
  
  // checkStatus(){
  //   let checkBox = document.getElementById("checkboxId");
  //   console.log(checkBox)
  //   let checkBoxDone = document.querySelector(".logo_done");
  //   console.log(checkBoxDone);
  //   let checkBoxUndone = document.querySelector(".logo_undone");
  //   console.log(checkBoxUndone);
    
  //     if(checkBox.checked) {
  //       console.log('kakashka')
  //       checkBoxDone.style.display = "block";
  //       checkBoxUndone.style.display = "none";
  //     } else {
  //       checkBoxUndone.style.display = "block";
  //       checkBoxDone.style.display = "none";
  //     }
  // }
}  

