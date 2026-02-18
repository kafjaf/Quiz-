import { CommonModule } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { IdentityStore } from '@quiz-lock/identity-data-access';
import { QuizStore } from '@quiz-lock/quiz-data-access';
import { Button, ProgressBar } from '@quiz-lock/shared-ui';

@Component({
  selector: 'ql-quiz-game',
  standalone: true,
  imports: [CommonModule, ProgressBar, Button],
  templateUrl: './quiz-game.html',
  styleUrl: './quiz-game.css',
})
export class QuizGame {
  readonly store = inject(QuizStore);
  readonly identityStore = inject(IdentityStore);
  showLeaderboard = output<void>();

    // Signal pour la modale Premium
  isPremiumModalOpen = signal(false);

  openPremiumModal() {
    this.isPremiumModalOpen.set(true);
    // Senior Tip: On peut logger ici l'intérêt de l'utilisateur
    console.log("L'utilisateur est intéressé par le Premium");
  }

  

    shareOnWhatsApp() {
    const score = this.store.score();
    const total = this.store.questions().length;
    const pseudo = this.identityStore.pseudo();

    // Remplace par ton lien Vercel une fois déployé !
    const appUrl = 'https://quiz-lock.vercel.app'; 

    const message = `🔥 *DÉFI QUIZ LOCK* 🔥%0A%0A` +
                    `Je viens de faire un score de *${score}/${total}* ! 🏆%0A` +
                    `Qui peut battre *${pseudo}* ? 😎%0A%0A` +
                    `Joue gratuitement ici :%0A${appUrl}`;
    // On ouvre WhatsApp
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
}
