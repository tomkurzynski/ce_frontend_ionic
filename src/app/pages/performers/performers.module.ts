import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformersPageRoutingModule } from './performers-routing.module';

import { PerformersPage } from './performers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformersPageRoutingModule
  ],
  declarations: [PerformersPage]
})
export class PerformersPageModule {}
