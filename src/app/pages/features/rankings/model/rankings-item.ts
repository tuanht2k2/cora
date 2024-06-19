export enum Ranking {
  'BRONZE_I',
  'BRONZE_II',
  'BRONZE_III',
  'SILVER_I',
  'SILVER_II',
  'SILVER_III',
  'GOLD_I',
  'GOLD_II',
  'GOLD_III',
  'PLATINUM_I',
  'PLATINUM_II',
  'PLATINUM_III',
  'DIAMOND_I',
  'DIAMOND_II',
  'DIAMOND_III',
  'MASTER',
}

export interface RankingItem {
  playerId?: string;
  displayName?: string;
  profileImage?: string;
  score?: number;
  ranking?: Ranking;
  level?: number;
}
