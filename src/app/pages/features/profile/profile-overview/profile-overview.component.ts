import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player } from '../../../../data/model/player';
import {
  OverviewItem,
  ProfileOverviewItemComponent,
} from './profile-overview-item/profile-overview-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [ProfileOverviewItemComponent, CommonModule],
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss'],
})
export class ProfileOverviewComponent implements OnChanges {
  @Input() player: Player | null = null;
  rankMatch: OverviewItem[] = [];
  friendlyMatch: OverviewItem[] = [];
  allMatch: OverviewItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player'] && this.player) {
      this.updateMatchOverviews();
    }
  }

  private updateMatchOverviews(): void {
    this.rankMatch = [
      {
        icon: 'pi pi-bolt text-orange-500',
        header: 'Số trận đã đấu',
        content: this.player?.matchesOverview?.rankMatches?.playedMatches || '',
      },
      {
        icon: 'pi pi-trophy text-green-500',
        header: 'Số trận thắng',
        content: this.player?.matchesOverview?.rankMatches?.wonMatches || '',
      },
      {
        icon: 'pi pi-asterisk text-red-500',
        header: 'Số trận thua',
        content: this.player?.matchesOverview?.rankMatches?.lostMatches || '',
      },
      {
        icon: 'pi pi-percentage text-yellow-500',
        header: 'Tỉ lệ thắng',
        content: this.player?.matchesOverview?.rankMatches?.winRate + '%' || '',
      },
    ];

    this.friendlyMatch = [
      {
        icon: 'pi pi-bolt text-orange-500',
        header: 'Số trận đã đấu',
        content:
          this.player?.matchesOverview?.friendlyMatch?.playedMatches || '',
      },
      {
        icon: 'pi pi-trophy text-green-500',
        header: 'Số trận thắng',
        content: this.player?.matchesOverview?.friendlyMatch?.wonMatches || '',
      },
      {
        icon: 'pi pi-asterisk text-red-500',
        header: 'Số trận thua',
        content: this.player?.matchesOverview?.friendlyMatch?.lostMatches || '',
      },
      {
        icon: 'pi pi-percentage text-yellow-500',
        header: 'Tỉ lệ thắng',
        content:
          this.player?.matchesOverview?.friendlyMatch?.winRate + '%' || '',
      },
    ];

    this.allMatch = [
      {
        icon: 'pi pi-bolt text-orange-500',
        header: 'Số trận đã đấu',
        content: this.player?.matchesOverview?.all?.playedMatches || '',
      },
      {
        icon: 'pi pi-trophy text-green-500',
        header: 'Số trận thắng',
        content: this.player?.matchesOverview?.all?.wonMatches || '',
      },
      {
        icon: 'pi pi-asterisk text-red-500',
        header: 'Số trận thua',
        content: this.player?.matchesOverview?.all?.lostMatches || '',
      },
      {
        icon: 'pi pi-percentage text-yellow-500',
        header: 'Tỉ lệ thắng',
        content: this.player?.matchesOverview?.all?.winRate + '%' || '',
      },
    ];
  }
}
