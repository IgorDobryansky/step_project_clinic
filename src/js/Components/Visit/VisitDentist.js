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
    let visit = this;
    this.visitAdd.append(this._elLastVisit); 
    this.visitAdd.append(this.visitAddCheckbox);
    this.visitAddCheckbox.append(this.visitCheckboxDescription);
    this.visitAddCheckbox.append(this.visitCheckbox);
    this.visitAdd.append(this.visitAddButtons);
    this.visitAddButtons.append(this.buttonHide);
    this.visitAddButtons.append(this.buttonEdit);

    
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

