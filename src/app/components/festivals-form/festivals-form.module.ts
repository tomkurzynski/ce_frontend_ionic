import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FestivalsFormComponent } from './festivals-form.component';



@NgModule({
  declarations: [FestivalsFormComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FestivalsFormComponent]
})
export class FestivalsFormModule { }
