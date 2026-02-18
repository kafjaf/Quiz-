import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ql-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
   current = input.required<number>();
  total = input.required<number>();

  percentage = computed(() => (this.current() / this.total()) * 100);
}
