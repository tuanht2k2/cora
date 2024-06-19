import { Component } from '@angular/core';
import { Player } from '../../../data/model/player';
import { playerMock } from '../profile/mock-data/player-mock';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { MatchEnum } from '../../../data/enum/matchEnum';
import { getIconSrcService } from '../../../utils/exportDepends';

interface carouselItem {
  title?: string;
  bgSrc?: string;
  btnClass?: string;
  btnIcon?: string;
  matchType?: MatchEnum.MatchType;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  player: Player = playerMock;

  findMatch(matchType: MatchEnum.MatchType): void {}

  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }

  carouselItems: carouselItem[] = [
    { title: 'Đấu xếp hạng', bgSrc: '', matchType: MatchEnum.MatchType.RANK },
    { title: 'Giao hữu', bgSrc: '', matchType: MatchEnum.MatchType.FRIENDLY },
  ];
}
