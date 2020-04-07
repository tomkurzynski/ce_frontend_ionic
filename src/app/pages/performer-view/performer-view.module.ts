import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformerViewPageRoutingModule } from './performer-view-routing.module';

import { PerformerViewPage } from './performer-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformerViewPageRoutingModule
  ],
  declarations: [PerformerViewPage]
})
export class PerformerViewPageModule {}
