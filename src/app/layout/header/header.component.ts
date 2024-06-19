import { Component } from '@angular/core';
import { getIconSrcService } from '../../utils/exportDepends';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }
}
