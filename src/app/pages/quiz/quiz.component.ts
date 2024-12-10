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
  showExplanation: boolean = false;

  questions: Question[] = [
    {
      questionText: 'Quel est le nom de la sœur de Jinx ?',
      options: ['Vi', 'Caitlyn', 'Mel', 'Jayce'],
      correctAnswer: 'Vi',
      explanation: 'Vi est la sœur de Jinx, elles ont grandi ensemble à Zaun.'
    },
    {
      questionText: 'Où se déroule principalement l\'action de la série Arcane ?',
      options: ['Zaun', 'Ionia', 'Noxus', 'Demacia'],
      correctAnswer: 'Zaun',
      explanation: 'La majeure partie de l\'action de la série Arcane se déroule dans la ville souterraine de Zaun.'
    },
    {
      questionText: 'Quel est le talent principal de Viktor ?',
      options: ['Technologie', 'Magie', 'Combat', 'Politique'],
      correctAnswer: 'Technologie',
      explanation: 'Viktor est connu pour ses compétences en technologie et ses inventions.'
    },
  ];

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    // Stocker la réponse de l'utilisateur
    this.questions[this.currentQuestionIndex].userAnswer = this.selectedAnswer;
    this.showExplanation = true;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = '';
    this.showExplanation = false;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult = true;
    }
  }

  getExplanation(): string {
    return this.questions[this.currentQuestionIndex - 1]?.explanation || '';
  }
}

