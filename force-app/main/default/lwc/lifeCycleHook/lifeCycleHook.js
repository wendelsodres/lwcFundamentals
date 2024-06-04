import { LightningElement, api } from "lwc";

export default class LifeCycleHook extends LightningElement {
  @api message = "Welcome";

  constructor() {
    super();

    console.log("Exxecuting constructor");
  }

  connectedCallback() {
    console.log("executing connected callback");
  }

  disconnectedCallback() {
    console.log("executing disconnected callback");
  }

  renderedCallback() {
    console.log("Executing rendered CallBack");
  }

  errorCallback(error) {
    console.log("executing error callback" + error);
  }
}
