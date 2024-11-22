import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameRevealPageRoutingModule } from './game-reveal-routing.module';

import { GameRevealPage } from './game-reveal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameRevealPageRoutingModule
  ],
  declarations: [GameRevealPage]
})
export class GameRevealPageModule {}
