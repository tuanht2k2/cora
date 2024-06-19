import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Match } from '../../../../data/model/match';
import { RouterModule } from '@angular/router';
import { getDateFormattedService } from '../../../../utils/exportDepends';

@Component({
  selector: 'app-profile-match-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-match-history.component.html',
  styleUrl: './profile-match-history.component.scss',
})
export class ProfileMatchHistoryComponent {
  @Input() matchHistory: Match[] | undefined = [];
  @Input() playerId: string | undefined = '';

  isWinner(matchIndex: number) {
    if (!this.matchHistory) return false;
    return (
      this.matchHistory[matchIndex].winnerPlayer?.playerId === this.playerId
    );
  }

  getDateFormatted(date: Date | undefined) {
    return date ? getDateFormattedService(date) : 'Chưa xác định';
  }
}
