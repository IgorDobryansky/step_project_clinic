import ModalVisit from "./ModalVisit.js";

export default class ModalVisitCardiologist extends ModalVisit {
  constructor(visit) {
    super(visit);

    this.age = visit.age;

    this._bodyPressureFieldset = document.createElement("fieldset");
    this._bodyPressureFieldset.className = "fieldset presure-fieldset";
    this._bodyPressureLegend = document.createElement("legend");
    this._bodyPressureLegend.innerText = "Артеріальний тиск";
    this._bodyPressureUpper = document.createElement("input");
    this._bodyPressureUpper.name = "bpUpper";
    this._delimiter = document.createElement("span");
    this._delimiter.innerText = "/";
    this._bodyPressureLower = document.createElement("input");
    this._bodyPressureLower.name = "bpLower";
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
    this._bodyIndex.name = "bodyIndex";
    this._bodyIndexFieldset.append(this._bodyIndexLegend, this._bodyIndex);

    this._diseasesFieldset = document.createElement("fieldset");
    this._diseasesFieldset.className = "fieldset bodu-index-fieldset";
    this._diseasesLegend = document.createElement("legend");
    this._diseasesLegend.innerText = "Перенесені захворювання";
    this._diseases = document.createElement("textarea");
    this._diseases.name = "diseases";
    this._diseasesFieldset.append(this._diseasesLegend, this._diseases);

    this._visitFormFields.append(
      this._ageFieldset,
      this._bodyPressureFieldset,
      this._bodyIndexFieldset,
      this._diseasesFieldset
    );
  }

  get age() {
    return this._age.value;
  }

  set age(value) {
    if (!this._ageFieldset) {
      this.createAgeHtml();
    }

    this._age.value = value;
    return value;
  }

  updateAdditionalVisitFields() {
    this.visit.age = this.age;
  }

  createAgeHtml() {
    this._ageFieldset = document.createElement("fieldset");
    this._ageFieldset.className = "fieldset age-fieldset";
    this._ageLegend = document.createElement("legend");
    this._ageLegend.innerText = "Вік";
    this._age = document.createElement("input");
    this._age.name = "age";
    this._ageFieldset.append(this._ageLegend, this._age);
    this._ageFieldset;
  }
}
