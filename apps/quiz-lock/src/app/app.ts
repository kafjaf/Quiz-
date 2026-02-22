import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Welcome, QuizGame, Intro } from '@quiz-lock/quiz-feature';
import { IdentityStore } from '@quiz-lock/identity-data-access';
import { QuizStore } from '@quiz-lock/quiz-data-access';
// import { Button } from "@quiz-lock/shared-ui";
import { LeaderboardFeature } from '@quiz-lock/leaderboard-feature';
import { SwUpdate } from '@angular/service-worker';
import { LucideAngularModule } from 'lucide-angular';

type AppView = 'intro' | 'welcome' | 'game' | 'leaderboard';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    Welcome,
    QuizGame,
    LeaderboardFeature,
    Intro,
    LucideAngularModule,
  ], //NxWelcome,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'quiz-lock';
  readonly quizStore = inject(QuizStore);
  readonly identityStore = inject(IdentityStore);
  private swUpdate = inject(SwUpdate);

  currentView = signal<AppView>(this.getInitialView());

  // Détection ultra-précise de l'iPhone + Safari
  showIosInstallManual = signal(false);

  constructor() {
    this.detectIosInstallation();
    // 1. LOGIQUE DE JEU : Si on a déjà un pseudo, on prépare le quiz
    if (this.identityStore.pseudo()) {
      this.quizStore.startQuiz();
    }

    // 2. LOGIQUE PWA : Vérification des mises à jour
    this.checkPwaUpdate();
  }

  // Le "cerveau" de l'installation
  deferredPrompt = signal<any>(null);
  isIos = signal(/iPad|iPhone|iPod/.test(navigator.userAgent));
  // isInStandaloneMode = signal(('standalone' in window.navigator) && ((window.navigator as any).standalone));

  isInStandaloneMode = signal(
    window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://'),
  );

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(e: any) {
    // 1. Empêcher Chrome d'afficher sa bannière moche par défaut
    e.preventDefault();
    // 2. Stocker l'événement pour plus tard
    this.deferredPrompt.set(e);
    console.log("✅ L'app est prête à être installée sur Android/PC");
  }

  async triggerInstall() {
    const prompt = this.deferredPrompt();
    if (!prompt) return;

    // Afficher la demande officielle
    prompt.prompt();

    // Attendre la réponse de l'utilisateur
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      this.deferredPrompt.set(null);
    }
  }

  private checkPwaUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((evt) => {
        if (evt.type === 'VERSION_READY') {
          // Ce message s'affichera dès que le nouveau code est téléchargé
          if (
            confirm(
              'Une nouvelle version de Quiz Lock est disponible. Voulez-vous mettre à jour ?',
            )
          ) {
            window.location.reload();
          }
        }
      });
    }
  }

  goToGame() {
    this.quizStore.startQuiz(); // On remet le quiz à zéro
    this.currentView.set('game');
  }

  private getInitialView(): AppView {
    if (!localStorage.getItem('ql_intro_seen')) return 'intro';
    return this.identityStore.pseudo() ? 'game' : 'welcome';
  }

  completeIntro() {
    localStorage.setItem('ql_intro_seen', 'true');
    this.currentView.set('welcome');
  }

  logout() {
    this.identityStore.clearIdentity();
    this.currentView.set('welcome');
  }

  private detectIosInstallation() {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone =
      'standalone' in window.navigator && (window.navigator as any).standalone;

    // On n'affiche l'aide que si c'est un iPhone ET que l'app n'est pas encore installée
    if (isIos && !isStandalone) {
      this.showIosInstallManual.set(true);
    }
  }
}
