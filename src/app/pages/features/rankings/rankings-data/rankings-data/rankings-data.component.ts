import { Component, Input } from '@angular/core';
import { Ranking, RankingItem } from '../../model/rankings-item';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { getRankingNameService } from '../../../../../utils/exportDepends';
import { RankingEnum } from '../../../../../data/enum/rankingEnum';

@Component({
  selector: 'app-rankings-data',
  standalone: true,
  imports: [TableModule, RouterLink],
  templateUrl: './rankings-data.component.html',
  styleUrl: './rankings-data.component.scss',
})
export class RankingsDataComponent {
  @Input() data: RankingItem[] = [];

  getRankingName(rankingCode: RankingEnum) {
    return getRankingNameService(rankingCode);
  }
}
