import { createReducer, on } from '@ngrx/store';
import { Player } from '../../data/model/player';
import * as PlayerAction from './player.action';

export interface PlayerState {
  players: Player[];
  error: any;
}

export const initialState: PlayerState = {
  players: [],
  error: null,
};

export const playerReducer = createReducer(
  initialState,
  on(PlayerAction.loadPlayerSuccess, (state, { players }) => ({
    ...state,
    players,
    error: null,
  }))
);
