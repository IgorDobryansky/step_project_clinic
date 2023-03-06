import Modal from "../Modal/Modal.js";
import ModalVisit from "../Modal/ModalVisit.js";
import { postVisit, putVisit, deleteVisit } from "../../Services/VisitsService.js";
import closeImg from "../../../img/close-window.png"

export default class Visit {
  constructor(responseObject) {
    this._visitDiv = document.createElement("div");
    this._visitDiv.className = "visit-container";
    this._close = document.createElement("img");
    this._close.src=closeImg;
    this._showMoreButton = document.createElement("button");
    this._showMoreButton.innerText = "Показати більше";
    this._visit = document.createElement("div");
    this._visitTitle = document.createElement("div");
    this._responseObject = responseObject;
    this.data = {};

    if (responseObject) {
      this.fullName = responseObject.fullName;
      this.doctor = responseObject.doctor;
      this.title = responseObject.title;
      this.description = responseObject.description;
      this.urgency = responseObject.urgency;
      this.status = responseObject.status;
      this.data.id = responseObject.id;
      console.log(this.status)
    } else {
      this.fullName = "";
      this.doctor = "";
      this.title = "";
      this.description = "";
      this.urgency = "";
      this.status = "open";
      this._newRecord = true;
    }
    this._visitDiv.append(
      this._elFullName,
      this._elDoctor,
      this._showMoreButton
    );

    this._visitTitlePart1 = document.createElement("div");
    this._buttonShow = document.createElement("button");
    this._buttonHide = document.createElement("button");
    this._buttonEdit = document.createElement("button");
    this._visitAdd = document.createElement("div");
    this._visitAddTitle = document.createElement("div");
    this._visitAddCheckbox = document.createElement("div");
    this._visitAddButtons = document.createElement("div");
    this._visit.className="visitDiv";
    this._visitTitle.className="visitTitle";
    this._visitTitlePart1.className="visit_title1";
    this._visitAdd.className="visit_addinfo";
    this._buttonShow.className = "button_show";
    this._buttonEdit.className = "button_edit";
    this._visitAddTitle.className = "visit_addtitle";
    this._visitAddCheckbox.className = "visit_checkbox";
    this._buttonEdit.setAttribute('id', 'buttonEditId');
    this._visitAddTitle.innerText = "Додаткова інформація:";  
    this._buttonShow.innerHTML = "Показати більше";
    this._buttonHide.innerHTML = "Приховати";
    this._buttonEdit.innerHTML = "Редагувати";
    this._logoDone.className = "logo_done";
    this._logoUndone.className = "logo_undone";

    this._visit.append(this._visitTitle);  
    this._visitTitle.append(this._close); 
    this._visitTitle.append(this._visitTitlePart1);   
    this._visitTitlePart1.append(this._elFullName);  
    this._visitTitlePart1.append(this._elDoctor);  
    this._visitTitle.append(this._logoDone);  
    this._visitTitle.append(this._logoUndone);  
    this._visit.append(this._visitAdd);
    this._visit.append(this._buttonShow);    
    this._visitAdd.append(this._visitAddTitle);
    this._visitAdd.append(this._elTitle);
    this._visitAdd.append(this._elDescription);
    this._visitAdd.append(this._elUrgency);
    this._visitAdd.style.display = "none";
    this._close.style.cursor = "pointer";
  }

  render(){
    this.renderVisitBase();
  }

  renderVisitBase() {
    let visit = this;
    let visitId = this.visitId

    this._close.addEventListener("click", function(){
      visit.delete();
    })

    this._buttonShow.addEventListener("click", function(){
      visit.showInfo();
    })
  
    this._buttonHide.addEventListener("click", function(){
      visit.hideInfo();
    }) 

    this._visitCheckbox.addEventListener('click', function() {
      visit.checkStatus();
      visit.save();
    })
  
    this._buttonEdit.addEventListener("click", function(){
      visit.edit();
    })
    this._visitCard = document.getElementById("visits");
    this._visitCard.append(this._visit);
  }

  edit(){
    let modal = new ModalVisit(this);
    modal.render()
  }

  delete(){
    deleteVisit(this.data.id);
    this._visitCard.remove(this._visit);

  }

  async save(){
    //ApiService.save(this);
    if (this._newRecord) {
      await postVisit(this.data);
      this._newRecord = false;
      this.render();
    } else {
      await putVisit(this.data);
    }
  }

  showInfo(){
    if (this._visitAdd.style.display === "none") {
      this._visitAdd.style.display = "block";
      this._buttonShow.style.display = "none";
      }
  }  
    
  hideInfo(){
    if (this._visitAdd.style.display === "block") {
      this._visitAdd.style.display = "none";
      this._buttonShow.style.display = "block";
    } 
  } 

  checkStatus(){
      if(this._visitCheckbox.checked) {
        this.status = "close";
        // console.log(document.getElementById('buttonEditId'));
        // document.getElementById('buttonEditId').style.display = "none";
        console.log(this.status)
      } else {
        this.status = "open";
        console.log(this.status)
      }
  }
    
    get fullName(){
      return this.data.fullName
    }
  
    set fullName(value) {
      if (!this._elFullName) {
        this._elFullName = document.createElement('p');
      }
      this._elFullName.innerText = `Пацієнт: ${value}`;
      this.data.fullName = value;
    }
  
    get doctor(){
      return this.data.doctor;
    }
  
    set doctor(value) {
      if (!this._elDoctor) {
        this._elDoctor = document.createElement('p');
      }
      this._elDoctor.innerText = `Лікар: ${value}`;
      this.data.doctor = value;
    }
    
    get title(){
      return this.data.title;
    }
  
    set title(value) {
      if (!this._elTitle) {
        this._elTitle = document.createElement('p');
      }
      this._elTitle.innerText = `Мета: ${value};`;
      this.data.title = value;
    }

    get description(){
      return this.data.description
    }
  
    set description(value) {
      if (!this._elDescription) {
        this._elDescription = document.createElement('p');
      }
      this._elDescription.innerText = `Опис: ${value};`;
      this.data.description = value;
    }

    get urgency(){
      return this.data.urgency
    }
  
    set urgency(value) {
      if (!this._elUrgency) {
        this._elUrgency = document.createElement('p');
      }
      this._elUrgency.innerText = `Терміновість: ${value};`;
      this.data.urgency = value;
    }

    get status(){
      if (!this._visitCheckbox) {
        this.createVisitCheckbox();
      }
      return this.data.status;
    }

    set status(value){
      if (!this._visitCheckbox) {
        this.createVisitCheckbox();
      }
      this.data.status = value;
      if (value == "close") {
        this._logoDone.style.display = "block";
        this._logoUndone.style.display = "none";
        this._visit.style.backgroundColor = 'rgb(192, 208, 219, 0.85)';
        this._visitCheckbox.checked = true;
      } else {
        this._logoDone.style.display = "none";
        this._logoUndone.style.display = "block";
        this._visit.style.backgroundColor = 'rgb(240, 248, 255, 0.85)';
        this._visitCheckbox.checked = false
      }
    }

    createVisitCheckbox (){
      this._logoDone = document.createElement("div");
      this._logoUndone = document.createElement("div");
    
      this._visitCheckbox = document.createElement("input");
      this._visitCheckbox.setAttribute("type", "checkbox");
      this._visitCheckboxDescription = document.createElement("p");
      this._visitCheckboxDescription.innerText = "Візит виконан - поставте галочку:";  
    }
  } 