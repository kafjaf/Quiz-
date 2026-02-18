import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ql-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {variant = input<'primary' | 'secondary'>('primary');
  clicked = output<void>();

  variants = {
    primary: 'bg-blue-600 text-white shadow-blue-500/30 hover:bg-blue-700',
    secondary: 'bg-transparent border border-gray-600 text-gray-300 hover:bg-white/5',
  };}
