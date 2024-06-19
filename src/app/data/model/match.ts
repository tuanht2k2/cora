import { MatchEnum } from '../enum/matchEnum';
import { Player } from './player';

export interface Match {
  matchId?: string;
  matchType?: 'FRIENDLY' | 'RANK';
  winnerPlayer?: Player;
  loserPlayer?: Player;
  status?: MatchEnum.MatchStatus;
  betAmount?: number;
  finishedAt?: Date;
}
