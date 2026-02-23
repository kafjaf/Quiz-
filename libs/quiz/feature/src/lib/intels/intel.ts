import { Component, inject, output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular'; 
import { CommonModule } from '@angular/common'; 
import { ThemeService } from '@quiz-lock/shared-util';


@Component({
  selector: 'ql-intel',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './intel.html',
  styleUrl: './intel.css',
})
export class Intel {
  public theme = inject(ThemeService);

   // ✅ Définition de la "porte de sortie" pour AppComponent
  startFree = output<void>();

  // ✅ Méthode appelée par le clic dans le HTML
  startFreeMode() {
    this.startFree.emit();
  }

}
