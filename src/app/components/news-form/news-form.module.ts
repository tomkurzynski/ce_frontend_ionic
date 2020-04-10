import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFormComponent } from './news-form.component';

@NgModule({
  declarations: [NewsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NewsFormComponent }])
  ],
  exports: [
    NewsFormComponent, 
    RouterModule
  ]
})
export class NewsFormModule { }
