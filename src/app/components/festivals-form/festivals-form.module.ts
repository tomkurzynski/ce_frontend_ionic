import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FestivalsFormComponent } from './festivals-form.component';



@NgModule({
  declarations: [FestivalsFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [FestivalsFormComponent, RouterModule]
})
export class FestivalsFormModule { }
