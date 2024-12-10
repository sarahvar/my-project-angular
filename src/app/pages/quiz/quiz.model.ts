
export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  userAnswer?: string; // Optionnel pour stocker la réponse de l'utilisateur
}
