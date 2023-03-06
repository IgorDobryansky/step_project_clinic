import ModalVisit from "./ModalVisit.js";

export default class ModalVisitCardiologist extends ModalVisit   {
  constructor(visit, modalEdit){
    super(visit, modalEdit);

    this.age = visit.age;
    this.bpUpper = visit.bpUpper;
    this.bpLower = visit.bpLower;
    this.bodyIndex = visit.bodyIndex;
    this.diseases = visit.diseases;
  }

  get age(){
    return this._age.value;
  }

  set age(value){
    if (!this._ageFieldset) {
      this.createAgeHtml();
    }

    this._age.value = value;
    return value;
  }  

  createAgeHtml(){
    this._ageFieldset = document.createElement("fieldset");
    this._ageFieldset.className = "fieldset age-fieldset";
    this._ageLegend = document.createElement("legend");
    this._ageLegend.innerText = "Вік";
    this._age = document.createElement("input");
    this._age.name = "age";
    this._ageFieldset.append(this._ageLegend, this._age);
    this._visitFormFields.append(this._ageFieldset)
    
  }

  get bpUpper(){
    return this._bodyPressureUpper.value;
  }

  set bpUpper(value){
    if(!this._bodyPressureFieldset){
      this.createbpHtml();
    }
    this._bodyPressureUpper.value = value;
    return value;
  }

  get bpLower(){
    return this._bodyPressureLower.value;
  }

  set bpLower(value){
    if(!this._bodyPressureFieldset){
      this.createbpHtml();
    }
    this._bodyPressureLower.value = value;
    return value;
  }

  createbpHtml(){
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
    this._bodyPressureFieldset.append(this._bodyPressureLower);

    this._bodyPressureFieldset.append(
      this._bodyPressureLegend,
      this._bodyPressureUpper,
      this._delimiter,
      this._bodyPressureLower
    );
    this._visitFormFields.append(this._bodyPressureFieldset)

  }

  get bodyIndex(){
    return this._bodyIndex.value;
  }

  set bodyIndex(value){
    if(!this._bodyIndex){
      this.createBodyIndexHtml();
    }
    this._bodyIndex.value = value;
    return value;
  }
  createBodyIndexHtml(){
    this._bodyIndexFieldset = document.createElement("fieldset");
    this._bodyIndexFieldset.className = "fieldset bodu-index-fieldset";
    this._bodyIndexLegend = document.createElement("legend");
    this._bodyIndexLegend.innerText = "Індекс маси тіла";

    this._bodyIndex = document.createElement("input");
    this._bodyIndex.name = "bodyIndex";
    this._bodyIndexFieldset.append(this._bodyIndexLegend, this._bodyIndex);
    this._visitFormFields.append(this._bodyIndexFieldset)

  } 

  get diseases(){
    return this._diseases.value;
  }

  set diseases(value){
    if(!this._diseases){
      this.createDiseasesIndexHtml();
    }
    this._diseases.value = value;
    return value;
  }

  createDiseasesIndexHtml(){
    this._diseasesFieldset = document.createElement("fieldset");
    this._diseasesFieldset.className = "fieldset bodu-index-fieldset";
    this._diseasesLegend = document.createElement("legend");
    this._diseasesLegend.innerText = "Перенесені захворювання";
    this._diseases = document.createElement("textarea");
    this._diseases.name = "diseases";
    this._diseasesFieldset.append(this._diseasesLegend, this._diseases);
    this._visitFormFields.append(this._diseasesFieldset)
  }

  updateAdditionalVisitFields(){
    this.visit.age = this.age;
    this.visit.bpUpper = this.bpUpper;
    this.visit.bpLower = this.bpLower;
    this.visit.bodyIndex = this.bodyIndex;
    this.visit.diseases = this.diseases;
  }    
}