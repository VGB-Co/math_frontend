export class Task {
    correct_answer: number;
    question: string;

    constructor(json: JSON) {
        this.correct_answer = json['correct_answer'];
        this.question = json['question'];
    }
}
