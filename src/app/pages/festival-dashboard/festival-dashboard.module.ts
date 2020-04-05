import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalDashboardPageRoutingModule } from './festival-dashboard-routing.module';

import { FestivalDashboardPage } from './festival-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivalDashboardPageRoutingModule
  ],
  declarations: [FestivalDashboardPage]
})
export class FestivalDashboardPageModule {}
