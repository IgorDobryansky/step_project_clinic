export default class Visit {
  constructor(responseObject) {
    this._visitDiv = document.createElement("div");
    this._fullName = document.createElement("p");
    this._fullName.innerText = responseObject.fullName;
    this._doctor = document.createElement("p");
    this._doctor.innerText = responseObject.doctor;
    this._showMoreButton = document.createElement("button");
    this._showMoreButton.innerText = "Показати більше";
    this._hidenFields = document.createElement("div");
    this._description = document.createElement("p");
    this._description.innerText = responseObject.description;
    this._urgency = document.createElement("p");
    this._urgency.innerText = responseObject.urgency;
    this._visitDiv.append(
      this._fullName,
      this._doctor,
      this._showMoreButton,
      this._hidenFields
    );
    this._hidenFields.append(this._description, this._urgency);
    this._visitParentlement = document.getElementById("visits");
  }

  render() {
    this._visitParentlement.append(this._visitDiv);
  }
}
