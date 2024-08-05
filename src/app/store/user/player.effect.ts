import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PlayerActions from './player.action';

@Injectable()
export class PlayerEffect {
  // loadPlayer$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PlayerActions.loadPlayer),
  //     mergeMap(() =>
  //       // this.userService.getAll().pipe(
  //       //   map(users => loadPla.loadUsersSuccess({ users })),
  //       //   catchError(error => of(loadPla.loadUsersFailure({ error })))
  //       // )
  //     )
  //   )
  // );

  constructor(private actions$: Actions) // private userService: UserService
  {}
}
