import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface IdentityState {
  pseudo: string;
}

const initialState: IdentityState = {
  pseudo: localStorage.getItem('ql_pseudo') || '',
};

export const IdentityStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    savePseudo(newPseudo: string) {
      localStorage.setItem('ql_pseudo', newPseudo);
      patchState(store, { pseudo: newPseudo });
    },
    clearIdentity() {
      localStorage.removeItem('ql_pseudo');
      patchState(store, { pseudo: '' });
    },
  })),
);