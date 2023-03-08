import ModalVisit from "../Modal/ModalVisit.js";
import { grid, removeItem } from "../../draganddrop/draganddrop.js";
// import { hideInfo } from "../../helpers/visitRequests.js";

import {
  postVisit,
  putVisit,
  deleteVisit,
} from "../../Services/VisitsService.js";
import closeImg from "../../../img/close-window.png";

export default class Visit {
  constructor(responseObject) {
    this._visitWrapper = document.createElement("div");
    this._visitWrapper.className = "visit-item";
    this._visit = document.createElement("div");
    this._visit.className = "visit-content";
    this._close = document.createElement("img");
    this._close.src = closeImg;
    this._close.className = "delete-icon";
    this._showMoreButton = document.createElement("button");
    this._showMoreButton.innerText = "Показати більше";
    this._responseObject = responseObject;
    this.data = {};

    if (responseObject) {
      this.fullName = responseObject.fullName;
      this.doctor = responseObject.doctor;
      this.title = responseObject.title;
      this.description = responseObject.description;
      this.urgency = responseObject.urgency;
      this.status = responseObject.status;
      this.id = responseObject.id;
    } else {
      this.fullName = "";
      this.doctor = "";
      this.title = "";
      this.description = "";
      this.urgency = "";
      this.status = "В процесі";
      // this.id = responseObject.id
      this._newRecord = true;
    }
    this._visitWrapper.setAttribute("data-status", this.status);
    this._visitTitle = document.createElement("div");
    this._buttonShow = document.createElement("button");
    this._buttonEdit = document.createElement("button");
    this._visitAdd = document.createElement("div");
    this._visitAddTitle = document.createElement("div");
    this._visitAddCheckbox = document.createElement("div");

    this._visitTitle.className = "visit_title";
    this._visitAdd.className = "visit_addinfo";
    this._buttonShow.className = "button button_show";
    this._buttonEdit.className = "button button_edit";
    this._visitAddTitle.className = "visit_addtitle";
    this._visitAddCheckbox.className = "visit_checkbox";
    this._buttonEdit.setAttribute("id", "buttonEditId");
    this._visitAddTitle.innerText = "Додаткова інформація:";
    this._buttonShow.innerHTML = "Показати більше";
    this._buttonEdit.innerHTML = "Редагувати";

    this._visitTitle.append(this._elFullName, this._elDoctor);
    this._visitAdd.append(
      this._visitAddTitle,
      this._elTitle,
      this._elDescription,
      this._elUrgency
    );
    this._visit.append(
      this._close,
      this._visitTitle,
      this._buttonShow,
      this._visitAdd
    );
    this._visitWrapper.append(this._visit);
  }

  render() {
    this.renderVisitBase();
  }

  renderVisitBase() {
    let visit = this;
    let visitId = this.visitId;

    this._visitCard = document.getElementById("visits");
    grid.add(this._visitWrapper);

    this._visitCard.append(this._visitWrapper);

    this._close.addEventListener("click", function (e) {
      visit.delete(e);
    });

    this._buttonShow.addEventListener("click", function () {
      
      visit.showInfo();
    });

    this._visitCheckbox.addEventListener("click", function () {
      visit.checkStatus();
      visit.save();
    });

    this._buttonEdit.addEventListener("click", function () {
      visit.edit();
    });
  }

  hideInfo() {
    let array1 = document.querySelectorAll(".visit-item");

    array1.forEach((item) => {
      item.classList.remove("above-others");
    });
  }

  edit() {
    let modal = new ModalVisit(this);
    modal.render();
  }

  delete(e) {
    this._close.classList.add("rotate");
    deleteVisit(this.id).then((response) => {
      if (response.ok) {
        removeItem(grid.getItem(e.target.closest(".visit-item")));
        this._visitWrapper.remove();
      }
    });
  }

  async save() {
    if (this._newRecord) {
      await postVisit(this.data).then((response) => {
        this.data = response;
      });
      this._newRecord = false;
      this.render();
    } else {
      await putVisit(this.data).then((response) => {});
    }
  }

  showInfo() {
    //   let array2 = document.querySelectorAll(".visit_addinfo");
    // let array1 = document.querySelectorAll(".visit-item");

    //   array1.forEach((item) => {
    //     item.classList.remove("above-others");
    //   });
    //   array2.forEach((item) => {
    //     item.classList.remove("show-info");
    //   });
    this._visitAdd.classList.toggle("show-info");
    this._visitWrapper.classList.toggle("above-others");
    if (this._visitAdd.classList.contains("show-info")) {
      this._buttonShow.innerText = "Приховати";
    } else {
      this._buttonShow.innerText = "Показати більше";
    }
  }

  checkStatus() {
    if (this._visitCheckbox.checked) {
      this.data.status = "Виконано";
      this._visitCheckboxDescription.innerText = "Візит закритий";
      this._visit.style.backgroundColor = "rgb(192, 208, 219)";
      this.data.status = "Виконано";
      this.save();
      this._buttonEdit.disabled = true;
    } else {
      this.status = "В процесі";
      this._visitCheckboxDescription.innerText = "Візит відкритий";
      this._visit.style.backgroundColor = "rgb(240, 248, 255)";
      this.data.status = "В процесі";
      this._buttonEdit.disabled = false;
      this.save();
    }
  }

  get id() {
    return this.data.id;
  }

  set id(value) {
    this.data.id = value;
  }

  get fullName() {
    return this.data.fullName;
  }

  set fullName(value) {
    if (!this._elFullName) {
      this._elFullName = document.createElement("p");
    }
    this._elFullName.innerText = `Пацієнт: ${value}`;
    this.data.fullName = value;
  }

  get doctor() {
    return this.data.doctor;
  }

  set doctor(value) {
    if (!this._elDoctor) {
      this._elDoctor = document.createElement("p");
    }
    this._elDoctor.innerText = `Лікар: ${value}`;
    this.data.doctor = value;
  }

  get title() {
    return this.data.title;
  }

  set title(value) {
    if (!this._elTitle) {
      this._elTitle = document.createElement("p");
      this._elTitle.className = "visit-title";
    }
    this._elTitle.innerText = `Мета: ${value};`;
    this.data.title = value;
  }

  get description() {
    return this.data.description;
  }

  set description(value) {
    if (!this._elDescription) {
      this._elDescription = document.createElement("p");
    }
    this._elDescription.innerText = `Опис: ${value};`;
    this.data.description = value;
  }

  get urgency() {
    return this.data.urgency;
  }

  set urgency(value) {
    if (!this._elUrgency) {
      this._elUrgency = document.createElement("p");
    }
    this._elUrgency.innerText = `Терміновість: ${value};`;
    this._visitWrapper.setAttribute("data-urgency", value);
    this.data.urgency = value;
  }

  get status() {
    if (!this._visitCheckbox) {
      this.createVisitCheckbox();
    }
    return this.data.status;
  }

  set status(value) {
    if (!this._visitCheckbox) {
      this.createVisitCheckbox();
    }
    this.data.status = value;
  }

  createVisitCheckbox() {
    this._visitCheckbox = document.createElement("input");
    this._visitCheckbox.setAttribute("type", "checkbox");
    this._visitCheckboxDescription = document.createElement("p");
    this._visitCheckboxDescription.innerText = "Візит відкритий";
  }
}
