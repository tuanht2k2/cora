import { MatchEnum } from '../../../../data/enum/matchEnum';
import { RankingEnum } from '../../../../data/enum/rankingEnum';
import { ItemType, ItemValue } from '../../../../data/model/item';
import { Player } from '../../../../data/model/player';

export const playerMock: Player = {
  playerId: 'eeff2c',
  playerName: 'tuanht2k2',
  email: 'tuanht2k2@gmail.com',
  displayName: 'tuandc',
  profileImage: 'https://avatars.githubusercontent.com/u/111446155?v=4',
  score: 176,
  level: 22,
  ranking: RankingEnum.BRONZE_II,
  items: [
    {
      itemType: ItemType.BATTLESHIP,
      items: [
        {
          itemId: 'item1',
          itemName: 'Shadow',
          thumbnailImage: 'assets/images/items/battle_ship/shadow.png',
          isOwned: false,
          itemType: ItemType.BATTLESHIP,
          value: ItemValue.S_PLUS,
          price: {
            coin: 1000,
            diamond: 20,
          },
          isUpgradeable: true,
          level: 1,
        },
        {
          itemId: 'item2',
          itemName: 'Shadow 2',
          thumbnailImage: 'assets/images/items/battle_ship/shadow.png',
          isOwned: true,
          itemType: ItemType.BATTLESHIP,
          value: ItemValue.S,
          price: {
            coin: 0,
            diamond: 0,
          },
          isUpgradeable: true,
          level: 2,
        },
        {
          itemId: 'item2',
          itemName: 'Shadow 2',
          thumbnailImage: 'assets/images/items/battle_ship/shadow.png',
          isOwned: false,
          itemType: ItemType.BATTLESHIP,
          value: ItemValue.A,
          price: {
            coin: 0,
            diamond: 0,
          },
          isUpgradeable: true,
          level: 5,
        },
        {
          itemId: 'item2',
          itemName: 'Shadow 2',
          thumbnailImage: 'assets/images/items/battle_ship/shadow.png',
          isOwned: true,
          itemType: ItemType.BATTLESHIP,
          value: ItemValue.D,
          price: {
            coin: 0,
            diamond: 0,
          },
          level: 1,
        },
      ],
    },
  ],
  matchesOverview: {
    friendlyMatch: {
      playedMatches: 139,
      lostMatches: 31,
      wonMatches: 108,
      winRate: 77.7,
    },
    rankMatches: {
      playedMatches: 139,
      lostMatches: 31,
      wonMatches: 108,
      winRate: 77.7,
    },
    all: {
      playedMatches: 139,
      lostMatches: 31,
      wonMatches: 108,
      winRate: 77.7,
    },
  },
  matchHistory: [
    {
      matchId: '1y2',
      matchType: 'FRIENDLY',
      winnerPlayer: {
        playerId: 'eeff2c',
        displayName: 'tuandc',
        profileImage: 'https://avatars.githubusercontent.com/u/111446155?v=4',
      },
      loserPlayer: {
        playerId: 'eeff2csdf',
        displayName: 'dungctd',
        profileImage:
          'https://cdn.dribbble.com/users/16856335/avatars/small/e73e7efd90bc962fcb8c64cb5deb2454.jpg?1688889736',
      },
      status: MatchEnum.MatchStatus.FINISHED,
      betAmount: 0,
      finishedAt: new Date(),
    },
    {
      matchId: '1y2',
      matchType: 'RANK',
      winnerPlayer: {
        playerId: 'eeff2csdf',
        displayName: 'dungctd',
        profileImage:
          'https://cdn.dribbble.com/users/16856335/avatars/small/e73e7efd90bc962fcb8c64cb5deb2454.jpg?1688889736',
      },
      loserPlayer: {
        playerId: 'eeff2c',
        displayName: 'tuandc',
        profileImage: 'https://avatars.githubusercontent.com/u/111446155?v=4',
      },
      status: MatchEnum.MatchStatus.FINISHED,
      betAmount: 1826,
      finishedAt: new Date(),
    },
  ],
};
