import Modal from "./Modal.js";
import VisitDentist from "../Visit/VisitDentist.js";
import VisitTherapist from "../Visit/VisitTherapist.js";
import VisitCardiologist from "../Visit/VisitCardiologist.js";
import ModalVisitDentist from "./ModalVisitDentist";
import ModalVisitTherapist from "../Modal/ModalVisitTherapist.js";
import ModalVisitCardiologist from "./ModalVisitCardiologist.js";

export default class ModalChooseDoctor extends Modal {
  constructor() {
    super();
    this._createVisitHeader = document.createElement("h2");
    this._createVisitHeader.innerText = "Створення візиту";

    this._doctorSelectFieldset = document.createElement("fieldset");
    this._doctorSelectFieldset.className = "fieldset doctor-fieldset";
    this._doctorSelectLegend = document.createElement("legend");
    this._doctorSelectLegend.innerText = "Оберіть лікаря";
    this._doctorSelect = document.createElement("select");
    this._doctorSelect.name = "doctor";
    this._doctorSelectFieldset.append(
      this._doctorSelectLegend,
      this._doctorSelect
    );
    this._doctorSelect.addEventListener("input", (event) => {
      this.close();
      const selectValue = this._doctorSelect.value;
      if (selectValue === "Терапевт") {
        let visit = new VisitTherapist();
        let modal = new ModalVisitTherapist(visit, false);
        modal.render();
      } else if (selectValue === "Стоматолог") {
        let visit = new VisitDentist();
        let modal = new ModalVisitDentist(visit, false);
        modal.render();
      } else {
        let visit = new VisitCardiologist();
        let modal = new ModalVisitCardiologist(visit, false);
        modal.render();
      }
    });
    this._visitForm = document.createElement("form");
    this._visitForm.className = "form visit-form";
    this._visitForm.name = "visitFields";
    this._optionDoctorEmpty = document.createElement("option");
    this._optionDoctorEmpty.innerText = "Оберіть лікаря";
    this._optionDoctorEmpty.disabled = true;
    this._optionDoctorEmpty.selected = true;
    this._optionDoctorTherapist = document.createElement("option");
    this._optionDoctorTherapist.innerText = "Терапевт";
    this._optionDoctorTherapist.value = "Терапевт";
    this._optionDoctorDentist = document.createElement("option");
    this._optionDoctorDentist.innerText = "Стоматолог";
    this._optionDoctorDentist.value = "Стоматолог";
    this._optionDoctorCardiologist = document.createElement("option");
    this._optionDoctorCardiologist.innerText = "Кардіолог";
    this._optionDoctorCardiologist.value = "Кардіолог";
    this._doctorSelect.append(
      this._optionDoctorEmpty,
      this._optionDoctorCardiologist,
      this._optionDoctorDentist,
      this._optionDoctorTherapist
    );

    this._visitForm.append(this._doctorSelectFieldset);

    this._modal.append(this._createVisitHeader, this._visitForm);
  }
}
