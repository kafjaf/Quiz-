import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withComputed,
  withHooks,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import { Question, GameStatus } from './quiz.model';
import { MOCK_QUESTIONS } from './quiz.mock';

const TIME_PER_QUESTION = 7; // secondes

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState({
    questions: MOCK_QUESTIONS as Question[],
    currentIndex: 0,
    score: 0,
    status: 'idle' as GameStatus,
    timeLeft: TIME_PER_QUESTION,
    intervalId: null as any,
  }),
  withComputed((store) => ({
    currentQuestion: computed(() => store.questions()[store.currentIndex()]),
    isLastQuestion: computed(
      () => store.currentIndex() === store.questions().length - 1,
    ),
  })),
  withMethods((store) => {
    const stopTimer = () => {
      if (store.intervalId()) {
        clearInterval(store.intervalId());
        patchState(store, { intervalId: null });
      }
    };

    return {
      startQuiz() {
        patchState(store, {
          status: 'playing',
          currentIndex: 0,
          score: 0,
          timeLeft: TIME_PER_QUESTION,
        });
        this.startCountdown();
      },
      startCountdown() {
        stopTimer();
        patchState(store, { timeLeft: TIME_PER_QUESTION });
        const id = setInterval(() => {
          if (store.timeLeft() > 0) {
            patchState(store, { timeLeft: store.timeLeft() - 1 });
          } else {
            this.answerQuestion(-1);
          }
        }, 1000);
        patchState(store, { intervalId: id });
      },
      answerQuestion(selectedIndex: number) {
        stopTimer();
        const isCorrect =
          selectedIndex === store.currentQuestion().correctAnswer;
        if (isCorrect) {
          patchState(store, (state) => ({ score: state.score + 1 }));
        }

        const nextIndex = store.currentIndex() + 1;
        const isBreakPoint =
          nextIndex % 25 === 0 && nextIndex !== 0 && nextIndex < 100;

        if (store.isLastQuestion()) {
          patchState(store, { status: 'game-over' });
          const currentBest = Number(
            localStorage.getItem('ql_best_score') || 0,
          );
          if (store.score() > currentBest) {
            localStorage.setItem('ql_best_score', store.score().toString());
          }
        } else if (isBreakPoint) {
          // On met le jeu en pause de survie
          patchState(store, { status: 'break', currentIndex: nextIndex });
        }  else {
          // QUESTION SUIVANTE
          patchState(store, { currentIndex: nextIndex });
          this.startCountdown();
        }
      },
      resumeQuiz() {
        // Relancer après la pause
        patchState(store, { status: 'playing' });
        this.startCountdown();
      },
      reset() {
        stopTimer();
        patchState(store, {
          status: 'idle',
          currentIndex: 0,
          score: 0,
          timeLeft: TIME_PER_QUESTION,
        });
      },
    };
  }),
  withHooks({
    onDestroy(store) {
      if (store.intervalId()) clearInterval(store.intervalId());
    },
  }),
);
