import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameRevealPage } from './game-reveal.page';

const routes: Routes = [
  {
    path: '',
    component: GameRevealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRevealPageRoutingModule {}
