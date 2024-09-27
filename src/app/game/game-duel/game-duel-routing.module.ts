import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameDuelPage } from './game-duel.page';

const routes: Routes = [
  {
    path: '',
    component: GameDuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameDuelPageRoutingModule {}
