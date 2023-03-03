class ModelVisitTherapist {
    constructor(){
        super();
        this._visitFormFields.append(
            this._ageFieldset
        )



        this._ageFieldset = document.createElement("fieldset");
        this._ageFieldset.className = "fieldset age-fieldset";
        this._ageLegend = document.createElement("legend");
        this._ageLegend.innerText = "Вік";
        this._age = document.createElement("input");
        this._age.name = "age";
        this._ageFieldset.append(this._ageLegend, this._age);
    }
}