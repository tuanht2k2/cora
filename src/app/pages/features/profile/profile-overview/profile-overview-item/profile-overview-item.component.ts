import { Component, Input } from '@angular/core';

export interface OverviewItem {
  color?: 'SUCCESS' | 'ERROR' | 'WARNING' | 'PRIMARY' | 'SECONDARY' | '';
  icon?: string;
  header?: string;
  content?: any;
}

@Component({
  selector: 'app-profile-overview-item',
  standalone: true,
  imports: [],
  templateUrl: './profile-overview-item.component.html',
  styleUrl: './profile-overview-item.component.scss',
})
export class ProfileOverviewItemComponent {
  @Input() data: OverviewItem = {};
}
