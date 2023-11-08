import { LightningElement, track } from "lwc";

export default class LoopInterator extends LightningElement {
  @track cityList = [
    "São Paulo",
    "Feira de Santana",
    "Salvador",
    "Minas Gerais"
  ];
}
