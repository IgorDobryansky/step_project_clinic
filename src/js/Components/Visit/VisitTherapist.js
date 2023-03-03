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
    let visito = this;
    this.visitAdd.append(this._elAge); 
    this.visitAdd.append(this.visitAddCheckbox);
    this.visitAddCheckbox.append(this.visitCheckboxDescription);
    this.visitAddCheckbox.append(this.visitCheckbox);
    this.visitAdd.append(this.visitAddButtons);
    this.visitAddButtons.append(this.buttonHide);
    this.visitAddButtons.append(this.buttonEdit);

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
