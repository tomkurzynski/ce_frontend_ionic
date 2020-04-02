import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FestivalsListComponent } from '../festivals-list/festivals-list.component'

@NgModule({
  declarations: [FestivalsListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [FestivalsListComponent, RouterModule]
})
export class FestivalsListModule { }
