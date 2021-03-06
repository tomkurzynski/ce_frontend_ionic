import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FestivalsFormComponent } from './festivals-form.component';



@NgModule({
  declarations: [FestivalsFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FestivalsFormComponent }])
  ],
  exports: [FestivalsFormComponent, RouterModule]
})
export class FestivalsFormModule { }
