import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformersPage } from './performers.page';

const routes: Routes = [
  {
    path: '',
    component: PerformersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformersPageRoutingModule {}
