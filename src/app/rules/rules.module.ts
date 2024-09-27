import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Assurez-vous que ce module est importé

import { RulesPageRoutingModule } from './rules-routing.module';

import { RulesPage } from './rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Assurez-vous que ce module est inclus ici
    RulesPageRoutingModule
  ],
  declarations: [RulesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class RulesPageModule {}
