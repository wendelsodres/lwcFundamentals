import { LightningElement, track } from "lwc";

export default class LwcFundamentals extends LightningElement {
  @track msgBinding = "Initial Message";
  @track showDiv = false;

  msgChangeHandler(event) {
    this.msgBinding = event.target.value;
  }

  showDivHandler(event) {
    this.showDiv = event.target.checked;
  }
}
