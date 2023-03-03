class ModalVisitDentist   {
    constructor(){
        super();
        this._lastVisitDateFieldset


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
}
