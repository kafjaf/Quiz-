import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { Button } from '@quiz-lock/shared-ui';
import { LucideAngularModule } from 'lucide-angular'; 


@Component({
  selector: 'ql-intro',
  standalone : true,
  imports: [CommonModule, LucideAngularModule], //, Button
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
   // Signal de sortie pour notifier l'App qu'on a fini l'intro
  finish = output<void>();

  finishIntro() {
    this.finish.emit();
  }
}
