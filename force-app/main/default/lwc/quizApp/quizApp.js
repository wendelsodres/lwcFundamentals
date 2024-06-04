import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {};

  myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop ?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question: "Which one of the following is not a directive ?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    },
    {
      id: "Question3",
      question: "Which one of the following is not a directive ?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  get allNotSelected() {
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }

  changeHandler(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {
    event.preventDefault();
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswer = correct.length;
    console.log("this.correcAnswers", this.correctAnswer);
  }

  resetHandler() {
    this.selected = {};
    this.correctAnswer = 0;
  }
}
