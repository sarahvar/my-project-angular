import { Component } from '@angular/core';
import { Question } from './quiz.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  score: number = 0;
  showResult: boolean = false;

  questions: Question[] = [
    {
      questionText: 'Quel est le nom de la sœur de Jinx ?',
      options: ['Vi', 'Caitlyn', 'Mel', 'Jayce'],
      correctAnswer: 'Vi'
    },
    {
      questionText: 'Où se déroule principalement l\'action de la série Arcane ?',
      options: ['Zaun', 'Ionia', 'Noxus', 'Demacia'],
      correctAnswer: 'Zaun'
    },
    {
      questionText: 'Quel est le talent principal de Viktor ?',
      options: ['Technologie', 'Magie', 'Combat', 'Politique'],
      correctAnswer: 'Technologie'
    },
  ];

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedAnswer = '';

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult = true;
    }
  }
}

