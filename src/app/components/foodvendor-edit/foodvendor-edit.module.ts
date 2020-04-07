import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FoodvendorEditComponent } from './foodvendor-edit.component';




@NgModule({
  declarations: [FoodvendorEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FoodvendorEditComponent }]),
    FormsModule
  ],
  exports: [FoodvendorEditComponent, RouterModule]
})
export class FoodvendorEditModule { }
