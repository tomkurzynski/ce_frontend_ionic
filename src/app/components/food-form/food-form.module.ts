import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFormComponent } from '../food-form/food-form.component';

@NgModule({
  declarations: [FoodFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FoodFormComponent}]),
    FormsModule,
    IonicModule
  ],
  exports: [
    FoodFormComponent, RouterModule
  ]
})
export class FoodFormModule { }
