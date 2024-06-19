import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TableModule } from 'primeng/table';
import { mockRankings } from './mock-data/rankings-mock';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RankingItem } from './model/rankings-item';
import { RouterModule } from '@angular/router';
import { RankingsDataComponent } from './rankings-data/rankings-data/rankings-data.component';
import { PaginatorModule } from 'primeng/paginator';
import { getIconSrcService } from '../../../utils/exportDepends';

@Component({
  selector: 'app-rankings',
  standalone: true,

  imports: [
    CommonModule,
    TableModule,
    TabViewModule,
    PanelModule,
    ButtonModule,
    RouterModule,
    RankingsDataComponent,
    PaginatorModule,
  ],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RankingsComponent {
  rankings: RankingItem[] = mockRankings;
  page = 0;
  pageSize = 10;

  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }
}
