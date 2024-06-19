import { Component, OnInit } from '@angular/core';
import { Player } from '../../../data/model/player';
import { playerMock } from './mock-data/player-mock';
import { TabViewModule } from 'primeng/tabview';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileMatchHistoryComponent } from './profile-match-history/profile-match-history.component';
import { getRankingNameService } from '../../../utils/exportDepends';
import { RankingEnum } from '../../../data/enum/rankingEnum';
import { InventoryComponent } from '../common/inventory/inventory.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TabViewModule,
    ProfileOverviewComponent,
    ProfileMatchHistoryComponent,
    InventoryComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  player: Player = playerMock;

  getRankingName(rankingCode: RankingEnum | undefined) {
    if (!rankingCode) return 'Chưa xác định';
    return getRankingNameService(rankingCode);
  }
}
