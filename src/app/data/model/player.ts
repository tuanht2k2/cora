import { RankingEnum } from '../enum/rankingEnum';
import { GroupItem, Item } from './item';
import { Match } from './match';

export interface Player {
  playerId?: string;
  playerName?: string;
  email?: string;
  password?: string;
  displayName?: string;
  profileImage?: string;
  score?: number;
  level?: number;
  items?: GroupItem[];
  ranking?: RankingEnum;
  matchHistory?: Match[];
  matchesOverview?: {
    rankMatches?: {
      playedMatches?: number;
      wonMatches?: number;
      lostMatches?: number;
      winRate?: number;
    };
    friendlyMatch?: {
      playedMatches?: number;
      wonMatches?: number;
      lostMatches?: number;
      winRate?: number;
    };
    all?: {
      playedMatches?: number;
      wonMatches?: number;
      lostMatches?: number;
      winRate?: number;
    };
  };
}
