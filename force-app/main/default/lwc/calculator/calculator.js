import { LightningElement, track } from "lwc";

export default class Calculator extends LightningElement {
  currentResult;
  @track previousResult = [];
  showPreviousResult = false;

  firstNumber;
  secondNumber;

  numberChnageHandler(event) {
    if (event.target.name === "firstNumber") {
      this.firstNumber = event.target.value;
    } else if (event.target.name === "secondNumber") {
      this.secondNumber = event.target.value;
    }
  }

  operatorHandler(event) {
    const operator = event.target.value;

    // eslint-disable-next-line radix
    const firstN = parseInt(this.firstNumber);
    // eslint-disable-next-line radix
    const secondN = parseInt(this.secondNumber);

    if (operator === "+") {
      this.currentResult = `Result of ${firstN} ${operator} ${secondN} is ${
        firstN + secondN
      }`;

      this.previousResult.push(this.currentResult);
    } else if (operator === "-") {
      this.currentResult = `Result of ${firstN} ${operator} ${secondN} is ${
        firstN - secondN
      }`;
      this.previousResult.push(this.currentResult);
    } else if (operator === "*") {
      this.currentResult = `Result of ${firstN} ${operator} ${secondN} is ${
        firstN * secondN
      }`;
      this.previousResult.push(this.currentResult);
    } else if (operator === "/") {
      this.currentResult = `Result of ${firstN} ${operator} ${secondN} is ${
        firstN / secondN
      }`;
      this.previousResult.push(this.currentResult);
    }
  }

  togglePreviousResult(event) {
    this.showPreviousResult = event.target.checked;
  }
}
