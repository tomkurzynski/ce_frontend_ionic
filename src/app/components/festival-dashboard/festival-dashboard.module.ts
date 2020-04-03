import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FestivalDashboardComponent } from '../festival-dashboard/festival-dashboard.component';
import { DashboardMenuComponent } from '../dashboard-menu/dashboard-menu.component';


@NgModule({
  declarations: [FestivalDashboardComponent, DashboardMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FestivalDashboardComponent}])
  ]
})
export class FestivalDashboardModule { }
