import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsEditComponent } from './news-edit.component';



@NgModule({
  declarations: [NewsEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NewsEditComponent }]),
    FormsModule
  ],
  exports: [NewsEditComponent, RouterModule]
})
export class NewsEditModule { }
