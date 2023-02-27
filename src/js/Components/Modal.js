export default class Modal {
  constructor() {
    this._modalWrapper = document.createElement("div");
    this._modalWrapper.addEventListener("click", (event) => {
      let target = event.target;
      let itsModal = target === this._modal || this._modal.contains(target);
      let itsClose = target === this._closeButton;
      if (!itsModal || itsClose) this._modalWrapper.remove();
    });
    this._modalWrapper.className = "modal-window-wrapper";
    this._modal = document.createElement("div");
    this._modal.className = "modal-window";
    this._closeButton = document.createElement("span");
    this._closeButton.innerHTML = "&#10005;";
    this._closeButton.className = "modal-close-button"
    this._modal.append(this._closeButton);
    this._modalWrapper.append(this._modal);
  }
}
