import ModalVisit from "./ModalVisit.js";

export default class ModalVisitDentist extends ModalVisit {
  constructor(visit, modalEdit){
    super(visit, modalEdit);

    this.lastVisitDate = visit.lastVisitDate;

    this._visitFormFields.append(this._lastVisitDateFieldset)
  }

    get lastVisitDate(){
      return this._lastVisitDate.value;     
    }

    set lastVisitDate(value){
      if(!this._lastVisitDate){
        this.createLastVisitHtml();
      }

      this._lastVisitDate.value = value;
      return value;
    }

    createLastVisitHtml(){
      this._lastVisitDateFieldset = document.createElement("fieldset");
      this._lastVisitDateFieldset.className = "fieldset last-visit-fieldset";
      this._lastVisitDateLegend = document.createElement("legend");
      this._lastVisitDateLegend.innerText = "Дата останнього візиту";
      this._lastVisitDate = document.createElement("input");
      this._lastVisitDate.name = "lastVisitDate";
      this._lastVisitDate.type = "date";
      this._lastVisitDateFieldset.append(
        this._lastVisitDateLegend,
        this._lastVisitDate
      );
    }

    updateAdditionalVisitFields(){
      this.visit.lastVisitDate = this.lastVisitDate;
    }
}
