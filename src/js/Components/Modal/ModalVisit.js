import { hideInfo } from "../../helpers/functions.js";
import Modal from "../Modal/Modal.js";
import { isHasChildNodes } from "../../helpers/functions.js";

export default class ModalVisit extends Modal {
  constructor(visit, modalEdit) {
    super();
    if (modalEdit) {
      this._title = "Редагувати візит";
      this._buttonText = "Зберегти";
    } else {
      this._title = "Створити візит";
      this._buttonText = "Створити";
    }
    this.createVisitHtml();
    this.visit = visit;
    this.doctor = visit.doctor;
    this.purpose = visit.title;
    this.description = visit.description;
    this.urgency = visit.urgency;
    this.fullName = visit.fullName;
  }

  createVisitHtml() {
    this._createVisitHeader = document.createElement("h2");
    this._createVisitHeader.innerText = this._title;

    this._visitFormFields = document.createElement("div");
    this._visitFormFields.className = "visit-form-fields";
    this._visitForm = document.createElement("form");
    this._visitForm.className = "form visit-form";
    this._visitForm.name = "visitFields";
    this._createVisitButton = document.createElement("button");
    this._createVisitButton.className = "button create-visit";
    this._createVisitButton.innerText = this._buttonText;

    let modal = this;

    this._createVisitButton.addEventListener("click", (event) => {
      let fieldsArray = [...this._visitFormFields.querySelectorAll("input")];
      fieldsArray.push(this._urgencySelect);
      event.preventDefault();
      const validation = this.checkFields();
      if (!validation) {
        this._createVisitButton.disabled = true;
        modal.updateVisitFields();
        modal.updateAdditionalVisitFields();
        modal.visit.save().then((response) => {
          modal._createVisitButton.disabled = false;
          hideInfo() 
          isHasChildNodes()
        });
        modal.close();
      } else {
        fieldsArray.map((input) => {
          input.addEventListener("input", () => {
            fieldsArray.map((input) => {
              input.classList.remove("error");
            });
          });
        });
      }
    });

    this._visitForm.append(this._visitFormFields, this._createVisitButton);

    this._modal.append(this._createVisitHeader, this._visitForm);
  }

  checkFields() {
    let isEmpty = false;
    let fieldsArray = [...this._visitFormFields.querySelectorAll("input")];
    fieldsArray.push(this._urgencySelect);
    fieldsArray.map((input) => {
      if (!input.value) {
        input.classList.add("error");
        isEmpty = true;
      }
    });
    return isEmpty;
  }

  get purpose() {
    return this._visitPurpose.value;
  }

  set purpose(value) {
    if (!this._visitPurpose) {
      this.createPurposeHtml();
    }
    this._visitPurpose.value = value;
    return value;
  }

  createPurposeHtml() {
    this._visitPurposeFieldset = document.createElement("fieldset");
    this._visitPurposeFieldset.className = "fieldset purpose-fieldset";
    this._visitPurposeLegend = document.createElement("legend");
    this._visitPurposeLegend.innerText = "Мета візиту";
    this._visitPurpose = document.createElement("input");
    this._visitPurpose.name = "title";
    this._visitPurpose.required = true;
    this._visitPurposeFieldset.append(
      this._visitPurposeLegend,
      this._visitPurpose
    );
    this._visitFormFields.append(this._visitPurposeFieldset);
  }

  get description() {
    return this._description.value;
  }

  set description(value) {
    if (!this._description) {
      this.createDescriptionHtml();
    }
    this._description.value = value;
    return value;
  }

  createDescriptionHtml() {
    this._visitDescriptionFieldset = document.createElement("fieldset");
    this._visitDescriptionFieldset.className = "fieldset description-fieldset";
    this._visitDescriptionLegend = document.createElement("legend");
    this._visitDescriptionLegend.innerText = "Опис візиту";
    this._description = document.createElement("input");
    this._description.name = "description";
    this._description.required = true;
    this._visitDescriptionFieldset.append(
      this._visitDescriptionLegend,
      this._description
    );
    this._visitFormFields.append(this._visitDescriptionFieldset);
  }

  get urgency() {
    return this._urgencySelect.value;
  }

  set urgency(value) {
    if (!this._urgencySelect) {
      this.createUrgencyHtml();
    }
    this._urgencySelect.value = value;
    return value;
  }

  createUrgencyHtml() {
    this._urgencySelectFieldset = document.createElement("fieldset");
    this._urgencySelectFieldset.className = "fieldset urgency-fieldset";
    this._urgencySelectLegend = document.createElement("legend");
    this._urgencySelectLegend.innerText = "Терміновість";
    this._urgencySelect = document.createElement("select");
    this._urgencySelect.name = "urgency";
    this._urgencySelectEmpty = document.createElement("option");
    this._urgencySelectEmpty.innerText = "...";
    this._urgencySelectEmpty.selected = true;
    this._urgencySelectEmpty.disabled = true;
    this._optionUrgencyHigh = document.createElement("option");
    this._optionUrgencyHigh.innerText = "Висока";
    this._optionUrgencyHigh.value = "Висока";
    this._optionUrgencyNormal = document.createElement("option");
    this._optionUrgencyNormal.innerText = "Нормальна";
    this._optionUrgencyNormal.value = "Нормальна";
    this._optionUrgencyLow = document.createElement("option");
    this._optionUrgencyLow.innerText = "Низька";
    this._optionUrgencyLow.value = "Низька";
    this._urgencySelect.append(
      this._urgencySelectEmpty,
      this._optionUrgencyHigh,
      this._optionUrgencyNormal,
      this._optionUrgencyLow
    );
    this._urgencySelectFieldset.append(
      this._urgencySelectLegend,
      this._urgencySelect
    );
    this._visitFormFields.append(this._urgencySelectFieldset);
  }

  get fullName() {
    return this._fullNameInput.value;
  }

  set fullName(value) {
    if (!this._fullNameInput) {
      this.createFullNameHtml();
    }
    this._fullNameInput.value = value;
    return value;
  }

  createFullNameHtml() {
    this._fullNameInputFieldset = document.createElement("fieldset");
    this._fullNameInputFieldset.className = "fieldset name-fieldset";
    this._fullNameInputLegend = document.createElement("legend");
    this._fullNameInputLegend.innerText = "Прізвище Ім'я По-батькові";
    this._fullNameInput = document.createElement("input");
    this._fullNameInput.name = "fullName";
    this._fullNameInputFieldset.append(
      this._fullNameInputLegend,
      this._fullNameInput
    );
    this._visitFormFields.append(this._fullNameInputFieldset);
  }

  updateVisitFields() {
    this.visit.doctor = this.doctor;
    this.visit.description = this.description;
    this.visit.fullName = this.fullName;
    this.visit.title = this.purpose;
    this.visit.urgency = this.urgency;
  }

  updateAdditionalVisitFields() {}
}
