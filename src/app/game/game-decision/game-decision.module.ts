import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameDecisionPageRoutingModule } from './game-decision-routing.module';

import { GameDecisionPage } from './game-decision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameDecisionPageRoutingModule
  ],
  declarations: [GameDecisionPage]
})
export class GameDecisionPageModule {}
