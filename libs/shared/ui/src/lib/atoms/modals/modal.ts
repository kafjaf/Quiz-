import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ql-modal',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {}
