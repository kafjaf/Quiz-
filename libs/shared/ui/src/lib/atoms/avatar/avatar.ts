import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ql-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
   // Le pseudo de l'utilisateur
  pseudo = input.required<string>();
  // La taille (sm pour la liste, lg pour le podium)
  size = input<'sm' | 'md' | 'lg'>('md');

  // On prend la première lettre
  initial = computed(() => this.pseudo().charAt(0).toUpperCase());
  
  // Algorithme de couleur consistante basée sur le pseudo
  color = computed(() => {
    const colors = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    let hash = 0;
    for (let i = 0; i < this.pseudo().length; i++) {
      hash = this.pseudo().charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  });

  sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-xl',
    lg: 'w-24 h-24 text-4xl border-4 border-white/20'
  };
}
