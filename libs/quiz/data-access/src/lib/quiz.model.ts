export interface Question {
  id: number;
  label: string;
  options: string[];
  correctAnswer: number; // Index de la bonne réponse (0, 1, 2 ou 3)
  category: string;
}

export type GameStatus = 'idle' | 'playing' | 'break' | 'game-over'; // idle = 