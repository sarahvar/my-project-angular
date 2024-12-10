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
    {
      questionText: 'Quel est le surnom de Silco dans la série ?',
      options: ['L\'Ombre', 'Le Passeur', 'L\'Oeil', 'Le Fléau'],
      correctAnswer: 'L\'Oeil',
      explanation: 'Silco est souvent appelé "L\'Oeil" en raison de son apparence distinctive.'
    },
    {
      questionText: 'Qui est l\'alliée principale de Vi dans sa quête pour sauver Powder (Jinx) ?',
      options: ['Caitlyn', 'Jayce', 'Viktor', 'Heimerdinger'],
      correctAnswer: 'Caitlyn',
      explanation: 'Caitlyn accompagne Vi et l\'aide dans sa quête pour retrouver et sauver Powder.'
    },
    {
      questionText: 'Quel est l\'objectif de Jayce dans la série Arcane ?',
      options: ['Devenir maire de Piltover', 'Innover avec la technologie Hextech', 'Contrôler Zaun', 'Protéger la ville de Noxus'],
      correctAnswer: 'Innover avec la technologie Hextech',
      explanation: 'Jayce travaille avec Viktor pour développer la technologie Hextech qui peut changer la vie de beaucoup.'
    },
    { questionText: 'Quel personnage d\'Arcane devient une figure de soutien pour Jinx après ses expériences traumatisantes ?',
      options: ['Heimerdinger', 'Isha', 'Mel', 'Sevika'],
      correctAnswer: 'Isha',
      explanation: 'Isha devient une figure de soutien pour Jinx, l\'aidant à surmonter ses traumatismes et ses difficultés.' },
    {
      questionText: 'Dans Arcane, quelle organisation Vi et Jinx ont-elles affrontée en tant qu\'enfants ?',
      options: ['Les Chem-barons', 'Les Sentinelles de la Lumière', 'Le Conseil de Piltover', 'Les Gardiens de la Nuit'],
      correctAnswer: 'Les Chem-barons',
      explanation: 'Les Chem-barons sont des criminels puissants de Zaun que Vi et Jinx ont affrontés.'
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

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.score = 0;
    this.showResult = false;
    this.showExplanation = false;

    // Réinitialiser les réponses des utilisateurs
    this.questions.forEach(question => question.userAnswer = undefined);
  }
}
