import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // On regarde si un thème est déjà sauvé, sinon on met sombre par défaut
  darkMode = signal<boolean>(localStorage.getItem('ql_theme') !== 'light');

  constructor() {
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode.update(v => !v);
    localStorage.setItem('ql_theme', this.darkMode() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}