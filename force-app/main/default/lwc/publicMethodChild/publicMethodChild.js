import { LightningElement, track, api } from "lwc";

export default class PublicMethodChild extends LightningElement {
  @track value = ["red"];

  options = [
    { label: "Red Marker", value: "red" },
    { label: "Blue Marker", value: "blue" }
  ];

  @api
  selectCheckBox(val) {
    const selectedCb = this.options.find((cb) => {
      return val === cb.value;
    });

    if (selectedCb) {
      this.value = this.selectedCb.value;
      return "Successfuly checked";
    }
    return "No checkbox found";
  }
}
