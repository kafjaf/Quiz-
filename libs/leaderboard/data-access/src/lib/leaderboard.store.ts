import { computed } from '@angular/core';
import { signalStore, withState, withComputed } from '@ngrx/signals';
import { LeaderboardEntry } from '@quiz-lock/leaderboard-data-access';

const MOCK_LEADERS: LeaderboardEntry[] = [
  { rank: 1, pseudo: 'CongoWarrior', score: 100 },
  { rank: 2, pseudo: 'MangaMaster', score: 90 },
  { rank: 3, pseudo: 'KinshasaBoy', score: 80 },
  { rank: 4, pseudo: 'Fanta_Gamer', score: 70 },
  { rank: 5, pseudo: 'Nzuzi_Quiz', score: 60 },
];

export const LeaderboardStore = signalStore(
  { providedIn: 'root' },
//   withState({
//     leaders: MOCK_LEADERS,
//     isLoading: false
//   })
// );
withState({
    leaders: MOCK_LEADERS,
  }),
  withComputed((store) => ({
    // LA MAGIE EST ICI : On fusionne l'utilisateur avec les fantômes
    allEntries: computed(() => {
      // 1. Récupérer les infos de l'utilisateur réel
      const userScore = Number(localStorage.getItem('ql_best_score') || 0);
      const userPseudo = localStorage.getItem('ql_pseudo') || 'Moi';

      const me: LeaderboardEntry = {
        rank: 0,
        pseudo: userPseudo,
        score: userScore,
        isMe: true // Flag pour mettre en évidence dans l'UI
      };

      // 2. Fusionner, trier par score décroissant et recalculer les rangs
      return [...store.leaders(), me]
        .sort((a, b) => b.score - a.score)
        .map((player, index) => ({
          ...player,
          rank: index + 1 // Le rang dépend de la position après le tri
        }));
    })
  }))
);