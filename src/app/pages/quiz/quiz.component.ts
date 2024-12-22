import { Component, OnInit } from '@angular/core';
import { Question } from './quiz.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // Importer isPlatformBrowser
import { Inject, PLATFORM_ID } from '@angular/core'; // Importer PLATFORM_ID

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  score: number = 0;
  showResult: boolean = false;
  showExplanation: boolean = false;

  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire  📖'},
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight 🥊' },
  ];
  allQuestions: Question[] = [
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
    {
      questionText: 'Quel personnage d\'Arcane devient une figure de soutien pour Jinx après ses expériences traumatisantes ?',
      options: ['Heimerdinger', 'Isha', 'Mel', 'Sevika'],
      correctAnswer: 'Isha',
      explanation: 'Isha devient une figure de soutien pour Jinx, l\'aidant à surmonter ses traumatismes et ses difficultés.'
    },
    {
      questionText: 'Dans Arcane, quelle organisation Vi et Jinx ont-elles affrontée en tant qu\'enfants ?',
      options: ['Les Chem-barons', 'Les Sentinelles de la Lumière', 'Le Conseil de Piltover', 'Les Gardiens de la Nuit'],
      correctAnswer: 'Les Chem-barons',
      explanation: 'Les Chem-barons sont des criminels puissants de Zaun que Vi et Jinx ont affrontés.'
    },
    {
      questionText: 'Quel est le rôle de Mel Medarda dans le Conseil de Piltover ?',
      options: ['Chef du Conseil', 'Membre du Conseil', 'Sécurité du Conseil', 'Assistante du Conseil'],
      correctAnswer: 'Membre du Conseil',
      explanation: 'Mel Medarda est membre du Conseil de Piltover et joue un rôle important dans la politique de la ville.'
    },
    {
      questionText: 'Quel est le principal objectif de Silco ?',
      options: ['Contrôler Piltover', 'Unir Zaun', 'Développer la technologie Hextech', 'Devenir un conseiller'],
      correctAnswer: 'Unir Zaun',
      explanation: 'Silco souhaite unir Zaun pour créer une ville plus puissante et indépendante.'
    },
    {
      questionText: 'Quel est le surnom de Jinx quand elle était enfant ?',
      options: ['Powder', 'Spark', 'Firefly', 'Blast'],
      correctAnswer: 'Powder',
      explanation: 'Quand elle était enfant, Jinx était connue sous le nom de Powder.'
    },
    {
      questionText: 'Qui aide Jinx à se construire ses armes et gadgets ?',
      options: ['Viktor', 'Jayce', 'Silco', 'Elle-même'],
      correctAnswer: 'Elle-même',
      explanation: 'Jinx, avec son génie et son ingéniosité, crée elle-même ses armes et gadgets.'
    },
    {
      questionText: 'Qui est le mentor de Jayce dans ses recherches ?',
      options: ['Heimerdinger', 'Silco', 'Viktor', 'Vi'],
      correctAnswer: 'Heimerdinger',
      explanation: 'Heimerdinger guide Jayce dans ses recherches et le développement de la technologie Hextech.'
    },
    {
      questionText: 'Quelle est la motivation principale de Jinx dans la série Arcane ?',
      options: ['Reprendre Zaun', 'Venger ses parents', 'Retrouver sa sœur Vi', 'Créer des armes'],
      correctAnswer: 'Retrouver sa sœur Vi',
      explanation: 'La principale motivation de Jinx est de retrouver sa sœur Vi après leur séparation.'
    },
    {
      questionText: 'Quel est le surnom de Vi en tant que combattante ?',
      options: ['La Faucheuse', 'La Brute', 'La Justicière', 'La Terreur'],
      correctAnswer: 'La Justicière',
      explanation: 'Vi est connue comme "La Justicière" en raison de son style de combat.'
    },
    {
      questionText: 'Qui développe la technologie Hextech avec Jayce ?',
      options: ['Silco', 'Vi', 'Viktor', 'Jinx'],
      correctAnswer: 'Viktor',
      explanation: 'Viktor collabore avec Jayce pour développer la technologie Hextech.'
    }
  ];

  questions: Question[] = this.shuffleArray(this.allQuestions).slice(0, 8);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem('quizState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);

        // Restaurer l'état à partir de localStorage
        this.currentQuestionIndex = parsedState.currentQuestionIndex || 0;
        this.score = parsedState.score || 0;
        this.showResult = parsedState.showResult || false;
        this.showExplanation = parsedState.showExplanation || false;

        // Restaurer les questions et les réponses de l'utilisateur
        this.questions = parsedState.questions || this.shuffleArray(this.allQuestions).slice(0, 8);
      } else {
        this.questions = this.shuffleArray(this.allQuestions).slice(0, 8);
      }
    }
  }

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.questions[this.currentQuestionIndex].userAnswer = this.selectedAnswer;
    this.showExplanation = true;

    this.saveState();
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = '';
    this.showExplanation = false;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult = true;
    }

    this.saveState();
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

    this.questions.forEach(question => question.userAnswer = undefined);
    this.questions = this.shuffleArray(this.allQuestions).slice(0, 8);

    // Supprimer l'état sauvegardé dans localStorage lors du redémarrage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('quizState');
    }
  }

  saveState() {
    if (isPlatformBrowser(this.platformId)) {
      const state = {
        currentQuestionIndex: this.currentQuestionIndex,
        score: this.score,
        questions: this.questions,
        showResult: this.showResult,
        showExplanation: this.showExplanation
      };
      localStorage.setItem('quizState', JSON.stringify(state));
    }
  }

  shuffleArray(array: Question[]): Question[] {
    return array.sort(() => Math.random() - 0.5);
  }
}

