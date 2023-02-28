import Modal from "./Modal.js";

export default class ModalCreateVisit extends Modal {
  constructor() {
    super();
    this._createVisitHeader = document.createElement("h2");
    this._createVisitHeader.innerText = "Створення візиту";

    this._doctorSelectFieldset = document.createElement("fieldset");
    this._doctorSelectFieldset.className = "fieldset doctor-fieldset";
    this._doctorSelectLegend = document.createElement("legend");
    this._doctorSelectLegend.innerText = "Оберіть лікаря";
    this._doctorSelect = document.createElement("select");
    this._doctorSelectFieldset.append(
      this._doctorSelectLegend,
      this._doctorSelect
    );
    this._doctorSelect.addEventListener("input", (event) => {
      const selectValue = this._doctorSelect.value;
      if (selectValue === "Терапевт") {
        console.log(selectValue);
        this._visitForm.innerHTML = "";
        this._visitForm.append(
          this._visitPurposeFieldset,
          this._visitDescriptionFieldset,
          this._urgencySelectFieldset,
          this._fullNameInputFieldset,
          this._ageFieldset
        );
      } else if (selectValue === "Стоматолог") {
        this._visitForm.innerHTML = "";
        this._visitForm.append(
          this._visitPurposeFieldset,
          this._visitDescriptionFieldset,
          this._urgencySelectFieldset,
          this._fullNameInputFieldset,
          this._lastVisitDateFieldset
        );
      } else {
        this._visitForm.innerHTML = "";
        this._visitForm.append(
          this._visitPurposeFieldset,
          this._visitDescriptionFieldset,
          this._urgencySelectFieldset,
          this._fullNameInputFieldset,
          this._bodyPressureFieldset,
          this._bodyIndexFieldset,
          this._diseasesFieldset,
          this._ageFieldset
        );
      }
      !this._modal.contains(this._createVisitButton)
        ? this._modal.append(this._createVisitButton)
        : "";
    });

    this._visitForm = document.createElement("form");
    this._visitForm.className = "form visit-form";

    this._optionDoctorEmpty = document.createElement("option");
    this._optionDoctorEmpty.innerText = "...";
    this._optionDoctorEmpty.disabled = true;
    this._optionDoctorEmpty.selected = true;
    this._optionDoctorTherapist = document.createElement("option");
    this._optionDoctorTherapist.innerText = "Терапевт";
    this._optionDoctorDentist = document.createElement("option");
    this._optionDoctorDentist.innerText = "Стоматолог";
    this._optionDoctorCardiologist = document.createElement("option");
    this._optionDoctorCardiologist.innerText = "Кардіолог";
    this._doctorSelect.append(
      this._optionDoctorEmpty,
      this._optionDoctorCardiologist,
      this._optionDoctorDentist,
      this._optionDoctorTherapist
    );

    this._visitPurposeFieldset = document.createElement("fieldset");
    this._visitPurposeFieldset.className = "fieldset purpose-fieldset";
    this._visitPurposeLegend = document.createElement("legend");
    this._visitPurposeLegend.innerText = "Мета візиту";
    this._visitPurpose = document.createElement("input");
    this._visitPurposeFieldset.append(
      this._visitPurposeLegend,
      this._visitPurpose
    );

    this._visitDescriptionFieldset = document.createElement("fieldset");
    this._visitDescriptionFieldset.className = "fieldset description-fieldset";
    this._visitDescriptionLegend = document.createElement("legend");
    this._visitDescriptionLegend.innerText = "Опис візиту";
    this._description = document.createElement("textarea");
    this._visitDescriptionFieldset.append(
      this._visitDescriptionLegend,
      this._description
    );

    this._urgencySelectFieldset = document.createElement("fieldset");
    this._urgencySelectFieldset.className = "fieldset urgency-fieldset";
    this._urgencySelectLegend = document.createElement("legend");
    this._urgencySelectLegend.innerText = "Терміновість";
    this._urgencySelect = document.createElement("select");
    this._urgencySelectEmpty = document.createElement("option");
    this._urgencySelectEmpty.innerText = "...";
    this._urgencySelectEmpty.disabled = true;
    this._urgencySelectEmpty.selected = true;
    this._optionUrgencyHigh = document.createElement("option");
    this._optionUrgencyHigh.innerText = "Висока";
    this._optionUrgencyNormal = document.createElement("option");
    this._optionUrgencyNormal.innerText = "Нормальна";
    this._optionUrgencyLow = document.createElement("option");
    this._optionUrgencyLow.innerText = "Низька";
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

    this._ageFieldset = document.createElement("fieldset");
    this._ageFieldset.className = "fieldset age-fieldset";
    this._ageLegend = document.createElement("legend");
    this._ageLegend.innerText = "Вік";
    this._age = document.createElement("input");
    this._ageFieldset.append(this._ageLegend, this._age);

    this._lastVisitDateFieldset = document.createElement("fieldset");
    this._lastVisitDateFieldset.className = "fieldset last-visit-fieldset";
    this._lastVisitDateLegend = document.createElement("legend");
    this._lastVisitDateLegend.innerText = "Дата останнього візиту";
    this._lastVisitDate = document.createElement("input");
    this._lastVisitDate.type = "date";
    this._lastVisitDate.addEventListener("input", (event) => {
      console.log(this._lastVisitDate.value);
    });
    this._lastVisitDateFieldset.append(
      this._lastVisitDateLegend,
      this._lastVisitDate
    );

    this._fullNameInputFieldset = document.createElement("fieldset");
    this._fullNameInputFieldset.className = "fieldset name-fieldset";
    this._fullNameInputLegend = document.createElement("legend");
    this._fullNameInputLegend.innerText = "Прізвище Ім'я По-батькові";
    this._fullNameInput = document.createElement("input");
    this._fullNameInputFieldset.append(
      this._fullNameInputLegend,
      this._fullNameInput
    );

    this._bodyPressureFieldset = document.createElement("fieldset");
    this._bodyPressureFieldset.className = "fieldset presure-fieldset";
    this._bodyPressureLegend = document.createElement("legend");
    this._bodyPressureLegend.innerText = "Артеріальний тиск";
    this._bodyPressureUpper = document.createElement("input");
    this._delimiter = document.createElement("span");
    this._delimiter.innerText = "/";
    this._bodyPressureLower = document.createElement("input");
    this._bodyPressureFieldset.append(
      this._bodyPressureLegend,
      this._bodyPressureUpper,
      this._delimiter,
      this._bodyPressureLower
    );

    this._bodyIndexFieldset = document.createElement("fieldset");
    this._bodyIndexFieldset.className = "fieldset bodu-index-fieldset";
    this._bodyIndexLegend = document.createElement("legend");
    this._bodyIndexLegend.innerText = "Індекс маси тіла";
    this._bodyIndex = document.createElement("input");
    this._bodyIndexFieldset.append(this._bodyIndexLegend, this._bodyIndex);

    this._diseasesFieldset = document.createElement("fieldset");
    this._diseasesFieldset.className = "fieldset bodu-index-fieldset";
    this._diseasesLegend = document.createElement("legend");
    this._diseasesLegend.innerText = "Перенесені захворювання";
    this._diseases = document.createElement("textarea");
    this._diseasesFieldset.append(this._diseasesLegend, this._diseases);

    this._createVisitButton = document.createElement("button");
    this._createVisitButton.className = "create-visit";
    this._createVisitButton.innerText = "Створити";
    this._createVisitButton.addEventListener("click", (event) => {
      event.preventDefault();
    });

    this._modal.append(
      this._createVisitHeader,
      this._doctorSelectFieldset,
      this._visitForm,
      Boolean(this._visitForm.innerHTML) ? this._createVisitButton : ""
    );
  }
}
