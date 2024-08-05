import { createAction, props } from '@ngrx/store';
import { Player } from '../../data/model/player';

export const loadPlayer = createAction('[Player] Load Player');
export const loadPlayerSuccess = createAction(
  '[Player] Load Player Success',
  props<{ players: Player[] }>()
);
export const loadPlayerFailure = createAction(
  '[Player] Load Player Failure',
  props<{ error: any }>()
);
