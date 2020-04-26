import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomFormComponent } from './room-form.component'
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RoomFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RoomFormComponent }]),
    FormsModule
  ],
  exports: [RoomFormComponent, RouterModule]
})
export class RoomFormModule { }

