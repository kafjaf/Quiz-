import { CommonModule } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button, Modal } from '@quiz-lock/shared-ui';
import { IdentityStore } from '@quiz-lock/identity-data-access';
import { QuizStore } from '@quiz-lock/quiz-data-access';
import { LucideAngularModule } from 'lucide-angular'; 
import { ThemeService } from '@quiz-lock/shared-util';

@Component({
  selector: 'ql-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule, Button, LucideAngularModule], //, Modal
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  readonly store = inject(IdentityStore);
  readonly quizStore = inject(QuizStore);
  public theme = inject(ThemeService);

  startQuiz = output<void>();
  tempPseudo = signal('');
   // Signal pour gérer le décompte (0 = pas de décompte)
  count = signal<number | string>(0);
  errorMessage = signal('');
  isShaking = signal(false);

   // OST Survival (Instance unique)
  private survivalMusic = new Audio('assets/audio/survival-hype.mp3');

  showFounderModal = signal(false);
  isFounder = signal(localStorage.getItem('ql_founder') === 'true');
  email = signal('');

 

  start() {
    const pseudoClean = this.tempPseudo().trim();
    
    if (pseudoClean.length >= 3) {
      this.errorMessage.set(''); // On efface l'erreur si tout est bon
      this.store.savePseudo(pseudoClean);
      this.runCountdown(); 
    } else {
      // LOGIQUE D'ERREUR PRO
      this.triggerError('Pseudo trop court (min. 3 car.)');
    }
  }

  private triggerError(msg: string) {
    this.errorMessage.set(msg);
    this.isShaking.set(true);

    // On arrête de secouer après 500ms
    setTimeout(() => this.isShaking.set(false), 500);

    // On efface le message après 3 secondes
    setTimeout(() => this.errorMessage.set(''), 3000);
  }

  private runCountdown() {
    let current = 3;
    this.count.set(current);


  this.survivalMusic.play();

    const interval = setInterval(() => {
      current--;
      if (current > 0) {
        this.count.set(current);
      } else if (current === 0) {
        this.count.set('GO !');
      } else {
        clearInterval(interval);
        this.quizStore.startQuiz();
        this.startQuiz.emit();
      }
    }, 1000);
  }

  onComingSoon() {
    alert(
      '🚀 La sauvegarde cloud arrive en v1.1 ! Ton score est actuellement sauvé sur ce téléphone.',
    );
  }

  onRecoverClick() {
    const pseudo = this.tempPseudo() || 'nouveau génie';
    const message = `Salut Erasme ! Je suis ${pseudo}. Je participe au Quiz Lock et je voulais savoir comment sauvegarder mon compte pour plus tard ?`;

    // Encode le message pour l'URL
    const encodedMessage = encodeURIComponent(message);

    // Redirige vers ton numéro (format international sans le +)
    // Remplace 24206XXXXXX par ton vrai numéro
    window.open(`https://wa.me/242056435216?text=${encodedMessage}`, '_blank');
  }

   private playHypeMusic() {
    this.survivalMusic.volume = 0.4;
    this.survivalMusic.play().catch(e => console.log("Audio bloqué par le navigateur"));
  }
}
