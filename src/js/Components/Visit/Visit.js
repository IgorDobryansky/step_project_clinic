// import ModalEditVisit from "../Modal/ModalEditVisit";

import Modal from "../Modal/Modal.js";
import ModalVisit from "../Modal/ModalVisit.js";

export default class Visit {
  constructor(responseObject) {
    this._visitDiv = document.createElement("div");
    this._visitDiv.className = "visit-container"
    this._fullName = document.createElement("p");
    this._fullName.innerText = responseObject.fullName;
    this._doctor = document.createElement("p");
    this._doctor.innerText = responseObject.doctor;
    this._showMoreButton = document.createElement("button");
    this._showMoreButton.innerText = "Показати більше";
    this._hidenFields = document.createElement("div");
    this._description = document.createElement("p");
    this._description.innerText = responseObject.description;
    this._urgency = document.createElement("p");
    this._urgency.innerText = responseObject.urgency;
    this._visitDiv.append(
      this._fullName,
      this._doctor,
      this._showMoreButton,
      this._hidenFields
    );
    this._hidenFields.append(this._description, this._urgency);
    this._visitParentlement = document.getElementById("visits");
    this.responseObject = responseObject;

    this.fullName = responseObject.fullName,
    this.doctor = responseObject.doctor,
    this.title = responseObject.title,
    this.description = responseObject.description,
    this.urgency = responseObject.urgency,

    this._visitCard = document.getElementById("visits");
    this.visit = document.createElement("div");
    this.visitTitle = document.createElement("div");
    this.visitTitlePart1 = document.createElement("div");
    this.buttonShow = document.createElement("button");
    this.buttonHide = document.createElement("button");
    this.buttonEdit = document.createElement("button");
    this.buttonStatus = document.createElement("button");
    this.logoDone = document.createElement("div");
    this.logoUndone = document.createElement("div");
    this.visitAdd = document.createElement("div");
    this.visitAddTitle = document.createElement("div");
    this.visitAddCheckbox = document.createElement("div");
    this.visitAddButtons = document.createElement("div");
    this.visitCheckbox = document.createElement("input");
    this.visitCheckbox.setAttribute("type", "checkbox");
    this.visitCheckboxDescription = document.createElement("p");
    //this.visitCheckbox.setAttribute("checkbox", "KAKASHKA");
    this.visit.className="visitDiv";
    // this.visit.className="visitHide";
    this.visitTitle.className="visitTitle";
    this.visitTitlePart1.className="visit_title1";
    this.visitAdd.className="visit_addinfo";
    this.buttonShow.className = "button_show";
    this.buttonEdit.className = "button_edit";
    this.logoDone.className = "logo_done";
    this.logoUndone.className = "logo_undone";
    this.visitAddTitle.className = "visit_addtitle";
    this.visitAddCheckbox.className = "visit_checkbox";
    this.buttonEdit.setAttribute('id', 'buttonEditId');
    this.visitCheckbox.setAttribute('id', 'checkboxId');
    this.visitAddTitle.innerText = "Додаткова інформація:";  
    this.visitCheckboxDescription.innerText = "Візит викон - поставте галочку:";  
    this.buttonShow.innerHTML = "Показати більше";
    this.buttonHide.innerHTML = "Приховати";
    this.buttonEdit.innerHTML = "Редагувати";
    this.buttonStatus.innerHTML = "В";
    this._visitCard.append(this.visit);
    this.visit.append(this.visitTitle);  
    this.visitTitle.append(this.visitTitlePart1);  
    this.visitTitlePart1.append(this._elFullName);  
    this.visitTitlePart1.append(this._elDoctor);  
    this.visitTitle.append(this.logoDone);  
    this.visitTitle.append(this.logoUndone);  
    this.visit.append(this.visitAdd);
    this.visit.append(this.buttonShow);    
    this.visitAdd.append(this.visitAddTitle);
    this.visitAdd.append(this._elTitle);
    this.visitAdd.append(this._elDescription);
    this.visitAdd.append(this._elUrgency);
    this.visitAdd.style.display = "none"
  }

  render(){
    this.renderVisitBase();
  }

  renderVisitBase() {
    let visit = this;

    this.buttonShow.addEventListener("click", function(){
      visit.showInfo();
    })
  
    this.buttonHide.addEventListener("click", function(){
      visit.hideInfo();
    }) 

    this.visitCheckbox.addEventListener('click', function() {
      console.log(visit);
      visit.checkStatus();
    })
  
    this.buttonEdit.addEventListener("click", function(){
      visit.edit();
    })
  }
   
  edit(){
    let modal = new ModalVisit(this);
    modal.render()
  }

  save(){
    //ApiService.save(this);
  }

  showInfo(){
    if (this.visitAdd.style.display === "none") {
      this.visitAdd.style.display = "block";
      this.buttonShow.style.display = "none";
      }
    }  
    
  hideInfo(){
    if (this.visitAdd.style.display === "block") {
      this.visitAdd.style.display = "none";
      this.buttonShow.style.display = "block";
      } 
    } 

    checkStatus(){
      let checkBox = document.getElementById("checkboxId");
      console.log(checkBox)
      let checkBoxDone = document.querySelector(".logo_done");
      console.log(checkBoxDone);
      let checkBoxUndone = document.querySelector(".logo_undone");
      console.log(checkBoxUndone);
      
        if(checkBox.checked) {
          console.log('kakashka')
          checkBoxDone.style.display = "block";
          checkBoxUndone.style.display = "none";
        } else {
          checkBoxUndone.style.display = "block";
          checkBoxDone.style.display = "none";
        }
    }
    
    get fullName(){
      return this._fullName
    }
  
    set fullName(value) {
      if (!this._elFullName) {
        this._elFullName = document.createElement('p');
      }
      this._elFullName.innerText = `Пацієнт: ${value}`;
      this._fullName = value;
    }
  
    get doctor(){
      return this._doctor
    }
  
    set doctor(value) {
      if (!this._elDoctor) {
        this._elDoctor = document.createElement('p');
      }
      this._elDoctor.innerText = `Лікар: ${value}`;
      this._doctor = value;
    }
    
    get title(){
      return this._title;
    }
  
    set title(value) {
      if (!this._elTitle) {
        this._elTitle = document.createElement('p');
      }
      this._elTitle.innerText = `Мета: ${value};`;
      this._title = value;
    }

    get description(){
      return this._description
    }
  
    set description(value) {
      if (!this._elDescription) {
        this._elDescription = document.createElement('p');
      }
      this._elDescription.innerText = `Опис: ${value};`;
      this._description = value;
    }

    get urgency(){
      return this._urgency
    }
  
    set urgency(value) {
      if (!this._elUrgency) {
        this._elUrgency = document.createElement('p');
      }
      this._elUrgency.innerText = `Терміновість: ${value};`;
      this._urgency = value;
    }
  
  }  

  