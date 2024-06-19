import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import {
  loadFeaturesPage,
  loadHomePage,
  loadLoginPage,
  loadProfilePage,
  loadPublicPage,
  loadRankingsPage,
  loadRegisterPage,
} from './pages/exportDepends';

export const routes: Routes = [
  {
    path: '',
    loadComponent: loadFeaturesPage,
    children: [
      { path: '', loadComponent: loadHomePage },
      { path: 'rankings', loadComponent: loadRankingsPage },
      { path: 'players/:player_id', loadComponent: loadProfilePage },
    ],
  },
  {
    path: '',
    loadComponent: loadPublicPage,
    children: [
      { path: 'login', loadComponent: loadLoginPage },
      { path: 'register', loadComponent: loadRegisterPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
