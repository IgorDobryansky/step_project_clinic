import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor(responseObject) {
    super(responseObject);
    this._age = document.createElement("p");
    this._age.innerText = responseObject.age;
    this._hidenFields.append(this._age);
  }

  render(){
    this._visitParentlement.append(this._visitDiv);
  }
}
