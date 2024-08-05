import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectPlayerState = createFeatureSelector<PlayerState>('players');

export const selectPlayers = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.players
);

export const selectPlayerError = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.error
);
