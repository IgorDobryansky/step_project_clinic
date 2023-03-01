import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this.lastVisitDate = document.createElement("p");
    this.lastVisitDate.innerText = responseObject.lastVisitDate;
    this._hidenFields.append(this.lastVisitDate);
  }

  render(){
    this._visitParentlement.append(this._visitDiv);
  }
}
