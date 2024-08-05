import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { getIconSrcService } from '../../utils/exportDepends';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }
}
