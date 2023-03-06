import ModalVisit from "./ModalVisit.js";

export default class ModelVisitTherapist extends ModalVisit{
    constructor(visit, modalEdit){
        super(visit, modalEdit);

        this.age = visit.age;

        this._visitFormFields.append(
            this._ageFieldset
        )
    }

    get age(){
        console.log(this._age.value)
        return this._age.value;    
    }
    
    set age(value){
        if (!this._ageFieldset) {
          this.createAgeHtml();
        }
    
        this._age.value = value;
        console.log(value);
        return value;        
    } 

    updateAdditionalVisitFields(){
        this.visit.age = this.age;
    }
    
    createAgeHtml(){
        this._ageFieldset = document.createElement("fieldset");
        this._ageFieldset.className = "fieldset age-fieldset";
        this._ageLegend = document.createElement("legend");
        this._ageLegend.innerText = "Вік";
        this._age = document.createElement("input");
        this._age.name = "age";
        this._ageFieldset.append(this._ageLegend, this._age);
    }  
    
    checkStatus(){
        let checkBox = document.getElementById("checkboxId");
        console.log(checkBox);
        
          if(checkBox.checked) {
            this.status == "close";
            alert("CLOSE")
            console.log(this.status)
          } 
        }
}
