import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Welcome, QuizGame, Intro } from '@quiz-lock/quiz-feature';
import { IdentityStore } from '@quiz-lock/identity-data-access';
import { QuizStore } from '@quiz-lock/quiz-data-access';
// import { Button } from "@quiz-lock/shared-ui";
import { LeaderboardFeature } from '@quiz-lock/leaderboard-feature';
import { SwUpdate } from '@angular/service-worker';

type AppView = 'intro' | 'welcome' | 'game' | 'leaderboard';
@Component({
  standalone: true,
  imports: [RouterModule, Welcome, QuizGame, LeaderboardFeature, Intro], //NxWelcome,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'quiz-lock';
  readonly quizStore = inject(QuizStore);
  readonly identityStore = inject(IdentityStore);
  private swUpdate = inject(SwUpdate);

  // On initialise la vue selon si on a déjà un pseudo ou pas
  // currentView = signal<AppView>(this.identityStore.pseudo() ? 'game' : 'welcome');

  currentView = signal<AppView>(this.getInitialView());

  constructor() {
    // 1. LOGIQUE DE JEU : Si on a déjà un pseudo, on prépare le quiz
    if (this.identityStore.pseudo()) {
      this.quizStore.startQuiz();
    }

    // 2. LOGIQUE PWA : Vérification des mises à jour
    this.checkPwaUpdate();
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

  // private getInitialView(): AppView {
  //   const introSeen = localStorage.getItem('ql_intro_seen');
  //   if (!introSeen) return 'intro';

  //   // Si déjà vu, on regarde s'il a déjà un pseudo
  //   return this.identityStore.pseudo() ? 'game' : 'welcome';
  // }

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
}
