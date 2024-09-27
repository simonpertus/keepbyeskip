import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameDuelPageRoutingModule } from './game-duel-routing.module';

import { GameDuelPage } from './game-duel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameDuelPageRoutingModule
  ],
  declarations: [GameDuelPage]
})
export class GameDuelPageModule {}
