import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FestivalsEditComponent } from './festivals-edit.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [FestivalsEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FestivalsEditComponent }]),
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  exports: [FestivalsEditComponent, RouterModule]
})
export class FestivalsEditModule { }
