export default class Modal {
  constructor() {
    this._modalWrapper = document.createElement("div");
    let modal = this;
    this._modalWrapper.addEventListener("click", (event) => {
      let target = event.target;
      let itsModal = target === this._modal || this._modal.contains(target);
      let itsClose = target === this._closeButton;

      if (!itsModal || itsClose) modal.close();;

    });
    this._modalWrapper.className = "modal-window-wrapper";
    this._modal = document.createElement("form");
    this._modal.className = "modal-window";
    this._closeButton = document.createElement("span");
    this._closeButton.className = "modal-close-button";
    this._modal.append(this._closeButton);
    this._modalWrapper.append(this._modal);
  }

  render() {
    if (document.body.contains(document.querySelector(".modal-window-wrapper")))
      return;
    document.body.prepend(this._modalWrapper);
  }

  close() {
    this._modalWrapper.remove()
  }
}
