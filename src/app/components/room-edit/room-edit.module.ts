import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomEditComponent } from './room-edit.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RoomEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RoomEditComponent }]),
    FormsModule
  ],
  exports: [RoomEditComponent, RouterModule]
})
export class RoomEditModule { }
