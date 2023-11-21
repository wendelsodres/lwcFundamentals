import { LightningElement, track } from "lwc";

export default class PublicMethodParent extends LightningElement {
  @track value;

  checkboxHandler() {
    const childComponent = this.template.querySelector("c-public-method-child");
    const returnedMessage = childComponent.selectCheckBox(this.value);
    console.log("Returned Message: ", returnedMessage);
  }

  onInputHandler(event) {
    this.value = event.target.value;
  }
}
