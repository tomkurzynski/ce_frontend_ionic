import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalDashboardPage } from './festival-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalDashboardPageRoutingModule { }
