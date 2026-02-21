import { CommonModule } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { IdentityStore } from '@quiz-lock/identity-data-access';
import { QuizStore } from '@quiz-lock/quiz-data-access';
import { Button, ProgressBar } from '@quiz-lock/shared-ui';
import { LucideAngularModule } from 'lucide-angular'; 


@Component({
  selector: 'ql-quiz-game',
  standalone: true,
  imports: [CommonModule, ProgressBar, Button, LucideAngularModule],
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
    const appUrl = 'https://quiz-vert-two.vercel.app/'; 

    const message = `🔥 *DÉFI QUIZ LOCK* 🔥%0A%0A` +
                    `Je viens de faire un score de *${score}/${total}* ! 🏆%0A` +
                    `Qui peut battre *${pseudo}* ? 😎%0A%0A` +
                    `Joue gratuitement ici :%0A${appUrl}`;
    // On ouvre WhatsApp
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  nativeShare() {
  const score = this.store.score();
  const text = `🔥 DÉFI QUIZ LOCK 🔥\nJ'ai fait ${score}/100 ! Qui peut me battre ? 😎 #QuizLock #Afrotaku`;
  const url = 'https://quiz-lock.vercel.app';

  if (navigator.share) {
    navigator.share({
      title: 'DÉFI QUIZ LOCK',
      text: text,
      url: url,
    }).then(() => console.log('Partage réussi'))
      .catch((error) => console.log('Erreur de partage', error));
  } else {
    // Fallback si le navigateur ne supporte pas (rare sur mobile)
    this.shareOnWhatsApp();
  }
}

shareOnFB() {
  const url = 'https://quiz-lock.vercel.app';
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}
}
