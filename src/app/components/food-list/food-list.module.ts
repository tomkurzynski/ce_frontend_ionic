import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodListComponent } from '../food-list/food-list.component';


@NgModule({
  declarations: [FoodListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [FoodListComponent, RouterModule]
})
export class FoodListModule { }
