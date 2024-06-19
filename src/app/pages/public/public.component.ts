import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {}
