import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformerFormComponent } from '../performer-form/performer-form.component';

@NgModule({
  declarations: [PerformerFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PerformerFormComponent}]),
    FormsModule,
    IonicModule
  ],
  exports: [
    PerformerFormComponent, RouterModule
  ]
})
export class PerformerFormModule { }
