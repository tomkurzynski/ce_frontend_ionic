import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformerViewPage } from './performer-view.page';

const routes: Routes = [
  {
    path: '',
    component: PerformerViewPage
  },
  {
    path: '/performer/:id',
    component: PerformerViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformerViewPageRoutingModule {}
