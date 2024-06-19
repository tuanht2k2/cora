import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../layout/menu/menu.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    MenuComponent,
    HeaderComponent,
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
