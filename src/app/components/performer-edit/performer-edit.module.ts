import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerformerEditComponent } from './performer-edit.component';



@NgModule({
  declarations: [PerformerEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [PerformerEditComponent, RouterModule]
})
export class PerformerEditModule { }
