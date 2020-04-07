import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodvendorViewPageRoutingModule } from './foodvendor-view-routing.module';

import { FoodvendorViewPage } from './foodvendor-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodvendorViewPageRoutingModule
  ],
  declarations: [FoodvendorViewPage]
})
export class FoodvendorViewPageModule {}
