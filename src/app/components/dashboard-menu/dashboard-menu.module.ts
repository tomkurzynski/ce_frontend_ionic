import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from '../dashboard-menu/dashboard-menu.component';
import { MenuController } from '@ionic/angular';



@NgModule({
  declarations: [DashboardMenuComponent],
  imports: [
    CommonModule,
    DashboardMenuComponent, 
    MenuController
  ]
})
export class DashboardMenuModule { }
