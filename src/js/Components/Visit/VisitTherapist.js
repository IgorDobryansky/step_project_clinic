import Visit from "./Visit.js";
import ModalVisitTherapist  from "../Modal/ModalVisitTherapist.js";

export default class VisitTherapist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    if (responseObject) {
      this.age = responseObject.age;
    } else {
      this.age = "";
    }
    this.data.doctor = "Терапевт";
  }

  get age(){
    return this.data.age
  }

  set age(value) {
    if (!this._elAge) {
      this._elAge = document.createElement('p');
    }
    this._elAge.innerText = `Вік: ${value};`;
    this.data.age = value;
  }

  edit(){
    let modal = new ModalVisitTherapist(this, true);
    modal.render()
  }

  render(){
    this.renderVisitBase();
    let visito = this;
    this._visitAdd.append(this._elAge); 
    this._visitAdd.append(this._visitAddCheckbox);
    this._visitAddCheckbox.append(this._visitCheckboxDescription);
    this._visitAddCheckbox.append(this._visitCheckbox);
    this._visitAdd.append(this._visitAddButtons);
    this._visitAddButtons.append(this._buttonHide);
    this._visitAddButtons.append(this._buttonEdit);

    // this.visitCheckbox.addEventListener('click', function() {
    //   console.log(visito);
    //   visito.checkStatus();
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
