import { Component, OnInit } from '@angular/core';
import { Player } from '../../../data/model/player';
import { playerMock } from '../profile/mock-data/player-mock';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { MatchEnum } from '../../../data/enum/matchEnum';
import { getIconSrcService } from '../../../utils/exportDepends';
import { Observable } from 'rxjs';

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
export class HomeComponent implements OnInit {
  player: Player = playerMock;

  findMatch(matchType: MatchEnum.MatchType): void {}

  getIconSrc(iconName: string) {
    return getIconSrcService(iconName);
  }

  carouselItems: carouselItem[] = [
    { title: 'Đấu xếp hạng', bgSrc: '', matchType: MatchEnum.MatchType.RANK },
    { title: 'Giao hữu', bgSrc: '', matchType: MatchEnum.MatchType.FRIENDLY },
  ];

  ngOnInit(): void {
    const observable = new Observable(function subscribe(observer) {
      const id = setTimeout(() => {
        observer.next('hello next');
        observer.complete();
      }, 3000);
      return function ubSubscribe() {
        clearTimeout(id);
      };
    });

    observable.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}
