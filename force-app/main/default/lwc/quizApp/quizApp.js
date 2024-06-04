import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {};
  correctAnswers = 0;
  isSubmitted = false;

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
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {
    event.preventDefault();
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
  }

  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}
