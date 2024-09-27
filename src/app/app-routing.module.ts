import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesPageModule)
  },
  {
    path: 'game-decision',
    loadChildren: () => import('./game/game-decision/game-decision.module').then( m => m.GameDecisionPageModule)
  },
  {
    path: 'game-duel',
    loadChildren: () => import('./game/game-duel/game-duel.module').then( m => m.GameDuelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
