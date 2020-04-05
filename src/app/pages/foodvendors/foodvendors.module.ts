import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodvendorsPageRoutingModule } from './foodvendors-routing.module';

import { FoodvendorsPage } from './foodvendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodvendorsPageRoutingModule
  ],
  declarations: [FoodvendorsPage]
})
export class FoodvendorsPageModule {}
