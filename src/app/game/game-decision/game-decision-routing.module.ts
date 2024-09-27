import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameDecisionPage } from './game-decision.page';

const routes: Routes = [
  {
    path: '',
    component: GameDecisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameDecisionPageRoutingModule {}
